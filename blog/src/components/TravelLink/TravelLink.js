import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "gatsby"
import styled from 'styled-components'
import { ArrowUp, ArrowDown, ArrowLeft, ArrowRight } from 'styled-icons/entypo'

export const TravelLink = styled(({ direction, tile, ...rest }) => {
    if(direction === 'n')
        return <div>
                <Link to={`/${tile.slug}`}>
                    <ArrowUp size="30" />Go North:</Link> {tile.connectionHint}
        </div>
    if(direction === 'e')
        return <div>
                <Link to={`/${tile.slug}`}>
                    <ArrowRight size="30" />Go East:</Link> {tile.connectionHint}
        </div>
    if(direction === 's')
        return <div>
                <Link to={`/${tile.slug}`}>
                    <ArrowDown size="30" />Go South:</Link> {tile.connectionHint}
        </div>
    if(direction === 'w')
        return <div>
                <Link to={`/${tile.slug}`}>
                    <ArrowLeft size="30" />Go West:</Link> {tile.connectionHint}
        </div>
})``

TravelLink.propTypes = {
    direction: PropTypes.node.isRequired,
    tile: PropTypes.node.isRequired,
}                                        