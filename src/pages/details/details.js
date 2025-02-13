import React, { useEffect } from "react";
import { Button } from "antd";
import "./details.css";

function DetailsContainer() {
    useEffect(() => {
        window.scrollTo(0,0);
    }, []);
    
    return (
        <div className="details-container">
            <div className="details-header">Details of Patient 332578</div>

            <div className="info-box">
                <strong>Demographics</strong>
                <ul>
                    <li>Name: John Doe</li>
                    <li>Age: 65</li>
                    <li>Sex: Male</li>
                    <li>Medical History: Hypertension, Type 2 Diabetes, Chronic Kidney Disease Stage 3</li>
                </ul>
            </div>

            <div className="info-box">
                <strong>Lab Results</strong>
                <table className="lab-table">
                    <thead>
                        <tr>
                            <th>Test</th>
                            <th>Value</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>AIC</td>
                            <td>82%</td>
                            <td>High</td>
                        </tr>
                        <tr>
                            <td>BP</td>
                            <td>145/90 mmHg</td>
                            <td>High</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="info-box">
                <strong>Symptoms:</strong>
                <ul>
                    <li>Fatigue, dizziness, mild leg swelling</li>
                </ul>
            </div>

            <div className="info-box">
                <strong>Current Treatment:</strong>
                <ul>
                    <li>Metformin (500mg, BID)</li>
                    <li>Lisinopril (10mg, QD)</li>
                    <li>Amlodipine (5mg, QD)</li>
                </ul>
            </div>

            <div className="button-group">
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

export default DetailsContainer;
