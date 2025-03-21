import React from "react";

const Dropdown = ({ value, array, handleChange, label }) => {
  return (
    <div>
      <label className="mb-2 mt-3"> {label}: </label>
      <select
        className="form-select"
        aria-label="Default select example"
        value={value}
        onChange={handleChange}
      >
        <option>Select {label}</option>
        {array?.length > 0 &&
          array.map((tz) => (
            <option key={tz} value={tz}>
              {tz}
            </option>
          ))}
      </select>
    </div>
  );
};

export default Dropdown;
