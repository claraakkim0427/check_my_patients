import React, { useEffect, useState } from "react";
import { Button, Input } from "antd";
import "./modify.css";

function ModifyTreatmentContainer() {
    const [treatmentPlan, setTreatmentPlan] = useState("");

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
                    placeholder="Type change of plans here and submit click button to get risk analysis of treatment change"
                    value={treatmentPlan}
                    onChange={(e) => setTreatmentPlan(e.target.value)}
                    autoSize={{ minRows: 4, maxRows: 6 }}
                />
            </div>

            <Button className="outline-btn" onClick={() => window.location.assign('/#/modifydemo')}>
                GET EXAMPLE
            </Button>
        </div>
    );
}

export default ModifyTreatmentContainer;
