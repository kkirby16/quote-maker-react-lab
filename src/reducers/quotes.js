import uuid from "uuid";

export default (state = [], action) => {
  console.log(action);

  switch (action.type) {
    case "ADD_QUOTE":
      const quote = {
        content: action.quote.content,
        author: action.quote.author,
        id: action.quote.id,
        votes: 0,
      };
      return state.concat(quote);

    case "REMOVE_QUOTE":
      return state.filter((quote) => quote.id !== action.quote.id);

    default:
      return state;
  }
};
