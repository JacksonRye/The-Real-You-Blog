import React, { useContext, useRef } from "react";
import { Link } from "react-router-dom"
import logo from "../logo.svg";

import {
  GridList,
  GridListTile,
  GridListTileBar,
  makeStyles,
} from "@material-ui/core";
import { GlobalContext } from "../context/GlobalState";

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
    height: "400px"
  },
  title: {
    color: "black",
    textAlign: "center",
  },
  titleBar: {
    background: "white",
    border: "1px solid gray",
  },
  img: {
      height: "200px"
  }
}));

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

const Home = () => {
  const blogsRef = useRef(null);
  const scrollToBlogs = () => scrollToRef(blogsRef);

  const { blogData } = useContext(GlobalContext);

  const classes = useStyles();

  return (
    <div className="Home">
      <div className="hero">
        <h1>The Real Me</h1>

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
        <div className={classes.root}>
          <GridList className={classes.gridList} cols={2.5}>
            {blogData.map((tile) => (
              <Link to={`/blogs/${tile.slug}`}>
                <GridListTile key={tile.img}>
                  <img src={tile.img} className="tile-img" alt={tile.title} />
                  <GridListTileBar
                    title={tile.title}
                    subtitle={tile.author}
                    classes={{
                      root: classes.titleBar,
                      title: classes.title,
                    }}
                  />
                </GridListTile>
              </Link>
            ))}
          </GridList>
        </div>
      </section>
    </div>
  );
};

export default Home;
