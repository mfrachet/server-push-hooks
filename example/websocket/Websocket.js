import React from "react";
import {
  WebSocketProvider,
  useWebsocket,
  useLastWebsocketMessage,
} from "../../packages/use-websockets";
import { port } from "./constants";

const LastMessage = () => {
  const { data, ws } = useLastWebsocketMessage();

  return (
    <div>
      <h3>Last message</h3>
      <button onClick={() => ws.send("one-last")}>
        Ask for one last message
      </button>
      <button onClick={() => ws.send("three-last-messages")}>
        Ask for three last messages
      </button>
      {data?.message || "No last messages"}
    </div>
  );
};

const AllMessages = () => {
  const [messages, setMessages] = React.useState([]);
  const { ws } = useWebsocket((d) => setMessages([...messages, d.message]));

  return (
    <div>
      <h3>All messages</h3>

      <button onClick={() => setMessages([])}>Clear all messages</button>
      <button onClick={() => ws.send("all-messages")}>Ask for messages</button>

      {messages.length === 0 && <>No messages</>}
      {messages.length > 0 && (
        <ul>
          {messages.map((msg, index) => (
            <li key={index}>{msg}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export const WebsocketExample = () => {
  const [isOpened, setIsOpened] = React.useState(false);
  const [tab, setTab] = React.useState("all");

  return (
    <WebSocketProvider
      url={`ws://localhost:${port}/`}
      onOpen={() => setIsOpened(true)}
    >
      <p>Connection is {isOpened ? "opened" : "closed"}.</p>

      <button onClick={() => setTab("all")}>Switch to All message</button>
      <button onClick={() => setTab("last")}>Switch to Last message</button>

      {tab === "all" && <AllMessages />}
      {tab !== "all" && <LastMessage />}
    </WebSocketProvider>
  );
};
