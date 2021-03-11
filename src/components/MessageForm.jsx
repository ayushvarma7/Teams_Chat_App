import { useState } from 'react';
import { sendMessage, isTyping } from 'react-chat-engine';
import { SendOutlined, PictureOutlined } from '@ant-design/icons';

const MessageForm=(props)=>{

    const [value, setValue]= useState('');
    const {chatId, creds}= props;

    const handleSubmit=(event)=>{
        event.preventDefault(); //prevents browser refresh once we submit the form

        const text= value.trim();

        sendMessage( creds, chatId, {text} ); 
        setValue('');
    }

    const handleChange=(event)=>{
        setValue(event.target.value)
        isTyping(props, chatId);
    }

    const handleUpload=(event)=>{
        const files= event.target.files;

        sendMessage(creds, chatId, {files, text:''})
    }

    return(
    <form className="message-form" onSubmit={handleSubmit}>
        <input 
            className="message-input"
            placeholder="Send a message..."
            value={value}
            onChange={handleChange}
            onSubmit={handleSubmit}
        />
        <label htmlFor="upload-button">
            <span className="image-button">
                <PictureOutlined className="picture-icon" />
            </span>
        </label>
        <input 
            type="file"
            multiple= {false}
            id="upload-button"
            style={{display:'none'}}
            onChange={handleUpload}
        />
        <button type="submit" className="send-button">
            <SendOutlined className="send-icon" />
        </button>
    </form>
        )
}

export default MessageForm;