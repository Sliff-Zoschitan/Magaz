import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Button, ListGroup } from 'react-bootstrap';
import Header from './Header'

import Home from './Home'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Ducks from './Ducks';
import Korzina from './Korzina';
import LK from './LK';
import React, { useState } from 'react';

function App() {
  const [p, setP] = useState(0);
  function addP() {
    setP(p + 1);
  }
  return (
    <div className="App">
      <Header p ={p}></Header>
      
      <Router>
        <Switch>
          <Route exact path='/' render={()=><Home func={addP}/>} />
          <Route exact path='/ducks' render={() => <Ducks func={addP} />} />
          <Route exact path='/korzina' component={Korzina} />
          <Route exact path='/lk' component={LK} />
          
        </Switch>
      </Router>
      
      
    </div>
  );
}

export default App;
