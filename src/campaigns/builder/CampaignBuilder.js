import "./CampaignBuilder.scss";

function CampaignBuilder() {
  const CampaignBuilderNav = () => (
    <nav className="campaignNav">
      <span className="back">
        <span className="backArrow">&lt;</span>
        Back to Campaigns
      </span>
      <div className="tabs">
        <span className="active">1. Settings</span>
        <span>2. Content</span>
        <span>3. Review &amp; Send</span>
      </div>
      <button className="save">Save</button>
      <button className="saveAndNext">Save &amp; Next</button>
    </nav>
  );

  return (
    <div className="campaignBuilderPage">
      <CampaignBuilderNav />
      <div className="placeholder">
        Finish implementations based on the design/instructions
      </div>
    </div>
  );
}

export default CampaignBuilder;
