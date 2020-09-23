import React, { useEffect, useState } from "react";
import {
  SocketIOProvider,
  useLastMessage,
  useSocket,
} from "../../packages/use-socketio";
import { port } from "./constants";

const LastMessage = () => {
  const [lastMessage, setLastMessage] = useState();
  const { data, socket, unsubscribe, subscribe } = useLastMessage(
    "last-messages"
  );

  // synchronize state with data so that we can clear it in the ui
  useEffect(() => {
    setLastMessage(data);
  }, [data]);

  return (
    <section>
      <h3>Last message</h3>
      <button
        data-cy="clear-last-message"
        onClick={() => setLastMessage(undefined)}
      >
        Clear last messages
      </button>
      <button data-cy="unsubscribe-last-message" onClick={unsubscribe}>
        Unsubscribe last messages
      </button>
      <button data-cy="subscribe-last-message" onClick={subscribe}>
        Subscribe last messages
      </button>
      <button
        onClick={() => socket.emit("one-last-message")}
        data-cy="add-one-last-message"
      >
        Ask the server to emit one new message
      </button>

      <button
        onClick={() => socket.emit("three-last-messages")}
        data-cy="add-three-last-messages"
      >
        Ask the server to emit three new messages
      </button>
      <p data-cy="last-message">{lastMessage}</p>
    </section>
  );
};

const Message = () => {
  const [messages, setMessages] = useState([]);

  const { socket, subscribe, unsubscribe } = useSocket(
    "new-message",
    (newMessage) => setMessages([newMessage, ...messages])
  );

  return (
    <section>
      <h3>All tweets</h3>

      <button onClick={() => setMessages([])} data-cy="clear-messages">
        Clear messages
      </button>

      <button onClick={unsubscribe} data-cy="unsubscribe-messages">
        Unsubscribe
      </button>

      <button onClick={subscribe} data-cy="subscribe-messages">
        Subscribe
      </button>

      <button
        onClick={() => socket.emit("three-messages")}
        data-cy="add-three-messages"
      >
        Ask the server to emit three new messages
      </button>
      <ul data-cy="messages">
        {messages.map((message, index) => (
          <li key={index}>{message}</li>
        ))}
      </ul>
    </section>
  );
};

export const SocketIoExample = () => (
  <SocketIOProvider url={`http://localhost:${port}`}>
    <LastMessage />
    <Message />
  </SocketIOProvider>
);
