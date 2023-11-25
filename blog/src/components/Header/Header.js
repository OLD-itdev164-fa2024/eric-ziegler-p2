import * as React from "react"
import { Link } from "gatsby"
import styled, {ThemeConsumer} from "styled-components"
import PropTypes from "prop-types"
import { Flex } from 'rebass'
import { H1 } from "../Heading"
import { Section } from "../Section"
import { SearchButton } from "../Button"

const Outer = styled.header`
  background: ${({theme}) => theme.variants.header.primary.backgroundColor};
  margin-bottom: 1.45rem;
  margin: 0 auto;
  padding: var(--space-4) var(--size-gutter);
  display: flex;
  align-items: center;
  justify-content: space-between;
  `

const StyledLink = styled(Link)`
  margin: 0 10px;
  color: #fff;
  text-decoration: none;
  &:hover {
    color: #ccc;
  }
`

const Image = styled.img`
  margin: 0;
`

const Nav = styled(Flex)`
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`

const Title = styled(H1)`
  flex: 4;
`

const MediaQuery = styled.div`
  @media (max-width: 600px){
    display: none;
  }
`

const Header = ({ siteTitle }) => (
  <Outer>
    <Section flex>
      <Section width={2/11} flex flexDirection="column" justifyContent="center">
        <ThemeConsumer>
          {theme => <Image src={theme.images.mainHeaderImage} />}
        </ThemeConsumer>
      </Section>

      <Section width={9 / 11} flex flexDirection="column" justifyContent="center">
        <Nav>
          <Title>
            <StyledLink to="/">{siteTitle}</StyledLink>
          </Title>
          <MediaQuery>
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="/about">About</StyledLink>
          </MediaQuery>            
        </Nav>
      </Section>
    </Section>
  </Outer>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export { Header }
