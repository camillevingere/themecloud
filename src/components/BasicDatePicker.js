import React, { Fragment } from "react";
import { DatePicker } from "@material-ui/pickers";

function BasicDatePicker(props) {
  const { selectedDate, setSelectedDate } = props;

  return (
    <Fragment>
      <DatePicker
        value={selectedDate}
        onChange={(e) => setSelectedDate(e.target.value)}
        animateYearScrolling
      />
    </Fragment>
  );
}

export default BasicDatePicker;
