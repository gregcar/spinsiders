---
title: "Using AutoSPSourceBuilder To Build a .NET Framework 4.6 Compatible SharePoint 2013 Installation Source"
date: "2016-11-02"
author: brianlala
---

Several months back, some folks started reporting an error when attempting to install SharePoint 2013 on certain Windows servers - specifically, ones that already had the .Net Framework 4.6 installed. The error simply states: "Setup is unable to proceed due to the following error(s): This product requires Microsoft .Net Framework 4.5" - well, 4.6 is surely newer, shinier and better than 4.5, so what gives?

Though initially identified as an incompatibility between the SharePoint 2013 installer and .Net 4.6, albeit with viable but potentially cumbersome workarounds (mess around in the registry, uninstall .Net 4.6 before re-attempting the SharePoint installation, etc.), Microsoft eventually released a permanent [fix](https://support.microsoft.com/en-ca/kb/3087184) that involved some manual steps to replace a setup-related DLL. All good, right?

Well if you're lazy (erm I mean, _efficient_) like me, you might feel we can do one better. Since the fix involves basically downloading a file, extracting it, then replacing a file that's part of the SharePoint 2013 installation media, it kind of fits in nicely with one of my open-source projects which performs many of the same steps for SharePoint prerequisites and updates - [AutoSPSourceBuilder](https://github.com/brianlala/AutoSPSourceBuilder). So I set about incorporating the KB3087184 fix as one of SharePoint 2013's "prerequisites" - that is, it should really be considered a prerequisite if you want to install 2013 on a server that has all Windows Updates (including .Net 4.6x) already applied to it.

Here's how to proceed with automatically integrating the KB3087184 fix yourself, if you find yourself in that situation:

1. Download & extract the latest [AutoSPSourceBuilder](https://github.com/brianlala/AutoSPSourceBuilder/archive/master.zip) after reading [a little bit about it](https://github.com/brianlala/AutoSPSourceBuilder/wiki) to get acquainted, if you're not already
2. Run the script as usual, making sure to specify:
    1. **\-SourceLocation** <path to your SharePoint installation source/DVD/mounted ISO>
    2. **\-Destination** <path where the assembled stuff should be saved>
    3. **\-GetPrerequisites:$true** (this is important as we consider KB3087184 to be a SP2013 prerequisite now)
    4. **\-CumulativeUpdate** <CU name, e.g. "October 2016">
    5. <other optional parameters e.g. **-Languages**, as needed>
3. Check the output folder that appears, especially the \_SLIPSTREAMED.txt file for confirmation that you have incorporated everything you were expecting

The AutoSPSourceBuilder PowerShell script will automatically detect if the fix is required, download the fix, rename the existing svrsetup.dll, then extract the updated svrsetup.dll to the correct location. Once the script completes, you should have a .Net 4.6 compatible SharePoint 2013 source, with your choice of cumulative update, language packs, etc. ready to be installed by something like [SharePointDSC](https://github.com/PowerShell/SharePointDsc), [AutoSPInstaller](https://autospinstaller.com) or (gasp) a manual process.

It's always worth mentioning that my open-source projects aren't officially supported by Microsoft, but you can reach out to me directly if you have any specific [issues](https://github.com/brianlala/AutoSPSourceBuilder/issues) or [questions](https://twitter.com/brianlala).

Cheers Brian
