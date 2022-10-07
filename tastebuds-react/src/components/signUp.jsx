import React from "react";
import { useNavigate } from "react-router-dom";

const Signup= () => {
    const [name, setName]= React.useState('');
    const [email, setEmail]= React.useState('');
    const [password, setPassword]= React.useState('');
    const navigate = useNavigate();
    const handleSignup= async() => {
        //console.log(email,password);
        let result = await fetch("http://localhost:4000/api/users",{
            method : 'post',
            body : JSON.stringify({name, email, password}),
            headers: {
                'content-Type': 'application/json'
            }
        });
        result = await result.json();
        console.log(result)
        const auth = localStorage.getItem('user')
        if(auth)
        {
            localStorage.setItem('user', JSON.stringify(result));
            localStorage.setItem("isAdmin", (result.isAdmin));
            console.log('Admin status :',result.isAdmin)
            localStorage.setItem("login", true);
            navigate('/')
        } else {
            alert("Something went wrong : Please check the details")
        }
  }

    return(
      <div className='login' style={{marginLeft : "30%" , marginTop : "100px"}}>
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
            <button onClick={handleSignup} type="button" 
                style={{margin : "20px", width : "150px", padding : "10px", backgroundColor: "skyblue", border: "solid 1px", cursor: "pointer"}}>
                Register
            </button>
        </div>
      );
  }
  export default Signup;