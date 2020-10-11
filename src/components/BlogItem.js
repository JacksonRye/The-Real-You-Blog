import React from "react";
import { Link } from "react-router-dom";

const BlogItem = ({ blog, asAdmin }) => {
  const { title, subtitle, id, author } = blog;
  return asAdmin ? (
    <div>
      <h1>{title}</h1>
      <Link to={`/admin/edit/${id}`}>Edit</Link>
    </div>
  ) : (
    <Link to={`/blogs/${id}`}>
      <div className="BlogItem">
        <h1>{title}</h1>
        <h4>{subtitle}</h4>

        <div>
          <span>{author}</span>
          {/* <p>27 Sept 2020</p> */}
        </div>
        
      </div>
    </Link>
  );
};

export default BlogItem;
