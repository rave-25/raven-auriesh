import React from "react";
import { Container, Grid } from "@material-ui/core";

import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Footer from "./components/Footer/Footer";
import Portfolio from "./pages/Portfolio/Portfolio";
import Experiences from "./pages/Resume/Experiences";
import Contact from "./pages/Contact/Contact";
import Blog from "./pages/Blog/Blog";
import About from "./pages/About/About";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <Container className={"top_margin"}>
      <Grid container spacing={7}>
        <Grid item xs={12} sm={12} md={4} lg={3}>
          <Profile />
          <About />
        </Grid>
        <Grid item xs>
          <Router>
            <Header />
            <div className="main_content container_shadow">
              <Switch>
                <Route path="/About">
                  <About />
                </Route>
                <Route path="/Experiences">
                  <Experiences />
                </Route>
                <Route path="/Portfolio">
                  <Portfolio />
                </Route>
                <Route path="/Blog">
                  <Blog />
                </Route>
                <Route path="/Contact">
                  <Contact />
                </Route>
              </Switch>
            </div>
          </Router>
          <Footer />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
