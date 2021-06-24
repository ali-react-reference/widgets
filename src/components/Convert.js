import React, { useState, useEffect } from "react";
import translater from "../api/TranslateClient";

const Convert = ({ text, language }) => {
  const [translation, setTranslation] = useState("");
  const [dbText, setdbText] = useState(text)

  useEffect(()=>{
    // create a new timeout fn to call the api after 500 ms of no change
    const timeoutId = setTimeout(() => {
      setdbText(text)
    }, 500);

    // cleanup fn is called before the rest of use effect
    return () => {
      clearTimeout(timeoutId);
    };
  }, [text])

  useEffect(() => {
    console.log("convert use effect called");

    const translate = async () => {
      const { data } = await translater.post(
        "",
        {},
        {
          params: {
            q: dbText,
            source: "en",
            target: language.value,
            format: "text",
            key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM",
          },
        }
      );
      setTranslation(data.data.translations[0].translatedText);
    };
    translate();
  }, [language, dbText]);

  return (
    <div>
      <h1 className="ui header">{translation}</h1>
    </div>
  );
};

export default Convert;
