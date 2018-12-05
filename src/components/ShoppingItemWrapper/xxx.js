// this is an example from an article.
// maybe later we'll use it as source of inspiration

import { useState, useEffect } from 'react';

function useIngredientStatus(ingredientID) {
  const [isPurchased, setIsPurchased] = useState(null);

  function handleStatusChange(status) {
    setIsPurchased(status.isPurchased);
  }

  useEffect(() => {
    // some logic of checking. can also return some values
  });

  return isPurchased;
