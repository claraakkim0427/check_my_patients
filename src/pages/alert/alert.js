import React from "react";
import { Button } from "antd";
import "./alert.css";

function AlertContainer() {

    return (
        <div className="alert-container">
            <div className="alert-header">Alert: Patient 332578</div>

            <div className="alert-box">
                <strong>Alert: CRITICAL</strong>
                <p>Cardiopulmonary Instability Detected</p>
            </div>

            <div className="info-box">
                <strong>Summary of Abnormal Readings:</strong>
                <ul>
                    <li>Heart Rate: 42bpm</li>
                    <li>Blood Pressure: 85/50 mmHg</li>
                    <li>Oxygen Saturation: 85%</li>
                </ul>
            </div>

            <div className="info-box">
                <strong>Possible Causes:</strong>
                <ul>
                    <li>Heart failure progression</li>
                    <li>Respiratory distress due to COPD</li>
                    <li>Fluid imbalance</li>
                    <li>Medication effects</li>
                </ul>
            </div>

            <div className="info-box">
                <strong>Recommended Next Steps:</strong>
                <ul>
                    <li>Increase oxygen therapy to maintain SpO2 above 92%</li>
                    <li>Administer IV fluids to stabilize blood pressure</li>
                    <li>Prepare for ICU transfer</li>
                </ul>
            </div>

            <div className="button-group">
                <Button className="blue-btn" onClick={() => window.location.assign('/#/details')}>
                    View Patient Details
                </Button>
                <Button className="dark-blue-btn" onClick={() => window.location.assign('/#/trends')}>
                    View Patient Trends
                </Button>
                <Button className="gray-btn" onClick={() => window.location.assign('/#/modify')}>
                    Modify Treatment
                </Button>
                <Button className="black-btn" onClick={() => window.location.assign('/#/dashboard')}>
                    Dashboard
                </Button>
            </div>
        </div>
    );
}

export default AlertContainer;