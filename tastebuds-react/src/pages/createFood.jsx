import React from "react";

const AddFood = () => {
    const [outletId, setOutletID] = React.useState('');
    const [name, setName] = React.useState('');
    const [price, setPrice] = React.useState('');
    const [description, setdescription] = React.useState('');
    const [rating, setRating] = React.useState('');
    const [picture, setPicture] = React.useState('');

    const addFood = async () => {
        try {
            //console.log(outletId,name,price,descrip,picture,rating)
        if (!outletId || !name || !price || !description || !picture) {
            alert("Error : Please fill the all required Fileds");
        } else 
        if (name.length < 3 || description.length < 5) {
            alert("Error : Please check the Food name and Description..! ");
        } else {
            let result = await fetch("http://localhost:4000/api/foods", {
                method: 'post',
                body: JSON.stringify({ outletId, name, price, description, rating, picture }),
                headers: {
                    'content-Type': 'application/json'
                }
            });
            result = await result.json();
            console.log(result);
            alert("Food Item Created Successfully..!");
            setOutletID('');
            setName('');
            setPrice('');
            setdescription('');
            setRating('');
            setPicture('');
        }
        }catch{
            alert("Error : Something went wrong. Check again. ");
        }
    }

    return (
        <div className="AddFood" style={{ marginLeft: "30%", marginTop: "50px" }}>
            <h1>Add Food</h1>
            <input type="text" placeholder='Enter Outlet ID'
                style={{ padding: "7px", display: "block", border: "solid 1px", width: "300px", margin: "20px" }}
                onChange={(e) => setOutletID(e.target.value)} value={outletId}
            />
            <input type="text" placeholder='Enter Food Name'
                style={{ padding: "7px", display: "block", border: "solid 1px", width: "300px", margin: "20px" }}
                onChange={(e) => setName(e.target.value)} value={name}
            />
            <input type="text" placeholder='Enter Food Price'
                style={{ padding: "7px", display: "block", border: "solid 1px", width: "300px", margin: "20px" }}
                onChange={(e) => setPrice(e.target.value)} value={price}
            />
            <input type="text" placeholder='Enter Food Description'
                style={{ padding: "7px", display: "block", border: "solid 1px", width: "300px", margin: "20px" }}
                onChange={(e) => setdescription(e.target.value)} value={description}
            />
            <input type="text" placeholder='Enter Outlet Picture URL'
                style={{ padding: "7px", display: "block", border: "solid 1px", width: "300px", margin: "20px" }}
                onChange={(e) => setPicture(e.target.value)} value={picture}
            />
            <input type="text" placeholder='Enter Outlet Rate (out of 5)'
                style={{ padding: "7px", display: "block", border: "solid 1px", width: "300px", margin: "20px" }}
                onChange={(e) => setRating(e.target.value)} value={rating}
            />
            <button onClick={addFood} type="button"
                style={{ margin: "20px", width: "150px", padding: "10px", backgroundColor: "skyblue", border: "solid 1px", cursor: "pointer" }}>
                Add Food
            </button>
        </div>

    )
}

export default AddFood