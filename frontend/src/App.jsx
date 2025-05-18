import { BrowserRouter, Routes, Route } from 'react-router-dom'

//PAGES AND COMPONENTS
import Home from "./pages/Home"
import Navbar from './components/Navbar'

function App() {

  return (
    <div className="app">
      <BrowserRouter>
      <Navbar />
        <div className="page">
          <Routes>
            <Route
              path = "/"
              element = {<Home/>}
            />
          </Routes>
        </div>
      </BrowserRouter>

    </div>
  )
}

export default App
