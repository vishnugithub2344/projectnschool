import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React, { useEffect } from 'react';


function Home(){
  useEffect(() => {
    // Add an event listener for scroll
    window.addEventListener('scroll', handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  function handleScroll() {
    const page1 = document.querySelector('.page1');

    // Check if the page has been scrolled
    if (window.scrollY > 0) {
      page1.classList.add('scrolled');
    } else {
      page1.classList.remove('scrolled');
    }
  }

  return(
    <div className="continer">
      <div className="tank"></div>
      <div className="page1">
        <div className="page11">
          <h1>PhotoM4</h1>
        </div>
        <div className="page22">
                <div className="page221"></div>
                <div className="page222"></div>
                <div className="page223"></div>
                <div className="page224"></div> 
        </div>
        <div className="page33 left">
            <a href="" className="menu1">HOME</a>
            <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">LIVE DEMO</Dropdown.Toggle>

            <Dropdown.Menu className='demo1'>
            <Dropdown.Item href="#/action-1">Photographer</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Photo Studio</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Photographer Shop</Dropdown.Item>
            <Dropdown.Item href="#/action-1">Photo Workshop</Dropdown.Item>
            <Dropdown.Item href="#/action-1">Photographer Courses </Dropdown.Item>
            </Dropdown.Menu>
            </Dropdown>

            <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">LIVE DEMO BLOCKS</Dropdown.Toggle>

            <Dropdown.Menu className='demo2'>
            <Dropdown.Item href="#/action-1">Headers and Features</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Content and Shop</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Pricing and Countres</Dropdown.Item>
            <Dropdown.Item href="#/action-1">Team and Testimonials</Dropdown.Item>
            <Dropdown.Item href="#/action-1">Progress and Images</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Slider and Video</Dropdown.Item>
            <Dropdown.Item href="#/action-1">Socials and Forms</Dropdown.Item>
            <Dropdown.Item href="#/action-1">Maps and Footers</Dropdown.Item>
            </Dropdown.Menu>
            </Dropdown>
            <button className="menu4">Buy Now</button>
           </div>
      </div>
      <div className="row1">
          <div className="before"></div>
          <div className="row11">
           <h2 style={{ fontSize: '20px' }}>GET STARTED</h2>
         </div>
         <div className="after"></div>
       </div>
         <div className="row22">
            <h3 style={{ fontSize: '60px' }}>Photo Studio</h3>
           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu dui non diam eleifend egestas id a ligula. Proin interdum vehicula neque sit amet scelerisque.</p>
           <div className="row33">
             <button className="viewmore">View More</button>
         </div>
          <div className="media-container-row"></div>
          </div>
        </div>
)
}
export default Home
