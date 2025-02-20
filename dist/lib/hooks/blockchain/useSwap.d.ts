import { TransactionReceipt, Address } from 'viem';
import { Token } from '../../types';
export declare const useSwapTx: (enabled: boolean, inputToken: Token | undefined, outputToken: Token | undefined, path: (Address | boolean)[], amountIn: bigint, amountOutMinimum: bigint, onTxSuccess?: (txReceipt: TransactionReceipt) => void, onTxError?: (error: Error) => void) => import('../../types').ContractWriteQuery<readonly [{
    readonly type: "constructor";
    readonly inputs: readonly [{
        readonly name: "_factory";
        readonly internalType: "contract IMaverickV2Factory";
        readonly type: "address";
    }, {
        readonly name: "_weth";
        readonly internalType: "contract IWETH9";
        readonly type: "address";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "target";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "AddressEmptyCode";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "account";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "AddressInsufficientBalance";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "inputLength";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "expectedLength";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "BytesLibInvalidLength";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "BytesLibSliceOutOfBounds";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "BytesLibSliceOverflow";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "BytesLibToAddressOutOfBounds";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "BytesLibToBoolOutOfBounds";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "FailedInnerCall";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "MathOverflowedMulDiv";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "token";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "amountMinimum";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "contractBalance";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "PaymentInsufficientBalance";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "PaymentSenderNotWETH9";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "deadline";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "blockTimestamp";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "PositionDeadlinePassed";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "sqrtPrice";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "minSqrtPrice";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "maxSqrtPrice";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "PositionExceededPriceBounds";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "RouterNotFactoryPool";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "amountOutMinimum";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "amountOut";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "RouterTooLittleReceived";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "amountInMaximum";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "amountIn";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "RouterTooMuchRequested";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "RouterZeroSwap";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "tick";
        readonly internalType: "int256";
        readonly type: "int256";
    }];
    readonly name: "TickMaxExceeded";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "token";
        readonly internalType: "contract IERC20";
        readonly type: "address";
    }, {
        readonly name: "to";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "amount";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "TransferFailed";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "token";
        readonly internalType: "contract IERC20";
        readonly type: "address";
    }, {
        readonly name: "from";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "to";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "amount";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "TransferFromFailed";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "deadline";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "checkDeadline";
    readonly outputs: readonly [];
    readonly stateMutability: "payable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "pool";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
    }, {
        readonly name: "minSqrtPrice";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "maxSqrtPrice";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "checkSqrtPrice";
    readonly outputs: readonly [];
    readonly stateMutability: "payable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "recipient";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "path";
        readonly internalType: "bytes";
        readonly type: "bytes";
    }, {
        readonly name: "amountIn";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "amountOutMinimum";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "exactInputMultiHop";
    readonly outputs: readonly [{
        readonly name: "amountOut";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "payable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "recipient";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "pool";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
    }, {
        readonly name: "tokenAIn";
        readonly internalType: "bool";
        readonly type: "bool";
    }, {
        readonly name: "amountIn";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "amountOutMinimum";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "exactInputSingle";
    readonly outputs: readonly [{
        readonly name: "amountOut";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "payable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "argsPacked";
        readonly internalType: "bytes";
        readonly type: "bytes";
    }];
    readonly name: "exactInputSinglePackedArgs";
    readonly outputs: readonly [{
        readonly name: "amountOut";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "payable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "recipient";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "path";
        readonly internalType: "bytes";
        readonly type: "bytes";
    }, {
        readonly name: "amountOut";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "amountInMaximum";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "exactOutputMultiHop";
    readonly outputs: readonly [{
        readonly name: "amountIn";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "payable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "recipient";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "pool";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
    }, {
        readonly name: "tokenAIn";
        readonly internalType: "bool";
        readonly type: "bool";
    }, {
        readonly name: "amountOut";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "amountInMaximum";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "exactOutputSingle";
    readonly outputs: readonly [{
        readonly name: "amountIn";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "amountOut_";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "payable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "recipient";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "pool";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
    }, {
        readonly name: "tokenAIn";
        readonly internalType: "bool";
        readonly type: "bool";
    }, {
        readonly name: "amountOut";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "tickLimit";
        readonly internalType: "int32";
        readonly type: "int32";
    }];
    readonly name: "exactOutputSingleMinimal";
    readonly outputs: readonly [{
        readonly name: "amountIn";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "amountOut_";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "payable";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "factory";
    readonly outputs: readonly [{
        readonly name: "factory_";
        readonly internalType: "contract IMaverickV2Factory";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "recipient";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "pool";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
    }, {
        readonly name: "tokenAIn";
        readonly internalType: "bool";
        readonly type: "bool";
    }, {
        readonly name: "amountIn";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "tickLimit";
        readonly internalType: "int32";
        readonly type: "int32";
    }, {
        readonly name: "amountOutMinimum";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "inputSingleWithTickLimit";
    readonly outputs: readonly [{
        readonly name: "amountIn_";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "amountOut";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "payable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "tokenIn";
        readonly internalType: "contract IERC20";
        readonly type: "address";
    }, {
        readonly name: "amountToPay";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "_data";
        readonly internalType: "bytes";
        readonly type: "bytes";
    }];
    readonly name: "maverickV2SwapCallback";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "data";
        readonly internalType: "bytes[]";
        readonly type: "bytes[]";
    }];
    readonly name: "multicall";
    readonly outputs: readonly [{
        readonly name: "results";
        readonly internalType: "bytes[]";
        readonly type: "bytes[]";
    }];
    readonly stateMutability: "payable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "recipient";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "pool";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
    }, {
        readonly name: "tokenAIn";
        readonly internalType: "bool";
        readonly type: "bool";
    }, {
        readonly name: "amountOut";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "tickLimit";
        readonly internalType: "int32";
        readonly type: "int32";
    }, {
        readonly name: "amountInMaximum";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "amountOutMinimum";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "outputSingleWithTickLimit";
    readonly outputs: readonly [{
        readonly name: "amountIn_";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "amountOut_";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "payable";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "refundETH";
    readonly outputs: readonly [];
    readonly stateMutability: "payable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "token";
        readonly internalType: "contract IERC20";
        readonly type: "address";
    }, {
        readonly name: "amountMinimum";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "recipient";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "sweepToken";
    readonly outputs: readonly [];
    readonly stateMutability: "payable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "token";
        readonly internalType: "contract IERC20";
        readonly type: "address";
    }, {
        readonly name: "amount";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "recipient";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "sweepTokenAmount";
    readonly outputs: readonly [];
    readonly stateMutability: "payable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "tokenA";
        readonly internalType: "contract IERC20";
        readonly type: "address";
    }, {
        readonly name: "tokenB";
        readonly internalType: "contract IERC20";
        readonly type: "address";
    }, {
        readonly name: "tokenAAmountMin";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "tokenBAmountMin";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "unwrapAndSweep";
    readonly outputs: readonly [];
    readonly stateMutability: "payable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "amountMinimum";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "recipient";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "unwrapWETH9";
    readonly outputs: readonly [];
    readonly stateMutability: "payable";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "weth";
    readonly outputs: readonly [{
        readonly name: "weth_";
        readonly internalType: "contract IWETH9";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "receive";
    readonly stateMutability: "payable";
}], "multicall", [any[]], import('wagmi').Config, number>;
export declare const useSwap: (tokenA: Token | undefined, tokenB: Token | undefined, path: (Address | boolean)[], amountIn: bigint, amountOutMinimum: bigint, onTxSuccess?: (txReceipt: TransactionReceipt) => void, onTxError?: (error: Error) => void) => {
    type: "deposit";
    buttonText: string;
    executeAsync: (() => Promise<`0x${string}` | void>) | undefined;
    isLoading: boolean;
    simulateError: Error | null;
    txHash: Address | undefined;
    txReceipt: TransactionReceipt | undefined;
    txState: import('../../types').TxType;
    txActive: boolean;
    paymentETH: number;
    refundETH: number;
    resetWriteQuery: () => void;
    simulate: import('wagmi').UseSimulateContractReturnType<readonly [{
        readonly type: "event";
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly name: "owner";
            readonly internalType: "address";
            readonly type: "address";
            readonly indexed: true;
        }, {
            readonly name: "spender";
            readonly internalType: "address";
            readonly type: "address";
            readonly indexed: true;
        }, {
            readonly name: "value";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: false;
        }];
        readonly name: "Approval";
    }, {
        readonly type: "event";
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly name: "dst";
            readonly internalType: "address";
            readonly type: "address";
            readonly indexed: true;
        }, {
            readonly name: "wad";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: false;
        }];
        readonly name: "Deposit";
    }, {
        readonly type: "event";
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly name: "from";
            readonly internalType: "address";
            readonly type: "address";
            readonly indexed: true;
        }, {
            readonly name: "to";
            readonly internalType: "address";
            readonly type: "address";
            readonly indexed: true;
        }, {
            readonly name: "value";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: false;
        }];
        readonly name: "Transfer";
    }, {
        readonly type: "event";
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly name: "src";
            readonly internalType: "address";
            readonly type: "address";
            readonly indexed: true;
        }, {
            readonly name: "wad";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: false;
        }];
        readonly name: "Withdrawal";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "owner";
            readonly internalType: "address";
            readonly type: "address";
        }, {
            readonly name: "spender";
            readonly internalType: "address";
            readonly type: "address";
        }];
        readonly name: "allowance";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "spender";
            readonly internalType: "address";
            readonly type: "address";
        }, {
            readonly name: "value";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "approve";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "bool";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "account";
            readonly internalType: "address";
            readonly type: "address";
        }];
        readonly name: "balanceOf";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "deposit";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "totalSupply";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "to";
            readonly internalType: "address";
            readonly type: "address";
        }, {
            readonly name: "value";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "transfer";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "bool";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "from";
            readonly internalType: "address";
            readonly type: "address";
        }, {
            readonly name: "to";
            readonly internalType: "address";
            readonly type: "address";
        }, {
            readonly name: "value";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "transferFrom";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "bool";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "withdraw";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }], "deposit", readonly [], import('wagmi').Config, number>;
} | {
    type: "withdraw";
    buttonText: string;
    executeAsync: (() => Promise<`0x${string}` | void>) | undefined;
    isLoading: boolean;
    simulateError: Error | null;
    txHash: Address | undefined;
    txReceipt: TransactionReceipt | undefined;
    txState: import('../../types').TxType;
    txActive: boolean;
    paymentETH: number;
    refundETH: number;
    resetWriteQuery: () => void;
    simulate: import('wagmi').UseSimulateContractReturnType<readonly [{
        readonly type: "event";
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly name: "owner";
            readonly internalType: "address";
            readonly type: "address";
            readonly indexed: true;
        }, {
            readonly name: "spender";
            readonly internalType: "address";
            readonly type: "address";
            readonly indexed: true;
        }, {
            readonly name: "value";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: false;
        }];
        readonly name: "Approval";
    }, {
        readonly type: "event";
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly name: "dst";
            readonly internalType: "address";
            readonly type: "address";
            readonly indexed: true;
        }, {
            readonly name: "wad";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: false;
        }];
        readonly name: "Deposit";
    }, {
        readonly type: "event";
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly name: "from";
            readonly internalType: "address";
            readonly type: "address";
            readonly indexed: true;
        }, {
            readonly name: "to";
            readonly internalType: "address";
            readonly type: "address";
            readonly indexed: true;
        }, {
            readonly name: "value";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: false;
        }];
        readonly name: "Transfer";
    }, {
        readonly type: "event";
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly name: "src";
            readonly internalType: "address";
            readonly type: "address";
            readonly indexed: true;
        }, {
            readonly name: "wad";
            readonly internalType: "uint256";
            readonly type: "uint256";
            readonly indexed: false;
        }];
        readonly name: "Withdrawal";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "owner";
            readonly internalType: "address";
            readonly type: "address";
        }, {
            readonly name: "spender";
            readonly internalType: "address";
            readonly type: "address";
        }];
        readonly name: "allowance";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "spender";
            readonly internalType: "address";
            readonly type: "address";
        }, {
            readonly name: "value";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "approve";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "bool";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "account";
            readonly internalType: "address";
            readonly type: "address";
        }];
        readonly name: "balanceOf";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "deposit";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "totalSupply";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "to";
            readonly internalType: "address";
            readonly type: "address";
        }, {
            readonly name: "value";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "transfer";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "bool";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "from";
            readonly internalType: "address";
            readonly type: "address";
        }, {
            readonly name: "to";
            readonly internalType: "address";
            readonly type: "address";
        }, {
            readonly name: "value";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "transferFrom";
        readonly outputs: readonly [{
            readonly name: "";
            readonly internalType: "bool";
            readonly type: "bool";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "withdraw";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }], "withdraw", [bigint], import('wagmi').Config, number>;
} | {
    type: "swap";
    buttonText: string;
    executeAsync: (() => Promise<`0x${string}` | void>) | undefined;
    isLoading: boolean;
    simulateError: Error | null;
    txHash: Address | undefined;
    txReceipt: TransactionReceipt | undefined;
    txState: import('../../types').TxType;
    txActive: boolean;
    paymentETH: number;
    refundETH: number;
    resetWriteQuery: () => void;
    simulate: import('wagmi').UseSimulateContractReturnType<readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_factory";
            readonly internalType: "contract IMaverickV2Factory";
            readonly type: "address";
        }, {
            readonly name: "_weth";
            readonly internalType: "contract IWETH9";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "error";
        readonly inputs: readonly [{
            readonly name: "target";
            readonly internalType: "address";
            readonly type: "address";
        }];
        readonly name: "AddressEmptyCode";
    }, {
        readonly type: "error";
        readonly inputs: readonly [{
            readonly name: "account";
            readonly internalType: "address";
            readonly type: "address";
        }];
        readonly name: "AddressInsufficientBalance";
    }, {
        readonly type: "error";
        readonly inputs: readonly [{
            readonly name: "inputLength";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "expectedLength";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "BytesLibInvalidLength";
    }, {
        readonly type: "error";
        readonly inputs: readonly [];
        readonly name: "BytesLibSliceOutOfBounds";
    }, {
        readonly type: "error";
        readonly inputs: readonly [];
        readonly name: "BytesLibSliceOverflow";
    }, {
        readonly type: "error";
        readonly inputs: readonly [];
        readonly name: "BytesLibToAddressOutOfBounds";
    }, {
        readonly type: "error";
        readonly inputs: readonly [];
        readonly name: "BytesLibToBoolOutOfBounds";
    }, {
        readonly type: "error";
        readonly inputs: readonly [];
        readonly name: "FailedInnerCall";
    }, {
        readonly type: "error";
        readonly inputs: readonly [];
        readonly name: "MathOverflowedMulDiv";
    }, {
        readonly type: "error";
        readonly inputs: readonly [{
            readonly name: "token";
            readonly internalType: "address";
            readonly type: "address";
        }, {
            readonly name: "amountMinimum";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "contractBalance";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "PaymentInsufficientBalance";
    }, {
        readonly type: "error";
        readonly inputs: readonly [];
        readonly name: "PaymentSenderNotWETH9";
    }, {
        readonly type: "error";
        readonly inputs: readonly [{
            readonly name: "deadline";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "blockTimestamp";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "PositionDeadlinePassed";
    }, {
        readonly type: "error";
        readonly inputs: readonly [{
            readonly name: "sqrtPrice";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "minSqrtPrice";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "maxSqrtPrice";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "PositionExceededPriceBounds";
    }, {
        readonly type: "error";
        readonly inputs: readonly [];
        readonly name: "RouterNotFactoryPool";
    }, {
        readonly type: "error";
        readonly inputs: readonly [{
            readonly name: "amountOutMinimum";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "amountOut";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "RouterTooLittleReceived";
    }, {
        readonly type: "error";
        readonly inputs: readonly [{
            readonly name: "amountInMaximum";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "amountIn";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "RouterTooMuchRequested";
    }, {
        readonly type: "error";
        readonly inputs: readonly [];
        readonly name: "RouterZeroSwap";
    }, {
        readonly type: "error";
        readonly inputs: readonly [{
            readonly name: "tick";
            readonly internalType: "int256";
            readonly type: "int256";
        }];
        readonly name: "TickMaxExceeded";
    }, {
        readonly type: "error";
        readonly inputs: readonly [{
            readonly name: "token";
            readonly internalType: "contract IERC20";
            readonly type: "address";
        }, {
            readonly name: "to";
            readonly internalType: "address";
            readonly type: "address";
        }, {
            readonly name: "amount";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "TransferFailed";
    }, {
        readonly type: "error";
        readonly inputs: readonly [{
            readonly name: "token";
            readonly internalType: "contract IERC20";
            readonly type: "address";
        }, {
            readonly name: "from";
            readonly internalType: "address";
            readonly type: "address";
        }, {
            readonly name: "to";
            readonly internalType: "address";
            readonly type: "address";
        }, {
            readonly name: "amount";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "TransferFromFailed";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "deadline";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "checkDeadline";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "pool";
            readonly internalType: "contract IMaverickV2Pool";
            readonly type: "address";
        }, {
            readonly name: "minSqrtPrice";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "maxSqrtPrice";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "checkSqrtPrice";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "recipient";
            readonly internalType: "address";
            readonly type: "address";
        }, {
            readonly name: "path";
            readonly internalType: "bytes";
            readonly type: "bytes";
        }, {
            readonly name: "amountIn";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "amountOutMinimum";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "exactInputMultiHop";
        readonly outputs: readonly [{
            readonly name: "amountOut";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "recipient";
            readonly internalType: "address";
            readonly type: "address";
        }, {
            readonly name: "pool";
            readonly internalType: "contract IMaverickV2Pool";
            readonly type: "address";
        }, {
            readonly name: "tokenAIn";
            readonly internalType: "bool";
            readonly type: "bool";
        }, {
            readonly name: "amountIn";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "amountOutMinimum";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "exactInputSingle";
        readonly outputs: readonly [{
            readonly name: "amountOut";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "argsPacked";
            readonly internalType: "bytes";
            readonly type: "bytes";
        }];
        readonly name: "exactInputSinglePackedArgs";
        readonly outputs: readonly [{
            readonly name: "amountOut";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "recipient";
            readonly internalType: "address";
            readonly type: "address";
        }, {
            readonly name: "path";
            readonly internalType: "bytes";
            readonly type: "bytes";
        }, {
            readonly name: "amountOut";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "amountInMaximum";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "exactOutputMultiHop";
        readonly outputs: readonly [{
            readonly name: "amountIn";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "recipient";
            readonly internalType: "address";
            readonly type: "address";
        }, {
            readonly name: "pool";
            readonly internalType: "contract IMaverickV2Pool";
            readonly type: "address";
        }, {
            readonly name: "tokenAIn";
            readonly internalType: "bool";
            readonly type: "bool";
        }, {
            readonly name: "amountOut";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "amountInMaximum";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "exactOutputSingle";
        readonly outputs: readonly [{
            readonly name: "amountIn";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "amountOut_";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "recipient";
            readonly internalType: "address";
            readonly type: "address";
        }, {
            readonly name: "pool";
            readonly internalType: "contract IMaverickV2Pool";
            readonly type: "address";
        }, {
            readonly name: "tokenAIn";
            readonly internalType: "bool";
            readonly type: "bool";
        }, {
            readonly name: "amountOut";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "tickLimit";
            readonly internalType: "int32";
            readonly type: "int32";
        }];
        readonly name: "exactOutputSingleMinimal";
        readonly outputs: readonly [{
            readonly name: "amountIn";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "amountOut_";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "factory";
        readonly outputs: readonly [{
            readonly name: "factory_";
            readonly internalType: "contract IMaverickV2Factory";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "recipient";
            readonly internalType: "address";
            readonly type: "address";
        }, {
            readonly name: "pool";
            readonly internalType: "contract IMaverickV2Pool";
            readonly type: "address";
        }, {
            readonly name: "tokenAIn";
            readonly internalType: "bool";
            readonly type: "bool";
        }, {
            readonly name: "amountIn";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "tickLimit";
            readonly internalType: "int32";
            readonly type: "int32";
        }, {
            readonly name: "amountOutMinimum";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "inputSingleWithTickLimit";
        readonly outputs: readonly [{
            readonly name: "amountIn_";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "amountOut";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "tokenIn";
            readonly internalType: "contract IERC20";
            readonly type: "address";
        }, {
            readonly name: "amountToPay";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "_data";
            readonly internalType: "bytes";
            readonly type: "bytes";
        }];
        readonly name: "maverickV2SwapCallback";
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "data";
            readonly internalType: "bytes[]";
            readonly type: "bytes[]";
        }];
        readonly name: "multicall";
        readonly outputs: readonly [{
            readonly name: "results";
            readonly internalType: "bytes[]";
            readonly type: "bytes[]";
        }];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "recipient";
            readonly internalType: "address";
            readonly type: "address";
        }, {
            readonly name: "pool";
            readonly internalType: "contract IMaverickV2Pool";
            readonly type: "address";
        }, {
            readonly name: "tokenAIn";
            readonly internalType: "bool";
            readonly type: "bool";
        }, {
            readonly name: "amountOut";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "tickLimit";
            readonly internalType: "int32";
            readonly type: "int32";
        }, {
            readonly name: "amountInMaximum";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "amountOutMinimum";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "outputSingleWithTickLimit";
        readonly outputs: readonly [{
            readonly name: "amountIn_";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "amountOut_";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "refundETH";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "token";
            readonly internalType: "contract IERC20";
            readonly type: "address";
        }, {
            readonly name: "amountMinimum";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "recipient";
            readonly internalType: "address";
            readonly type: "address";
        }];
        readonly name: "sweepToken";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "token";
            readonly internalType: "contract IERC20";
            readonly type: "address";
        }, {
            readonly name: "amount";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "recipient";
            readonly internalType: "address";
            readonly type: "address";
        }];
        readonly name: "sweepTokenAmount";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "tokenA";
            readonly internalType: "contract IERC20";
            readonly type: "address";
        }, {
            readonly name: "tokenB";
            readonly internalType: "contract IERC20";
            readonly type: "address";
        }, {
            readonly name: "tokenAAmountMin";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "tokenBAmountMin";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly name: "unwrapAndSweep";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [{
            readonly name: "amountMinimum";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "recipient";
            readonly internalType: "address";
            readonly type: "address";
        }];
        readonly name: "unwrapWETH9";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly inputs: readonly [];
        readonly name: "weth";
        readonly outputs: readonly [{
            readonly name: "weth_";
            readonly internalType: "contract IWETH9";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "receive";
        readonly stateMutability: "payable";
    }], "multicall", [any[]], import('wagmi').Config, number>;
};
