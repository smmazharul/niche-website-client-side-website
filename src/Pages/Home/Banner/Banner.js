
import React, { useState } from 'react';

import HommeTopBanner from '../../../images/Login-page-car.jpg'
import HommeTopBanner2 from '../../../images/car2.jpg'
import HommeTopBanner3 from '../../../images/car3.jpg'

import './Banner.css'
import { Carousel } from 'bootstrap';

const Banner = () => {

  return (
    <div>
      <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel" >
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
            <img src={HommeTopBanner} class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
        <h5>WELCOME TO OUR BEST CAR</h5>  
        <p>Here you can find the world best car for your enjoyful life</p>
      </div>
    </div>
    <div class="carousel-item">
        <img src={HommeTopBanner2} class="d-block w-100" alt="..." />
        <div class="carousel-caption d-none d-md-block">
        <h5>HOPE YOU WILL ENJOY</h5>
        <p>Hope you will enjoy to visit our best car</p>
      </div>
    </div>
    <div class="carousel-item">
        <img src={HommeTopBanner3} class="d-block w-100" alt="..." />
        <div class="carousel-caption d-none d-md-block">
        <h5>THANKS TO VISIT OUR BEST CAR</h5>
        <p>We are trying to give you the best service. Thanks</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div>
  );
};

export default Banner;