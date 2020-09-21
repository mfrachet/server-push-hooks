Use [socket.io](https://socket.io/) with React, in hooks (React v16.8+).

# Usage

## Installation

```sh
$ yarn add use-socketio
```

## In your code

### useSocket hook

Listen to a specific event and trigger the according callback every time there's one. **This hooks doesn't trigger a re-render. You have to manage it yourself.**

```jsx
import { SocketIOProvider, useSocket } from "use-socketio";

const Twitter = () => {
  const [tweets, setTweet] = useState([]);

  const { socket, subscribe, unsubscribe } = useSocket("tweet", (newTweet) =>
    setTweet([newTweet, ...tweets])
  );

  return tweets.length ? (
    <ul>
      {tweets.map((tweet) => (
        <li key={tweet.id}>{tweet.text}</li>
      ))}
    </ul>
  ) : (
    <p>Actually waiting for the websocket server...</p>
  );
};

const App = () => (
  <SocketIOProvider url="http://localhost:3000" opts={socketIoOptions}>
    <Twitter />
  </SocketIOProvider>
);
```

_The socketio options to pass to the provider are available here: https://socket.io/docs/client-api/#new-Manager-url-options._

### useLastMessage hook

Listen to the latest message received on a specific event name. **This hook triggers a re-render so you don't have to.**

```jsx
import { SocketIOProvider, useLastMessage } from "use-socketio";

const Twitter = () => {
  const { data: lastMessage, socket, subscribe, unsubscribe } = useLastMessage(
    "tweet"
  );

  return <p>{lastMessage || "Waiting for some tweets"}</p>;
};

const App = () => (
  <SocketIOProvider url="http://localhost:3000">
    <Twitter />
  </SocketIOProvider>
);
```

## Notes

For example on how to implement a Socket.io server, you can take a look at the [socket.io the example folder](../../example/socketio/socketio-server.js).
