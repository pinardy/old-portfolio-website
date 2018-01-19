import React from "react";

import styles from './index.module.css';
import FadeIn from '../utils/fade-in';
import g from "glamorous";
import './index.css';
import { rhythm } from "../utils/typography";
import Link from "gatsby-link"


/* <FadeIn
x={{
    start: 40,
    end: 0,
    stiffness: 70,
    damping: 20,
  }}
> */

export default ({ data }) => {
  console.log(data);

  const d = data.allMarkdownRemark.edges.filter(({ node }) => {
		const reg = new RegExp('^/blog/*');
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
      <h1> Blog </h1>
      
      <h4>{d.length} Posts</h4>

      {d.map(({ node }) => (

        <div key={node.id}>

          <Link
            to={node.fields.slug}
            css={{ textDecoration: `none`, color: `inherit` }}
          >

            <g.H3 marginBottom={rhythm(1 / 4)}>
              {node.frontmatter.title}{" "}
              <g.Span color="#BBB">— {node.frontmatter.date}</g.Span>
            </g.H3>

            <p>{node.excerpt}</p>
          
          </Link>

        </div>

      ))}
    </div>
    </FadeIn>
  );
};

export const query = graphql`
  query BlogQuery {
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