import React from "react";
import { FaGithub } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";

const ProjectBox = ({ projectPhoto, projectName }) => {
  const desc = {
    
    ScreenTimeAnalysisDesc: "The Screen Time Analysis project involves web scraping app usage data, transforming it into a structured DataFrame, training a linear regression model, and visualizing insights with clean, interactive charts.",
    ScreenTimeAnalysisGithub: "https://github.com/kuldeeplunagariya3696/screen-time-analysis",
    ScreenTimeAnalysisWebsite: "",

    ResumeBuilderDesc: "A responsive Resume Builder web application built with React that allows users to create, preview, and download professional resumes with customizable sections and real-time editing features.",
    ResumeBuilderGithub: "https://github.com/kuldeeplunagariya3696/resume-builder",
    ResumeBuilderWebsite: "",

    CafeManagementDesc: "A Python-based Cafe Management System that simulates user login, coffee ordering, sales analysis, and feedback features with a user-friendly console interface and real-time coin handling logic.",
    CafeManagementGithub: "https://github.com/kuldeeplunagariya3696/Cafe-Management-System",
    CafeManagementWebsite: "",

    ReactDataDashboardDesc: "A React-based data dashboard I built for a live production project, featuring real-time insights, interactive charts using chart libraries, responsive design with Material UI, and dynamic components to visualize key metrics, supporting business decision-making in a client-facing environment.",
    ReactDataDashboardGithub: "",
    ReactDataDashboardWebsite: "",
  };

  const githubURL = desc[projectName + "Github"];
  const websiteURL = desc[projectName + "Website"];

  let show = "";
  if (desc[projectName + "Github"] === "") {
    show = "none";
  }

  return (
    <div className="projectBox">
      <img className="projectPhoto" src={projectPhoto} alt="Project display" />
      <div>
        <br />
        <h3>{projectName}</h3>
        <br />
        {desc[projectName + "Desc"]}
        <br />

        {githubURL && (
          <a href={githubURL} target="_blank">
            <button className="projectbtn">
              <FaGithub /> Github
            </button>
          </a>
        )}

        {websiteURL && (
          <a href={websiteURL} target="_blank">
            <button className="projectbtn">
              <CgFileDocument /> Demo
            </button>
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectBox;
