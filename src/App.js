import {ChatEngine} from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';

import "./App.css";

const App=()=>{
    if(!localStorage.getItem('username')) return <LoginForm/>
    return(
        <ChatEngine
            height="100vh" 
            projectID="d76eb52d-0189-4eff-af4b-5a04be9a008d"
             userName={localStorage.getItem('username')}
              userSecret={localStorage.getItem('password')} 
              renderChatFeed={(chatAppProps)=> <ChatFeed {...chatAppProps}/>}
        />
    );
}


export default App;