import React from "react";

import "./scss/App.css";
import { GlobalProvider } from "./context/GlobalState";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./views/Home";
import AllBlogs from "./views/AllBlogs";

import BlogPost from "./components/BlogPost";
import Header from "./components/Header";
import About from "./views/About";

import AboutPage from "./views/AboutPage";

const routes = [
  { path: "/", name: "Home", Component: Home },

  { path: "/all-blogs", name: "All-Blogs", Component: AllBlogs },
  { path: "/blogs/:id", name: "Blog-Post", Component: BlogPost },

  { path: "/about", name: "About", Component: AboutPage },
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
