import * as React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { List, ListItem } from "../components/List"

const IndexPage = ({data}) => (
  <Layout>
    <Seo title="Home" />
    <List width={[1, 2 / 3, 7 / 8]} p={2}>
      {
        data.allContentfulBlogPost.edges.map(edge => (
          <ListItem p={3} key={edge.node.id}>
            <Link to={edge.node.slug}>{edge.node.title}</Link>
            <div>
              <GatsbyImage image={edge.node.heroImage.gatsbyImageData} />
            </div>
            <div>{edge.node.body.childMarkdownRemark.excerpt}</div>
          </ListItem>
        ))
      }
    </List>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage

export const query = graphql`
  {
  allContentfulBlogPost{
    edges{
      node{
        slug
        title
        id
        heroImage {
          gatsbyImageData(
            layout: CONSTRAINED
            placeholder:BLURRED
            width:500
          )
        }
        body {
          childMarkdownRemark {
            excerpt
          }
        }
      }
    }
  }
}
`