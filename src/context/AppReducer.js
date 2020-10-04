export default (state, action) => {
  switch (action.type) {
    case "GET_BLOG_BY_SLUG":
      return { ...state, currentBlog: action.payload };

    default:
      break;
  }
};
