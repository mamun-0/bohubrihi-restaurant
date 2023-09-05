export const createComment = (comment) => {
  return {
    type: "CREATE_COMMENT",
    payload: comment,
  };
};
