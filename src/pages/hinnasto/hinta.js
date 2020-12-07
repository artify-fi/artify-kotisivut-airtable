import React from 'react'
import Layout from "../../components/layout"
import SEO from "../../components/SEO"
import HintaArviointi from '../../components/arviointi/HintaArviointi'

const arviointi = () => {
  return (
    <Layout>
      <SEO title='Kotisivujen tekemisen hinta'
        description='Ilmainen arviointi paljon maksaa kotisivujen tekeminen.' />
      <HintaArviointi />
    </Layout>
  )
}

export default arviointi
