import React from "react";
import { CTA, Feature, Navbar, Article, Brand } from "./components";
import {
  Blog,
  Features,
  Footer,
  Header,
  Possibility,
  WhatGPT3,
} from "./containers";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Blog />
      <Possibility />
      <Footer />
      <CTA />
    </div>
  );
};

export default App;
