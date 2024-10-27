import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
  // Ensure axios is imported


export default function AddUser() {

    let navigate = useNavigate();    

    const [user, setUsers] = useState({
        name: "",
        email: "",
        username: "",
    });
    const { name, email, username } = user;

    const onInputChange = (e) => {
        setUsers({...user, [e.target.name]: e.target.value});  // Fixed: Use setUsers
    };
    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:8080/user", user);  // Use users
        navigate("/");
        
    };

    return (
      <div className='container'>
        <div className="row">
          <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
            <h2 className="text-center m-4">Register User</h2>

            <form onSubmit={onSubmit}>

              <div className="mb-3">
                <label htmlFor="Name" className="form-label">Name</label>
                <input 
                  type="text" 
                  className="form-control" 
                  id="name" 
                  placeholder="Enter your name" 
                  name="name"  // Correct name attribute
                  value={name}
                  onChange={onInputChange}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">E-mail</label>
                <input 
                  type="email" 
                  className="form-control"
                  id="email" 
                  placeholder="Enter your email" 
                  name="email"  // Correct name attribute
                  value={email}
                  onChange={onInputChange}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="username" className="form-label">Username</label>
                <input 
                  type="text" 
                  className="form-control" 
                  id="username" 
                  placeholder="Enter your username" 
                  name="username"  // Correct name attribute
                  value={username}
                  onChange={onInputChange}
                />
              </div>
              <button type="submit" className="btn btn-outline-primary">Submit</button>
              <button type="reset" className="btn btn-outline-danger mx-2">Cancel</button>
            </form>
          </div>
        </div>
      </div>
    );
}
