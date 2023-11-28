import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

export const GameEncounter = styled(({ encounter, ...rest }) => {
    return <div>
        <p>{encounter.shortDescription}</p>
        <p>You {encounter.isHelpful ? 'gain' : 'lose'} {encounter.hpModifier} health.</p>
    </div>
})``

GameEncounter.propTypes = {
    encounter: PropTypes.node.isRequired,
}  