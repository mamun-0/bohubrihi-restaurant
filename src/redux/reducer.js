import DISHES from "../data/dishes";
import COMMENTS from "../data/Comments";
import { combineReducers } from "redux";

const dishReducer = (dish, action) => {
  return DISHES;
};
const commentReducer = (comment = COMMENTS, action) => {
  if (action.type === "CREATE_COMMENT") {
    action.payload.id = comment.length;
    return [...comment, action.payload];
  }
  return comment;
};

export default combineReducers({
  dishes: dishReducer,
  comments: commentReducer,
});
