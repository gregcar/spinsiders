---
title: "The First SharePoint 2016 Post-RTM Update Has Been Released"
date: "2016-04-12"
author: brianlala
---

SharePoint 2016 is seeing its first post-go-live update - [KB2920721](http://support.microsoft.com/kb/2920721) - available for download here: [https://www.microsoft.com/en-us/download/details.aspx?id=51701](https://www.microsoft.com/en-us/download/details.aspx?id=51701). You may notice that it doesn't follow the typical CU naming convention of _ubersrv\*_ - that's because it's not a cumulative update, but rather just a specific update that contains a single patch _sts-x-none.msp_.

Things to know about this patch:

- It does _not_ increment the farm's configuration database version. Your previously RTM SP2016 farm (as shown in Central Administration) remains at 16.0.4327.1000 after installing this patch, so you'll need somewhere else like _Control Panel --> Programs and Features --> Installed Updates_ to confirm it's installed.
- As with most other SharePoint updates, you _must_ run the SharePoint Products Configuration Wizard after installing the package itself in order to fully commit the patch installation.
- Also as with most other SharePoint updates, you should be able to extract the .msp patch file to **<DriveLetter>:\\<SharePointBinaryLocation>\\updates** (a process called _slipstreaming_) and use this source when building a new farm from scratch, in order to automatically patch the new farm as it's being built.
- The KB article describing what changes are included in the patch is available at [http://support.microsoft.com/kb/2920721](http://support.microsoft.com/kb/2920721).

Cheers Brian
