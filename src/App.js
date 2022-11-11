import './App.scss';
import {  Routes, Route } from "react-router-dom";
import Menu from './components/Menu';
import HomePage from './pages/Home';
import SpringAnimation from './pages/SpringAnimation';
import ParallaxAnimation from './pages/ParallaxAnimation';


function App() {


  return (
    <div className="App">
      <Menu />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/SpringAnimation" element={<SpringAnimation />} />
        <Route path="/ParallaxAnimation" element={<ParallaxAnimation />} />
      </Routes>
      
    </div>
  );
}

export default App;
