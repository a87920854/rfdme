import React from 'react';
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import { Switch, Route , useLocation } from "react-router-dom";
import { CSSTransition,  TransitionGroup } from "react-transition-group";
import "./App.less";


function App() {
  const location = useLocation();
  return (  
    <TransitionGroup component={null}>
      <CSSTransition key={location.key} appear={true} timeout={5000} classNames="fade" onEnter={() => {
                        console.log('FIRED!');
                    }} >       
        <Switch location={location}>
          <Route path="/">
              <Home />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route> 
        </Switch>      
      </CSSTransition>
    </TransitionGroup>    
  );
}

export default App;