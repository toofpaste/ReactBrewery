import React, { useState } from 'react';
import PropTypes from 'prop-types';
function EditKeg(props) {
  let _name = null;
  let _newName = null;
  let _newType = null;
  let _newPrice = null;
  let _newAlc = null;
  let _newAmount = null;
  function handleEditKegSubmission(event) {
    event.preventDefault();
    props.onEditKeg({name:_name.value, newName: _newName.value, newType: _newType.value, newPrice:_newPrice.value, newAlc:_newAlc.value, newAmount:_newAmount.value});
    _name.value = '';
    _newName.value = '';
    _newType.value = '';
    _newPrice.value = '';
    _newAlc.value = '';
    _newAmount.value = '';
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
    font-family: Verdana;
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
        <h1>Edit Keg</h1>
        <br/>
        <form onSubmit={handleEditKegSubmission}>
          <input
            type='text'
            id='name'
            placeholder='Current beer name'
            ref={(input) => {_name = input;}}
            value={_name}/><br/>
          <input
            type='text'
            id='newName'
            placeholder='NEW BEER NAME'
            ref={(input) => {_newName = input;}}
            value={_newName}/><br/>
          <input
            type='text'
            id='type'
            placeholder='NEW BEER TYPE'
            ref={(input) => {_newType = input;}}
            value={_newType}/><br/>
          <input type='text'
            id='price'
            placeholder='NEW BEER PRICE'
            ref={(input) => {_newPrice = input;}}
            value={_newPrice}/><br/>
          <input
            type='text'
            id='alc'
            placeholder='NEW ALC %'
            ref={(input) => {_newAlc = input;}}
            value={_newAlc}/><br/>
          <input
            type='text'
            id='amount'
            placeholder='NEW AMOUNT'
            ref={(input) => {_newAmount = input;}}
            value={_newAmount}/><br/>
          <button type='submit'>Edit Keg</button>
        </form>
      </div>
    </div>
  );
}
EditKeg.propTypes = {
  onEditKeg: PropTypes.func
};


export default EditKeg;
