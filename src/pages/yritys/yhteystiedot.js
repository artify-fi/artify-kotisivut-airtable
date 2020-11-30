import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/SEO"
import Contact from '../../components/contactComponent/Contact'

const contact = () => {
  return (
    <Layout>
      <SEO title="Artify yhteystiedot ja asiointi" />
      <Contact />
    </Layout>
  )
}

export default contact