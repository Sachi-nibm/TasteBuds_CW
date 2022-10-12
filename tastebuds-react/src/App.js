import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Outlets from './pages/outlets';
import Foods from './pages/foods';
import SignIn from './pages/signIn'
import SignUp from './pages/signUp'
import AddOutlet from './pages/createOutlet';
import NavBar from './components/navbar';
import AddFood from './pages/createFood';
import Orders from './pages/orders';//Added by Sachini - 09/10/2022
import Customers from './pages/customer'
//import Wishlists from './pages/wishlists';


function App() {
    return (
        <div className="App">
        <Router>
        <NavBar/>
            <Routes>
                <Route path="/" element={<Outlets />} />
                <Route path="/foods/:id" element={<Foods />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/SignUp" element={<SignUp />} />
                <Route path="/addoutlet" element={<AddOutlet />} />
                <Route path="/addfood" element={<AddFood />} />
                <Route path="/orders" element={<Orders />} />
                <Route path="/users" element={<Customers />} />
            </Routes>
        </Router>
    </div>
    );
}
export default App;