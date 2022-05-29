import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom";
import NavBar from "./components/navBar";
import Footer from "./components/footer";
import Home from "./components/home";
import Securities from "./components/securities"

function App() {
  return (
    ReactDOM.render(
      <BrowserRouter>
        <NavBar />
        <React.Fragment>
          <Routes>
            <Route exact path="/" element={<Home />} />
          </Routes>
        </React.Fragment>
        <Securities/>
        <Footer />
      </BrowserRouter>,
      document.getElementById("root")
    )
  );
}

export default App;
