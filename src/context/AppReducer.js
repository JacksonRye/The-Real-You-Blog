export default (state, action) => {
  switch (action.type) {
    case "ADD_TO_BLOG":
      return { ...state, blogData: action.payload };

    case "SET_BLOG":
      return { ...state, blog: action.payload };

    case "SET_LOADING":
      return { ...state, loading: action.payload };

    default:
      break;
  }
};
