const tabDisplayFilter = (state = 'SHOW_MERCHANTS', action) => {
  switch (action.type) {
    case 'SET_TAB_DISPLAY_FILTER':
      return action.filter;
    default:
      return state;
  }
};

export default tabDisplayFilter;
