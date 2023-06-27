import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FlightDetailsPage from './components/FlightDetailsPage';

import Home from './components/Home';
function App() {
  return (
    <>
      <Router>
        <h1>FLY ✈️ FAIZAN</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path={"/airlines/:id"} element={<FlightDetailsPage />} />
          <Route path="*" element={<div>Page not Found 404 </div>} />
        </Routes>
      </Router>
    </>
  );
}
export default App;
