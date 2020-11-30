import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Link } from 'gatsby'
import useMediaQuery from "@material-ui/core/useMediaQuery";
import gatsbyLogo from "../../assets/images/Gatsby_Logo.webp";
import { Underline } from "@styled-icons/fa-solid";
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
         GatsbyJS kotisivut ja mobiilisovellukset. Sivuston helppoudella ja suorituskyvyllä 
         on valtava vaikutus myyntiin ja asiakkaiden sitoutumiseen. 
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
          Gatsby on kehys nykyaikaisten verkkosivujen ja sovellusten rakentamiseen.
          Se voi siirtää tietoja sivustolle mistä tahansa
           <Link
            // style={{ marginTop: '2em' }}
            href="/ratkaisut/headlessCMS"
            className={classes.link}
            onClick={preventDefault}>&nbsp;sisällönhallintajärjestelmästä&nbsp;</Link>
           tai muista tällä hetkellä käyttämistäsi lähteistä. Yritykset  jotka ovat siirtäneet 
           sivustonsa Gatsby:n alustalle, ovat kokeneet merkittävää nousua liideissä, 
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
              Skannaa QR-koodi tai napsauta kuvaa ja koe itse poikkeuksellisen hyvä suorituskysy 
              useammasta laadukkaasta valokuvasta huolimatta. Gatsby:n käyttäminen kotisivujen 
              kehittämisessä on loistava tapa lisätä sivustojen tehokkuutta, skaalautuvuutta ja 
              turvallisuutta. Älä tilaa verkkosivua joka käyttää edellisen vuosikymmenen tekniikkaa. 
              Gatsby:n avulla rakennetaan mahdollisimman tehokas verkkosivusto. 
              
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
              Perustietoa GatsbyJS:stä
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body1"
                align={matchesMD ? "center" : undefined}
                paragraph
                style={{ fontWeight: 700, fontStyle: "italic", }}
              >Gatsby on React-pohjainen kehys tehokkaiden verkkosivujen ja sovellusten rakentamiseen. 
              Gatsby-sivustoilla on hämmästyttävä suorituskyky, tavallista parempi tietoturva 
              ja parhaat verkkokäytännöt.
              </Typography>
              <Typography
                variant="body1"
                align={matchesMD ? "center" : undefined}
                paragraph
              >
                <span style={{ fontSize: '1.2rem', fontWeight: 600, marginLeft: '1em' }}>Tehokkaampi liidien luominen ja asiakkaiden sitoutuminen. </span>
                Sivuston tehokkuudella ja suorituskyvyllä on valtava vaikutus myyntiin ja asiakkaiden sitoutumiseen. 
                Äskettäinen&nbsp; <span><Link className={classes.link} to="https://blogs.akamai.com/2020/09/metrics-that-matter-continuous-performance-optimization.html">Akamai-tutkimus</Link></span>
              &nbsp;
              osoitti, että 100 millisekunnin viive sivuston latausajassa laskee tulosprosentteja jopa seitsemällä prosentilla 
              ja jopa 53% mobiilikäyttäjistä luovuttaa sivujen suhteen joilla kestää lataamisessa  yli 3 sekunttia. 
              Gatsby -sivustot ovat 2-3 kertaa nopeampia kuin eri työkaluilla rakennetut sivustot. 
              Sivustojen omistajat ovat huomanneet myös liidien määrän kasvaneen jopa 60% Gatsbyyn vaihtamisen jälkeen.
              </Typography>
              <Typography
                variant="body1"
                align={matchesMD ? "center" : undefined}
                paragraph >             
                <span style={{ fontSize: '1.2rem', fontWeight: 600, marginLeft: '1em' }}>Parannettu hakuliikenne. </span>&nbsp;<br />
                Sivuston tehokkuus on yksi vaikuttavimmista tekijöistä Googlen hakusijoitusalgoritmissa. 
                Hitaalla sivustolla voi olla negatiivinen lumipallovaikutus hakukoneoptimointiin. 
                Google siis indeksoi hitaita sivustoja kauemmin, eli niiden välitön poistumisprosentti on suurempi 
                ja alhaisemmat tulosprosentit laskevat sijoitustasi. Gatsby -sivustoissa on automaattinen suorituskyvyn optimointi. 
                Gatsby hakee  parhailla sisällönhallinta- ja verkkokauppatyökaluilla tietoja käyttämistäsi sekä muista tietokannoista.
              </Typography>
              <Typography
                variant="body1"
                align={matchesMD ? "center" : undefined}
                paragraph
              >
                <span style={{ fontSize: '1.2rem', fontWeight: 600, marginLeft: '1em' }}>Turvallisuus</span>&nbsp;<br />
                Gatsby on staattisia HTML-sivuja tuottava sivustogeneraattori. Tämä tarkoittaa sitä, että et tarvitse 
                julkisilla palvelimilla toimivaa tietokantaa tai sisällönhallintajärjestelmää, 
                joissa on useimmiten uhka tietoturvaloukkaukseen. Staattista sisältöä on paljon helpompi suojata. 
                Tämä ei kuitenkaan poista kaikkia Gatsby -sivustojen tietoturva-aukkoja, mutta vähentää niitä merkittävästi.              
                </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
