import React from "react"
import { GatsbyProvider } from "./src/context/context"

export const wrapRootElement = ({ element }) => {
  return (
    <>
      {/* <GlobalStyle />     */}
      <GatsbyProvider>{element}</GatsbyProvider>
    </>
  )
}
