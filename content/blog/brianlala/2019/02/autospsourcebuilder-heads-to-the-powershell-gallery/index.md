---
title: "AutoSPSourceBuilder heads to the PowerShell Gallery!"
date: "2019-02-06"
---

File under "why didn't I do this years ago??"

You can now easily install [AutoSPSourceBuilder](https://github.com/brianlala/AutoSPSourceBuilder) (my PowerShell-based utility for downloading SharePoint updates and integrating them into the installation media) from the [PowerShell Gallery](https://www.powershellgallery.com/packages/AutoSPSourceBuilder).

TL;DR:

> Install-Module -Name AutoSPSourceBuilder

No more need to browse to the GitHub repo, download the zip, extract it, etc. The simple one-liner above will (on any modern Windows machine with installed-by-default PowerShellGet etc.) automatically download and install AutoSPSourceBuilder.ps1 to your default Scripts directory, and make it available to directly run in any PowerShell sessions you launch.

What's more, the AutoSPInstaller.xml update inventory file, updated on a (roughly) monthly basis and previously bundled with the script, is now by default automatically downloaded at script run-time to ensure you have the latest set of SharePoint updates to choose from. If however for any reason you want to use your own XML inventory, you can opt to skip the xml download and use a local copy of the inventory file by including the new -UseExistingLocalXML switch parameter.

Now that I finally realized just how ridiculously easy it is to publish a script to the Gallery, you can expect to see some more of my stuff make its way there in the near future.

Hopefully this latest batch of changes makes it easier to keep the AutoSPSourceBuilder SharePoint update management tool... updated!

Cheers Brian
