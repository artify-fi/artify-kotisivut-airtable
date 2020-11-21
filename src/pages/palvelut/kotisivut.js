import React from 'react'
import Layout from "../../components/layout"
import Kotisivut from '../../components/kotisivut/Kotisivut'
import SEO from "../../components/SEO"

const kotisivut = () => {
  return (
    <Layout>
      <SEO title='Kotisivujen kehittäminen pienyrittäjille' />
      <Kotisivut />
    </Layout>
  )
}

export default kotisivut
