import React from 'react';
import { Link } from 'react-router-dom';

export default function AddKeg() {
  return (
    <div>
      <style jsx>{`
            `}</style>
      <div className="container">
        <h1>Add New Keg</h1>
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
