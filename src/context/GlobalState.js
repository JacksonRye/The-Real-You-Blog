import React, { createContext, useEffect, useReducer, useState } from "react";
import AppReducer from "./AppReducer";
import red_freedom from "../img/red-freedom.jpg";
import run from "../img/run.jpg";
import tree_jump from "../img/tree-jump.jpg";
import slugify from "slugify";

import firebase from "../firebase";

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
  blog: {
    title: "",
    subtitle: "",
    author: "",
    body: "",
    img: null,
    slug: "",
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

  function setCurrentBlog(slug) {
    const payload = state.blogData.find((blog) => slug === blog.slug);

    console.log(payload);

    dispatch({
      type: "SET_BLOG",
      payload,
    });

    setLoading(false);
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

    ref.set({...blog, id: ref.id });

    const payload = [...state.blogData, blog];

    dispatch({
      type: "UPDATE_BLOG",
      payload,
    });
  }

  function deleteBlog(id) {
    const blogData = state.blogData.slice();

    const index = blogData.findIndex((blog) => blog.id === id);

    blogData.splice(index, 1);

    const blog = {
      title: "",
      subtitle: "",
      author: "",
      body: "",
      img: null,
      slug: "",
    };

    dispatch({
      type: "SET_BLOG",
      payload: blog,
    });

    dispatch({
      type: "UPDATE_BLOG",
      payload: blogData,
    });
  }

  function updateBlog(blog) {
    const { id } = blog;

    const blogData = state.blogData.slice();

    const index = blogData.findIndex((blog) => id === blog.id);

    blogData[index] = blog;

    dispatch({
      type: "UPDATE_BLOG",
      payload: blogData,
    });
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
        setCurrentBlog,
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
