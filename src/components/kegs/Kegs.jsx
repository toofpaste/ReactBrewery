import React from 'react';
import PropTypes from 'prop-types';

export default function Kegs(props) {
  return (
    <div>
      <style jsx>{`

      h4 {
      background-color: white;
      padding-left: 20px;
      margin-left: 5px;
      border: 1px solid black;
      font-size: 30px;
      margin-right: 40%;
      border-radius: 10px;
      }
      .info{
      background-color: white;
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
        img{
        width: 50px;
        height: 50px;
            position: absolute;
    margin-top: -36px;
    margin-left: 14px;

        }
            `}</style>
      <div id='everything'>
        <div className='title'>
          <h4>{props.name}</h4>
          <img src={props.img}></img>
          <div className='info'>
            <p>{props.type}  | ${props.price}  | {props.alc}% ALC |  {props.amount} pints left</p>
          </div>

        </div>
      </div>
    </div>
  );
}

Kegs.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  alc: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired
};

