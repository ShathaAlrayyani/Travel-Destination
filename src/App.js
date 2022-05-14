
import './App.css';
import Home from './components/Home/Home';
import TourDetails from './components/TourDetails/TourDetails';
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/city/:id" element={<TourDetails/>} />
        </Routes>
    </div>
  );
}

export default App;
