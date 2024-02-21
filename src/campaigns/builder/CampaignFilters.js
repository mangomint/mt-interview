import React, { useState } from 'react';

function CampaignFilters({ staffMembers, services }) {
  const [showDropdown, setShowDropdown] = useState(false);
  const [tags, setTags] = useState([]);

  const addTag = (type, item) => {
    const tagExists = tags.some(
      (tag) => tag.type === type && tag.item.id === item.id
    );
    if (!tagExists) {
      setTags([...tags, { type, item }]);
    }
    setShowDropdown(false);
  };

  const removeTag = (index) => {
    setTags(tags.filter((_, i) => i !== index));
  };

  const renderTag = (tag, index) => (
    <div key={index} className="tag mr-3 mb-2">
      <span>
        {tag.type === 'staff'
          ? 'Had appointment with: '
          : tag.type === 'service'
            ? 'Had service: '
            : ''}
        <span className="has-text-weight-bold">
          {tag.item.firstName || tag.item.name || 'Has membership'}
        </span>
      </span>
      <button
        onClick={() => removeTag(index)}
        className="is-small has-text-grey delete">
        x
      </button>
    </div>
  );

  const renderDropdownItem = (type, item) => (
    <a
      key={item.id}
      href="#"
      className="dropdown-item"
      onClick={() => addTag(type, item)}>
      {item.firstName || item.name}
    </a>
  );

  return (
    <>
      <div className="card mt-5">
        <div className="card-content">
          <div className="content">
            <h6 className="is-size-6">Filters:</h6>
            <div>{tags.map(renderTag)}</div>
            <div className="dropdown is-active">
              <div className="dropdown-trigger">
                <button
                  aria-haspopup="true"
                  aria-controls="dropdown-menu"
                  onClick={() => setShowDropdown(!showDropdown)}
                  className="button has-text-primary is-inverted is-borderless px-0 mt-3">
                  + Add filter
                </button>
              </div>
              {showDropdown && (
                <div
                  className="dropdown-menu pb-5"
                  id="dropdown-menu"
                  role="menu">
                  <div className="dropdown-content">
                    <h6 className="has-text-grey-light px-4 pt-3">
                      Had appointment with
                    </h6>
                    {Object.values(staffMembers).map((staff) =>
                      renderDropdownItem('staff', staff)
                    )}
                    <h6 className="has-text-grey-light px-4 pt-3">
                      Had service
                    </h6>
                    {Object.values(services).map((service) =>
                      renderDropdownItem('service', service)
                    )}
                    <h6 className="has-text-grey-light px-4 pt-3">Client</h6>
                    <a
                      href="#"
                      className="dropdown-item"
                      onClick={() => addTag('membership', {})}>
                      Has membership
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CampaignFilters;
