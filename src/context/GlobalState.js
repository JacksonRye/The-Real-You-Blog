import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import red_freedom from "../img/red-freedom.jpg";
import run from "../img/run.jpg";
import tree_jump from "../img/tree-jump.jpg";
import slugify from "slugify";

export class Blog {
  constructor(id, img, title, author, body, subtitle) {
    this.id = id;
    this.img = img;
    this.title = title;
    this.author = author;
    this.body = body;
    this.subtitle = subtitle;
    this.slug = slugify(title);
  }
}

const initialState = {
  currentBlog: null,
  blogData: [
    {
      id: 1,
      img: red_freedom,
      title: "Red",
      author: "Author",
      get slug() {
        return slugify(this.title);
      },

      body:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",

      subtitle: "Twinkle, Twinkle little star",
    },
    {
      id: 2,
      img: run,
      title: "Run",
      author: "Author",

      body:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      get slug() {
        return slugify(this.title);
      },
      subtitle: "Twinkle, Twinkle little star",
    },
    {
      id: 3,
      img: tree_jump,
      title: "Tree Jump",
      author: "Author",
      body:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      get slug() {
        return slugify(this.title);
      },
      subtitle: "Twinkle, Twinkle little star",
    },
  ],
  loading: true,
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  function setCurrentBlog(slug) {
    const payload = state.blogData.find((blog) => slug === blog.slug);

    console.log(payload);

    dispatch({
      type: "GET_BLOG_BY_SLUG",
      payload,
    });
  }

  function addToBlog(blog) {
    console.log(blog);

    const payload = [...state.blogData, blog];

    dispatch({
      type: "ADD_TO_BLOG",
      payload,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        blogData: state.blogData,
        loading: state.loading,
        setCurrentBlog,
        addToBlog,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
