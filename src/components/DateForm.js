import React, { Component, Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import BasicDatePicker from "./BasicDatePicker";
import { airports } from "../util/airports";

class DateForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      depart: airports[0].name,
      arrivee: airports[1].name,
      selectedDate: new Date(),
    };
  }

  render() {
    return (
      <Fragment>
        <Typography variant="h6" gutterBottom>
          Date du voyage
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <InputLabel id="label">Départ</InputLabel>
            <Select
              labelId="label"
              id="select"
              fullWidth
              onChange={(event) => {
                this.setState({ depart: event.target.value });
              }}
              defaultValue={this.state.depart}
            >
              {airports.map((airport) => (
                <MenuItem value={airport.name}>{airport.city}</MenuItem>
              ))}
            </Select>
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputLabel id="label">Arrivée</InputLabel>
            <Select
              labelId="label"
              id="select"
              fullWidth
              onChange={(event) => {
                this.setState({ arrivee: event.target.value });
              }}
              defaultValue={this.state.arrivee}
            >
              {airports.map((airport) => (
                <MenuItem value={airport.name}>{airport.city}</MenuItem>
              ))}
            </Select>
          </Grid>
          <Grid item xs={12}>
            <InputLabel id="label">Date du voyage</InputLabel>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <BasicDatePicker />
            </MuiPickersUtilsProvider>
          </Grid>
        </Grid>
      </Fragment>
    );
  }
}

export default DateForm;
