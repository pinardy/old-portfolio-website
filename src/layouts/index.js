import React from "react";
import Link from "gatsby-link";
import FadeIn from '../utils/fade-in';

import styles from './index.module.css';
import favicon from '../favicon.ico';

import chineseName from '../assets/images/chinese_name.jpg';
import logo from '../assets/images/logo.png';


// This object helps to bring us to other links
const ListLink = props =>
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>
      {props.children}
    </Link>
  </li>


export default ({ children, data }) => (
  
  <div style={{ margin: `0 auto`, maxWidth: 850, padding: `1.25rem 1rem` }}>
    <link rel="shortcut icon" href={favicon} />
    <header style={{ marginBottom: `1.5rem` }}>

      <div style={{ display: 'inline' }}>
        <img className={styles.flashLogo} src={logo} alt="logo" />
        <div className={styles.navLogo}>
          <h3 style={{ display: `inline` }}> {data.site.siteMetadata.title} </h3>
        </div>
        <img className={styles.flashLogo} src={chineseName} alt="chineseName" />
      </div>

        <ul style={{ listStyle: `none`, float: `right` }}>
            <ListLink to="/">Home</ListLink>
            <ListLink to="/bio/">Bio</ListLink>
            <ListLink to="/portfolio/">Portfolio</ListLink>
            <ListLink to="/blog/">Blog</ListLink>
            <ListLink to="/cv/">C.V.</ListLink>
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