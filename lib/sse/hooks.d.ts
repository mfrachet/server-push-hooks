export declare const useLastSSE: (onOpen?: (e: Event) => void) => {
    data: any;
    error: any;
};
export declare const useSSE: (onMessage: (data: JSON) => void, onOpen?: (e: Event) => void) => any;
