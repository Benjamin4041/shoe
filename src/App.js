import "./App.css";
import Home from "./components/home";
import Shoebox from "./components/shoebox";
import ShoeChangeContext from "./context/shoeChangeContext";

function App() {
  // let {CurrentShoe ,setCurrentShoe} = useContext(ShoeNumContext)
  // console.log(CurrentShoe)
  return (
    <ShoeChangeContext>
      <Home/>
      {/* <Shoebox/> */}
    </ShoeChangeContext>
  );
}

export default App;
