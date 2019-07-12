import React from 'react';
import Kegs from'./Kegs';


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
  },
  {
    name: 'Dogs R Cute',
    type: 'Pilsner',
    price: 2,
    alc: 1.6,
    amount: 111
  },
  {
    name: 'FortNite',
    type: 'IPA',
    price: 3,
    alc: 2.6,
    amount: 100
  },
  {
    name: 'Bud-Light',
    type: 'Wheat',
    price: 8,
    alc: 11.6,
    amount: 100
  },  {
    name: 'Didly Did It Again',
    type: 'Pale Ale',
    price: 6,
    alc: 19.6,
    amount: 10
  },  {
    name: 'Whatever Britney Is Getting',
    type: 'Brown Ale',
    price: 12,
    alc: 13.2,
    amount: 80
  },  {
    name: 'IDK',
    type: 'All Mixed',
    price: 95,
    alc: 1.6,
    amount: 1
  },  {
    name: 'French Fries',
    type: 'IPA',
    price: 2,
    alc: 1.6,
    amount: 100
  },  {
    name: 'Water',
    type: 'Double IPA',
    price: 9,
    alc: 10.2,
    amount: 83
  },  {
    name: 'Moms Couch',
    type: 'Cushions',
    price: 3,
    alc: 24.6,
    amount: 92
  },  {
    name: 'Burnt Hair',
    type: 'Pilsner',
    price: 2,
    alc: 0.6,
    amount: 73
  },  {
    name: 'Obama',
    type: 'Pilsner',
    price: 9,
    alc: 4.6,
    amount: 46
  },  {
    name: 'FireWorks',
    type: 'Explosive',
    price: 1,
    alc: 99.9,
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
      </div>
    </div>
  );
}
