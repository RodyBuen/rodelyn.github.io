import "./Experience.css";
import Navbar from "./Navbar";
import rody9 from "./img/rody9.jpeg"
import rody4 from "./img/rody4.jpeg"
import rody12 from "./img/rody12.jpeg"
import rody11 from "./img/rody11.jpeg"
import rody10 from "./img/rody10.jpeg"
import rody1 from "./img/rody1.jpeg"
import rody13 from "./img/rody13.jpeg"
import rody22 from "./img/rody22.JPG"
import rody14 from "./img/rody14.JPG"
import rody5 from "./img/rody5.jpeg"
import rody8 from "./img/rody8.JPG"


const Experience = () => {
  return (
    <>
      <Navbar />
      <div id="experience-info" className="">
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
                    <li></li>
                    <li></li>
            </ul>
        <div className="container-fluid mt-5 bg-secondary bg-gradient">
          <div className="row">
            <div className="col">
              <h1 className="fw-bold display-1 text-center mt-5 pt-5">
                Experience Page
              </h1>
            </div>
          </div>
        </div>
      </div>

     <div className="exp">
      <div className="container">
        <hr/>
        <div className="row mb-5">
          <h2 className="fw-bold display-4 text-center">Internship Program</h2>
          <hr/>
          <div className="col-lg-6 text-center">
            <img className="one" src={rody9} />
            <h4 >Photo Manipulation</h4>
          </div>
          <div className="col-lg-6">
            <img className="one" src={rody4} />
            <h4 >Photo Manipulation </h4>
          </div>
          <div className="col-lg-6">
            <img className="one" src={rody12} />
            <h4>Photo Manipulation </h4>
          </div>
          <div className="col-lg-6">
            <img className="one" src={rody11} />
            <h4 >Photo Manipulation </h4>
          </div>
          <div className="col-lg-6">
            <img className="one" src={rody10} />
            <h4 >Photo Manipulation </h4>
          </div>
          <div className="col-lg-6">
            <img className="one" src={rody1} />
            <h4 >Photo Manipulation </h4>
          </div>
        </div>
        <hr />
        <div className="row mb-5">
          <h3 className="fw-bold display-4 text-center">Achievements</h3>
          <hr/>
          <div className="col-lg-6">
            <img className="one" src={rody13} />
            <h4> Internship Certification </h4>
          </div>
          <div className="col-lg-6">
            <img className="one" src={rody22} />
            <h4 >2nd Place </h4>
          </div>
          <div className="col-lg-6">
            <img className="one" src={rody14} />
            <h4 >2nd Place </h4>
          </div>
          <div className="col-lg-6">
            <img className="one" src={rody5} />
            <h4>BSIT 3rd Student Colloquium 2024</h4>
          </div>
          <div className="col-lg-6">
            <img className="one" src={rody8} />
            <h4>Schedule for BSIT 3rd Student Colloquium 2024</h4>
          </div>
        </div>
      </div>
     </div>

           
    </>
  );
};

export default Experience;


