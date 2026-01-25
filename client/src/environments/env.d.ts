export { };

declare global {
    interface Window {
        __env: {
            revProxy: boolean;
        };
    }
}