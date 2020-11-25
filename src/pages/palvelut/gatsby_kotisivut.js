import React from 'react'
import Layout from "../../components/layout"
import Kotisivut from '../../components/kotisivut/Kotisivut'
import SEO from "../../components/SEO"

const gatsby_kotisivut = () => {
  return (
    <Layout>
      <SEO
        title='GatsbyJS kotisivut pienyrittäjille'
        description='Gatsby JS kotisivut ja mobiilisovellukset. 
         Sivuston nopeudella ja suorituskyvyllä on valtava vaikutus asiakkaiden sitoutumiseen ja myyntiin. '
      />
      <Kotisivut />
    </Layout>
  )
}

export default gatsby_kotisivut
