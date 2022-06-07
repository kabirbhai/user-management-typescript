import React, { FC } from 'react';

interface Props {
    name: string,
     age: number,
    addUser: () => void
}

const User: FC<Props> = ({name, age, addUser}) => {
    
    return (
        <div>
            <h1>I am user</h1>
            <h3>My name is: {name} With experience {age}</h3>
        <button onClick={addUser}>Add me</button>
        </div>
    );
};

export default User;