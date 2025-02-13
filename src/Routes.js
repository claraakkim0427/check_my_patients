import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

import StartContainer from "./pages/start/start";
import AlertContainer from "./pages/alert/alert";
import DetailsContainer from "./pages/details/details";
import TrendsContainer from "./pages/trends/trends";
import ModifyTreatmentContainer from "./pages/modify/modify";
import ModifyDemoContainer from "./pages/modifydemo/modifydemo";
import RiskAnalysisContainer from "./pages/analysis/analysis";
import AcceptContainer from "./pages/accept/accept"; 
import DashboardContainer from "./pages/dashboard/dashboard";
import SearchContainer from "./pages/search/search";
import Search from "antd/lib/transfer/search";



const AppRoutes = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<StartContainer />} />
                <Route path="/alert" element={<AlertContainer />} />
                <Route path="/details" element={<DetailsContainer />} />
                <Route path="/trends" element={<TrendsContainer />} />
                <Route path="/modify" element={<ModifyTreatmentContainer />} />
                <Route path="/modifydemo" element={<ModifyDemoContainer />} />
                <Route path="/analysis" element={<RiskAnalysisContainer />} />
                <Route path="/accept" element={<AcceptContainer />} /> 
                <Route path="/dashboard" element={<DashboardContainer />} />
                <Route path="/search" element={<SearchContainer />} />
            </Routes>
        </HashRouter>
    );
};

export default AppRoutes;
