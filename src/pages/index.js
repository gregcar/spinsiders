import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const RootIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title
    return (<Layout location={location} title={siteTitle}>
      <SEO title={siteTitle} />
      <p>
        This blog site was started in September 2008 by <a href="/ruveng">Ruven Gotz</a> and <a href="/gregc">Greg Carnie</a>, two members of the Portals and Collaboration team at <a href="http://www.ideaca.com" target="_blank" rel="noreferrer">Ideaca</a><span className="text-danger">*</span> in Toronto.  Greg has since transferred from Ideaca’s Toronto office and taken up residence at their Calgary office, and Ruven now works at <a href="http://www.navantis.com/" target="blank" rel="noreferrer">Navantis</a><span className="text-danger">*</span>.
        </p>
      <p>
        We are two very different kind of SharePoint experts: Greg is into the full spectrum of SharePoint Architecture/Development/Deployment. Ruven is interested more in the Business Analysis and Information Architecture side of the process. That being said, we do overlap, and learn about each other’s areas, so that we can talk intelligently with each other and with our clients.
        </p>
      <p>
        In January 2008, we added a new person to the roster: <a href="/laurar">Laura Rogers</a> who was (at the time) a SharePoint Administrator at HealthSouth Corporation<span className="text-danger">*</span> in Birmingham, Alabama and the author of a chapter in the <a href="http://www.amazon.com/Microsoft%C2%AE-Office-SharePoint%C2%AE-Administrators-Companion/dp/0735622825" target="_blank" rel="noreferrer">Microsoft Office SharePoint Server 2007 Administrator’s Companion</a>. In September 2009, Laura officially left us as she decided to join <a href="http://www.sharepoint911.com/" target="_blank" rel="noreferrer">SharePoint911</a><span className="text-danger">*</span> and thus it made sense for her to move her blog to their system.
        </p>
      <p>
        In February 2010, <a href="/brianlala">Brian Lalancette</a> became the fourth official contributor to spinsiders.com with his perspective on the infrastructure side of SharePoint, but in particular how PowerShell can be leveraged with regards to SharePoint.  Brian is also a member of the Portals & Collaboration team at <a href="http://www.navantis.com/" target="blank" rel="noreferrer">Navantis</a><span className="text-danger">*</span> in Toronto.
        </p>
      <p>
        <span className="text-danger">*</span><strong>NOTE:</strong> The views and opinions expressed in the posts and the comments that we make on these blogs represent each of us individually. We do not speak for each other or the institutions or organisations we are affiliated with unless stated otherwise. Our blogs are not affiliated with, nor do they represent the views, position or attitudes of our employers their clients, or any of their affiliated companies.
        </p>
    </Layout>
  )
}

export default RootIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
