import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Link } from 'gatsby'
//import Avatar from "@material-ui/core/Avatar";
import useMediaQuery from "@material-ui/core/useMediaQuery";
//import Hidden from "@material-ui/core/Hidden";
import ArtifyfSEO from "../../assets/images/ArtifySEO.webp";
import ArtifySEM from '../../assets/images/ArtifySEM.webp'
import { Underline } from "@styled-icons/fa-solid";
//import CallToAction from "./ui/CallToAction";
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import QR from '../../assets/images/artbachmann.eu.png'
import CafeteriaGatsbyFrontpage from '../../assets/images/cafeteria_gatsby_thumbnail.webp'

const useStyles = makeStyles(theme => ({
  missionStatement: {
    fontStyle: "italic",
    fontWeight: 300,
    fontSize: "1.5rem",
    maxWidth: "50em",
    lineHeight: 1.4,
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
  }
}));

export default function About(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const preventDefault = (event) => event.preventDefault();

  return (
    <Grid container direction="column">
      <Grid
        item
        className={classes.rowContainer}
        style={{ marginTop: matchesMD ? "8em" : "10em" }}
      >

        {/* Yhteinen otsikko SEO JA SEM */}

        <Typography
          align={matchesMD ? "center" : undefined}
          className={classes.h1}
          style={{
            marginLeft: matchesMD ? undefined : '3em',
            maxWidth: matchesMD ? undefined : '70vw',
          }}
          variant="h1">
          Miten tulla näkyvämmäksi hakukoneissa?
          Yritykselläsi on verkkosivusto ja haluat enemmän liikennettä, enemmän hintakyselyjä,
          enemmän myyntiä ja enemmän tuotemerkkitietoisuutta verkkosivustosi kautta.
          Joten mitä pitäisi tehdä tavoitteidesi saavuttamiseksi? Kuinka hakukoneoptimointi
          ja hakukonemarkkinointi voivat auttaa sinua pääsemään selvästi havaittavaksi Googlessa?
        </Typography>
      </Grid>
      <Grid
        item
        container
        justify="center"
        className={classes.rowContainer}
        style={{ marginTop: "3em" }}
      >
        <Typography
          variant="h2"
          align="center"
          className={classes.missionStatement}
        >
          {/* hakukoneoptimointi */}

          Lyhenne SEO tulee englanninkielisestä termistä search engine optimization eli hakukoneoptimointi.
          Tämä tarkoittaa, että verkkosivusto tai verkkokauppa tehdään hakukoneille mahdollisimman
          ymmärrettäväksi avainsanojen ja sivujen avulla. Tällä tavoin hakukoneet, kuten Google,
          ymmärtävät paremmin sivuilla olevat tiedot ja luottavat siihen, että ne näytetään hakijoille.
          Hakukoneiden tarkoitus on hyödynnä hakijoita mahdollisimman paljon ja antaa parhaat sivut
          vastauksena jokaiseen hakuun ja joiden sisältö sisältää vastauksen hakijan pyyntöön.
        </Typography>
      </Grid>
      <Grid item>
        <Grid item container justify="center" lg>
          <img
            src={ArtifyfSEO}
            alt="Gatsby logo"
            style={{ maxHeight: matchesMD ? 320 : "32em", marginTop: '8em' }}
          />
        </Grid>
      </Grid>


      {/* SEO Section Paragraphs */}
      <Grid
        item
        container
        className={classes.rowContainer}
        style={{ marginTop: "4em", marginBottom: "10em" }}
        direction={matchesMD ? "column" : "row"}
        alignItems={matchesMD ? "center" : undefined}
        justify="space-between">


        <Grid item>
          <Grid
            item
            container
            direction="column"
            lg
            style={{
              maxWidth: "35em",
              marginLeft: matchesMD ? undefined : '7em'
            }} >

            <Grid item>
              <Typography
                align={matchesMD ? "center" : undefined}
                variant="h3"
                gutterBottom
              >
                Perustiedot hakukoneoptimoinnista
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body1"
                align={matchesMD ? "center" : undefined}
                paragraph
                style={{ fontWeight: 700, fontStyle: "italic", }}
              >
                Hakukoneoptimoinnista on hyötyä, jos tarjoamasi tuotteet tai palvelut  haetaan Googlesta ja haluat,
                että Internet-hausta saapuu enemmän juuri ostavia asiakkaita sivullesi. ?? Vierailijat, jotka tulevat
                verkkosivustollesi Internet-haun kautta, ovat painonsa kullan arvoisia, koska he ovat
                kiinnostuneita siitä, mitä sinulla on tarjottavana verkkoympäristössäsi.
              </Typography>
              <Typography
                variant="body1"
                align={matchesMD ? "center" : undefined}
                paragraph
              >
                <span style={{ fontSize: '1.2rem', fontWeight: 600, padding: '1em' }}>SEO-asetukset ovat muutakin kuin vain avainsanoja.</span><br />
                SEO-nimellä tehty työ on kuitenkin jaettu laajalti kahteen osaan:<br /><br />
                1. Sivun sisäinen hakukoneoptimointi tekee sivuista merkityksellisiä, eli kotisivut,
                sähköinen kaupankäynti tai blogi  liittyy oikeisiin avainsanoihin.
                Tämän seurauksena optimoiduen verkkosivustojen sijoitus on haussa korkeampi  ja hakuliikenne kasvaa hieman.
              </Typography>
              <Typography
                variant="body1"
                align={matchesMD ? "center" : undefined}
                paragraph
              >
                2.Sivun ulkopuoliset toiminnot luovat auktoriteetin, eli ennalta optimoiduista sivuista tulee
                hakukoneiden luotettava tietolähde, joka kannattaa näyttää haun etusivulla.
                Luomalla saman tai korkeamman auktoriteetin hakukoneille kuin kilpailijat varmistat,
                että olet listalla ensimmäisten joukossa  ja tähän liittyy vierailujen ja kyselyjen merkittävä kasvu.
              </Typography>
              <Typography
                variant="body1"
                align={matchesMD ? "center" : undefined}
                paragraph
              >
                Avainsanojen lisäksi SEO:n tekniset näkökohdat, SEO-tuloksia tukevan verkkoympäristön suunnittelu,
                sisällön suunnittelu, oikein täytetyt Google- ja sosiaalisen median profiilit sekä maininta-linkit
                oman verkkosi ulkopuolella ovat yhtä tärkeitä.
              </Typography>
              <Typography
                variant="body1"
                align={matchesMD ? "center" : undefined}
                paragraph
              >
                <span style={{ fontSize: '1.2rem', fontWeight: 600, padding: '1em' }}>Mikä on paras aika ajatella SEO:tä?</span>&nbsp;<br />
                Paras aika ajatella hakukoneoptimointia ja erilaisia ​​mainontamahdollisuuksia yleensä on,
                kun luot verkkosivustoa tai verkkokauppaa. Pelkkä tosiasia, että uusi verkkosivusto tai verkkokauppa
                on tänään avoinna yleisölle, ei tuo kävijöitä sinne. On tärkeää miettiä alusta alkaen, miten kävijät
                tavoittavat sinut.Paras hetki ajatella SEO: tä on myös silloin, kun hakukoneet tavoittavat epäilyttävän
                vähän ihmisiä ja verkkosivustoa on parannettava. Joten, jos haluat SEO-apua, ota yhteyttä.
                </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid
        item
        className={classes.rowContainer}
        style={{ marginTop: matchesMD ? "12em" : "14em" }}
      >

      </Grid>
      <Grid
        item
        container
        justify="center"
        className={classes.rowContainer}
        style={{ marginTop: "3em" }}
      >
        <Typography
          variant="h4"
          align="center"
          className={classes.missionStatement}
        >
          Gatsby on kehys nykyaikaisten verkkosivustojen ja sovellusten rakentamiseen.
          Se voi vetää tietoja sivustoosi mistä tahansa
          tai muista tällä hetkellä käyttämistäsi lähteistä.
          Yritykset, jotka ovat siirtäneet sivustonsa Gatsby:n alustalle,
          ovat kokeneet merkittäviä parannuksia liidien hankinnassa,
          Googlen orgaanisen haun liikenteessä ja ...
        </Typography>
      </Grid>
      <Grid item>
        <Grid item container justify="center" lg>
          <img
            src={ArtifySEM}
            alt="Gatsby logo"
            style={{ maxHeight: matchesMD ? 260 : "32em", marginTop: '8em' }}
          />
        </Grid>
      </Grid>

      <Grid
        item
        container
        className={classes.rowContainer}
        style={{ marginTop: "4em", marginBottom: "10em" }}
        direction={matchesMD ? "column" : "row"}
        alignItems={matchesMD ? "center" : undefined}
        justify="space-between"
      >

        <Grid item>
          <Grid
            item
            container
            direction="column"
            lg
            style={{
              maxWidth: "35em",
              marginLeft: matchesMD ? undefined : '7em'
            }} >

            <Grid item>
              <Typography
                align={matchesMD ? "center" : undefined}
                variant="h3"
                gutterBottom
              >
                Perustiedot hakukonemarkkinoinnista
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body1"
                align={matchesMD ? "center" : undefined}
                paragraph
                style={{ fontWeight: 700, fontStyle: "italic", }}
              >
                Gatsby on  React-pohjainen kehys
                nopeiden verkkosivustojen ja sovellusten rakentamiseen.
                Gatsby-sivustoille on rakennettu hämmästyttävä suorituskyky ,
                lisätty tietoturva ja nykyiset parhaat verkkokäytännöt.
              </Typography>
              <Typography
                variant="body1"
                align={matchesMD ? "center" : undefined}
                paragraph
              >
                <span style={{ fontSize: '1.2rem', fontWeight: 600 }}>Parempi liidien luominen ja asiakkaiden sitoutuminen. </span>
                Sivuston nopeudella ja suorituskyvyllä on valtava
                vaikutus myyntiin ja asiakkaiden sitoutumiseen.
              Äskettäinen&nbsp; <span><Link className={classes.link} to="https://blogs.akamai.com/2020/09/metrics-that-matter-continuous-performance-optimization.html">Akamai-tutkimus</Link></span>
              &nbsp;osoitti, että 100 millisekunnin
              viive sivuston latausajassa vahingoitti tulosprosentteja 7%, ja 53%
              mobiilikäyttäjistä jättää sivuja joiden lataaminen kestää yli 3 sekuntia.
              Gatsby-sivustot ovat jatkuvasti 2-3x nopeammat kuin vastaavat sivustot,
              jotka on ralyijysukupolvensakennettu eri työkaluilla, ja sivustojen omistajat
               ovat nähneet liidien määrän kasvavan jopa 60% Gatsbyyn siirtymisen jälkeen.
              </Typography>
              <Typography
                variant="body1"
                align={matchesMD ? "center" : undefined}
                paragraph
              >
                <span style={{ diplay: 'inlineBlock', fontSize: '1.2rem', fontWeight: 600, padding: '3em' }}>Parannettu hakuliikenne. </span>&nbsp;<br />
              Sivuston nopeus on yksi tekijöistä, joita Google käyttää hakusijoitusalgoritmissaan,
              ja hitailla sivuston nopeuksilla voi olla negatiivinen lumipallo vaikutus hakukoneoptimoijaasi.
               Hitaammat sivustot indeksoivat hakukoneet kauemmin, niiden välitön poistumisprosentti ja
               alhaisemmat tulosprosentit vahingoittavat sijoitustasi. Gatsby-sivustoissa on sisäänrakennettu
               web- ja mobiililaitteiden suorituskyvyn optimointi. Gatsby pysty hakemaan tietoja parhaista
               sisällönhallintatyökaluista, parhaista verkkokauppatyökaluista,
               käyttämistäsi tietokannoista ja muusta.
              </Typography>
              <Typography
                variant="body1"
                align={matchesMD ? "center" : undefined}
                paragraph
              >
                <span style={{ fontSize: '1.2rem', fontWeight: 600, padding: '2em' }}>Turvallisuus</span>&nbsp;<br />
                Gatsby on moderni sivustogeneraattori, joka tuottaa staattisia HTML-sivuja rakennuksen aikana.
                Tämä tarkoittaa, että et tarvitse tietokantaa tai sisällönhallintajärjestelmää,
                joka toimii julkisilla palvelimillasi, jotka molemmat ovat yleisiä tietoturvaloukkausten lähteitä.
                Staattinen sisältö on paljon helpompi suojata. Tämä ei missään tapauksessa poista kaikkia
                Gatsby-sivustojen tietoturva-aukkoja, mutta ne vähenevät merkittävästi.
                </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
