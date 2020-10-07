import React, { useContext } from "react";
import BlogItem from "../components/BlogItem";
import { GlobalContext } from "../context/GlobalState";

const AllBlogs = ({asAdmin}) => {
  const { blogData } = useContext(GlobalContext);
  return (
    <div className="AllBlogs">
      <ul>
        {blogData.map((blog) => (
          <BlogItem asAdmin={asAdmin} blog={blog} />
        ))}
      </ul>
    </div>
  );
};

export default AllBlogs;
