import React from 'react';
import Kegs from'./Kegs';
import{ Link } from 'react-router-dom';


var allKegs = [
  {
    name: 'Lagunitas',
    type: 'IPA',
    price: 5,
    alc: 8.3,
    amount: 90
  },
  {
    name: 'Budweiser',
    type: 'Pale Ale',
    price: 3,
    alc: 5.6,
    amount: 45
  },
  {
    name: 'Kraft Mac n Cheese Beer',
    type: 'Pilsner',
    price: 8,
    alc: 14.6,
    amount: 100
  },
  {
    name: 'Play Dough Flavor',
    type: 'Brown Ale',
    price: 4,
    alc: 2.6,
    amount: 8
  }
];

export default function KegList() {
  return (
    <div>
      <style jsx>{`
            `}</style>
      <div>
        {allKegs.map((beer, index) =>
          <Kegs name={beer.name}
            type={beer.type}
            price={beer.price}
            alc={beer.alc}
            amount={beer.amount}
            key={index}/>
        )}
      </div>
      <div>
        <Link to="/newkeg"><button>Add Keg</button></Link>
      </div>
    </div>
  );
}
