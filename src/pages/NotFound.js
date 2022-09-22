import React from 'react';
import senyum from '../img/senyum.jpg';


const NotFound = () => {

const handleClick = () => {
    console.log('hello');
}

return (
    <div className="container-fluid row align-items-center p-5">
        <div className="col-sm-12 col-lg-4 text-center">
          <img srcSet={senyum} alt="" style={{ width: "100px" }} className="m-auto" />
        </div>
        <div className="col-sm-12 col-lg-8">
          <h1 style={{ color: "red" }}>
            <h3>PAGE NOT FOUND</h3>
            <b>Oops! Something went wrong!</b>
          </h1>
        </div>
        <button onClick={handleClick} className="btn btn-primary mt-5">
          RETURN TO HOME
        </button>
      </div>
  );
}

export default NotFound;
