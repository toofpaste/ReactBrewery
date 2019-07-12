import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import KegList from './KegList';
const allKeg = [];
function NewKeg(props) {
    let _name = null;
    let _newName = null;
    let _newType = null;
    let _newPrice = null;
    let _newAlc = null;
    let _newAmount = null;
    let currentlyVisibleContent = null;
    function handleNewKegSubmission(event) {
        event.preventDefault();
        allKeg.push({name:_name.value, newName: _newName, newType: _newType.value, newPrice:_newPrice.value, newAlc:_newAlc.value, newAmount:_newAmount.value});
        _name.value = '';
        _newName.value = '';
        _newType.value = '';
        _newPrice.value = '';
        _newAlc.value = '';
        _newAmount.value = '';
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
