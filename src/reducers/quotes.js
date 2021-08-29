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

    case "UPVOTE_QUOTE":
      const idx = state.findIndex((quote) => quote.id === action.quote.id);
      return [
        ...state.slice(0, idx),
        Object.assign({}, action.quote, { votes: (action.quote.votes += 1) }),
        ...state.slice(idx + 1),
      ];

    case "DOWNVOTE_QUOTE":
      const idx2 = state.findIndex((quote) => quote.id === action.quote.id);
      return [
        ...state.slice(0, idx2),
        Object.assign({}, action.quote, { votes: (action.quote.votes -= 1) }),
        ...state.slick(idx2 + 1),
      ];

    default:
      return state;
  }
};
