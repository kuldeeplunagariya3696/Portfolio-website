import React from 'react';
import ProjectBox from './ProjectBox';
import ScreenTimeAnalysis from '../images/ScreenTimeAnalysisProject.png';
import ResumeBuilder from '../images/ResumeBuilder.png';
import CafeManagementSystem from '../images/CafeManagementSystem.png';
import ReactDataDashboard from '../images/ReactDataDashboard.png';

const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
        <ProjectBox projectPhoto={ScreenTimeAnalysis} projectName="ScreenTimeAnalysis" />
        <ProjectBox projectPhoto={ResumeBuilder} projectName="ResumeBuilder" />
        <ProjectBox projectPhoto={CafeManagementSystem} projectName="CafeManagement" />
        <ProjectBox projectPhoto={ReactDataDashboard} projectName="ReactDataDashboard" />
      </div>

    </div>
  )
}

export default Projects