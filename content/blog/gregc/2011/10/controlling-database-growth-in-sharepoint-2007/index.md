---
title: "Controlling Database Growth in SharePoint 2007"
date: "2011-10-22"
---

One of the many problems when developing for SharePoint 2007 is database growth. This can be especially troublesome when your production environment has caching and auditing enabled. Here are some tricks to dealing with the growth.

1. Disable Auditing when restoring your production environment in a development environment. This is highly important as the content database can very quickly grow far beyond the capacity of your development server. This does have to be done on a per site collection basis and can be found at \_layouts/AuditSettings.aspx in each.
2. Dump the tempdb. This is most easily achieved by restarting the offending SQL service in SQL Management Studio.
3. Convert the offending database recover mode to Simple.
4. Set up a detail maintenance plan and make sure that a Shrink Databases operation is in that plan.
5. Trim the audit log. This is done with the [trimauditlog](http://technet.microsoft.com/en-us/library/cc706879(office.12).aspx) stsadm command. An example for its use is "stsadm -o trimauditlog -date 20110930 -url http://locahost:8080" Depending on how out of control the growth is, you may have to run this in small date ranges and then restart SQL after to dump the tempdb (suggestion 2).
6. Dump the eventcache history. This suggestion deals directly with the DB which is a no-no in the Microsoft SharePoint world, however this is a development server and if things go sideways a new restore is a very valid option. Here are some queries to help out:
7. Use this to figure out which tables are the largest (in terns of number of rows):

GO
SELECT OBJECT\_NAME(OBJECT\_ID) TableName, st.row\_count
FROM sys.dm\_db\_partition\_stats st
WHERE index\_id > 2
ORDER BY st.row\_count DESC
GO

9. Use this to figure out which event types in the eventcache table have the most occurrences:

GO
SELECT EventType, COUNT(\*) as Total
FROM \[databasename\].\[dbo\].\[EventCache\]
GROUP BY EventType
ORDER BY Total DESC
GO

11. Use this to clear the offending event types from the eventcache table ([source](http://social.technet.microsoft.com/Forums/en/sharepointadmin/thread/290bd659-cbb2-49da-9c63-df951fa3e893)):

GO
While exists (SELECT TOP 1 \* FROM eventcache where eventtype In(8192,8194,1048576) AND EventTime < DATEADD(day, -5, GETUTCDATE()))
BEGIN
DELETE eventcache
FROM (SELECT TOP 100000 \* FROM eventcache where eventtype In(8192,8194,1048576) AND EventTime < DATEADD(day, -5, GETUTCDATE()) ) AS e1
WHERE eventcache.id = e1.id
End
GO

13. Shrink the database files themselves. This can be done in SQL Management Stuido. Often it's best to set the space just slightly above the suggestion Management Studio gives you.
14. Create a batch file that restarts the offending SQL service nightly. This will help manage the growth of your tempdb.
