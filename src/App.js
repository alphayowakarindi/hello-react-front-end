import { Link, Routes, Route } from 'react-router-dom';
import Greeting from './pages/Greeting';
import Home from './pages/Home';
import './App.css';

function App() {
  return (
    <div className="App">

      {/* nav */}
      <nav>
        <Link to="/">
          Home
        </Link>
        <Link to="/greeting">
          Greeting
        </Link>
      </nav>
      {/* routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/greeting" element={<Greeting />} />
      </Routes>
    </div>
  );
}

export default App;
