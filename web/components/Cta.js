import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import styles from './Cta.module.css'

function cta (props) {
  const {title, route, link, project} = props

  if (project && project.slug && project.slug.current) {
    return (
      <Link
        href={{
          pathname: '/project',
          query: {slug: project.slug.current}
        }}
        as={`/${project.slug.current}`}
      >
        <a className={styles.button}>{title}</a>
      </Link>
    )
  }

  if (route && route.slug && route.slug.current) {
    return (
      <Link
        href={{
          pathname: '/LandingPage',
          query: {slug: route.slug.current}
        }}
        as={`/${route.slug.current}`}
      >
        <a className={styles.button}>{title}</a>
      </Link>
    )
  }

  if (link) {
    return (
      <a className={styles.button} href={link}>
        {title}
      </a>
    )
  }

  return <a className={styles.button}>{title}</a>
}

cta.propTypes = {
  title: PropTypes.string.isRequired,
  route: PropTypes.shape({
    slug: PropTypes.shape({
      current: PropTypes.string
    })
  }),
  project: PropTypes.shape({
    slug: PropTypes.shape({
      current: PropTypes.string
    })
  }),
  link: PropTypes.string
}

export default cta
