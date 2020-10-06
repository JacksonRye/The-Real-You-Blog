export default (state, action) => {
  switch (action.type) {
    case "GET_BLOG_BY_SLUG":
      return { ...state, loading: false, currentBlog: action.payload };

    default:
      break;
  }
};
