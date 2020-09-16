import React from "react";

const Feature = props => {
  var isSelected = props.feature.IsActive == "true" ? true : false;
  return (
    <li>
      <p>{props.feature.Feature}</p>
      <ul className="flex-inner">
        <li>
          <input
            type="radio"
            id="active"
            checked={isSelected}
            name={props.feature.Feature}
            onChange={event =>
              props.updateFeatureValue(props.feature.RowKey, event.target.value)
            }
            value={true}
          />
          <label htmlFor="active">Active</label>
        </li>
        <li>
          <input
            type="radio"
            id="inactive"
            checked={!isSelected}
            name={props.feature.Feature}
            onChange={event =>
              props.updateFeatureValue(props.feature.RowKey, event.target.value)
            }
            value={false}
          />
          <label htmlFor="inactive">Inactive</label>
        </li>
        <li>
          <button onClick={props.updateFeature(props.feature.RowKey)}>
            Update
          </button>
        </li>
      </ul>
    </li>
  );
};

export default Feature;
