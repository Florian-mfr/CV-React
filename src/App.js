import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { AnimatePresence } from "framer-motion"

import Home from './pages/Home';
import Contact from './pages/Contact';
import Knowledges from './pages/Knowledges';
import Portfolio from './pages/Portfolio';

const App = () => {
  return (
    <div>
      <AnimatePresence exitBeforeEnter>
        <BrowserRouter>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/competences' component={Knowledges} />
            <Route path='/portfolio' component={Portfolio} />
            <Route path='/contact' component={Contact} />
            <Route component={Home} />
          </Switch>
        </BrowserRouter>
      </AnimatePresence>
    </div >
  );
};

export default App;
