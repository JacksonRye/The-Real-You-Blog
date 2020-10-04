import React, { useRef } from "react";
import logo from "../logo.svg";

import red_freedom from "../img/red-freedom.jpg";
import run from "../img/run.jpg";
import tree_jump from "../img/tree-jump.jpg";
import {
  GridList,
  GridListTile,
  GridListTileBar,
  makeStyles,
} from "@material-ui/core";

const blogData = [
  {
    img: red_freedom,
    title: "Red",
    author: "Author",
  },
  {
    img: run,
    title: "Run",
    author: "Author",
  },
  {
    img: tree_jump,
    title: "Tree Jump",
    author: "Author",
  },
];

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
  },
  title: {
    color: 'black',
    textAlign: 'center'
  },
  titleBar: {
    background: "white",
    border: "1px solid gray",
  },
}));

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

const Home = () => {
  const blogsRef = useRef(null);
  const scrollToBlogs = () => scrollToRef(blogsRef);

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
          <GridList className={classes.gridList} cols={2.5} >
            {blogData.map((tile) => (
              <GridListTile key={tile.img}>
                <img src={tile.img} alt={tile.title} />
                <GridListTileBar
                  title={tile.title}
                  subtitle={tile.author}
                  classes={{
                    root: classes.titleBar,
                    title: classes.title,
                  }}
                />
              </GridListTile>
            ))}
          </GridList>
        </div>
      </section>
    </div>
  );
};

export default Home;
