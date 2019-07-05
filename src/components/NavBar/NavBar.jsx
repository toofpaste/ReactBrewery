import React from 'react';
import {Link} from 'react-router-dom';
import beerBg from '../Assets/beerBG.png';


export default function NavBar() {

  return (
    <div>
      <style jsx>{`
      @import url('https://fonts.googleapis.com/css?family=Roboto|Shadows+Into+Light&display=swap');
       h1{
        color: #5c7091;
        text-align: center;
        font-size: 10vh;
        font-family: 'Shadows Into Light', cursive;
        margin-top: -8px;
        }
        .container{
        background-image: url(${beerBg});
        height: 60vh;
        width: 100vw;
        background-size: contain;
        background-repeat: no-repeat;
        display: flex;
        flex-direction: column;
        }
        button{
        background-color: transparent;
        color: whitesmoke;
        padding: 17px;
        height: 3rem;
        float: left;
        }
        Link{
        
        }
      `}</style>
        <div className="container">
        <h1>BEER 4 KIDS</h1>
            <Link to="/"><button>Home</button></Link>
            <Link to="/keglist"><button>View Kegs</button></Link>
            <Link to="/newkeg"><button>Add Keg</button></Link>
        </div>
    </div>
  );
}
