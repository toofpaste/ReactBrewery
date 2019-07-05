import React from 'react';
import {Link} from 'react-router-dom';


export default function NavBar() {

  return (
    <div>
      <style jsx>{`
        
ul{
position: absolute;
list-style-type: none;
background: #CE93D8;
margin: 0px;
padding: 0px;
margin-top: -90px;
}

li{
display: inline-block;
padding: 20px;
cursor: pointer;
}

a{
text-decoration: none;
color: black;
}

.ul{
position: absolute;
display: none;
background: #b3d4fc;

-webkit-animation: mymove .3s linear ;
}

.ul:hover .ul{
display: block;
}

li ul li:hover a{
color: white;
}

.projects: hover ul{
display: block;
margin-top: 20px;
}

.projects: hover .ul li{
display: block;
}

.projects .ul li a{
padding: 10px;
color: black;
}

.projects .ul li:hover a{
color: white;
} 

li ul li{
transition: all .2s;
}

li ul li:hover{
background: #795548;
}

@-webkit-keyframes mymove {
    0%  {transform:translate3d(0px,50px,0px)}
    
    25% {transform:translate3d(0,0px,0)}
  
   50% {transform:translate3d(0,25px,0)}
  
   100% {transform:translate3d(0,0,0)}
}

div{
background: #80CBC4;

height: 70px;
 box-shadow: 
        0px 11px 8px -10px #CCC,
        0px -11px 8px -10px #CCC; 
}
.ul1{
position: absolute;
display: none;
background: #b3d4fc;
-webkit-animation:move .3s linear alternate ;
}
.about .ul1 li a{
  color: black;
}
.about .ul1 li:hover a{
  color: white;
}
.about:hover .ul1{
display: block;
margin-top: 20px;
}
.about:hover .ul1 li{
display: block;
}
.ul1:hover .ul1 {
display: block;
}
@-webkit-keyframes move {
   0%   {transform:translate3d(50px,0,0)}
    
    25% {transform:translate3d(0,0,0)}
  
   50% {transform:translate3d(25px,0,0)}
  
   100% {transform:translate3d(0,0,0)}
}

.ul2{
position: absolute;
display: none;
background: #b3d4fc;
-webkit-animation: move1 .2s linear alternate ;
}
.about .ul2 li a{
  color: black;
}
.about .ul1 li:hover a{
  color: white;
}
.about:hover .ul2{
display: block;
margin-top: 20px;
}
.about:hover .ul2 li{
display: block;
}
.ul2:hover .ul2 {
display: block;
}
@-webkit-keyframes move1 {
   0%   {transform:  scale(.5);}
    50% {transform:scale(1.2);}
  100% {transform:scale(1);}
}


.ul li:hover{
  background: #689F38;
}
.ul1 li:hover{
  background: #689F38;
}
.ul2 li:hover{
  background: #689F38;
}
        `}</style>
      <div>
        <li className="body">
          <ul className="main">
            <li><a><i className="fa fa-home" aria-hidden="true"></i> HOME</a></li>
            <li className="projects"><a><i className="fa fa-tasks" aria-hidden="true"></i> ANIMATION 1 &darr;
            </a>
            <ul className="ul" style="margin-left:-20px;">
              <li><a>projects 1</a></li>
              <li><a>projects 2</a></li>
              <li><a>projects 3</a></li>
              <li><a>projects 4</a></li>
            </ul>
            </li>
            <li className="about"><a><i className="fa fa-tasks" aria-hidden="true"></i> ANIMATION 2 &darr;</a>
              <ul className="ul1" style="margin-left:-20px;">
                <li><a>projects 1</a></li>
                <li><a>projects 2</a></li>
                <li><a>projects 3</a></li>
                <li><a>projects 4</a></li>

              </ul>
            </li>
            <li className="about"><a><i className="fa fa-tasks" aria-hidden="true"></i> ANIMATION 3 &darr;</a>
              <ul className="ul2" style="margin-left:-20px;">
                <li><a>projects 1</a></li>
                <li><a>projects 2</a></li>
                <li><a>projects 3</a></li>
                <li><a>projects 4</a></li>

              </ul>
            </li>
          </ul>
        </li>
      </div>
    </div>


  );
}
