---
title: "AutoSPInstaller and AutoSPSourceBuilder now work with SharePoint Server 2019"
date: "2018-07-25"
---

Just in time for the release of the [SharePoint Server 2019 Public Preview](https://techcommunity.microsoft.com/t5/Microsoft-SharePoint-Blog/Announcing-Availability-of-SharePoint-Server-2019-Preview/ba-p/214427), I've made probably the most significant updates to two of my open-source offerings in a while... [AutoSPInstaller](https://github.com/brianlala/AutoSPInstaller) will now install and create a SharePoint 2019 farm (using the [Public Preview bits](https://go.microsoft.com/fwlink/?LinkId=2006095)), and [AutoSPSourceBuilder](https://github.com/brianlala/AutoSPSourceBuilder) will download and integrate the SharePoint 2019 prerequisites - so you can install SharePoint 2019 while offline, without an Internet connection on the target server(s).

Also, I've finally converted the AutoSPInstaller functions file to a PowerShell module (!) This should improve the ability to run individual functions, as I plan to make some or all of the functions more easily executable on their own, without depending on or referencing an XML input file.

Check them out, and [let me know what you think](https://twitter.com/brianlala)!

Cheers
