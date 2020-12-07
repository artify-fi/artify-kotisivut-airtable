import React from 'react'
import Layout from "../../components/layout"
import Kotisivut from '../../components/kotisivut/Kotisivut'
import SEO from "../../components/SEO"

const gatsby_kotisivut = () => {
  return (
    <Layout>
      <SEO
        title='Modernit hakukoneoptimoidut kotisivut pienyrittäjille'
        description='Nykyaikaise salamannopeatt kotisivut ja mobiilisovellukset mikä tukevat
         nopeudella ja suorituskyvyllä asiakkaiden sitoutumista ja myyntiä. '
      />
      <Kotisivut />
    </Layout>
  )
}

export default gatsby_kotisivut
