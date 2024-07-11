import "./About.css";
import Navbar from "./Navbar";
import myImage from "./img/rody20.jpg"

const About = () => {
  return (
    <>
      <Navbar />
      <div id="about-info" className="">
        <div className="container-fluid mt-5">
          <div className="row">
            <div className="col">
              <h1 className="fw-bold display-1 text-center mt-5 pt-5">
                ABOUT PAGE 
              </h1>
            </div>
          </div>
        </div>
      </div>
      <body>

</body>
      <div id="about">
        <div className="container">
          <div className="col">
            <div className="card shadow mt-5 p-5">
              <div className="row">
              <div className="col-lg-4">
              <center><img src={myImage} /></center>
              </div>
              <div className="col-lg-8">
                <div className="card shadow mb-3 p-3">
                <h4 className="text-dark about-me">About Me</h4>
              <p> My name is Rodelyn P. Buenviaje, and I am 24 years old. I am a Bachelor of Science in 
                Information Technology (BSIT) student at Central Philippines State University (CPSU). 
                I obtained the Visual Graphic Design NC III certification in 2019.. I love watching K-dramas. I took my internship 
                at Philsigns Creative Advertising. We got 2nd place in the BSIT 3rd Student Colloquium 2024." </p>
              <p> </p>
                </div>
                <div className="card shadow p-3">
                <h4 className="text-dark about-me">Academic Achievements </h4>
              <p> Primary: Linao Elementary School S.Y:2013 <br /> Secondary: <br /> Junior High School: Talubangi National High School-Linao 
              Extension S.Y: 2016 <br />Senior High School: Fortress College, Inc.  S.Y:2019 <br />Tretiary: Central 
              Philippines State University (CPSU) SY: 2024</p>
              <p> </p>
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

export default About;
