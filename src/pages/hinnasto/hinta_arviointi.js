import React from 'react'
import Layout from "../../components/layout"
import SEO from "../../components/SEO"
import UC from '../../components/UnderConstruction'
import HintaArviointi from '../../components/arviointi/HintaArviointi'

const arviointi = () => {
  return (
    <Layout>
      <SEO title='Kotisivujen tekemisen hinta'
        description='Ilmainen arviointi mitä maksaa kotisivujen tekeminen.' />
      <HintaArviointi />
      <UC />
    </Layout>
  )
}

export default arviointi
