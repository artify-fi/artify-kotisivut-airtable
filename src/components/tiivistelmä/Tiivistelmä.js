import React from "react";
import { Link } from "gatsby";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import ButtonArrow from "../original";
import infoBackground from '../../assets/images/3d-background.jpg'
import customSoftwareIcon from "../../assets/Custom Software Icon.svg";
import mobileAppsIcon from "../../assets/mobileIcon.svg";
import websitesIcon from "../../assets/websiteIcon.svg";

const useStyles = makeStyles(theme => ({
  // specialText: {
  //   fontFamily: "Pacifico",
  //   color: theme.palette.common.orange
  // },
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
}));

export default function Services(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid
      container
      direction="column"
      className={classes.infoBackground}>

      <Grid
        item
        style={{
          marginLeft: matchesSM ? 0 : "5em",
          marginTop: matchesSM ? "10em" : "12em"
        }}
      >
        <Typography
          align={matchesSM ? "center" : undefined}
          variant="h1"
          gutterBottom
        >
          Kattava palveluvalikoima josta saat kotisivuillesi kaiken asiantuntevasta sivuston
          suunnittelusta ja kehittämisestä sekä sen tehokkaaseen mainostamiseen.
        </Typography>
      </Grid>


      <Grid item>
        {" "}
        {/*-- 1.  ---Verkkosivut Block-----*/}
        <Grid
          container
          direction="row"
          justify={matchesSM ? "center" : undefined}
          className={classes.serviceContainer}   >

          <Grid
            item
            style={{
              marginLeft: matchesSM ? 0 : "5em",
              textAlign: matchesSM ? "center" : undefined
            }} >


            <Typography paragraph variant="h4">Progressiiviset GatsbyJS-kotisivut</Typography>
            <Typography variant="subtitle1" style={{ marginRight: matchesSM ? 0 : '8em' }} className={classes.subtitle}>
              Progressiiviset verkkosovellukset ovat verkkosivustoja, jotka toimivat kuin natiivisovellukset, mutta ne näkyvät mobiilin tai tietokonen selaimessasi.
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
          <Grid item>
            <img
              className={classes.icon}
              alt="mobile phone icon"
              src={mobileAppsIcon}
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

          <Grid
            item
            style={{
              textAlign: matchesSM ? "center" : undefined,
              width: matchesSM ? undefined : "35em"
            }} >

            <Typography paragraph variant="h4">Hakukoneoptimointi (SEO)</Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              SEO (Search Engine Optimization) on hakukoneoptimointi, mikä tarkoittaa, että luomamme kotisivut ovat helposti löydettävissä Googlelta,
              Yahoolta ja muilta, ja siksi sivustoosi saapuu enemmän vierailuja ihmisiltä, ​​jotka etsivät tarjoamaasi palvelua tai tuotetta.
            </Typography>

            <Button
              component={Link}
              to="/customsoftware"
              variant="outlined"
              className={classes.learnButton}
              onClick={() => {
                props.setValue(1);
                props.setSelectedIndex(1);
              }}
            >
              <span style={{ marginRight: 10 }}>Learn More</span>
              <ButtonArrow
                width={10}
                height={10}
                fill={theme.palette.common.blue}
              />
            </Button>
          </Grid>
          <Grid item style={{ marginRight: matchesSM ? 0 : "5em" }}>
            <img
              className={classes.icon}
              alt="custom software icon"
              src={customSoftwareIcon}
              width="250em"
            />
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
            }}
          >
            <Typography variant="h4">Hakukonemarkkinointi (SEM)</Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              SEM (Search Engine Marketing) on maksullisten strategioiden käyttö hakujen näkyvyyden lisäämiseksi.
              Tuotemerkit* maksavat siitä,
              että mainokset näkyvät hakutuloksina hakukoneiden tulossivuilla.
            </Typography>
            <Typography variant="subtitle1">
              *tuotemerkki määritellään "henkilön käsitykseksi tuotteesta, palvelusta, kokemuksesta tai organisaatiosta".
            </Typography>
            <Button
              component={Link}
              to="/websites"
              variant="outlined"
              className={classes.learnButton}
              onClick={() => {
                props.setValue(1);
                props.setSelectedIndex(3);
              }}
            >
              <span style={{ marginRight: 10 }}>Learn More</span>
              <ButtonArrow
                width={10}
                height={10}
                fill={theme.palette.common.blue}
              />
            </Button>
          </Grid>
          <Grid item style={{ marginRight: matchesSM ? 0 : "5em" }}>
            <img
              className={classes.icon}
              alt="website icon"
              src={websitesIcon}
              width="250em"
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
