import "./App.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import TripsList from "./components/TripsList";
import TripDetail from "./components/TripDetail";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";

function App() {
  return (
    <div id="page-top">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/TripsList" element={<TripsList />} />
        <Route path="/TripsList/:tripSlug" element={<TripDetail />} />
      </Routes>
    </div>
  );
}

export default App;
