import './style.css'
import MainSearch from './pages/MainSearch'
import BookDetails from './pages/BookDetails'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App: React.FunctionComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainSearch />}></Route>
        <Route path='/details' element={<BookDetails />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
