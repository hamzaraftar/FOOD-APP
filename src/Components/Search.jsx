import { useEffect, useState } from "react";

const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "c6f7df4617fd4ed6a4649b437a0c470c";

const Search = ({foodData,setFoodData}) => {
  const [query, setQuety] = useState("pizza");
  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data.results);
      setFoodData(data.results)
    }
    fetchFood();
  }, [query]);
  return (
    <div className="w-[300px] mx-auto relative mt-5">
      <input className="outline-none border-b-2 py-3 px-4 w-full border-gray-300 rounded-sm text-lg font-semibold"
        type="text"
        value={query}
        onChange={(e) => setQuety(e.target.value)}
      />
    </div>
  );
};

export default Search;
