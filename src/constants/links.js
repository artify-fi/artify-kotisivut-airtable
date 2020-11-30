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
    url: `/palvelut/kotisivut`,
    icon: <FaCreditCard className="icon" />,
  },
  {
    page: "palvelut",
    label: "hakukoneoptimointi- ja markkinointi",
    url: `/palvelut/hakukoneOptimointi`,
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
    label: "kehitysprosessi",
    url: `/ratkaisut/kehitysprosessi`,
    icon: <FaAlipay className="icon" />,
  },
  {
    page: "yritys",
    label: "yhteystiedot",
    url: `/yritys/yhteystiedot`,
    icon: <FaAlipay className="icon" />,
  },
  {
    page: "hinnasto",
    label: "ilmainen arviointi",
    url: `/hinnasto/hinta_arviointi`,
    icon: <FaAlipay className="icon" />,
  },
]
