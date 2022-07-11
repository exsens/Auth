import './App.css';
import { Register } from './pages/Register.jsx';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home';

function App() {


  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/register" element={<Register />}/>
      </Routes>
    </div>
  );
}

export default App;
