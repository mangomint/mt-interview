function CampaignFilters() {
  return (
    <>
      {' '}
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

            <div className="dropdown is-active">
              <div className="dropdown-trigger">
                <button
                  aria-haspopup="true"
                  aria-controls="dropdown-menu"
                  className="button has-text-primary is-inverted is-borderless px-0 mt-3">
                  + Add filter
                </button>
              </div>
              <div className="dropdown-menu" id="dropdown-menu" role="menu">
                <div className="dropdown-content">
                  <h6 className="has-text-grey-light px-4 pt-3">
                    Had appointment with
                  </h6>
                  <a href="#" className="dropdown-item has-text-primary">
                    Andre
                  </a>
                  <a className="dropdown-item">Other dropdown item</a>
                  <a href="#" className="dropdown-item is-active">
                    Harriet
                  </a>
                  <a href="#" className="dropdown-item">
                    Jenifer
                  </a>
                  <h6 className="has-text-grey-light px-4 pt-3">Had service</h6>
                  <a href="#" className="dropdown-item">
                    With a divider
                  </a>
                  <h6 className="has-text-grey-light px-4 pt-3">Client</h6>
                  <a href="#" className="dropdown-item">
                    Has membership
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CampaignFilters
