import React from "react"
import { Link } from "gatsby"
import "./posts.module.css"

const Posts = ({ posts, authorName }) => {
    if (posts.length === 0) {
        return (
            <p>
            No blog posts found. Add markdown posts to "content/blog" (or the
            directory you specified for the "gatsby-source-filesystem" plugin in
            gatsby-config.js).
            </p>
        )
    }
    return (
        <ol>
        {posts.map(post => {
          const title = post.frontmatter.title || post.fields.slug

          return (
            <li key={post.fields.slug}>
              <article
                className="post-list-item"
                itemScope
                itemType="http://schema.org/Article"
              >
                <header>
                  <h2>
                    <Link to={post.fields.slug} itemProp="url">
                      <span itemProp="headline">{title}</span>
                    </Link>
                  </h2>
                  <small>{post.frontmatter.date} by {authorName}</small>
                </header>
                <section>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: post.frontmatter.description || post.excerpt,
                    }}
                    itemProp="description"
                  />
                </section>
              </article>
            </li>
          )
        })}
      </ol>
    )
}

export default Posts