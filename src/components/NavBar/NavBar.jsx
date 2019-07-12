import React from 'react';
import {Link} from 'react-router-dom';


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
        height: 60vh;
        width: 100vw;
        background-size: contain;
        background-repeat: no-repeat;
        display: flex;
        flex-direction: row;
        }
        button{
        background-color: transparent;
        color: whitesmoke;
        padding: 17px;
        height: 3rem;
        float: left;
        }
        #beer {
width: 156px;
height: 156px;
  margin:-37px 0px;
  
}

#beer:after {
  position:absolute;
  z-index:5;
content: '';
display: block;
width: 6px;
height: 6px;
background: transparent;
box-shadow:36px 120px #c4cfd6,42px 120px #c4cfd6,48px 120px #c4cfd6,54px 120px #c4cfd6,60px 120px #c4cfd6,66px 120px #c4cfd6,72px 120px #c4cfd6,78px 120px #c4cfd6,30px 114px #c4cfd6,30px 108px #c4cfd6,30px 102px #c4cfd6,30px 96px #c4cfd6,30px 90px #c4cfd6,30px 84px #c4cfd6,84px 114px #c4cfd6,84px 108px #c4cfd6,84px 96px #c4cfd6,84px 102px #c4cfd6,84px 90px #c4cfd6,84px 84px #c4cfd6,84px 78px #c4cfd6,84px 72px #c4cfd6,30px 78px #c4cfd6,30px 72px #c4cfd6,90px 108px #c4cfd6,96px 102px #c4cfd6,96px 96px #c4cfd6,96px 90px #c4cfd6,96px 84px #c4cfd6,96px 78px #c4cfd6,96px 72px #c4cfd6,96px 66px #c4cfd6,36px 114px #d7a52e,66px 114px #d7a52e,54px 114px #d7a52e,42px 114px #d7a52e,48px 114px #d7a52e,60px 114px #d7a52e,72px 114px #d7a52e,78px 114px #d7a52e,78px 78px #d7a52e,78px 84px #d7a52e,78px 90px #d7a52e,78px 96px #d7a52e,78px 102px #d7a52e,78px 108px #d7a52e,72px 108px #d7a52e,60px 108px #d7a52e,36px 108px #d7a52e,36px 102px #d7a52e,36px 96px #d7a52e,36px 90px #d7a52e,36px 84px #d7a52e,36px 78px #d7a52e,36px 66px #d7a52e,42px 66px #d7a52e,48px 66px #d7a52e,54px 66px #d7a52e,72px 72px #d7a52e,72px 78px #d7a52e,72px 84px #d7a52e,72px 90px #d7a52e,72px 102px #d7a52e,66px 108px #d7a52e,66px 102px #d7a52e,66px 96px #d7a52e,72px 96px #d7a52e,66px 84px #d7a52e,66px 78px #d7a52e,66px 72px #d7a52e,36px 72px #d7a52e,42px 72px #d7a52e,48px 72px #d7a52e,54px 72px #d7a52e,60px 72px #d7a52e,60px 78px #d7a52e,60px 84px #d7a52e,60px 90px #d7a52e,66px 90px #d7a52e,60px 96px #d7a52e,60px 102px #d7a52e,54px 108px #d7a52e,48px 102px #d7a52e,48px 96px #d7a52e,48px 90px #d7a52e,48px 84px #d7a52e,42px 78px #d7a52e,42px 84px #d7a52e,42px 102px #d7a52e,42px 108px #d7a52e,48px 108px #d7a52e,54px 102px #d7a52e,54px 96px #d7a52e,54px 90px #d7a52e,54px 84px #d7a52e,54px 78px #d7a52e,48px 78px #d7a52e,42px 90px #d7a52e,42px 96px #d7a52e,30px 60px #ebe7be,30px 54px #ebe7be,30px 48px #ebe7be,36px 60px #ebe7be,36px 54px #ebe7be,36px 48px #ebe7be,36px 42px #ebe7be,30px 66px #ebe7be,42px 60px #ebe7be,54px 60px #ebe7be,48px 60px #ebe7be,60px 60px #ebe7be,78px 60px #ebe7be,66px 60px #ebe7be,72px 60px #ebe7be,84px 60px #ebe7be,84px 66px #ebe7be,78px 66px #ebe7be,72px 66px #ebe7be,66px 66px #ebe7be,60px 66px #ebe7be,78px 72px #ebe7be,84px 54px #ebe7be,42px 42px #ebe7be,48px 42px #ebe7be,54px 42px #ebe7be,60px 42px #ebe7be,66px 42px #ebe7be,72px 42px #ebe7be,78px 48px #ebe7be,72px 54px #ebe7be,78px 54px #ebe7be,72px 48px #ebe7be,66px 48px #ebe7be,54px 48px #ebe7be,48px 48px #ebe7be,42px 48px #ebe7be,54px 54px #ebe7be,60px 54px #ebe7be,66px 54px #ebe7be,60px 48px #ebe7be,48px 54px #ebe7be,42px 54px #ebe7be,90px 60px #c4cfd6;
}

#beer:before {
  position:absolute;
  z-index:10;
content: '';
display: block;
width: 6px;
height: 6px;
background: transparent;
box-shadow:78px 72px #ebe7be;
  -webkit-animation: beer-droplet 3s 0s infinite;
}





@-webkit-keyframes beer-droplet{
  0%{ box-shadow:78px 72px #ebe7be;}
  50%{ box-shadow:78px 130px #ebe7be;}
  100%{ box-shadow:78px 72px #ebe7be; opacity:0}
}

@import "compass/css3";

@import url(https://fonts.googleapis.com/css?family=Montserrat:700);

$beeropacity: .2;

body{
  background: darkseagreen;
  background-image: repeating-linear-gradient(-65deg, transparent, transparent 50px, rgba(255,255,255,.1) 50px, rgba(255,255,255,.1) 100px);
  overflow-x: hidden;
  padding-left: 3rem;
}

div{
  perspective: 1100px;
  perspective-origin: 15% 30%;
}
ul{

  transform-style: preserve-3d;
  transform: translateX(20px) translateY(0px) rotateX(-60deg);
  animation: tilt 8s infinite ease;
}
@keyframes tilt{
 70%{ transform: translateX(20px) translateY(10px) rotateX(-64deg);
  }
}
li{
  display: block;
  height: 300px;
  width: 300px;
  border: 1px solid rgba(180,150,150, .1);
  border-radius: 150px;
  transform: rotateX(90deg) translateY(50px);
  font-size: 15em;
  text-align: center;
  margin-top: -280px;
}
li:nth-child(1){
  border: 3px solid #e3e3e3; 
  box-shadow: inset 0 0 15px rgba(200,200,200, .1);
}
@for $i from 10 through 48{
  li:nth-child(#{$i}){ 
    background: hsla(42, 70%, 60%, $beeropacity);
  }
}

li:nth-child(9){
  box-shadow: inset 0 0 50px 10px rgba(255,255,255, 1);
}
li:nth-child(10){
  box-shadow: inset 0 0 30px rgb(207, 172, 60, 1);
}
li:nth-child(48){
  background: #f5cb42;
  box-shadow: inset 0 0 25px rgba(200,200,200, .2);
}
.buttonDiv{
    padding-left: 85%;
    padding-top: 1%;
    }
    .charlie{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%)
}
.charlie h1{
  font-family:'Impact', sans-serif;
  font-size:12em;
  color: rgba(0,0,0,0.2);
  background: url(https://www.cervezatyris.com/wp-content/uploads/2018/07/cerveza-1400x608.jpg);
  -webkit-background-clip:text;
  background-position:0px 30px;
  animation: beer 80s linear normal forwards;
}


@keyframes beer{
  0%{
    background-position:0px 30px;
  }
  100%{
    background-position:0px -400px;
  }
}
      `}</style>
      <div id='all'>
      <div className="container">
        <div className='charlie'><h1 data-text="Charlie">BEER 4 KIDS</h1></div>
        <div id='beer'></div>
        <div className='buttonDiv'>
          <Link to="/"><button>Home Page</button></Link>
          <Link to="/keglist"><button>Show Keg</button></Link>
          <Link to="/newkeg"><button>Add Kegs</button></Link>
          <Link to="/editkeg"><button>Edit  Kegs</button></Link>
        </div>
      </div>

      <div>
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>

    </div>
    </div>
  );
}
