import React from "react";
// import { Link } from "gatsby"
import { graphql } from "gatsby";
import Layout from '../components/layout';
import { GatsbyImage } from "gatsby-plugin-image";
import { H1 } from "../components/Heading";
import { TravelLink } from "../components/TravelLink";
// import { theContext } from "../../ContextProvider"

var health = 0

const updateHealth = (mod) => {
  health = parseInt(sessionStorage.getItem('lsTest'))
  health+= mod
  sessionStorage.setItem('lsTest', health)
}

const GamePage = ({data}) => {
  const { title, mapImage, areaDescription, north, east, south, west } = data.contentfulGameTile;
  var modifier = (south != null ? -2 : 0)
  updateHealth(modifier)

  return (
    <Layout>
      <div><GatsbyImage image={mapImage.gatsbyImageData} /></div>
      <H1>{title}</H1>
      <div dangerouslySetInnerHTML={{ __html: areaDescription.childMarkdownRemark.html }}></div>

      
      {modifier}
      <div>{sessionStorage.getItem('lsTest')}</div>
      <button onClick={() => (
        updateHealth(modifier)
      )}>Click</button>
      
      {health <= 0 ? 
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
        }
    }
`