import React from 'react'
import LandingBlock from './LandingBlock'
import Services from '../services/Services'
import QR from '../qrBlock/QRBlock'

const LandingPage = () => {
  return (
    <>
      <LandingBlock />
      <Services />
      <QR />
    </>
  )
}

export default LandingPage