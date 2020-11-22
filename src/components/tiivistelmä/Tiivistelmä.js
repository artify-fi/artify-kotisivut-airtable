import React from "react";
import { Link } from "gatsby";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
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
    marginBottom: "1em",
    maxWidth: '40vw',
    [theme.breakpoints.down("sm")]: {
      maxWidth: '860vw',
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

    item1: {
      order: 2,
      [theme.breakpoints.down('md')]: {
        order: 1,
      },
    },
    item2: {
      order: 1,
      [theme.breakpoints.down('md')]: {
        order: 2,
      },
    },
  }

}));

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
          marginLeft: matchesSM ? 0 : "5em",
          marginTop: matchesSM ? "10em" : "12em",
          maxWidth: matchesSM ? undefined : '60vw',
          alignItems: matchesSM ? 'center' : undefined,
          marginBottom: '2em',
        }}
      >
        <Typography
          className={classes.mainHeading}
          align={matchesSM ? "center" : undefined}
          variant="h1"
          component="h1"
          gutterBottom
        >
          Kattava palveluvalikoima josta saat kotisivuillesi kompleksisen
          kokonaisuuden asiantuntevasta sivuston
          suunnittelusta ja kehittämisestä sen tehokkaaseen mainostamiseen.
        </Typography>
      </Grid>


      <Grid item>
        {" "}
        {/*-- 1.  ---Verkkosivut Block-----*/}
        <Grid
          container
          direction="row"
          justify={matchesMD ? "center" : undefined}
          className={classes.serviceContainer} >

          <Grid
            item
            className={classes.item1}
            style={{
              marginLeft: matchesMD ? 0 : "5em",
              textAlign: matchesSM ? "center" : undefined
            }} >

            <Typography
              paragraph
              style={{ marginRight: matchesSM ? 0 : '4em' }}
              variant="h4">Progressiiviset GatsbyJS-kotisivut</Typography>
            <Typography
              variant="subtitle1"
              style={{ marginRight: matchesSM ? 0 : '4em' }}
              className={classes.subtitle}>
              Progressiiviset kotisivut ovat verkkosivustoja, jotka toimivat kuin natiivisovellukset, mutta ne näkyvät mobiilin tai tietokonen selaimessasi.
              Ne latautuvat ilman verkkoa, synkronoituvat taustalla ja lähettävät push-ilmoituksia.
              Mobiilaitteilla hyvin toimivat kotisivut nostavat sivujesi sijoitusta Googlen hauissa ja antavat parempia hakukonetuloksia.
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

          <Grid item className={classes.item2}>
            <img
              style={{ marginRight: '2em' }}
              className={classes.icon}
              alt="kotisivun tekeminen pienelle yritykselle"
              src={frontendDevelopment}
            />
          </Grid>
        </Grid>
      </Grid>


      <Grid item>
        {" "}
        {/*--  2.  ---Custom Software Block-----*/}
        <Grid
          container
          direction="row"
          justify={matchesSM ? "center" : "flex-end"}
          className={classes.serviceContainer}
          style={{ marginTop: matchesSM ? "1em" : "5em" }} >

          <Grid item
            className={classes.item1}
            style={{ marginRight: matchesSM ? 0 : "12em" }}>
            <img
              className={classes.icon}
              alt="hakunonen optimointi seo"
              src={seo}
            />
          </Grid>

          <Grid
            item
            style={{
              marginRight: '6em',
              textAlign: matchesSM ? "center" : undefined,
              width: matchesSM ? undefined : "35em"
            }} >

            <Typography paragraph variant="h4">Hakukoneoptimointi (SEO)</Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              SEO (Search Engine Optimization) on hakukoneoptimointi, mikä tarkoittaa,
              että luomamme kotisivut ovat helposti löydettävissä Googlelta,
              Yahoolta ja muilta, ja siksi sivustoosi saapuu enemmän vierailuja ihmisiltä,
              jotka etsivät tarjoamaasi palvelua tai tuotetta.
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
          direction="row"
          justify={matchesSM ? "center" : undefined}
          className={classes.serviceContainer}
        >
          <Grid
            item
            style={{
              marginLeft: matchesSM ? 0 : "5em",
              textAlign: matchesSM ? "center" : undefined
            }} >

            <Typography
              paragraph
              variant="h4">Hakukonemarkkinointi (SEM)</Typography>
            <Typography
              variant="subtitle1"
              style={{ marginRight: matchesSM ? 0 : '8em' }}
              className={classes.subtitle}>
              SEM (Search Engine Marketing) on maksullisten strategioiden käyttö hakujen
              näkyvyyden lisäämiseksi.
              Tuotemerkit* maksavat siitä,
              että mainokset näkyvät hakutuloksina hakukoneiden tulossivuilla.
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
          <Grid item>
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
          direction="row"
          justify={matchesSM ? "center" : "flex-end"}
          className={classes.serviceContainer}
          style={{ marginTop: matchesSM ? "1em" : "5em" }} >
          <Grid item style={{ marginRight: matchesSM ? 0 : "5em" }}>
            <img
              className={classes.icon}
              alt="digital marketing google analytics"
              src={digitalMarketing}
            />
          </Grid>

          <Grid
            item
            style={{
              textAlign: matchesSM ? "center" : undefined,
              width: matchesSM ? undefined : "35em"
            }} >

            <Typography paragraph variant="h4">Digimarkkinointi & Google Analytics</Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              Olellinen osa tämän päivän verkkosivustoa on analysoida sen vierailioita.
              Kuinka kauan he ovat sivulla, missä he napsauttavat sekä miten he tulivat sivulle.
              Google Analytics vastaa lisäksi moniin muihin kysymyksiin.
              Nämä tiedot voivat auttaa sinua selvittämään, kuka kohderyhmäsi on ja
              toimiiko Internet-markkinointisi. Näiden tietojen perusteella voit luoda
              Internet-markkinointistrategian ja todellisen mediasuunnitelman tulevaa
              toimintaa varten - mitä pitäisi tehdä ja miten se tulisi tehdä.
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
