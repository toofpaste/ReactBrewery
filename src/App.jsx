import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import KegList from './components/kegs/KegList';
import Home from './components/Home/Home';
import AddKeg from './components/kegs/AddKeg';
import EditKeg from './components/kegs/EditKegs';
import NavBar from './components/NavBar/NavBar';



class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            masterYourKegList: []
        };
        this.handleAddingNewKegToList = this.handleAddingNewKegToList.bind(this);
    }
    handleAddingNewKegToList(newKeg){

        const newMasterYourKegList = this.state.masterYourKegList.slice();
        newMasterYourKegList.push(newKeg);
        this.setState({masterYourKegList: newMasterYourKegList})

    }
    render() {
        return (
            <div>
                <style jsx>{`
      height: 100vh;
        background-color: #38588c;
  background-image: repeating-linear-gradient(-65deg, transparent, transparent 50px, rgba(255,255,255,.1) 50px, rgba(255,255,255,.1) 100px);
        background-size: 200%;
        padding-bottom: 100%;
        width: 100vw;
        overflow-x: hidden;
        overflow-y: hidden;
        .content{

            position: fixed;
        }
        .switchContent {
        position: absolute;
    width: 50rem;
    height: auto;
    left: 40rem;
    top: 32rem;
        z-index: 0;
        background-image: none;
        background-color: transparent;
        }
      `}</style>

                <div className='content'>
                    <NavBar/>
                </div>
                <Switch>
                    <div className='switchContent'>
                        <Route exact path='/' component={Home}/>
                        <Route path='/keglist' component={KegList}/>
                        <Route path='/newkeg' component={AddKeg}/>
                        <Route path='/editkeg' component={EditKeg}/>
                    </div>
                </Switch>
            </div>
        );
    }



}
export default App;
