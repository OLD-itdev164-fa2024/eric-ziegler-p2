import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

export const GameEncounter = styled(({ encounter, ...rest }) => {
    return <div>
        <p dangerouslySetInnerHTML={{ __html: encounter.flavorText.childMarkdownRemark.html }}/>
        <p>You {encounter.isHelpful ? 'gain' : 'lose'} {encounter.hpModifier} health.</p>
    </div>
})``

GameEncounter.propTypes = {
    encounter: PropTypes.node.isRequired,
}  