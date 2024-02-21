import './CampaignsPage.scss';
import CampaignBuilder from './builder/CampaignBuilder';
import { useEffect, useState } from 'react';

function CampaignsPage() {
  const [loadingMetadata, setLoadingMetadata] = useState(true);
  const [showCampaignBuilder, setShowCampaignBuilder] = useState(false);
  const [campaignFiltersData, setCampaignFiltersData] = useState();

  const formatData = (data) => {
    const flattenById = (data) => {
      return data.idList.reduce((acc, id) => {
        acc[id] = data.byId[id];
        return acc;
      }, {});
    };
    return {
      staffMembers: flattenById(data.staffMembers),
      services: flattenById(data.services),
    };
  };

  useEffect(() => {
    fetch('http://localhost:8000/campaigns')
      .then((res) => res.json())
      .then((data) => {
        setCampaignFiltersData(() => formatData(data));
        setLoadingMetadata(false);
      });
  }, []);

  return (
    <div className="campaignsPage">
      <div className="newCampaignBtnCt">
        <div
          className="newCampaignBtn"
          onClick={() => setShowCampaignBuilder(true)}>
          New Campaign
        </div>
      </div>
      {showCampaignBuilder && (
        <CampaignBuilder campaignFiltersData={campaignFiltersData} />
      )}
    </div>
  );
}

export default CampaignsPage;
