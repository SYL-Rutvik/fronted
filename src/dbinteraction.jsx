import { use, useState } from "react";
import axios from "axios";

export default function DBinteraction() {
    const [user, setUser] = useState();
    const [name,setName] = useState("");
    const [run,setRun] = useState("");
    const [country,setCountry] = useState("");
    const getuser = async () => {
        try {
            const res = await axios.get("http://localhost:3000/users");
            setUser(res.data);
        }
        catch(err) {
            console.log(err);
        }
        
    }
    const updateuser = async () => {
    // name, run, country, id
    try {
      const req = await axios.post(`http://localhost:3000/users/update`, {
        name,
        run,
        country,
        id,
      });
      const res = await axios.get("http://localhost:3000/users");
      setUser(res.data);
    } catch (err) {
      console.log(err);
    }
  };

    const updateUser = async () => {
        try {
            
        }
        catch(err) {
            console.log(err);
        }
    }
        

    return(
        <>
            <input
                type="text"
                placeholder="Name"
                onChange={(e) => setName(e.target.value)} />
            <input
                type="text"
                placeholder="Run"
                onChange={(e)=>setRun(e.target.value)}
            />
            <input
                type="text"
                placeholder="Country"
                onChange={(e)=>setCountry(e.target.value)}
            />
            <button onClick={addUser}>Add User</button>
    <button onClick={getuser}>Get User</button>
        <ul>
            {user && user.map((u)=> <li key={u.id}>
                {u.name}
                {u.run}
                {u.country}
            </li>)}
        </ul>
        </>
    )
}