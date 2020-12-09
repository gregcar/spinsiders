---
title: "Automating Managed Property Mapping in MOSS 2007 / Search Server 2008"
date: "2010-03-12"
author: brianlala
---

I was recently asked to customize the Advanced Search experience for a Search Server Express 2008 customer. Remember that MSSE is basically WSS 3.0 + the search components from MOSS 2007 (remember _that_ ancient product?). Anyhow this involved enabling the selection of a number of custom fields in the 'property restrictions' drop-down. Part of this overall process is mapping Managed Properties to Crawled Properties within the Search Administration area of the shared services provider. I more or less assumed that this would be a GUI-only, manual process for the 20+ properties I was dealing with. However I was faced with applying the changes to at least 4 different environments - not a lot of fun, and likely prone to error by tired eyes and fingers. I wasn't (and still am not) aware of a way to do this using STSADM.exe, and even scoured the help for STSADM once again in case I'd missed something - no luck.

As is often the case, I stumbled on a neat solution while looking for something else entirely. The folks over at [mosssearch.com](http://www.mosssearch.com) released a freeware utility called [MOSS Search Manager](http://www.mosssearch.com/MOSS2007SearchEngineManager.html) a while back, and it was designed exactly for this purpose. Fantastic! Now all I needed to do was include it in a batch file, give it the names of the managed properties to map (via a text input file), and run the batch file in each environment.

Here is the full script of the batch file. Copy/paste to <something>.cmd, and don't forget to list all of your managed properties in a file called PropNames.txt in the same directory as the script and _MOSSSearchManager.exe_.

`@ECHO OFF ECHO - Adding/Mapping Managed Properties... SET URL=http://yourURL: SET ContentSource="Content Source Name, e.g. Local Office SharePoint Server sites" SET InputFile=%~dp0PropNames.txt ECHO - Getting crawled properties... FOR /F %%a in (%InputFile%) do ( MOSSSearchManager crawledprop %URL% SharePoint | find /i "ows_%%a" IF ERRORLEVEL 1 ECHO Crawled property "ows_%%a" not found! ) ECHO - Getting managed properties... FOR /F %%a in (%InputFile%) do ( MOSSSearchManager managedprop %URL% SharePoint | find /i "%%a" IF ERRORLEVEL 1 ECHO Managed property "%%a" not found! & pause ) pause ECHO - Mapping properties... FOR /F %%a in (%InputFile%) do ( ECHO - Mapping property %%a: MOSSSearchManager mapmprop %URL% %%a %%a ECHO - Mapping property ows_%%a: MOSSSearchManager mapmprop %URL% ows_%%a %%a ) IF ERRORLEVEL 1 pause ECHO - Initiating Full Crawl... MOSSSearchManager crawl %URL% %ContentSource% startfull timeout 10 ECHO - Checking Full Crawl Status... MOSSSearchManager crawl %URL% %ContentSource% status pause EXIT`

Although this script was used for Search Server in my case, the search components are shared with MOSS 2007 so the utility/script will work with both products. And yes I suppose I could/should have used Powershell, it wasn't yet installed on the target server(s) and would have involved additional change management process - not worthwhile for the length of this particular engagement.

So I suppose the lesson is... just when you think it can't be automated, there may be a solution out there!

Cheers
