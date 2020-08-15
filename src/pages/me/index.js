import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import { graphql, useStaticQuery } from 'gatsby'

import { DefaultLayout } from '../../components'

import headshot from '../../../static/headshot.jpg'


function MeRoute(props) {
  const { location } = props
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `
  )

  return (
    <DefaultLayout
      location={ location }  
    >
      <Helmet>
        <title>Me | { site.siteMetadata.title }</title>
        <meta name="description" content={ site.siteMetadata.description } />

        <meta property="og:title" content={ 'Me | ' + site.siteMetadata.title } />
        <meta property="og:description" content={ site.siteMetadata.description } />

        <meta name="twitter:title" content={ 'Me | ' + site.siteMetadata.title } />
        <meta name="twitter:description" content={ site.siteMetadata.description } />
      </Helmet>

      <article className="post">
        <h1 className="post__title">Me</h1>
        <div className="post__content">
          <p>I really need a better photo.</p>
          <div className="post__content__image">
            <img src={headshot} alt="My beautiful face" />
          </div>
        </div>
      </article>
    </DefaultLayout>
  )
}

MeRoute.propTypes = {
  location: PropTypes.node.isRequired,
}

export default MeRoute