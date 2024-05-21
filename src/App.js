import "./App.css";
import React, { useState } from "react";
import NavBars from "./components/NavBars";
import News from "./components/News";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const  App =()=> {
  const pageSize = 9;
  const apikey =ProcessingInstruction.REACT_APP_NEWS_API

  const [progress ,setProgress]= useState(0)
  // setProgress=(progress)=>{
  //   setState({progress:progress})
  // }
 
    return (
      <BrowserRouter>
        <div>
          <NavBars />
          <LoadingBar
        color='#f11946'
        height={3}
        progress={progress}
       
      />
          <Routes>
            <Route
              path="/"
              element={
                <News setProgress={setProgress} apikey ={apikey} 
                  key=""
                  pageSize={pageSize}
                  country="us"
                  category=""
                />
              } 
            />
            <Route
              path="/business"
              element={
                <News setProgress={setProgress} apikey ={apikey} 
                  key="business"
                  pageSize={pageSize}
                  country="us"
                  category="business"
                />
              }
            />
            <Route
              path="/entertainment"
              element={
                <News setProgress={setProgress} apikey ={apikey} 
                  key="entertainment"
                  pageSize={pageSize}
                  country="us"
                  category="entertainment"
                />
              }
            />
            <Route
              path="/general"
              element={
                <News setProgress={setProgress} apikey ={apikey} 
                  key="general"
                  pageSize={pageSize}
                  country="us"
                  category="general"
                />
              }
            />
            <Route
              path="/health"
              element={
                <News setProgress={setProgress} apikey ={apikey} 
                  key="health"
                  pageSize={pageSize}
                  country="us"
                  category="health"
                />
              }
            />
            <Route
              path="/science"
              element={
                <News setProgress={setProgress} apikey ={apikey} 
                  key="science"
                  pageSize={pageSize}
                  country="us"
                  category="science"
                />
              }
            />
            <Route
              path="/sports"
              element={
                <News setProgress={setProgress} apikey ={apikey} 
                  key="sports"
                  pageSize={pageSize}
                  country="us"
                  category="sports"
                />
              }
            />
            <Route
              path="/technology"
              element={
                <News setProgress={setProgress} apikey ={apikey} 
                  key="technology"
                  pageSize={pageSize}
                  country="us"
                  category="technology"
                />
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    );
}
export default App;