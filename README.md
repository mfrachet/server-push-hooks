[![Build Status](https://travis-ci.org/mfrachet/use-socket.svg?branch=master)](https://travis-ci.org/mfrachet/use-socket)
[![Coverage Status](https://coveralls.io/repos/github/mfrachet/use-socket/badge.svg?branch=master)](https://coveralls.io/github/mfrachet/use-socket?branch=master)

Use [socket.io](https://socket.io/) using React Hooks (React v16.7+)

# Usage

_Only available on github for now. use-socket seems to be used on npm_

```
$ yarn add mfrachet/use-socket
```

# In your code

```javascript
import { ClientSocket, useSocket } from "use-socket";

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
