import Header from "./components/Header";
import RecipeInfo from "./components/RecipeInfo";
import Ingredients from "./components/Ingredients";
import Steps from "./components/Steps";
import VideoRecipe from "./components/VideoRecipe";
import "./App.css";

function App() {
  return (
      <div className="container">
        <Header />
        <RecipeInfo />
        <Ingredients />
        <Steps />
        <VideoRecipe />
      </div>
  );
}

export default App;