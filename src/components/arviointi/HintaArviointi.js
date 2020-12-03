import React, { useState } from "react";
import axios from "axios";

import { cloneDeep } from "lodash";
import { makeStyles, useTheme } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import TextField from "@material-ui/core/TextField";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Hidden from "@material-ui/core/Hidden";
import Snackbar from "@material-ui/core/Snackbar";
import CircularProgress from "@material-ui/core/CircularProgress";

import check from "../../assets/images/arviointi-react/check.svg";
import send from "../../assets/images/arviointi-react/send.svg";

import backArrow from "../../assets/images/arviointi-react/backArrow.svg";
import backArrowDisabled from "../../assets/images/arviointi-react/backArrowDisabled.svg";
import forwardArrow from "../../assets/images/arviointi-react/forwardArrow.svg";
import forwardArrowDisabled from "../../assets/images/arviointi-react/forwardArrowDisabled.svg";

// import person from "../../assets/images/arviointi-react/person.svg";
// import persons from "../../assets/images/arviointi-react/persons.svg";
// import info from "../../assets/images/arviointi-react/info.svg";
// import people from "../../assets/images/arviointi-react/people.svg";
// import customized from "../../assets/images/arviointi-react/customized.svg";
// import data from "../../assets/images/arviointi-react/data.svg";
// import globe from "../../assets/images/arviointi-react/globe.svg";

import responsiveApp from '../../assets/images/arviointi/appDevelopmentTr.webp'
import digiMarkkinointi from "../../assets/images/arviointi/digitalMarketingW.webp";
import landingPage from '../../assets/images/arviointi/landingPageW.webp'
import basicApp from '../../assets/images/arviointi/basicAppW.webp'
import headlessApp from '../../assets/images/arviointi/headlessAppW.webp'
import sisallonhallinta from '../../assets/images/arviointi/sisallonhallinta.webp'
import chatBot from '../../assets/images/arviointi/chatBotW.webp'
import search from '../../assets/images/arviointi/searchW.webp'
import login from '../../assets/images/arviointi/loginW.webp'
import videoPlayer from '../../assets/images/arviointi/videoPlayer.webp'
import pushNotification from '../../assets/images/arviointi/pushNotificationW.webp'
import verkkokauppa from '../../assets/images/arviointi/verkkokauppa.webp'
import yksiKieli from '../../assets/images/arviointi/yksiKielitr.png'
import kolmeKielta from '../../assets/images/arviointi/kolmeKieltatr.png'
import montaKielta from '../../assets/images/arviointi/montaKieltatr.png'
import yksinkertainen from '../../assets/images/arviointi/yksinkertainen.webp'
import kustomoitu from '../../assets/images/arviointi/kustomoitu.webp'
import ainulaatuinen from '../../assets/images/arviointi/ainulaatuinen.webp'
//import infoBackground from '../../assets/images/abstract_background_small.webp'
import infoBackground from '../../assets/images/background4.jpg'
import gatsbyLogo from "../../assets/images/Gatsby_Logo.webp";




const useStyles = makeStyles(theme => ({
  icon: {
    width: "16em",
    height: "16em",
    [theme.breakpoints.down("sm")]: {
      width: "12em",
      height: "12em",
    }
  },

  infoBackground: {
    backgroundImage: `url(${infoBackground})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    position: 'sticky',
  },

  estimateButton: {
    ...theme.typography.estimate,
    borderRadius: 50,
    backgroundColor: theme.palette.common.grey5,
    height: 50,
    width: 225,
    marginTop: "5em",
    fontSize: "1.25rem",
    "&:hover": {
      backgroundColor: theme.palette.secondary.light
    }
  },
  message: {
    border: `2px solid ${theme.palette.common.blue}`,
    marginTop: "3em",
    marginBottom: "2em",
    borderRadius: 5
  },
  specialText: {
    fontFamily: "Raleway",
    fontWeight: 700,
    fontSize: "2rem",
    color: theme.palette.common.orange
  },

  header1: {
    ...theme.typography.h1,
    // larger than 1920
    [theme.breakpoints.down('xl')]: {
      fontSize: '2.4rem',
      marginTop: '1.2em',
      marginBottom: '1em',
      paddingLeft: '3em',
      paddingRight: '3em',
    },

    // 1280  and  up to 1920
    [theme.breakpoints.down('lg')]: {
      fontSize: '2.4rem',
      marginTop: '1em',
      marginBottom: '1em',
      paddingLeft: '2.3em',
      paddingRight: '2.3em',
    },

    // 960 and up to 1280
    [theme.breakpoints.down('md')]: {
      fontSize: '2rem',
      marginTop: '2.6em',
      paddingLeft: '2em',
      paddingRight: '2em',
    },

    // 600 up to 960        
    [theme.breakpoints.down('sm')]: {
      marginTop: '4em',
      fontSize: '1.6rem',
      paddingLeft: '0.8em',
      paddingRight: '0.8em',
    },

    // 0 upt to 600
    fontFamily: 'Open Sans Condensed',
    fontWeight: '500',
    [theme.breakpoints.down('xs')]: {
      marginTop: '4em',
      fontSize: '1.6rem',
      marginBottom: '1em',
      paddingLeft: '0.8em',
      paddingRight: '0.8em',
    },
  },

  header2: {
    // larger than 1920
    ...theme.typography.h2,

    [theme.breakpoints.down('xl')]: {
    },

    // 1280  and  up to 1920
    [theme.breakpoints.down('lg')]: {
      fontSize: '1.8rem',
      marginTop: '2em',
      marginBottom: '2em',
      paddingLeft: '3em',
      paddingRight: '3em'
    },

    // 960 and up to 1280
    [theme.breakpoints.down('md')]: {
      fontSize: '1.6rem',
      marginTop: '1em',
      marginBottom: '1.8em',
      paddingLeft: '2em',
      paddingRight: '2em',
      maxWidth: '60vw'
    },

    // 600 up to 960
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.4rem',
      marginTop: '0.6em',
      marginBottom: '1.6em',
      paddingLeft: '1.4em',
      paddingRight: '1.4em',
      maxWidth: '80vw'
    },

    // 0 upt to 600
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.4rem',
      paddingLeft: '1.2em',
      paddingRight: '1.2em',
      marginTop: '2em',
      marginTop: '0.2em',
      marginBottom: '0.4em',
      maxWidth: '80vw'
    },
  },

  optionsTitle: {
    ...theme.typography.h4,
    marginBottom: '0.2em',
    [theme.breakpoints.down('xl')]: {
      fontSize: '2rem',
    },

    // 1280  and  up to 1920
    [theme.breakpoints.down('lg')]: {
      fontSize: '2rem',
      paddingLeft: '1.3em',
      paddingRight: '1.3em'
    },

    // 960 and up to 1280
    [theme.breakpoints.down('md')]: {
      fontSize: '1.8rem',
      paddingLeft: '1.2em',
      paddingRight: '1.2em'
    },

    // 600 up to 960
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.4rem',
      paddingLeft: '3em',
      paddingRight: '3em'
    },

    // 0 upt to 600
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.4rem',
      paddingLeft: '1.2em',
      paddingRight: '1.2em',
    },
  },

  optionsSubtitle: {
    ...theme.typography.h5,
    ...theme.palette.common.blue1dark,
    [theme.breakpoints.down('xl')]: {
      fontSize: '1.8rem',
      marginBottom: '2em',
    },

    // 1280  and  up to 1920
    [theme.breakpoints.down('lg')]: {
      fontSize: '1.5rem',
      paddingLeft: '1.3em',
      paddingRight: '1.3em'
    },

    // 960 and up to 1280
    [theme.breakpoints.down('md')]: {
      fontSize: '1.3rem',
      paddingLeft: '1.2em',
      paddingRight: '1.2em',
      color: 'blue1dark',
    },

    // 600 up to 960
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.1rem',
      paddingLeft: '1.2em',
      paddingRight: '1.2em'
    },

    // 0 upt to 600
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.1rem',
      paddingLeft: '1.2em',
      paddingRight: '1.2em',
      marginBottom: '0.4em'
    },
  },

  questionSubtitle: {
    // larger than 1920
    ...theme.typography.h2,
    [theme.breakpoints.down('xl')]: {
      fontSize: '2rem',
    },

    // 1280  and  up to 1920
    [theme.breakpoints.down('lg')]: {
      fontSize: '1.4rem',
      paddingLeft: '3em',
      paddingRight: '3em',
      marginBottom: '2em'
    },

    // 960 and up to 1280
    [theme.breakpoints.down('md')]: {
      fontSize: '1.2rem',
      paddingLeft: '2em',
      paddingRight: '2em',
      marginBottom: '2em'
    },

    // 600 up to 960
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.1rem',
      paddingLeft: '1.4em',
      paddingRight: '1.4em',
      marginBottom: '1.4em'
    },

    // 0 upt to 600
    [theme.breakpoints.down('xs')]: {
      fontSize: '1rem',
      paddingLeft: '1.2em',
      paddingRight: '1.2em',
      marginBottom: '0.4em'
    },
  },
}));

const defaultQuestions = [
  {
    id: 1,
    title: "Millaisista kotisivuista olette kiinnostunut?",
    active: true,
    options: [
      {
        id: 1,
        title: "Moderni GatsbyJS LandingPage",
        subtitle: 'Mobiilisovellus kaupan päälle*',
        icon: responsiveApp,
        iconAlt: "progressiivinen kotisivu desktop tablet mobile",
        selected: false,
        cost: 300
      },
      {
        id: 2,
        title: 'GatsbyJS progressiivinen kotisivu',
        subtitle: 'Mobiilisovellus kaupan päälle*',
        icon: verkkokauppa,
        iconAlt: "headlessCMS sisällönhallinta",
        selected: false,
        cost: 400
      },
      {
        id: 3,
        title: "GatsbyJS:n verkkosovellus Headless WordPressin taustajärjestelmällä.",
        subtitle: null,
        icon: digiMarkkinointi,
        iconAlt: "digitaalisen marketingin työvälinet",
        selected: false,
        cost: 700
      }
    ]
  }
];

const landingPageQuestions = [
  {
    id: 1,
    title: "Millaisista kotisivuista olette kiinnostunut?",
    active: false,
    options: [
      {
        id: 1,
        title: "Moderni GatsbyJS LandingPage",
        subtitle: 'Mobiilisovellus kaupan päälle',
        icon: responsiveApp,
        iconAlt: "progressiivinen landingpage desktop tablet mobile",
        selected: false,
        cost: 300
      },
      {
        id: 2,
        title: 'Moderni GatsbyJS progressiivinen kotisivu',
        subtitle: 'Mobiilisovellus kaupan päälle',
        icon: verkkokauppa,
        iconAlt: "responsiivinen kotisivu",
        selected: false,
        cost: 400
      },
      {
        id: 3,
        title: "GatsbyJS:n verkkosovellus Headless WordPressin taustajärjestelmällä.",
        subtitle: null,
        icon: digiMarkkinointi,
        iconAlt: "headless wordpress ja gatsby.js",
        selected: false,
        cost: 700
      }
    ]
  },

  {
    id: 2,
    title: "Miten haluatte että toteutamme Teidän kotisivun sisällön?",
    subtitle: "Valitse sopiva ja menee nuolella seuraavaan valikoimaan.",
    options: [
      {
        id: 1,
        title: "Tuotamme itse hyvänlaatuisen sisällön",
        subtitle: null,
        icon: landingPage,
        iconAlt: "valmiina oleva sisältö",
        selected: false,
        cost: 100
      },
      {
        id: 2,
        title: "Haluamme että laaditte  hakukoneystävällisen sisällön.",
        subtitle: null,
        icon: basicApp,
        iconAlt: "Artify luo oman sisällön",
        selected: false,
        cost: 200
      },
      {
        id: 3,
        title: "Tuotatte sisällön ja päivitätte sitä ensimmäisen vuoden",
        subtitle: null,
        icon: headlessApp,
        iconAlt: "päätön wordpress",
        selected: false,
        cost: 500
      }
    ],
    active: true
  },
  {
    id: 3,
    title: "Minkälaäisiä komponentteja tarvitsette sivustolle?",
    subtitle: "Valitse haluaetessa useampi ja liikuu nuolella seuraavaan valikoimaan.",
    options: [
      {
        id: 1,
        title: "Analyyttiset työvälinet",
        subtitle: 'Esim. Google Analytics',
        icon: sisallonhallinta,
        iconAlt: "google analytics search engine optimization",
        selected: true,
        cost: 50
      },
      {
        id: 2,
        title: "Chatbot",
        subtitle: null,
        icon: chatBot,
        iconAlt: "chat bot voice bot",
        selected: false,
        cost: 150
      },
      {
        id: 3,
        title: "Tiedonhaku sisällöstä",
        subtitle: null,
        icon: search,
        iconAlt: "etsinta ja tiedon haku",
        selected: false,
        cost: 50
      },
    ],
    active: false
  },
  {
    id: 4,
    title: "Minkälaäisiä komponentteja tarvitsette sivustolle?",
    subtitle: "Valitse haluaetessa useampi ja liikuu nuolella seuraavaan valikkoon.",
    options: [
      {
        id: 1,
        title: "Turvallinen sisäänkirjoitus",
        subtitle: null,
        icon: login,
        iconAlt: "sisäänkirjoitus käyttäjille",
        selected: false,
        cost: 50
      },
      {
        id: 2,
        title: "Videoiden esittäminen",
        subtitle: null,
        icon: videoPlayer,
        iconAlt: "video esitys",
        selected: false,
        cost: 50
      },
      {
        id: 3,
        title: "Push-ilmoitukset",
        subtitle: null,
        icon: pushNotification,
        iconAlt: "tiedon lähettäminen push ilmoitukset",
        selected: false,
        cost: 50
      }
    ],
    active: false
  },
  {
    id: 5,
    title: "Montako eri kieltä haluat käyttää sivustolla?",
    subtitle: "Valitse sopiva vaihtoehto ja siirry nuolella eteenpäin.",
    options: [
      {
        id: 1,
        title: "Yksi kieli",
        subtitle: "",
        icon: yksiKieli,
        iconAlt: "yksi kieli sivustollaf",
        selected: false,
        cost: 0
      },
      {
        id: 2,
        title: "Kolme kieltä",
        subtitle: "",
        icon: kolmeKielta,
        iconAlt: "kolme kielta sivustolla",
        selected: false,
        cost: 200
      },
      {
        id: 3,
        title: "Monta eri kieltä",
        subtitle: "",
        icon: montaKielta,
        iconAlt: "paljon eri kielia sivustolla",
        selected: false,
        cost: 300
      }
    ],
    active: false
  },
  {
    id: 6,
    title: "Kuinka ainulaatuinen sinun  sivuston ulkoasu pitäisi olla?",
    options: [
      {
        id: 1,
        title: "Yksikertainen, valmis pohja.",
        subtitle: null,
        icon: yksinkertainen,
        iconAlt: "yksinkertainen kotisivu",
        selected: false,
        cost: 1
      },
      {
        id: 2,
        title: "Kustomoitu sivusto, muutokset valmiille pohjalle",
        subtitle: null,
        icon: kustomoitu,
        iconAlt: "kustomoitu kotisivu",
        selected: false,
        cost: 1.25
      },
      {
        id: 3,
        title: "Personaalinen, juuri Teille räätälöity sivusto ",
        subtitle: null,
        icon: ainulaatuinen,
        iconAlt: "personaalinen ainulaatuinen kotisivu",
        selected: false,
        cost: 1.75
      }
    ],
    active: false
  }
];

const kotisivutQuestions = [
  {
    id: 1,
    title: "Millaisesta kotisivusta olet kiinnostunut?",
    active: false,
    options: [
      {
        id: 1,
        title: "Moderni GatsbyJS LandingPage",
        subtitle: 'Mobiilisovellus kaupan päälle',
        icon: responsiveApp,
        iconAlt: "progressiivinen landingpage desktop tablet mobile",
        selected: false,
        cost: 300
      },
      {
        id: 2,
        title: 'Moderni GatsbyJS progressiivinen kotisivu',
        subtitle: 'Mobiilisovellus kaupan päälle',
        icon: verkkokauppa,
        iconAlt: "responsiivinen kotisivu",
        selected: false,
        cost: 400
      },
      {
        id: 3,
        title: "GatsbyJS:n verkkosovellus Headless WordPressin taustajärjestelmällä.",
        subtitle: null,
        icon: digiMarkkinointi,
        iconAlt: "headless wordpress ja gatsby.js",
        selected: false,
        cost: 700
      }
    ]
  },
  {
    id: 2,
    title: "Miten haluatte että toteutamme Teidän kotisivun sisällön?",
    subtitle: "Valitse sopiva ja mene nuolella seuraavaan valikkoimaan.",
    options: [
      {
        id: 1,
        title: "Tuotamme itse hyvänlaatuisen sisällön",
        subtitle: null,
        icon: landingPage,
        iconAlt: "valmiina oleva sisältö",
        selected: false,
        cost: 100
      },
      {
        id: 2,
        title: "Haluamme että laaditte hakukoneystävällisen sisällön.",
        subtitle: null,
        icon: basicApp,
        iconAlt: "Artify luo oman sisällön",
        selected: false,
        cost: 200
      },
      {
        id: 3,
        title: "Tuotatte sisällön ja päivitätte sitä ensimmäisen vuoden.",
        subtitle: null,
        icon: headlessApp,
        iconAlt: "päätön wordpress",
        selected: false,
        cost: 500
      }
    ],
    active: true
  },
  {
    id: 3,
    title: "Minkälaäisiä komponentteja tarvitsette sivustolle?",
    subtitle: "Valitse haluaetessa useampi ja liikuu nuolella seuraavaan valikkoon.",
    options: [
      {
        id: 1,
        title: "Analyyttiset työvälinet",
        subtitle: 'Esim. Google Analytics',
        icon: sisallonhallinta,
        iconAlt: "google analytics search engine optimization",
        selected: true,
        cost: 50
      },
      {
        id: 2,
        title: "Chatbot",
        subtitle: null,
        icon: chatBot,
        iconAlt: "chat bot voice bot",
        selected: false,
        cost: 150
      },
      {
        id: 3,
        title: "Tiedonhaku sisällöstä",
        subtitle: null,
        icon: search,
        iconAlt: "etsinta ja tiedon haku",
        selected: false,
        cost: 50
      }
    ],
    active: false
  },
  {
    id: 4,
    title: "Minkälaäisiä komponentteja tarvitsette sivustolle?",
    subtitle: "Valitse haluaetessa useampi ja liikuu nuolella seuraavaan valikkoon.",
    options: [
      {
        id: 1,
        title: "Turvallinen sisäänkirjoitus",
        subtitle: null,
        icon: login,
        iconAlt: "sisäänkirjoitus käyttäjille",
        selected: false,
        cost: 50
      },
      {
        id: 2,
        title: "Videoiden esittäminen",
        subtitle: null,
        icon: videoPlayer,
        iconAlt: "video esitys",
        selected: false,
        cost: 50
      },
      {
        id: 3,
        title: "Push-ilmoitukset",
        subtitle: null,
        icon: pushNotification,
        iconAlt: "tiedon lähettäminen push ilmoitukset",
        selected: false,
        cost: 50
      }
    ],
    active: false
  },
  {
    id: 5,
    title: "Montako eri kieltä haluat käyttää sivustolla?",
    subtitle: "Valitse sopiva vaihtoehto ja siirry nuolella eteenpäin.",
    options: [
      {
        id: 1,
        title: "Yksi kieli",
        subtitle: "",
        icon: yksiKieli,
        iconAlt: "yksi kieli sivustollaf",
        selected: false,
        cost: 0
      },
      {
        id: 2,
        title: "Kolme kieltä",
        subtitle: "",
        icon: kolmeKielta,
        iconAlt: "kolme kielta sivustolla",
        selected: false,
        cost: 200
      },
      {
        id: 3,
        title: "Monta eri kieltä",
        subtitle: "",
        icon: montaKielta,
        iconAlt: "paljon eri kielia sivustolla",
        selected: false,
        cost: 300
      }
    ],
    active: false
  },
  {
    id: 6,
    title: "Kuinka ainulaatuinen sinun  sivuston ulkoasu pitäisi olla?",
    options: [
      {
        id: 1,
        title: "Yksikertainen, valmis pohja.",
        subtitle: null,
        icon: yksinkertainen,
        iconAlt: "yksinkertainen kotisivu",
        selected: false,
        cost: 1
      },
      {
        id: 2,
        title: "Kustomoitu sivusto, muutokset valmiille pohjalle",
        subtitle: null,
        icon: kustomoitu,
        iconAlt: "kustomoitu kotisivu",
        selected: false,
        cost: 1.25
      },
      {
        id: 3,
        title: "Personaalinen, juuri Teille räätälöity sivusto ",
        subtitle: null,
        icon: ainulaatuinen,
        iconAlt: "personaalinen ainulaatuinen kotisivu",
        selected: false,
        cost: 1.75
      }
    ],
    active: false
  }
];

const headlessWPQuestions = [
  {
    id: 1,
    title: "Millaisesta kotisivusta olet kiinnostunut?",
    active: false,
    options: [
      {
        id: 1,
        title: "Moderni GatsbyJS LandingPage",
        subtitle: 'Mobiilisovellus kaupan päälle',
        icon: responsiveApp,
        iconAlt: "progressiivinen landingpage desktop tablet mobile",
        selected: false,
        cost: 300
      },
      {
        id: 2,
        title: 'Moderni GatsbyJS progressiivinen kotisivu',
        subtitle: 'Mobiilisovellus kaupan päälle',
        subtitle: null,
        icon: verkkokauppa,
        iconAlt: "responsiivinen kotisivu",
        selected: false,
        cost: 400
      },
      {
        id: 3,
        title: "GatsbyJS:n verkkosovellus Headless WordPressin taustajärjestelmällä.",
        subtitle: null,
        icon: digiMarkkinointi,
        iconAlt: "headless wordpress ja gatsby.js",
        selected: false,
        cost: 700
      }
    ]
  },
  {
    id: 2,
    title: "Miten haluatte että toteutamme Teidän kotisivun sisällön?",
    subtitle: "Valitse sopiva ja mene nuolella seuraavaan valikkoimaan.",
    options: [
      {
        id: 1,
        title: "Tuotamme itse hyvänlaatuisen sisällön",
        subtitle: null,
        icon: landingPage,
        iconAlt: "valmiina oleva sisältö",
        selected: false,
        cost: 100
      },
      {
        id: 2,
        title: "Haluamme että laaditte hakukoneystävällisen sisällön.",
        subtitle: null,
        icon: basicApp,
        iconAlt: "Artify luo oman sisällön",
        selected: false,
        cost: 200
      },
      {
        id: 3,
        title: "Tuotatte sisällön ja päivitätte sitä seuraavan vuoden",
        subtitle: null,
        icon: headlessApp,
        iconAlt: "päätön wordpress",
        selected: false,
        cost: 500
      }
    ],
    active: true
  },
  {
    id: 3,
    title: "Minkälaäisiä komponentteja tarvitsette sivustolle?",
    subtitle: "Valitse haluaetessa useampi ja liikuu nuolella seuraavaan valikkoon.",
    options: [
      {
        id: 1,
        title: "Analyyttiset työvälinet",
        subtitle: 'Esim. Google Analytics',
        icon: sisallonhallinta,
        iconAlt: "google analytics search engine optimization",
        selected: true,
        cost: 50
      },
      {
        id: 2,
        title: "Chatbot",
        subtitle: null,
        icon: chatBot,
        iconAlt: "chat bot voice bot",
        selected: false,
        cost: 150
      },
      {
        id: 3,
        title: "Tiedonhaku sisällöstä",
        subtitle: null,
        icon: search,
        iconAlt: "etsinta ja tiedon haku",
        selected: false,
        cost: 50
      }
    ],
    active: false
  },
  {
    id: 4,
    title: "Minkälaäisiä komponentteja tarvitsette sivustolle?",
    subtitle: "Valitse haluaetessa useampi ja liikuu nuolella seuraavaan valikkoon.",
    options: [
      {
        id: 1,
        title: "Turvallinen sisäänkirjoitus",
        subtitle: null,
        icon: login,
        iconAlt: "sisäänkirjoitus käyttäjille",
        selected: false,
        cost: 50
      },
      {
        id: 2,
        title: "Videoiden esittäminen",
        subtitle: null,
        icon: videoPlayer,
        iconAlt: "video esitys",
        selected: false,
        cost: 50
      },
      {
        id: 3,
        title: "Push-ilmoitukset",
        subtitle: null,
        icon: pushNotification,
        iconAlt: "tiedon lähettäminen push ilmoitukset",
        selected: false,
        cost: 50
      }
    ],
    active: false
  },
  {
    id: 5,
    title: "Montako eri kieltä haluat käyttää sivustolla?",
    subtitle: "Valitse sopiva vaihtoehto ja siirry nuolella eteenpäin.",
    options: [
      {
        id: 1,
        title: "Yksi kieli",
        subtitle: "",
        icon: yksiKieli,
        iconAlt: "yksi kieli sivustollaf",
        selected: false,
        cost: 0
      },
      {
        id: 2,
        title: "Kolme kieltä",
        subtitle: "",
        icon: kolmeKielta,
        iconAlt: "kolme kielta sivustolla",
        selected: false,
        cost: 200
      },
      {
        id: 3,
        title: "Monta eri kieltä",
        subtitle: "",
        icon: montaKielta,
        iconAlt: "paljon eri kielia sivustolla",
        selected: false,
        cost: 300
      }
    ],
    active: false
  },
  {
    id: 6,
    title: "Kuinka ainulaatuinen sinun  sivuston ulkoasu pitäisi olla?",
    options: [
      {
        id: 1,
        title: "Yksikertainen, valmis pohja.",
        subtitle: null,
        icon: yksinkertainen,
        iconAlt: "yksinkertainen kotisivu",
        selected: false,
        cost: 1
      },
      {
        id: 2,
        title: "Kustomoitu sivusto, muutokset valmiille pohjalle",
        subtitle: null,
        icon: kustomoitu,
        iconAlt: "kustomoitu kotisivu",
        selected: false,
        cost: 1.25
      },
      {
        id: 3,
        title: "Personaalinen, juuri Teille räätälöity sivusto ",
        subtitle: null,
        icon: ainulaatuinen,
        iconAlt: "personaalinen ainulaatuinen kotisivu",
        selected: false,
        cost: 1.75
      }
    ],
    active: false
  }
];


export default function Estimate() {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  const [questions, setQuestions] = useState(defaultQuestions);
  const [dialogOpen, setDialogOpen] = useState(false);

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");
  const [emailHelper, setEmailHelper] = useState("");

  const [phone, setPhone] = useState("");
  const [phoneHelper, setPhoneHelper] = useState("");

  const [message, setMessage] = useState("");

  const [total, setTotal] = useState(0);
  const [service, setService] = useState("");
  const [platforms, setPlatforms] = useState([]);
  const [features, setFeatures] = useState([]);
  const [customFeatures, setCustomFeatures] = useState("");
  const [users, setUsers] = useState("");
  const [category, setCategory] = useState("");

  const [alert, setAlert] = useState({ open: false, color: "" });
  const [alertMessage, setAlertMesssage] = useState("");

  const [loading, setLoading] = useState(false);


  const nextQuestion = () => {
    const newQuestions = cloneDeep(questions);

    const currentlyActive = newQuestions.filter(question => question.active);
    const activeIndex = currentlyActive[0].id - 1;
    const nextIndex = activeIndex + 1;

    newQuestions[activeIndex] = { ...currentlyActive[0], active: false };
    newQuestions[nextIndex] = { ...newQuestions[nextIndex], active: true };

    setQuestions(newQuestions);
  };

  const previousQuestion = () => {
    const newQuestions = cloneDeep(questions);

    const currentlyActive = newQuestions.filter(question => question.active);
    const activeIndex = currentlyActive[0].id - 1;
    const nextIndex = activeIndex - 1;

    newQuestions[activeIndex] = { ...currentlyActive[0], active: false };
    newQuestions[nextIndex] = { ...newQuestions[nextIndex], active: true };

    setQuestions(newQuestions);
  };

  const backButtonDisabled = () => {
    const currentlyActive = questions.filter(question => question.active);
    const activeId = currentlyActive[0].id;

    if (activeId === 1) {
      return true;
    } else {
      return false;
    }
  };

  const forwardButtonDisabled = () => {
    const currentlyActive = questions.filter(question => question.active);
    const activeId = currentlyActive[0].id;

    if (activeId === questions[questions.length - 1].id) {
      return true;
    } else {
      return false;
    }
  };

  const estimateDisabled = () => {
    let disabled = true;

    const emptySelections = questions
      .map(question => question.options.filter(option => option.selected))
      .filter(question => question.length === 0);

    if (questions.length === 2) {
      if (emptySelections.length === 1) {
        return false;
      }
    } else if (questions.length === 1) {
      return true;
    } else {
      if (
        emptySelections.length < 3 &&
        questions[questions.length - 1].options.filter(
          option => option.selected
        ).length > 0
      ) {
        return false;
      }
    }

    return disabled;
  };

  const handleSelect = id => {
    const newQuestions = cloneDeep(questions);

    const currentlyActive = newQuestions.filter(question => question.active);
    const activeIndex = currentlyActive[0].id - 1;

    const newSelected = newQuestions[activeIndex].options[id - 1];

    const previousSelected = currentlyActive[0].options.filter(
      option => option.selected
    );

    switch (currentlyActive[0].subtitle) {
      case "Select one.":
        if (previousSelected[0]) {
          previousSelected[0].selected = !previousSelected[0].selected;
        }
        newSelected.selected = !newSelected.selected;
        break;
      default:
        newSelected.selected = !newSelected.selected;
        break;
    }

    switch (newSelected.title) {
      case "Moderni GatsbyJS LandingPage":
        setQuestions(landingPageQuestions);
        setService(newSelected.title);
        setPlatforms([]);
        setFeatures([]);
        setCustomFeatures("");
        setUsers("");
        setCategory("");
        break;
      case "GatsbyJS progressiivinen kotisivu":
        setQuestions(kotisivutQuestions);
        setService(newSelected.title);
        setPlatforms([]);
        setFeatures([]);
        setCustomFeatures("");
        setUsers("");
        setCategory("");
        break;
      case "GatsbyJS:n verkkosovellus Headless WordPressin taustajärjestelmällä.":
        setQuestions(headlessWPQuestions);
        setService(newSelected.title);
        setPlatforms([]);
        setFeatures([]);
        setCustomFeatures("");
        setUsers("");
        setCategory("");
        break;
      default:
        setQuestions(newQuestions);
        break;
    }
  };

  const onChange = event => {
    let valid;

    switch (event.target.id) {
      case "email":
        setEmail(event.target.value);
        valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
          event.target.value
        );

        if (!valid) {
          setEmailHelper("Invalid email");
        } else {
          setEmailHelper("");
        }
        break;
      case "phone":
        setPhone(event.target.value);
        setPhoneHelper("");
        break;
      default:
        break;
    }
  };

  const getTotal = () => {
    let cost = 0;

    const selections = questions
      .map(question => question.options.filter(option => option.selected))
      .filter(question => question.length > 0);

    selections.map(options => options.map(option => (cost += option.cost)));

    if (questions.length > 2) {
      const userCost = questions
        .filter(question => question.title === "Kuinka ainulaatuinen sinun  sivuston ulkoasu pitäisi olla?")
        .map(question =>
          question.options.filter(option => option.selected)
        )[0][0];

      setUsers(userCost.title);

      cost -= userCost.cost;
      cost *= userCost.cost;
    }

    setTotal(cost);
  };

  const getPlatforms = () => {
    if (questions.length > 2) {
      let newPlatforms = [];

      questions
        .filter(
          question =>
            question.title === "Miten haluatte että toteutamme Teidän kotisivun sisällön?"
        )
        .map(question => question.options.filter(option => option.selected))[0]
        .map(option => newPlatforms.push(option.title));

      setPlatforms(newPlatforms);
    }
  };

  const getFeatures = () => {
    if (questions.length > 2) {
      let newFeatures = [];

      questions
        .filter(
          question => question.title === "Minkälaäisiä komponentteja tarvitsette sivustolle?"
        )
        .map(question => question.options.filter(option => option.selected))
        .map(option =>
          option.map(newFeature => newFeatures.push(newFeature.title))
        );

      setFeatures(newFeatures);
    }
  };

  const getCustomFeatures = () => {
    if (questions.length > 2) {
      const newCustomFeatures = questions
        .filter(
          question =>
            question.title ===
            "Minkälaäisiä komponentteja tarvitsette sivustolle?"
        )
        .map(question =>
          question.options.filter(option => option.selected)
        )[0][0].title;

      setCustomFeatures(newCustomFeatures);
    }
  };

  const getCategory = () => {
    if (questions.length === 2) {
      const newCategory = questions
        .filter(
          question =>
            question.title === "Montako eri kieltä haluat käyttää sivustolla?"
        )[0]
        .options.filter(option => option.selected)[0].title;

      setCategory(newCategory);
    }
  };

  const sendEstimate = () => {
    setLoading(true);

    axios
      .get(
        "https://us-central1-artify-kotisivut.cloudfunctions.net/sendMail",
        {
          params: {
            email: email,
            name: name,
            phone: phone,
            message: message,
            total: total,
            category: category,
            service: service,
            platforms: platforms,
            features: features,
            customFeatures: customFeatures,
            users: users
          }
        }
      )
      .then(res => {
        setLoading(false);
        setAlert({ open: true, color: "#4BB543" });
        setAlertMesssage("Message sent successfully!");
        setDialogOpen(false);
      })
      .catch(err => {
        setLoading(false);
        setAlert({ open: true, color: "#FF3232" });
        setAlertMesssage("Something went wrong! Please try again.");
        console.error(err);
      });
  };

  const softwareSelections = (
    <Grid container direction="column">
      <Grid
        item
        container
        alignItems="center"
        style={{ marginBottom: "1.25em" }}
      >
        <Grid item>
          <Grid item container justify="center" lg>
            <img
              src={gatsbyLogo}
              alt="Gatsby logo"
              style={{ maxHeight: matchesMD ? 260 : "32em", marginTop: '8em' }}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );

  const websiteSelections = (
    <Grid container direction="column" style={{ marginTop: "14em" }}>
      <Grid item container alignItems="center">
        <Grid item xs={2}>
          <img src={check} alt="checkmark" />
        </Grid>
        <Grid item xs={10}>
          <Typography variant="body1">
            {`You want `}
            {category === "Basic"
              ? "a Basic Website."
              : `an ${category} Website.`}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );

  return (
    <Grid container
      direction="row"
      className={classes.infoBackground}>

      <Grid
        item
        container
        direction="column"
        alignItems={matchesMD ? "center" : undefined}
      >
        <Grid
          item
          style={{ marginTop: matchesMD ? '4em' : "12em", marginLeft: matchesMD ? 0 : "7em" }}>
          <Typography className={classes.header1} variant="h1" align={matchesMD ? "center" : undefined}>
            Arviointi kotisivujen hinnasta.
          </Typography>
        </Grid>
      </Grid>



      <Grid
        item
        container
        direction="column"
        alignItems="center"
        style={{
          marginRight: matchesMD ? 0 : "2em", marginBottom: "10em"

        }}>

        {questions
          .filter(question => question.active)
          .map((question, index) => (
            <React.Fragment key={index}>
              <Grid item justify='center' >
                <Typography
                  align="center"
                  variant="h2"
                  gutterBottom
                  className={classes.header2}
                >
                  {question.title}
                </Typography>

                <Typography
                  style={{ color: '#932424' }}
                  className={classes.questionSubtitle}
                  variant="h5"
                  align="center"
                >
                  {question.subtitle}
                </Typography>
              </Grid>


              {/* Options Block */}
              <Grid item container>
                {question.options.map(option => (
                  <Grid
                    item
                    container
                    component={Button}
                    onClick={() => handleSelect(option.id)}
                    style={{
                      display: "block",
                      textTransform: "none",
                      borderRadius: 0,
                      marginBottom: matchesSM ? "1.5em" : 0,
                      backgroundColor: option.selected
                        // Background color
                        ? theme.palette.common.white
                        : undefined
                    }}
                    direction="column"
                    alignItems="center"
                    justify='center'
                    md
                  >
                    <Grid item container justify='center'>
                      <Grid item>

                        <Typography
                          align="center"
                          variant="h4"
                          className={classes.optionsTitle}
                        >
                          {option.title}

                        </Typography>


                        <Typography
                          align="center"
                          className={classes.optionsSubtitle}
                          variant="h5">
                          {option.subtitle}
                        </Typography>
                      </Grid>

                    </Grid>
                    <Grid item>
                      <img
                        style={{ zIndex: '10' }}
                        src={option.icon}
                        alt={option.iconAlt}
                        className={classes.icon}
                      />
                    </Grid>
                  </Grid>
                ))}
              </Grid>
            </React.Fragment>
          ))}
        <Grid
          item
          container
          justify="space-between"
          style={{ width: "18em", marginTop: "3em" }}
        >
          <Grid item>
            <IconButton
              disabled={backButtonDisabled()}
              onClick={previousQuestion}
            >
              <img
                src={backButtonDisabled() ? backArrowDisabled : backArrow}
                alt="Previous question"
              />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton
              disabled={forwardButtonDisabled()}
              onClick={nextQuestion}
            >
              <img
                src={
                  forwardButtonDisabled() ? forwardArrowDisabled : forwardArrow
                }
                alt="Next question"
              />
            </IconButton>
          </Grid>
        </Grid>

        <Grid item>
          <Button
            variant="contained"
            disabled={estimateDisabled()}
            className={classes.estimateButton}
            onClick={() => {
              setDialogOpen(true);
              getTotal();
              getPlatforms();
              getFeatures();
              getCustomFeatures();
              getCategory();
            }}
          >
            Hinta-arviointi
          </Button>
        </Grid>
      </Grid>
      <Dialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        fullWidth
        maxWidth="lg"
        style={{ zIndex: 1302 }}
        fullScreen={matchesSM}
      >
        <Grid container justify="center">
          <Grid item style={{ marginTop: "1em" }}>
            <Typography variant="h2" align="center">
              Hinnan arviointi
            </Typography>
          </Grid>
        </Grid>
        <DialogContent>
          <Grid
            container
            justify="space-around"
            direction={matchesSM ? "column" : "row"}
            alignItems={matchesSM ? "center" : undefined}
          >
            <Grid
              item
              container
              direction="column"
              md={7}
              style={{ maxWidth: "20em" }}
            >
              <Grid item style={{ marginBottom: "0.5em" }}>
                <TextField
                  label="Nimi"
                  id="name"
                  fullWidth
                  value={name}
                  onChange={event => setName(event.target.value)}
                />
              </Grid>
              <Grid item style={{ marginBottom: "0.5em" }}>
                <TextField
                  label="Email"
                  error={emailHelper.length !== 0}
                  helperText={emailHelper}
                  id="email"
                  fullWidth
                  value={email}
                  onChange={onChange}
                />
              </Grid>
              <Grid item style={{ marginBottom: "0.5em" }}>
                <TextField
                  label="Puhelin"
                  helperText={phoneHelper}
                  error={phoneHelper.length !== 0}
                  id="phone"
                  fullWidth
                  value={phone}
                  onChange={onChange}
                />
              </Grid>
              <Grid item>
                <TextField
                  style={{ border: '1px solid black' }}
                  InputProps={{ disableUnderline: true }}
                  value={message}
                  className={classes.message}
                  multiline
                  fullWidth
                  placeholder="Kirjoita pari sanaa Teidän projektista."
                  rows={10}
                  id="message"
                  onChange={event => setMessage(event.target.value)}
                />
              </Grid>
              <Grid item>
                <Typography
                  variant="body1"
                  paragraph
                  align={matchesSM ? "center" : undefined}
                  style={{ lineHeight: 1.1 }}
                >
                  Voimme toteuttaa Teidän vision kotisuvuista noin{" "}
                  <span className={classes.specialText}>
                    Eur.{total.toFixed(2)}
                  </span>
                </Typography>
                <Typography
                  variant="body1"
                  paragraph
                  align={matchesSM ? "center" : undefined}
                >
                  Kirjoita nimesi ja sähköpostiosoitteesi, lähetä pyyntösi ja
                  palaamme sinuun enemmän yksityiskohtaisilla tiedoilla.
                </Typography>
              </Grid>
            </Grid>
            <Grid
              item
              container
              direction="column"
              md={5}
              style={{ maxWidth: "30em" }}
              alignItems={matchesSM ? "center" : undefined}
            >
              <Hidden smDown>
                <Grid item>
                  {questions.length > 2
                    ? softwareSelections
                    : websiteSelections}
                </Grid>
              </Hidden>
              <Grid item>
                <Button
                  variant="contained"
                  className={classes.estimateButton}
                  onClick={sendEstimate}
                  disabled={
                    name.length === 0 ||
                    message.length === 0 ||
                    phoneHelper.length !== 0 ||
                    emailHelper.length !== 0
                  }
                >
                  {loading ? (
                    <CircularProgress />
                  ) : (
                      <React.Fragment>
                        Lähetä pyyntö
                        <img
                          src={send}
                          alt="paper airplane"
                          style={{ marginLeft: "0.5em" }}
                        />
                      </React.Fragment>
                    )}
                </Button>
              </Grid>
              <Hidden mdUp>
                <Grid item style={{ marginBottom: matchesSM ? "5em" : 0 }}>
                  <Button
                    style={{ fontWeight: 300 }}
                    color="primary"
                    onClick={() => setDialogOpen(false)}
                  >
                    Peruuta
                  </Button>
                </Grid>
              </Hidden>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
      <Snackbar
        open={alert.open}
        ContentProps={{
          style: {
            backgroundColor: alert.color
          }
        }}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        message={alertMessage}
        autoHideDuration={4000}
        onClose={() => setAlert(false)}
      />
    </Grid>
  );
}
