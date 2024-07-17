import React from 'react';
import { Card, CardContent, Typography, Button, Grid } from '@mui/material';
import TimeTracker from './TimeTracker';

const RechargeCard = ({ plan }) => {
  return (
    <Card style={{ width: 300, margin: '20px auto',backgroundColor:'#e7ebf8',borderRadius:'20px' }}>
      <CardContent>
        <Typography variant="h5" component="div" fontWeight="bold">
          {plan.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {plan.description}
        </Typography>
        <Typography variant="h6" component="div" style={{ margin: '10px 0' }}>
          ₹{plan.amount}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Validity: {plan.validityInHours} hours
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Data: Unlimited
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Calls:-
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Remaining Hours: {plan.validityMessage}
        </Typography>
        {/* <Button variant="contained" color="primary" style={{ marginTop: '10px' }}>
          Recharge Now
        </Button> */}
        <TimeTracker id={plan.id} />
      </CardContent>
      
    </Card>
  );
};
export default RechargeCard