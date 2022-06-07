import React from 'react';
import User from './User';

const Users = () => {
    const handleAddUser = ():void =>{

    }
    return (
        <div>
            <User name='kabir' age={33} addUser={handleAddUser}></User>
        </div>
    );
};

export default Users;