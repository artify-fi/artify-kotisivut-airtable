import React from "react"
import '../css/main.css'
import Layout from "../components/layout"
import SEO from "../components/SEO"
import LandingPage from '../components/landingPage/LandingPage'


const IndexPage = () => (
  <Layout>
    <SEO
      title='Nykuaikaiset progressiiviset kotisivut'
    />
    <LandingPage />
  </Layout>
)

export default IndexPage