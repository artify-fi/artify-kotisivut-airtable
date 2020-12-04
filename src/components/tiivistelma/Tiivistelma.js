import React from "react";
import { Link } from "gatsby";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Box from '@material-ui/core/Box'
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import ButtonArrow from "../original";
import infoBackground from '../../assets/images/3d-background.jpg'
import sem from '../../assets/images/sem.webp'
import seo from "../../assets/images/seo.webp";
import digitalMarketing from "../../assets/images/digitalMarketing.webp";
import frontendDevelopment from "../../assets/images/frontendDevelopment.webp";


const useStyles = makeStyles(theme => ({

  subtitle: {
    marginBottom: "3em",
    maxWidth: '36vw',
    [theme.breakpoints.down("sm")]: {
      maxWidth: '86vw',
      textAlign: 'center'
    }
  },
  icon: {
    marginLeft: "2em",
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0
    }
  },
  serviceContainer: {
    marginTop: "1.6em",
    [theme.breakpoints.down("sm")]: {
      padding: 25
    }
  },
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: '1rem',
    fontWeight: 500,
    height: 45,
    width: 160,
    marginTop: '2em',
    marginBottom: '3em',
    marginLeft: '4em',
    backgroundColor: theme.palette.common.grey1,
    '&:hover': {
      backgroundColor: theme.palette.common.grey3,
      color: 'white'
    },
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
    }
  },
  infoBackground: {
    backgroundImage: `url(${infoBackground})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    position: 'sticky',
    width: '100%',
  },

  // TIIVISTELMA HEADING1

  heading1: {
    ...theme.typography.h1,
    // larger than 1920
    [theme.breakpoints.down('xl')]: {
      fontSize: '2rem',
      marginTop: '2.6em',
      marginBottom: '1em',
      paddingLeft: '3em',
      paddingRight: '3em',
    },

    // 1280  and  up to 1920
    [theme.breakpoints.down('lg')]: {
      fontSize: '2.2rem',
      marginTop: '2.6em',
      marginBottom: '1em',
      paddingLeft: '2.3em',
      paddingRight: '2.3em',
    },

    // 960 and up to 1280
    [theme.breakpoints.down('md')]: {
      marginTop: '2.6em',
      fontSize: '1.9rem',
      paddingLeft: '2em',
      paddingRight: '2em',
    },

    // 600 up to 960        
    [theme.breakpoints.down('sm')]: {
      marginTop: '2em',
      fontSize: '1.5rem',
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

  // TIIVISTELMA HEADING2

  heading2: {
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


  // TIIVISTELMA TEXT
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

}));

const styles = theme => ({
  item2: {
    order: 2,
    [theme.breakpoints.up('sm')]: {
      order: 1,
    },
  },
  item3: {
    order: 1,
    [theme.breakpoints.up('sm')]: {
      order: 2,
    },
  },
});

export default function Services(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"))

  return (
    <Grid
      container
      direction="column"
      alignItems={matchesMD ? 'center' : undefined}
      className={classes.infoBackground}
      style={{ margin: '5px' }}>

      <Grid
        item
        container
        justify={matchesMD ? 'center' : undefined}
        style={{
          // marginLeft: matchesMD ? 0 : "5em",
          marginTop: matchesMD ? "10em" : "12em",
          maxWidth: matchesMD ? '70vw' : '60vw',
          alignItems: matchesMD ? 'center' : undefined,
          marginBottom: '2em',
        }}
      >
        <Typography
          className={classes.heading1}
          style={{ width: matchesMD ? '70vw' : undefined }}
          align={matchesMD ? "center" : undefined}
          variant="h1"
          component="h1"
          gutterBottom
        >
          Kattava palveluvalikoima josta saat kotisivullesi kompaktin
          kokonaisuuden asiantuntevasta sivuston
          suunnittelusta ja kehittämisestä sen tehokkaaseen mainostamiseen asti.
        </Typography>
      </Grid>


      <Grid item>
        {" "}
        {/*-- 1.  ---Verkkosivut Block-----*/}
        <Grid
          container
          direction={matchesMD ? "column" : "row"}
          justify={matchesMD ? "center" : "flex-stert"}
          className={classes.serviceContainer}
          style={{ marginTop: matchesMD ? "1em" : "5em" }} >

          <Grid
            item
            style={{
              marginLeft: matchesMD ? 0 : "6em",
              textAlign: matchesMD ? "center" : undefined,
              marginBottom: '4em'
            }}
            md>
            <img
              style={{ marginRight: '2em' }}
              className={classes.icon}
              alt="kotisivun tekeminen pienelle yritykselle"
              src={frontendDevelopment}
            />
          </Grid>

          <Grid
            md
            item
            container
            justify={matchesMD ? 'center' : undefined}
            style={{
              marginLeft: matchesMD ? 0 : "5em",
              textAlign: matchesMD ? "center" : undefined
            }} >

            <Typography
              paragraph
              className={classes.heading2}
              style={{
                marginRight: matchesMD ? 0 : '4em',
                maxWidth: matchesMD ? '80vw' : undefined
              }}
              variant="h4">
              Progressiiviset GatsbyJS kotisivut
            </Typography>

            <Typography
              variant="subtitle1"
              style={{ marginRight: matchesMD ? 0 : '4em' }}
              className={classes.text}>
              Progressiivinen kotisivu on verkkosivusto, joka muistuttaa natiivisovellusta,
              mutta toimii mobiilin ja tietokoneen selaimessa. Ne toimivat ilman lataamista,
              synkronoituvat taustalla ja lähettävät push-ilmoituksia.
              Mobiililaitteilla hyvin toimiva kotisivu nostaa sivusi sijoitusta Google-haussa
              ja antaa parempia hakukonetuloksia.
            </Typography>

            <Button
              component={Link}
              to="/palvelut/kotisivut"
              variant="outlined"
              aria-label='lue enemman gatsby js progressiiviseista kotisivuista'
              className={classes.learnButton}
              onClick={() => {
                props.setValue(1);
                props.setSelectedIndex(2);
              }}>

              <span style={{ marginRight: 10 }}>Lue Lisää</span>
              <ButtonArrow
                width={10}
                height={10}
                fill={theme.palette.common.blue} />
            </Button>
          </Grid>
        </Grid>
      </Grid>


      <Grid item>
        {" "}
        {/*--  2.  ---Custom Software Block-----*/}
        <Grid
          container
          direction={matchesMD ? "column" : "row"}
          justify={matchesMD ? "center" : "flex-end"}
          className={classes.serviceContainer}
          style={{ marginTop: matchesMD ? "1em" : "5em" }} >

          <Grid
            item
            style={{
              marginLeft: matchesMD ? 0 : "6em",
              textAlign: matchesMD ? "center" : undefined,
              marginBottom: '4em'
            }}
            md>

            <img
              className={classes.icon}
              alt="hakunonen optimointi seo"
              src={seo}
            />
          </Grid>

          <Grid
            item
            md
            style={{
              marginLeft: matchesMD ? 0 : "5em",
              textAlign: matchesMD ? "center" : undefined
            }} >

            <Typography
              paragraph
              className={classes.heading2}
              style={{ marginRight: matchesMD ? 0 : '4em' }}
              variant="h4">
              Hakukoneoptimointi (SEO)
            </Typography>

            <Typography
              variant="subtitle1"
              style={{ marginRight: matchesMD ? 0 : '4em' }}
              className={classes.text}>
              SEO <span style={{ fontWeight: 'bolder' }} >(Search Engine Optimization)</span>
              eli hakukoneoptimointi, mikä tarkoittaa sitä, että luomamme kotisivut ovat
              helposti löydettävissä esim. Googlessa tai Yahoossa ja siksi houkuttelevat
              sivustollesi enemmän tarjoamistasi palveluista tai tavaroista kiinnostuneita ihmisiä.
            </Typography>

            <Button
              component={Link}
              to="/palvelut/hakukoneOptimointi"
              variant="outlined"
              aria-label='lue enemman hakukone optimoinnista'
              className={classes.learnButton}
              onClick={() => {
                props.setValue(1);
                props.setSelectedIndex(1);
              }}
            >
              <span style={{ marginRight: 10 }}>Lue Lisää</span>
              <ButtonArrow
                width={10}
                height={10}
                fill={theme.palette.common.blue}
              />
            </Button>
          </Grid>
        </Grid>
      </Grid>

      <Grid item>
        {" "}
        {/*-- 3.  ---Websites Block-----*/}
        <Grid
          container
          direction={matchesMD ? "column" : "row"}
          justify={matchesSM ? "center" : "flex-start"}
          className={classes.serviceContainer}
          style={{ marginTop: matchesSM ? "1em" : "5em" }} >

          <Grid
            item
            style={{
              marginLeft: matchesMD ? 0 : "8em",
              textAlign: matchesMD ? "center" : undefined
            }} >

            <Typography
              paragraph
              className={classes.heading2}
              style={{ marginRight: matchesMD ? 0 : '4em' }}
              variant="h4">
              Hakukonemarkkinointi (SEM)
            </Typography>

            <Typography
              variant="subtitle1"
              style={{ marginRight: matchesMD ? 0 : '8em' }}
              className={classes.text}>
              SEM <span style={{ fontWeight: 'bolder' }}>(Search Engine Marketing)</span> on
              näkyvyyden lisäämistä maksullisten strategioiden avulla.
              *Tuotemerkit maksavat siitä, että heidän mainokset näkyvät hakukoneiden
              tulossivuilla.
            </Typography>

            <Typography
              variant="subtitle1"
              className={classes.text}>
              *tuotemerkki määritellään "henkilön käsitykseksi tuotteesta, palvelusta,
              kokemuksesta tai organisaatiosta".
            </Typography>

            <Button
              component={Link}
              to="/palvelut/hakukoneOptimointi"
              aria-label='lue enemman hakukone markkinoinnista'
              variant="outlined"
              className={classes.learnButton}
              onClick={() => {
                props.setValue(1);
                props.setSelectedIndex(3);
              }}
            >
              <span style={{ marginRight: 10 }}>Lue Lisää</span>
              <ButtonArrow
                width={10}
                height={10}
                fill={theme.palette.common.blue} />
            </Button>

          </Grid>
          <Grid
            style={{
              marginRight: matchesMD ? 0 : "6em",
              textAlign: matchesMD ? "center" : undefined,
              marginBottom: '4em'
            }}
            item>
            <img
              className={classes.icon}
              alt="hakukonen markkinointi"
              src={sem}
            />
          </Grid>
        </Grid>
      </Grid>

      <Grid item>
        {" "}
        {/*--  4.  ---Digimarkkinointi & Google Analytics-----*/}
        <Grid
          container
          direction={matchesMD ? "column" : "row"}
          justify={matchesMD ? "center" : "flex-stert"}
          className={classes.serviceContainer}
          style={{ marginTop: matchesMD ? "1em" : "5em" }} >

          <Grid
            item
            style={{
              marginLeft: matchesMD ? 0 : "6em",
              textAlign: matchesMD ? "center" : undefined,
              marginBottom: '4em'
            }}
            md>
            <img
              style={{ marginRight: '2em' }}
              className={classes.icon}
              alt="digital marketing google analytics"
              src={digitalMarketing}
            />
          </Grid>

          <Grid
            md
            item
            style={{
              marginLeft: matchesMD ? 0 : "5em",
              textAlign: matchesMD ? "center" : undefined
            }} >

            <Typography
              paragraph
              className={classes.heading2}
              style={{ marginRight: matchesMD ? 0 : '4em' }}
              variant="h4"
            >Digimarkkinointi & Google Analytics
            </Typography>

            <Typography
              variant="subtitle1"
              style={{ marginRight: matchesMD ? 0 : '4em' }}
              className={classes.text}>
              Vierailijoiden analysoiminen on nykyään oleellinen osa verkkosivojen kehittämisessä.
              Esimerkiksi kuinka kauan he ovat sivulla ja missä sekä miten he ovat tulleet sivulle.
              Google Analytics vastaa näiden lisäksi moniin muihin kysymyksiin.
              Nämä tiedot voivat auttaa selvittämään, että millainen kohderyhmä on kyseessä
              ja toimiiko kyseinen Internet-markkinointi. Näiden tietojen perusteella voi luoda
              Internet-markkinointistrategian ja hyvän mediasuunnitelman tulevaa toimintaa varten -
              Mitä pitäisi tehdä ja miten se tulisi tehdä?
            </Typography>

            <Button
              component={Link}
              to="/palvelut/digimarkkinointi"
              variant="outlined"
              aria-label='lue enemman digimarkkinoinnista'
              className={classes.learnButton}
              onClick={() => {
                props.setValue(1);
                props.setSelectedIndex(1);
              }}
            >
              <span style={{ marginRight: 10 }}>Lue Lisää</span>
              <ButtonArrow
                width={10}
                height={10}
                fill={theme.palette.common.blue}
              />
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
