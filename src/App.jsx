import Mainpage from "./Pages/mainPage/MainPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  
  return (
    <>
     <Router>
        <Routes>
          <Route exact path="/" element={<Mainpage />} />
        </Routes>
      </Router>
      
    </>
  )
}

export default App
