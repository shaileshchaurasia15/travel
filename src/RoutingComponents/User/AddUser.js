import axios from 'axios';
import React, {useState} from 'react'
import { useHistory } from 'react-router-dom';

 const AddUser = () => {
     let history =useHistory();
     const [user,setUser] =  useState({
         name :"",
         username :"",
         email :"",
         phoneno :""
     });
     const {name, username, email, phoneno} = user;

     const chnageValue = (e) =>{
         console.log(e.target.name);
            setUser({...user,[e.target.name] : e.target.value});
           
     }

     const onSubmit = async (e) =>{
                e.preventDefault(); //this method prevent from adding unwanted content in url
                await axios.post("http://localhost:3002/users", user);
                history.push("/");
     }

    return (
        <div className="container">
           <div className="w-75 mx-auto shadow p-5">
               <h2 className="text-center mb-4">Add Users</h2>
           <form onSubmit={e=> onSubmit(e)}>
                <div className="mb-3">
                    <label  className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" name="name" value={name} 
                    onChange={e => chnageValue(e)} />
                  </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">User Name</label>
                    <input type="text" className="form-control" id="username" name="username" value={username}
                    onChange={e => chnageValue(e)} />
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Email</label>
                    <input type="text" className="form-control" id="email" name="email" value={email} 
                    onChange={e => chnageValue(e)}/>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Phone Number</label>
                    <input type="text" className="form-control" id="phoneno" name="phoneno" value={phoneno} 
                    onChange={e => chnageValue(e)}/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                </form>
           </div>
        </div>
    )
}

export default AddUser;