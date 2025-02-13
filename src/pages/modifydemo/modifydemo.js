import React, { useEffect, useState } from "react";
import { Button, Input } from "antd";
import "../modify/modify.css";

function ModifyDemoContainer() {
    const [treatmentPlan, setTreatmentPlan] = useState(
        "Increase Lisinopril 10mg to 20mg,\nAdd Spironolactone 25mg"
    );

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="modify-container">
            <div className="modify-header">Modify Treatment for Patient 332578</div>

            <div className="info-box">
                <strong>Planned Treatment Change</strong>
                <Input.TextArea 
                    className="treatment-input"
                    value={treatmentPlan}
                    autoSize={{ minRows: 4, maxRows: 6 }}
                    readOnly
                />
            </div>

            <Button className="outline-btn" onClick={() => window.location.assign('/#/analysis')}>
                Get Risk Analysis of Treatment Change
            </Button>
        </div>
    );
}

export default ModifyDemoContainer;
