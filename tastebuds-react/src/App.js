import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Outlets from './pages/outlets';
import Foods from './pages/foods';
import SignIn from './components/signIn'

function App() {
    return (
        <div className="App">
        <Router>
            <Routes>
                <Route path="/" element={<Outlets />} />
                <Route path="/foods" element={<Foods />} />
                <Route path="/signin" element={<SignIn />} />
            </Routes>
        </Router>
    </div>
    );
}
export default App;