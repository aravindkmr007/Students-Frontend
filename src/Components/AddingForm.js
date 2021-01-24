import React, { useState } from "react";
import "./AddingForm.css";
import { Button, FormControl, IconButton, TextField } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import axios from "../axios.js";
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";


const initialValue = {
  stu_id: "",
  firstname: "",
  lastname: "",
  email: "",
  dob: new Date('2015-02-11'),
};
function AddingForm({ Formopen, setFormOpen }) {
  const [Values, setValues] = useState(initialValue);
  const AddingStudents = (e) => {
    e.preventDefault();
    console.log(Values);
    axios.post("/", Values);
    setValues(initialValue);
  };
  const convertToPara = (name, value) => ({
    target: {
      name,
      value,
    },
  });

  const handleInputChange = (e) => {
    setValues({
      ...Values,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <>
      {Formopen ? (
        <div className="Form">
          <form onSubmit={AddingStudents} className="FormBox">
            <FormControl>
              <div className="Form_Header">
                <h2> Adding a Student</h2>
                <IconButton>
                  <CloseIcon onClick={() => setFormOpen(false)} />
                </IconButton>
              </div>
              <TextField
                variant="outlined"
                label="Student ID"
                name="stu_id"
                value={Values.stu_id}
                onChange={handleInputChange}
                required
              />
              <TextField
                variant="outlined"
                label="First Name"
                name="firstname"
                value={Values.firstname}
                onChange={handleInputChange}
                required
              />
              <TextField
                variant="outlined"
                label="Last Name"
                name="lastname"
                value={Values.lastname}
                onChange={handleInputChange}
                required
              />
              <TextField
                variant="outlined"
                label="email"
                value={Values.email}
                name="email"
                onChange={handleInputChange}
                required
              />
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  disableFuture
                  varient="inline"
                  format="dd/MM/yyyy"
                  margin="normal"
                  id="date"
                  views={["year", "month", "date"]}
                  label="Birthday"
                  value={Values.dob}
                  onChange={(date) =>
                   handleInputChange(convertToPara("dob", date))
                  }
                />
              </MuiPickersUtilsProvider>

              <div className="Form_Button">
                <Button
                  variant="contained"
                  type="submit"
                  style={{ backgroundColor: "green" }}
                >
                  Submit
                </Button>
                <Button
                  onClick={() => setValues(initialValue)}
                  variant="contained"
                  color="secondary"
                >
                  Reset
                </Button>
              </div>
            </FormControl>
          </form>
        </div>
      ) : null}
    </>
  );
}

export default AddingForm;
