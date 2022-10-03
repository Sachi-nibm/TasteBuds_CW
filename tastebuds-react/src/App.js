import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Outlets from './pages/outlets';
import Foods from './pages/foods';

function App() {
    return (
        <div className="App">
        <Router>
            <Routes>
                <Route path="/outlets" element={<Outlets />} />
                <Route path="/foods" element={<Foods />} />
            </Routes>
        </Router>
    </div>
    );
}
export default App;