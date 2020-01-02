import { createContext } from "react";

export const SocketIOContext = createContext<SocketIOClient.Socket>(undefined);
