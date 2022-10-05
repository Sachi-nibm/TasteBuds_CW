import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Outlets from './pages/outlets';
import Foods from './pages/foods';
import SignIn from './components/signIn'
import SignUp from './components/signUp'

function App() {
    return (
        <div className="App">
        <Router>
            <Routes>
                <Route path="/" element={<Outlets />} />
                <Route path="/foods" element={<Foods />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/SignUp" element={<SignUp />} />
            </Routes>
        </Router>
    </div>
    );
}
export default App;