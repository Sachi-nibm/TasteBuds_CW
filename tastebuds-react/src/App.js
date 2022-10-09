import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Outlets from './pages/outlets';
import Foods from './pages/foods';
import SignIn from './components/signIn'
import SignUp from './components/signUp'
import AddOutlet from './pages/createOutlet';
import NavBar from './pages/navbar';
import AddFood from './pages/createFood';


function App() {
    return (
        <div className="App">
        <Router>
        <NavBar/>
            <Routes>
                <Route path="/" element={<Outlets />} />
                <Route path="/foods" element={<Foods />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/SignUp" element={<SignUp />} />
                <Route path="/addoutlet" element={<AddOutlet />} />
                <Route path="/addfood" element={<AddFood />} />
            </Routes>
        </Router>
    </div>
    );
}
export default App;