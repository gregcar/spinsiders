/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import Image from "gatsby-image"

const Bio = ({ fullName, firstName, pictureUrl, bioText, twitter }) => {
  return (
      <div className="bio">
          <Image
              fixed={pictureUrl}
              alt={fullName || ``}
              className="bio-avatar"
              imgStyle={{
                borderRadius: `50%`,
              }}
            />
        <p>
          <section dangerouslySetInnerHTML={{ __html: bioText }} />
      </p>
      <p>
        <a href={`https://twitter.com/${twitter || ``}`}>
          You should follow {firstName} on Twitter
        </a>
      </p>
    </div>
  )
}

export default Bio
