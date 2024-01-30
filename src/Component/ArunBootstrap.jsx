import React from 'react'
import dogimag from "../assets/thumb-1920-813534.jpg"
export default function ArunBootstrap() {
  return (
    <div>


<div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={dogimag} className="d-block w-40" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={dogimag} className="d-block w-40" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={dogimag} className="d-block h-50 w-40" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}
