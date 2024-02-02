
import React, { useState } from 'react';

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link,
//   BrowserRouter
// } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';

import Textbar from './components/Textbar';
import Note from './components/Note';
// import About from './components/About';








function App() {
  const [mode, setMode] = useState("light"); //whether dark mode is enabled or not
  const [alert, setalert] = useState(null);

  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null)
    }, 3000);


  }

  const togglemode = () => {
    if(mode === "light"){
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      showalert("dark mode has been enable")
      // setInterval(() => {
      //   document.title = "win 2000 crore"
      // }, 2000);
      // setInterval(() => {
      //   document.title = "download winzo app"
      // }, 1500);
      
  
    }
    else{
      setMode("light");
      document.body.style.backgroundColor = "white";
      showalert("light mode has been enable")
    }
  }
  const redcol = () => {
    if(mode === 'dark'){
    setMode("dark")
    document.body.style.backgroundColor = "red";
    showalert("red color has been enable")

  }
  else{
    setMode("red");
    document.body.style.backgroundColor = "white";
  }
}
  return (

    <>
    {/* <BrowserRouter> */}
    
    <Navbar title = "Navbar"  log = "LogIn" menu ="About Us" mode={mode}  togglemode={togglemode} redcol={redcol}/>
   <Note alert ={alert}/>
    <div className="container my-5">
    <Textbar heading="Enter the text" showalert={showalert} mode={mode} />
    
    {/* <Routes>
          <Route exact path="/about" element={  <About />}/>
           
          <Route exact path="/" element={<Textbar heading="Enter the text" showalert={showalert} mode={mode} />}/>
         
        </Routes> */}
 

   {/* <About mode={mode} /> */}
    </div> 

   {/* </BrowserRouter> */}
    </> 
   
  );
};

export default App;
