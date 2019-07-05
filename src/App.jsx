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
        width: 100vw;
        overflow-x: hidden;
        .content{
            background-color: #f5e3b0;
            border: 1px solid black;
            height: 8vh;
            width: 51vw;
            margin-left: 44%;
            margin-top: -110vh;
            border-radius: 25px;
            
        }
      `}</style>
        <NavBar/>
        <div className='content'>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/keglist' component={KegList}/>
        <Route path='/newkeg' component={AddKeg}/>
        <Route path='/editkeg' component={EditKeg}/>
      </Switch>
        </div>
    </div>
  );
}

export default App;
