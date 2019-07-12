import React from 'react';
import {Switch, Route } from 'react-router-dom';
import KegList from './components/kegs/KegList';
import Home from './components/Home/Home';
import NewKegControl from './components/kegs/NewKegControl';
import EditKeg from './components/kegs/EditKegs';
import NavBar from './components/NavBar/NavBar';
import EditKegControl from './components/kegs/EditKegsControl';



class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            masterYourKegList: [{
                name: 'Lagunitas',
                type: 'IPA',
                price: '5',
                alc: '8.3',
                amount: '90'
            },
                {
                    name: 'Budweiser',
                    type: 'Pale Ale',
                    price: '3',
                    alc: '5.6',
                    amount: '45'
                },
                {
                    name: 'Kraft Mac n Cheese Beer',
                    type: 'Pilsner',
                    price: '8',
                    alc: '14.6',
                    amount: '100'
                },
                {
                    name: 'Play Dough Flavor',
                    type: 'Brown Ale',
                    price: '4',
                    alc: '2.6',
                    amount: '8'
                },
                {
                    name: 'Dogs R Cute',
                    type: 'Pilsner',
                    price: '2',
                    alc: '1.6',
                    amount: '111'
                },
                {
                    name: 'FortNite',
                    type: 'IPA',
                    price: '3',
                    alc: '2.6',
                    amount: '100'
                },
                {
                    name: 'Bud-Light',
                    type: 'Wheat',
                    price: '8',
                    alc: '11.6',
                    amount: '100'
                },  {
                    name: 'Didly Did It Again',
                    type: 'Pale Ale',
                    price: '6',
                    alc: '19.6',
                    amount: '10'
                },  {
                    name: 'Whatever Britney Is Getting',
                    type: 'Brown Ale',
                    price: '12',
                    alc: '13.2',
                    amount: '80'
                },  {
                    name: 'IDK',
                    type: 'All Mixed',
                    price: '95',
                    alc: '1.6',
                    amount:'1'
                },  {
                    name: 'French Fries',
                    type: 'IPA',
                    price: '2',
                    alc: '1.6',
                    amount: '100'
                },  {
                    name: 'Water',
                    type: 'Double IPA',
                    price: '9',
                    alc: '10.2',
                    amount: '83'
                },  {
                    name: 'Moms Couch',
                    type: 'Cushions',
                    price: '3',
                    alc: '24.6',
                    amount: '92'
                },  {
                    name: 'Burnt Hair',
                    type: 'Pilsner',
                    price: '2',
                    alc: '0.6',
                    amount: '73'
                },  {
                    name: 'Obama',
                    type: 'Pilsner',
                    price: '9',
                    alc: '4.6',
                    amount: '46'
                },  {
                    name: 'FireWorks',
                    type: 'Explosive',
                    price: '1',
                    alc: '99.9',
                    amount: '8'
                }]
        };
        this.handleEditingKeg = this.handleEditingKeg.bind(this);
        this.handleAddingNewKegToList = this.handleAddingNewKegToList.bind(this);

    }
    handleEditingKeg(kegName){
        let indexName = 0;


        for(let i = 0; i < this.state.masterYourKegList.length; i++){
            if(this.state.masterYourKegList[i].name === kegName.name){
                indexName = i;
                i = 1000;
                break;
            }
        }
        this.state.masterYourKegList[indexName].name = kegName.newName;
        this.state.masterYourKegList[indexName].type = kegName.newType;
        this.state.masterYourKegList[indexName].price = kegName.newPrice;
        this.state.masterYourKegList[indexName].alc = kegName.newAlc;
        this.state.masterYourKegList[indexName].amount = kegName.newAmount;
        this.setState({masterYourKegList: this.state.masterYourKegList});
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
                        <Route path='/keglist'render={() => <KegList yourKegList={this.state.masterYourKegList}/>}/>
                        <Route path='/newkeg' render={()=><NewKegControl onNewKegCreation={this.handleAddingNewKegToList}/>} />
                        <Route path='/editkeg' render={() => <EditKegControl onEditKeg={this.handleEditingKeg}/>}/>
                    </div>
                </Switch>
            </div>
        );
    }



}
export default App;
