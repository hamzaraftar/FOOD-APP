import { useEffect, useState } from "react";

const FoodDetails = ({ foodId }) => {
  const [food, setFood] = useState({})
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = "c6f7df4617fd4ed6a4649b437a0c470c";
  useEffect(() => {
    async function FetchFood() {
      const res = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data);
      setFood(data);
    }
    FetchFood();
  });

  return <div>food details {foodId}
  {food.title}
  <img src={food.image} alt="food image" />
  </div>;
};

export default FoodDetails;
