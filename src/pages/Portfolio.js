import "./Portfolio.css";
import Navbar from "./Navbar";
import calcuImage from "./img/calcu.png"
import rody6 from "./img/rody6.jpg"
import rody7 from "./img/rody7.JPG"
import rody23 from "./img/rody23.PNG"
const Portfolio = () => {
  return (
    <>
      <Navbar />
      <div id="portfolio-info" className="bg-none">
      <ul class="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>

        <div className="container-fluid mt-5">
          <div className="row">
            <div className="col">
              <h1 className="fw-bold display-1 text-center mt-5 pt-5">
                Portfolio 
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div id="portfolio">
        <div className="container">
          <div className="row mt-5">
            <h2>Projects</h2>
            <hr />
          <div className="col">
          <img className="one" src={calcuImage} />
          <h4 className="mt-5">Calculator Project</h4>
          </div>
          <div className="col">
          <img className="two" src={rody6} />
          <h4 className="mt-5">Fertilizer Sprayer with Mobile App (prototype)</h4>
          </div>
          <div className="col">
          <img className="three" src={rody7} />
          <h4 className="mt-5">Fertilizer Sprayer with Mobile App (application)</h4>
          </div>
          <div className="col">
          <img className="three" src={rody23} />
          <h4 className="mt-5">PSIT01 Project</h4>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
