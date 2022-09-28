import React from 'react'
import {Carousel }from "react-bootstrap"
import image1 from "../assets/image1.jpg"
import image2 from "../assets/image2.jpg"
import image3 from "../assets/image3.jpg"
import "./slider.css"


const Slider = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img 
          className="d-block w-100 slider"
          src={image1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className='text-white fw-bold'>Economiser De L Argent</h3>
          <button className='text-dark bg-warning p-3 rounded'>demnder un devis</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 slider"
          src={image2}
          alt="Second slider"
        />

        <Carousel.Caption>
          <h3>Economiser De L Argent</h3>
          <button className='text-dark bg-warning p-3 rounded'>demnder un devis</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 slider"
          src={image3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Economiser De L Argent</h3>
          <p>
          <button className=' text-dark bg-warning p-3 rounded'>demnder un devis</button>
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default Slider;