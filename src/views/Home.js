import React, { useContext, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import {
  GridList,
  GridListTile,
  GridListTileBar,
  makeStyles,
} from "@material-ui/core";
import { GlobalContext } from "../context/GlobalState";
import BlogItem from "../components/BlogItem";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    flexWrap: "nowrap",
    transform: "translateZ(0)",
    height: "40vh",
  },
}));

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

const Home = () => {
  const blogsRef = useRef(null);
  const scrollToBlogs = () => scrollToRef(blogsRef);

  const { blogData, getBlogs } = useContext(GlobalContext);

  useEffect(() => {
    getBlogs();
  }, []);

  const classes = useStyles();

  return (
    <div className="Home">
      <div className="hero">
        <h1>The Real <span>Me</span></h1>

        <div className="tagline">
          <h4>Redefine Yourself.</h4>
        </div>

        <div className="unskew">
          <h2>We Are The Real You Team</h2>
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
        </div>
      </section>
    </div>
  );
};

export default Home;
