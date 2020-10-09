import React, { createContext, useEffect, useReducer, useState } from "react";
import AppReducer from "./AppReducer";

import slugify from "slugify";

import firebase from "../firebase";

export class Blog {
  constructor(title, author, body, subtitle) {
    this.title = title;
    this.author = author;
    this.body = body;
    this.subtitle = subtitle;
  }
}

const initialState = {
  blog: {
    title: "",
    subtitle: "",
    author: "",
    body: "",
  },
  blogData: [],
  loading: true,
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  function getBlogs() {
    firebase
      .firestore()
      .collection("blogs")
      .onSnapshot((snapshot) => {
        const newBlogs = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        dispatch({ type: "UPDATE_BLOG", payload: newBlogs });
      });
  }

  function getBlogById(id) {
    setLoading(true);
    console.log(id);
    const blog = state.blogData.find((blog) => id === blog.id) || state.blog;

    console.log(blog);

    dispatch({
      type: "SET_BLOG",
      payload: blog,
    });
    setLoading(false);
  }

  function setLoading(payload) {
    dispatch({
      type: "SET_LOADING",
      payload,
    });
  }

  function addToBlog(blog) {
    console.log(blog);

    const ref = firebase.firestore().collection("blogs").doc();

    // debugger;

    ref.set({ ...blog, id: ref.id });

    const payload = [...state.blogData, blog];

    dispatch({
      type: "UPDATE_BLOG",
      payload,
    });
  }

  function deleteBlog(id) {
    firebase.firestore().collection("blogs").doc(id).delete();

    const blog = {
      title: "",
      subtitle: "",
      author: "",
      body: "",
    };

    dispatch({
      type: "SET_BLOG",
      payload: blog,
    });

    getBlogs()

   
  }

  function updateBlog(blog) {
    const { id } = blog;

    const ref = firebase.firestore().collection("blogs").doc(id);

    ref.update({
      ...blog,
    });

    getBlogs();
  }

  const handleBlogChange = (event, prop) => {
    const value = event.target.value;

    let payload;

    if (prop === "author") {
      const author = value;
      payload = { ...state.blog, author };
    }
    if (prop === "body") {
      const body = value;
      payload = { ...state.blog, body };
    }
    if (prop === "title") {
      const title = value;
      payload = { ...state.blog, title };
    }
    if (prop === "subtitle") {
      const subtitle = value;
      payload = { ...state.blog, subtitle };
    }

    dispatch({
      type: "SET_BLOG",
      payload,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        blog: state.blog,
        blogData: state.blogData,
        loading: state.loading,
        addToBlog,
        getBlogById,
        setLoading,
        handleBlogChange,
        updateBlog,
        deleteBlog,
        getBlogs,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
