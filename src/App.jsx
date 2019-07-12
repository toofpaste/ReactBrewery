import React from 'react';
import {Switch, Route } from 'react-router-dom';
import KegList from './components/kegs/KegList';
import Home from './components/Home/Home';
import NewKegControl from './components/kegs/NewKegControl';
import NavBar from './components/NavBar/NavBar';
import EditKegControl from './components/kegs/EditKegsControl';
import beer1 from './components/Assets/beer1.png';
import beer2 from './components/Assets/beer2.png';
import beer3 from './components/Assets/beer3.png';
import beer4 from './components/Assets/beer4.png';
import beer5 from './components/Assets/beer5.png';
import beer6 from './components/Assets/beer6.png';
import beer7 from './components/Assets/beer7.png';
import beer8 from './components/Assets/beer8.png';
import beer9 from './components/Assets/beer3.png';
import beer10 from './components/Assets/beer10.png';
import beer11 from './components/Assets/beer11.png';
import beer12 from './components/Assets/beer12.png';
import beer13 from './components/Assets/beer13.png';
import beer14 from './components/Assets/beer14.png';
import beer15 from './components/Assets/beer15.png';
import beer16 from './components/Assets/beer16.png';
import beer17 from './components/Assets/beer17.png';
import beer18 from './components/Assets/beer18.png';
import beer19 from './components/Assets/beer19.png';
import beer20 from './components/Assets/beer20.png';
import beer21 from './components/Assets/beer21.png';
let beerImg = [beer1, beer2, beer3, beer4, beer5, beer6, beer7, beer8, beer9, beer10,
                beer11, beer12, beer13, beer14, beer15, beer16, beer17, beer18, beer19,
                beer20, beer21];


class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            masterYourKegList: [{
                name: 'Lagunitas',
                type: 'IPA',
                price: '5',
                alc: '8.3',
                amount: '90',
                img: beerImg[0]

            },
                {
                    name: 'Budweiser',
                    type: 'Pale Ale',
                    price: '3',
                    alc: '5.6',
                    amount: '45',
                    img: beerImg[1]
                },
                {
                    name: 'Kraft Mac n Cheese Beer',
                    type: 'Pilsner',
                    price: '8',
                    alc: '14.6',
                    amount: '100',
                    img: beerImg[2]
                },
                {
                    name: 'Play Dough Flavor',
                    type: 'Brown Ale',
                    price: '4',
                    alc: '2.6',
                    amount: '8',
                    img: beerImg[3]
                },
                {
                    name: 'Dogs R Cute',
                    type: 'Pilsner',
                    price: '2',
                    alc: '1.6',
                    amount: '111',
                    img: beerImg[4]
                },
                {
                    name: 'FortNite',
                    type: 'IPA',
                    price: '3',
                    alc: '2.6',
                    amount: '100',
                    img: beerImg[5]
                },
                {
                    name: 'Bud-Light',
                    type: 'Wheat',
                    price: '8',
                    alc: '11.6',
                    amount: '100',
                    img: beerImg[6]
                },  {
                    name: 'Didly Did It Again',
                    type: 'Pale Ale',
                    price: '6',
                    alc: '19.6',
                    amount: '10',
                    img: beerImg[7]
                },  {
                    name: 'Whatever Britney Is Getting',
                    type: 'Brown Ale',
                    price: '12',
                    alc: '13.2',
                    amount: '80',
                    img: beerImg[8]
                },  {
                    name: 'IDK',
                    type: 'All Mixed',
                    price: '95',
                    alc: '1.6',
                    amount:'1',
                    img: beerImg[9]
                },  {
                    name: 'French Fries',
                    type: 'IPA',
                    price: '2',
                    alc: '1.6',
                    amount: '100',
                    img: beerImg[10]
                },  {
                    name: 'Water',
                    type: 'Double IPA',
                    price: '9',
                    alc: '10.2',
                    amount: '83',
                    img: beerImg[11]
                },  {
                    name: 'Moms Couch',
                    type: 'Cushions',
                    price: '3',
                    alc: '24.6',
                    amount: '92',
                    img: beerImg[12]
                },  {
                    name: 'Burnt Hair',
                    type: 'Pilsner',
                    price: '2',
                    alc: '0.6',
                    amount: '73',
                    img: beerImg[13]
                },  {
                    name: 'Obama',
                    type: 'Pilsner',
                    price: '9',
                    alc: '4.6',
                    amount: '46',
                    img: beerImg[14]
                },  {
                    name: 'FireWorks',
                    type: 'Explosive',
                    price: '1',
                    alc: '99.9',
                    amount: '8',
                    img: beerImg[15]
                }]
        };
        this.handleEditingKeg = this.handleEditingKeg.bind(this);
        this.handleAddingNewKegToList = this.handleAddingNewKegToList.bind(this);

    }
    handleEditingKeg(kegName){
        let indexName = 0;
        let found = false;

        for(let i = 0; i < this.state.masterYourKegList.length; i++){
            if(this.state.masterYourKegList[i].name.toLocaleLowerCase() === kegName.name.toLowerCase()){
                indexName = i;
                found = true;
                i = 1000;
                break;
            }
        }
        if(found) {
            this.state.masterYourKegList[indexName].name = kegName.newName;
            this.state.masterYourKegList[indexName].type = kegName.newType;
            this.state.masterYourKegList[indexName].price = kegName.newPrice;
            this.state.masterYourKegList[indexName].alc = kegName.newAlc;
            this.state.masterYourKegList[indexName].amount = kegName.newAmount;
            this.setState({masterYourKegList: this.state.masterYourKegList});
        }else alert('Beer not found');
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
