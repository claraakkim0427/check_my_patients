import React, { useEffect } from "react";
import { Button } from "antd";
import "./accept.css";

function AcceptContainer() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="accept-container">
        <div className="accept-header">Modify Treatment for Patient 332578</div>

        <div className="info-box">
            <strong>Risk Analysis of Treatment Change</strong>
        </div>

        {/* High to Low Risk Transition */}
        <div className="risk-transition">
            <div className="risk-circle high-risk">HIGH</div>
            <span className="arrow">➝</span>
            <div className="risk-circle low-risk">LOW</div>
        </div>

        <p className="accepted-text">
            You accepted the suggestion.<br /> Updated treatment has low risk.
        </p>

        <div className="info-box">
            <strong>New Suggestion:</strong>
            <p>HCTZ 10mg QD.</p>
        </div>

        <div className="info-box">
                <strong>Why is risk low now?</strong>
                <p>HCTZ is a low potassium risk treatment which will help with Hyperkalemia.</p>
            </div>

            <div className="button-group">
                <Button className="blue-btn" onClick={() => window.location.assign('/#/details')}>
                    View Patient Details
                </Button>
                <Button className="dark-blue-btn" onClick={() => window.location.assign('/#/trends')}>
                    View Patient Trends
                </Button>
                <Button className="black-btn" onClick={() => window.location.assign('/#/dashboard')}>
                    Dashboard
                </Button>
            </div>
        </div>
    );
}


export default AcceptContainer;
