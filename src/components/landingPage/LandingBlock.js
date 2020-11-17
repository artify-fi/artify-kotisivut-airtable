import React from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import ButtonArrow from '../original'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import useMediaQuery from '@material-ui/core/useMediaQuery'

import infoBackground from '../../assets/images/abstract_background_small.webp'
import cardImage from '../../assets/images/multi_screens.jpg'



const useStyles = makeStyles(theme => ({
  mainContainer: {
    marginTop: '6em',
    [theme.breakpoints.down('md')]: {
      marginTop: '6em'
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: '4em',
    },
  },
  rowContainer: {
    paddingLeft: '4em',
    paddingRight: '4em',
    [theme.breakpoints.down('md')]: {
      paddingLeft: '2em',
      paddingRight: '2em',
    },
    [theme.breakpoints.down('sm')]: {
      paddingLeft: '1em',
      paddingRight: '1em',
    }
  },
  learnButtonHero: {
    ...theme.typography.learnButton,
    fontSize: '1rem',
    fontWeight: 400,
    height: 45,
    width: 160,
    '&:hover': {
      backgroundColor: theme.palette.common.grey1,
    }
  },
  infoBackground: {
    backgroundImage: `url(${infoBackground})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    position: 'sticky',
    width: '100%',
    // larger than 1920
    [theme.breakpoints.down('xl')]: {
      height: '200vh',
    },
    // 1280  and  up to 1920
    [theme.breakpoints.down('lg')]: {
      height: '190vh',
    },

    // 960 and up to 1280
    [theme.breakpoints.down('md')]: {
      height: '180vh'
    },
  },

  cardContainer: {
    // larger than 1920
    [theme.breakpoints.down('xl')]: {
      width: '52vw',
      height: '164vh',
      marginLeft: '6vw'
    },

    // 1280  and  up to 1920
    [theme.breakpoints.down('lg')]: {
      width: '58em',
      height: '166vh',
      marginLeft: '3vw'
    },

    // 960 and up to 1280
    [theme.breakpoints.down('md')]: {
      width: '50em',
      height: '156vh'
    },

    // 600 up to 960
    [theme.breakpoints.down('sm')]: {

      width: '40em',
      height: '142vh',
    },

    // 0 upt to 600
    [theme.breakpoints.down('xs')]: {
      width: '90vw',
      height: '150vh',
    },
  },


  media: {
    // larger than 1920
    [theme.breakpoints.down('xl')]: {
      height: '56vh',
    },

    // 1280  and  up to 1920
    [theme.breakpoints.down('lg')]: {
      height: '64vh',
    },

    // 960 and up to 1280
    [theme.breakpoints.down('md')]: {
      height: '46vh'
    },

    // 600 up to 960
    [theme.breakpoints.down('sm')]: {
      height: '42vh',
    },

    // 0 upt to 600
    [theme.breakpoints.down('xs')]: {
      height: '28vh',
    },
  },
  cardText: {
    paddingLeft: '2em',
    paddingRight: '2em',
    paddingTop: '1em',
    fontFamily: 'Roboto',
    fontWeight: 400,
    color: '#443f3f'
  },
  cardHeading: {
    fontFamily: 'Roboto',
    fontWeight: '500',
    marginTop: '1.2em',
    paddingLeft: '2em',
    paddingRight: '2em',
    [theme.breakpoints.down('sm')]: {
      marginTop: '2.6em',
    },
  },
  cardTextHeding: {
    fontFamily: 'Roboto',
    [theme.breakpoints.down('xl')]: {
      fontSize: '2.2rem',
    },

    // 1280  and  up to 1920
    [theme.breakpoints.down('lg')]: {
      fontSize: '1.6rem',
      paddingLeft: '3em',
      paddingRight: '3em'
    },

    // 960 and up to 1280
    [theme.breakpoints.down('md')]: {
      fontSize: '1.4rem',
      paddingLeft: '2em',
      paddingRight: '2em'
    },

    // 600 up to 960
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.4rem',
      paddingLeft: '2em',
      paddingRight: '2em'
    },

    // 0 upt to 600
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.4rem',
      paddingLeft: '1.6em',
      paddingRight: '1.6em'
    },
  }
}))

const LandingBlock = () => {
  const classes = useStyles()
  const theme = useTheme()
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'))
  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'))
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'))

  return (
    // Container for entire page

    <Grid container
      direction='column'
      className={classes.infoBackground}>



      <Grid item
        container
        direction={matchesMD ? "column" : "row"}
        alignItems="center"
        style={{ marginTop: "12em", }}>

        <Grid item md>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardContent>
                <Typography
                  gutterBottom
                  variant={matchesSM ? "h4" : 'h1'}
                  component="h1"
                  align='center'
                  className={classes.cardHeading}>
                  Nykyaikaiset  progressiiviset* kotisivut ja  mobiilisovellukset
                  pienyrittäjille mikä tukevat uusien asiakkaiden tavoittamista.
                </Typography>
              </CardContent>
              <CardMedia
                className={classes.media}
                image={cardImage}
                title="Responsive devices"
              />
              <CardContent>
                <Typography gutterBottom variant="h1" component="h2">

                </Typography>
                <Typography
                  variant={matchesSM ? "h5" : 'h2'}
                  component="h2"
                  align='center'
                  className={classes.cardTextHeding}>
                  Teknisesti laadukaat ja mobiili- sekä hakukoneoptimoidut Gatsby.js kehitystyökalulla rakennettu
                  kotisivut parantaa näkyvyyttä  ja lisää huomattavasti kävijöiden määrää.
                </Typography>

                <Typography className={classes.cardText}>
                  # Uusien asiakkuuksien löytämisessä, rekrytoinneissa tai brändin vahvistamisessa kotisivut
                  ovat avainasemassa. Kävijät etsivät sivustolta muutakin kuin yhteystietoja.
                </Typography>
                {/* <Typography variant="body1" component="p" className={classes.cardText}>
                  # Laadukkaat kotisivut kertovat yrityksestä sekä yrityksen palveluista tai
                  tuotteista ja tämän avulla luodaan vierailijalle usein ensimmäinen mielikuva yrityksestä.
                </Typography> */}
                <Typography variant="body1" component="p" className={classes.cardText}>
                  # Verkkosivut ovat yrityksen digitaalisen sisällön koti, josta voidaan jaella
                  sisältöä kaikkiin niihin kanaviin, joissa yritys haluaa olla läsnä.
                </Typography>
                <Typography variant="body1" component="p" className={classes.cardText}>
                  # Asiakkaamme tehtävänä on kertoa meille tavoitteistaan,
                  kommentoida työmme tuloksia projektin eri vaiheissa sekä tuottaa
                  tarkoituksenmukaista sisältöä tai antaa meille riittävät suuntaviivat sisällöntuotantoa varten.
                </Typography>
                <Typography variant="body1" component="p" className={classes.cardText}>
                  # Miellyttävä käyttökokemus syntyy siitä, että kävijä löytää etsimänsä ja pääsee tekemään ne asiat,
                  joita hän tuli tekemään.
                </Typography>
                <Typography variant="body1" component="p" className={classes.cardText}>
                  # Korkea konversio rakennetaan huolellisella suunnittelulla,
                  perusteellisella testaamisella ja jatkuvalla parantamisella.
                </Typography>
                <Typography variant="body1" component="p" className={classes.cardText}>
                  * Progressiivinen verkkosovellus (englanniksi Progressive Web Application eli PWA) on mobiilin sekä pöytäkonen verkkoselaimessa
                  toimiva verkkosivu tai sovellus, joka pyrkii yhdistelemään natiivin mobiilisovelluksen ja responsiivisen verkkosivun parhaat puolet.
                </Typography>
                <Button
                  variant='outlined'
                  className={classes.learnButtonHero}
                >
                  <span style={{ marginRight: 10 }}>Learn More</span>
                  <ButtonArrow
                    width={15}
                    height={15}
                    fill={theme.palette.common.Grey4}
                  />
                </Button>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        {/* Empty container at the right */}
        <Grid item md
          style={{
            maxWidth: matchesSM ? 300 : '48vw',
            paddingTop: matchesSM ? '4em' : '10em'
          }}>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default LandingBlock
