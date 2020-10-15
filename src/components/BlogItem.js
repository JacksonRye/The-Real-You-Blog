import React from "react";
import { Link } from "react-router-dom";

const BlogItem = ({ blog }) => {
  const { title, subtitle, id, author, createdate } = blog;
  const date = new Date(0);
  date.setUTCSeconds(createdate.seconds);

  return (
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
