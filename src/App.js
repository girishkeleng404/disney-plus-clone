import React from "react";
import Detail from "./components/Detail";

// import { Counter } from './features/counter/Counter';
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* { <Router>
        <Header />
        <Routes>
          <Route path="/detail">
            <Detail />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Routes>
      </Router> } */}

      {/* <nav>
        <ul>
          <li>
            <Link to="/"> Home </Link>
            </li>
          <li>
            <Link to="/Movies"> Movies</Link>
            </li>
        </ul>
      </nav> */}
      <Header />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Header />} />
        <Route path="/Detail" element={<Detail />} />
        <Route path="/Login" element={<Login />} />
      </Routes>

      {/* <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Movies">Movies</Link>
          </li>
        </ul>
      </nav>
      <Route exact path="/" component={<Home/>} />
      <Route path="/Movies" component={<Header/>} />
    </BrowserRouter> */}
    </div>
  );
}

export default App;
