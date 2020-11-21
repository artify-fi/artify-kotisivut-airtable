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
    url: `/palvelut/tiivistelmä`,
    icon: <FaCreditCard className="icon" />,
  },
  {
    page: "palvelut",
    label: "kotisivut",
    url: `/palvelut/kotisivut`,
    icon: <FaCreditCard className="icon" />,
  },
  {
    page: "palvelut",
    label: "hakukoneoptimointi- ja markkinointi",
    url: `/palvelut/hakukoneOptimointi`,
    icon: <FaCreditCard className="icon" />,
  },
  // {
  //   page: "palvelut",
  //   label: "hakukonemarkkinointi",
  //   url: `/palvelut/hakukoneMarkkinointi`,
  //   icon: <FaCreditCard className="icon" />,
  // },
  {
    page: "palvelut",
    label: "digimarkkinointi googleAnalytics",
    url: `/palvelut/googleAnalytics`,
    icon: <FaCreditCard className="icon" />,
  },
  {
    page: "ratkaisut",
    label: "GatsbyJS",
    url: `/ratkaisut/gatsby`,
    icon: <FaAlipay className="icon" />,
  },
  {
    page: "ratkaisut",
    label: "Headless WordPress",
    url: `/ratkaisut/headlessCMS`,
    icon: <FaAlipay className="icon" />,
  },
  {
    page: "ratkaisut",
    label: "Protsessi",
    url: `/ratkaisut/protsessi`,
    icon: <FaAlipay className="icon" />,
  },
  {
    page: "blogi",
    label: "JAMstack",
    url: `/blogi/jamStack`,
    icon: <FaAlipay className="icon" />,
  }, {
    page: "blogi",
    label: "Kestävä kehitys",
    url: `/blogi/kestäväKehitys`,
    icon: <FaAlipay className="icon" />,
  },
  {
    page: "yritys",
    label: "yhteystiedot",
    url: `/yritys/yhteystiedot`,
    icon: <FaAlipay className="icon" />,
  },
  {
    page: "yritys",
    label: "Meistä",
    url: `/yritys/yhteystiedot`,
    icon: <FaAlipay className="icon" />,
  },
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
