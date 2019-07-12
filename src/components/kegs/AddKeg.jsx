import React from 'react';
import { Link } from 'react-router-dom';

export default function AddKeg() {
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
        <form>
          <input type='text' id='name' placeholder='NAME'/><br/>
          <input type='text' id='type' placeholder='TYPE'/><br/>
          <input type='number' id='price' placeholder='PRICE'/><br/>
          <input type='number' id='alc' placeholder='ALC'/><br/>
          <input type='number' id='amount' placeholder='AMOUNT'/><br/>
          <Link to='/keglist'><button type='submit'>Add Keg</button></Link>
        </form>
      </div>
    </div>
  );
}
