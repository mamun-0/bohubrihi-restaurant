import DISHES from "../data/dishes";
import COMMENTS from "../data/Comments";

const initialState = {
  dishes: DISHES,
  comments: COMMENTS,
};

export const Reducer = (state = initialState, action) => {
  if (action.type === "CREATE_COMMENT") {
    action.payload.id = state.comments.length;
    return {
      ...state,
      comments: [...state.comments, action.payload],
    };
  }
  return state;
};
