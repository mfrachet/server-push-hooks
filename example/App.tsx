import React from "react";
import { SocketIOProvider } from "../lib/io";
import { SocketIo } from "./socketio/SocketIo";
import { ServerSent } from "./sse/ServerSent";

export const App = () => (
  <SocketIOProvider url="http://localhost:3000">
    <ServerSent />
    <SocketIo />
  </SocketIOProvider>
);
