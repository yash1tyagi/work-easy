import './App.css';
import Navbar from './componants/Navbar';
import Home from './componants/Home';
import Data from './componants2/data';
import NoteState from './context/notes/noteState';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Login from './componants/Login';
import Singup from './componants/Singup';
import NoteStateTwo from './context2/notes2/notestate';
import { AddNote } from './componants/addNote';


function App() {
  return (
    <div>
    <NoteState>
      <NoteStateTwo>
         <Router>
          <div className='sticky top-0'><Navbar /></div>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/addNote" element={<AddNote />} exact />
          <Route path="/Login" element={<Login/>} exact />
          <Route path="/SignUp" element={<Singup/>} exact />
          <Route path="/data/:id" element={<Data/>} exact />
        </Routes>
      </Router>
      </NoteStateTwo>
      </NoteState>
    
    </div>
  );
}

export default App;

