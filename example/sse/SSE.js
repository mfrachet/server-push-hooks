import React, { useState } from "react";
import {
  useLastSSE,
  useSSE,
  SSEProvider,
} from "../../packages/use-server-sent-events";

export const LastSSEMessage = () => {
  const { data } = useLastSSE();

  return (
    <section>
      <h3>Last SSE Message</h3>
      <p data-cy="last-sse-message">{data && data.name}</p>
    </section>
  );
};

export const AllSSEMessages = () => {
  const [names, setNames] = useState([]);

  useSSE((nextName) => setNames([...names, nextName]));

  return (
    <section>
      <h3>All SSE messages</h3>
      <ul data-cy="all-sse-messages">
        {names.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </section>
  );
};

export const LastSSEMessageExample = () => {
  return (
    <SSEProvider url="http://localhost:3000/last-sse">
      <LastSSEMessage />
    </SSEProvider>
  );
};

export const AllSSEMessagesExample = () => {
  return (
    <SSEProvider url="http://localhost:3000/all-sse">
      <AllSSEMessages />
    </SSEProvider>
  );
};
