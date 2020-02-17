import React from "react";
import { useLastSSE } from "../../lib/sse";

export const ServerSent = () => {
  const { data, error } = useLastSSE();

  return (
    <section>
      <h3>SSE events</h3>

      <h4>Last message from SSE</h4>

      {data && <p data-cy="latest-sse-name">{data.name}</p>}
    </section>
  );
};
