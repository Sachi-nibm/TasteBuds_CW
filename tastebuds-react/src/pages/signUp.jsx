import React from "react";
import { Link, useNavigate} from "react-router-dom";

const Signup= () => {
    const [name, setName]= React.useState('');
    const [email, setEmail]= React.useState('');
    const [password, setPassword]= React.useState('');
    const navigate = useNavigate();

    const handleSignup= async() => {
        console.log(email,password);
        await fetch("http://localhost:4000/api/users",{
            method : 'post',
            headers: {
                'content-Type': 'application/json'
            },
            body : JSON.stringify({name, email, password}),
        }).then(response => {
            if(!response.ok){
                alert("Account creation failed"); 
            } else {
                navigate('/signin')
                alert("User account created successfully!"); 
            }
        }).catch(err => {
            console.log(err);
        });
    }

    return(
      <div className='login' style={{marginLeft : "30%" , marginTop : "50px", paddingBottom: "65px" }}>
            <h1>Registration</h1>
            <input type="text" placeholder='Enter Name Here' 
                style={{padding : "7px", display : "block", border : "solid 1px", width : "300px", margin : "20px"}}
                onChange={(e) => setName(e.target.value) } value = {name}
            />
            <input type="text" placeholder='Enter Email Here' 
                style={{padding : "7px", display : "block", border : "solid 1px", width : "300px", margin : "20px"}}
                onChange={(e) => setEmail(e.target.value) } value = {email}
            />
            <input type="password" placeholder='Enter Password Here'
                style={{padding : "7px", display : "block", border : "solid 1px", width : "300px", margin : "20px"}}
                onChange={(e) => setPassword(e.target.value)} value = {password}
            />
            <button className ="btn btn-primary" onClick={handleSignup} type="button" 
                style={{margin : "20px", width : "150px", padding : "10px", border: "solid 1px", cursor: "pointer"}}>
                Register
            </button>
            <br/>
            <div className="text-center position-absolute bottom-5 translate-middle-x" aria-current="page" style={{marginLeft : "15%", width : "300px", cursor: "pointer"}}>
                Already have an account? <Link to="/signin">Login here</Link>
            </div>
        </div>
      );
  }
  export default Signup;