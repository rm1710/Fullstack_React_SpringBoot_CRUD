import React, { useEffect, useState } from 'react'
import { Link,useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
  // Ensure axios is imported


export default function EditUser() {

    let navigate = useNavigate(); 
    
    const{id}=useParams()

    const [user, setUsers] = useState({
        name: "",
        email: "",
        username: "",
    });
    const { name, email, username } = user;

    const onInputChange = (e) => {
        setUsers({...user, [e.target.name]: e.target.value});  // Fixed: Use setUsers
    };

    useEffect(() => {
        loadUser();
    }, [])


    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:8080/user/${id}`, user);  // Use users
        navigate("/");   
    };

    const loadUser = async () => {
        const result = await axios.get(`http://localhost:8080/user/${id}`);
        setUsers(result.data);
    };

    return (
      <div className='container'>
        <div className="row">
          <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
            <h2 className="text-center m-4">Edit User</h2>

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
                  name="username"  
                  value={username}
                  onChange={onInputChange}
                />
              </div>
              <button type="submit" className="btn btn-outline-primary">Submit</button>
              <Link type="reset" className="btn btn-outline-danger mx-2" to="/">Cancel</Link>
            </form>
          </div>
        </div>
      </div>
    );
}

