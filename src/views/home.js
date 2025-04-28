import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container1">
      <Helmet>
        <title>Double Glass Horse</title>
        <meta property="og:title" content="Double Glass Horse" />
      </Helmet>
      <div className="home-container2">
        <a href="mailto:info@wonkysausage.com?subject=" className="home-link">
          <img
            alt="image"
            src="/construction-200h.jpg"
            className="home-image"
          />
        </a>
      </div>
    </div>
  )
}

export default Home
