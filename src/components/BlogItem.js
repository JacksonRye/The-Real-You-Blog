import React from "react";
import { Link } from "react-router-dom";

const BlogItem = ({ blog, asAdmin }) => {
  const { title, subtitle, img, slug } = blog;
  return asAdmin ? <div>
      <h1>{title}</h1>
      <Link>Edit</Link>
  </div> : (
    <Link to={`/blog/${slug}`}>
      <div className="BlogItem">
        <img src={img} alt="" />
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </Link>
  );
};

export default BlogItem;