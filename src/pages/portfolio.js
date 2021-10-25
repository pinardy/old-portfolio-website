import React from "react";

import FadeIn from "../utils/fade-in";
import "./index.css";
import Link from "gatsby-link";

export default ({ data }) => {
  const d = data.allMarkdownRemark.edges.filter(({ node }) => {
    const reg = new RegExp("^/portfolio/*");
    if (node.fields.slug) {
      return reg.test(node.fields.slug);
    }
    return null;
  });

  return (
    <FadeIn
      x={{
        start: 40,
        end: 0,
        stiffness: 70,
        damping: 20,
      }}
    >
      <div>
        <h5>
          This portfolio contains projects that I have done over the course of
          my education in SUTD.
        </h5>

        {d.map(({ node }) => (
          <div key={node.id}>
            <Link
              to={node.fields.slug}
              css={{ textDecoration: `blue`, color: `inherit` }}
            >
              <p>View projects</p>
            </Link>
          </div>
        ))}
      </div>
    </FadeIn>
  );
};

export const query = graphql`
  query PortfolioQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`;
