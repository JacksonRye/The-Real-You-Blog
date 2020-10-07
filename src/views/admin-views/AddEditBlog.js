import { makeStyles, TextField } from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
import { GlobalContext, Blog } from "../../context/GlobalState";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "100%",
    },
  },
}));

const AddEditBlog = ({ match }) => {
  let id;

  if (match) {
    const { params } = match;

    id = params.id;
  } else {
    id = -1;
  }

  const {
    getBlogById,
    loading,
    addToBlog,
    blogData,
    blog,
    handleBlogChange,
  } = useContext(GlobalContext);
  useEffect(() => {
    getBlogById(+id);

    // setLoading(false)
    // console.log("edit blog", blog);
  }, []);
  const classes = useStyles();

  return loading ? (
    <h1>Loading</h1>
  ) : (
    <div className="AddEditBlog">
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          id="standard-basic"
          value={blog.title}
          onChange={(e) => handleBlogChange(e, "title")}
          label="Title"
        />
        <TextField
          value={blog.subtitle}
          onChange={(e) => handleBlogChange(e, "subtitle")}
          id="standard-basic"
          label="Subtitle"
        />
        <TextField
          value={blog.body}
          // defaultValue={blog.body}
          id="outlined-multiline-static"
          onChange={(e) => handleBlogChange(e, "body")}
          label="Story"
          multiline
          rows={10}
          variant="outlined"
        />
        <TextField
          value={blog.author}
          id="standard-basic"
          onChange={(e) => handleBlogChange(e, "author")}
          label="Author"
        />

        <div>
          <button
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            Save
          </button>
          <button>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default AddEditBlog;
