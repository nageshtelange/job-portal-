import React from "react";
import Inputfield from "./Inputfield";

function Location({ handleChange }) {
  return (
    <div>
      <h4 className="text-lg font-medium mb-2">Location</h4>
      <div>
        <label className="sidebar-label-container">
          <input
            type="radio"
            name="location" // Consistent name for grouping
            value=""
            onChange={handleChange}
          />
          <span className="checkmark"></span>All
        </label>
        <Inputfield
          handleChange={handleChange}
          value="london"
          title="London"
          name="location"
        />
        <Inputfield
          handleChange={handleChange}
          value="seattle"
          title="Seattle"
          name="location"
        />
        <Inputfield
          handleChange={handleChange}
          value="madrid"
          title="Madrid"
          name="location"
        />
        <Inputfield
          handleChange={handleChange}
          value="boston"
          title="Boston"
          name="location"
        />
      </div>
    </div>
  );
}

export default Location;
