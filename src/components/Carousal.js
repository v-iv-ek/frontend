import React from 'react'
import { Link } from 'react-router-dom'

function Carousal() {
  return (
    <div>
      <div id="carouselExampleControls" className="carousel slide carousel-fade" data-ride="carousel" style={{ objectFit: "contain !important" }}>
        <div className="carousel-inner" id="carousal">
          <div className='carousel-caption' style={{ zIndex: "10" }}>
            <form class="d-flex">
              <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
              <button class="btn btn-outline-success my-2 my-sm-0 bg-success text-white" type="submit">Search</button>
            </form>

          </div>
          <div className="carousel-item active">
            <img className="d-block w-100" src="https://source.unsplash.com/random/900×700/?fruits" alt="First slide" style={{ filter: "brightness(30%)" }} />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="https://source.unsplash.com/random/900×700/?momos" alt="Second slide" style={{ filter: "brightness(30%)" }} />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="https://source.unsplash.com/random/900×700/?fruit" alt="Third slide" style={{ filter: "brightness(30%)" }} />
          </div>
        </div>
        <Link className="carousel-control-prev" to="#carouselExampleControls" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </Link>
        <Link className="carousel-control-next" to="#carouselExampleControls" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </Link>
      </div>
    </div>
  )
}

export default Carousal