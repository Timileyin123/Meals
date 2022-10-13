import "./Meals.css";
import { useGlobalContext } from "../../Context/Context";
import {BsHandThumbsUp} from "react-icons/bs"
const Meals = () => {
const {meals, Loading} = useGlobalContext();
    
      if (Loading){
         return <div className="loading">
            <h4>Loading...</h4>
         </div>
      }

      if (meals?.length < 1){
          return <div className="loading">
            <h4>No meals match your search term. Please try again.</h4>
         </div>
      }
    return(
        <>
        
        <div className="section-center">
            {meals?.map((meal)=> {
            const {idMeal, strMeal, strMealThumb} = meal
            return <div className="single-meal" key={idMeal}>
                <img src={strMealThumb} className="img" alt="" />
                <footer>
                    <h5>{strMeal}</h5>
                    <button className="like-btn"><BsHandThumbsUp /></button>
                </footer>
            </div>
        })}</div>
        </>
    );
}

export default Meals;