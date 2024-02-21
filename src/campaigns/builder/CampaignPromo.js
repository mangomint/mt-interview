function CampaignPromo() {
  return (
    <>
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
    </>
  );
}

export default CampaignPromo
