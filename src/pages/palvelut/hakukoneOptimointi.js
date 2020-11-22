import React from 'react'
import Layout from "../../components/layout"
import SeoJaSem from '../../components/hakukoneoptimointi/SeoJaSem'
import SEO from "../../components/SEO"

const hakukoneOptimointi = () => {
  return (
    <Layout>
      <SEO title='SEO - Hakukoneoptimointi' />
      <SeoJaSem />
    </Layout>
  )
}

export default hakukoneOptimointi
