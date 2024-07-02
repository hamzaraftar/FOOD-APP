import FoodItems from "./FoodItems"

const FoodList = ({foodData,setFoodId}) => {
  return (
    <div>
      {foodData.map( (food)=>(
        <FoodItems setFoodId={setFoodId} key={food.id} food = {food} />
      ) )}
    </div>
  )
}

export default FoodList
