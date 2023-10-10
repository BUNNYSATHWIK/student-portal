
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import AddStudent from './Components/AddStudent';
import Favourite from './Components/Favourite';
import EditStudent from './Components/EditStudent';

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/add" element={<AddStudent/>}/>
            <Route path="/favourite" element={<Favourite/>}/>
            <Route path="/edit/id" element={<EditStudent/>}/>
        </Routes>
    </div>
  );
}

export default App;
