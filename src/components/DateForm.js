import React, { Component, Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import frLocale from "date-fns/locale/fr";
import BasicDatePicker from "./BasicDatePicker";

class DateForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      depart: "CDG",
      arrivee: "LHR",
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
              <MenuItem value="CDG">Paris</MenuItem>
              <MenuItem value="LHR">Londres</MenuItem>
              <MenuItem value="SFO">San Francisco</MenuItem>
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
              <MenuItem value="CDG">Paris</MenuItem>
              <MenuItem value="LHR">Londres</MenuItem>
              <MenuItem value="SFO">San Francisco</MenuItem>
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
