import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./pages/Login"
import MovieList from "./pages/MovieList"


const App = () => {

  return (
    <div className="bg-black w-screen h-screen">
      {/* <Login /> */}
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path='/movies' element={<MovieList />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App