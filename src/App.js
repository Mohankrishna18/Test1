
import "./App.css";
import React, { useState } from "react";
import RechargePlans from "./components/RechargePlans";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import FormComponent from "./components/FormComponent";

function App() {
  const [open, setOpen] = React.useState(false);
  const[status,setstatus]=useState(false)
  const hansleStatus=()=>{
    setstatus(!status)
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
 

  return (
    <div className="App">
      <div style={{float:'right',paddingRight:'100px',marginTop:'30px'}}>
        <Button variant="contained" onClick={handleClickOpen}>
          Add Plan
        </Button>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Add Plan</DialogTitle>
          <DialogContent>
            <FormComponent close={handleClose} getData={hansleStatus}/>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type="submit">Submit</Button>
          </DialogActions>
        </Dialog>
      </div>

      <RechargePlans status={status} />
      {/* <List/> */}
    </div>
  );
}

export default App;