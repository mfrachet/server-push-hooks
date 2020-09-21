import { createContext } from "react";

export const SSEContext = createContext<EventSource>(undefined);
