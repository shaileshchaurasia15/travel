import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home =(props)=> {
    const [users, setUser] = useState([]);
    useEffect(()=>{
       loadUsers();
    },[]);

    const loadUsers = async () =>{
        const result = await axios.get("http://localhost:3002/users");
       setUser(result.data.reverse());
    }

    const deleteUser = async id =>{
        await axios.delete(`http://localhost:3002/users/${id}`);
        loadUsers();
    }

    return (
        <div className="container">
            <div className="py-4">
            <table className="table border shadow">
  <thead className=" table-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">User Name</th>
      <th scope="col">Email</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    {
        users.map((user,index)=>(
            
                <tr>
                <th scope="row">{index+1}</th>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                    
                    <Link className="fa fa-eye mr-2"></Link>
                    <Link to={`/user/edit/${user.id}`} className="fa fa-edit mr-2"></Link>
                    <Link className="fa fa-trash text-danger" onClick={()=>deleteUser(user.id)}></Link>
                </td>
              </tr>
            
        ))
    }
    
  </tbody>
</table>
            </div>
        </div>
    )
}

export default Home
