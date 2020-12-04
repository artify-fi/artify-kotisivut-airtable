import React from 'react'

import { makeStyles, useTheme } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { Link } from 'gatsby'
import useMediaQuery from '@material-ui/core/useMediaQuery'

import GatsbyJSWordPress from '../../assets/images/kehitysprosessi/Gatsbyjs.jpg'
import ACF from '../../assets/images/kehitysprosessi/AdvancedCustomFields.webp'
import CPT from '../../assets/images/kehitysprosessi/CustomPostTypes.webp'
import Koodi from '../../assets/images/kehitysprosessi/CleanCode.jpg'

// https://www.templatemonster.com/help/cherryframework-4-how-to-change-custom-post-type-labels-in-the-admin-panel.html



const useStyles = makeStyles(theme => ({
  rowContainer: {
    paddingLeft: '8em',
    paddingRight: '8em',
    paddingTop: '1em',
    paddingBottom: '2em',
    [theme.breakpoints.down('md')]: {
      paddingLeft: '2.4em',
      paddingRight: '2.4em',
      paddingBottom: '2em',
      paddingTop: '1em'
    },
    [theme.breakpoints.down('sm')]: {
      paddingLeft: '1.2em',
      paddingRight: '1.2em',
      paddingBottom: '2em',
      paddingTop: '0.6em'
    },
  },

  missionStatement: {
    fontStyle: "italic",
    fontWeight: 300,
    fontSize: "1.5rem",
    maxWidth: "40em",
    lineHeight: 1.4,
    [theme.breakpoints.down('xl')]: {
      fontSize: '2rem',
      marginBottom: '2em',
    },

    // 1280  and  up to 1920
    [theme.breakpoints.down('lg')]: {
      fontSize: '1.6rem',
      marginTop: '2em',
      paddingLeft: '3em',
      paddingRight: '3em'
    },


    // 960 and up to 1280
    [theme.breakpoints.down('md')]: {
      fontSize: '1.5rem',
      paddingLeft: '2em',
      paddingRight: '2em'
    },

    // 600 up to 960
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.4rem',
      paddingLeft: '1.4em',
      paddingRight: '1.4em'
    },

    // 0 upt to 600
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.2rem',
      paddingLeft: '1.2em',
      paddingRight: '1.2em',
      marginBottom: '0.4em'

    },
  },
  rowContainer: {
    paddingLeft: "5em",
    paddingRight: "5em",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "1.5em",
      paddingRight: "1.5em"
    }
  },
  avatar: {
    height: "25em",
    width: "25em",
    [theme.breakpoints.down("sm")]: {
      height: "20em",
      width: "20em",
      maxHeight: 300,
      maxWidth: 300
    },
  },
  h1: {
    ...theme.typography.h1,
    // larger than 1920
    [theme.breakpoints.down('xl')]: {
      fontSize: '2rem',
      marginTop: '2em',
      marginBottom: '1em',
      paddingLeft: '3em',
      paddingRight: '3em',
    },

    // 1280  and  up to 1920
    [theme.breakpoints.down('lg')]: {
      fontSize: '2rem',
      marginTop: '2em',
      marginBottom: '1em',
      paddingLeft: '2.3em',
      paddingRight: '2.3em',
    },

    // 960 and up to 1280
    [theme.breakpoints.down('md')]: {
      marginTop: '2.6em',
      fontSize: '1.8rem',
      paddingLeft: '2em',
      paddingRight: '2em',
    },

    // 600 up to 960        
    [theme.breakpoints.down('sm')]: {
      marginTop: '2em',
      fontSize: '1.3rem',
      paddingLeft: '0.8em',
      paddingRight: '0.8em',
    },

    // 0 upt to 600
    fontFamily: 'Open Sans Condensed',
    fontWeight: '500',
    [theme.breakpoints.down('xs')]: {
      marginTop: '2.2em',
      fontSize: '1.4rem',
      marginBottom: '1em',
      paddingLeft: '0.8em',
      paddingRight: '0.8em',
    },
  },

  h2: {
    // larger than 1920
    ...theme.typography.h2,
    [theme.breakpoints.down('xl')]: {
      fontSize: '2rem',
      marginBottom: '2em',
    },

    // 1280  and  up to 1920
    [theme.breakpoints.down('lg')]: {
      fontSize: '1.8rem',
      marginTop: '2em',
      paddingLeft: '3em',
      paddingRight: '3em'
    },


    // 960 and up to 1280
    [theme.breakpoints.down('md')]: {
      fontSize: '1.6rem',
      paddingLeft: '2em',
      paddingRight: '2em'
    },

    // 600 up to 960
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.4rem',
      paddingLeft: '1.4em',
      paddingRight: '1.4em'
    },

    // 0 upt to 600
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.2rem',
      paddingLeft: '1.2em',
      paddingRight: '1.2em',
      marginBottom: '0.4em'

    },
  },

  text: {
    paddingLeft: '2em',
    paddingRight: '2em',
    paddingTop: '1em',
    fontFamily: 'Open Sans Condensed',
    fontSize: '1.2rem',
    fontWeight: 400,
    color: '#443f3f',

    // larger than 1920  
    [theme.breakpoints.down('xl')]: {
      fontSize: '1.4rem',
      marginBottom: '2em',
    },

    // 1280  and  up to 1920
    [theme.breakpoints.down('lg')]: {
      fontSize: '1.4rem',
    },


    // 960 and up to 1280
    [theme.breakpoints.down('md')]: {
      fontSize: '1.3rem',
    },

    // 600 up to 960
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.2rem',
      paddingLeft: '0.4em',
      paddingRight: '0.4em',
      marginBottom: '0.4em'
    },

    // 0 upt to 600
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.2rem',
      paddingLeft: '0.4em',
      paddingRight: '0.4em',
      marginBottom: '0.4em'
    },
  },

  link: {
    color: '#45a3b2',
    textDecoration: 'underline',
    '&:hover': {
      color: 'purple'
    },
    firstSentence: {
      fontSize: '1.6em',
      fontWeight: 600
    }
  },
  divider: {
    color: 'red',
  },

  item1: {
    order: 1,
    [theme.breakpoints.down('sm')]: {
      order: 2,
    },
  },
  item2: {
    order: 2,
    [theme.breakpoints.down('sm')]: {
      order: 1,
    },
  },
}))

const Revolution = () => {

  const classes = useStyles()
  const theme = useTheme()
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'))
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'))


  return (
    <Grid container direction="column">

      {/* Heading text */}
      <Grid
        container
        item
        justify='center'
        style={{ marginTop: matchesMD ? "4em" : "8em" }}>

        <Typography
          align='center'
          className={classes.h1}
          style={{ maxWidth: '80%', marginTop: '3em' }}
          variant="h1">
          Luodessamme verkkosivustoa varmistamme, että se on käyttäjäystävällinen ja täyttää modernit
          verkkostandardit. Nykyään kyse ei ole enää vain siitä, että onko sinulla verkkosivu vai ei,
          vaan myös siitä miten tehokkaasti se toimii.
        </Typography>
      </Grid>

      {/* 1 Section Technology used */}
      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        alignItems="center"
        className={classes.rowContainer}
        style={{ marginTop: "5em" }}>

        <Grid item lg>
          <img
            src={GatsbyJSWordPress}
            alt="gatsby wordpress graphql react techniques used"
            style={{
              width: '32em',
              maxHeight: '334px',
              maxWidth: matchesSM ? 300 : "24em",
              marginRight: matchesMD ? 0 : "2em",
              marginLeft: matchesMD ? 0 : "5em",
              marginBottom: matchesMD ? "5em" : 0
            }}
          />
        </Grid>

        <Grid
          item
          container
          direction="column"
          lg
          style={{ maxWidth: "60vw" }}>
          <Grid item>
            <Typography
              align={matchesMD ? "center" : "left"}
              className={classes.h2}
              variant="h2"
              gutterBottom
            >
              Kotisivujen kehitysprosessi ja siinä käytetty teknologia.
                </Typography>
          </Grid>
          <Grid item>
            <Typography
              align={matchesMD ? "center" : "left"}
              variant="body1"
              className={classes.text}
              paragraph
            >
              Artify:n kotisivujen kehitysprosessissa, <span style={{ fontWeight: 'bolder' }}>"Headless" WordPress </span>
              käsittelee sisällön luomista ja GatsbyJS hoitaa käyttöliittymän.
             Gatsby:n käyttäminen on loistava tapa tehostaa sivuston suorituskykyä, skaalautuvuutta, tietoturvaa ja
             kehitysnopeuden etuja, samalla säilyttäen WordPressin tutun sisällönhallintajärjestelmän.
                </Typography>

            <Typography
              align={matchesMD ? "center" : "left"}
              variant="body1"
              className={classes.text}
              paragraph
            >
              Gatsby:n käyttö yhdessä WordPressin kanssa on hyödyllinen askel yritykselle,
              joka jo omistaa WordPress -kotisivun, mutta haluaa parempaa tietoturvaa, sivuston suorituskykyä
              tai haluavat julkaista sisältöä automaattisesti ja samanaikaisesti useilla kanavilla.
                </Typography>

            <Typography
              align={matchesMD ? "center" : "left"}
              variant="body1"
              className={classes.text}
              paragraph
            >
              Asiakkaat tuntevat usein WordPressin sisällönhallinnan työnkulut.
              Sen sijaan, että yritettäisiin vakuuttaa heidät käyttämään kokonaan uutta pinoa, Gatsby:n käyttäminen
              WordPressin rinnalla on erittäin hyvä tapa kehittää sivustoa muuttamatta asiakkaan sisällönmuokkaustottumusta.
                </Typography>
          </Grid>
        </Grid>
      </Grid>


      {/*2. section: Advanced Custom Fields */}
      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        alignItems="center"
        className={classes.rowContainer}
        style={{ marginTop: "5em" }}>


        <Grid item container direction="column" className={classes.item1} lg style={{ maxWidth: "40em" }}>
          <Grid item>
            <Typography
              align={matchesMD ? "center" : "left"}
              variant="h4"
              className={classes.h2}
              gutterBottom
            >
              Advanced Custom Fields
                </Typography>
          </Grid>
          <Grid item>
            <Typography
              align={matchesMD ? "center" : "left"}
              variant="body1"
              className={classes.text}
              paragraph
            >
              <span style={{ fontWeight: 'bolder' }}>Advanced Custom Fields</span> on WordPress-laajennus,
             minkä avulla voi lisätä kustomoituja sisältökenttiä (kutsutaan yleisemmin muokatuiksi kentiksi),
             joiden avulla voidaan rakentaa verkkosivuja nopeammin sekä kouluttaa asiakkaita helposti.
                </Typography>
            <Typography
              align={matchesMD ? "center" : "left"}
              variant="body1"
              className={classes.text}
              paragraph
            >
              Artify käyttää ACF -tekniikkaa erinomaisten ominaisuuksien vuoksi.
              Myös Gatsby on erittäin hyvä hakemaan tietoja ja esittämään niitä asianmukaisesti vierailijoille.
                </Typography>
          </Grid>
        </Grid>

        <Grid
          item
          container
          justify='space-around'
          className={classes.item2}
          lg>
          <img
            src={ACF}
            alt="advanced custom fields  eli ACF esimerkki screenshot"
            style={{
              width: '26em',
              maxHeight: '334px',
              maxWidth: matchesSM ? 300 : "24em",
              marginRight: matchesMD ? 0 : "5em",
              marginBottom: matchesMD ? "5em" : 0
            }}
          />
        </Grid>
      </Grid>


      {/* 3 osa Custom Post Types */}
      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        alignItems="center"
        className={classes.rowContainer}
        style={{ marginTop: "5em" }} >

        <Grid item lg>
          <img
            src={CPT}
            alt="Custom Post Types esimerkki screenshot"
            style={{
              width: '26em',
              maxHeight: '334px',
              maxWidth: matchesSM ? 300 : "24em",
              marginRight: matchesMD ? 0 : "5em",
              marginBottom: matchesMD ? "5em" : 0
            }}
          />
        </Grid>

        <Grid
          item
          container
          direction="column"
          lg
          style={{ maxWidth: "40em" }}>
          <Grid item>
            <Typography
              align={matchesMD ? "center" : "left"}
              variant="h2"
              className={classes.h2}
              gutterBottom
            >
              Custom Post Types
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              align={matchesMD ? "center" : "left"}
              variant="body1"
              className={classes.text}
              paragraph
            >
              Custom Post Types muuttavat WordPress -sivuston blogiympäristöstä tehokkaaksi
             sisällönhallintajärjestelmäksi <span style={{ fontWeight: 'bolder' }}>(CMS)</span>. Niiden avulla voi luoda erilaisia
             kustomoituja sisältötyyppejä verkkosivustolle.
              </Typography>
            <Typography
              align={matchesMD ? "center" : "left"}
              variant="body1"
              className={classes.text}
              paragraph
            >
              Custom Post Types toimii erittäin hyvin WordPressissä ACF -tekniikan kanssa.
              Näitä yhdessä käytettynä, asiakkaalla on hyvin kätevää sekä turvallista lisätä ja
              vaihtaa sivuston sisältöä itsenäisesti sekä pelkäämättä pilaavansa jotain sivustolla.
              </Typography>
          </Grid>
        </Grid>
      </Grid>




      {/* Pure Code from Artify */}
      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        alignItems="center"
        className={classes.rowContainer}
        style={{ marginTop: "5em" }} >

        <Grid
          item
          container
          direction="column"
          className={classes.item1}
          lg style={{ maxWidth: "40em" }}>
          <Grid item>
            <Typography
              align={matchesMD ? "center" : "left"}
              variant="h4"
              className={classes.h2}
              gutterBottom
            >
              Puhdas ja selkeä koodi
              </Typography>
          </Grid>
          <Grid item>
            <Typography
              align={matchesMD ? "center" : "left"}
              variant="body1"
              className={classes.text}
              paragraph
            >
              Emme käytä minkäänlaisia sivujen rakentajia verkkosivustojemme luomiseen,
              vaan käytämme vain puhdasta koodia, mikä mahdollistaa verkkosivustojen maksimaalisen
              turvallisuuden sekä luotettavuuden.
              </Typography>
          </Grid>
        </Grid>


        <Grid
          item
          container
          justify='space-around'
          className={classes.item2}
          lg>
          <img
            src={Koodi}
            alt="puhtan koodin esimerkki screenshot"
            style={{
              width: '26em',
              maxHeight: '334px',
              maxWidth: matchesSM ? 300 : "24em",
              marginRight: matchesMD ? 0 : "5em",
              marginBottom: matchesMD ? "5em" : 0
            }}
          />
        </Grid>
      </Grid>
    </Grid>




  );
}

export default Revolution
