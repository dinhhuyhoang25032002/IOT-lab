
import { Outlet } from 'react-router-dom';
import './App.scss';
import React from "react";
import Header from "./component/Header/Header"

const App = (props) => {
  return (
    <div className="container-app">
      <div className='header-container'>
        <Header />
      </div>
      <div className='main-container'>
        <div className='navigator-container'>

        </div>
        <div className='content-container'>
          <Outlet />
        </div>
      </div>


    </div>
  );
}

export default App;
