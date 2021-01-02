import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPostTemplate = ({ data, location }) => {
  const post = data.markdownRemark
  const { previous, next, bio } = data
  const siteTitle = data.bio.frontmatter.siteTitle
  const siteDescription = data.bio.frontmatter.description
  const bannerImage = data.bio.frontmatter.bannerimage?.childImageSharp.fluid

  return (
    <Layout location={location} subsitepath={data.bio.frontmatter.path} siteDescription={siteDescription} bannerImage={bannerImage} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <h1 itemProp="headline">{post.frontmatter.title}</h1>
          <p>{post.frontmatter.date} by {bio.frontmatter.fullName}</p>
        </header>
        <section
          dangerouslySetInnerHTML={{ __html: post.html }}
          itemProp="articleBody"
        />
        <hr />
        <footer>
          <p>
            Written by <strong>{bio.frontmatter.fullName}</strong>
          </p>
          <Bio
            firstName={bio.frontmatter.firstName}
            fullName={bio.frontmatter.fullName}
            bioText={bio.html}
            pictureUrl={bio.frontmatter.profilepicture?.childImageSharp.fixed}
            twitter={bio.frontmatter.twitter}
          />
        </footer>
      </article>
      <nav className="blog-post-nav">
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
    $authorId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 320)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        author
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    bio : markdownRemark(frontmatter: { authorId: { eq: $authorId } }) {
            html
            frontmatter {
                fullName
                firstName
                title
                siteTitle
                description
                twitter
                path
                profilepicture {
                  childImageSharp {
                      fixed(width: 50, height: 50, quality: 95) {
                          ...GatsbyImageSharpFixed
                          }
                      }
                  }
                bannerimage {
                childImageSharp {
                  fluid(maxWidth: 940, maxHeight: 198) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }   
            }
        }
  }
`
