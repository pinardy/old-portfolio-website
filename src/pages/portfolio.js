import React from "react";

import styles from './index.module.css';
import FadeIn from '../utils/fade-in';
import g from "glamorous";
import './index.css';
import { rhythm } from "../utils/typography";
import Link from "gatsby-link"


export default ({ data }) => {
  console.log(data);

  const d = data.allMarkdownRemark.edges.filter(({ node }) => {
		const reg = new RegExp('^/portfolio/*');
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
      <h4> This portfolio contains projects that I have done
          over the course of my education in SUTD.  </h4>

      <h5> Projects are from fields ranging from Machine Learning to Internet of Things</h5>

      {d.map(({ node }) => (
        <div key={node.id}>
          <Link
            to={node.fields.slug}
            css={{ textDecoration: `none`, color: `inherit` }}
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
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
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