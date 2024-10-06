import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Home from './components/Home.jsx'
import NotFound from './components/NotFound.jsx'

function App() {
  return (
    <Router>
      <Navbar />
      <div className="content">
        <Routes>
          <Route exact path="/new-phone-form/" element={ <Home /> }></Route>
          <Route path="*" element={ <NotFound /> }></Route>
        </Routes>
      </div>
    </Router>
  )
}

export default App;