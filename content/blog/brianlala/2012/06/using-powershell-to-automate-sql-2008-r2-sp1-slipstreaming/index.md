---
title: "Using PowerShell to Automate SQL 2008 R2 SP1 Slipstreaming"
date: "2012-06-26"
author: brianlala
---

Like most of you SharePoint folks, I find myself installing SQL Server quite frequently (since SharePoint has an ever-so-slight dependency on it). However I also like to have the latest & greatest service pack in my environments, and currently this means SP1 for SQL 2008 R2 (yeah I know SQL 2012 is out, but most of my clients are a bit shy with such ‘new’ releases). Since I do extreme slipstreaming of SP1 + CUs for SharePoint as described (for example) in [Todd Klindt](http://www.toddklindt.com/)’s [excellent blog post](http://www.toddklindt.com/blog/Lists/Posts/Post.aspx?ID=295), I looked for a way to do this with my SQL Server 2008 R2 binaries.

The slipstreaming process for SQL Server is a bit convoluted, and for a guy like me, very forgettable. It is however fairly well documented in articles like [this one](http://blogs.msdn.com/b/petersad/archive/2011/07/13/how-to-slipstream-sql-server-2008-r2-and-a-sql-server-2008-r2-service-pack-1-sp1.aspx). Therefore I sat down on evening and sought to automate the process, in order to minimize the amount of thought and manual effort required.

I wanted this script to:

- Copy the original RTM binary files from a DVD/ISO/directory to my designated path
- Download the SP1 packages for me (cuz I didn’t want to have to remember or hunt around for the URLs for the service packs for each respective platform (IA64, x64, x86) each time I needed to slipstream)
- Extract each platform service pack (thus avoiding having to remember the associated command-line switches)
- Make the required edits to each platform-specific DefaultSetup.ini
- Place a nice little text file to serve as a label in the target path, to remind me that I’d slipstreamed this particular binary source location

Anyhow I’m happy to announce my successful first attempt at tackling the automated slipstreaming of SQL 2008 R2 + SP1 via PowerShell, and you can grab it from the TechNet Script Center Gallery, [here](http://gallery.technet.microsoft.com/scriptcenter/Create-a-SQL-Server-2008-3ee17e6d).

Cheers Brian

P.S. My next goal in case you’re interested is of course to automate SharePoint 2010 service pack and cumulative update slipstreaming, but due to the way MS packages their CUs this has proven challenging (apparently there are _no known command-line switches_ for the downloaded Microsoft Self-Extractor packages!)
