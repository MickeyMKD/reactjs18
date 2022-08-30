import { useState, useEffect } from "react";



export const LogIn = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    console.log('Re-rendering');

    useEffect(() => {
        console.log('Password was changed')
    }, [password, username]);

    return (<div>
        <label htmlFor="">Username</label>
        <input 
            type="text" 
            placeholder="Enter Username" 
            value={username}
            onChange={(event) => setUsername(event.target.value)}
        />
        <span>{username}</span>
        <br />
        <label htmlFor="">Password</label>
        <input 
            type="text" 
            placeholder="Enter Password" 
            value={username}
            onChange={(event) => setPassword(event.target.value)}
        />
        <span>{password}</span>

        <button
            onClick={() => {
                setUsername('usernameStavre')
                setPassword('passwordStavridis')
            }}
        >Change BOTH and re-render only once
        </button>
    </div>)
};