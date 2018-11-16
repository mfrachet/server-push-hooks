[![Build Status](https://travis-ci.org/mfrachet/use-socketio.svg?branch=master)](https://travis-ci.org/mfrachet/use-socketio)
[![Coverage Status](https://coveralls.io/repos/github/mfrachet/use-socketio/badge.svg?branch=master)](https://coveralls.io/github/mfrachet/use-socketio?branch=master)

Use [socket.io](https://socket.io/) using React Hooks (React v16.7+)

# Usage

```
$ yarn add use-socketio
```

# In your code

```javascript
import { ClientSocket, useSocket } from "use-socketio";

const Hello = () => {
  /**
   * The first element is event data
   * The second element is the socket(io) himself
   * The key in useSocket is the event name to listen to
   **/
  const [lutin, socket] = useSocket("lutin");

  useEffect(() => socket.emit("lutin", "hahah"), []);

  return <div>Hello {lutin}</div>;
};

const App = () => (
  <ClientSocket url="http://localhost:3000/">
    <Hello />
  </ClientSocket>
);
```
