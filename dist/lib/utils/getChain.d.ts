export declare const getChain: (chainId: number) => {
    blockExplorers: {
        readonly default: {
            readonly name: "Blockscout";
            readonly url: "https://explorer.plumenetwork.xyz";
            readonly apiUrl: "https://explorer.plumenetwork.xyz/api";
        };
    };
    contracts: {
        readonly multicall3: {
            readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
            readonly blockCreated: 48577;
        };
    };
    id: 98865;
    name: "Plume Mainnet";
    nativeCurrency: {
        readonly name: "Plume Ether";
        readonly symbol: "ETH";
        readonly decimals: 18;
    };
    rpcUrls: {
        readonly default: {
            readonly http: readonly ["https://rpc.plumenetwork.xyz"];
            readonly webSocket: readonly ["wss://rpc.plumenetwork.xyz"];
        };
    };
    sourceId: 1;
    testnet?: boolean | undefined;
    custom?: Record<string, unknown> | undefined;
    fees?: import('viem').ChainFees<undefined> | undefined;
    formatters?: undefined;
    serializers?: import('viem').ChainSerializers<undefined, import('viem').TransactionSerializable> | undefined;
} | {
    blockExplorers: {
        readonly default: {
            readonly name: "Blockscout";
            readonly url: "https://test-explorer.plumenetwork.xyz";
            readonly apiUrl: "https://test-explorer.plumenetwork.xyz/api";
        };
    };
    contracts: {
        readonly multicall3: {
            readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
            readonly blockCreated: 481948;
        };
    };
    id: 98864;
    name: "Plume Devnet";
    nativeCurrency: {
        readonly name: "Plume Sepolia Ether";
        readonly symbol: "ETH";
        readonly decimals: 18;
    };
    rpcUrls: {
        readonly default: {
            readonly http: readonly ["https://test-rpc.plumenetwork.xyz"];
            readonly webSocket: readonly ["wss://test-rpc.plumenetwork.xyz"];
        };
    };
    sourceId: 11155111;
    testnet: true;
    custom?: Record<string, unknown> | undefined;
    fees?: import('viem').ChainFees<undefined> | undefined;
    formatters?: undefined;
    serializers?: import('viem').ChainSerializers<undefined, import('viem').TransactionSerializable> | undefined;
} | undefined;
