---
title: "High-level steps to SP2010 Demo VHD boot joy"
date: "2010-02-03"
---

This is sure to raise more questions than it answers... but here goes: how I managed to get the downloadable [Information Worker Demo VM](http://www.microsoft.com/downloads/details.aspx?FamilyID=0c51819b-3d40-435c-a103-a5481fe0a0d2&displaylang=en) to boot straight from VHD (i.e. no host OS). _This assumes a fair level of comfort and proficiency in virtual hardware environments, specifically managing virtual hard disks, the Windows registry, commands, etc. Also note that incorrectly performing some of these steps could potentially render your original host OS unbootable, so beware!!_

**_Part I:_**

1. [Download](http://www.microsoft.com/downloads/details.aspx?FamilyID=0c51819b-3d40-435c-a103-a5481fe0a0d2&displaylang=en) and extract VHD (duh).
2. Make sure the target computer/laptop/server is already running either Windows 2008 R2 or Windows 7. VHD booting requires the new boot loader from either OS to mount a VHD during boot.
3. Mount the VHD in your fave x64-guest-compatible virtualization platform (other than Hyper-V, I've also had success with [VirtualBox](http://www.virtualbox.org), others have gotten VMWare to work too after VHD conversion).
4. Boot the demo VM as you normally would. Once up, you can optionally [disable the demo services](http://spinsiders.com/brianlala/2010/02/03/powershell-script-to-enabledisable-services-in-sp2010-demo-vm/) for faster boot & operation until the VHD is in its final self-booting state.
5. Upgrade the OS of the IW Demo VM from Win2008 to Win2008 R2 - this is required for VHD boot. Note that you'll need to run a few adprep commands first, since the demo VM is a domain controller.
6. Modify your original (physical) boot configuration (using BCDEDIT.exe) to include the path to your newly-upgraded VHD. Sample steps for doing so can be found [here](http://www.hanselman.com/blog/LessVirtualMoreMachineWindows7AndTheMagicOfBootToVHD.aspx) and [here](http://technet.microsoft.com/en-us/library/dd799299(WS.10).aspx).

If you're still with me, at this point you'll have a freshly-upgraded VM and VHD file, almost ready for VHD boot. Now we'll need to make sure it actually boots (as opposed to blue-screening). You can definitely try it out now - if it works great! If not (more likely), then read on for Part II.

_**Part II**_:

1. You'll most likely need to download and 'inject' the driver for the hard disk controller for your target hardware. Why? Because apparently the OS that's booting from the VHD needs to communicate with the hardware the same way your current OS does, and if it can't do so during boot, it just fails. For example, for most Intel-based chipsets/controllers, you'll need the Matrix Storage driver. Further, you'll need to modify the registry so that the VM knows to load this driver at boot. This is probably the trickiest part of this whole process. The steps outlined [here](http://support.microsoft.com/kb/314082/) are a good starting point, of course you'll need to modify them to include the registry entries for your own hardware... Here are some basic steps that worked for me:
    1. Download the controller driver, extract it, and copy the extracted files to **both** C:Windowsinf and C:Windowssystem32drivers on the VM image (I know this is overdoing it, but it works)
    2. Export the HKEY\_LOCAL\_MACHINESYSTEMCurrentControlSetControlCriticalDeviceDatabase on your original (host) OS subtree to a file, like reg1.reg - again, we probably don't need the whole thing but in a rush it will get us what we need in terms of boot driver config
    3. Export the HKEY\_LOCAL\_MACHINESYSTEMCurrentControlSetservices_<drivername>_ registry subtree on the original (host) OS to reg2.reg. In my case _<drivername>_ was **iaStor** for the Intel RAID Controller.
    4. Import the two exported registry file into your demo VM. Note that after doing this, you may _only_ be able to do VHD boot going forward, and that booting again while in a VM may not work!
2. Try (re-try) booting your VHD
3. If it still fails, you might want to check that:
    1. You have enough free space on your host disk for the VHD to expand to its full capacity when booting (default is ~127GB for the demo VM)
    2. Your VHD isn't on a compressed or encrypted volume
    3. You've actually applied the right hard disk controller driver to the VHD image (hit 'F8' during boot to enable troubleshooting options)

Assuming you haven't given up by this point, and you've actually managed to get the VHD to boot, you can now install all the rest of the required drivers (video, LAN, peripherals etc.), just as you would for a regular OS running on the bare metal - because after all, it _is_ running on the bare metal (except for the virtualized boot hard disk). Also, you can re-enable all of your services (if you disabled them in step 4.), but disable the Hyper-V guest services (since we're no longer running in Hyper-V). Finally, you'll want to apply the [SharePoint 2010 pre-requisite hotfix](http://support.microsoft.com/kb/KB976462) for Win2008 R2 to your demo machine - since it was upgraded from plain Win2008, it would only have the hotfix for that particular OS applied.

Good luck!!

_**References:**_

- [http://www.microsoft.com/downloads/details.aspx?FamilyID=0c51819b-3d40-435c-a103-a5481fe0a0d2&displaylang=en](http://www.microsoft.com/downloads/details.aspx?FamilyID=0c51819b-3d40-435c-a103-a5481fe0a0d2&displaylang=en)
- [http://technet.microsoft.com/en-us/library/dd799299(WS.10).aspx](http://technet.microsoft.com/en-us/library/dd799299(WS.10).aspx)
- [http://www.hanselman.com/blog/LessVirtualMoreMachineWindows7AndTheMagicOfBootToVHD.aspx](http://www.hanselman.com/blog/LessVirtualMoreMachineWindows7AndTheMagicOfBootToVHD.aspx)
