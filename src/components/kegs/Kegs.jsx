import React from 'react';
import PropTypes from 'prop-types';
export default function Kegs(props) {
  return (
    <div>
      <style jsx>{`
            `}</style>
      <div>
        <h4>{props.name}</h4>
        <p>{props.type}</p>
        <p>${props.price}</p>
        <p>{props.alc}%</p>
        <p>{props.amount} pints left</p>
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

