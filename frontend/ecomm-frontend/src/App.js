import logo from './resources/web_logo.png';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import { Signin } from './routes/Signin';
import { Signup } from './routes/Signup';
import { Navbar } from './components/Navbar';
import { Home } from './routes/Home';

function App() {
  const loggedIn = true;

  return (
    <div className="App">
      <div className="container-fluid">
        <Router>
          <div>
            <Navbar />
            <hr />

            <Routes>
              <Route path="/" element={<Home loggedIn={loggedIn} />} />
              <Route path="/signin" element={<Signin loggedIn={loggedIn} />} />
              <Route path="/signup" element={<Signup loggedIn={loggedIn} />} />
            </Routes>
          </div>
        </Router>
      </div>
    </div>
  );
}

export default App;
