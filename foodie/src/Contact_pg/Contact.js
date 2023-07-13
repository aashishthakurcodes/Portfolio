import React from "react";
import img1 from "./imgs/logo-tadb.png";
import img2 from "./imgs/logo-tcdb.png";
import img3 from "./imgs/logo-tsdb.png";
import { Link } from "react-router-dom";
import "./Contact.css"

const Contact = () => {
  return (
    <div>
      <div  className="container_contact" >
      <div className="contactus">
        <h1>Contact Us..</h1>

        <h2>Email: thedatadb@gmail.com</h2>
        <h3 className="paradata" >
          TheMealDB was built in 2016 to provide a free data source api for
          recipes online in the hope that developers would build applications
          and cool projects ontop of it. TheMealDB originated on the Kodi forums
          as a way to browse recpies on your TV..
        </h3>
        <div className="othersites">
          <h3>Other Related Sites</h3>
          <Link to={"https://www.theaudiodb.com/"}>
            <img src={img1} alt="other" />
          </Link>

          <Link to={"https://www.thecocktaildb.com/"}>
            <img src={img2} alt="other" />
          </Link>
          <Link to={"https://www.thesportsdb.com/"}>
            <img src={img3} alt="other" />
          </Link>
        </div>
      </div>
      </div>

      <footer>
        <div>
        <button className="btn">
            <Link to={"https://www.facebook.com/codek.tv/posts/reactjs-meals-app-react-hooks-react-router-contextapi-themealdb-apireact-reactjs/5493431184057501/"}>
            <i class="fab fa-facebook-f"></i></Link>
          </button>
          <button className="btn">
            <Link to={"https://www.youtube.com/watch?v=EGx1ywZLGCA"}>
            <i class="fab fa-youtube"></i></Link>
          </button>
          <button className="btn">
            <Link to={"https://www.instagram.com/themeals_ib/?hl=en"}>
            <i class="fab fa-instagram"></i>
            </Link>
          </button>
          <button className="btn">
            <Link to={"https://twitter.com/Insharamin/status/1431600899214872586"}>
            <i class="fab fa-twitter"></i>
            </Link>
          </button>

          <div>
            © 2023 Copyright:
            <a className="text-white" href="https://themealdb.com/">
              themealdb.com
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
