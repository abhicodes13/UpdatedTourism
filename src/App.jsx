import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ButtonAppBar from './components/ButtonAppBar';
import Home from './pages/Home';
import Tour1 from './pages/Tour1';
import Tour2 from './pages/Tour2';
import Tour3 from './pages/Tour3';
import Tour4 from './pages/Tour4';





export default function App() {
  return (
    <BrowserRouter>
    <ButtonAppBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Tour1' element={<Tour1/>}/>
        <Route path='/:Tour2' element={<Tour2/>}/>
        <Route path='/:Tour3' element={<Tour3/>}/>
        <Route path='/:Tour4' element={<Tour4/>}/>
      </Routes>
    </BrowserRouter>
  )
}
