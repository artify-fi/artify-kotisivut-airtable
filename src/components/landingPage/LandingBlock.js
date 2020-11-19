import React from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles'

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import Button from '@material-ui/core/Button';
import ButtonArrow from '../original'

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import OpenInBrowserIcon from '@material-ui/icons/OpenInBrowser';
import WebIcon from '@material-ui/icons/Web';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import useMediaQuery from '@material-ui/core/useMediaQuery'

import infoBackground from '../../assets/images/abstract_background_small.webp'
import cardImage from '../../assets/images/multiple_screens_optimized.webp'
import { OpenInBrowser } from '@material-ui/icons';



const useStyles = makeStyles(theme => ({
  ListItemText1: {
    width: '100%',
    backgroundColor: 'white',
    marginBottom: '2em'
  },
  ListItemText2: {
    width: '100%',
    backgroundColor: 'white',
    marginBottom: '2em'
  },
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
    fontWeight: 500,
    height: 45,
    width: 160,
    marginTop: '2em',
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
    // larger than 1920
    [theme.breakpoints.down('xl')]: {
      height: '220vh',
    },
    // 1280  and  up to 1920
    [theme.breakpoints.down('lg')]: {
      height: '210vh',
    },

    // 960 and up to 1280
    [theme.breakpoints.down('md')]: {
      height: '198vh'
    },

    // 600 up to 960
    [theme.breakpoints.down('sm')]: {
      height: '190vh',
    },

    // 0 upt to 600
    [theme.breakpoints.down('xs')]: {
      height: '220vh',
    },
  },


  cardContainer: {
    // larger than 1920
    [theme.breakpoints.down('xl')]: {
      width: '52vw',
      height: '164vh',
      marginLeft: '2em',
    },

    // 1280  and  up to 1920
    [theme.breakpoints.down('lg')]: {
      width: '58em',
      height: '186vh',
      marginLeft: '2em',
    },

    // 960 and up to 1280
    [theme.breakpoints.down('md')]: {
      width: '50em',
      height: '172vh',
      marginLeft: '2em',
    },

    // 600 up to 960
    [theme.breakpoints.down('sm')]: {

      width: '40em',
      height: '166vh',
    },

    // 0 upt to 600
    [theme.breakpoints.down('xs')]: {
      width: '90vw',
      height: '192vh',
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

    // larger than 1920
    [theme.breakpoints.down('xl')]: {
      marginTop: '2.6em',
      fontSize: '1.8rem',
      fontWeight: '500',
      marginTop: '1.6em',
      marginBottom: '-2em',
      paddingLeft: '3em',
      paddingRight: '3em',
    },

    // 1280  and  up to 1920
    [theme.breakpoints.down('lg')]: {
      marginTop: '2.6em',
      fontSize: '1.8rem',
      fontWeight: '500',
      marginTop: '1.6em',
      marginBottom: '-2em',
      paddingLeft: '3em',
      paddingRight: '3em',
    },

    // 960 and up to 1280
    [theme.breakpoints.down('md')]: {
      marginTop: '2.6em',
      fontSize: '1.8rem',
      fontWeight: '500',
      marginTop: '1.6em',
      marginBottom: '-2em',
      paddingLeft: '3em',
      paddingRight: '3em',
    },

    // 600 up to 960
    fontFamily: 'Roboto',
    fontWeight: '500',
    [theme.breakpoints.down('sm')]: {
      marginTop: '2.4em',
      fontSize: '1.2rem',
      marginBottom: '-2em',
      paddingLeft: '0.8em',
      paddingRight: '0.8em',
    },

    // 0 upt to 600
    fontFamily: 'Roboto',
    fontWeight: '500',
    [theme.breakpoints.down('xs')]: {
      marginTop: '2.2em',
      fontSize: '1.2rem',
      marginBottom: '-2em',
      paddingLeft: '0.8em',
      paddingRight: '0.8em',
    },

  },

  cardTextHeading: {

    // larger than 1920
    [theme.breakpoints.down('xl')]: {
      fontSize: '1.8rem',
      fontFamily: 'Roboto',
      marginBottom: '2em',
    },

    // 1280  and  up to 1920
    [theme.breakpoints.down('lg')]: {
      fontSize: '1.5rem',
      marginTop: '2em',
      paddingLeft: '3em',
      paddingRight: '3em'
    },


    // 960 and up to 1280
    [theme.breakpoints.down('md')]: {
      fontSize: '1.3rem',
      paddingLeft: '2em',
      paddingRight: '2em'
    },

    // 600 up to 960
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.1rem',
      paddingLeft: '2em',
      paddingRight: '2em'
    },

    // 0 upt to 600
    [theme.breakpoints.down('xs')]: {
      fontSize: '1rem',
      paddingLeft: '1.6em',
      paddingRight: '1.6em'
    },
  },


  Avatar: {
    backgroundColor: '#d4f1f4',
    height: '55px',
    width: '55px'
  },
  ImageIcon: {
    color: '#213b4f',
    height: '45px',
    width: '45px'
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
            <CardActionArea style={{ cursor: 'default' }}>
              <CardContent>
                <Typography
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
                <Typography
                  align='center'
                  className={classes.cardTextHeading}>
                  Teknisesti laadukaat ja mobiili- sekä hakukoneoptimoidut Gatsby.js kehitystyökalulla rakennettu
                  kotisivut parantaa näkyvyyttä  ja lisää huomattavasti kävijöiden määrää.
                </Typography>

                <List>
                  <ListItem className={classes.ListItemText1}>

                    <ListItemAvatar sm>
                      <Avatar className={classes.Avatar}>
                        <GroupAddIcon className={classes.ImageIcon} />
                      </Avatar>
                    </ListItemAvatar>

                    <ListItemText sm>
                      <Typography className={classes.cardText}>
                        #Ensiluokkainen konversio (asetettu tavoite tai päämäärä) saavutetaan perusteellisella suunnittelulla,
                        kaikenkattavalla testaamisella ja jatkuvalla parantamisella.
                      </Typography>
                    </ListItemText>

                  </ListItem>

                  <Divider variant="inset" component="li" />

                  <ListItem className={classes.ListItemText2}>
                    <ListItemAvatar>
                      <Avatar className={classes.Avatar}>
                        <WebIcon className={classes.ImageIcon} />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText>
                      <Typography className={classes.cardText}>
                        # Päättömällä Wordpressillä (Headless Wordpress) luodu sisältö on yrityksen digitaalisen sisällön koti
                        missä sama ainestoa saa käyttää esimerkiksi mobillisovelluksissa, kotisivuilla, yrityksen
                        sisäisessä wikissa...	Yksi sisällönhallintajärjestelmä = erityyppiset käyttötiittymät.

                </Typography>
                    </ListItemText>
                  </ListItem>
                  <Divider variant="inset" component="li" />

                  <ListItem className={classes.ListItemText1}>
                    <ListItemAvatar>
                      <Avatar className={classes.Avatar}>
                        <OpenInBrowserIcon className={classes.ImageIcon} />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText>
                      <Typography className={classes.cardText}>
                        # Yritykset taistelevat asiakkaista ja valtaosa kotisivsivustojen vierailijoista tulee hakukoneista,
                        joten hyvin tehty hakukoneoptimointi on yksi menestyksen lähtökohta.
                </Typography>
                    </ListItemText>
                  </ListItem>
                  <Divider variant="inset" component="li" />
                </List>
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
