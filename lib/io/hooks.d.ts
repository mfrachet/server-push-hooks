/// <reference types="socket.io-client" />
export declare const useSocket: (eventKey?: string, callback?: (...args: any) => void) => {
    socket: SocketIOClient.Socket;
    unsubscribe: () => void;
    subscribe: () => void;
};
export declare const useLastMessage: (eventKey: string) => {
    data: any;
    socket: SocketIOClient.Socket;
    unsubscribe: () => void;
    subscribe: () => void;
};
