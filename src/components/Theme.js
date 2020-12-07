import { createMuiTheme } from '@material-ui/core/styles'

const white = '#FFFFFF'
const grey0 = '#d7eaf9'
const grey1 = '#dae1e2'
const grey2 = '#3a5166'
const grey3 = '#6c8084'
const grey4 = '#607D8B'
const grey5 = '#344d63'

// Greens
const green5 = '#313c2e'

// Blues 
const aqua3dark = '#62acb5'
const aqua3light = '#ade4ea'
const blue1dark = '#213b4f'
const blueLogo = '#344d63'

// Misc.. 
const sea_foam = '#a5c0ad'
const violet = '#1F1641'
const avatar = '#d4f1f4'

export default createMuiTheme({
  palette: {
    common: {
      blue1dark: `${blue1dark}`,
      blueLogo: `${blueLogo}`,
      white: `${white}`,
      grey0: `${grey0}`,
      grey1: `${grey1}`,
      grey2: `${grey2}`,
      grey3: `${grey3}`,
      grey4: `${grey4}`,
      grey5: `${grey5}`,
      violet: `${violet}`,
      sea_foam: `${sea_foam}`,
      green5: `${green5}`,
      aqua3dark: `${aqua3dark}`,
      aqua3light: `${aqua3light}`,
      avatar: `${avatar}`

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
      fontFamily: 'Open Sans Condensed ',
      textTransform: 'none',
      fontWeight: '600',
      fontSize: '1.2rem',
    },
    estimate: {
      fontSize: '1.3rem',
      textTransform: 'none',
      textDecoration: 'none',
      fontFamily: 'Merriweather',
      color: 'white',
      backgroundColor: grey2
    },
    h1: {
      fontFamily: 'Open Sans Condensed',
      fontWeight: 500,
      fontSize: '2.2rem',
      color: blue1dark,
      lineHeight: 1.4,
    },
    h2: {
      fontFamily: 'Open Sans Condensed',
      fontWeight: 500,
      fontSize: '2rem',
      color: blue1dark,
      lineHeight: 1.4,
    },
    h3: {
      fontFamily: 'Open Sans Condensed',
      fontWeight: 500,
      fontSize: '1.8rem',
      color: blue1dark,
      lineHeight: 1.3,
    },
    h4: {
      fontFamily: 'Open Sans Condensed',
      fontWeight: 500,
      fontSize: '1.4rem',
      color: grey5,
      lineHeight: 1.3
    },
    h5: {
      fontFamily: 'Open Sans Condensed',
      fontWeight: 500,
      fontSize: '1.2rem',
      color: blue1dark,
      lineHeight: 1.3
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 500,
      fontFamily: 'Open Sans Condensed',
      color: grey5,
      lineHeight: 1.3
    },
    subtitle1: {
      fontFamily: 'Open Sans',
      color: grey5,
      fontWeight: 500,
      fontSize: '1.2rem',
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
    learnButtonHero: {
      borderColor: grey4,
      borderWidth: 2,
      textTransform: 'none',
      textDecoration: 'none',
      textDecorationStyle: 'none',
      borderRadius: 50,
      fontFamily: 'Roboto',
      fontWeight: '300',
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