import { Route, Routes } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import Nav from './Components/Navbar';
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import About from "./Components/About";
import Resume from "./Components/Resume";
import Project from "./Components/Projects";
import MoveToTop from "./Components/MoveToTop";
import Lottie from  "lottie-react";
import nightsky from "./LottieFiles/night-sky.json";
import HashLoader from "react-spinners/HashLoader";
import LoaderSpinner from "./LottieFiles/loaderSpinner.json"

function App() {
  const[Loading,SetLoading]=useState(true);
  const lottieRef = useRef();

  useEffect(()=>{
    SetLoading(true)

    setTimeout(()=>{
    SetLoading(false)}
    ,1900);
    if (lottieRef.current) {
      lottieRef.current.setSpeed(2); // 2x speed
    }
  },[])  
  
  return (
    <>
      {Loading ? (
      <div className="loader"> 
        <Lottie 
          lottieRef={lottieRef}
          animationData={LoaderSpinner} 
          loop={true} 
          style={{ width: 120, height: 120 }} 
          speed={2}
        />
      </div>
      ):(
      <div>
      
      <Lottie className="bg" animationData={nightsky} loop={true} />  
      <Lottie className="bgtwo" animationData={nightsky} loop={true} />   
      <Lottie className="bgtemp" animationData={nightsky} loop={true} /> 

      <Nav/>
      <MoveToTop/>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/About" element={<About/>}/>
        <Route path="/Project" element={<Project/>}/>
        <Route path="/Resume" element={<Resume/>}/>
      </Routes>
      
      <Footer/>
      </div>
      )}  
    </>
  );
}

export default App;
