import "./App.scss";
import { Routes, Route, NavLink } from "react-router-dom";
import CampaignsPage from "./campaigns/CampaignsPage";
import CampaignsMenuIcon from "./icons/CampaignsMenuIcon";

function Welcome() {
  return (
    <div className="welcomeCt">
      <div className="welcomeIcon">{"</>"}</div>
      <div className="title">Thank you for interviewing with us!</div>
      <div>We hope you enjoy this coding challenge 🚀</div>
    </div>
  );
}

function App() {
  return (
    <>
      <div className="navbar">
        <div className="logo">
          <NavLink to="/">
            <div className="mtLogoInner"></div>
          </NavLink>
        </div>
        <div className="mainLinks">
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "inactive")}
            to="/campaigns"
          >
            <CampaignsMenuIcon />
            Campaigns
          </NavLink>
        </div>
      </div>

      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/campaigns" element={<CampaignsPage />} />
      </Routes>
    </>
  );
}

export default App;
