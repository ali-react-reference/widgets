import React from 'react';

const Link = ({className, href, children}) => {
  const onLinkClick = (event) => {
    // check if the user held down ctrl or cmd
    if(event.metaKey||event.ctrlKey){
      return;
    }

    // dont do a full page reload 
    event.preventDefault();

    // change the url without a refesh
    window.history.pushState({},"",href)

    // make a nav event - route components will listen for it
    const navEvent = new PopStateEvent('popstate')
    window.dispatchEvent(navEvent)
  }

  return (
    <a onClick={onLinkClick} className={className} href={href} >{children}</a>
  );
}

export default Link;