import React, { useContext, useEffect, useState } from "react";
import BlogItem from "../components/BlogItem";
import InfiniteScroll from "react-infinite-scroll-component";
import firebase from "../firebase";

import { GlobalContext } from "../context/GlobalState";

const AllBlogs = () => {
  const { blogData, getBlogs, nextBlogs } = useContext(GlobalContext);

  useEffect(() => {
    getBlogs();
    getNumberOfPosts();
  }, []);

  const [blogCount, setBlogCount] = useState(0);

  function getNumberOfPosts() {
    firebase
      .firestore()
      .collection("misc")
      .doc("--stats--")
      .onSnapshot((snapshot) => {
        setBlogCount(snapshot.data().blogCount);
      });
  }

  return (
    <div className="AllBlogs">
      <div className="blog-list">
        <InfiniteScroll
          dataLength={blogData.length}
          next={nextBlogs}
          hasMore={blogData.length < blogCount}
          loader={<h4 className="loading">Loading</h4>}
        >
          {blogData.map((blog) => (
            <BlogItem key={blog.id} blog={blog} />
          ))}
        </InfiniteScroll>
      </div>
    </div>
  );
};

export default AllBlogs;
