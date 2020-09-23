import React, { useEffect } from "react";

export const WebsocketExample = () => {
  const [isOpened, setIsOpened] = React.useState(false);
  const [lastMessage, setLastMessage] = React.useState(null);
  const [messages, setMessages] = React.useState([]);
  const ws = React.useRef(new WebSocket("ws://localhost:3000/"));

  const sendMessage = (type) => () => {
    if (ws.current) {
      ws.current.send(type);
    }
  };

  const addMessage = (message) => {
    setMessages([...messages, message]);
  };

  const handleChangeRef = React.useRef();

  handleChangeRef.current = addMessage;

  useEffect(() => {
    ws.current.onopen = () => {
      setIsOpened(true);
    };

    ws.current.onmessage = (ev) => {
      let data;
      try {
        data = JSON.parse(ev.data);
      } catch {
        data = ev.data;
      }

      switch (data.type) {
        case "one-last":
          setLastMessage(data.message);
          break;

        case "three-last-messages":
          setLastMessage(data.message);
          break;

        case "all-messages":
          handleChangeRef.current(data.message);
          break;
      }
    };
  }, []);

  console.log("messages", messages);

  return (
    <section>
      <h2>Root</h2>
      Connection is {isOpened ? "opened" : "closed"}.
      <button
        onClick={() => {
          setLastMessage(undefined);
          setMessages([]);
        }}
      >
        Clear all messages
      </button>
      <h3>Last message</h3>
      <button onClick={sendMessage("one-last")}>
        Ask for one last message
      </button>
      <button onClick={sendMessage("three-last-messages")}>
        Ask for three last messages
      </button>
      {lastMessage || "No last messages"}
      <h3>All messages</h3>
      <button onClick={sendMessage("all-messages")}>Ask for messages</button>
      {messages.length === 0 && <>No messages</>}
      {messages.length > 0 && (
        <ul>
          {messages.map((msg) => (
            <li key={msg}>{msg}</li>
          ))}
        </ul>
      )}
    </section>
  );
};
