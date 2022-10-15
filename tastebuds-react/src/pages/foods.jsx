import React, {Component} from 'react'
import FoodCard from '../components/foodCard'
import axios from 'axios'

class Foods extends Component{
    state = {
        allFoods: [],
    }

    render(){
        return(
            <div className="container">
                <div className="row">
                    {this.state.allFoods.map((food) => (
                        <div key={food.id} className="col">
                            <FoodCard 
                                key={food.id} 
                                food= {food} 
                                onDelete = {() => this.deleteFood(food.id)}
                                onView = {() => this.viewFood(food.id)}
                            />
                        </div>
                    ))}
                </div> 
            </div>
        )
    }

    async componentDidMount() {
        const { data } = await axios.get(`http://localhost:4000/api/foods`);
        let foods = data.map((food) => {
            return {
                id : food._id,
                foodID : food.foodID ,
                name : food.name,
                price : food.price,
                description : food.description,
                rating : food.rating,
                picture : food.picture
            };
        });
        this.setState({allFoods : foods})
    }

    async deleteFood(id){
        await axios.delete(`http://localhost:4000/api/foods${id}`)
        let updatedFoods = this.state.allFoods.filter(food => food.id !== id)
        this.setState({allFoods : updatedFoods });
    }

    async viewFood(id){
        await axios.get(`http://localhost:4000/api/foods/${id}`)
        let viewFood = this.state.allFoods.filter(food => food.id === id)
        this.setState({allFoods : viewFood });
    }
}


export default Foods