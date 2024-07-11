import "./Home.css";
import Navbar from "./Navbar";

import myImage from "./img/rody21.png"

const Home = () => {
  return (
    <>
      <Navbar />



    <div className="wrapper">
      <div className="overlay">
        <div className="container1">

    <div id="home-info" >
     <div class="area" >
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
    </div >
        <div className="container mt-5">
          <div className="row ok">
            <div className="col-lg-6">
                <img src={myImage} />
            </div>
            <div className="col-lg-6 tin">
              <div className="card">
              <h2 className="display-3 text-center text-light pt-5 mb-5">
                Hi <n/> <br/> I'm Rodelyn P. Buenviaje 
              </h2>
              <h4 className=" text-light text-center mt-5">"Visual Graphic Design NC III passer" </h4>
              <center>
              <a href="/about" className="btn shadow mt-5">
                Click here!!
              </a>
              </center>
              </div>
            </div>
          </div>
        </div>
      </div>
          
        </div>
      </div>
    </div>

    </>
  );
};

export default Home;
