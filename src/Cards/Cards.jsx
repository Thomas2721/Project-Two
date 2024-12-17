import React from 'react'
import './Card.css'

function Cards(props) {
  return (
    <div className='Card'>
        <img src={props.image} alt={props.title} />
        <div className='content'>
            <div className='title'>
                <h2>{props.title}</h2>
            </div>
           <div className='discription'> 
            <p>{props.description}</p>
            
            <button>
                <a href="#">View More</a>
            </button>
            </div>
        </div>
    </div>
  )
}

export default Cards