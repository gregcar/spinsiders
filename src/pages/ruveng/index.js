import React from "react"
import { graphql } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Posts from "../../components/posts"

const RuvenGIndex = ({ data, location }) => {
  const siteTitle = data.bio.frontmatter.siteTitle
  const seoTitle = data.bio.frontmatter.siteTitle + " - All Posts"
  const siteDescription = data.bio.frontmatter.description
  const bannerImage = data.bio.frontmatter.bannerimage?.childImageSharp.fluid
  const posts = data.allMarkdownRemark.nodes

  return (
    <Layout location={location} subsitepath={data.bio.frontmatter.path} siteDescription={siteDescription} bannerImage={bannerImage} title={siteTitle}>
      <SEO title={seoTitle} />
      <Posts posts={posts} />
    </Layout>
  )
}

export default RuvenGIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, filter: {frontmatter: {author: {eq: "ruveng"}}}) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
    bio : markdownRemark(frontmatter: { authorId: { eq: "ruveng" } }) {
            html
            frontmatter {
                fullName
                title
                siteTitle
                description
                bannerimage {
                  childImageSharp {
                    fluid(maxWidth: 940, maxHeight: 198) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }           
                path
                twitter
            }
        }
  }
`
