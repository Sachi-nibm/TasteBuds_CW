import React from "react";

const AddOutlet = () => {
    const [outletID, setOutletID] = React.useState('');
    const [name, setName] = React.useState('');
    const [address, setAddress] = React.useState('');
    const [picture, setPicture] = React.useState('');
    const [rating, setRating] = React.useState('');

    const addOutlet = async () => {
        try {
            //console.log(outletId,name,price,descrip,picture,rating)
            if (!outletID || !name || !address || !picture) {
                alert("Error : Please fill the all required Fileds");
            } else
                if (name.length < 3 || address.length < 5) {
                    alert("Error : Please check the Outlet name and Address..! ");
                } else {
                    // console.log(outletID,name,address,rating,picture)
                    let result = await fetch("http://localhost:4000/api/outlets", {
                        method: 'post',
                        body: JSON.stringify({ outletID, name, address, picture, rating }),
                        headers: {
                            'content-Type': 'application/json'
                        }
                    });
                    result = await result.json();
                    console.log(result);
                    alert("Outlet Created Successfully..!");
                    setOutletID('');
                    setName('');
                    setAddress('');
                    setPicture('');
                    setRating('');
                }
        } catch {
            alert("Error : Something went wrong. Check again. ");
        }

    }

    return (
        <div className="outlet" style={{ marginLeft: "30%", marginTop: "50px" }}>
            <h1>Add Product</h1>
            <input type="text" placeholder='Enter Outlet ID'
                style={{ padding: "7px", display: "block", border: "solid 1px", width: "300px", margin: "20px" }}
                onChange={(e) => setOutletID(e.target.value)} value={outletID}
            />
            <input type="text" placeholder='Enter Outlet Name'
                style={{ padding: "7px", display: "block", border: "solid 1px", width: "300px", margin: "20px" }}
                onChange={(e) => setName(e.target.value)} value={name}
            />
            <input type="text" placeholder='Enter Outlet Address'
                style={{ padding: "7px", display: "block", border: "solid 1px", width: "300px", margin: "20px" }}
                onChange={(e) => setAddress(e.target.value)} value={address}
            />
            <input type="text" placeholder='Enter Outlet Picture URL'
                style={{ padding: "7px", display: "block", border: "solid 1px", width: "300px", margin: "20px" }}
                onChange={(e) => setPicture(e.target.value)} value={picture}
            />
            <input type="text" placeholder='Enter Outlet Rate (out of 5)'
                style={{ padding: "7px", display: "block", border: "solid 1px", width: "300px", margin: "20px" }}
                onChange={(e) => setRating(e.target.value)} value={rating}
            />
            <button onClick={addOutlet} type="button"
                style={{ margin: "20px", width: "150px", padding: "10px", backgroundColor: "skyblue", border: "solid 1px", cursor: "pointer" }}>
                Add Outlet
            </button>
        </div>
    )
}

export default AddOutlet