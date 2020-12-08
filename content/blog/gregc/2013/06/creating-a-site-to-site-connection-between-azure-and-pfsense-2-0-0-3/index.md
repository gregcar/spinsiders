---
title: "Creating a Site-to-Site Connection between Azure and pfSense 2.0.0.3"
date: "2013-06-08"
---

This was a big of a tricky endeavour and obviously a topic that I I don't typically cover on this blog.  The whole reason for the post actually directly relates back to my [Moving to Office 365](/gregc/2013/03/06/moving-to-office-365/) post as I haven't get succeeded in moving enough of my operations to the cloud such that I am not dependent on my main internet connection any more.

I was able to find a few resources on this topic which were helpful with my initial configuration:

[How you can connect an Azure cloud to a pfSense network over IPSec](http://msdn.microsoft.com/en-us/library/windowsazure/jj156075.aspx) - Excellent how-to article to get you started!

After repeatedly not successfully establishing a connection between the two networks and only seeing ERROR: invalid flag 0x08 in my IPsec log I concluded that something had changed after the articles were written.  After lots of digging I found couple changes which were required:

1) The first thing I found in [this](http://msdn.microsoft.com/en-us/library/windowsazure/dn133803.aspx#BKMK_VNETFAQConnectivity) article which indicated that the encryption algorithm had moved to AES 265 from AES 128.  Change made, still saw the same error.

2) The second obvious thing missing from the above article is after step 12 (Create Gateway).  Along with the Create Gateway function now, you have the choice of creating a Static Routing or Dynamic Routing Gateway.  Doing a bit more research I came across [this](http://msdn.microsoft.com/en-us/library/windowsazure/jj156075.aspx) (same as issue 1) article which recommends that you create a dynamic routing gateway.  Fair enough, it sounds like it would be the easiest for me to maintain.  WRONG! Scrolling further down [that](http://msdn.microsoft.com/en-us/library/windowsazure/jj156075.aspx) article, you find the 'Key exchange' property, on a static routing gateway it is IKE v1, on a dynamic routing gateway it is IKE v2.  What is the significance of this you ask? I refer you to [this](http://forum.pfsense.org/index.php?topic=52772.0) discussion on the pfSense form.  IKEv2 is not supported by racoon which is the foundation of the pfSense IPSec implementation.  A quick removal of my current Azure gateway and creation of a static routing gateway worked beautifully!  Connection established!
