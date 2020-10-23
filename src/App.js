import React, { useEffect, useState } from "react";
import Navbar from "./components/global/Navbar";
import Footer from "./components/global/Footer";
import Home from "./pages/Home";
import Subjects from "./pages/Subjects";
import Universities from "./pages/Universities";
import Teachers from "./pages/Teachers";
import Contact from "./pages/Contact";
import Registration from "./pages/Registration";
import TestProcess from "./pages/TestProcess";
import UserSettings from "./pages/UserSettings";
import Login from "./pages/Login";
import Centers from "./pages/Centers";

// css
import "./styles/main.css";
// routing
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import StResultsContextProvider from "./contexts/StResultsContext";
import TestResults from "./pages/TestResults";
import AccessTokenContextProvider from "./contexts/accessTokenContext";

function App() {
  return (
    <Router>
      <div className='App'>
        <StResultsContextProvider>
          <AccessTokenContextProvider>
            <Navbar />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/subjects' component={Subjects} />
              <Route exact path='/universities' component={Universities} />
              <Route exact path='/teachers' component={Teachers} />
              <Route exact path='/centers' component={Centers} />
              <Route exact path='/contact' component={Contact} />
              <Route exact path='/registration' component={Registration} />
              <Route exact path='/test' component={TestProcess} />
              <Route exact path='/settings' component={UserSettings} />
              <Route exact path='/results' component={TestResults} />
              <Route exact path='/login' component={Login} />
            </Switch>
            <Footer />
          </AccessTokenContextProvider>
        </StResultsContextProvider>
      </div>
    </Router>
  );
}

export default App;
