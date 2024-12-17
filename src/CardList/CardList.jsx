import React from 'react'
import Cards from '../Cards/Cards'
import './CardList.css'

function CardList({ data }) {
  return (
     <div className="card-list">
        {data.map((card, index) => (
          <Cards
            key={index}
            image={card.image}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
        
 )
};

export default CardList