import React from 'react'; 
import {FaReact, FaPython, FaGitAlt, FaGithub, FaNpm, FaBootstrap, FaSourcetree } from "react-icons/fa";
import {DiNodejs, DiJavascript1, DiMsqlServer } from "react-icons/di";
import {SiHtml5, SiCss3, SiDotnet, SiPostman} from "react-icons/si";

const Skills = ({skill}) => {
    const icon = {
        Postman: <SiPostman/>,
        React: <FaReact/>,
        Sql: <DiMsqlServer/>,
        Sourcetree: <FaSourcetree />,
        Html: <SiHtml5 />,
        Css: <SiCss3 />,
        Dotnet: <SiDotnet />,
        Python: <FaPython />,
        Javascript: <DiJavascript1/>,
        Node : <DiNodejs/>,
        // Express : <SiExpress/>,
        // MongoDb : <SiMongodb/>,
        Git : <FaGitAlt/>,
        Github : <FaGithub/>,
        Npm : <FaNpm/>,
        Bootstrap: <FaBootstrap/>,
    }
    
  return (
    <div title={skill} className='SkillBox'>
      {icon[skill]}
    </div>
  )
}

export default Skills
