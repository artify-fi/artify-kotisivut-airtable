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

import person from "../../assets/images/arviointi-react/person.svg";
import persons from "../../assets/images/arviointi-react/persons.svg";
import info from "../../assets/images/arviointi-react/info.svg";
import people from "../../assets/images/arviointi-react/people.svg";
import customized from "../../assets/images/arviointi-react/customized.svg";
import data from "../../assets/images/arviointi-react/data.svg";
import globe from "../../assets/images/arviointi-react/globe.svg";

import responsiveApp from '../../assets/images/arviointi/appDevelopmentTr.webp'
import digiMarkkinointi from "../../assets/images/arviointi/digitalMarketingW.webp";
import landingPage from '../../assets/images/arviointi/landingPageW.webp'
import basicApp from '../../assets/images/arviointi/basicAppW.webp'
import headlessApp from '../../assets/images/arviointi/headlessAppW.webp'
import sisallonhallinta from '../../assets/images/arviointi/sisallonhallinta.jpg'
import chatBot from '../../assets/images/arviointi/chatBotW.webp'
import search from '../../assets/images/arviointi/searchW.webp'
import login from '../../assets/images/arviointi/loginW.webp'
import videoPlayer from '../../assets/images/arviointi/videoPlayer.jpg'
import pushNotification from '../../assets/images/arviointi/pushNotificationW.webp'
import verkkokauppa from '../../assets/images/arviointi/verkkokauppa.webp'


const useStyles = makeStyles(theme => ({
  icon: {
    width: "12em",
    height: "10em"
  },
  estimateButton: {
    ...theme.typography.estimate,
    borderRadius: 50,
    backgroundColor: theme.palette.common.orange,
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
  }
}));

const defaultQuestions = [
  {
    id: 1,
    title: "Millaisesta kotisivusta olet kiinnostunut?",
    active: true,
    options: [
      {
        id: 1,
        title: "Moderni GatsbyJS LandingPage, tarkoitettu esittelemään yrityksen vahvuuksia ja ainutlaatuisuutta sekä tukemaan digimarkkinointia.",
        subtitle: null,
        icon: responsiveApp,
        iconAlt: "progressiivinen kotisivu desktop tablet mobile",
        selected: false,
        cost: 0
      },
      {
        id: 2,
        title: "Moderni GatsbyJS responsiivinen kotisivu, lisäetuna progressiivinen mobiilisovellus kaupan päälle.",
        subtitle: null,
        icon: verkkokauppa,
        iconAlt: "headlessCMS sisällönhallinta",
        selected: false,
        cost: 0
      },
      {
        id: 3,
        title: "Turvallinen ja täysin Sinun käsissä oleva sisällönhallinta Headless WordPressin ja GatsbyJS kokonaisuudella.",
        subtitle: null,
        icon: digiMarkkinointi,
        iconAlt: "digitaalisen marketingin työvälinet",
        selected: false,
        cost: 0
      }
    ]
  }
];

const landingPageQuestions = [
  {
    id: 1,
    title: "Millaisesta kotisivusta olet kiinnostunut?",
    active: false,
    options: [
      {
        id: 1,
        title: "Moderni GatsbyJS LandingPage, tarkoitettu esittelemään yrityksen vahvuuksia ja ainutlaatuisuutta sekä tukemaan digimarkkinointia.",
        subtitle: null,
        icon: responsiveApp,
        iconAlt: "progressiivinen kotisivu desktop tablet mobile",
        selected: false,
        cost: 0
      },
      {
        id: 2,
        title: "Moderni GatsbyJS responsiivinen kotisivu, lisäetuna progressiivinen mobiilisovellus kaupan päälle.",
        subtitle: null,
        icon: verkkokauppa,
        iconAlt: "headlessCMS sisällönhallinta",
        selected: false,
        cost: 0
      },
      {
        id: 3,
        title: "Turvallinen ja täysin Sinun käsissä oleva sisällönhallinta Headless WordPressin ja GatsbyJS kokonaisuudella.",
        subtitle: null,
        icon: digiMarkkinointi,
        iconAlt: "digitaalisen marketingin työvälinet",
        selected: false,
        cost: 0
      }
    ]
  },
  {
    id: 2,
    title: "Miten haluat että toteutamme laadukkaan ja Sinun tarpeittesi mukaan olevan sisällön?",
    subtitle: "Valitse sopiva vaihtoehto ja likkuu nuolella seuraavaan valikoimaan.",
    options: [
      {
        id: 1,
        title: "Minullö on omat tekstit ja kuvat valmiina, tarvitsen pieniä muutoksia sopivien anainsanojen lisäämisellä.",
        subtitle: null,
        icon: landingPage,
        iconAlt: "computer outline",
        selected: false,
        cost: 1000
      },
      {
        id: 2,
        title: "Haluan että tuotatte yhteystyössä minun kanssa mielenkiintoisen ja hakukoneystävällisen silällön.",
        subtitle: null,
        icon: basicApp,
        iconAlt: "outline of iphone",
        selected: false,
        cost: 1000
      },
      {
        id: 3,
        title: "Haluan että tuotatte yhteystyössä minun kanssa mielenkiintoisen ja hakukoneystävällisen silällön sekä täydännette sitä säännöllisesti ensimmäisen vuoden.",
        subtitle: null,
        icon: headlessApp,
        iconAlt: "",
        selected: false,
        cost: 1000
      }
    ],
    active: true
  },
  {
    id: 3,
    title: "Minkälaäisiä kompponenttejä  tarvitsette sivustolle?",
    subtitle: "Valitse useampi jos näet että on Sinulle hyötyä ja liikkuu nuolella seuraavaan valikkoon.",
    options: [
      {
        id: 1,
        title: "Analyyttiset työvälinet",
        subtitle: null,
        icon: sisallonhallinta,
        iconAlt: "camera outline",
        selected: false,
        cost: 250
      },
      {
        id: 2,
        title: "Chatbot",
        subtitle: null,
        icon: chatBot,
        iconAlt: "chatBot",
        selected: false,
        cost: 250
      },
      {
        id: 3,
        title: "Etsintä sisällöstä",
        subtitle: null,
        icon: search,
        iconAlt: "outline of cloud with arrow pointing up",
        selected: false,
        cost: 250
      }
    ],
    active: false
  },
  {
    id: 4,
    title: "Minkälaäisiä kompponenttejä ja lisäpalveluita tarvitsette vielä sivustolle??",
    subtitle: "Valitse mielytt'v't",
    options: [
      {
        id: 1,
        title: "Sisäänkirjoitus",
        subtitle: null,
        icon: login,
        iconAlt: "outline of a person with a plus sign",
        selected: false,
        cost: 250
      },
      {
        id: 2,
        title: "Videon tai Podcastin esittäjät",
        subtitle: null,
        icon: videoPlayer,
        iconAlt: "fingerprint",
        selected: false,
        cost: 250
      },
      {
        id: 3,
        title: "Push-ilmoitukset",
        subtitle: null,
        icon: pushNotification,
        iconAlt: "outline of a bell",
        selected: false,
        cost: 250
      }
    ],
    active: false
  },
  {
    id: 5,
    title: "Minkälaäisiä kompponenttejä ja lisäpalveluita tarvitsette vielä sivustolle??",
    subtitle: "Valitse mielytt'v't",
    options: [
      {
        id: 1,
        title: "Hakukoneoptimoinnin laaja toteutus",
        subtitle: null,
        icon: login,
        iconAlt: "outline of a person with a plus sign",
        selected: false,
        cost: 250
      },
      {
        id: 2,
        title: "Ananvarausjärjestelmä",
        subtitle: null,
        icon: videoPlayer,
        iconAlt: "fingerprint",
        selected: false,
        cost: 250
      },
      {
        id: 3,
        title: "Sekälaistä, kirjoita oma ehdotus...",
        subtitle: null,
        icon: pushNotification,
        iconAlt: "outline of a bell",
        selected: false,
        cost: 250
      }
    ],
    active: false
  },
  {
    id: 6,
    title: "Monellako eri kielellä haluat että toteutamme sivustosi?",
    subtitle: "Select one.",
    options: [
      {
        id: 1,
        title: "Yksi kieli",
        subtitle: "(tiedotus)",
        icon: info,
        iconAlt: "'i' inside a circle",
        selected: false,
        cost: 250
      },
      {
        id: 2,
        title: "Kolme eri kieltä",
        subtitle: "(Interactive, Customizable, Realtime)",
        icon: customized,
        iconAlt: "two toggle switches",
        selected: false,
        cost: 500
      },
      {
        id: 3,
        title: "Useempi kieli",
        subtitle: "(Data Modeling and Computation)",
        icon: data,
        iconAlt: "outline of line graph",
        selected: false,
        cost: 1000
      }
    ],
    active: false
  },
  {
    id: 7,
    title: "Minkäläisen ulkoasun haluat sivustolle?",
    subtitle: "Valitse yski ja napsuta kuvalla sekä pyydä ilmainen hinta arviointi.",
    options: [
      {
        id: 1,
        title: "Yksinkertainen",
        subtitle: null,
        icon: person,
        iconAlt: "person outline",
        selected: false,
        cost: 1
      },
      {
        id: 2,
        title: "Kustomoitu",
        subtitle: null,
        icon: persons,
        iconAlt: "outline of two people",
        selected: false,
        cost: 1.125
      },
      {
        id: 3,
        title: "Ainulaatuinen",
        subtitle: null,
        icon: people,
        iconAlt: "outline of three people",
        selected: false,
        cost: 1.25
      }
    ],
    active: false
  }
];

const kotisivutQuestions = [
  {
    id: 1,
    title: "Millaisesta kotisivusta olet kiinnostunut?",
    active: false,
    options: [
      {
        id: 1,
        title: "Moderni GatsbyJS LandingPage, tarkoitettu esittelemään yrityksen vahvuuksia ja ainutlaatuisuutta sekä tukemaan digimarkkinointia.",
        subtitle: null,
        icon: responsiveApp,
        iconAlt: "progressiivinen kotisivu desktop tablet mobile",
        selected: false,
        cost: 0
      },
      {
        id: 2,
        title: "Moderni GatsbyJS responsiivinen kotisivu, lisäetuna progressiivinen mobiilisovellus kaupan päälle.",
        subtitle: null,
        icon: verkkokauppa,
        iconAlt: "headlessCMS sisällönhallinta",
        selected: false,
        cost: 0
      },
      {
        id: 3,
        title: "Turvallinen ja täysin Sinun käsissä oleva sisällönhallinta Headless WordPressin ja GatsbyJS kokonaisuudella.",
        subtitle: null,
        icon: digiMarkkinointi,
        iconAlt: "digitaalisen marketingin työvälinet",
        selected: false,
        cost: 0
      }
    ]
  },
  {
    id: 2,
    title: "Miten haluat että toteutamme laadukkaan ja Sinun tarpeittesi mukaan olevan sisällön?",
    subtitle: "Valitse sopiva vaihtoehto ja likkuu nuolella seuraavaan valikoimaan.",
    options: [
      {
        id: 1,
        title: "Minullö on omat tekstit ja kuvat valmiina, tarvitsen pieniä muutoksia sopivien anainsanojen lisäämisellä.",
        subtitle: null,
        icon: landingPage,
        iconAlt: "computer outline",
        selected: false,
        cost: 1000
      },
      {
        id: 2,
        title: "Haluan että tuotatte yhteystyössä minun kanssa mielenkiintoisen ja hakukoneystävällisen silällön.",
        subtitle: null,
        icon: basicApp,
        iconAlt: "outline of iphone",
        selected: false,
        cost: 1000
      },
      {
        id: 3,
        title: "Haluan että tuotatte yhteystyössä minun kanssa mielenkiintoisen ja hakukoneystävällisen silällön sekä täydännette sitä säännöllisesti ensimmäisen vuoden.",
        subtitle: null,
        icon: headlessApp,
        iconAlt: "",
        selected: false,
        cost: 1000
      }
    ],
    active: false
  },
  {
    id: 3,
    title: "Minkälaäisiä kompponenttejä  tarvitsette sivustolle?",
    subtitle: "Valitse useampi jos näet että on Sinulle hyötyä ja liikkuu nuolella seuraavaan valikkoon.",
    options: [
      {
        id: 1,
        title: "Analyyttiset työvälinet",
        subtitle: null,
        icon: sisallonhallinta,
        iconAlt: "camera outline",
        selected: false,
        cost: 250
      },
      {
        id: 2,
        title: "Chatbot",
        subtitle: null,
        icon: chatBot,
        iconAlt: "chatBot",
        selected: false,
        cost: 250
      },
      {
        id: 3,
        title: "Etsintä sisällöstä",
        subtitle: null,
        icon: search,
        iconAlt: "outline of cloud with arrow pointing up",
        selected: false,
        cost: 250
      }
    ],
    active: false
  },
  {
    id: 4,
    title: "Minkälaäisiä kompponenttejä ja lisäpalveluita tarvitsette vielä sivustolle??",
    subtitle: "Valitse mielytt'v't",
    options: [
      {
        id: 1,
        title: "Sisäänkirjoitus",
        subtitle: null,
        icon: login,
        iconAlt: "outline of a person with a plus sign",
        selected: false,
        cost: 250
      },
      {
        id: 2,
        title: "Videon tai Podcastin esittäjät",
        subtitle: null,
        icon: videoPlayer,
        iconAlt: "fingerprint",
        selected: false,
        cost: 250
      },
      {
        id: 3,
        title: "Push-ilmoitukset",
        subtitle: null,
        icon: pushNotification,
        iconAlt: "outline of a bell",
        selected: false,
        cost: 250
      }
    ],
    active: false
  },
  {
    id: 5,
    title: "Minkälaäisiä kompponenttejä ja lisäpalveluita tarvitsette vielä sivustolle??",
    subtitle: "Valitse mielytt'v't",
    options: [
      {
        id: 1,
        title: "Hakukoneoptimoinnin laaja toteutus",
        subtitle: null,
        icon: login,
        iconAlt: "outline of a person with a plus sign",
        selected: false,
        cost: 250
      },
      {
        id: 2,
        title: "Ananvarausjärjestelmä",
        subtitle: null,
        icon: videoPlayer,
        iconAlt: "fingerprint",
        selected: false,
        cost: 250
      },
      {
        id: 3,
        title: "Sekälaistä, kirjoita oma ehdotus...",
        subtitle: null,
        icon: pushNotification,
        iconAlt: "outline of a bell",
        selected: false,
        cost: 250
      }
    ],
    active: false
  },
  {
    id: 6,
    title: "Monellako eri kielellä haluat että toteutamme sivustosi?",
    subtitle: "Select one.",
    options: [
      {
        id: 1,
        title: "Yksi kieli",
        subtitle: "(tiedotus)",
        icon: info,
        iconAlt: "'i' inside a circle",
        selected: false,
        cost: 250
      },
      {
        id: 2,
        title: "Kolme eri kieltä",
        subtitle: "(Interactive, Customizable, Realtime)",
        icon: customized,
        iconAlt: "two toggle switches",
        selected: false,
        cost: 500
      },
      {
        id: 3,
        title: "Useempi kieli",
        subtitle: "(Data Modeling and Computation)",
        icon: data,
        iconAlt: "outline of line graph",
        selected: false,
        cost: 1000
      }
    ],
    active: false
  },
  {
    id: 7,
    title: "Minkäläisen ulkoasun haluat sivustolle?",
    subtitle: "Valitse yski ja napsuta kuvalla sekä pyydä ilmainen hinta arviointi.",
    options: [
      {
        id: 1,
        title: "Yksinkertainen",
        subtitle: null,
        icon: person,
        iconAlt: "person outline",
        selected: false,
        cost: 1
      },
      {
        id: 2,
        title: "Kustomoitu",
        subtitle: null,
        icon: persons,
        iconAlt: "outline of two people",
        selected: false,
        cost: 1.125
      },
      {
        id: 3,
        title: "Ainulaatuinen",
        subtitle: null,
        icon: people,
        iconAlt: "outline of three people",
        selected: false,
        cost: 1.25
      }
    ],
    active: false
  }
];

const headlessWPQuestions = [
  {
    id: 1,
    title: "Millaisesta kotisivusta olet kiinnostunut?",
    active: false,
    options: [
      {
        id: 1,
        title: "Moderni GatsbyJS LandingPage, tarkoitettu esittelemään yrityksen vahvuuksia ja ainutlaatuisuutta sekä tukemaan digimarkkinointia.",
        subtitle: null,
        icon: responsiveApp,
        iconAlt: "progressiivinen kotisivu desktop tablet mobile",
        selected: false,
        cost: 0
      },
      {
        id: 2,
        title: "Moderni GatsbyJS responsiivinen kotisivu, lisäetuna progressiivinen mobiilisovellus kaupan päälle.",
        subtitle: null,
        icon: verkkokauppa,
        iconAlt: "headlessCMS sisällönhallinta",
        selected: false,
        cost: 0
      },
      {
        id: 3,
        title: "Turvallinen ja täysin Sinun käsissä oleva sisällönhallinta Headless WordPressin ja GatsbyJS kokonaisuudella.",
        subtitle: null,
        icon: digiMarkkinointi,
        iconAlt: "digitaalisen marketingin työvälinet",
        selected: false,
        cost: 0
      }
    ]
  },
  {
    id: 2,
    title: "Miten haluat että toteutamme laadukkaan ja Sinun tarpeittesi mukaan olevan sisällön?",
    subtitle: "Valitse sopiva vaihtoehto ja likkuu nuolella seuraavaan valikoimaan.",
    options: [
      {
        id: 1,
        title: "Minullö on omat tekstit ja kuvat valmiina, tarvitsen pieniä muutoksia sopivien anainsanojen lisäämisellä.",
        subtitle: null,
        icon: landingPage,
        iconAlt: "computer outline",
        selected: false,
        cost: 1000
      },
      {
        id: 2,
        title: "Haluan että tuotatte yhteystyössä minun kanssa mielenkiintoisen ja hakukoneystävällisen silällön.",
        subtitle: null,
        icon: basicApp,
        iconAlt: "outline of iphone",
        selected: false,
        cost: 1000
      },
      {
        id: 3,
        title: "Haluan että tuotatte yhteystyössä minun kanssa mielenkiintoisen ja hakukoneystävällisen silällön sekä täydännette sitä säännöllisesti ensimmäisen vuoden.",
        subtitle: null,
        icon: headlessApp,
        iconAlt: "",
        selected: false,
        cost: 1000
      }
    ],
    active: true
  },
  {
    id: 3,
    title: "Minkälaäisiä kompponenttejä  tarvitsette sivustolle?",
    subtitle: "Valitse useampi jos näet että on Sinulle hyötyä ja liikkuu nuolella seuraavaan valikkoon.",
    options: [
      {
        id: 1,
        title: "Analyyttiset työvälinet",
        subtitle: null,
        icon: sisallonhallinta,
        iconAlt: "camera outline",
        selected: false,
        cost: 250
      },
      {
        id: 2,
        title: "Chatbot",
        subtitle: null,
        icon: chatBot,
        iconAlt: "chatBot",
        selected: false,
        cost: 250
      },
      {
        id: 3,
        title: "Etsintä sisällöstä",
        subtitle: null,
        icon: search,
        iconAlt: "outline of cloud with arrow pointing up",
        selected: false,
        cost: 250
      }
    ],
    active: false
  },
  {
    id: 4,
    title: "Minkälaäisiä kompponenttejä ja lisäpalveluita tarvitsette vielä sivustolle??",
    subtitle: "Valitse mielytt'v't",
    options: [
      {
        id: 1,
        title: "Sisäänkirjoitus",
        subtitle: null,
        icon: login,
        iconAlt: "outline of a person with a plus sign",
        selected: false,
        cost: 250
      },
      {
        id: 2,
        title: "Videon tai Podcastin esittäjät",
        subtitle: null,
        icon: videoPlayer,
        iconAlt: "fingerprint",
        selected: false,
        cost: 250
      },
      {
        id: 3,
        title: "Push-ilmoitukset",
        subtitle: null,
        icon: pushNotification,
        iconAlt: "outline of a bell",
        selected: false,
        cost: 250
      }
    ],
    active: false
  },
  {
    id: 5,
    title: "Minkälaäisiä kompponenttejä ja lisäpalveluita tarvitsette vielä sivustolle??",
    subtitle: "Valitse mielytt'v't",
    options: [
      {
        id: 1,
        title: "Hakukoneoptimoinnin laaja toteutus",
        subtitle: null,
        icon: login,
        iconAlt: "outline of a person with a plus sign",
        selected: false,
        cost: 250
      },
      {
        id: 2,
        title: "Ananvarausjärjestelmä",
        subtitle: null,
        icon: videoPlayer,
        iconAlt: "fingerprint",
        selected: false,
        cost: 250
      },
      {
        id: 3,
        title: "Sekälaistä, kirjoita oma ehdotus...",
        subtitle: null,
        icon: pushNotification,
        iconAlt: "outline of a bell",
        selected: false,
        cost: 250
      }
    ],
    active: false
  },
  {
    id: 6,
    title: "Monellako eri kielellä haluat että toteutamme sivustosi?",
    subtitle: "Select one.",
    options: [
      {
        id: 1,
        title: "Yksi kieli",
        subtitle: "(tiedotus)",
        icon: info,
        iconAlt: "'i' inside a circle",
        selected: false,
        cost: 250
      },
      {
        id: 2,
        title: "Kolme eri kieltä",
        subtitle: "(Interactive, Customizable, Realtime)",
        icon: customized,
        iconAlt: "two toggle switches",
        selected: false,
        cost: 500
      },
      {
        id: 3,
        title: "Useempi kieli",
        subtitle: "(Data Modeling and Computation)",
        icon: data,
        iconAlt: "outline of line graph",
        selected: false,
        cost: 1000
      }
    ],
    active: false
  },
  {
    id: 7,
    title: "Minkäläisen ulkoasun haluat sivustolle?",
    subtitle: "Valitse yski ja napsuta kuvalla sekä pyydä ilmainen hinta arviointi.",
    options: [
      {
        id: 1,
        title: "Yksinkertainen",
        subtitle: null,
        icon: person,
        iconAlt: "person outline",
        selected: false,
        cost: 1
      },
      {
        id: 2,
        title: "Kustomoitu",
        subtitle: null,
        icon: persons,
        iconAlt: "outline of two people",
        selected: false,
        cost: 1.125
      },
      {
        id: 3,
        title: "Ainulaatuinen",
        subtitle: null,
        icon: people,
        iconAlt: "outline of three people",
        selected: false,
        cost: 1.25
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
      case "Moderni GatsbyJS LandingPage, tarkoitettu esittelemään yrityksen vahvuuksia ja ainutlaatuisuutta sekä tukemaan digimarkkinointia.":
        setQuestions(landingPageQuestions);
        setService(newSelected.title);
        setPlatforms([]);
        setFeatures([]);
        setCustomFeatures("");
        setUsers("");
        setCategory("");
        break;
      case "Moderni GatsbyJS responsiivinen kotisivu, lisäetuna progressiivinen mobiilisovellus kaupan päälle.":
        setQuestions(landingPageQuestions);
        setService(newSelected.title);
        setPlatforms([]);
        setFeatures([]);
        setCustomFeatures("");
        setUsers("");
        setCategory("");
        break;
      case "Turvallinen ja täysin Sinun muokkattava sisällönhallinta Headless WordPressin ja GatsbyJS kokonaisuudella.":
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
        .filter(question => question.title === "Paljon uskot että saa olemaan kävijöitä kuukaudessa?")
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
            question.title === "Mitä tuot omalta puolelta mukaan?"
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
          question => question.title === "Minkälaäisiä lisäpalvelutia tarvitset?"
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
            "Minkälaäisiä lisäpalvelutia tarvitset?"
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
            question.title === "Kas vajad veel lisasid mida ei esine just sageli?"
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
        <Grid item xs={2}>
          <img src={check} alt="checkmark" />
        </Grid>
        <Grid item xs={10}>
          <Typography variant="body1">
            {`You want ${service} `}
            {platforms.length > 0
              ? `for ${
              //if only web application is selected...
              platforms.indexOf("Web Application") > -1 &&
                platforms.length === 1
                ? //then finish sentence here
                "a Web Application."
                : //otherwise, if web application and another platform is selected...
                platforms.indexOf("Web Application") > -1 &&
                  platforms.length === 2
                  ? //then finish the sentence here
                  `a Web Application and an ${platforms[1]}.`
                  : //otherwise, if only one platform is selected which isn't web application...
                  platforms.length === 1
                    ? //then finish the sentence here
                    `an ${platforms[0]}`
                    : //otherwise, if other two options are selected...
                    platforms.length === 2
                      ? //then finish the sentence here
                      "an iOS Application and an Android Application."
                      : //otherwise if all three are selected...
                      platforms.length === 3
                        ? //then finish the sentence here
                        "a Web Application, an iOS Application, and an Android Application."
                        : null
              }`
              : null}
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        container
        alignItems="center"
        style={{ marginBottom: "1.25em" }}
      >
        <Grid item xs={2}>
          <img src={check} alt="checkmark" />
        </Grid>
        <Grid item xs={10}>
          <Typography variant="body1">
            {"with "}
            {/* if we have features... */}
            {features.length > 0
              ? //...and there's only 1...
              features.length === 1
                ? //then end the sentence here
                `${features[0]}.`
                : //otherwise, if there are two features...
                features.length === 2
                  ? //...then end the sentence here
                  `${features[0]} and ${features[1]}.`
                  : //otherwise, if there are three or more features...
                  features
                    //filter out the very last feature...
                    .filter((feature, index) => index !== features.length - 1)
                    //and for those features return their name...
                    .map((feature, index) => (
                      <span key={index}>{`${feature}, `}</span>
                    ))
              : null}
            {features.length > 0 &&
              features.length !== 1 &&
              features.length !== 2
              ? //...and then finally add the last feature with 'and' in front of it
              ` and ${features[features.length - 1]}.`
              : null}
          </Typography>
        </Grid>
      </Grid>
      <Grid item container alignItems="center">
        <Grid item xs={2}>
          <img src={check} alt="checkmark" />
        </Grid>
        <Grid item xs={10}>
          <Typography variant="body1">
            {`The custom features will be of ${customFeatures.toLowerCase()}, and the project will be used by about ${users} users.`}
          </Typography>
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
    <Grid container direction="row">
      <Grid
        item
        container
        direction="column"
        alignItems={matchesMD ? "center" : undefined}
      >
        <Grid
          item
          style={{ marginTop: "12em", marginLeft: matchesMD ? 0 : "5em" }}
        >
          <Typography variant="h1" align={matchesMD ? "center" : undefined}>
            Arviointi kotisivujen hinnasta.
          </Typography>
        </Grid>
      </Grid>

      <Grid
        item
        container
        direction="column"
        alignItems="center"
        style={{ marginRight: matchesMD ? 0 : "2em", marginBottom: "25em" }}
      >
        {questions
          .filter(question => question.active)
          .map((question, index) => (
            <React.Fragment key={index}>
              <Grid item>
                <Typography
                  align="center"
                  variant="h2"
                  style={{
                    fontWeight: 500,
                    fontSize: "2.25rem",
                    marginTop: "1em",
                    lineHeight: 1.25,
                    marginLeft: matchesSM ? "1em" : 0,
                    marginRight: matchesSM ? "1em" : 0
                  }}
                >
                  {question.title}
                </Typography>
                <Typography
                  variant="body1"
                  align="center"
                  style={{ marginBottom: "2.5em" }}
                  gutterBottom
                >
                  {question.subtitle}
                </Typography>
              </Grid>
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
                        ? theme.palette.common.grey4
                        : undefined
                    }}
                    direction="column"
                    alignItems="center"
                    md
                  >
                    <Grid item style={{ maxWidth: "18em" }}>
                      <Typography
                        align="center"
                        variant="h5"
                        style={{
                          lineHeight: 1,
                          marginBottom: "1em"
                        }}
                      >
                        {option.title}
                      </Typography>
                      <Typography align="center" variant="caption">
                        {option.subtitle}
                      </Typography>
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
              Hinta arviointi
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
                  label="Name"
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
                  label="Phone"
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
                  InputProps={{ disableUnderline: true }}
                  value={message}
                  className={classes.message}
                  multiline
                  fullWidth
                  placeholder="Tell us more about your project."
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
                  We can create this digital solution for an estimated{" "}
                  <span className={classes.specialText}>
                    ${total.toFixed(2)}
                  </span>
                </Typography>
                <Typography
                  variant="body1"
                  paragraph
                  align={matchesSM ? "center" : undefined}
                >
                  Fill out your name, number, and email, place your request, and
                  we’ll get back to you with details moving forward and a final
                  price.
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
                        Place Request
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
                    Cancel
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
