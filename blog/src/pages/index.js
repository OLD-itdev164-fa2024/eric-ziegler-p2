import * as React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"

import styled from 'styled-components'
import { Box } from 'rebass'
import { H1 } from "../components/Heading";

import Layout from "../components/layout"
import Seo from "../components/seo"


const Flex = styled(Box)`
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const InitGame = () => {
  sessionStorage.clear()
  sessionStorage.setItem('playerHealth', 100)
}

const IndexPage = ({ data }) => {
  const { slug } = data.contentfulGameTile;
  return (
  <Layout>
    <Seo title="One Six Four, Adventure!" />
    <Flex>
        <H1>Welcome to One Six Four, Adventure!</H1>
        <p>An ode to classic text-based adventure games. See if you can make it to the end!</p>
      <Link to={`/${slug}`} onClick={() => (InitGame())}>Begin!</Link>
    </Flex>
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
        contentfulGameTile(title: {eq: "Sandy Beach"}){
          slug
    }
}
`