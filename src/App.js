import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Password from './components/Password';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Password/>}></Route>
          <Route path='/welcome' element={<Navbar/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
