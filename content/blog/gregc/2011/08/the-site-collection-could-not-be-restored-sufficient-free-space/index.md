---
title: "The site collection could not be restored...sufficient free space"
date: "2011-08-16"
author: gregc
---

Recently I came across the dreaded error below while restoring a production backup into a development / test environment using stsadm.exe -o restore.

> "The site collection could not be restored. If this problem persists, please make sure the content databases are available and have sufficient free space."

First a bit of background on the backup package: it was a measly 1.34GB in total size.  Not even what I would consider to be medium when it comes to SharePoint site collections.  The target environment was 3 servers with one dedicated SQL server (running SQL Server 2008 R2), an app server and WFE (MOSS 2007 build 12.0.0.6529).  Database storage volume on the SQL server was 100GB with 80GB free.  I thought this should be plenty.

So, when I first ran across the above error I did the simple things:

- Checked the hard disk space on the SQL server - all volumes
- Verified that the target content database was available
- Checked the hard disk space on the remainder of the farm servers

When none of those proved fruitful I did what all SharePoint folks do - consulted Google!  I found many interesting suggestions, some of which probably work(ed) in other situations, but failed for me:

- I found stopping / restarting Windows SharePoint Services Timer service & iisreset [here](http://www.networksteve.com/enterprise/topic.php/Stsadm_Restore_issue/?TopicId=4731&Posts=1 "here")
- The not-so-helpful [KB926061](http://support.microsoft.com/kb/926061) article
- Monitoring various disks for growth during the restore from [here](http://social.technet.microsoft.com/Forums/en/sharepointadmin/thread/7a9ec8b0-7f7e-4bfa-89fa-7c0e6cb840de) and this prompted me to look into disk I/O which was ultimately the cause

After watching all my disks (on db, app, and wfe), I decided to start looking into disk I/O on the SQL box.  I noted that it was high, with an average disk queue length running around 70, I decided to flip on SQL profiler to watch for errors.   Low and behold: Error: 1222, Severity: 16, State: 18 - Database Deadlocks!!  And lots of them right before stsadm threw that dreaded error.

Solving the problem was a bit more tricky.  My SQL server is virtualized - definitely not recommended for production, but this also wasn't production with a quarterly user load of about 10.  Very difficult to justify a physical box.  So, I started shutting down services that would be accessing the DB server during the restore - in particular: search!  After that and consolidating the mdb files (there were three because of how production is set up) I was able to complete a restore for the first time in months!

Now on to handing this environment to a db admin to do some performance tuning and to the virtual server team to see if we can find a faster disk for the database drive!
