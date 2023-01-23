'use client'
import { useMessageList } from "@/libs/messageList";

export const MessageList = () => {
    const messageList = useMessageList();
  
    return (
      <div>
        {messageList.map((m, i) => (
          <div key={i}>{m.content}</div>
        ))}
      </div>
    );
  };