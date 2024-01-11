import React,{useState} from 'react';
import { Link ,useNavigate} from 'react-router-dom';

function Login() {
  const [credentials, setCredentials] = useState({ email: "", password: "" })
    // console.log(credentials);
    let navigate=useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("https://foodproject-backend.onrender.com/api/loginuser", {
            method: 'POST',
            headers:{
                'content-Type': 'application/json'
            },
            body:JSON.stringify({  email: credentials.email, password: credentials.password})
        });
        const json = await response.json();
        console.log(json);
        if(!json.success){
            alert("Enter valid details")
        }else{
            localStorage.setItem("userEmail",credentials.email)
            localStorage.setItem("authToken",json.authToken)
            // console.log(localStorage.getItem("authToken"))
            navigate("/");
        }

    }

    const onChange = (event) => {

        setCredentials({ ...credentials, [event.target.name]: event.target.value })
    }

    return (
        <div>
            <div className="container">

                <form onSubmit={handleSubmit}>
                  
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" name='email' value={credentials.email} onChange={onChange} />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" name='password' value={credentials.password} onChange={onChange} />
                    </div>
                   

                    <button type="submit" className="m-3 btn btn-success">Submit</button>
                    <Link to='/createuser' className='m-3 btn btn-danger'>Iam a new user</Link>
                </form>
            </div>
    </div>
  )
}

export default Login
