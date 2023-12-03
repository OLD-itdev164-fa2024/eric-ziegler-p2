import React from "react";
import { Link } from "gatsby"
import { graphql } from "gatsby";
import Layout from '../components/layout';
import { GatsbyImage } from "gatsby-plugin-image";
import { H1 } from "../components/Heading";
import { TravelLink } from "../components/TravelLink";
import { GameEncounter } from "../components/GameEncounter";
import { Heart } from "styled-icons/entypo";
import { Skull, RotateLeft } from "styled-icons/fa-solid";

var hp = 0
var showEncounter = false

const updateHealth = (encounter) => {
  hp = parseInt(sessionStorage.getItem('playerHealth'))
  
  encounter.isHelpful
    ? hp += encounter.hpModifier
    : hp -= encounter.hpModifier
  
  sessionStorage.setItem('playerHealth', hp)
  
}

const GamePage = ({data}) => {
  const { title, identifier, mapImage, areaDescription, north, east, south, west, encounter } = data.contentfulGameTile;

  // determine if map tile is new, and if there is an encounter on it
  // showEncounter flag is needed to deal with not repeating encounters but still running them on first visit
  if (encounter != null && sessionStorage.getItem(identifier) == null){
    updateHealth(encounter) // update health according to encounter details
    showEncounter = true // enable displaying encounter details
  }
  else{
    hp = parseInt(sessionStorage.getItem('playerHealth')) // no encounter, just read in current health
    showEncounter = false // disable encounter component
  }

  // set a flag to show this map tile has been visited
  sessionStorage.setItem(identifier, '1')
  

  return (
    <Layout>
      <div><GatsbyImage image={mapImage.gatsbyImageData} /></div>
      <H1>{title}</H1>
      
      {showEncounter
        ? <GameEncounter encounter={encounter} />
        : null}
        
      <div dangerouslySetInnerHTML={{ __html: areaDescription.childMarkdownRemark.html }}></div>
      
      {hp > 0
        ? 
        <React.Fragment>
          <p><Heart size={24} color="red"/> {hp}</p>
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
        </React.Fragment>

        :
        <React.Fragment>
          <p><Skull size={24} color="red"/> {hp}</p>
          <div>You have fallen. Your adventure is at an end. Better luck next time!</div>
          <Link to="/"><RotateLeft size={24}/>Return to the main page.</Link>
        </React.Fragment>
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
            flavorText{
              childMarkdownRemark{
                html
              }
            }
          }
        }
    }
`