import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';
import KegList from './KegList';
const allKeg = [{
  name: 'Lagunitas',
  type: 'IPA',
  price: 5,
  alc: 8.3,
  amount: 90
},
  {
    name: 'Budweiser',
    type: 'Pale Ale',
    price: 3,
    alc: 5.6,
    amount: 45
  },
  {
    name: 'Kraft Mac n Cheese Beer',
    type: 'Pilsner',
    price: 8,
    alc: 14.6,
    amount: 100
  },
  {
    name: 'Play Dough Flavor',
    type: 'Brown Ale',
    price: 4,
    alc: 2.6,
    amount: 8
  },
  {
    name: 'Dogs R Cute',
    type: 'Pilsner',
    price: 2,
    alc: 1.6,
    amount: 111
  },
  {
    name: 'FortNite',
    type: 'IPA',
    price: 3,
    alc: 2.6,
    amount: 100
  },
  {
    name: 'Bud-Light',
    type: 'Wheat',
    price: 8,
    alc: 11.6,
    amount: 100
  },  {
    name: 'Didly Did It Again',
    type: 'Pale Ale',
    price: 6,
    alc: 19.6,
    amount: 10
  },  {
    name: 'Whatever Britney Is Getting',
    type: 'Brown Ale',
    price: 12,
    alc: 13.2,
    amount: 80
  },  {
    name: 'IDK',
    type: 'All Mixed',
    price: 95,
    alc: 1.6,
    amount: 1
  },  {
    name: 'French Fries',
    type: 'IPA',
    price: 2,
    alc: 1.6,
    amount: 100
  },  {
    name: 'Water',
    type: 'Double IPA',
    price: 9,
    alc: 10.2,
    amount: 83
  },  {
    name: 'Moms Couch',
    type: 'Cushions',
    price: 3,
    alc: 24.6,
    amount: 92
  },  {
    name: 'Burnt Hair',
    type: 'Pilsner',
    price: 2,
    alc: 0.6,
    amount: 73
  },  {
    name: 'Obama',
    type: 'Pilsner',
    price: 9,
    alc: 4.6,
    amount: 46
  },  {
    name: 'FireWorks',
    type: 'Explosive',
    price: 1,
    alc: 99.9,
    amount: 8
  }];
function NewKeg(props) {
  let _name = null;
  let _type = null;
  let _price = null;
  let _alc = null;
  let _amount = null;
  let currentlyVisibleContent = null;
  function handleNewKegSubmission(event) {
    event.preventDefault();
    props.onNewKegCreation({name:_name.value, type: _type.value, price:_price.value, alc:_alc.value, amount:_amount.value, key: v4() });
    allKeg.push({name:_name.value, type: _type.value, price:_price.value, alc:_alc.value, amount:_amount.value, key: v4() });
    _name.value = '';
    _type.value = '';
    _price.value = '';
    _alc.value = '';
    _amount.value = '';
  }
  if(allKeg.length >= 1){
    currentlyVisibleContent = <KegList yourKegList={allKeg}/>
  } else {
    currentlyVisibleContent = <p>No Previous Statuses to show</p>
  }
  return (
    <div>
      <style jsx>{`

    form{
    position: fixed;
    border: 1px solid black;
    margin-left: 9rem;
    margin-right: auto;
    margin-top: 3rem;
    }
    h1{
      color: white;
     position: fixed;
    width: 18rem;
    border: 1px solid white;
    margin-left: 5rem;
    margin-right: auto;
    text-align: center;
    }
    #addedBeers{
    margin-top: 15rem;
    margin-left: 25rem;
    margin-right: -8rem;
    }
            `}</style>
      <div className="container">
        <h1>Add New Keg</h1>
          <br/>
        <form onSubmit={handleNewKegSubmission}>
          <input
              type='text'
              id='name'
              placeholder='NAME'
              ref={(input) => {_name = input;}}
              value={_name}/><br/>
          <input
              type='text'
              id='type'
              placeholder='TYPE'
          ref={(input) => {_type = input;}}
          value={_type}/><br/>
          <input type='text'
                 id='price'
                 placeholder='PRICE'
          ref={(input) => {_price = input;}}
          value={_price}/><br/>
          <input
              type='text'
              id='alc'
              placeholder='ALC'
          ref={(input) => {_alc = input;}}
          value={_alc}/><br/>
          <input
              type='text'
              id='amount'
              placeholder='AMOUNT'
          ref={(input) => {_amount = input;}}
          value={_amount}/><br/>
          <button type='submit'>Add Keg</button>
        </form>
        <div id='addedBeers'>
        {currentlyVisibleContent}
        </div>
      </div>
    </div>
  );
}
NewKeg.propTypes = {
  onNewKegCreation: PropTypes.func
};


export default NewKeg;
