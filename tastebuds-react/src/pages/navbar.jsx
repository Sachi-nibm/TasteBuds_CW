import React from 'react'
import { Link, useNavigate} from "react-router-dom";


const Navigation = () => {
    //const auth = localStorage.getItem('user');
    const navigate = useNavigate();
    const logout=() => {
        localStorage.clear();
        navigate('/signin')
        window.location.reload(false);
    }
    if ("true" === localStorage.getItem("isAdmin") ){
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
                <img src="https://www.houstonfood2u.com/images/logos/original-logos-500.png"
                    alt="" width="50" height="50" className="d-inline-block align-text-top"/>
                <div className="container-fluid">
                    <span class="navbar-brand mb-0 h1">TasteBuds</span>  
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to ="/" className="nav-link active" aria-current="page">Outlet</Link>
                            </li>
                            <li className="nav-item">
                                <Link to ="/foods" className="nav-link active" aria-current="page">Food</Link>
                            </li>
                            <li className="nav-item">
                                <Link to ="/addoutlet" className="nav-link active" aria-current="page">Add Outlet</Link>
                            </li>
                            <li className="nav-item">
                                <Link to ="addfood" className="nav-link active" aria-current="page">Add Food</Link>
                            </li>
                        </ul>
                        <div className="float-end">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <button className="btn btn-danger" onClick={logout}> 
                                        Logout
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }else if("true" === localStorage.getItem('login') ){
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
                <img src="https://www.houstonfood2u.com/images/logos/original-logos-500.png"
                    alt="" width="50" height="50" className="d-inline-block align-text-top"/>
                <div className="container-fluid">
                    <span class="navbar-brand mb-0 h1">TasteBuds</span>   
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to ="/" className="nav-link active" aria-current="page">Outlet</Link>
                            </li>
                            <li className="nav-item">
                                <Link to ="/order" className="nav-link active" aria-current="page">Order</Link>
                            </li>
                            <li className="nav-item">
                                <Link to ="/wishlist" className="nav-link active" aria-current="page">Favorite</Link>
                            </li>
                        </ul>
                        <div className="float-end">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <button className="btn btn-danger" onClick={logout}> 
                                        Logout
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        )
    } else {
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
                <img src="https://www.houstonfood2u.com/images/logos/original-logos-500.png"
                    alt="" width="50" height="50" className="d-inline-block align-text-top"/>
                <div className="container-fluid">
                    <span class="navbar-brand mb-0 h1">Navbar</span>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to ="/" className="nav-link active" aria-current="page">Outlet</Link>
                            </li>
                        </ul>
                        <div className="float-end">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link to ="/signin" className="nav-link active" aria-current="page">Sign In</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to ="/signup" className="nav-link active" aria-current="page">Sign Up</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
    
}

export default Navigation;