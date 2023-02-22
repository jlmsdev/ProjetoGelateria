import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Sabores from '../pages/Sabores';
import Sobre from '../pages/Sobre';

export default function RoutesApp() {
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={ <Home /> } />
                <Route path='/sabores' element={ <Sabores /> } />
                <Route path='/sobre' element={ <Sobre /> } />
            </Routes>
        </BrowserRouter>
    )
}