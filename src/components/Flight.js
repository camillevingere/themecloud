import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { flights } from "../util/flights";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

function isFlightExist(departure, arrival) {
  for (let i = 0; i < flights.lenght; i++) {
    if (departure === flights[i].departure) {
      if (arrival === flights[i].arrival) {
        return true;
      }
    }
  }
  return true;
}

function Flight(props) {
  const classes = useStyles();
  const { departure, arrival, selectedDate } = props;

  return (
    <div>
      {isFlightExist(departure, arrival) === true ? (
        <Card className={classes.root}>
          <CardActionArea>
            <CardContent>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {departure}
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {arrival}
                  </Typography>
                </Grid>
                <Typography gutterBottom variant="h5" component="h2">
                  {selectedDate.toLocaleString("fr-FR", {
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit",
                  })}{" "}
                  - {flights[0].hourDeparture}
                </Typography>
                <Typography gutterBottom variant="h5" component="h2">
                  {selectedDate.toLocaleString("fr-FR", {
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit",
                  })}{" "}
                  - {flights[0].hourArrival}
                </Typography>
              </Grid>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {flights[0].price}€
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </CardActionArea>
        </Card>
      ) : (
        <Typography gutterBottom variant="h5" component="h2">
          Aucun résultat
        </Typography>
      )}
    </div>
  );
}

export default Flight;
