import React from 'react'
import Layout from "../../components/layout"
import UC from '../../components/UnderConstruction'
import SEO from "../../components/SEO"

const kotisivut = () => {
  return (
    <Layout>
      <SEO title='Kotisivujen kehittäminen pienyrittäjille' />
      <UC />
    </Layout>
  )
}

export default kotisivut
