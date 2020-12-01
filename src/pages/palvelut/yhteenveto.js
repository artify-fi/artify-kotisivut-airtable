import React from 'react'
import Layout from "../../components/layout"
import SEO from "../../components/SEO"
import Tiivistelma from '../../components/tiivistelma/Tiivistelma'

const tiivistelma = () => {
  return (
    <Layout>
      <SEO title='Yleiskatsaus kotisivujen kehittämisprosessista' />
      <Tiivistelma />
    </Layout>
  )
}

export default tiivistelma
