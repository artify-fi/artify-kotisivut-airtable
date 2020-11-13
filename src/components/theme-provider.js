import React from "react"
import { createMuiTheme, ThemeProvider } from '@material-ui/core'


const white = '#FFFFFF'

const grey1 = '#dae1e2'
const grey2 = '#f3f3f3'
const grey3 = '#6c8084'
const grey4 = '#607D8B'
const grey5 = '#274549'

// Greens
const green5 = '#313c2e'

// Blues 
const aqua3dark = '#62acb5'
const aqua3light = '#ade4ea'
const blue1dark = '#213b4f'

// Misc.. 
const sea_foam = '#a5c0ad'
const violet = '#1F1641'

const theme = createMuiTheme({
  palette: {
    common: {
      blue1dark: `${blue1dark}`,
      white: `${white}`,
      grey1: `${grey1}`,
      grey2: `${grey2}`,
      grey3: `${grey3}`,
      grey4: `${grey4}`,
      grey5: `${grey5}`,
      violet: `${violet}`,
      sea_foam: `${sea_foam}`,
      green5: `${green5}`,
      aqua3dark: `${aqua3dark}`,
      aqua3light: `${aqua3light}`

    },
    primary: {
      main: `${blue1dark}`
    },
    secondary: {
      main: `${grey4}`,
    },


  },
  typography: {
    tab: {
      fontFamily: 'Proza Libre',
      textTransform: 'none',
      fontWeight: '600',
      fontSize: '1.2rem',
    },
    estimate: {
      fontSize: '1.3rem',
      textTransform: 'none',
      textDecoration: 'none',
      fontFamily: 'Proza Libre',
      color: 'white',
      backgroundColor: grey4
    },
    h1: {
      fontFamily: 'Proza Libre',
      fontWeight: 600,
      fontSize: '1.8rem',
      color: blue1dark,
      lineHeight: 1.6,
    },
    h2: {
      fontFamily: 'Proza Libre',
      fontWeight: 600,
      fontSize: '1.8rem',
      color: grey4,
      lineHeight: 1.4,
    },
    h3: {
      fontFamily: 'Proza Libre',
      fontWeight: 600,
      fontSize: '1.7rem',
      color: violet,
      lineHeight: 1.5,
    },
    h4: {
      fontFamily: 'Proza Libre',
      fontWeight: 600,
      fontSize: '1.4rem',
      color: blue1dark,
      lineHeight: 1.3
    },
    h5: {
      fontFamily: 'Proza Libre',
      fontWeight: 600,
      fontSize: '1.2rem',
      color: grey5,
      lineHeight: 1.3
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 500,
      fontFamily: 'Proza Libre',
      color: grey5,
    },
    subtitle1: {
      fontFamily: 'Open Sans',
      color: grey5,
      fontWeight: 500,
      fontSize: '1.1rem',
      lineHeight: 1.4
    },
    subtitle2: {
      fontFamily: 'Open Sans',
      color: grey5,
      fontSize: '1rem',
      fontWeight: 400
    },
    body1: {
      fontSize: '1.1rem',
      fontFamily: 'Open Sans',
      color: grey5,
      fontWeight: '500'
    },
    body2: {
      fontSize: '0.9rem',
      fontFamily: 'Open Sans',
      color: grey5,
      fontWeight: '500'
    },
    caption: {
      fontSize: '1rem',
      fontWeight: 400,
      color: violet,
    },
    learnButton: {
      borderColor: grey4,
      borderWidth: 2,
      textTransform: 'none',
      textDecoration: 'none',
      textDecorationStyle: 'none',
      borderRadius: 50,
      fontFamily: 'Proza Libre',
      fontWeight: '600',
      color: grey4,
    },
  },
  overrides: {
    MuiInputLabel: {
      root: {
        color: violet,
        fontSize: '1rem'
      }
    },
    MuiInput: {
      root: {
        color: grey4,
        fontWeight: 300,
      },
      underline: {
        '&:before': {
          borderBottom: `2px solid ${violet}`
        },
        "&:hover:not($disabled):not($focused):not($error):before": {
          borderBottom: `2px solid ${violet}`
        }
      }
    }
  }
})

const Theme = ({ path, children }) => {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  )
}
export default Theme