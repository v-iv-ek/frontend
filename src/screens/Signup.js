import React, { useState } from 'react'
import { Link} from 'react-router-dom'
function Signup() {
    const [credentials, setCredentials] = useState({ name: '', email: "", password: "", geolocation: "" })
    // let navigate=useNavigate();
    // console.log(credentials);


    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("https://foodproject-backend.onrender.com/api/createuser", {
            method: 'POST',
            headers:{
                'content-Type': 'application/json'
            },
            body:JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password, location: credentials.geolocation })
        });
        const json = await response.json();
        console.log(`response is ${response} `);
        console.log(json);
        if (!json.success) {
            alert("Enter valid credentials")
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
                        <label htmlFor="name">Name:</label>
                        <input type="text" className="form-control" placeholder="Name" name='name' value={credentials.name} onChange={onChange} />

                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" name='email' value={credentials.email} onChange={onChange} />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" name='password' value={credentials.password} onChange={onChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Address">Address</label>
                        <input type="text" className="form-control" id="exampleInputAddress" placeholder="Address" name='geolocation' value={credentials.geolocation} onChange={onChange} />
                    </div>

                   <Link to='/login'><button type="submit" className="m-3 btn btn-success">Submit</button></Link> 
                    <Link to='/login' className='m-3 btn btn-danger'>Already a user</Link>
                </form>
            </div>
        </div>
    )
}

export default Signup
