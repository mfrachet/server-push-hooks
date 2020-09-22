Use [Server Sent Events](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events) with React, in hooks (React v16.8+).

# Usage

## Installation

```sh
$ yarn add use-server-sent-events
```

## In your code

### useSSE hook

Listen to a specific event and trigger the according callback every time there's one. **This hooks doesn't trigger a re-render. You have to manage it yourself.**

```jsx
import { SSEProvider, useSSE } from "use-server-sent-events";

const Parent = () => (
  <SSEProvider
    url="http://localhost:3000/last-sse"
    onOpen={() => console.log("connection opened")}
  >
    <Children />
  </SSEProvider>
);

const Children = () => {
  const [messages, setMessages] = useState([]);
  const error = useSSE((nextMessage) =>
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

### useLastSSE hook

Listen to the latest message received on a specific event name. **This hook triggers a re-render so you don't have to.**

```jsx
import { SSEProvider, useLastSSE } from "use-server-sent-events";

const Parent = () => (
  <SSEProvider url="http://localhost:3000/sse">
    <Children />
  </SSEProvider>
);

const Children = () => {
  const { data, error } = useLastSSE();

  return <p>{data || "No message yet"}</p>;
};
```

## Notes

For example on how to implement a Server Sent Event server, you can take a look at the [Server Sent Event example folder](../../example/sse/sse-server.js).
