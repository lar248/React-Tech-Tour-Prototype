let nextTodoId = 0;
export const addTodo = (listId, text) => {
  return {
    type : 'ADD_TODO',
    id: nextTodoId++,
    text,
    listId,
  };
};

export const setVisibilityFilter = (filter, listId) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter,
    listId,
  };
};

export const setTabDisplayFilter = (filter) => {
  return {
    type: 'SET_TAB_DISPLAY_FILTER',
    filter,
  };
};

export const toggleCurrentMerchant = (id) => {
  return {
    type: 'TOGGLE_CURRENT_MERCHANT',
    id
  }
};

export const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  };
};

export const viewPurchaseByTransactions = (purchaseId) => {
  return {
    type: 'VIEW_PURCHASE_BY_TRANSACTIONS',
    purchaseId
  };
};
