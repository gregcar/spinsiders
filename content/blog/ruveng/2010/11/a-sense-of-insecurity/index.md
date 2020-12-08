---
title: "A Sense of Insecurity"
date: "2010-11-02"
---

[Scott Jamison posted](http://bit.ly/asdLmW) a blog follow-up to a session I recently presented at SPTechCon in Boston. I explained how you can drop a document into a document library, at which point the content organizer takes over and moves the document to new location in that library, that site, or even in another site collection.

During the session, someone asked if the person uploading the document needs to have permission to place that document in the new location. I said ‘I don’t think so, but I’m not sure’. In [Scott’s post](http://bit.ly/asdLmW), he verifies that ‘no’ is the right answer, but that [raised a new question](http://bit.ly/bO4K2O) from Greg Clark: The ability to work around the security model is undesirable, no?

I can see some useful benefits of the content organizer being able to move a document into a location that one normally doesn’t have write access to, but it does cause some unsettling thoughts:

What if the destination doesn’t have versioning turned on. You could overwrite an important document and ‘invisibly’ change it to say whatever you want. Also, you could be putting unverified information into a location that normally has fairly strong governance about what gets exposed at that location.

You can mitigate the issue of stealth upload by requiring approval before a document becomes visible to a wider audience. However, the one saving grace of this ‘hole’ is that name of the uploading user is recorded in ‘Modified by’. So, while this could happen due to some user accidentally or unwittingly breaking the rules, it will not be anonymous: Everyone will know who-done-it.

There may be other ways to deal with this, and I’d be happy to hear ideas from anyone who has more details.
