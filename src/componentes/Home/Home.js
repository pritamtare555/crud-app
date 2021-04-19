import React, { useEffect, useState } from "react";
import axios from "axios";
import {NavLink} from 'react-router-dom';

const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getData();
  }, []);

    const getData = async () => {
    const result = await axios.get("http://localhost:3003/users");

    setUsers(result.data.reverse());

    console.log(users);
  };


  return (
    <>

<div className="home-section">
    <div className="container">
      <div className="home-wrapper">


<NavLink to="/add-user" className="btn btn-success my-5">Add User</NavLink>
          
<table className="table border shadow rounded text-center">
  <thead className="bg-dark text-light" >
    <tr>
      <th> No.</th>
      <th scope="col">Name</th>
      <th scope="col">Designation</th>
      <th>View Details</th>
    </tr>
  </thead>


  <tbody>
   {
     users.map((values,index)=>{
        return (<tr key={index}>
        <th>{index+1}</th>
        <td>{values.name}</td>
        <td>{values.designation}</td>
        <td>
            <NavLink to="/view-user" className="btn btn-success">View</NavLink>
            <NavLink to="/edit-user" className="btn btn-primary mx-2">Edit</NavLink>
            <NavLink to="" className="btn btn-danger">Delete</NavLink>
        </td>        
        </tr>)
     })
   }
   
  </tbody>
</table>
      </div>
    </div>
</div>


    </>
  );
};

export default Home;
