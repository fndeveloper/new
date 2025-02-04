import React from 'react';
import { Helmet } from 'react-helmet-async';
import img1 from "../assets/revslider_catering.png"
import img2 from "../assets/revslider_party.png"
import img3 from "../assets/1-revslider_wedding.png"
import img4 from "../assets/home_img-1.jpg"
import card_img_1 from "../assets/card_1.jpeg"
import card_img_2 from "../assets/card_2.jpeg"
import card_img_3 from "../assets/card_3.jpeg"
import head_banner from "../assets/h2_bg2.jpg"



import homebg from "../assets/home_bg_1.jpg"



const Home = () => {
  return (
    <>

      {/* MAIN 1 START */}
      <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item car1 active d-flex justify-content-center align-items-center" data-bs-interval="11113000">
            <div className='d-flex flex-column justify-content-center'>
              <img src={img1} alt="" className='col-10  mx-auto' />
              <h3 className='text-white text-center fw-medium py-2 col-lg-12 col-6 mx-auto '>Lets plan your next event together</h3>
              <span className='dash col-2 mx-auto mt-4'></span>

              <button className='bg col-3 mx-auto mt-3 btn1'>
                <span className='spa'>About Us</span>
              </button>
            </div>
          </div>
          <div className="carousel-item car2 d-flex justify-content-center align-items-center" data-bs-interval="3000">
            <div className='d-flex flex-column justify-content-center'>
              <img src={img2} alt="" className='col-8  mx-auto' />
              <h3 className='text-white text-center fw-medium py-2 col-lg-12 col-6 mx-auto '>Lets plan your next event together</h3>
              <span className='dash col-2 mx-auto mt-4'></span>

              <button className='bg col-3 mx-auto mt-3 btn1'>
                <span className='spa'>About Us</span>
              </button>
            </div>
          </div>
          <div className="carousel-item car3 d-flex justify-content-center align-items-center" data-bs-interval="3000">
            <div className='d-flex flex-column justify-content-center'>
              <img src={img3} alt="" className='col-8  mx-auto' />
              <h3 className='text-white text-center fw-medium py-2 col-lg-12 col-6 mx-auto '>Lets plan your next event together</h3>
              <span className='dash col-2 mx-auto mt-4'></span>

              <button className='bg col-3 mx-auto mt-3 btn1'>
                <span className='spa'>About Us</span>
              </button>
            </div>
          </div>
        </div>

        <button
          className="carousel-control-prev "
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon carousel-btn visually-hidden" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>

        <button
          className="carousel-control-next "
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon carousel-btn visually-hidden" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      {/* MAIN 1 END */}
      {/* MAIN 2 START */}
      <div className="container cont-1 p-3 d-flex flex-lg-row flex-column justify-content-between">
        <div className="col-lg-3 col-md-6 col-12">
          <img src={img4} className='img-fluid col-12' alt="" />
        </div>
        <div className="col-lg-8 pt-lg-0 pt-5 px-lg-3 col-md-6 col-12 d-flex flex-column justify-content-center">
          <h2>Welcome to <span className='bg text-white px-2 py-1 '>MAM DAISY</span> , a premier catering and event planning company based in Karachi, Pakistan. </h2>
          <p className='py-4  col-grey '>
            we specialize in creating unforgettable experiences through exceptional event planning and catering services. With years of expertise in the industry, our team is dedicated to turning your vision into reality, ensuring that every detail is flawlessly executed.

            From intimate gatherings to grand celebrations, corporate  to weddings, we offer tailored solutions that reflect your unique style and preferences. Our meticulous planning, creative designs, and high-quality catering ensure a seamless and stress-free experience for you and your guests.

            What sets us apart is our passion for excellence, innovative approach, and commitment to customer satisfaction. We work closely with our clients to curate bespoke  that leave a lasting impression. Whether you need full-scale event planning, venue selection, catering, or décor arrangements, we handle everything with professionalism and elegance.
          </p>

        </div>
      </div>
      {/* MAIN 2 START */}
      {/* MAIN 3 START */}
      <div>
        <h2 className='col-org py-5'>Our Service</h2>
      </div>
      <div className="container-fluid px-2 gap-1 d-flex flex-lg-row flex-column align-items-center justify-content-center">
        <div className="col-lg-3 col-md-6 col-12">
          <div className="card-container cards1 col-12 d-flex justify-content-center align-items-center flex-column">
            
              <h1 className='text-white1 '>Corporate </h1>


             <div className="card-hover"></div>
         
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-12">
          <div className="card-container cards2 col-12 d-flex justify-content-center align-items-center flex-column">
            
              <h1 className='text-white1 '>Parties </h1>


             <div className="card-hover"></div>
         
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-12">
          <div className="card-container cards3 col-12 d-flex justify-content-center align-items-center flex-column">
            
              <h1 className='text-white1 '>Wedding </h1>


             <div className="card-hover"></div>
         
          </div>
        </div>       <div className="col-lg-3 col-md-6 col-12">
          <div className="card-container cards4 col-12 d-flex justify-content-center align-items-center flex-column">
            
              <h1 className='text-white1 '>Birthday </h1>


             <div className="card-hover"></div>
         
          </div>
        </div>
      
      </div>
      {/* MAIN 3 END */}
      {/* MAIN 4 START */}
      <section className="event-section my-5 ">
      <div className='px-2'>
      <h1>Event Planning</h1>
      <p className="subtitle ">For All Your Catering Needs</p>
      </div>
        <div className="container-fluid bg px-4  ">
          <div className="row py-4 ">
            <div className="col-lg-3 bg-white p-3 rounded-1 col-md-6 col-12 event-step">
              <h2>01</h2>
              <h5 className=' '>Request A Consultation</h5>
              <p>Apparently we had reached a great height in the atmosphere</p>
            </div>
            <div className="col-lg-3 bg-white p-3 rounded-1 col-md-6 col-12 event-step">
              <h2>02</h2>
              <h5>Confirmation</h5>
              <p>
                By the same illusion which lifts the horizon of the sea to the level
              </p>
            </div>
            <div className="col-lg-3 bg-white p-3 rounded-1 col-md-6 col-12 event-step">
              <h2>03</h2>
              <h5>We do the plan</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed 
              </p>
            </div>
            <div className="col-lg-3 bg-white p-3 rounded-1 col-md-6 col-12 event-step">
              <h2>04</h2>
              <h5>Enjoy!</h5>
              <p>Apparently we had reached a great height in the atmosphere</p>
            </div>
          </div>
      
        </div>

        <div className="container-fluid  m-0 p-0">
          <img src={head_banner} className='img-fluid'/>
        </div>
      </section>

      {/* MAIN 4 END */}
      {/* MAIN 5 START */}
      <div className="container why-us">
        <h2>Why Us</h2>
        <p>For All Your Catering Needs</p>
        <div className="row">
          <div className="col-md-4 col-12 why-box">
            <i className="fas fa-utensils" />
            <h5>Exclusive Design</h5>
            <p>We create elegant and unique catering setups.</p>
          </div>
          <div className="col-md-4 col-12 why-box">
            <i className="fas fa-user-tie" />
            <h5>Client Focused</h5>
            <p>Ensuring customer satisfaction is our top priority.</p>
          </div>
          <div className="col-md-4 col-12 why-box">
            <i className="fas fa-carrot" />
            <h5>Fresh Ingredients</h5>
            <p>We use only the best and freshest ingredients.</p>
          </div>
          <div className="col-md-4 col-12 why-box">
            <i className="fas fa-users" />
            <h5>Diverse Client Base</h5>
            <p>We cater to a variety of clients and occasions.</p>
          </div>
          <div className="col-md-4 col-12 why-box">
            <i className="fas fa-seedling" />
            <h5>Responsible Sourcing</h5>
            <p>Sustainably sourced and ethically produced.</p>
          </div>
          <div className="col-md-4 col-12 why-box">
            <i className="fas fa-concierge-bell" />
            <h5>Flexible Services</h5>
            <p>Customizable services to fit your needs.</p>
          </div>
        </div>
      </div>

      {/* MAIN 5 END */}
    </>
  );
};

export default Home;
