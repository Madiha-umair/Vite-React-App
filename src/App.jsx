import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "./components/Header";

//import page content
import Home from "./routes/Home";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
      </Routes>
      <Header />
      </BrowserRouter>
    </div>
  )
}

export default App
