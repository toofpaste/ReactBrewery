import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';
import KegList from './KegList';
const allKeg = [];
function NewKeg(props) {
  let _name = null;
  let _type = null;
  let _price = null;
  let _alc = null;
  let _amount = null;
  let currentlyVisibleContent = null;
  function handleNewKegSubmission(event) {
    event.preventDefault();
    props.onNewKegCreation({name:_name.value, type: _type.value, price:_price.value, alc:_alc.value, amount:_amount.value, id: v4() });
    allKeg.push({name:_name.value, type: _type.value, price:_price.value, alc:_alc.value, amount:_amount.value, id: v4() });
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
