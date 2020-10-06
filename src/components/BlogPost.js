import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalState";

const BlogPost = ({ match }) => {
  const { params } = match;

  const { slug } = params;

  const { setCurrentBlog, currentBlog, loading } = useContext(GlobalContext);

  useEffect(() => {
    setCurrentBlog(slug);
  }, []);

  return loading ? (
    <h1>Loading</h1>
  ) : (
    <section className="BlogPost">
      <h1>{currentBlog}</h1>
    </section>
  );
};

export default BlogPost;
