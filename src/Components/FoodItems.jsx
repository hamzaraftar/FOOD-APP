const FoodItems = ({ food,setFoodId }) => {
  return (
    <div className="w-[300px] rounded-lg shadow-lg m-5 overflow-hidden	font-serif ">
      <img className="w-full h-auto" src={food.image} alt="food image" />
      <div className="text-center	font-semibold text-lg font-serif		">
        <p className="m-4">{food.title}</p>
      </div>
      <div className="mb-[20px] flex justify-around">
      <button onClick={ ()=>{
        console.log(food.id);
        setFoodId(food.id);
      } 
        } className="bg-green-600 text-white p-2 cursor-pointer rounded-md">View Recipe</button>
      </div>
    </div>
  );
};

export default FoodItems;
