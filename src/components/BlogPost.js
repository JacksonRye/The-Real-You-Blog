import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalState";

const BlogPost = ({ match }) => {
  const { params } = match;

  const { slug } = params;

  const { setCurrentBlog, currentBlog } = useContext(GlobalContext);

  useEffect(() => {
    setCurrentBlog(slug);
  }, []);

  return currentBlog ? (
    <section className="BlogPost">
      <h1>{currentBlog.title}</h1>
    </section>
  ) : <h1>Loading</h1>;
};

export default BlogPost;
