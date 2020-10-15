import React, { useContext, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import { GlobalContext } from "../context/GlobalState";
import BlogItem from "../components/BlogItem";



const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

const Home = () => {
  const blogsRef = useRef(null);
  const scrollToBlogs = () => scrollToRef(blogsRef);

  const { blogData, getBlogs } = useContext(GlobalContext);

  useEffect(() => {
    getBlogs();
  }, []);



  return (
    <div className="Home">
      <div className="hero">
        <h1>TheReal<span>Me</span></h1>

        <div className="tagline">
          <h4>Re-Invent Yourself.</h4>
        </div>

        <div className="unskew">
          <h2>We Are TheRealMe Team</h2>
          <br />
          <p>
            Our Mission is to provide action oriented information for young
            enterprenuers in Nigeria
          </p>

          <button onClick={scrollToBlogs}>Read Our Blog</button>
        </div>
      </div>

      <section className="recent-blogs" ref={blogsRef}>
        <div id="recent-back">
          <h1>
            MOST <br /> RECENT
          </h1>
        </div>
        <div className="recent-blogs-list">
          {blogData.slice(0, 4).map((blog) => (
            <Link to={`/blogs/${blog.id}`}>
              <BlogItem blog={blog} />
            </Link>
          ))}
          <Link className="see-more" to="/all-blogs">See More</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
