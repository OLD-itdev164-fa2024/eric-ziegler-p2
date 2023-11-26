import React from "react"
import { graphql, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const About = ({ data }) => {
    const { name, company } = data.site.siteMetadata.contact;
    return (
        <Layout>
            <Seo title="Home" />
            <h1>About Us</h1>
            <p>{`${company} was started by ${name} in 2023.`}</p>
            <Link to="/">Home</Link>
        </Layout>
    )
}

export default About

export const query = graphql`
    query{
        site{
            siteMetadata{
                contact{
                    name
                    company
                }
            }
        }
    }
`