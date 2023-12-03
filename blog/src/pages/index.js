import * as React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"

import styled from 'styled-components'
import { Box } from 'rebass'

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

const InitGame = () => {
  sessionStorage.clear()
  sessionStorage.setItem('playerHealth', 100)
}

const IndexPage = ({ data }) => {
  const { slug } = data.contentfulGameTile;
  return (
  <Layout>
    <Seo title="Home" />
    <Link to={`/${slug}`} onClick={() => (InitGame())}>Begin!</Link>
  </Layout>
  )
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage

export const query = graphql`
  query startQuery{
        contentfulGameTile(title: {eq: "Glade of Testing"}){
          slug
    }
}
`