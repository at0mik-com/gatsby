import React from "react";
import { Link, graphql } from "gatsby";
import SEO from "../components/seo";
import Layout from "../components/layout";

const AboutPage = ({data}) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`;
  const siteDescription = data.site.siteMetadata.description;
  
  return (
    <Layout>
      <SEO title={siteTitle} description={siteDescription} />
      <div>
        <h1>About</h1>
        <p>The about page</p>
      </div>
    </Layout>
  ); 

}
export default AboutPage

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
  }
`;