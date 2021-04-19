import axios from 'axios';
import React,{useState} from 'react'
import {NavLink,useHistory} from 'react-router-dom';




const AddUser = ()=>{

let history = useHistory();



const [userData,setUserData] = useState({
     name:"",
     designation:"",
     salary:"",
     age:""
});

// const {name,designation,salary,age} = userData;
const onInputChange=(event)=>{
     // console.log(event.target.value)  ;
     setUserData({...userData,[event.target.name]:event.target.value})  ;
};

const onSubmit= async(event)=>{
     event.preventDefault();
     await axios.post("http://localhost:3003/users",userData);
     history.push("/");
}

return(<>

<div className="home-section py-5">
    <div className="container">
      <div className="home-wrapper">
      
      <div className="col-8 m-auto"> <NavLink to="/" className="btn btn-primary my-5 ">Back to Home</NavLink> </div>

<form onSubmit={onSubmit} className="col-8 m-auto p-5 border shadow rounded bg-light" >
     <div className="form-group">
     <input type="text" placeholder="Enter Name" className="form-control" name='name'  onChange={onInputChange}  value={userData.name}  />
     </div>

     <div className="form-group">
     <input type="text" placeholder="Enter Designation" className="form-control" name="designation" onChange={onInputChange}   value={userData.designation} />
     </div>

     <div className="form-group">
     <input type="text" placeholder="Enter Salary" className="form-control" name="salary" onChange={onInputChange}   value={userData.salary} />
     </div><div className="form-group">

     <input type="text" placeholder="Enter Age" className="form-control" name="age" onChange={onInputChange}   value={userData.age} />
     </div>

     <button type="submit" className="btn btn-success ">Submit</button>
</form>



       </div>
    </div>
</div>


</>)
}

export default AddUser;

