import React from "react";
import logo from "./logo.svg";
import "./scss/App.css";
import { GlobalProvider } from "./context/GlobalState";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./views/Home";
import AllBlogs from "./views/AllBlogs";
import Admin from "./views/Admin";
import BlogPost from "./components/BlogPost";
import Header from "./components/Header";
import About from "./views/About";
import AddEditBlog from "./views/admin-views/AddEditBlog";




const routes = [
  { path: "/", name: "Home", Component: Home },
  { path: "/admin", name: "Admin", Component: Admin },
  { path: "/all-blogs", name: "All-Blogs", Component: AllBlogs },
  { path: "/blogs/:id", name: "Blog-Post", Component: BlogPost },
  { path: "/admin/edit/:id", name: "EditBlog", Component: AddEditBlog },
];

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Header />
        {routes.map(({ path, Component }) => (
          <Route key={path} exact path={path} component={Component} />
        ))}
        <About />
      </Router>
    </GlobalProvider>
  );
}

export default App;
