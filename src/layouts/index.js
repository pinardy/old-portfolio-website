import React from "react";
import Link from "gatsby-link";
import FadeIn from '../utils/fade-in';


// This object helps to bring us to other links
const ListLink = props =>
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>
      {props.children}
    </Link>
  </li>


export default ({ children, data }) => (
  
  <div style={{ margin: `0 auto`, maxWidth: 650, padding: `1.25rem 1rem` }}>
    <header style={{ marginBottom: `1.5rem` }}>
      <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
        <h3 style={{ display: `inline` }}> {data.site.siteMetadata.title} </h3>
      </Link>
      
        <ul style={{ listStyle: `none`, float: `right` }}>

            <ListLink to="/">Home</ListLink>
            <ListLink to="/bio/">Bio</ListLink>
            <ListLink to="/portfolio/">Portfolio</ListLink>
            <ListLink to="/blog/">Blog</ListLink>
            <ListLink to="/contact/">Contact</ListLink>
            
        </ul>
        
    </header>
    {children()}
  </div>
);

export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`