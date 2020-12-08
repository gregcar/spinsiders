---
title: "Using JQuery to \"Hide\" Empty Divs"
date: "2009-12-07"
---

So, I thought it was about time for me to start blogging again.  So much for weekly.  I will shoot for monthly this time!

Anyway, here's today scenario:

I have a page layout with several fields (plain text or rich html) exposed.  The template is meant to be used for corporate policies which can be very long with many sections or very short with one section and anywhere in between.  What I needed to do was remove the &nbsp; from child divs that only contained that in the html.

Solution: With the use of some jquery and a bit of trial and error the code below will do exactly what I wanted.  When the page is rendered the empty lines are removed.  When the page is edited all the field controls are still shown accordingly.

$(document).ready(function() {
	 
	$('.<divclassgoeshere>').each(function() {
		var value=$(this).children(":first").html().toLowerCase();
		if(value=='&nbsp; ') {
			$(this).remove();
		}
	});
});

Enjoy!
