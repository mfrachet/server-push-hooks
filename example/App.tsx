import React from "react";
import { SocketIOProvider } from "../lib/io";
import { SSEProvider } from "../lib/sse";
import { SocketIo } from "./socketio/SocketIo";
import { AllSSEMessages, LastSSEMessage } from "./sse/SSE";

export const App = () => (
  <div>
    <SSEProvider url="http://localhost:3000/last-sse">
      <LastSSEMessage />
    </SSEProvider>

    <SSEProvider url="http://localhost:3000/all-sse">
      <AllSSEMessages />
    </SSEProvider>

    <SocketIOProvider url="http://localhost:3000">
      <SocketIo />
    </SocketIOProvider>
  </div>
);
