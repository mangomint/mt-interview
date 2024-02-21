import './CampaignBuilder.scss';

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
      <div className="settingsContainer">
        <h4 className="is-size-4 has-text-weight-bold mt-6">
          Holiday Gift Card Promo
        </h4>
        <div className="card mt-5">
          <div className="card-content">
            <div className="content">
              <label className="has-text-grey is-block">
                Campaign name
                <input
                  className="input mt-1"
                  type="text"
                  placeholder="Eg: Holiday Gift Card Promo"
                />
              </label>
              <label className="has-text-grey mt-4 is-block">
                Subject line
                <input
                  className="input mt-1"
                  type="text"
                  placeholder="Eg: Our holiday gift card promo is here!"
                />
              </label>

              <span className="has-text-primary mt-5 is-inline-block">
                Advanced settings
              </span>
            </div>
          </div>
        </div>
        <div className="card mt-5">
          <div className="card-content">
            <div className="content">
              <h6 className="is-size-6">Filters:</h6>
              <div>
                <div className="tag">
                  <span>
                    Had appointment with:{' '}
                    <span className="has-text-weight-bold">Jessica</span>
                  </span>
                  <button className="is-small has-text-grey delete">x</button>
                </div>
              </div>
              <button className="button has-text-primary is-inverted is-borderless px-0 mt-3">
                + Add filter
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CampaignBuilder;
