import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ButtonAppBar from './components/ButtonAppBar';
import Home from './pages/Home';
import Tour from './pages/Tour';





export default function App() {
  return (
    <BrowserRouter>
    <ButtonAppBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Tour' element={<Tour/>}/>
      </Routes>
    </BrowserRouter>
  )
}
