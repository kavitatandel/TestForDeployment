import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router';
import Homepage from './component/Homepage';
import FirstPage from './component/FirstPage';
import {Link} from 'react-router-dom';

function App() {
  return (
    <>
    <div>
<nav >
<Link to="/" >Homepage</Link>
<Link to="/First">FirstPage</Link>
</nav>
    </div>
    <Routes>
      <Route exact path='/' element={<Homepage />}></Route>
      <Route exact path='/First' element={<FirstPage />}></Route>
      </Routes>
      </>
  );
}

export default App;
