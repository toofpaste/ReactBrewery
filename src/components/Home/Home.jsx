import React from 'react';
import { Link } from 'react-router-dom';


export default function Home(){
  return (
    <div>
      <style jsx>{`
            `}</style>
      <div className="container">
        <h1>BEER 4 KIDS</h1>
        <Link to="/keglist"><button>View Kegs</button></Link>
      </div>
    </div>
  );
}
