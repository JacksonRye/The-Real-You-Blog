export default (state, action) => {
  switch (action.type) {
    case "UPDATE_BLOG":
      return { ...state, blogData: action.payload };

    case "SET_BLOG":
      return { ...state, blog: action.payload };

    case "SET_LOADING":
      return { ...state, loading: action.payload };

    case "SET_LAST_BLOG":
      return { ...state, lastBlog: action.payload };

    default:
      break;
  }
};
