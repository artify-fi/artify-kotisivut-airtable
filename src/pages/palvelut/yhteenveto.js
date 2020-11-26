import React from 'react'
import Layout from "../../components/layout"
import SEO from "../../components/SEO"
import Tiivistelmä from '../../components/tiivistelmä/Tiivistelmä'

const tiivistelmä = () => {
  return (
    <Layout>
      <SEO title='Yleiskatsaus kotisivujen kehittämisprosessista' />
      <Tiivistelmä />
    </Layout>
  )
}

export default tiivistelmä
