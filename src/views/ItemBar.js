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
import { Icon } from '@react95/core';
import styled from '@xstyled/styled-components';


function ItemBar(props) {
  const IconContainer = styled.button`
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 4;
    min-width: 100px;
    border: none;
    background-color: transparent;
    margin-top: 20px;

    i,
    :hover {
      cursor: pointer;
    }

    i {
      margin-bottom: 8;
    }

    :hover {
      box-shadow: out;
    }
  `;

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

  return (
    <div>
      {listItems.map((item) => {
        console.log(item.displayName);
        return (
          <div>
            <IconContainer
              key = {item.icon}
              onClick = {() => item.onClick(true)}
            >
              <Icon
                name = {item.icon}
                title = {item.displayName}
              />
              {item.displayName}
            </IconContainer>
          </div>
        );
      })}
    </div>
  );
}

export default ItemBar;
