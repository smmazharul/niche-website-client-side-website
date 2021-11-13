
import React, { useState } from 'react';

import HommeTopBanner from '../../../images/Login-page-car.jpg'
import HommeTopBanner2 from '../../../images/car2.jpg'
import HommeTopBanner3 from '../../../images/car3.jpg'


import { Carousel } from 'bootstrap';

const ServiceHeader = () => {

  return (
    <div>
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" >
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
            <img src={HommeTopBanner} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
        <h5>WELCOME TO OUR BEST CAR</h5>  
        <p>Here you can find the world best car for your enjoyful life</p>
      </div>
    </div>
    <div className="carousel-item">
        <img src={HommeTopBanner2} className="d-block w-100" alt="..." />
        <div className="carousel-caption d-none d-md-block">
        <h5>HOPE YOU WILL ENJOY</h5>
        <p>Hope you will enjoy to visit our best car</p>
      </div>
    </div>
    <div className="carousel-item">
        <img src={HommeTopBanner3} className="d-block w-100" alt="..." />
        <div className="carousel-caption d-none d-md-block">
        <h5>THANKS TO VISIT OUR BEST CAR</h5>
        <p>We are trying to give you the best service. Thanks</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
  );
};

export default ServiceHeader;