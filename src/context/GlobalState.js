import React, { createContext,  useReducer } from "react";
import AppReducer from "./AppReducer";

import firebase from "../firebase";


const initialState = {
  blog: {
    title: "",
    subtitle: "",
    author: "",
    body: "",
  },
  blogData: [],
  loading: true,
  lastBlog: null,
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const limit = 2;

  const blogQuery = firebase
    .firestore()
    .collection("blogs")
    .orderBy("createdate", "desc");

  function nextBlogs() {
    blogQuery
      .startAfter(state.lastBlog)
      .limit(limit)
      .onSnapshot((snapshot) => {
        const last = snapshot.docs[snapshot.docs.length - 1];
        dispatch({ type: "SET_LAST_BLOG", payload: last });
        const newBlogs = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        const blogData = [...state.blogData, ...newBlogs];
        dispatch({ type: "UPDATE_BLOG", payload: blogData });
      });
  }

  function getBlogs() {
    blogQuery.limit(limit).onSnapshot((snapshot) => {
      const last = snapshot.docs[snapshot.docs.length - 1];
      dispatch({ type: "SET_LAST_BLOG", payload: last });
      const newBlogs = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      // const last = snapshot.docs[snapshot.docs.length - 1];
      // next = blogQuery.startAfter(last).limit(3);

      // next.onSnapshot((snapshot) => {
      //   snapshot.docs.forEach((doc) => console.log("next", doc.data()));
      // });

      // debugger
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
        nextBlogs,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
