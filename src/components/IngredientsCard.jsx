import React from 'react';
import IngredientsCardCSS from './IngredientsCard.module.css'

const IngredientsCard = ({ ingredient }) => {
  const backgroundImage = ingredient.src
  return (
      <div className={IngredientsCardCSS.container} style={{backgroundImage:`url(${backgroundImage})`, "backgroundSize": "cover"}}>
          <h3>{ingredient.name}</h3>
          <p>{ingredient.description}</p>
    </div>
  )
}

export default IngredientsCard