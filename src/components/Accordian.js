import React, {useState} from 'react'

const Accordian = ({items}) => {
  /* initialise state 
  useState(null) rerturns a reference to a value (assigned to activeIndex), and a function (assigned to setActiveIndex)
  that updates the state. When setActiveIndex is called, it re-renders - the same as setState()
  */
  const [activeIndex, setActiveIndex] = useState(null) // null - default value

  /* helper functions in functional components 
  */
  const onTitleClick = (index) => {
    setActiveIndex(index)
  };

  const renderedItems = items.map(({title, content}, index)=>{
    const active = index===activeIndex?"active":""
    
    return (
      <React.Fragment key={title}>
      {/* the arrow function here means that onTitleClick doesn't get called when it's first rendered */}
        <div className={`title ${active}`} onClick={()=>onTitleClick(index)}>
          <i className="dropdown icon"></i>
          {title}
        </div>
        <div className={`content ${active}`}>
          <p>{content}</p>
        </div>
      </React.Fragment>
    )
  })

  return (
    <div className="ui styled accordion">
      {renderedItems}
      <h1>{activeIndex}</h1>
    </div>
  )
};

export default Accordian;