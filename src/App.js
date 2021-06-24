import React, { useState } from "react";
import Accordian from "./components/Accordian";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import Route from "./components/Route";
import Header from "./components/Header";
import Link from "./components/Link"

const items = [
  {
    title: "What React?",
    content: "React is a front end javascript framework",
  },
  {
    title: "Why use React?",
    content: "React is a favorite JS library among engineers",
  },
  {
    title: "How do you use React?",
    content: "You use React by creating components",
  },
];

// a list of options that App will send to Dropdown as props
const options = {
  optionType: "colour",
  optionList: [
    {
      label: "Red",
      value: "red",
    },
    {
      label: "Green",
      value: "green",
    },
    {
      label: "Blue",
      value: "blue",
    },
  ],
};

const App = () => {
  const [selected, setSelected] = useState(options.optionList[0]);
  return (
    <div>
      <Header/>
      <Route path="/">
        <Accordian items={items}></Accordian>
      </Route>
      <Route path="/translate">
        <Translate></Translate>
      </Route>
      <Route path="/list">
        <Search></Search>
      </Route>
      <Route path="/dropdown">
        <Dropdown 
        options={options}
        selected={selected}
        onSelectedChange={setSelected}></Dropdown>
      </Route>
    </div>
  );
};
export default App;
