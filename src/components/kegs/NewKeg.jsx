import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';
import KegList from './KegList';
import beer1 from '../Assets/beer1.png';
import beer2 from '../Assets/beer2.png';
import beer3 from '../Assets/beer3.png';
import beer4 from '../Assets/beer4.png';
import beer5 from '../Assets/beer5.png';
import beer6 from '../Assets/beer6.png';
import beer7 from '../Assets/beer7.png';
import beer8 from '../Assets/beer8.png';
import beer9 from '../Assets/beer3.png';
import beer10 from '../Assets/beer10.png';
import beer11 from '../Assets/beer11.png';
import beer12 from '../Assets/beer12.png';
import beer13 from '../Assets/beer13.png';
import beer14 from '../Assets/beer14.png';
import beer15 from '../Assets/beer15.png';
import beer16 from '../Assets/beer16.png';
import beer17 from '../Assets/beer17.png';
import beer18 from '../Assets/beer18.png';
import beer19 from '../Assets/beer19.png';
import beer20 from '../Assets/beer20.png';
import beer21 from '../Assets/beer21.png';
let beerImg = [beer1, beer2, beer3, beer4, beer5, beer6, beer7, beer8, beer9, beer10,
  beer11, beer12, beer13, beer14, beer15, beer16, beer17, beer18, beer19,
  beer20, beer21];

function NewKeg(props) {
  let _name = null;
  let _type = null;
  let _price = null;
  let _alc = null;
  let _amount = null;
  function handleNewKegSubmission(event) {
    event.preventDefault();
    let x = Math.floor(Math.random() * (beerImg.length))
    props.onNewKegCreation({name:_name.value, type: _type.value, price:_price.value, alc:_alc.value, amount:_amount.value, img:beerImg[x], key: v4() });
    _name.value = '';
    _type.value = '';
    _price.value = '';
    _alc.value = '';
    _amount.value = '';
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
      </div>
    </div>
  );
}
NewKeg.propTypes = {
  onNewKegCreation: PropTypes.func
};


export default NewKeg;
