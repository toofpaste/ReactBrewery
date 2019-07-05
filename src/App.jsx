import React from 'react';
import { Switch, Route } from 'react-router-dom';
import KegList from './components/kegs/KegList';
import Home from './components/Home/Home';
import AddKeg from './components/kegs/AddKeg';
import EditKeg from './components/kegs/EditKegs';
import NavBar from './components/NavBar/NavBar';

function App() {

  return (
    <div>
      <style jsx>{`
        background-color: #deb887;
        background-size: 200%;
        padding-bottom: 100%;
      `}</style>
        <NavBar/>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/keglist' component={KegList}/>
        <Route path='/newkeg' component={AddKeg}/>
        <Route path='/editkeg' component={EditKeg}/>
      </Switch>
    </div>
  );
}

export default App;
