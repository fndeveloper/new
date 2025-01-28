import React from 'react';
import { Helmet } from 'react-helmet-async';
import img1 from "../assets/revslider_catering.png"
import img2 from "../assets/revslider_party.png"
import img3 from "../assets/1-revslider_wedding.png"




const Home = () => {
  return (
    <>
    {/* HEAD START */}
      <Helmet>
        <title>Home | My Website</title>
        <meta name="description" content="Welcome to the homepage of My Website. Explore our services and offerings!" />
      </Helmet>
      {/* HEAD ENF */}

      {/* MAIN 1 START */}
      <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item car1 active d-flex justify-content-center align-items-center" data-bs-interval="11113000">
  <div className='d-flex flex-column justify-content-center'>
  <img src={img1} alt="" className='col-10  mx-auto'/>
  <h3 className='text-white text-center fw-medium py-2 col-lg-12 col-6 mx-auto '>Lets plan your next event together</h3>
<span className='dash col-2 mx-auto mt-4'></span>

<button className='bg col-3 mx-auto mt-3 btn1'>
  <span className='spa'>About Us</span>
</button>
  </div>
    </div>
    <div className="carousel-item car2 d-flex justify-content-center align-items-center" data-bs-interval="3000">
    <div className='d-flex flex-column justify-content-center'>
  <img src={img2} alt="" className='col-8  mx-auto'/>
  <h3 className='text-white text-center fw-medium py-2 col-lg-12 col-6 mx-auto '>Lets plan your next event together</h3>
<span className='dash col-2 mx-auto mt-4'></span>

<button className='bg col-3 mx-auto mt-3 btn1'>
  <span className='spa'>About Us</span>
</button>
  </div>
    </div>
    <div className="carousel-item car3 d-flex justify-content-center align-items-center" data-bs-interval="3000">
    <div className='d-flex flex-column justify-content-center'>
  <img src={img3} alt="" className='col-8  mx-auto'/>
  <h3 className='text-white text-center fw-medium py-2 col-lg-12 col-6 mx-auto '>Lets plan your next event together</h3>
<span className='dash col-2 mx-auto mt-4'></span>

<button className='bg col-3 mx-auto mt-3 btn1'>
  <span className='spa'>About Us</span>
</button>
  </div>
    </div>
  </div>

  <button
    className="carousel-control-prev"
    type="button"
    data-bs-target="#carouselExampleFade"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  
  <button
    className="carousel-control-next"
    type="button"
    data-bs-target="#carouselExampleFade"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>


      {/* MAIN 1 END */}
    </>
  );
};

export default Home;
