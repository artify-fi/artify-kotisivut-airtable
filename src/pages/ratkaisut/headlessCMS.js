import React from 'react'
import HeadlessWP from '../../components/headlessWP/HeadlessWordPress'
import Layout from '../../components/layout'
import SEO from "../../components/SEO"

const headlessCMS = () => {
  return (
    <Layout>
      <SEO title='Headless Wordpress' />
      <HeadlessWP />
    </Layout>
  )
}

export default headlessCMS
