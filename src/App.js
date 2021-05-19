import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./subpages/Home";
import Portfolio from "./subpages/Portfolio";
import CaseStudy from "./subpages/CaseStudy";
import About from "./subpages/About";
import Contact from "./subpages/Contact";
import Blog from "./subpages/Blog";
import BlogPost from "./subpages/BlogPost";
import NavBar from "./components/NavBar";
// import Footer from "./components/Footer";
import "./assets/styles.scss";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route component={Home} path="/" exact></Route>
        <Route component={Portfolio} path="/Portfolio"></Route>
        <Route component={CaseStudy} path="/CaseStudy"></Route>
        <Route component={About} path="/About"></Route>
        <Route component={Contact} path="/Contact"></Route>
        <Route component={Blog} path="/Blog"></Route>
        <Route component={BlogPost} path="/BlogPost"></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
