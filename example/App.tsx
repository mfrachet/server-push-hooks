import React from "react";
import { SocketIOProvider } from "../lib/io";
import { ServerSent } from "./ServerSent";
import { SocketIo } from "./socketio/SocketIo";

export const App = () => (
  <SocketIOProvider url="http://localhost:3000">
    <ServerSent />
    <SocketIo />
  </SocketIOProvider>
);
