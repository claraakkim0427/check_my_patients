import React, { useState, useEffect } from "react";
import { Button } from "antd";
import "./start.css";

function StartContainer() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const routeChange = () => {
    let path = "/#/alert";
    // history.push(path);
    window.location.assign(path);
    console.log("moving to alert page");
  };

  return (
    <div className="container">
      <div className="time-container">
        <p className="date">
          {time.toLocaleDateString("en-US", {
            weekday: "long",
            month: "long",
            day: "numeric",
          })}
        </p>
        <h1 className="time">
          {time.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
        </h1>
      </div>

      <div className="notifications">
        <p>Notifications</p>
        <button className="notification-btn" onClick={routeChange}>
          <div className="bold-text">Check My Patients</div>
          <div className="regular-text">Patient 332578 CRITICAL</div>
        </button>
      </div>
    </div>
  );
}

export default StartContainer;
