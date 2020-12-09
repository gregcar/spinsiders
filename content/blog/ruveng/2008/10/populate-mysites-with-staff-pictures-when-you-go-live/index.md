---
title: "Populate My Sites with staff pictures when you go-live"
date: "2008-10-07"
author: ruveng
---

SharePoint’s people search is a SharePoint feature that many organizations want to take advantage of. (I’ve heard stories of people sitting for weeks within 25 feet of a new co-worker, and even having e-mail conversations with them without realizing who they are.)

However, at the time that most SharePoint deployments “go live”, the users have not yet had an opportunity to fill-in their My Site data. This especially applies to the employee picture. Adding pictures is an element of My Sites and people search that adds great value.

 [![](images/celebshots.png)](files/2008/10/celebshots.png) _(Some random staff pictures) _ It’s pretty boring for your new users if the first time they do a people search, they just get a bunch of placeholders.

[Steven Van de Craen](http://www.moss2007.be/blogs/vandest/archive/2007/07/24/profilepictureeventhandler.aspx "Steven's Blog") stepped in with a great [solution](http://www.moss2007.be/blogs/vandest/archive/2007/07/24/profilepictureeventhandler.aspx "Event Handler"): He wrote an event handler that gets attached to a picture library.

- \- The document library is loaded with headshots, each named with user id (account name) of that person (e.g. Bob Smith’s picture is named bsmith.jpg)
- \- The event handler updates the profile picture URL property for that user’s profile
- \- For our client, we used everyone’s security badge headshots as the default picture. As most people HATE their badge headshots, this is ample motivation for them to get into their MySite to change the picture.

[![](images/nick-nolte-mug-shot-150x133.jpg)](files/2008/10/nick-nolte-mug-shot.jpg) Note: You can prevent your users from changing the image, but I’d recommend against this. You should educate your users with ground-rules around their pictures (no “back of the head” shots, or holding up things that [obscure the face](http://www.flickr.com/photos/noelsd/56094959/ "Not a great employee photo..."): The image must be recognizable).

The only problem with Steven’s solution is that it can be tricky to install and configure. To the rescue comes [Itay Shakury](http://blogs.microsoft.co.il/blogs/itaysk/archive/2008/05/28/profile-pictures-library.aspx "Itay Shakury's blog") who wrapped the event handler into an [easy to deploy feature](http://blogs.microsoft.co.il/blogs/itaysk/archive/2008/05/28/profile-pictures-library.aspx "Itay's deployable feature").

We’ve used this at a client, and it worked out really well: The day we went live, every employee had a profile picture (and a strong desire to go into their My Site and replace it!).

I can't finish this post without sending out a thank you to my colleague, Brian Lalancette who discovered and implemented this solution.
