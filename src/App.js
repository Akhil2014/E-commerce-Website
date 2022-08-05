import { Box } from "@chakra-ui/react";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Scroll from "./Components/SoomthScroll";
import './App.css'
import MainProducts from "./Pages/MainProducts";
import AllRotes from "./AllRoutes/AllRotes";

function App() {
  return (
    <div className="App">
      <Scroll />
      <Navbar />
      <AllRotes />
      <Footer />
    </div>
  );
}

export default App;
