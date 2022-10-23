import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";

const FoodDetails = () => {

    const { id } = useParams();
    const [food, setFood] = useState([]);
    const [loading, setLoading] = useState(false);    

    useEffect(() => {
        const getFoods = async () => {
            setLoading(true);
            let result = await fetch(`http://localhost:4000/api/outletfoods/${id}`,{
                method: 'get',
            });
            result = await result.json();
            setFood(result);
            setLoading(false);
            console.warn(result)       
            ShowFoods(result)    
        }
        getFoods();
    }, [])


    const Loading = () => {
        return (
            <>
                Loading...
            </>
        )
    }

    const ShowFoods = () => {
        return (
            <div className="row ">
                {food.map((food) => (
                    <div className="card me-2" style={{ width: "20rem", height: "28rem", marginTop: "20px" }}  >
                        <img
                            style={{ width: "100%", height: "15vw", objectFit: "cover" }}
                            src={food.picture}
                            className="card-img-top"
                            alt="..."
                        />
                        <div className="card-body" style={{ padding: "10px" }}> 
                            <h5 className="card-title">{food.name}</h5>
                            <p style={{ overflow: "hidden", textOverflow: "ellipsis", display: "block", wordWrap: "break-word", maxHeight: "3.6em", lineHeight: "1.8em" }}>
                                Description : {food.description}
                            </p>
                            Price : {food.price}
                            <br />
                            Rating : {food.rating}
                            <br />
                            <br />
                            <div className="container" style={{ padding: "0px" }}>
                                <div className="raw">
                                    <NavLink to="/Foods" className="btn btn-outline-primary" >
                                        View more
                                    </NavLink> {"  "}
                                    <button className="btn btn-danger" >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>     
                ))}
            </div>
        )
    }

    return (
        <div>
            <div className="container">
                <div className="row">
                {loading ? <Loading /> : <ShowFoods />}
                </div>
            </div>
        </div>
    )
}

export default FoodDetails