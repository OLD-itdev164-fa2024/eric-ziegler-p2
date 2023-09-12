import React from "react";
import { graphql } from "gatsby";
import Layout from '../components/layout';
import { GatsbyImage } from "gatsby-plugin-image";

const BlogPost = ({data}) => {
    const { title, body, heroImage } = data.contentfulBlogPost;

    return (
        <Layout>
            <h1>{title}</h1>
            <div><GatsbyImage image={heroImage.gatsbyImageData} /></div>
            <div dangerouslySetInnerHTML={{__html: body.childMarkdownRemark.html}}></div>
        </Layout>
    )
}

export default BlogPost;

export const pageQuery = graphql`
    query blogPostQuery($slug: String!) {
        contentfulBlogPost(slug: {eq: $slug}){
            title
            slug
            heroImage{
              gatsbyImageData
            }
            body{
              childMarkdownRemark{
                html
              }
            }
        }
    }
`