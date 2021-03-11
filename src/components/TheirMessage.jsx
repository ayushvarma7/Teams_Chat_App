const TheirMessage=({lastMessage, message})=>{
    const isFirstMessageByUser=!lastMessage || lastMessage.sender.username !== message.sender.username;  
   
    return( //this is only if this is the first message by the user
        <div className="message-row"> 
            {isFirstMessageByUser && (<div
                className="message-avatar"
                style={{backgroundImage:`url(${message?.sender?.avatar})`}}
            />)}
            {
                message?.attachments?.length>0
                ?( //this is for photos and videos
            <img 
            src={message.attachments[0].file}
            alt="message-attachment"
            className="message-image"
            style={{marginLeft: isFirstMessageByUser ? '4px': '48px'}} />
        ): (    //for texts
            <div className="message" style={{float:'left', backgroundColor:'#CABCBC', marginLeft: isFirstMessageByUser ? '4px': '48px'}}>
            {message.text}
        </div>
        )
    
            }
        </div>
    );
}

export default TheirMessage;