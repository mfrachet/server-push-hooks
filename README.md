# Usage

```
$ yarn add use-socket
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
