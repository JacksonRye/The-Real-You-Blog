import { makeStyles, TextField } from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
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

  let save;

  const {
    getBlogById,
    loading,
    addToBlog,
    blog,
    handleBlogChange,
    updateBlog,
    deleteBlog,
  } = useContext(GlobalContext);

  function saveNewBlog(blog) {
    const { title, subtitle, body, author } = blog;

    const blogObject = new Blog(
      title,
      author,
      body,
      subtitle
    );

    addToBlog(blogObject);
  }

  if (match) {
    const { params } = match;

    id = params.id;

    save = updateBlog;
  } else {
    id = -1;
    save = saveNewBlog;
  }

  useEffect(() => {
    getBlogById(id);

    // setLoading(false)
    // console.log("edit blog", blog);
  }, []);
  const classes = useStyles();

  return loading ? (
    <h1>Loading</h1>
  ) : (
    <div className="AddEditBlog">
      <Link to="/admin">Go Back</Link>
      <form
        className={classes.root}
        onSubmit={(e) => e.preventDefault()}
        noValidate
        autoComplete="off"
      >
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
          <button onClick={() => save(blog)}>Save</button>
          <button>Cancel</button>
          <button onClick={() => deleteBlog(blog.id)}>Delete</button>
        </div>
      </form>
    </div>
  );
};

export default AddEditBlog;
