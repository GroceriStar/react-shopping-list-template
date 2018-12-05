import React from 'react';
import xxx from './xxx';


function PurchasedListItem(props){
  const isPurchased = xxx(props.ingredient.id);
  
  // li can be also replaced with a list item component - if we'll have one
  return (
    <li style={ text-decoration: isPurchased ? 'option' : 'option' }>
      {props.ingredient.name}
    </li>
  );
}


export default PurchasedListItem;
