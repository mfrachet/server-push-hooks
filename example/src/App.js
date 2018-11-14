import React from "react";
import { ClientSocket } from "use-socket";
import { Browser } from "./components/Browser";
import { Navbar } from "./components/Navbar";
import { Profile } from "./components/Profile";
import { Cols, Col } from "./components/Cols";
import { Feed } from "./components/Feed";
import { Box } from "./components/Box";

const items = [1, 2, 3];

export const App = () => (
  <ClientSocket url="https://socket-io-tweet-stream.now.sh">
    <div className="container">
      <Browser>
        <Navbar leftItems={items} rightItems={items} />
        <Cols>
          <Col>
            <Profile />
            <Box />
          </Col>
          <Col size={3}>
            <Feed />
          </Col>
          <Col>
            <Box />
          </Col>
        </Cols>
      </Browser>
    </div>
  </ClientSocket>
);

export default App;
