import Nav from "./components/nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Books from "./pages/Books";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Nav />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/books" exact element={<Books />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
