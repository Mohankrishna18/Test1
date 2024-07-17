import React, { useState } from "react";
import axios from "axios";
const TimeTracker = ({id}) => {
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [duration, setDuration] = useState(null);

  const handleStart = () => {
    setStartTime(new Date());
    setEndTime(null);
    setDuration(null);
    axios.post(`http://localhost:3010/api/dataplans/${id}/start`,{startTime:new Date()}).then((res)=>{
      console.log(res)
    }).catch((er)=>{
      console.log(er)
    })
    alert("Started using net");
  };

  const handleStop = () => {
    const end = new Date();
    setEndTime(end);
    if (startTime) {
      const timeDiff = end - startTime; // Difference in milliseconds
      const seconds = Math.floor((timeDiff / 1000) % 60);
      const minutes = Math.floor((timeDiff / (1000 * 60)) % 60);
      const hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);

      setDuration({ hours, minutes, seconds });
      axios.post(`http://localhost:3010/api/dataplans/${id}/end`,{startTime:new Date()}).then((res)=>{
        console.log(res)
      }).catch((er)=>{
        console.log(er)
      })
      alert(`You used ${hours} hour ${minutes} min,${seconds} sec`);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      {/* <h1>Time Tracker</h1> */}
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <button
          onClick={handleStart}
          style={{
            marginRight: "10px",
            padding: "10px 20px",
            borderRadius: "20px",
            backgroundColor:'#2020d4',
            color:'white',
            fontWeight:'bold'
          }}

        >
          Start
        </button>
        <button onClick={handleStop} style={{
            marginRight: "10px",
            padding: "10px 20px",
            borderRadius: "20px",
            backgroundColor:'#dc6367',
            color:'white',
            fontWeight:'bold'
          }}>
          Stop
        </button>
      </div>

      {duration && (
        <div style={{ marginTop: "20px" }}>
          <h2>Time Spent Browsing</h2>
          <p>
            {duration.hours} hours, {duration.minutes} minutes,{" "}
            {duration.seconds} seconds
          </p>
        </div>
      )}
    </div>
  );
};

export default TimeTracker;