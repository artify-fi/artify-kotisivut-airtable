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
  mainHeading: {
    // larger than 1920

    // 1280  and  up to 1920

    // 960 and up to 1280
    [theme.breakpoints.down('md')]: {
      fontSize: '2.2rem',
    },

    // 600 up to 960
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.6rem',
      paddingLeft: '2.6em',
      paddingRight: '2.6em',
      marginBottom: '2em'
    },

    // 0 upt to 600
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.4rem',
      paddingLeft: '1.2em',
      paddingRight: '1.2em'
    },

  }

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
      className={classes.infoBackground}
      style={{ margin: '5px' }}>

      <Grid
        item
        style={{
          marginLeft: matchesMD ? 0 : "5em",
          marginTop: matchesMD ? "10em" : "12em",
          maxWidth: matchesMD ? undefined : '60vw',
          alignItems: matchesMD ? 'center' : undefined,
          marginBottom: '2em',
        }}
      >
        <Typography
          className={classes.mainHeading}
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
            style={{
              marginLeft: matchesMD ? 0 : "5em",
              textAlign: matchesMD ? "center" : undefined
            }} >

            <Typography
              paragraph
              style={{ marginRight: matchesMD ? 0 : '4em' }}
              variant="h4">
              Progressiiviset GatsbyJS kotisivut
            </Typography>

            <Typography
              variant="subtitle1"
              style={{ marginRight: matchesMD ? 0 : '4em' }}
              className={classes.subtitle}>
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
              className={classes.learnButton}
              onClick={() => {
                props.setValue(1);
                props.setSelectedIndex(2);
              }}>

              <span style={{ marginRight: 10 }}>Katso Lisää</span>
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
              style={{ marginRight: matchesMD ? 0 : '4em' }}
              variant="h4">
              Hakukoneoptimointi (SEO)
            </Typography>

            <Typography
              variant="subtitle1"
              style={{ marginRight: matchesMD ? 0 : '4em' }}
              className={classes.subtitle}>
              SEO <span style={{ fontWeight: 'bolder' }} >(Search Engine Optimization)</span>
              eli hakukoneoptimointi, mikä tarkoittaa sitä, että luomamme kotisivut ovat
              helposti löydettävissä esim. Googlessa tai Yahoossa ja siksi houkuttelevat
              sivustollesi saapuu enemmän tarjoamistasi palveluista tai tavaroista kiinnostuneita ihmisiä.
            </Typography>

            <Button
              component={Link}
              to="/palvelut/hakukoneOptimointi"
              variant="outlined"
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
              style={{ marginRight: matchesMD ? 0 : '4em' }}
              variant="h4">
              Hakukonemarkkinointi (SEM)
            </Typography>

            <Typography
              variant="subtitle1"
              style={{ marginRight: matchesMD ? 0 : '8em' }}
              className={classes.subtitle}>
              SEM <span style={{ fontWeight: 'bolder' }}>(Search Engine Marketing)</span> on
              näkyvyyden lisäämistä maksullisten strategioiden avulla.
              *Tuotemerkit maksavat siitä, että heidän mainokset näkyvät hakukoneiden
              tulossivuilla.
            </Typography>

            <Typography
              variant="subtitle1"
              className={classes.subtitle}>
              *tuotemerkki määritellään "henkilön käsitykseksi tuotteesta, palvelusta,
              kokemuksesta tai organisaatiosta".
            </Typography>

            <Button
              component={Link}
              to="/palvelut/hakukoneOptimointi"
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
              style={{ marginRight: matchesMD ? 0 : '4em' }}
              variant="h4"
            >Digimarkkinointi & Google Analytics
            </Typography>

            <Typography
              variant="subtitle1"
              style={{ marginRight: matchesMD ? 0 : '4em' }}
              className={classes.subtitle}>
              Vierailijoiden analysoiminen on nykyään oleellinen osa verkkosivuja kehittämisessä.
              Esimerkiksi kuinka kauan he ovat sivulla ja missä sekä miten he ovat tulleet sivulle.
              Google Analytics vastaa näiden lisäksi moniin muihin kysymyksiin.
              Nämä tiedot voivat auttaa selvittämään, että millainen kohderyhmä on kyseessä
              ja toimiiko kyseinen Internet-markkinointi. Näiden tietojen perusteella voi luoda
              Internet-markkinointistrategian ja hyvän mediasuunnitelman tulevaa toimintaa varten -
              mitä pitäisi tehdä ja miten se tulisi tehdä?
            </Typography>

            <Button
              component={Link}
              to="/palvelut/hakukoneMarkkinointi"
              variant="outlined"
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
