/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import Image from "gatsby-image"

const Bio = ({ authorId }) => {
    const data = graphql`
    query BioQuery{
        markdownRemark(frontmatter: { bioId: { eq: "gregc" } }) {
            html
            frontmatter {
                fullName
                bioId
                firstName
                title
                siteTitle
                twitter
                profilepicture {
                  id
                }
            }
        }
      }
`
  const author = Bio?.data?.markdownRemark?.frontmatter

  const avatar = author?.profilepicture

  return (
      <div className="bio">
          <p>Source value: { authorId }</p>
          <p>Author value: { author?.title }</p>
      {avatar && (
        <Image
          fixed={avatar}
          alt={author?.name || ``}
          className="bio-avatar"
          imgStyle={{
            borderRadius: `50%`,
          }}
        />
      )}
      {author?.fullName && (
        <p>
          Written by <strong>{author.fullName}</strong> {author?.siteTitle || null}
          {` `}
          <a href={`https://twitter.com/${author?.twitter || ``}`}>
            You should follow them on Twitter
          </a>
        </p>
          )}
          <span>This is where the bio should go.</span>
    </div>
  )
}

Bio.propTypes = {
  authorId: PropTypes.string.isRequired,
}
export default Bio
