import { makeStyles, TextField } from "@material-ui/core";
import React, { useState } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "100%",
    },
  },
}));

const AddEditBlog = () => {
  const classes = useStyles();

  const [author, setAuthor] = useState("");
  const [story, setStory] = useState("");
  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");

  const handleChange = (event, prop) => {
    const value = event.target.value;
    if (prop === "author") {
      setAuthor(value);
    }
    if (prop === "story") {
      setStory(value);
    }
    if (prop === "title") {
      setTitle(value);
    }
    if (prop === "subtitle") {
      setSubTitle(value);
    }
  };

  return (
    <div className="AddEditBlog">
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          id="standard-basic"
          value={title}
          onChange={(e) => handleChange(e, "title")}
          label="Title"
        />
        <TextField
          value={subTitle}
          onChange={(e) => handleChange(e, "subtitle")}
          id="standard-basic"
          label="Subtitle"
        />
        <TextField
          value={story}
          id="outlined-multiline-static"
          onChange={(e) => handleChange(e, "story")}
          label="Story"
          multiline
          rows={10}
          variant="outlined"
        />
        <TextField
          value={author}
          id="standard-basic"
          onChange={(e) => handleChange(e, "author")}
          label="Author"
        />

        <div>
          <button>Save</button>
          <button>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default AddEditBlog;
