import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Outlets from './pages/outlets';
import Foods from './pages/foods';
import SignIn from './components/signIn'
import SignUp from './components/signUp'
import AddOutlet from './pages/createOutlet';

function App() {
    return (
        <div className="App">
        <Router>
            <Routes>
                <Route path="/outlets" element={<Outlets />} />
                <Route path="/foods" element={<Foods />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/SignUp" element={<SignUp />} />
                <Route path="/addoutlet" element={<AddOutlet />} />
            </Routes>
        </Router>
    </div>
    );
}
export default App;