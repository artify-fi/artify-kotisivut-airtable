import React from "react"
import { FaCcStripe, FaCreditCard, FaAlipay } from "react-icons/fa"
export default [
  {
    page: "palvelut",
    label: "verkkosivut",
    url: `/products/payments`,
    icon: <FaCreditCard className="icon" />,
  },
  {
    page: "palvelut",
    label: "hakukoneoptimointi",
    url: `/palvelut/verkkosivut`,
    icon: <FaCreditCard className="icon" />,
  },
  {
    page: "palvelut",
    label: "hakukonemarkkinointi",
    url: `/palvelut/hakukoneOptimointi`,
    icon: <FaCreditCard className="icon" />,
  },
  {
    page: "palvelut",
    label: "google analytics",
    url: `/palvelut/hakukoneMarkkinointi`,
    icon: <FaCreditCard className="icon" />,
  },
  {
    page: "ratkaisut",
    label: "documentation",
    url: `/palvelut/googleAnalytics`,
    icon: <FaAlipay className="icon" />,
  },
  {
    page: "ratkaisut",
    label: "projektit",
    url: `/ratkaisut/projektit`,
    icon: <FaAlipay className="icon" />,
  },
  // {
  //   page: "projektit",
  //   label: "gatsby.js",
  //   url: `/products/payments`,
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
