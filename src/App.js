import React from "react";
import LanguageSelector from "./LanguageSelector";

const App = () => {
  const mockTimezones = {
    "en-US": [
      "America/New_York",
      "America/Chicago",
      "America/Los_Angeles",
      "America/Denver",
      "Pacific/Honolulu",
    ],

    "en-GB": [
      "Europe/London",
      "Europe/Belfast",
      "Europe/Gibraltar",
      "Atlantic/Reykjavik",
      "Europe/Dublin",
    ],

    "en-IN": [
      "Asia/Kolkata",
      "Asia/Delhi",
      "Asia/Mumbai",
      "Asia/Bangalore",
      "Asia/Chennai",
    ],

    "pt-BR": [
      "America/Sao_Paulo",
      "America/Fortaleza",
      "America/Bahia",
      "America/Recife",
      "America/Belem",
    ],

    "ja-JP": [
      "Asia/Tokyo",
      "Asia/Osaka",
      "Asia/Nagoya",
      "Asia/Sapporo",
      "Asia/Fukuoka",
    ],
  };
  return <LanguageSelector mockTimezones={mockTimezones} />;
};

export default App;
