import {ChatEngine} from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';

import "./App.css";

const App=()=>{
    return(
        <ChatEngine
            height="100vh" 
            projectID="d76eb52d-0189-4eff-af4b-5a04be9a008d"
             userName="Ayush"
              userSecret="secret"
              renderChatFeed={(chatAppProps)=> <ChatFeed {...chatAppProps}/>}
        />
    );
}


export default App;