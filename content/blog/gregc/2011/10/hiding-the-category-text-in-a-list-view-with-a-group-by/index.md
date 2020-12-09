---
title: "Hiding the 'Category' Text in a List View with a Group By"
date: "2011-10-03"
author: gregc
---

I recently had a request of me to hide the 'Category:' text on a List View web part in a MOSS 2007 farm.  As I have now had this request a few times and each time have to go figure out how to do it again, I thought that meant it was time for a quick blog post!  I found the original source [here](http://edinkapic.blogspot.com/2008/06/hiding-list-view-group-headers.html "here").  It's a great write up, but there are a few enhancements mentioned in the comments that were never incorporated into the script code of the article.  So here is the code with the changes incorporated:

 

<script type="text/javascript" language="javascript">
    _spBodyOnLoadFunctionNames.push("HideHeaders");
<div></div>
	function HideHeaders()
	{
		var elements = getElementsByClassName(document, "td", "ms-gb");
		var elem;
		for(var i=0;i&lt;elements.length;i++)
		{
			elem = elements[i];
			elem.childNodes[3].style.display = "none";
			elem.childNodes[4].nodeValue = elem.childNodes[4].nodeValue.replace(':', '');   }
<div></div>
			elements = getElementsByClassName(document, "td", "ms-gb2");
<div></div>
			for(var i=0;i&lt;elements.length;i++)
			{
				elem = elements[i];
				elem.childNodes[3].style.display = "none";
				elem.removeChild(elem.childNodes[4]);
			}
<div></div>
			elements = getElementsByClassName(document, "tr", "ms-viewheadertr");
<div></div>
			for(var i=0;i&lt;elements.length;i++)
			{
				elem = elements[i];
				elem.style.display = "none";
			}
		}
<div></div>
		/*
		Written by Jonathan Snook, http://www.snook.ca/jonathan
		Add-ons by Robert Nyman, http://www.robertnyman.com
		*/
<div></div>
		function getElementsByClassName(oElm, strTagName, strClassName)
		{
			var arrElements = (strTagName == "*" &amp;&amp; oElm.all)? oElm.all : oElm.getElementsByTagName(strTagName);
			var arrReturnElements = new Array();
			strClassName = strClassName.replace(/\-/g, "\\-");
			var oRegExp = new RegExp("(^|\\s)" + strClassName + "(\\s|$)");
			var oElement;
			for(var i=0; i&lt;arrElements.length; i++)
			{
				oElement = arrElements[i];
				if(oRegExp.test(oElement.className)){
				arrReturnElements.push(oElement);
			}
		}
		return (arrReturnElements)
	}
</script>
