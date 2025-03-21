import React, { useState } from "react";
import moment from "moment-timezone";
import Dropdown from "./components/Dropdown";
import timeZone from "./data/timeZone.json"

const LanguageSelector = () => {
  const languageOptions = Object.keys(timeZone);

  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [selectedTimezone, setSelectedTimezone] = useState("");

  const handleLanguageChange = (e) => {
    const selectedLang = e.target.value;
    setSelectedLanguage(selectedLang);
    setSelectedTimezone("");
  };

  const handleTimezoneChange = (e) => {
    setSelectedTimezone(e.target.value);
  };

  const getFormattedTime = () => {
    const now = moment().tz(selectedTimezone);

    const dateTime = new Intl.DateTimeFormat(selectedLanguage, {
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      timeZone: selectedTimezone,
    }).format(now.toDate());
    console.log("complete date:", dateTime);
    return dateTime;
  };

  return (
    <div className="col-sm-8 mx-auto my-auto">
      <div className="card">
        <div className="card-header">Select Language and timeZone</div>
        <div className="card-body">
          <Dropdown
            label={"Language"}
            value={selectedLanguage}
            array={languageOptions}
            handleChange={handleLanguageChange}
          />
          <Dropdown
            label={"Timezone"}
            value={selectedTimezone}
            array={timeZone[selectedLanguage]}
            handleChange={handleTimezoneChange}
          />
          {selectedLanguage && selectedTimezone && (
            <h5 className="mt-3">Current Time: {getFormattedTime()}</h5>
          )}
        </div>
      </div>
    </div>
  );
};

export default LanguageSelector;
