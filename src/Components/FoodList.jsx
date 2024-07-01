import FoodItems from "./FoodItems"

const FoodList = ({foodData}) => {
  return (
    <div>
      {foodData.map( (food)=>(
        <FoodItems key={food.id} food = {food} />
      ) )}
    </div>
  )
}

export default FoodList
