import React, { useEffect } from "react";
import { Button } from "antd";
import "./trends.css";
import trendImage from "./output.png";

function TrendsContainer() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="trends-container">
      <div className="trends-header">Trends of Patient 332578</div>

      <div className="info-box">
        <strong>Live Vitals</strong>
        <table className="vitals-table">
          <thead>
            <tr>
              <th>Vital Sign</th>
              <th>Value</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Heart Rate</td>
              <td>42bpm</td>
              <td className="critical">Critical</td>
            </tr>
            <tr>
              <td>Blood Pressure</td>
              <td>85/50mmHg</td>
              <td className="low">Low</td>
            </tr>
            <tr>
              <td>Oxygen Saturation</td>
              <td>85%</td>
              <td className="critical">Critical</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="info-box">
        <strong>Graphs</strong>
        <img src={trendImage} alt="Trends Graph" className="trend-graph" />
      </div>

      <div className="button-group">
        <Button
          className="gray-btn"
          onClick={() => window.location.assign("/#/modify")}
        >
          Modify Treatment
        </Button>
        <Button
          className="blue-btn"
          onClick={() => window.location.assign("/#/details")}
        >
          View Patient Details
        </Button>
        <Button
          className="black-btn"
          onClick={() => window.location.assign("/#/dashboard")}
        >
          Dashboard
        </Button>
      </div>
    </div>
  );
}

export default TrendsContainer;
