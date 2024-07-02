import { useState } from "react";
import Search from "./Components/Search";
import FoodList from "./Components/FoodList";
import Nav from "./Components/Nav";
import Container from "./Components/Container";
import Footer from "./Components/Footer";
import InerContainer from "./Components/InerContainer";
import FoodDetails from "./Components/FoodDetails";

function App() {
  const [foodData, setFoodData] = useState([]);
  const [foodId, setFoodId ] = useState("656329");

  return (
    <>
      <Nav />
      <Search foodData={foodData} setFoodData={setFoodData} />
      <Container>
        <InerContainer>
          <FoodList setFoodId={setFoodId} foodData={foodData} />
        </InerContainer>
        <InerContainer>
          <FoodDetails foodId={foodId} />
        </InerContainer>
      </Container>
      {/* <Footer /> */}
    </>
  );
}

export default App;
