import {useState} from "react";
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {Register} from "./Pages/Register/Register";
import {Home} from "./Pages/home/Home";


function App() {
  const [user, setUser]=useState(false)
  return (
      <div className="App">
      <Router>
        <Routes>
          {user ? (<Route path="/" element={<Home/>} />) : <Route path="/" element={<Register setUser={setUser}/>} />}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
