import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
export default function Kegs(props) {
  return (
    <div>
      <style jsx>{`
      h4 {
      padding-left: 20px;
      margin-left: 5px;
      border: 1px solid black;
      font-size: 30px;
      margin-right: 40%;
      border-radius: 10px;
      }
      .info{
      margin-left: 5px;
      border: 1px solid grey;
      font-size: 18px;
      border-radius: 10px;
      margin-right: 40%;
      text-align: center;
      margin-top: -40px;
      font-weight: bolder;
      }
      button{
        background-color: transparent;
        padding: 17px;
        height: 2rem;
        float: left;
        color: black;
        margin-left: 15px;
        border-radius: 10px;
        font-weight: bold;
        }
            `}</style>
      <div>
      <div className='title'>
        <h4>{props.name}</h4>
        <div className='info'>
        <p>{props.type}  | ${props.price}  | {props.alc}% ALC |  {props.amount} pints left</p>
        </div>
        <Link to="/editkeg"><button>Edit Keg</button></Link>
      </div>
      </div>
    </div>
  );
}

Kegs.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  alc: PropTypes.number.isRequired,
  amount: PropTypes.number.isRequired
};

