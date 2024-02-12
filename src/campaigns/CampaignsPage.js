import "./CampaignsPage.scss";
import CampaignBuilder from "./builder/CampaignBuilder";
import { useEffect, useState } from "react";

function CampaignsPage() {
  const [loadingMetadata, setLoadingMetadata] = useState(true);
  const [showCampaignBuilder, setShowCampaignBuilder] = useState(false);

  useEffect(() => {
    fetch("http://localhost:8000/campaigns")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setLoadingMetadata(false);
      });
  }, []);

  return (
    <div className="campaignsPage">
      <div className="newCampaignBtnCt">
        <div
          className="newCampaignBtn"
          onClick={() => setShowCampaignBuilder(true)}
        >
          New Campaign
        </div>
      </div>
      {showCampaignBuilder && <CampaignBuilder />}
    </div>
  );
}

export default CampaignsPage;
