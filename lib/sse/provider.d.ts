import React from "react";
export interface ISSEProviderProps {
    url: string;
    opts?: EventSourceInit;
}
export declare const SSEProvider: React.FC<ISSEProviderProps>;
