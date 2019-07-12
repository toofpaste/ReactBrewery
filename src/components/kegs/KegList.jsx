import React from 'react';
import Kegs from'./Kegs';
import PropTypes from 'prop-types';

function KegList(props) {
  return (
    <div>
      <style jsx>{`
        
            `}</style>
      <div>
        {props.yourKegList.map((beer) =>
          <Kegs name={beer.name}
            type={beer.type}
            price={beer.price}
            alc={beer.alc}
            amount={beer.amount}
            key={beer.id}/>
        )}
      </div>
      <div>
      </div>
    </div>
  );
}

KegList.propTypes = {
  yourKegList: PropTypes.array
};

export default KegList;
