
import React, { useContext } from 'react'
import theme from './Theme'
import { ThemeProvider } from '@material-ui/styles'
import PropTypes from 'prop-types';
import Header from './navbar/Navbar'
import Footer from './footer/Footer'
import Sidebar from './sidebar/Sidebar'
import { GatsbyContext } from '../context/context'
import './layout.css'



const Layout = ({ children }) => {


  const { isSidebarOpen } = useContext(GatsbyContext)
  return (
    <ThemeProvider theme={theme}>
      <Header />
      {isSidebarOpen && <Sidebar />}
      {children}
      <Footer />
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout


