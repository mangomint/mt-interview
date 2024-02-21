import './CampaignBuilder.scss';
import CampaignPromo from './CampaignPromo';
import CampaignFilters from './CampaignFilters';

function CampaignBuilder({ campaignFiltersData }) {
  const CampaignBuilderNav = () => (
    <nav className="campaignNav">
      <span className="back">
        <span className="backArrow">&lt;</span>
        Back to Campaigns
      </span>
      <div className="navTabs">
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
      <div className="settingsContainer">
        <CampaignPromo />
        <CampaignFilters
          services={campaignFiltersData.services}
          staffMembers={campaignFiltersData.staffMembers}
        />
      </div>
    </div>
  );
}

export default CampaignBuilder;
