import React from "react"
import { graphql } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Bio from "../../components/bio"

const About = ({ data, location }) => {
  const siteTitle = data.bio.frontmatter.siteTitle
  const bio = data.bio

  return (
      <Layout location={location} subsitepath={bio.frontmatter.path} title={siteTitle}>
      <SEO title="About" />
      <Bio
            firstName={bio.frontmatter.firstName}
            fullName={bio.frontmatter.fullName}
            bioText={bio.html}
            pictureUrl={bio.frontmatter.profilepicture?.childImageSharp.fixed}
            twitter={bio.frontmatter.twitter}
          />
    </Layout>
  )
}

export default About

export const pageQuery = graphql`
  query {
    bio : markdownRemark(frontmatter: { authorId: { eq: "laurar" } }) {
        html
        frontmatter {
            fullName
            firstName
            title
            siteTitle
            path
            twitter
            profilepicture {
                childImageSharp {
                    fixed(width: 50, height: 50, quality: 95) {
                        ...GatsbyImageSharpFixed
                        }
                    }
                }
        }
    }
  }
`
