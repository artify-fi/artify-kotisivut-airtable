import React from 'react'
import { Link } from 'gatsby'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import useMediaQuery from '@material-ui/core/useMediaQuery'

import background from '../../assets/images/contact/contact_image.jpg'
import mobileBackground from '../../assets/images/contact/mobile_screen_background.webp'

import Art from '../../assets/images/art_bachmann_oval_small.webp'
import ButtonArrow from '../original'




const useStyles = makeStyles(theme => ({
  background: {
    backgroundImage: `url(${background})`,

    backgroundPosition: "right",
    backgroundSize: "60vw",

    backgroundRepeat: "no-repeat",
    marginTop: '5em',
    [theme.breakpoints.down("md")]: {
      backgroundImage: `url(${mobileBackground})`,
      backgroundSize: 'cover',
      marginTop: '-8em'
    }
  },

  estimateButton: {
    ...theme.typography.estimate,
    borderRadius: 50,
    height: 56,
    width: 210,
    backgroundColor: theme.palette.common.grey2,
    fontSize: "1.1rem",
    marginTop: '4em',
    marginBottom: '4em',
    [theme.breakpoints.down("sm")]: {
      marginTop: '-2em'
    },
    "&:hover": {
      backgroundColor: theme.palette.secondary.light
    },
  },

  message: {
    border: `2px solid ${theme.palette.common.grey5}`,
    marginTop: "5em",
    borderRadius: 5
  },

  photo: {
    height: "15em",
    width: "15em",
    marginTop: '3em',
    border: `1px solid white`,
    borderRadius: 15,
    [theme.breakpoints.down("sm")]: {
      height: "10em",
      width: "10em",
      maxHeight: 300,
      maxWidth: 300
    },
  },

  header: {
    [theme.breakpoints.down("sm")]: {
      fontSize: '1.6rem',
      marginTop: '1em'
    }
  }
}));

export default function Contact(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <Grid container direction="row">
      <Grid
        item
        container
        direction="column"
        justify="center"
        alignItems="center"
        style={{
          padding: '0.2em',
          marginBottom: matchesMD ? "5em" : 0,
          marginTop: matchesSM ? "4em" : matchesMD ? "10em" : '10em'
        }}
        lg={3}
        xl={3} >

        <Grid item>
          <Grid
            container
            direction="column"
          >
            <section className="contact-page">
              <article style={{ width: matchesMD ? undefined : '20vw' }} className="contact-form">
                <h3>Ota Yhteyttää</h3>
                <form action="https://formspree.io/f/mknprozl" method="POST">
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      placeholder="Nimi"
                      className="form-control"
                    />
                    <input
                      type="email"
                      placeholder="Email"
                      name="email"
                      className="form-control"
                    />
                    <textarea
                      name="message"
                      rows="5"
                      placeholder="Viesti"
                      className="form-control"
                    ></textarea>
                  </div>
                  <button type="submit" className="submit-btn btn">
                    Lähetä vesti
                  </button>
                </form>
              </article>
            </section>
          </Grid>
        </Grid>
      </Grid>


      {/* Right side column starts */}

      <Grid
        item
        container
        direction={matchesMD ? "column" : "row"}
        className={classes.background}
        alignItems={matchesMD ? "center" : undefined}
        justify={matchesMD ? "center" : undefined}
        lg={9}
        xl={9}
      >
        <Grid
          item
          style={{
            marginLeft: matchesMD ? 0 : "3em",
            textAlign: matchesMD ? "center" : "inherit",
            marginTop: matchesMD ? '2em' : '10em'
          }}>
          <Grid container alignItems='center' direction="column" style={{ width: matchesMD ? '80vw' : '30vw' }}>
            <Grid item justify='center'>
              <Typography className={classes.header} align={matchesMD ? "center" : undefined} variant="h2">
                Progressiiviset kotisivut.
                <br />
                Vallankumoukselliset tulokset.
              </Typography>

              <Typography
                variant='subtitle2'
                align={matchesMD ? 'center' : undefined}
                style={{ fontSize: '1.4rem' }}>
                Hyödynnä 2020. vuosikymmen.
            </Typography>
              <Grid item justify={'center'} lg>
                <img
                  src={Art}
                  alt="art bachmann"
                  style={{
                    width: '10em',
                    maxWidth: matchesSM ? 300 : "16em",
                    marginBottom: matchesMD ? "5em" : 0,
                    marginTop: '4em'
                  }}
                />
              </Grid>
              <Typography
                variant='subtitle2'
                align={matchesMD ? 'center' : undefined}
                style={{ fontSize: '1.2rem' }}>
                Art Bachmann
                <br />
                <span style={{ fontSize: '0,8rem' }}>
                  puh. 041 743 1350
                </span>
              </Typography>

              <Grid container item
                justify={'center'}>
                <Button
                  component={Link}
                  to="/hinnasto/hinta_arviointi"
                  className={classes.estimateButton}
                  variant='outlined'
                  className={classes.estimateButton}>
                  <span>
                    Hinta-arviointi
                  </span>
                  <ButtonArrow
                    width={15}
                    height={15}
                    fill={'white'}
                  />
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
