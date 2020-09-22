import React from "react";
import { SocketIoExample } from "./socketio/SocketIo";
import { AllSSEMessagesExample, LastSSEMessageExample } from "./sse/SSE";
import { Link, Router } from "@reach/router";

export const App = () => (
  <div>
    <nav>
      <Link to="/socket-io">SocketIo</Link>
      <Link to="/all-sse">All sse</Link>
      <Link to="/last-sse">Last sse</Link>
    </nav>
    <Router>
      <SocketIoExample path="/socket-io" />
      <AllSSEMessagesExample path="all-sse" />
      <LastSSEMessageExample path="last-sse" />
    </Router>
  </div>
);
