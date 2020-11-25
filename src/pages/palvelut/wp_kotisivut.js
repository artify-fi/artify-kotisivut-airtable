import React from 'react'
import Layout from "../../components/layout"
import Kotisivut from '../../components/kotisivut/Kotisivut'
import SEO from "../../components/SEO"

const wp_kotisivut = () => {
  return (
    <Layout>
      <SEO
        title='Headless Wordpress kotisivut pienyrittäjille'
        description=' Art Bachmann`s Gatsby JS kotisivut ja mobiilisovellukset. 
         Sivuston nopeudella ja suorituskyvyllä on valtava vaikutus asiakkaiden sitoutumiseen ja myyntiin. '
      />
      <Kotisivut />
    </Layout>
  )
}

export default wp_kotisivut
