import React from "react";
import { Link } from 'gatsby';
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Hidden from "@material-ui/core/Hidden";

import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Box from '@material-ui/core/Box';
//import revolutionBackground from '../../assets/images/3d-background-light.jpg'
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
    paddingLeft: "5em",
    paddingRight: "5em",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "1.5em",
      paddingRight: "1.5em"
    }
  },  
  background: {
    backgroundColor: '#f5f5f5',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    height: '100%',
    width: '100%',
    marginTop: '2em'
  },
  revolutionCard: {
    position: 'flex',
    boxShadow: theme.shadows[10],
    borderRadius: 15,
    padding: '1.2em',
    [theme.breakpoints.down('sm')]: {
      position: 'flex',
      padding: '1em',
      margin: '1rem',
      borderRadius: 10
    }
  },

  transform: {
    cursor: 'pointer',
    outline: 'none',
    boxShadow: '0 0.4rem rgba(121, 121, 121, 0.5)',
    borderRadius: '14px',
    '&:active': {
      transform: 'translate(0, 0.5rem)',
      boxShadow: '0 0.1rem rgba(255, 255, 255, 0.4)',
    }
  },
}));

export default function QRBlock(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'))
  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'))

  return (
    <Grid container direction="column">
      <Grid
        item
        className={classes.rowContainer}
        style={{ marginTop: matchesMD ? "3em" : "5em" }}
      >
        <Typography align={matchesMD ? "center" : undefined} variant="h1">
         Gatsby JS
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
           GatsbyJS:n käyttäminen on loistava tapa lisätä nykyaikaista suorituskykyä,
          skaalautuvuutta, turvallisuutta ja kehityksen nopeuden etuja
          Älä tilaa verkkosivustoa, jolla on edellisen vuosikymmenen tekniikkaa.
          Gatsby.js rakentaa nopeimman mahdollisen verkkosivuston.
          
        </Typography>
      </Grid>

      <Grid
        item
        container
        className={classes.rowContainer}
        style={{ marginTop: "10em", marginBottom: "10em" }}
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
            style={{ maxWidth: "35em" }}
          >
            <Grid item>
              <Typography
                align={matchesMD ? "center" : undefined}
                variant="h4"
                gutterBottom
              >
                History
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body1"
                align={matchesMD ? "center" : undefined}
                paragraph
                style={{ fontWeight: 700, fontStyle: "italic" }}
              >
                We're the new kid on the block
              </Typography>
              <Typography
                variant="body1"
                align={matchesMD ? "center" : undefined}
                paragraph
              >
                Founded in 2019, we’re ready to get our hands on the world’s
                business problems.
              </Typography>
              <Typography
                variant="body1"
                align={matchesMD ? "center" : undefined}
                paragraph
              >
                It all started with one question: Why aren’t all businesses
                using available technology? There are many different answers to
                that question: economic barriers, social barriers, educational
                barriers, and sometimes institutional barriers.
              </Typography>
              <Typography
                variant="body1"
                align={matchesMD ? "center" : undefined}
                paragraph
              >
                We aim to be a powerful force in overcoming these obstacles.
                Recent developments in software engineering and computing power,
                compounded by the proliferation of smart phones, has opened up
                infinite worlds of possibility. Things that have always been
                done by hand can now be done digitally and automatically, and
                completely new methods of interaction are created daily. Taking
                full advantage of these advancements is the name of the game.
              </Typography>
              <Typography
                variant="body1"
                align={matchesMD ? "center" : undefined}
                paragraph
              >
                All this change can be a lot to keep up with, and that’s where
                we come in.
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        {/* QR code with Cafeteria Gatsby image */}

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
              Gatsbyn lisääminen on loistava tapa lisätä nykyaikaisia suorituskykyä,
              skaalautuvuutta, turvallisuutta ja kehityksen nopeuden etuja
              Älä tilaa verkkosivustoa, jolla on edellisen vuosikymmenen tekniikkaa.
              Gatsby.js rakentaa nopeimman mahdollisen verkkosivuston.
              
            </Typography>
      </Grid>
            </CardContent>
          </Card>
          </Grid>
        </Grid>
      </Grid>      
    </Grid>
  );
}
