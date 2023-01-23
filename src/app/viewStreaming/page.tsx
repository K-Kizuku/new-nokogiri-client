"use client"

import { MessageInput } from "@/components/MessageInput";
import { MessageList } from "@/components/MessageList";

const ViewStreaming = () => {
    return (
        <div>
          <h1>Simple Chat</h1>
          <MessageInput />
          <MessageList />
        </div>
      );
}

export default ViewStreaming;
