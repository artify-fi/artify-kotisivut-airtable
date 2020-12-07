import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Link } from 'gatsby'

import useMediaQuery from "@material-ui/core/useMediaQuery";
import Divider from '@material-ui/core/Divider';
import ArtifyfSEO from "../../assets/images/ArtifySEO.webp";
import ArtifySEM from '../../assets/images/seo_sem/seo&sem_banner.jpg'



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
        style={{ marginTop: matchesMD ? "8em" : matchesSM ? '2em' : "14em" }}
      >

        {/* Yhteinen otsikko SEO JA SEM */}

        <Typography
          align={matchesMD ? "center" : undefined}
          className={classes.h1}
          style={{
            marginLeft: matchesMD ? undefined : '3em',
            maxWidth: matchesMD ? undefined : '70vw',
          }}
          variant="h1"
          className={classes.h1}>

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

            <Grid item style={{ width: '70vw' }}>
              <Typography
                variant="body1"
                align={matchesMD ? "center" : undefined}
                paragraph
                className={classes.text}
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
                className={classes.text}
                paragraph
              >
                <span style={{ fontWeight: 600, padding: '1em' }}>SEO-asetukset ovat
                enemmän kuin vain avainsanoja.</span><br />
                SEO -nimellä tehty työ on jaettu suurinpiirtein kahteen osaan:<br /><br />
                1. Verkkosivun sisäinen hakukoneoptimointi tekee sivuista täsmällisiä,
                eli avainsanat ovat juuri sopivia kotisivulle, sähköiselle kaupankäynnille tai blogille.
                Siispä optimoitujen verkkosivustojen sijoitus on haussa korkeampi ja samalla hakuliikenne kasvaa.
              </Typography>
              <Typography
                variant="body1" className={classes.text}
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
                className={classes.text}
                align={matchesMD ? "center" : undefined}
                paragraph
              >
                Avainsanojen lisäksi, myös SEO:n tekniset seikat, SEO-tuloksia tukevan verkkoympäristön suunnittelu,
                sisällön suunnittelu, edustavat Googlen ja sosiaalisen median profiilit sekä linkit
                oman verkkosi ulkopuolella ovat yhtä tärkeitä.
              </Typography>
              <Typography
                variant="body1"
                className={classes.text}
                align={matchesMD ? "center" : undefined}
                paragraph
              >
                <span style={{ fontWeight: 600, padding: '1em' }}>Mikä on paras aika ajatella SEO:ta?</span>&nbsp;<br />
                Paras aika harkita hakukoneoptimoinnin ja erilaisten mainontamahdollisuuksien käyttöön
                ottoa on yleensä silloin, kun luot verkkosivua tai verkkokauppaa. Ainoastaan  se,
                että uusi verkkosivu tai verkkokauppa on avoinna yleisölle,
                ei tuo sinne kävijöitä. On tärkeää ajatella alusta alkaen, miten mahdolliset asiakkaat voivat tavoittaa sinut. Hyvä hetki ajatella SEO:ta on myös silloin, kun hakukoneet tavoittavat liian vähän ihmisiä tai verkkosivua on kehitettävä. Jos siis tarvitset SEO-apua, ota yhteyttä.
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
            style={{ maxWidth: matchesMD ? '80vw' : matchesSM ? '90vw' : "70vw", marginTop: matchesMD ? '-3em' : '-1em' }}
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
              marginLeft: matchesMD ? undefined : '7em'
            }} >

            <Grid item>
              <Typography
                align={matchesMD ? "center" : undefined}
                variant="h3"
                gutterBottom
              >
                Perustietoja hakukonemarkkinoinnista
              </Typography>
            </Grid>
            <Grid item item style={{ width: '70vw' }}>
              <Typography
                variant="body1"
                className={classes.text}
                align={matchesMD ? "center" : undefined}
                paragraph
                style={{ fontWeight: 700, fontStyle: "italic", }}
              >
                {/* Lyhyesti hakukonemarkkinoinnista  */}
                Hakukonemarkkinointi on yrityksen markkinointia käyttämällä maksullista mainontaa,
                mikä näkyy hakukoneiden tulossivuilla (SERP:issä).
                 Mainostajat tekevät hintatarjouksia avainsanoista, joita Googlen ja Bingin
                 kaltaisten palvelujen käyttäjät voivat syöttää hakukenttään etsiessään tiettyjä tuotteita
                 tai palveluita, mitkä antavat mainostajalle mahdollisuuden näyttää mainostansa yhtenä hakutuloksista.
              </Typography>
              <Typography
                variant="body1"
                className={classes.text}
                align={matchesMD ? "center" : undefined}
                paragraph
              >
                <span style={{ diplay: 'inlineBlock', fontWeight: 600, padding: '2em' }}>Avainsanat: hakukonemarkkinoinnin kantava voima.</span>
               Käyttäjät kirjoittavat hakukoneisiin avainsanoja (osana hakulausekkeita) löytääkseen etsimänsä,joten sen
               ei pitäisi olla yllätys, että avainsanat muodostavat hakukonemarkkinoinnin perustan.
               Ennen kuin voit valita hakukoneiden markkinointikampanjoissa käytettäviä avainsanoja,
               sinun on suoritettava kattava tutkimus osana avainsanojen hallintastrategiaa. Ensinnäkin sinun on
               hyvä tunnistaa yrityksellesi merkilliset avainsanat, joita mahdolliset asiakkaat todennäköisimmin
               käyttävät etsiessään tuotteitasi tai palveluitasi.
              </Typography>
              <Typography
                variant="body1"
                className={classes.text}
                align={matchesMD ? "center" : undefined}
                paragraph
              >
                <span style={{ diplay: 'inlineBlock', fontWeight: 600, padding: '2em' }}>Hakukonemarkkinoinnin mainoshuutokauppa</span>&nbsp;<br />
                Yksi yleisimmistä väärinkäsityksistä hakukonemarkkinoinnissa on, että aina se jolla on suurin mainosbudjetti,
                voittaa. Vaikka suurempi mainontabudjetti voi olla etu, varsinkin kun on kyse erittäin halutuista avainsanoista,
                on se kaukana menestyvien hakukonemarkkinoiden vaatimuksesta. Tämä johtuu siitä, että kaikki mainokset käyvät läpi
                mainoshuutokaupan ennen hakutuloksiin ilmestymistä. Tarkoitan tällä erityisesti Google AdWordsin mainoshuutokauppaa.
              </Typography>
              <Typography
                variant="body1"
                className={classes.text}
                align={matchesMD ? "center" : undefined}
                paragraph
              >
                <span style={{ diplay: 'inlineBlock', fontWeight: 600, padding: '2em' }}>Miten mainoshuutokauppa toimii?</span>&nbsp;<br />
                Mainoshuutokauppaprosessi tapahtuu joka kerta, kun joku hakee jotain hakulauseketta esimerkiksi Googlessa.
                Ilmoittautuakseen mainoshuutokauppaan, mainostajat tarjoavat haluamistaan avainsanoista budjetin
                (napsautusta kohden) keraa, jotta heidän mainostaan näytettäisiin kyseisten avainsanojen hakutuloksina.
                Kun Google on tarkistanut, että tarjoamasi avainsanat sisältyvät käyttäjän hakulausekkeesssa,
                mainoksesi osallistuu mainoshuutokauppaan.
                </Typography>
              <Typography
                variant="body1"
                className={classes.text}
                align={matchesMD ? "center" : undefined}
                paragraph
              >
                <span style={{ diplay: 'inlineBlock', fontWeight: 600, padding: '2em' }}>Miten mainokset voittavat mainoshuutokaupan</span>&nbsp;<br />
                Jokaista yksittäistä mainosta ei näytetä kaikissa hauissa. Tämä johtuu siitä,
                että mainoshuutokaupassa otetaan huomioon useat tekijät mainoksia sijoitellessa SERP:ille
                (hakukoneen tulossivulle) sekä siksi, koska kaikilla avainsanoilla ei ole riittävää kaupallista
                tarkoitusta mainosten näyttämistä varten. Kaksi tärkeintä tekijää, joita Google arvioi osana
                mainoshuutokauppaprosessia, ovat korkein hintatarjouksesi sekä mainostesi laatupisteet. Korkein tarjous
                on suurin määrittämäsi hinta yhdestä klikkauksesta. Laatupisteet taas toimivat mittarina mainoksesi
                yleisestä laadusta. Näiden tietojen perusteella Google päättää mainoshuutokaupan sijoitukset.
                </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
