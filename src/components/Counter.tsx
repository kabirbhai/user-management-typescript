import React, { ChangeEvent, FormEvent, useState } from 'react';


interface User {
    name?: string,
    job?: string
}

const Counter = () => {

    const [counter, setCounter] = useState <number> (0)
    const [user, setUser] = useState <User | null >(null)


    
    const handleUserSubmit = (e: FormEvent<HTMLFormElement>) =>{
        e.preventDefault()

        const userFrom ={
            name: 'kabir',
            job: 'dev'
        }
        setUser(userFrom)

    }

    const handleNameChange = (e:ChangeEvent<HTMLInputElement>): void =>{

    }


    const handleIncrease = (): void =>{
        setCounter(counter + 1)
    }

    return (
        <div>
            <h1>This is Counter.</h1>
            <h2>{counter}</h2>
            <button onClick={handleIncrease}>Click me</button>
        </div>
    );
};

export default Counter;