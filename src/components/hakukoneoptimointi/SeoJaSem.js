import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Link } from 'gatsby'

import useMediaQuery from "@material-ui/core/useMediaQuery";
import Divider from '@material-ui/core/Divider';
import ArtifyfSEO from "../../assets/images/ArtifySEO.webp";
import ArtifySEM from '../../assets/images/seo_sem/seo&sem_banner.jpg'
import { Underline } from "@styled-icons/fa-solid";


const useStyles = makeStyles(theme => ({
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
  },
  divider: {
    color: 'red',
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
          Miten saada näkyvyyttä hakukoneissa? Onko yritykselläsi toimiva verkkosivu jolle
          haluat enemmän liikennettä, hintakyselyä, myyntiä tai tuotemerkkitietoisuutta mutta
          et tiedä miten sen saavuttaisit tai miten hakukoneoptimointi ja hakukonemarkkinointi
          auttaisivat sivustosi havaittavuudessa?
        </Typography>
      </Grid>
      <Divider className={classes.divider} />



      <Grid
        item
        container
        justify={matchesMD ? "center" : undefined}
        className={classes.rowContainer}
        style={{ marginTop: "3em" }}
      >
        <Grid item md>
          <Typography

            variant="h2"
            align="center"
            className={classes.missionStatement}
          >
            {/* hakukoneoptimointi */}

          Sana hakukoneoptimointi tulee englanninkielisestä termistä <span style={{ fontWeight: 600 }}>search engine optimization</span>
          &nbsp;eli lyhennettynä&nbsp;<span style={{ fontWeight: 600 }}>SEO</span>.
          Hakukoneoptimointi on sitä, että verkkosivusta tai verkkokaupasta tehdään hakukoneille
          mahdollisimman ymmärrettävä sopivilla avainsanoilla ja sivuilla avulla. Näin hakukoneet
          kuten Google ymmärtävät paremmin sivustolla olevaa tietoa ja varmistavat sen, että se
          näkyy hakijoille. Hakukoneiden päämääränä on antaa hakijalle sopivimmat ja vastauksen sisältävät sivustot haun tuloksena.
        </Typography>
        </Grid>

        <Grid item md>
          <Grid item container justify="center">
            <img
              src={ArtifyfSEO}
              alt="Gatsby logo"
              style={{ maxHeight: matchesMD ? 260 : "28em", marginTop: matchesMD ? '2em' : '4em' }}
            />
          </Grid>
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
                Perustietoa hakukoneoptimoinnista.
              </Typography>
            </Grid>

            <Grid item style={{ width: '60vw' }}>
              <Typography
                variant="body1"
                align={matchesMD ? "center" : undefined}
                paragraph
                style={{ fontWeight: 700, fontStyle: "italic", }}
              >
                Hakukoneoptimoinnista on silloin hyötyä, jos tarjoamiasi tuotteita tai palveluja haetaan
                esimerkiksi Googlesta ja haluat, että Internet-hausta saapuu enemmän ostavia asiakkaita
                juuri sinun sivustolle. Internet-haun kautta verkkosivullesi saapuvat vierailijat ovat arvokkaita kuten kulta,
                sillä he ovat kiinnostuneita siitä, mitä sinulla on tarjottavana verkkoympäristössäsi.
              </Typography>
              <Typography
                variant="body1"
                align={matchesMD ? "center" : undefined}
                paragraph
              >
                <span style={{ fontSize: '1.2rem', fontWeight: 600, padding: '1em' }}>SEO-asetukset ovat
                enemmän kuin vain avainsanoja.</span><br />
                SEO -nimellä tehty työ on jaettu suurinpiirtein kahteen osaan:<br /><br />
                1. Verkkosivun sisäinen hakukoneoptimointi tekee sivuista täsmällisiä,
                eli avainsanat ovat juuri sopivia kotisivulle, sähköiselle kaupankäynnille tai blogille.
                Siispä optimoitujen verkkosivustojen sijoitus on haussa korkeampi ja samalla hakuliikenne kasvaa.
              </Typography>
              <Typography
                variant="body1"
                align={matchesMD ? "center" : undefined}
                paragraph
              >
                2. Sivuston ulkopuoliset toiminnot luovat auktoriteetin, eli ennalta optimoidut sivustot toimivat
                hakukoneiden luotettavimpina tietolähteinä, jotka sitten näkyvät muita sivustoja todennäköisemmin
                haun etusivulla. Luomalla hakukoneille yhtä korkean tai korkeamman auktoriteetin kuin kilpailijoilla,
                varmistat olevasi listan ensimmäisten joukossa, mikä vaikuttaa positiivisesti sivustosi vierailujen
                ja kyselyiden määrään.
              </Typography>
              <Typography
                variant="body1"
                align={matchesMD ? "center" : undefined}
                paragraph
              >
                Avainsanojen lisäksi SEO:n tekniset näkökohdat, SEO-tuloksia tukevan verkkoympäristön suunnittelu,
                sisällön suunnittelu, oikein täytetyt Google- ja sosiaalisen median profiilit sekä linkit
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

      {/* SEM block starts from here */}
      <Grid item>
        <Grid item container justify="center" >
          <img
            src={ArtifySEM}
            alt="Gatsby logo"
            style={{ maxHeight: matchesMD ? 200 : "20em", marginTop: '-6em', width: '70vw' }}
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
            <Grid item item style={{ width: '60vw' }}>
              <Typography
                variant="body1"
                align={matchesMD ? "center" : undefined}
                paragraph
                style={{ fontWeight: 700, fontStyle: "italic", }}
              >
                {/* Lyhyesti hakukonemarkkinoinnista  */}
                Hakukonemarkkinointi on käytäntö markkinoida yritystä käyttämällä maksettuja
                mainoksia, jotka näkyvät hakukoneiden tulossivuilla (SERP:issä).
                Mainostajat tekevät hintatarjouksia avainsanoista, jotka Googlen ja Bingin
                kaltaisten palvelujen käyttäjät voivat syöttää etsittäessään tiettyjä tuotteita
                tai palveluita, mikä antaa mainostajalle mahdollisuuden näyttää mainoksensa näiden
                hakutulosten rinnalla.
              </Typography>
              <Typography
                variant="body1"
                align={matchesMD ? "center" : undefined}
                paragraph
              >
                <span style={{ fontSize: '1.2rem', fontWeight: 600 }}>Avainsanat: hakukoneen markkinoinnin kantava voima.</span>
               Kun käyttäjät kirjoittavat hakukoneisiin avainsanoja (osana hakulausekkeita) löytääkseen etsimänsä,
               ei pitäisi olla yllätys, että avainsanat muodostavat hakukoneiden markkinoinnin perustan mainontastrategiana.
               Ennen kuin voit valita hakukoneiden markkinointikampanjoissa käytettäviä avainsanoja,
               sinun on suoritettava kattava tutkimus osana avainsanojen hallintastrategiaa.Ensinnäkin sinun on
               tunnistettava avainsanat, jotka ovat merkityksellisiä yrityksellesi ja joita mahdolliset asiakkaat
               todennäköisesti käyttävät etsiessään tuotteitasi ja palveluitasi.
              </Typography>
              <Typography
                variant="body1"
                align={matchesMD ? "center" : undefined}
                paragraph
              >
                <span style={{ diplay: 'inlineBlock', fontSize: '1.2rem', fontWeight: 600, padding: '3em' }}>Hakukonemarkkinoinnin mainoshuutokauppa.</span>&nbsp;<br />
                Yksi kestävimmistä väärinkäsityksistä hakukonemarkkinoinnissa on, että voittaa se,
                jolla on suurin mainosbudjetti. Vaikka suurempi mainontabudjetti voi olla varmasti edullista,
                varsinkin kun kohdistetaan erittäin kilpailukykyisiin avainsanoihin, mutta se on kaukana
                vaatimuksesta menestyä hakukoneiden markkinoinnissa. Tämä johtuu siitä, että kaikki mainokset käyvät
                läpi mainoshuutokaupan, ennen kuin ne näkyvät hakutulosten vieressä. Tässä selityksessä keskityn Google AdWordsin
                mainoshuutokauppaan.
              </Typography>
              <Typography
                variant="body1"
                align={matchesMD ? "center" : undefined}
                paragraph
              >
                <span style={{ fontSize: '1.2rem', fontWeight: 600, padding: '2em' }}>Millä lailla mainoshuutokauppa toimii</span>&nbsp;<br />
                Mainoshuutokauppaprosessi tapahtuu joka kerta, kun joku kirjoittaa hakulausekkeen Googleen.
                Ilmoittaakseen mainoshuutokauppaan mainostajat tunnistavat avainsanat, joilta he haluavat tehdä tarjouksen,
                ja ilmoittavat, kuinka paljon he ovat halukkaita kuluttamaan (napsautusta kohden) mainostensa näyttämiseksi
                kyseisiin avainsanoihin liittyvien tulosten rinnalla. Jos Google katsoo, että tarjoamasi avainsanat sisältyvät
                käyttäjän hakulausekkeesssa, mainoksesi osallistuvat mainoshuutokauppaan.
                </Typography>
              <Typography
                variant="body1"
                align={matchesMD ? "center" : undefined}
                paragraph
              >
                <span style={{ fontSize: '1.2rem', fontWeight: 600, padding: '2em' }}>Miten mainokset voittavat mainoshuutokaupan</span>&nbsp;<br />
                Jokaisia yksittäisiä mainoksia ei näytetä kaikissa hakuissa. Tämä johtuu siitä,
                että mainoshuutokaupassa otetaan huomioon useat tekijät määritettäessä mainosten sijoittelua
                SERP:lle(hakukoneen tulossivulle), ja koska kaikilla avainsanoilla ei ole riittävää kaupallista
                tarkoitusta perustella mainosten näyttämistä tulosten vieressä. Kaksi tärkeintä tekijää,
                jotka Google arvioi osana mainoshuutokauppaprosessia, ovat korkein hintatarjouksesi ja mainostesi laatupisteet.
                Korkein tarjous on suurin määrittämäsi summa, jonka olet valmis maksamaan napsautuksesta.
                Laatupisteet ovat mittari, joka perustuu mainoksesi yleiseen laatuun.
                Google laskee nämä tiedot mainoshuutokaupan aikana mainosten sijoittelun määrittämiseksi. Tämän laskelman tulos
                tunnetaan mainoksen sijoituksena.
                </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
