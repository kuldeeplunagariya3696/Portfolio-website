import React from "react";
import Lottie from "lottie-react";
import SpaceBoy from "../LottieFiles/SpaceBoy.json";
import coding from "../LottieFiles/coding.json";
import Typed from "./Typed.js";
import Tilt from "react-parallax-tilt";
import Avatar from "../images/Avatar.png";
import { CiCoffeeCup } from "react-icons/ci";

const Home = () => {
  return (
    <div>
      <div className="HomePage">
        <div className="HomeText">
          <h1>Hi There!</h1>
          <h1>
            I'M <b>KULDEEP LUNAGARIYA</b>
          </h1>
          <Typed />
        </div>

        <Lottie className="illustration" animationData={SpaceBoy} loop={true} />
      </div>

      <div className="AboutPage">
        <div className="AboutText">
          <h1 className="AboutTextHeading">
            Brief <b>introduction</b>
          </h1>
          <p>
            I find joy in transforming initial concepts into meaningful digital
            experiences that make a difference. I'm passionate about taking on
            challenges that help me grow as a developer and lead to work I can
            genuinely take pride in.
            <br />
            <br />
            I'm well-versed in <b>JavaScript</b>, have a basic understanding of{" "}
            <b>Python</b>, and have worked on <b>full-stack</b> projects using
            modern technologies. I'm actively looking to sharpen my full-stack
            skills and also want to explore the <b>data domain</b> further, as I have
            hands-on experience working with <b>SQL</b> in real-world scenarios.
          </p>
        </div>
        <Tilt>
          {/* <img className="Avatar" src={Avatar} alt="" /> */}
          <Lottie className="illustration" animationData={coding} loop={true} />
        </Tilt>
      </div>
    </div>
  );
};

export default Home;
