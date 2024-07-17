import { useEffect, useState } from "react";
import RechargeCard from "./RechargeCard";
import {Grid} from "@mui/material"
import axios from "axios";
const RechargePlans = ({status}) => {
  const[plans,setPlans]=useState([])

  useEffect(() => {
     axios.get('http://localhost:3010/api/dataplans').then((res)=>{
      console.log(res)
      setPlans(res?.data)
     }).catch((er)=>{
      console.log(er)
     })
  },[status])
    return (
      <Grid container spacing={3} justifyContent="center">
        {plans.map((plan, index) => (
          <Grid item key={index}>
            <RechargeCard plan={plan} />
          </Grid>
        ))}
      </Grid>
    );
  };
  export default RechargePlans