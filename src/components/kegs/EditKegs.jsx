import React from 'react';
import { Link } from 'react-router-dom';

export default function EditKeg() {
  return (
    <div>
      <style jsx>{`
            input[type=text]:focus {
       border: 3px solid #555;
    }
    form{
    border: 1px solid black;
    margin-left: 39%;
    margin-right: 38%;
    }
    h1{
    text-align: center;
    }
            `}</style>
      <div className="container">
        <h1>Edit Keg</h1>
        <form>
          <input type='text' id='name' placeholder='NAME'/><br/>
          <input type='text' id='type' placeholder='TYPE'/><br/>
          <input type='number' id='price' placeholder='PRICE'/><br/>
          <input type='number' id='alc' placeholder='ALC'/><br/>
          <input type='number' id='amount' placeholder='AMOUNT'/><br/>
          <Link to='/keglist'><button type='submit'>Edit Keg</button></Link>
        </form>
      </div>
    </div>
  );
}
