import React from "react";
import Skills from "./Skills.js";
import Tilt from "react-parallax-tilt";
import Lottie from "lottie-react";
import Coder from "../LottieFiles/coder.json";

const About = () => {
  return (
    <>
      <div className="AboutPage">
        <div className="AboutText">
          <h1 className="AboutTextHeading">
            Get to <b>know</b> me!
          </h1>
          <p>
            Hi, my name is <b>Kuldeep Lunagariya</b> and I am from Gujarat,
            India. I'm a <b>Software Developer</b> and a final year college
            student pursuing <b>BTech in Computer Engineering</b>.
            <br />
            <br />I have a total of <b>
              1.2 years of experience
            </b>{" "}
            with Webosphere Technolabs, where I initially joined as a{" "}
            <b>Software Professional Intern</b>. Based on my performance, I
            received a <b>Pre-Placement Offer (PPO)</b> and have been working as
            a <b>Software Professional Associate</b> for the past <b>6 months</b>,
            balancing both work and academics during my third year.
            <br />
            <br />I am <b>open</b> to new collaborations or work where I can
            contribute and grow.   Feel free to connect — links are in the footer.
          </p>
        </div>

        <div>
          <Tilt>
            <Lottie
              className="illustration"
              animationData={Coder}
              loop={true}
            />
          </Tilt>
        </div>
      </div>

      <h1 className="SkillsHeading">Professional Skillset</h1>
      <div className="skills">
        <Skills skill="Html" />
        <Skills skill="Css" />
        <Skills skill="Javascript" />
        <Skills skill="Bootstrap" />
        <Skills skill="React" />
        <Skills skill="Npm" />
        <Skills skill="Sql" />
        <Skills skill="Dotnet" />
        <Skills skill="Python" />
        <Skills skill="Git" />
        <Skills skill="Sourcetree" />
        <Skills skill="Postman" />
      </div>
    </>
  );
};

export default About;
