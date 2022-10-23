import React, { Component } from 'react'
import Banner from '../images/Banner.png'
import OutletCard from '../components/outletCard'
import axios from 'axios'

class Outlets extends Component {
    state = {
        allOutlets: [],
    }

    render() {
        return (
            <div className="">
                <img src={Banner} alt='' style={{ width: "100%", height: '450px', objectFit: "cover", paddingTop: '15px' }} />
                <div className='container'>
                    <div className="row">
                        {this.state.allOutlets.map((outlet) => (
                            <div key={outlet.id} className="col">
                                <OutletCard
                                    key={outlet.id}
                                    outlet={outlet}
                                    onDelete={() => this.deleteOutlet(outlet.id)}
                                    onWishlist={() => this.AddToWishlist(outlet.id)}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    }

    async componentDidMount() {
        const { data } = await axios.get("http://localhost:4000/api/outlets");
        let oultets = data.map((outlet) => {
            return {
                id: outlet._id,
                outletID: outlet.outletID,
                name: outlet.name,
                address: outlet.address,
                rating: outlet.rating,
                picture: outlet.picture
            };
        });
        this.setState({ allOutlets: oultets })
    }

    async deleteOutlet(id) {
        await axios.delete(`http://localhost:4000/api/outlets/${id}`, {
            headers: {
                "x-jwt-token": localStorage.getItem("token")
            }
        }
        )
        let updatedOutlet = this.state.allOutlets.filter(outlet => outlet.id !== id)
        this.setState({ allOutlets: updatedOutlet });
    }
    async AddToWishlist(id) {
        await axios.post(`http://localhost:4000/api/wishlists`, {
            userID: localStorage.getItem("userId"),
            outletID: id,
        })
            .then((response) => {
                alert("Added to the Wishlist");
            })
            .catch((error) => {
                console.log(error);
                alert("something is wrong");
            });
    }
}

export default Outlets