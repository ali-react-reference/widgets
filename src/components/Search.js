import React, { useState, useEffect } from "react";
import wiki from "../api/WikipediaClient";

const Search = ({ items }) => {
  const [term, setTerm] = useState("dunning-kruger");
  const [results, setresults] = useState([]);
  const [timeoutId, setTimeoutId] = useState(null);

  /* search the api when the term is changed - useEffect 
  It's similar to lifecycle methods and can be triggered with different configs:
  - react renders the component for the first time
  - react renders or re renders the component
  - react renders the component for the first time, or when (react re renders a component and changes some piece of data)
  */
  useEffect(() => {
    // note: useEffect wont accept async functions directly
    // the function passed to useEffect
    const search = async () => {
      const { data } = await wiki.get("", {
        params: {
          action: "query",
          format: "json",
          list: "search",
          srsearch: term,
        },
      });
      setresults(data.query.search);
    };

    if (term && !results.length) {
      search();
    } else {
      // create a new timeout fn to call the api after 500 ms of no change
      var timeoutId = setTimeout(() => {
        if (term) {
          search();
        }
      }, 500);

      // cleanup fn is called before the rest of use effect
      return () => {
        clearTimeout(timeoutId);
      };
    }

    // 2nd term can be empty - (first render + any rerender), [] - (first render), or [dataRef1, dataRef2] - (first time or (rerender && dataChange))
  }, [term]);

  const onInputChange = (e) => {
    // cancel the old timeout
    setTerm(e.target.value);
  };

  function removeMany(text = String, rmTerms = []) {
    for (var i = 0; i < rmTerms.length; i++) {
      text = text.replaceAll(rmTerms[i], "");
    }
    return text;
  }

  // render the list of items
  const resultsList = results.map(({ title, snippet, pageid }) => {
    const updatedSnippet = removeMany(snippet, [
      '<span class="searchmatch">',
      "</span>",
      "&quot",
    ]);
    return (
      <div className="item" key={pageid}>
        <div className="right floated content">
          <a
            href={`http://en.wikipedia.org?curid=${pageid}`}
            className="ui button"
          >
            Go
          </a>
        </div>
        <div className="content">
          <div className="header">{title}</div>
          {updatedSnippet}
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label htmlFor="">Enter Search Term</label>
          <input
            type="text"
            className="input"
            onChange={(e) => onInputChange(e)}
            value={term}
          ></input>
        </div>
      </div>
      <div className="ui celled list">{resultsList}</div>
    </div>
  );
};

export default Search;
