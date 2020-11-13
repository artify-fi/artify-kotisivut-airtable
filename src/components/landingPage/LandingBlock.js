import React from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
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
  infoBackground: {
    backgroundImage: `url(${infoBackground})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    position: 'sticky',
    height: '180vh',
    width: '100%',
  },

  cardContainer: {
    // larger than 1920
    [theme.breakpoints.down('xl')]: {
      width: '52vw',
      height: '154vh',
      marginLeft: '6vw'
    },

    // 1280  and  up to 1920
    [theme.breakpoints.down('lg')]: {
      width: '58em',
      height: '148vh',
      marginLeft: '3vw'
    },

    // 960 and up to 1280
    [theme.breakpoints.down('md')]: {
      width: '50em',
      height: '130vh'
    },

    // 600 up to 960
    [theme.breakpoints.down('sm')]: {
      width: '42em',
      height: '140vh',
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
  },
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
                  component="h2"
                  align='center'
                  className={classes.cardHeading}>
                  Nykyaikaiset  progressiiviset kotisivut ja  mobiilisovellukset
                  pienyrittäjille mikä tukevat uusien asiakkaiden tavoittamista.
                </Typography>
              </CardContent>
              <CardMedia
                className={classes.media}
                image={cardImage}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h1" component="h2">

                </Typography>
                <Typography variant="body1" component="p" className={classes.cardText}>
                  # Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                  across all continents except Antarctica
                </Typography>
                <Typography variant="body1" component="p" className={classes.cardText}>
                  # Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                  across all continents except Antarctica
                </Typography>
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
