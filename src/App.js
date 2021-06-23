import React from "react";
import Accordian from "./components/Accordian";
import Search from "./components/Search";

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

const App = () => {
  return (
    <div>
      {/* <Accordian items={items} /> */}
      <Search></Search>
    </div>
  );
};
export default App;
