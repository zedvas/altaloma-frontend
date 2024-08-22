import React from 'react';

const IngredientsCard = ({ ingredient }) => {
  const backgroundImage = ingredient.src
  return (
      <div style={{backgroundImage:`url(${backgroundImage})`, "backgroundSize": "cover"}}>
          <h3>{ingredient.name}</h3>
          <p>{ingredient.description}</p>
    </div>
  )
}

export default IngredientsCard