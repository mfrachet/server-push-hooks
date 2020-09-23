Use [Websocket](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API) with React, in hooks (React v16.8+).

# Usage

## Installation

```sh
$ yarn add use-websockets
```

## In your code

### useWebsocket hook

Listen to a specific event and trigger the according callback every time there's one. **This hooks doesn't trigger a re-render. You have to manage it yourself.**

```jsx
import { WebsocketProvider, useWebsocket } from "use-websockets";

const Parent = () => (
  <WebsocketProvider
    url="wss://localhost:3000/"
    onOpen={() => console.log("connection opened")}
  >
    <Children />
  </WebsocketProvider>
);

const Children = () => {
  const [messages, setMessages] = useState([]);
  const { ws, error } = useWebsocket((nextMessage) =>
    setMessages([...messages, nextMessage])
  );

  return (
    <ul>
      {messages.map((msg, index) => (
        <li key={index}>{msg}</li>
      ))}
    </ul>
  );
};
```

### useLastWebsocketMessage hook

Listen to the latest message received on a specific event name. **This hook triggers a re-render so you don't have to.**

```jsx
import { WebsocketProvider, useLastWebsocketMessage } from "use-websockets";

const Parent = () => (
  <WebsocketProvider url="wss://localhost:3000/">
    <Children />
  </WebsocketProvider>
);

const Children = () => {
  const { data, error, ws } = useLastWebsocketMessage();

  return <p>{data || "No message yet"}</p>;
};
```

## Notes

For example on how to implement a Websocket server, you can take a look at the [Websocket example folder](../../example/websocket/websocket-server.js).
