import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegisterPlants from "./pages/RegisterPlants";
import RegisterTypes from "./pages/RegisterTypes";
import ListPlants from "./components/ListPlants"
import SinglePlant from "./components/SinglePlant"
import EditPlant from "./components/EditPlant";
import Home from "./pages/Home";
import '../src/styles/App.css';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plants" element={<ListPlants />} />
        <Route path="/plants/:id" element={<SinglePlant />} />
        <Route path="/plants/register" element={<RegisterPlants />} />
        <Route path="/types/register" element={<RegisterTypes />} />
        <Route path="/plants/edit/:id" element={<EditPlant />} />
      </Routes>
    </Router>

  );
};

export default App;
