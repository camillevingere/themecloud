import React, { Fragment, useState } from "react";
import { DatePicker } from "@material-ui/pickers";

function BasicDatePicker(props) {
  const [selectedDate, handleDateChange] = useState(new Date());

  return (
    <Fragment>
      <DatePicker
        value={selectedDate}
        onChange={handleDateChange}
        animateYearScrolling
      />
    </Fragment>
  );
}

export default BasicDatePicker;
