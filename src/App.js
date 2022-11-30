import "./App.css";
import React from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Nav } from "./components/Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <Footer />
    </div>
  );
}

export default App;
