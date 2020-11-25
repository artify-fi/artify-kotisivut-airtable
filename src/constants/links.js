import React from "react"
import { FaCcStripe, FaCreditCard, FaAlipay } from "react-icons/fa"
export default [
  {
    page: "koti",
    label: "etusivu",
    url: `/`,
    icon: <FaCreditCard className="icon" />,
  },
  {
    page: "palvelut",
    label: "yhteenveto",
    url: `/palvelut/yhteenveto`,
    icon: <FaCreditCard className="icon" />,
  },
  {
    page: "palvelut",
    label: "gatsbyJS kotisivut",
    url: `/palvelut/gatsby_kotisivut`,
    icon: <FaCreditCard className="icon" />,
  },
  {
    page: "palvelut",
    label: "headless Wordpress kotisivut",
    url: `/palvelut/wp_kotisivut`,
    icon: <FaCreditCard className="icon" />,
  },
  {
    page: "palvelut",
    label: "hakukoneoptimointi- ja markkinointi",
    url: `/palvelut/hakukoneoptimointi`,
    icon: <FaCreditCard className="icon" />,
  },
  {
    page: "palvelut",
    label: "digimarkkinointi",
    url: `/palvelut/digimarkkinointi`,
    icon: <FaCreditCard className="icon" />,
  },
  {
    page: "ratkaisut",
    label: "prosessi",
    url: `/ratkaisut/prosessi`,
    icon: <FaAlipay className="icon" />,
  },
  {
    page: "ratkaisut",
    label: "www-sisällönhallinta",
    url: `/ratkaisut/sisällönhallinta`,
    icon: <FaAlipay className="icon" />,
  },
  // {
  //   page: "blogi",
  //   label: "JAMstack",
  //   url: `/blogi/jamStack`,
  //   icon: <FaAlipay className="icon" />,
  // }, {
  //   page: "blogi",
  //   label: "Kestävä kehitys",
  //   url: `/blogi/kestäväKehitys`,
  //   icon: <FaAlipay className="icon" />,
  // },
  {
    page: "yritys",
    label: "yhteystiedot",
    url: `/yritys/yhteystiedot`,
    icon: <FaAlipay className="icon" />,
  },
  {
    page: "hinnasto",
    label: "ilmainen arviointi",
    url: `/hinnasto/arviointi`,
    icon: <FaAlipay className="icon" />,
  },
  // {
  //   page: "yritys",
  //   label: "Meistä",
  //   url: `/yritys/yhteystiedot`,
  //   icon: <FaAlipay className="icon" />,
  // },
  // {
  //   page: "projektit",
  //   label: "headless-cms",
  //   url: `/products/payments`,
  //   icon: <FaCcStripe className="icon" />,
  // },
  // {
  //   page: "projektit",
  //   label: "customers",
  //   url: `/products/payments`,
  //   icon: <FaCcStripe className="icon" />,
  // },
]
