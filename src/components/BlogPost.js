import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalState";

const BlogPost = ({ match }) => {
  const { params } = match;

  const { id } = params;

  const { getBlogById, blog, loading } = useContext(GlobalContext);

  const { title, subtitle, body, author } = blog;

  useEffect(() => {
    getBlogById(id);
  }, []);

  return loading ? (
    <h1>Loading</h1>
  ) : (
    <section className="BlogPost">
      <h1>{title}</h1>
      <h3>{subtitle}</h3>

      <h4>By {author}</h4>
      <div dangerouslySetInnerHTML={{__html: body}} />
    </section>
  );
};

export default BlogPost;
