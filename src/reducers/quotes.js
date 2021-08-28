export default (state = [], action) => {
  console.log(action);

  switch (action.type) {
    case "ADD_QUOTE":
      return state.concat(action.quote);

    case "REMOVE_QUOTE":
      return state.filter((quote) => quote.id !== action.quote.id);

    default:
      return state;
  }
};
