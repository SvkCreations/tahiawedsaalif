import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Password from './components/Password';
import Main from './components/Main';
import Story from './components/Story';
import Timeline from './components/Timeline';
import ScrollTop from './components/ScrollTop';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Password />}></Route>
          <Route path='/welcome' element={
            <>
              <Navbar />
              <Main />
              <Story/>
              <Timeline/>
              <ScrollTop/>
            </>
          }></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
