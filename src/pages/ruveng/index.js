import React from "react"
import { graphql } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import AuthorIndex from "../../components/authorindex"

const RuvenGIndex = ({ data, location }) => {
  const siteTitle = data.bio.frontmatter.siteTitle
  const posts = data.allMarkdownRemark.nodes

  return (
    <Layout location={location} subsitepath={data.bio.frontmatter.path} title={siteTitle}>
      <SEO title="All posts" />
      <AuthorIndex posts={posts} />
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
                path
                twitter
            }
        }
  }
`
