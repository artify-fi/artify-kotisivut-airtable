import React from 'react'
import Layout from '../../components/layout'
import Prosessi from '../../components/process/Prosessi'
import SEO from "../../components/SEO"

const protsessi = () => {
  return (
    <Layout>
      <SEO title='Yhteystyön vaiheet kotisivujen kehittämisessä' />
      <Prosessi />
    </Layout>
  )
}

export default protsessi
