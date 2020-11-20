import React from 'react'
import Layout from "../../components/layout"
import UC from '../../components/UnderConstruction'
import SEO from "../../components/SEO"

const gatsby = () => {
  return (
    <Layout>
      <SEO title='Gatsby.js rakentaa tulevaisuuden verkkoa.' />
      <UC />
    </Layout>
  )
}

export default gatsby
