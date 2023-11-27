import React from "react";
// import { Link } from "gatsby"
import { graphql } from "gatsby";
import Layout from '../components/layout';
import { GatsbyImage } from "gatsby-plugin-image";
import { H1 } from "../components/Heading";
import { TravelLink } from "../components/TravelLink";
// import { theContext } from "../../ContextProvider"

var hp = 0

const changeHealth = (encounter) => {
  hp = parseInt(sessionStorage.getItem('playerHealth'))
  encounter.isHelpful
    ? hp += encounter.hpModifier
    : hp -= encounter.hpModifier
  sessionStorage.setItem('playerHealth', hp)
}

const GamePage = ({data}) => {
  const { title, mapImage, areaDescription, north, east, south, west, encounter } = data.contentfulGameTile;
  if (encounter != null) changeHealth(encounter)
  else hp = parseInt(sessionStorage.getItem('playerHealth'))

  return (
    <Layout>
      <div><GatsbyImage image={mapImage.gatsbyImageData} /></div>
      <H1>{title}</H1>
      <div dangerouslySetInnerHTML={{ __html: areaDescription.childMarkdownRemark.html }}></div>

      <div>{hp}</div>
      {encounter === null ? null : encounter.hpModifier}
      
      {hp <= 0 ? 
        <div>DEADZO</div>
      : null}
    

      {north == null ? null :
        <TravelLink direction="n" tile={north} />
      }
      {east == null ? null :
        <TravelLink direction="e" tile={east} />
      }
      {south == null ? null :
        <TravelLink direction="s" tile={south} />
      }
      {west == null ? null :
        <TravelLink direction="w" tile={west} />
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
    			encounter{
            name
            isHelpful
            hpModifier
            shortDescription
          }
        }
    }
`