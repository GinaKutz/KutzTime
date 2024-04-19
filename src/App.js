import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Home from './pages/Home';

const App = () => {
  const [currentSection, setCurrentSection] = useState('About Me');

  return (
    <Router>
      <div className="App">
        <Header currentSection={currentSection} />
        <Switch>
          <Route exact path="/">
            <Home setCurrentSection={setCurrentSection} />
          </Route>
          <Route exact path="/about">
            <AboutMe setCurrentSection={setCurrentSection} />
          </Route>
          <Route exact path="/portfolio">
            <Portfolio setCurrentSection={setCurrentSection} />
          </Route>
          <Route exact path="/contact">
            <Contact setCurrentSection={setCurrentSection} />
          </Route>
          <Route exact path="/resume">
            <Resume setCurrentSection={setCurrentSection} />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
