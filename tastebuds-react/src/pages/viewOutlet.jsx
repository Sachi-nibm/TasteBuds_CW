import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Rating from '@mui/material/Rating';

const FoodDetails = () => {

    const { id } = useParams();
    const [outlet, setOutlet] = useState([]);
    const [loading, setLoading] = useState(false);
    const [value, setValue] = useState([]);

    useEffect(() => {
        const getOutlet = async () => {
            setLoading(true);
            let result = await fetch(`http://localhost:4000/api/admin/outlets/${id}`, {
                method: 'get',
            });
            result = await result.json();
            setOutlet(result);
            setLoading(false);
            console.warn(result)
            ShowOutlet(result)
        }
        getOutlet();
    }, [])


    const Loading = () => {
        return (
            <>
                Loading...
            </>
        )
    }

    <Rating
        name="simple-controlled"
        value={outlet.rating}
        onChange={(event, newValue) => {
            setValue(newValue);
        }}
    />
    const ShowOutlet = () => {
        return (
            <>
                <div className="col-md-6" style={{ marginTop: "50px" }}>
                    <img src={outlet.picture} alt="" height='400px' width='400px'></img>
                </div>
                <div className="col-md-6" style={{ marginTop: "100px" }}>
                    <h4 className="text-uppercase text-black-60">{outlet.name}</h4>
                    <h1 className="display-6"></h1>
                    <br />
                    <p className="lead fw-bolder">Address : {outlet.address}</p>
                    <p className="lead fw-bolder">Rating :<Rating name="read-only" value={outlet.rating} readOnly /></p>
                    <p className="lead fw-bolder">Status : {outlet.isActive ? 'Active': 'Inactive'}</p>
                    <br />
                    <br />
                    <Link to="/outlets" className="btn btn-primary">Go to Outlet</Link>
                </div>
            </>
        )
    }

    return (
        <div>
            <div className="container">
                <div className="row">
                    {loading ? <Loading /> : <ShowOutlet />}
                </div>
            </div>
        </div>
    )
}

export default FoodDetails