import React from 'react'
import { Link } from 'react-router-dom'


import '../styles/Home.css'
import BannerImage from '../assets/pizza.jpeg';


const Home = () => {
  return (
    <div className='home' style={{backgroundImage: `url(${BannerImage})`}}>
      <div className='headerContainer'>
        <h1>restaurant</h1>
        <p>Pizaa</p>
        <Link to='/menu'>
        <button>Order Now</button>
        </Link>
      </div>
    </div>
  )
}

export default Home