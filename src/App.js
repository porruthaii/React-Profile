import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'

import Home from './contents/Home'
import About from './contents/About'
import Education from './contents/Education'
import Skills from './contents/Skills'
import GPA from './contents/GPA'
import Other from './contents/Other';

import {BrowserRouter as Router,Route} from 'react-router-dom';
import GPA2560 from './contents/GPA/GPA2560';
import GPA2561 from './contents/GPA/GPA2561';
import GPA2562 from './contents/GPA/GPA2562';
import GPA2563 from './contents/GPA/GPA2563';
import Computer from './contents/GPA/Computer';

import TecSkills from './contents/Skills/TecSkills';
import SoftSkills from './contents/Skills/SoftSkills';
import Project from './contents/Skills/Project';
function App() {
  return (
    <Router>
      <div className="App">
      <Navbar/>
      <Route>
         <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/about">
            <About />
          </Route>

          <Route exact path="/education">
           <Education />
          </Route>
          <Route exact path="/Other">
           <Other />
          </Route>
</Route>
       
        <div className ="GPAdiv">
        <Route exact path="/Skills">
              <Skills />
              <TecSkills/>
         </Route>

        <Route exact path="/GPA">
          <GPA />
          <GPA2560/>

        </Route>
        <Route  exact path="/GPA/GPA2560">
              <GPA />
              <GPA2560/>
        </Route>
        <Route  exact path="/GPA/GPA2561">
              <GPA />
              <GPA2561/>
        </Route>
        <Route  exact path="/GPA/GPA2562">
              <GPA />
              <GPA2562/>
        </Route>
        <Route  exact path="/GPA/GPA2563">
              <GPA />
              <GPA2563/>
        </Route>
      
        <Route  exact path="/GPA/GPAComputer">
              <GPA />
              <Computer/>
        </Route>
        <Route  exact path="/TecSkills">
              <Skills />
              <TecSkills/>
        </Route>
        <Route  exact path="/SoftSkills">
              <Skills />
              <SoftSkills/>
        </Route>
        <Route  exact path="/Project">
              <Skills />
              <Project/>
        </Route>
        </div>
      </div>
    </Router>
  );
}

export default App;
