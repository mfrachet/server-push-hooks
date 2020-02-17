[![Build Status](https://travis-ci.org/mfrachet/use-socketio.svg?branch=master)](https://travis-ci.org/mfrachet/use-socketio)
[![Coverage Status](https://coveralls.io/repos/github/mfrachet/use-socketio/badge.svg?branch=master)](https://coveralls.io/github/mfrachet/use-socketio?branch=master)

Use [socket.io](https://socket.io/) with React, in hooks (React v16.8+).

# Usage

## Installation

```sh
$ yarn add use-socketio
```

## In your code

### useSocket hook

Listen to a specific event and trigger the according callback everytime there's one. **This hooks doesn't trigger a rerender. You have to manage it yourself.**

```jsx
import { SocketIOProvider, useSocket } from "use-socketio/io";

const Twitter = () => {
  const [tweets, setTweet] = useState([]);

  const { socket, subscribe, unsubscribe } = useSocket("tweet", newTweet =>
    setTweet([newTweet, ...tweets])
  );

  return tweets.length ? (
    <ul>
      {tweets.map(tweet => (
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

Listen to the latest message received on a specific event name. **This hook triggers a rerender so you don't have to.**

```jsx
import { SocketIOProvider, useLastMessage } from "use-socketio/io";

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

# Running some code

This project is built in typescript and provides an example of the hooks previously mentioned.

To run the example locally, you have to:

- clone the repo by running `$ git clone https://github.com/mfrachet/use-socketio`
- installing the project dependencies by running `$ yarn install` inside the directory
- In one terminal, run `$ yarn start:test-server`. This will start a nodejs server with a socketio server
- In another terminal, run `$ yarn start`. This will start a web application interacting with the server
- (Optionally) you can run the E2E test suites by opening another (a third) terminal and run `$ yarn e2e`
