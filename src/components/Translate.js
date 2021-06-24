import React, { useState, useEffect, useRef } from "react";
import Dropdown from "./Dropdown";
import Convert from './Convert'

const options = {
  optionType: "language",
  optionList: [
    {
      label: "Afrikaans",
      value: "af",
    },
    {
      label: "Arabic",
      value: "ar",
    },
    {
      label: "Hindi",
      value: "hi",
    },
  ],
};

const Translate = () => {
  const [language, setLanguage] = useState(options.optionList[0]);
  const [text, setText] = useState("hello");

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter text</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
      </div>
      <Dropdown
        options={options}
        selected={language}
        onSelectedChange={setLanguage}
      />
      <hr />
      <h3 className="ui header">Output</h3>
      <Convert text={text} language={language}></Convert>
    </div>
  );
};

export default Translate;
