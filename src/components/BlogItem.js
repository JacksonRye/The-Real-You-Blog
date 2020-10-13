import React from "react";
import { Link } from "react-router-dom";

const BlogItem = ({ blog, asAdmin }) => {
  const { title, subtitle, id, author, createdate } = blog;
  const date = new Date(0);
  date.setUTCSeconds(createdate.seconds);

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
          <p>{date.toLocaleDateString()}</p>
        </div>
      </div>
    </Link>
  );
};

export default BlogItem;
