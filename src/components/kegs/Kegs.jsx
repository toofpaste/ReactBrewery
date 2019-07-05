import React from 'react';
import PropTypes from 'prop-types';
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
      border-radius: 10x;
      margin-right: 40%;
      text-align: center;
      margin-top: -20px;
      font-weight: bolder;
      }
            `}</style>
      <div>
      <div className='title'>
        <h4>{props.name}</h4>
        <div className='info'>
        <p>{props.type}</p>
        <p>${props.price}</p>
        <p>{props.alc}%</p>
        <p>{props.amount} pints left</p>
        </div>
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

