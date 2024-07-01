import { useState } from "react";
import Search from "./Components/Search";
import FoodList from "./Components/FoodList";
import Nav from "./Components/Nav";
import Container from "./Components/Container";
import Footer from "./Components/Footer";

function App() {
  const [foodData, setFoodData] = useState([]);

  return (
    <>
      <Nav />
      <Search foodData={foodData} setFoodData={setFoodData} />
      <Container>
        <FoodList foodData={foodData} />
      </Container>
      <Footer/>
    </>
  );
}

export default App;
