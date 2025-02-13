import React, { useEffect, useState } from "react";
import { Button, Input } from "antd";
import "./search.css";

function SearchContainer() {
    const [patientID, setPatientID] = useState("");

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="search-container">
            <div className="search-header">Search</div>

            <div className="search-box">
                <label><strong>Patient ID :</strong></label>
                <Input 
                    className="search-input"
                    placeholder="Type Patient ID here"
                    value={patientID}
                    onChange={(e) => setPatientID(e.target.value)}
                />
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

export default SearchContainer;
