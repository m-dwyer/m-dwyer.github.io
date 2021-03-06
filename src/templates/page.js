import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import IndexSection from "../components/indexsection";

export default function Page({ data }) {
  const content = data.markdownRemark;
  return (
    <Layout>
      <IndexSection>
        <h1>{content.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: content.html }} />
      </IndexSection>
    </Layout>
  );
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug }}) {
      html
      frontmatter {
        title
      }
    }
  }
`;