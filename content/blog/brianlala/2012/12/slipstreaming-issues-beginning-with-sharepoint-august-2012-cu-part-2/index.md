---
title: "Slipstreaming issues beginning with SharePoint August 2012 CU (Part 2)"
date: "2012-12-07"
author: brianlala
---

In my [last post](http://spinsiders.com/brianlala/2012/11/20/slipstreaming-issues-beginning-with-sharepoint-august-2012-cu-and-a-fix/), I described the installation errors that I experienced when attempting to do a slipstreamed install of SharePoint 2010 with SP1 + August 2012 CU, and a workaround that I’d implemented in [AutoSPInstaller](http://autospinstaller.codeplex.com/) to allow the script to proceed beyond the error. It seems however that I was a tad hasty… subsequent testing revealed that the errors were _not_ just benign & safely ignore-able – you’d basically be left with a half-patched SP2010 installation afterwards. This was evidenced on two fronts: the version info on certain files were still showing the SP1 build, and the fact that I was able to re-run the August 2012 CU after the supposed successful slipstreamed install and could see it was actually _doing stuff_ (instead of just quickly exiting with an “…already applied” type of message.

In discussing this problem with the [usual](http://www.toddklindt.com/) [suspects](http://sharepoint.nauplius.net/), we discovered that the August 2012 CU does indeed behave differently. Although SharePoint 2010 Service Pack 1 was nearly always listed as a prerequisite for CUs released after it, up until recently it seems it didn’t actually matter whether SP1 was installed before or after the CU. However, with the release of the August 2012 CU, this has apparently changed – the CU [won’t even install on an existing farm if it fails to detect the presence of SP1](http://social.technet.microsoft.com/Forums/en-US/sharepointadminprevious/thread/a287c95e-2b49-446c-bb03-61b442b7258a).

Though we have a support case open with Microsoft about this issue, at the moment we don’t have a real solution. One viable workaround though would involve simply using a slipstreamed source containing SP1 (optionally with the June 2012 CU - the most recent one that worked for full slipstreaming), then _afterwards_ applying the August (or October) 2012 CU. Yes, a pain in the butt… You could even go one step further and run the CU with unattended switches to ease the manual pain – probably the best approach if you’re looking for the latest & greatest SharePoint 2010 build with minimum steps & effort.

I’ll update this post as soon as I confirm any new details, either from the open support case or from the general Interwebz/Twitterz.

Update (Jan 14/2013): Trevor has posted [this update](http://sharepoint.nauplius.net/2013/01/slipstreaming-the-august-2012-cumulative-update-or-higher-with-sharepoint-2010-service-pack-1/) based on the support case he opened with Microsoft. Let’s cross our fingers that we see a fix before (heck, or even with) SP2.
