import React, { useState, useEffect, useRef } from "react";
/* useRef can get access to a direct dom element 
In this case, get the most parent element that was created by the dropdown*/

const Dropdown = ({ options, selected, onSelectedChange }) => {
  const [dropdownActive, setDropdownActive] = useState(true)
  const ref = useRef();

  useEffect(()=>{
    // when triggered by a click/event, event listeners are called first
    // in this use case, when I click on the dropdown, I don't want this to run
    const onBodyClick = (event)=>{
      // work out which element was clicked and decide whether to run
      // contians is good to see if an element is a parent of another
      if(ref.current.contains(event.target)){
        return
      }
      setDropdownActive(false)
    };
    document.body.addEventListener('click', onBodyClick, {capture:true})

    // return a funtion to run on next render
    return () => {
      document.body.removeEventListener('click', onBodyClick, {capture:true})
    }
    }, [])
  
  const filteredOptions = options.optionList.filter((option) => {
    return option!==selected
  })
  const renderedOptions = filteredOptions.map((option) => {
    return (
      <div key={option.value} className="item" onClick={()=>onSelectedChange(option)}>
        {option.label}
      </div>
    );
  });

  // ref.current references the div after the first render
  // console.log(ref.current)

  return (
    <div className="ui form" ref={ref}>
      <div className="field">
        <label className="label">{`Select a ${options.optionType}`}</label>
        <div className={`ui selection dropdown ${dropdownActive?'visible active':''}`} onClick={()=>setDropdownActive(!dropdownActive)}>
          <i className="dropdown icon"></i>
          <div className="text">{`${selected.label} selected`}</div>
          <div className={`menu ${dropdownActive?'visible transition':''}`}>
            {renderedOptions}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
