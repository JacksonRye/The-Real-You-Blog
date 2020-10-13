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

  let lastDoc = null;

  const blogQuery = firebase
    .firestore()
    .collection("blogs")
    .orderBy("createdate", "desc");

  function getBlogs() {
    blogQuery
      .limit(3)
      .limitToLast(1)
      .onSnapshot((snapshot) => {
        lastDoc = snapshot.docs[0].data();
        console.log("last", lastDoc);
      });

    blogQuery.onSnapshot((snapshot) => {
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

  return (
    <GlobalContext.Provider
      value={{
        blog: state.blog,
        blogData: state.blogData,
        loading: state.loading,
        getBlogById,
        setLoading,
        getBlogs,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
