import React from "react";
import Header from "../src/Components/Header/Header";
import Container from "./Container/Container";
import Footer from "./Footer/Footer";
import SignUp from "./SignUp/SignUp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./SignUp/Login";
import { Provider } from "react-redux";
import reduxStore from "./Utilis/reactStore";
import Cart from "./Utilis/Cart";


function App() {
  return (
    <Router> 
      <div className="App">
      <Provider store={reduxStore}>
        <Header />
        <Routes>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/" element={<Container />} />
          
          <Route exact path="/createuser" element={<SignUp/>} />
          <Route path="/cart" element={<Cart/>} />
          {/* <Route exact path="/createuser" element={<SignUp/>} /> */}
        </Routes>
        <Footer />
        </Provider>
      </div>
    </Router>
  );
}

export default App;
