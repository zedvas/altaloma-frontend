import AboutEntry from '../components/AboutEntry';
import AboutCSS from './About.module.css';
import { ingredientsList } from '../journalList';
import { useState } from 'react';
import IngredientsCard from '../components/IngredientsCard';


const About = () => {
  const [ingredients, setIngredients] = useState(ingredientsList);
  return (
    <div className={AboutCSS.wrapper}>
      <AboutEntry />
      <div className={AboutCSS.banner}>
        <h1><br />From the Earth, <span><em>for the body</em></span></h1></div>

      <div className={AboutCSS.infoContainer}>
        <p>Every ingredient is considered when being added to our products. It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference. </p>
      </div>

      <div className={AboutCSS.ingredientsContainer}>
        {ingredients.map((ingredient) => (
          <IngredientsCard ingredient={ingredient} id={ingredient.id}/>
        ))}
      </div>
    </div>
  )
}

export default About