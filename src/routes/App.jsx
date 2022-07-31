import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../containers/Home';
import Breeds from '../containers/Breeds';

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/Breeds' element={<Breeds/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App;