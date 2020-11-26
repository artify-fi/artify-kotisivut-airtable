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
        style={{ marginTop: matchesMD ? "4em" : "8em" }}
      >
        <Typography
          align='center'
          style={{ maxWidth: '80%', marginTop: '3em' }}
          variant="h1"
        >
          Luotaessamme verkkosivustoa varmistamme, että se on  käyttäjäystävällinen ja täyttää modernit
          verkkostandardit.Nykyään kysymys ei ole enää siitä, onko sinulla verkkosivusto vai ei, vaan kuinka tehokkaasti se toimii.
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
              width: '26em',
              maxHeight: '334px',
              maxWidth: matchesSM ? 300 : "24em",
              marginRight: matchesMD ? 0 : "5em",
              marginBottom: matchesMD ? "5em" : 0
            }}
          />
        </Grid>

        <Grid item container direction="column" lg style={{ maxWidth: "40em" }}>
          <Grid item lg>
            <Typography
              align={matchesMD ? "center" : "left"}
              variant="h2"
              gutterBottom
            >
              Kotisivujen kehitysprosessi ja käytetty teknologia.
              </Typography>
          </Grid>
          <Grid item>
            <Typography
              align={matchesMD ? "center" : "left"}
              variant="body1"
              paragraph
            >
              Artify:n kotisivujen kehitysprosessissa "Headless WordPress" käsittelee sisällön luomista
              ja GatsbyJS hoitaa käyttöliittymän. Gatsbyn lisääminen on loistava tapa tehostaa modernia
              suorituskykyä, skaalautuvuutta, tietoturvaa ja kehitysnopeuden etuja säilyttäen samalla
              WordPressin tutun sisällönhallintajärjestelmän.
              </Typography>

            <Typography
              align={matchesMD ? "center" : "left"}
              variant="body1"
              paragraph
            >
              Gatsbyn käyttö yhdessä WordPressin kanssa on hyödyllinen siirtymisreitti
              yrityksille, kuka jo omistavat WordPress kotisivuja ja jotka etsivät parempaa tietoturvaa,
              sivuston suorituskykyä tai haluavat julkaista sisältöä automaattisesti useilla kanavilla samanaikaisesti..
              </Typography>

            <Typography
              align={matchesMD ? "center" : "left"}
              variant="body1"
              paragraph
            >
              Asiakkaat tuntevat usein WordPressin sisällönhallinnan työnkulut. Sen sijaan,
              että yritettäisiin vakuuttaa heidät käyttämään kokonaan uutta pinoa,
              Gatsbyn käyttäminen WordPressin rinnalla on tapa tuottaa etuja muuttamatta heidän
              sisällönmuokkauskokemustaan.
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


        <Grid item container direction="column" lg style={{ maxWidth: "40em" }}>
          <Grid item lg>
            <Typography
              align={matchesMD ? "center" : "left"}
              variant="h4"
              gutterBottom
            >
              Advanced Custom Fields
              </Typography>
          </Grid>
          <Grid item>
            <Typography
              align={matchesMD ? "center" : "left"}
              variant="body1"
              paragraph
            >
              "Advanced Custom Fields" on WordPress-laajennus, jonka avulla voit lisätä
              kustomoituja sisältökenttiä.  Näitä kutsutaan yleisemmin muokatuiksi kentiksi,
              ja niiden avulla voi rakentaa verkkosivustoja nopeammin ja kouluttaa asiakkaita helposti.
              </Typography>
            <Typography
              align={matchesMD ? "center" : "left"}
              variant="body1"
              paragraph
            >
              Artify käyttää ACF-tekniikkaa laajalti erinomaisista ominaisuuksistaan ​​johtuen
              ja Gatsby on erityisen hyvä myös hakemaan tietoja niistä ja esittämään
              asianmukaisesti vierailioille.
              </Typography>
          </Grid>
        </Grid>
        <Grid
          item
          container
          justify='space-around'
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

          <Link to='/'>
            <Typography variant='h6'>
              Katso iso kuva
            </Typography>
          </Link>
        </Grid>
      </Grid>


      {/* 3 osa Custom Post Types */}
      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        alignItems="center"
        className={classes.rowContainer}
        style={{ marginTop: "5em" }}
      >
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
          <Link to='https://www.templatemonster.com/help/cherryframework-4-how-to-change-custom-post-type-labels-in-the-admin-panel.html'>Kiitos templatemonster</Link>
        </Grid>

        <Grid item container direction="column" lg style={{ maxWidth: "40em" }}>
          <Grid item>
            <Typography
              align={matchesMD ? "center" : "left"}
              variant="h4"
              gutterBottom
            >
              Custom Post Types
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              align={matchesMD ? "center" : "left"}
              variant="body1"
              paragraph
            >
              Custom Post Type:s muuttavat WordPress-sivuston blogiympäristöstä tehokkaaksi
              sisällönhallintajärjestelmäksi (CMS).Pohjimmiltaan niiden avulla voi luoda
              erilaisia kustomoituja sisältötyyppejä verkkosivustolle.
            </Typography>
            <Typography
              align={matchesMD ? "center" : "left"}
              variant="body1"
              paragraph
            >
              Custom Post Types toimii erityisen hyvin käytettäväksi WordPressissä
              ACF-tekniikan kanssa. Kun niitä käytetään yhdessä, asiakkaalle
              on erityisen kätevää ja turvallista lisätä ja vaihtaa sisältöä itsenäisesti verkkosivustollaan
              pelkäämättä pilata mitään sivustolla.
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      {/* 3 osa Custom Post Types */}
      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        alignItems="center"
        className={classes.rowContainer}
        style={{ marginTop: "5em" }}
      >
        <Grid item lg>
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

        {/* Pure Code from Artify */}
        <Grid item container direction="column" lg style={{ maxWidth: "40em" }}>
          <Grid item>
            <Typography
              align={matchesMD ? "center" : "left"}
              variant="h4"
              gutterBottom
            >
              Puhdas ja selkeä koodi
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              align={matchesMD ? "center" : "left"}
              variant="body1"
              paragraph
            >
              Emme käytä minkäänlaisia sivujen rakentajia verkkosivustojemme luomiseen,
              vaan käytämme vain puhdasta koodia mikä mahdollistaa verkkosivustojen maksimaalisen
              turvallisuuden ja luotettavuuden.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Revolution
