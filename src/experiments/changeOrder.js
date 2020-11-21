const styles = theme => ({
  item2: {
    order: 3,
    [theme.breakpoints.up('sm')]: {
      order: 2,
    },
  },
  item3: {
    order: 2,
    [theme.breakpoints.up('sm')]: {
      order: 3,
    },
  },
});

// ...

<Grid container spacing={16} justify="flex-start">
  <Grid item xs={12} sm={6} md={4} lg={4}>

    <Paper className={classes.paper}>
      <h1>{1}</h1>
    </Paper>

  </Grid>

  <Grid item xs={12} sm={6} md={4} lg={4} className={classes.item2}>
    <Paper className={classes.paper}>
      <h1>{2}</h1>
    </Paper>
  </Grid>
  <Grid item xs={12} sm={6} md={4} lg={4} className={classes.item3}>
    <Paper className={classes.paper}>
      <h1>{3}</h1>
    </Paper>
  </Grid>
</Grid>