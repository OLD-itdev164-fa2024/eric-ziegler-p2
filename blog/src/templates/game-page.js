import React from "react";
import { graphql } from "gatsby";
import Layout from '../components/layout';
import { GatsbyImage } from "gatsby-plugin-image";
import { H1 } from "../components/Heading";

const GamePage = ({data}) => {
    const { title, mapImage, areaDescription } = data.contentfulGameTile;

    return (
        <Layout>
            <div><GatsbyImage image={mapImage.gatsbyImageData} /></div>
            <H1>{title}</H1>
            <div dangerouslySetInnerHTML={{__html: areaDescription.childMarkdownRemark.html}}></div>
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