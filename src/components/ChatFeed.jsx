import MyMessage from './MessageForm'
import MessageForm from './MessageForm'
import TheirMessage from './TheirMessage'

const ChatFeed =(props) =>{
    const {chats, activeChat, userName, messages }=props;

    const chat=chats && chats[activeChat]
    console.log( messages);

    const renderMessages=()=>{
        const keys=Object.keys(messages);
        console.log(keys);
        return keys.map((key, index)=>{
            const message= messages[key];
            const lastMessageKey= index===0 ? null: keys[index-1];
            const isMyMessage=userName===message.sender.userName;

            return(
                <div key={`msg_${index}`} style={{width:'100%'}}>
                    <div className="message-block">
                        {
                            isMyMessage  //if the message is our then,
                            ? <MyMessage/>  //this will render our message 
                            : <TheirMessage/> //otherwise it renders senders message
                        }
                    </div>
                    <div className="read-receipts" style={{marginRight: isMyMessage ? '18px': '0px', marginLeft: isMyMessage ? '0px': '68px'}}>
                        read-receipts
                    </div>
                </div>
            )
        })
    }

    renderMessages();
    if(!chat) return 'Loading...';
    return (
        <div className="chat-feed">
        <div className="chat-title-container">
            <div className="chat-title">{chat.title}</div>
            <div className="chat-subtitle">
                {chat.people.map((person)=> ` ${person.person.userName}`)}
            </div>
        </div>
            {renderMessages()}
            <div style={{height:'100px'}}/>
            <div className="message-form-container">
                <MessageForm { ...props} chatId={activeChat}/>
            </div>
        </div>
    );
}

export default ChatFeed;