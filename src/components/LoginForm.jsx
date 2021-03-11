import {useState} from 'react';
import axios from 'axios';

const LoginForm=()=>{
    const [username, setUsername]= useState('');
    const [password, setPassword]= useState('');
    const [error, setError]= useState('');

    const handleSubmit=async(e)=>{
        e.preventDefault();

        const authObject={ 'Project-ID':"d76eb52d-0189-4eff-af4b-5a04be9a008d",
                        'User-Name':username,
                        'User-Secret':password}
            try{
                //username/password => chatengine => show messages
                await axios.get('https://api.chatengine.io/chats', {headers: authObject});
                //works out -> logged in
                localStorage.setItem('username', username);
                localStorage.setItem('password', password);

                window.location.reload(); //reload the window 
                //so we can do things differently when the user logs in 2nd time
            }catch(e){
                    //error-> try with new username 
                    setError('Invalid credentials, Try Again!');
            }
    }
    return (
        <div className="wrapper">
            <div className="form">
                <h1 className="title">Chat Application</h1>
                <form onSubmit={handleSubmit}>  
                <input type="text" value={username} onChange={(e)=> setUsername(e.target.value)} className="input" placeholder="Username" required/>
                <input type="password" value={password} onChange={(e)=> setPassword(e.target.value)} className="input" placeholder="Password" required />
                <div align="center" >
                    <button type="submit" className="button">
                        <span>Start Chatting</span>
                    </button>
                </div>
                <h2 className="error">{error}</h2>
                </form>
            </div>
        </div>
    )
}

export default LoginForm;