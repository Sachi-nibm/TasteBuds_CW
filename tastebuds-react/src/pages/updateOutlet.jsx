import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";

const FoodDetails = () => {

    const { id } = useParams();
    const [isActive, setActive] = useState([]);
    const [rating, setRating] = useState([]);
    console.warn(id)

    const updateOutlet = async () => {
            let result = await fetch(`http://localhost:4000/api/admin/outlets/${id}`, {
                method: 'put',
                body: JSON.stringify({ isActive, rating }),
                headers: {
                    'content-Type': 'application/json'
                }
            });
            result = await result.json();
            console.log(result);
            setActive('');
            setRating('');
    }
    return (
        <div className="outlet" style={{ marginLeft: "31%", marginTop: "50px",paddingBottom: "15px" }}>
            <h1>Update Outlet Details</h1>
            <br />
            <h6>Enter Outlet Status</h6>
            <input type="text" placeholder='Enter Outlet Status'
                style={{ padding: "7px", display: "block", border: "solid 1px", width: "300px", margin: "20px" }}
                onChange={(e) => setActive(e.target.value)} value={isActive}
            />
            <h6>Enter Outlet Rate</h6>
            <input type="text" placeholder='Enter Outlet Rate (out of 5)'
                style={{ padding: "7px", display: "block", border: "solid 1px", width: "300px", margin: "20px" }}
                onChange={(e) => setRating(e.target.value)} value={rating}
            />
            <br />
            <button className="btn btn-success px-4 py-2" onClick={updateOutlet} 
            style={{ margin: "20px", width: "150px", padding: "10px",  border: "solid 1px", cursor: "pointer" }}>
                Update
            </button>{" "}
            <NavLink to="/outlets" className="btn btn-primary" style={{ marginLeft: "20px" }}>Go to Outlet</NavLink>
        </div>
    )
}

export default FoodDetails