import * as React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import styled from 'styled-components'
import { Box, Card, Heading } from 'rebass'

import Layout from "../components/layout"
import Seo from "../components/seo"

const Grid = styled(Box)`
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  display: grid;
  gap: 100px;
  grid-template-columns: repeat(auto-fit, minmax(128px,1fr));
`

const IndexPage = ({data}) => (
  <Layout>
    <Seo title="Home" />
    <Link to="/test-a">Begin!</Link>
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