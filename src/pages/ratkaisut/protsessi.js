import React from 'react'
import Layout from '../../components/layout'
import Process from '../../components/process/Process'
import SEO from "../../components/SEO"

const protsessi = () => {
  return (
    <Layout>
      <SEO title='Yhteystyön vaiheet kotisivujen kehittämisessä' />
      <Process />
    </Layout>
  )
}

export default protsessi
