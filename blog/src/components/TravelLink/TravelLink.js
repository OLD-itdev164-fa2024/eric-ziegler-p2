import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "gatsby"
import styled from 'styled-components'
import { ArrowUp, ArrowDown, ArrowLeft, ArrowRight } from 'styled-icons/entypo'

const StyledLink = styled(Link)`
  margin: 0 5px 0 10px;
  color: #121;
  text-decoration: none;
  &:hover {
    color: #171;
  }
`

export const TravelLink = styled(({ direction, tile, ...rest }) => {
    if(direction === 'n')
        return <div>
                <StyledLink to={`/${tile.slug}`}>
                    <ArrowUp size={24} />Go North:</StyledLink>{tile.connectionHint}
        </div>
    if(direction === 'e')
        return <div>
                <StyledLink to={`/${tile.slug}`}>
                    <ArrowRight size={24} />Go East:</StyledLink>{tile.connectionHint}
        </div>
    if(direction === 's')
        return <div>
                <StyledLink to={`/${tile.slug}`}>
                    <ArrowDown size={24} />Go South:</StyledLink>{tile.connectionHint}
        </div>
    if(direction === 'w')
        return <div>
                <StyledLink to={`/${tile.slug}`}>
                    <ArrowLeft size={24} />Go West:</StyledLink>{tile.connectionHint}
        </div>
})``

TravelLink.propTypes = {
    direction: PropTypes.node.isRequired,
    tile: PropTypes.node.isRequired,
}                                        