import Search from "./components/Search/Search";
import Favourites from "./components/Favourites/Favourites";
import Meals from "./components/Meals/Meals";
import Modals from "./components/Modals/Modals";
import './App.css';

function App() {
  return (
    <div className="App">
       <Search />
    {/*  <Favourites /> */}
      <Meals />
      {/* <Modals /> */}
    </div>
  );
}

export default App;
