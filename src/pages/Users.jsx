import React, { useEffect, useState } from 'react'
import axios from 'axios'
import User from '../components/User';

const Users = () => {

    const [users, setUsers] = useState();

    useEffect(() => {
        const func = async () => {
            const res = await axios.get("https://reqres.in/api/users?page=1");
            setUsers(res.data.data);
            // console.log(res.data.data);

        }
        func();
    }, []);

    return (
        <div className='container'>
            <div className='header-search'>
                <span className='header'>User Info</span>
                <input type='text' placeholder='Search..' className='searchButton'/>
            </div>
            <div className='Users'>
                {users?.map((user) => (
                    <User user={user} key={user.id}/>
                ))}
            </div>
        </div>
    )
}

export default Users