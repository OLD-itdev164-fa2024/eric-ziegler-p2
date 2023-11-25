import React from "react";
import { Link } from "gatsby"
import { graphql } from "gatsby";
import Layout from '../components/layout';
import { GatsbyImage } from "gatsby-plugin-image";
import { H1 } from "../components/Heading";
import { ThemeConsumer } from 'styled-components'
import { IconButton }from '../components/Button/IconButton'

const GamePage = ({data}) => {
    const { title, mapImage, areaDescription, north, east, south, west } = data.contentfulGameTile;

    return (
        <Layout>
            <div><GatsbyImage image={mapImage.gatsbyImageData} /></div>
            <H1>{title}</H1>
        <div dangerouslySetInnerHTML={{ __html: areaDescription.childMarkdownRemark.html }}></div>

        
        {north == null ? null :
          <div><Link to={`/${north.slug}`}>Go North</Link>: {north.connectionHint}</div>
        }
        {east == null ? null :
          <div>
          <Link to={`/${east.slug}`}>
            <ThemeConsumer>
              {theme => <IconButton icon={theme.icons.East}></IconButton>}
              </ThemeConsumer>
              Go East</Link>: {east.connectionHint}</div>
        }
        {south == null ? null :
          <div><Link to={`/${south.slug}`}>Go South</Link>: {south.connectionHint}</div>
        }
        {west == null ? null :
          <div><Link to={`/${west.slug}`}>Go West</Link>: {west.connectionHint}</div>
        }
        </Layout>
    )
}

export default GamePage;

export const pageQuery = graphql`
    query mapQuery($slug: String!){
        contentfulGameTile(slug: {eq: $slug}){
          title
    			identifier
          slug
          mapImage {
            gatsbyImageData(
              layout: FIXED
              width: 500
              cornerRadius: 20
              cropFocus:TOP
              resizingBehavior:THUMB
              placeholder:DOMINANT_COLOR
          	)
          }
    			areaDescription{
						childMarkdownRemark{
              html
            }
          }
    			north{
            slug
    				connectionHint            
          }
    			east{
            slug
    				connectionHint            
          }
    			south{
            slug
    				connectionHint            
          }
    			west{
            slug
    				connectionHint            
          }
        }
    }
`