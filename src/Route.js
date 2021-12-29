
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import First from './App';
import Second from './Second';

function RouteApp()
{
    return (
        <Router>
          <Routes>
            <Route exact path ="/" element={<First />}/>
            <Route path="/second" element={<Second />}/>
          </Routes>
        </Router>
    )
}
export default RouteApp;