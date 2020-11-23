import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Link } from 'gatsby'
//import Avatar from "@material-ui/core/Avatar";
import useMediaQuery from "@material-ui/core/useMediaQuery";
//import Hidden from "@material-ui/core/Hidden";
import gatsbyLogo from "../../assets/images/Gatsby_Logo.webp";
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
    lineHeight: 1.4
  },
  rowContainer: {
    paddingLeft: "10vw",
    paddingRight: "10vw",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "1.5em",
      paddingRight: "1.5em"
    }
  },
  background: {
    backgroundColor: '#f2f7f5',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100%',
    width: '100%',
    marginTop: '2em'
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
    <Grid container direction="column" className={classes.background}>
      <Grid
        item
        className={classes.rowContainer}
        style={{ marginTop: matchesMD ? "12em" : "14em" }}
      >
        <Typography align={matchesMD ? "center" : undefined}
          style={{
            marginLeft: matchesMD ? undefined : '3em',
            maxWidth: matchesMD ? undefined : '70vw'

          }}
          variant="h1">
          Gatsby JS kotisivut ja mobiilisovellukset. Sivuston nopeudella ja
          suorituskyvyllä on valtava vaikutus asiakkaiden sitoutumiseen ja myyntiin.
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
          variant="h4"
          align="center"
          className={classes.missionStatement}
        >
          Gatsby on kehys nykyaikaisten verkkosivustojen ja sovellusten rakentamiseen.
          Se voi vetää tietoja sivustoosi mistä tahansa
           <Link
            // style={{ marginTop: '2em' }}
            href="/ratkaisut/headlessCMS"
            className={classes.link}
            onClick={preventDefault}>&nbsp;sisällönhallintajärjestelmästä&nbsp;</Link>
           tai muista tällä hetkellä käyttämistäsi lähteistä.
          Yritykset, jotka ovat siirtäneet sivustonsa Gatsby:n alustalle,
          ovat kokeneet merkittäviä parannuksia liidien hankinnassa,
          Googlen orgaanisen haun liikenteessä ja turvallisuudessa.
        </Typography>
      </Grid>
      <Grid item>
        <Grid item container justify="center" lg>
          <img
            src={gatsbyLogo}
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
          <Grid item container justify="center" lg>
          <Card
            style={{ marginBottom: matchesMD ? '2em' : undefined }}
            className={classes.revolutionCard}>
            <CardContent >
              <Grid container>
                <Grid
                  item
                  container
                  xs
                  justify='center'
                  alignItems='center'>

                  <Grid item>
                    <img
                      alt='qr logo'
                      src={QR}
                      style={{ width: matchesSM ? '8em' : '10em',
                    marginTop: '0.6em' }}
                    />
                  </Grid>

                  <Link to={'https://www.artbachmann.eu/'}>
                    <Grid item >
                      <img
                        className={classes.transform}
                        alt='headless wordpress front page'
                        src={CafeteriaGatsbyFrontpage}
                        style={{ width: matchesSM ? '8em' : '10em' }}
                      />
                    </Grid>
                  </Link>
                </Grid>
              </Grid>
            </CardContent>
            <CardContent>
            <Grid
              item              
              justify="center"         
              style={{ marginTop: "1em" }}
            >
            <Typography
              variant='body1'
              align="center"   
              style={{ width: matchesSM ? '16em' : '20em' }}      
            >
              Skannaa QR-koodi tai napsuttaa kuvalla ja tutustuu  poikkeukselliseen 
              hyvään suorituskykyyn  vaikka sivustolla
              on paljon laadukkaita valokuvia.
              Gatsbyn käyttäminen kotisivujen kehittämisessä  on loistava 
              tapa lisätä nykyaikaista tehokkuutta,
              skaalautuvuutta, turvallisuutta ja kehityksen nopeuden etuja.
              Älä tilaa verkkosivustoa, jolla on edellisen vuosikymmenen tekniikkaa.
              Gatsby.js rakentaa nopeimman mahdollisen verkkosivuston. 
              
            </Typography>
      </Grid>
            </CardContent>
          </Card>
          </Grid>
        </Grid>
        <Grid item>
          <Grid
            item
            container
            direction="column"
            lg
            style={{
              maxWidth: "35em",
              // marginLeft: matchesMD ? undefined : '7em'
            }} >

            <Grid item>
              <Typography
                align={matchesMD ? "center" : undefined}
                variant="h3"
                gutterBottom
              >
                Perustiedot GatsbyJS:stä
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
                <span style={{ fontSize: '1.2rem', fontWeight: 600, marginLeft: '1em' }}>Parempi liidien luominen ja asiakkaiden sitoutuminen. </span>
                Sivuston nopeudella ja suorituskyvyllä on valtava
                vaikutus myyntiin ja asiakkaiden sitoutumiseen.
              Äskettäinen&nbsp; <span><Link className={classes.link} to="https://blogs.akamai.com/2020/09/metrics-that-matter-continuous-performance-optimization.html">Akamai-tutkimus</Link></span>
              &nbsp;osoitti, että 100 millisekunnin
              viive sivuston latausajassa vahingoitti tulosprosentteja 7%, ja 53%
              mobiilikäyttäjistä jättää sivuja joiden lataaminen kestää yli 3 sekuntia.
              Gatsby-sivustot ovat jatkuvasti 2-3x nopeammat kuin vastaavat sivustot,
              jotka on rakennettu eri työkaluilla ja sivustojen omistajat
              ovat huomannut liidien määrän kasvavan jopa 60% Gatsbyyn siirtymisen jälkeen.
              </Typography>
              <Typography
                variant="body1"
                align={matchesMD ? "center" : undefined}
                paragraph
              >
                <span style={{ fontSize: '1.2rem', fontWeight: 600, marginLeft: '1em' }}>Parannettu hakuliikenne. </span>&nbsp;<br />
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
                <span style={{ fontSize: '1.2rem', fontWeight: 600, marginLeft: '1em' }}>Turvallisuus</span>&nbsp;<br />
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
