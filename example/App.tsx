import React from "react";
import { SocketIOProvider } from "../lib/io";
import { SSEProvider } from "../lib/sse";
import { SocketIo } from "./socketio/SocketIo";
import { ServerSent } from "./sse/ServerSent";

export const App = () => (
  <SSEProvider url="http://localhost:3000/server-sent">
    <SocketIOProvider url="http://localhost:3000">
      <ServerSent />
      <SocketIo />
    </SocketIOProvider>
  </SSEProvider>
);
