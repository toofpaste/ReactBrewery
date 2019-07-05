import React from 'react';
import { Switch, Route } from 'react-router-dom';
import KegList from './components/kegs/KegList';
import Home from './components/Home/Home';

function App() {

  return (
    <div>
      <style jsx>{`
        background-color: #deb887;
        background-size: 200%;
        padding-bottom: 100%;
      `}</style>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/keglist' component={KegList}/>
      </Switch>
    </div>
  );
}

export default App;
