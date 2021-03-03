/*********
react imports
**********/
import React, { useState, useEffect } from 'react';

/*********
css imports
**********/
import '@react95/icons/icons.css';

/**********
react95/core imports
/**********/
import { List, TaskBar } from '@react95/core';


function PortfolioBar(props) {

  const[listItems, setListItems] = useState([]);

  useEffect(() => {
    initListItems();
  }, [props.modalTogglers, props.items]);

  const initListItems = () => {
    if(props.modalTogglers == null || props.modalTogglers == undefined) {
      return;
    }
    if(props.items == null || props.items == undefined) {
      return;
    }

    var items = props.items.slice();
    const fallback = () => {
      alert("Oh no! I don't have an onClick function!")
    }

    for(var i = 0; i < items.length; i++) {
      let item = items[i];
      if(props.modalTogglers.hasOwnProperty(item.value)) {
        items[i].onClick = props.modalTogglers[item.value];
      }
      else {
        items[i].onClick = fallback;
      }
    }
    setListItems(items);
  }

  // render the component
  return (
    <TaskBar
      list = {
        <List>
          {listItems.map((item) => {
            return (
              <List.Item
                icon = {item.icon}
                onClick = {() => item.onClick(true)}
              >
                {item.displayName}
              </List.Item>
            );
          })}
        </List>
      }
    />
  );
}

export default PortfolioBar;
