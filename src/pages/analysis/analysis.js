import React, { useEffect, useState } from "react";
import { Button } from "antd";
import "./analysis.css";

function RiskAnalysisContainer() {
    const [alternativeSuggestion, setAlternativeSuggestion] = useState("HCTZ 10mg QD.");
    const [showOtherSuggestion, setShowOtherSuggestion] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleOtherSuggestionClick = () => {
        setAlternativeSuggestion("Give potassium through vein (IV).");
        setShowOtherSuggestion(true);
    };

    return (
        <div className="risk-container">
            <div className="risk-header">Modify Treatment for Patient 332578</div>

            <div className="info-box">
                <strong>Risk Analysis of Treatment Change</strong>
            </div>

            <div className="risk-circle high-risk">HIGH</div>

            {/* Show message when Other Suggestion is clicked */}
            {showOtherSuggestion && <p className="other-suggestion-text">You requested other suggestion.</p>}

            <div className="info-box">
                <strong>Reason:</strong>
                <p>Hyperkalemia risk due to increased potassium retention.</p>
            </div>

            <div className="info-box">
                <strong>Alternative Suggestion:</strong>
                <p>{alternativeSuggestion}</p>
            </div>

            <div className="button-group">
                <Button className="outline-btn" onClick={() => window.location.assign('/#/accept')}>
                    Accept Suggestion
                </Button>
                <Button className="outline-btn" onClick={handleOtherSuggestionClick}>
                    Other Suggestion
                </Button>
                <Button className="outline-btn" onClick={() => window.location.assign('/#/modifydemo')}>
                    Back to Edit
                </Button>
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

export default RiskAnalysisContainer;
