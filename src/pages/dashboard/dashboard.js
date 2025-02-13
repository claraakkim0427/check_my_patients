import React, { useEffect, useState } from "react";
import { Button } from "antd";
import "./dashboard.css";

function DashboardContainer() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Sample Patient Data
    const patients = [
        { id: "332578", status: "Critical", statusClass: "critical" },
        { id: "284923", status: "Warning", statusClass: "warning" },
        { id: "345792", status: "Stable", statusClass: "stable" },
    ];

    return (
        <div className="dashboard-container">
            <div className="dashboard-header">Dashboard</div>

            <table className="dashboard-table">
                <thead>
                    <tr>
                        <th>Patient ID</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {patients.map((patient) => (
                        <tr key={patient.id}>
                            <td>{patient.id}</td>
                            <td className={patient.statusClass}>{patient.status}</td>
                            <td>
                                <div className="button-group">
                                    <Button className="gray-btn" onClick={() => window.location.assign('/#/modify')}>
                                        Modify Treatment
                                    </Button>
                                    <Button className="blue-btn" onClick={() => window.location.assign('/#/details')}>
                                        View Patient Details
                                    </Button>
                                    <Button className="dark-blue-btn" onClick={() => window.location.assign('/#/trends')}>
                                        View Patient Trends
                                    </Button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Search Button at the Bottom */}
            <div className="bottom-buttons">
                <Button className="search-btn" onClick={() => window.location.assign('/#/search')}>
                    Search with Patient ID
                </Button>
            </div>
        </div>
    );
}

export default DashboardContainer;
