import React, { useContext, useEffect } from "react";
import BlogItem from "../components/BlogItem";
import { GlobalContext } from "../context/GlobalState";

const AllBlogs = () => {
  const { blogData, getBlogs } = useContext(GlobalContext);

  useEffect(() => {
    getBlogs()
  }, [])

  return (
    <div className="AllBlogs">
      <ul>
        {blogData.map((blog) => (
          <BlogItem blog={blog} />
        ))}
      </ul>
    </div>
  );
};

export default AllBlogs;
