export declare const addressAbi: readonly [{
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
    readonly inputs: readonly [];
    readonly name: "FailedInnerCall";
}];
export declare const argPackerAbi: readonly [{
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "BytesLibSliceOutOfBounds";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "BytesLibSliceOverflow";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "bits";
        readonly internalType: "uint8";
        readonly type: "uint8";
    }, {
        readonly name: "value";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "SafeCastOverflowedUintDowncast";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "args";
        readonly internalType: "struct IMaverickV2Pool.AddLiquidityParams";
        readonly type: "tuple";
        readonly components: readonly [{
            readonly name: "kind";
            readonly internalType: "uint8";
            readonly type: "uint8";
        }, {
            readonly name: "ticks";
            readonly internalType: "int32[]";
            readonly type: "int32[]";
        }, {
            readonly name: "amounts";
            readonly internalType: "uint128[]";
            readonly type: "uint128[]";
        }];
    }];
    readonly name: "packAddLiquidityArgs";
    readonly outputs: readonly [{
        readonly name: "argsPacked";
        readonly internalType: "bytes";
        readonly type: "bytes";
    }];
    readonly stateMutability: "pure";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "args";
        readonly internalType: "struct IMaverickV2Pool.AddLiquidityParams[]";
        readonly type: "tuple[]";
        readonly components: readonly [{
            readonly name: "kind";
            readonly internalType: "uint8";
            readonly type: "uint8";
        }, {
            readonly name: "ticks";
            readonly internalType: "int32[]";
            readonly type: "int32[]";
        }, {
            readonly name: "amounts";
            readonly internalType: "uint128[]";
            readonly type: "uint128[]";
        }];
    }];
    readonly name: "packAddLiquidityArgsArray";
    readonly outputs: readonly [{
        readonly name: "argsPacked";
        readonly internalType: "bytes[]";
        readonly type: "bytes[]";
    }];
    readonly stateMutability: "pure";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "fullArray";
        readonly internalType: "uint88[]";
        readonly type: "uint88[]";
    }];
    readonly name: "packUint88Array";
    readonly outputs: readonly [{
        readonly name: "packedArray";
        readonly internalType: "bytes";
        readonly type: "bytes";
    }];
    readonly stateMutability: "pure";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "argsPacked";
        readonly internalType: "bytes";
        readonly type: "bytes";
    }];
    readonly name: "unpackAddLiquidityArgs";
    readonly outputs: readonly [{
        readonly name: "args";
        readonly internalType: "struct IMaverickV2Pool.AddLiquidityParams";
        readonly type: "tuple";
        readonly components: readonly [{
            readonly name: "kind";
            readonly internalType: "uint8";
            readonly type: "uint8";
        }, {
            readonly name: "ticks";
            readonly internalType: "int32[]";
            readonly type: "int32[]";
        }, {
            readonly name: "amounts";
            readonly internalType: "uint128[]";
            readonly type: "uint128[]";
        }];
    }];
    readonly stateMutability: "pure";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "packedArray";
        readonly internalType: "bytes";
        readonly type: "bytes";
    }];
    readonly name: "unpackUint88Array";
    readonly outputs: readonly [{
        readonly name: "fullArray";
        readonly internalType: "uint88[]";
        readonly type: "uint88[]";
    }];
    readonly stateMutability: "pure";
}];
export declare const arrayOperationsAbi: readonly [{
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "index";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "duplicateEntry";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "ArrayElementsNotUnique";
}];
export declare const bytesLibAbi: readonly [{
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
}];
export declare const callbackOperationsAbi: readonly [{
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
}];
export declare const checkpointsAbi: readonly [{
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "CheckpointUnorderedInsertion";
}];
export declare const checksAbi: readonly [{
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "MathOverflowedMulDiv";
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
    readonly inputs: readonly [{
        readonly name: "tick";
        readonly internalType: "int256";
        readonly type: "int256";
    }];
    readonly name: "TickMaxExceeded";
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
}];
export declare const configAdminAbi: readonly [{
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "account";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "OwnableUnauthorizedAccount";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "newAdmin";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: false;
    }];
    readonly name: "SetConfigurationAdmin";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "configurationAdmin";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "factory";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "contract IMaverickV2Factory";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_newAdmin";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "setConfigurationAdmin";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}];
export declare const ecdsaAbi: readonly [{
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "ECDSAInvalidSignature";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "length";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "ECDSAInvalidSignatureLength";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "s";
        readonly internalType: "bytes32";
        readonly type: "bytes32";
    }];
    readonly name: "ECDSAInvalidSignatureS";
}];
export declare const eip712Abi: readonly [{
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "InvalidShortString";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "str";
        readonly internalType: "string";
        readonly type: "string";
    }];
    readonly name: "StringTooLong";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [];
    readonly name: "EIP712DomainChanged";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "eip712Domain";
    readonly outputs: readonly [{
        readonly name: "fields";
        readonly internalType: "bytes1";
        readonly type: "bytes1";
    }, {
        readonly name: "name";
        readonly internalType: "string";
        readonly type: "string";
    }, {
        readonly name: "version";
        readonly internalType: "string";
        readonly type: "string";
    }, {
        readonly name: "chainId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "verifyingContract";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "salt";
        readonly internalType: "bytes32";
        readonly type: "bytes32";
    }, {
        readonly name: "extensions";
        readonly internalType: "uint256[]";
        readonly type: "uint256[]";
    }];
    readonly stateMutability: "view";
}];
export declare const erc165Abi: readonly [{
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "interfaceId";
        readonly internalType: "bytes4";
        readonly type: "bytes4";
    }];
    readonly name: "supportsInterface";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "bool";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
}];
export declare const erc20Abi: readonly [{
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "spender";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "allowance";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "needed";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "ERC20InsufficientAllowance";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "sender";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "balance";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "needed";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "ERC20InsufficientBalance";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "approver";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "ERC20InvalidApprover";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "receiver";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "ERC20InvalidReceiver";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "sender";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "ERC20InvalidSender";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "spender";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "ERC20InvalidSpender";
}, {
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
    readonly name: "decimals";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint8";
        readonly type: "uint8";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "name";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "string";
        readonly type: "string";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "symbol";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "string";
        readonly type: "string";
    }];
    readonly stateMutability: "view";
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
}];
export declare const erc20MintableAbi: readonly [{
    readonly type: "constructor";
    readonly inputs: readonly [{
        readonly name: "name_";
        readonly internalType: "string";
        readonly type: "string";
    }, {
        readonly name: "symbol_";
        readonly internalType: "string";
        readonly type: "string";
    }, {
        readonly name: "_decimals";
        readonly internalType: "uint8";
        readonly type: "uint8";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "spender";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "allowance";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "needed";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "ERC20InsufficientAllowance";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "sender";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "balance";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "needed";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "ERC20InsufficientBalance";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "approver";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "ERC20InvalidApprover";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "receiver";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "ERC20InvalidReceiver";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "sender";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "ERC20InvalidSender";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "spender";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "ERC20InvalidSpender";
}, {
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
    readonly name: "decimals";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint8";
        readonly type: "uint8";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "account";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "value";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "mint";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "name";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "string";
        readonly type: "string";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "symbol";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "string";
        readonly type: "string";
    }];
    readonly stateMutability: "view";
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
}];
export declare const erc20VotesAbi: readonly [{
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "CheckpointUnorderedInsertion";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "ECDSAInvalidSignature";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "length";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "ECDSAInvalidSignatureLength";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "s";
        readonly internalType: "bytes32";
        readonly type: "bytes32";
    }];
    readonly name: "ECDSAInvalidSignatureS";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "increasedSupply";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "cap";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "ERC20ExceededSafeSupply";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "spender";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "allowance";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "needed";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "ERC20InsufficientAllowance";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "sender";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "balance";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "needed";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "ERC20InsufficientBalance";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "approver";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "ERC20InvalidApprover";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "receiver";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "ERC20InvalidReceiver";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "sender";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "ERC20InvalidSender";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "spender";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "ERC20InvalidSpender";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "timepoint";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "clock";
        readonly internalType: "uint48";
        readonly type: "uint48";
    }];
    readonly name: "ERC5805FutureLookup";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "ERC6372InconsistentClock";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "account";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "currentNonce";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "InvalidAccountNonce";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "InvalidShortString";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "bits";
        readonly internalType: "uint8";
        readonly type: "uint8";
    }, {
        readonly name: "value";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "SafeCastOverflowedUintDowncast";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "str";
        readonly internalType: "string";
        readonly type: "string";
    }];
    readonly name: "StringTooLong";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "expiry";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "VotesExpiredSignature";
}, {
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
        readonly name: "delegator";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "fromDelegate";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "toDelegate";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }];
    readonly name: "DelegateChanged";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "delegate";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "previousVotes";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }, {
        readonly name: "newVotes";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }];
    readonly name: "DelegateVotesChanged";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [];
    readonly name: "EIP712DomainChanged";
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
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "CLOCK_MODE";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "string";
        readonly type: "string";
    }];
    readonly stateMutability: "view";
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
    readonly inputs: readonly [{
        readonly name: "account";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "pos";
        readonly internalType: "uint32";
        readonly type: "uint32";
    }];
    readonly name: "checkpoints";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "struct Checkpoints.Checkpoint208";
        readonly type: "tuple";
        readonly components: readonly [{
            readonly name: "_key";
            readonly internalType: "uint48";
            readonly type: "uint48";
        }, {
            readonly name: "_value";
            readonly internalType: "uint208";
            readonly type: "uint208";
        }];
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "clock";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint48";
        readonly type: "uint48";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "decimals";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint8";
        readonly type: "uint8";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "delegatee";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "delegate";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "delegatee";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "nonce";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "expiry";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "v";
        readonly internalType: "uint8";
        readonly type: "uint8";
    }, {
        readonly name: "r";
        readonly internalType: "bytes32";
        readonly type: "bytes32";
    }, {
        readonly name: "s";
        readonly internalType: "bytes32";
        readonly type: "bytes32";
    }];
    readonly name: "delegateBySig";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "account";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "delegates";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "eip712Domain";
    readonly outputs: readonly [{
        readonly name: "fields";
        readonly internalType: "bytes1";
        readonly type: "bytes1";
    }, {
        readonly name: "name";
        readonly internalType: "string";
        readonly type: "string";
    }, {
        readonly name: "version";
        readonly internalType: "string";
        readonly type: "string";
    }, {
        readonly name: "chainId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "verifyingContract";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "salt";
        readonly internalType: "bytes32";
        readonly type: "bytes32";
    }, {
        readonly name: "extensions";
        readonly internalType: "uint256[]";
        readonly type: "uint256[]";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "timepoint";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "getPastTotalSupply";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "account";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "timepoint";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "getPastVotes";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "account";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "getVotes";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "name";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "string";
        readonly type: "string";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "owner";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "nonces";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "account";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "numCheckpoints";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint32";
        readonly type: "uint32";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "symbol";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "string";
        readonly type: "string";
    }];
    readonly stateMutability: "view";
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
}];
export declare const erc721Abi: readonly [{
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "sender";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "owner";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "ERC721IncorrectOwner";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "operator";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "ERC721InsufficientApproval";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "approver";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "ERC721InvalidApprover";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "operator";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "ERC721InvalidOperator";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "owner";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "ERC721InvalidOwner";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "receiver";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "ERC721InvalidReceiver";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "sender";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "ERC721InvalidSender";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "ERC721NonexistentToken";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "owner";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "approved";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: true;
    }];
    readonly name: "Approval";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "owner";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "operator";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "approved";
        readonly internalType: "bool";
        readonly type: "bool";
        readonly indexed: false;
    }];
    readonly name: "ApprovalForAll";
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
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: true;
    }];
    readonly name: "Transfer";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "to";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "approve";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "owner";
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
    readonly inputs: readonly [{
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "getApproved";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "owner";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "operator";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "isApprovedForAll";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "bool";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "name";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "string";
        readonly type: "string";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "ownerOf";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
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
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "safeTransferFrom";
    readonly outputs: readonly [];
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
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "data";
        readonly internalType: "bytes";
        readonly type: "bytes";
    }];
    readonly name: "safeTransferFrom";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "operator";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "approved";
        readonly internalType: "bool";
        readonly type: "bool";
    }];
    readonly name: "setApprovalForAll";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "interfaceId";
        readonly internalType: "bytes4";
        readonly type: "bytes4";
    }];
    readonly name: "supportsInterface";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "bool";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "symbol";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "string";
        readonly type: "string";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "tokenURI";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "string";
        readonly type: "string";
    }];
    readonly stateMutability: "view";
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
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "transferFrom";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}];
export declare const erc721EnumerableAbi: readonly [{
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "ERC721EnumerableForbiddenBatchMint";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "sender";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "owner";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "ERC721IncorrectOwner";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "operator";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "ERC721InsufficientApproval";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "approver";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "ERC721InvalidApprover";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "operator";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "ERC721InvalidOperator";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "owner";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "ERC721InvalidOwner";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "receiver";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "ERC721InvalidReceiver";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "sender";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "ERC721InvalidSender";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "ERC721NonexistentToken";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "owner";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "index";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "ERC721OutOfBoundsIndex";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "owner";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "approved";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: true;
    }];
    readonly name: "Approval";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "owner";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "operator";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "approved";
        readonly internalType: "bool";
        readonly type: "bool";
        readonly indexed: false;
    }];
    readonly name: "ApprovalForAll";
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
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: true;
    }];
    readonly name: "Transfer";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "to";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "approve";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "owner";
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
    readonly inputs: readonly [{
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "getApproved";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "owner";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "operator";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "isApprovedForAll";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "bool";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "name";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "string";
        readonly type: "string";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "ownerOf";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
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
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "safeTransferFrom";
    readonly outputs: readonly [];
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
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "data";
        readonly internalType: "bytes";
        readonly type: "bytes";
    }];
    readonly name: "safeTransferFrom";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "operator";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "approved";
        readonly internalType: "bool";
        readonly type: "bool";
    }];
    readonly name: "setApprovalForAll";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "interfaceId";
        readonly internalType: "bytes4";
        readonly type: "bytes4";
    }];
    readonly name: "supportsInterface";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "bool";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "symbol";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "string";
        readonly type: "string";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "index";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "tokenByIndex";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "owner";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "index";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "tokenOfOwnerByIndex";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "tokenURI";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "string";
        readonly type: "string";
    }];
    readonly stateMutability: "view";
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
        readonly name: "from";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "to";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "transferFrom";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}];
export declare const epochAbi: readonly [{
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "timestamp";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "epochStart";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "epochEnd";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "EpochEnded";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "epoch";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "InvalidEpoch";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "timestamp";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "epochStart";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "epochEnd";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "VotePeriodNotActive";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "timestamp";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "epochStart";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "epochEnd";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "VotePeriodNotEnded";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "EPOCH_PERIOD";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "currentEpoch";
    readonly outputs: readonly [{
        readonly name: "epoch";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "offset";
        readonly internalType: "int256";
        readonly type: "int256";
    }];
    readonly name: "epochAtOffset";
    readonly outputs: readonly [{
        readonly name: "epoch";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "epoch";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "epochEnd";
    readonly outputs: readonly [{
        readonly name: "end";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "pure";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "epoch";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "epochIsOver";
    readonly outputs: readonly [{
        readonly name: "isOver";
        readonly internalType: "bool";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "epoch";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "isEpoch";
    readonly outputs: readonly [{
        readonly name: "_isEpoch";
        readonly internalType: "bool";
        readonly type: "bool";
    }];
    readonly stateMutability: "pure";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "lastEpoch";
    readonly outputs: readonly [{
        readonly name: "epoch";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "nextEpoch";
    readonly outputs: readonly [{
        readonly name: "epoch";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "epoch";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "votingIsActive";
    readonly outputs: readonly [{
        readonly name: "isActive";
        readonly internalType: "bool";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
}];
export declare const exactOutputSlimAbi: readonly [{
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
    readonly inputs: readonly [];
    readonly name: "FailedInnerCall";
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
        readonly name: "data";
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
}];
export declare const iArgPackerAbi: readonly [{
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "args";
        readonly internalType: "struct IMaverickV2Pool.AddLiquidityParams";
        readonly type: "tuple";
        readonly components: readonly [{
            readonly name: "kind";
            readonly internalType: "uint8";
            readonly type: "uint8";
        }, {
            readonly name: "ticks";
            readonly internalType: "int32[]";
            readonly type: "int32[]";
        }, {
            readonly name: "amounts";
            readonly internalType: "uint128[]";
            readonly type: "uint128[]";
        }];
    }];
    readonly name: "packAddLiquidityArgs";
    readonly outputs: readonly [{
        readonly name: "argsPacked";
        readonly internalType: "bytes";
        readonly type: "bytes";
    }];
    readonly stateMutability: "pure";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "args";
        readonly internalType: "struct IMaverickV2Pool.AddLiquidityParams[]";
        readonly type: "tuple[]";
        readonly components: readonly [{
            readonly name: "kind";
            readonly internalType: "uint8";
            readonly type: "uint8";
        }, {
            readonly name: "ticks";
            readonly internalType: "int32[]";
            readonly type: "int32[]";
        }, {
            readonly name: "amounts";
            readonly internalType: "uint128[]";
            readonly type: "uint128[]";
        }];
    }];
    readonly name: "packAddLiquidityArgsArray";
    readonly outputs: readonly [{
        readonly name: "argsPacked";
        readonly internalType: "bytes[]";
        readonly type: "bytes[]";
    }];
    readonly stateMutability: "pure";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "fullArray";
        readonly internalType: "uint88[]";
        readonly type: "uint88[]";
    }];
    readonly name: "packUint88Array";
    readonly outputs: readonly [{
        readonly name: "packedArray";
        readonly internalType: "bytes";
        readonly type: "bytes";
    }];
    readonly stateMutability: "pure";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "argsPacked";
        readonly internalType: "bytes";
        readonly type: "bytes";
    }];
    readonly name: "unpackAddLiquidityArgs";
    readonly outputs: readonly [{
        readonly name: "args";
        readonly internalType: "struct IMaverickV2Pool.AddLiquidityParams";
        readonly type: "tuple";
        readonly components: readonly [{
            readonly name: "kind";
            readonly internalType: "uint8";
            readonly type: "uint8";
        }, {
            readonly name: "ticks";
            readonly internalType: "int32[]";
            readonly type: "int32[]";
        }, {
            readonly name: "amounts";
            readonly internalType: "uint128[]";
            readonly type: "uint128[]";
        }];
    }];
    readonly stateMutability: "pure";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "packedArray";
        readonly internalType: "bytes";
        readonly type: "bytes";
    }];
    readonly name: "unpackUint88Array";
    readonly outputs: readonly [{
        readonly name: "fullArray";
        readonly internalType: "uint88[]";
        readonly type: "uint88[]";
    }];
    readonly stateMutability: "pure";
}];
export declare const iCallbackOperationsAbi: readonly [{
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
}];
export declare const iChecksAbi: readonly [{
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
}];
export declare const iConfigAdminAbi: readonly [{
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "newAdmin";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: false;
    }];
    readonly name: "SetConfigurationAdmin";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "configurationAdmin";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "factory";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "contract IMaverickV2Factory";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
}];
export declare const ierc1155ErrorsAbi: readonly [{
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "sender";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "balance";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "needed";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "ERC1155InsufficientBalance";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "approver";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "ERC1155InvalidApprover";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "idsLength";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "valuesLength";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "ERC1155InvalidArrayLength";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "operator";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "ERC1155InvalidOperator";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "receiver";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "ERC1155InvalidReceiver";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "sender";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "ERC1155InvalidSender";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "operator";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "owner";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "ERC1155MissingApprovalForAll";
}];
export declare const ierc165Abi: readonly [{
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "interfaceId";
        readonly internalType: "bytes4";
        readonly type: "bytes4";
    }];
    readonly name: "supportsInterface";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "bool";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
}];
export declare const ierc20Abi: readonly [{
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
}];
export declare const ierc20ErrorsAbi: readonly [{
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "spender";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "allowance";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "needed";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "ERC20InsufficientAllowance";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "sender";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "balance";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "needed";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "ERC20InsufficientBalance";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "approver";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "ERC20InvalidApprover";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "receiver";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "ERC20InvalidReceiver";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "sender";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "ERC20InvalidSender";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "spender";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "ERC20InvalidSpender";
}];
export declare const ierc20MetadataAbi: readonly [{
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
    readonly name: "decimals";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint8";
        readonly type: "uint8";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "name";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "string";
        readonly type: "string";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "symbol";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "string";
        readonly type: "string";
    }];
    readonly stateMutability: "view";
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
}];
export declare const ierc20PermitAbi: readonly [{
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "DOMAIN_SEPARATOR";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "bytes32";
        readonly type: "bytes32";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "owner";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "nonces";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
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
    }, {
        readonly name: "value";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "deadline";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "v";
        readonly internalType: "uint8";
        readonly type: "uint8";
    }, {
        readonly name: "r";
        readonly internalType: "bytes32";
        readonly type: "bytes32";
    }, {
        readonly name: "s";
        readonly internalType: "bytes32";
        readonly type: "bytes32";
    }];
    readonly name: "permit";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}];
export declare const ierc5267Abi: readonly [{
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [];
    readonly name: "EIP712DomainChanged";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "eip712Domain";
    readonly outputs: readonly [{
        readonly name: "fields";
        readonly internalType: "bytes1";
        readonly type: "bytes1";
    }, {
        readonly name: "name";
        readonly internalType: "string";
        readonly type: "string";
    }, {
        readonly name: "version";
        readonly internalType: "string";
        readonly type: "string";
    }, {
        readonly name: "chainId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "verifyingContract";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "salt";
        readonly internalType: "bytes32";
        readonly type: "bytes32";
    }, {
        readonly name: "extensions";
        readonly internalType: "uint256[]";
        readonly type: "uint256[]";
    }];
    readonly stateMutability: "view";
}];
export declare const ierc5805Abi: readonly [{
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "expiry";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "VotesExpiredSignature";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "delegator";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "fromDelegate";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "toDelegate";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }];
    readonly name: "DelegateChanged";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "delegate";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "previousVotes";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }, {
        readonly name: "newVotes";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }];
    readonly name: "DelegateVotesChanged";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "CLOCK_MODE";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "string";
        readonly type: "string";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "clock";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint48";
        readonly type: "uint48";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "delegatee";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "delegate";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "delegatee";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "nonce";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "expiry";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "v";
        readonly internalType: "uint8";
        readonly type: "uint8";
    }, {
        readonly name: "r";
        readonly internalType: "bytes32";
        readonly type: "bytes32";
    }, {
        readonly name: "s";
        readonly internalType: "bytes32";
        readonly type: "bytes32";
    }];
    readonly name: "delegateBySig";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "account";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "delegates";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "timepoint";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "getPastTotalSupply";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "account";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "timepoint";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "getPastVotes";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "account";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "getVotes";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}];
export declare const ierc6372Abi: readonly [{
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "CLOCK_MODE";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "string";
        readonly type: "string";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "clock";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint48";
        readonly type: "uint48";
    }];
    readonly stateMutability: "view";
}];
export declare const ierc721Abi: readonly [{
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "owner";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "approved";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: true;
    }];
    readonly name: "Approval";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "owner";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "operator";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "approved";
        readonly internalType: "bool";
        readonly type: "bool";
        readonly indexed: false;
    }];
    readonly name: "ApprovalForAll";
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
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: true;
    }];
    readonly name: "Transfer";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "to";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "approve";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "owner";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "balanceOf";
    readonly outputs: readonly [{
        readonly name: "balance";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "getApproved";
    readonly outputs: readonly [{
        readonly name: "operator";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "owner";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "operator";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "isApprovedForAll";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "bool";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "ownerOf";
    readonly outputs: readonly [{
        readonly name: "owner";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
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
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "safeTransferFrom";
    readonly outputs: readonly [];
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
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "data";
        readonly internalType: "bytes";
        readonly type: "bytes";
    }];
    readonly name: "safeTransferFrom";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "operator";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "approved";
        readonly internalType: "bool";
        readonly type: "bool";
    }];
    readonly name: "setApprovalForAll";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "interfaceId";
        readonly internalType: "bytes4";
        readonly type: "bytes4";
    }];
    readonly name: "supportsInterface";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "bool";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
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
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "transferFrom";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}];
export declare const ierc721EnumerableAbi: readonly [{
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "owner";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "approved";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: true;
    }];
    readonly name: "Approval";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "owner";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "operator";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "approved";
        readonly internalType: "bool";
        readonly type: "bool";
        readonly indexed: false;
    }];
    readonly name: "ApprovalForAll";
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
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: true;
    }];
    readonly name: "Transfer";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "to";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "approve";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "owner";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "balanceOf";
    readonly outputs: readonly [{
        readonly name: "balance";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "getApproved";
    readonly outputs: readonly [{
        readonly name: "operator";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "owner";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "operator";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "isApprovedForAll";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "bool";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "ownerOf";
    readonly outputs: readonly [{
        readonly name: "owner";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
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
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "safeTransferFrom";
    readonly outputs: readonly [];
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
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "data";
        readonly internalType: "bytes";
        readonly type: "bytes";
    }];
    readonly name: "safeTransferFrom";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "operator";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "approved";
        readonly internalType: "bool";
        readonly type: "bool";
    }];
    readonly name: "setApprovalForAll";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "interfaceId";
        readonly internalType: "bytes4";
        readonly type: "bytes4";
    }];
    readonly name: "supportsInterface";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "bool";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "index";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "tokenByIndex";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "owner";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "index";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "tokenOfOwnerByIndex";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
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
        readonly name: "from";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "to";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "transferFrom";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}];
export declare const ierc721ErrorsAbi: readonly [{
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "sender";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "owner";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "ERC721IncorrectOwner";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "operator";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "ERC721InsufficientApproval";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "approver";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "ERC721InvalidApprover";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "operator";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "ERC721InvalidOperator";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "owner";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "ERC721InvalidOwner";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "receiver";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "ERC721InvalidReceiver";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "sender";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "ERC721InvalidSender";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "ERC721NonexistentToken";
}];
export declare const ierc721MetadataAbi: readonly [{
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "owner";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "approved";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: true;
    }];
    readonly name: "Approval";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "owner";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "operator";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "approved";
        readonly internalType: "bool";
        readonly type: "bool";
        readonly indexed: false;
    }];
    readonly name: "ApprovalForAll";
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
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: true;
    }];
    readonly name: "Transfer";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "to";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "approve";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "owner";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "balanceOf";
    readonly outputs: readonly [{
        readonly name: "balance";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "getApproved";
    readonly outputs: readonly [{
        readonly name: "operator";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "owner";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "operator";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "isApprovedForAll";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "bool";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "name";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "string";
        readonly type: "string";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "ownerOf";
    readonly outputs: readonly [{
        readonly name: "owner";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
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
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "safeTransferFrom";
    readonly outputs: readonly [];
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
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "data";
        readonly internalType: "bytes";
        readonly type: "bytes";
    }];
    readonly name: "safeTransferFrom";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "operator";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "approved";
        readonly internalType: "bool";
        readonly type: "bool";
    }];
    readonly name: "setApprovalForAll";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "interfaceId";
        readonly internalType: "bytes4";
        readonly type: "bytes4";
    }];
    readonly name: "supportsInterface";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "bool";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "symbol";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "string";
        readonly type: "string";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "tokenURI";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "string";
        readonly type: "string";
    }];
    readonly stateMutability: "view";
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
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "transferFrom";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}];
export declare const ierc721ReceiverAbi: readonly [{
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "operator";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "from";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "data";
        readonly internalType: "bytes";
        readonly type: "bytes";
    }];
    readonly name: "onERC721Received";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "bytes4";
        readonly type: "bytes4";
    }];
    readonly stateMutability: "nonpayable";
}];
export declare const iEpochAbi: readonly [{
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "timestamp";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "epochStart";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "epochEnd";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "EpochEnded";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "epoch";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "InvalidEpoch";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "timestamp";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "epochStart";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "epochEnd";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "VotePeriodNotActive";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "timestamp";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "epochStart";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "epochEnd";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "VotePeriodNotEnded";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "EPOCH_PERIOD";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "currentEpoch";
    readonly outputs: readonly [{
        readonly name: "epoch";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "epoch";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "epochEnd";
    readonly outputs: readonly [{
        readonly name: "end";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "pure";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "epoch";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "epochIsOver";
    readonly outputs: readonly [{
        readonly name: "isOver";
        readonly internalType: "bool";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "epoch";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "isEpoch";
    readonly outputs: readonly [{
        readonly name: "_isEpoch";
        readonly internalType: "bool";
        readonly type: "bool";
    }];
    readonly stateMutability: "pure";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "lastEpoch";
    readonly outputs: readonly [{
        readonly name: "epoch";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "nextEpoch";
    readonly outputs: readonly [{
        readonly name: "epoch";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "epoch";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "votingIsActive";
    readonly outputs: readonly [{
        readonly name: "isActive";
        readonly internalType: "bool";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
}];
export declare const iExactOutputSlimAbi: readonly [{
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
}];
export declare const iFeeRegistryAbi: readonly [{
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "isTokenA";
        readonly internalType: "bool";
        readonly type: "bool";
    }, {
        readonly name: "binId";
        readonly internalType: "uint32";
        readonly type: "uint32";
    }, {
        readonly name: "binFeeInQuote";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "registerFee";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}];
export declare const iLiquidityRegistryAbi: readonly [{
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "pool";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
    }, {
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "binId";
        readonly internalType: "uint32";
        readonly type: "uint32";
    }, {
        readonly name: "currentBinLpBalance";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "notifyBinLiquidity";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}];
export declare const iLpRewardAbi: readonly [{
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "timepoint";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "clock";
        readonly internalType: "uint48";
        readonly type: "uint48";
    }];
    readonly name: "ERC5805FutureLookup";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "timestamp";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "epochStart";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "epochEnd";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "EpochEnded";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "epoch";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "InvalidEpoch";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "inputEpoch";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "currentEpoch";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "NoDataForFutureEpoch";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "NotAuthorizedNotifier";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "PoolNotInitialized";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "timestamp";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "epochStart";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "epochEnd";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "VotePeriodNotActive";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "timestamp";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "epochStart";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "epochEnd";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "VotePeriodNotEnded";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "pool";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
        readonly indexed: false;
    }, {
        readonly name: "isTokenA";
        readonly internalType: "bool";
        readonly type: "bool";
        readonly indexed: false;
    }, {
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }, {
        readonly name: "binId";
        readonly internalType: "uint32";
        readonly type: "uint32";
        readonly indexed: false;
    }, {
        readonly name: "timestamp";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }, {
        readonly name: "userRewards";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }, {
        readonly name: "userRewardPerTokenStored";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }];
    readonly name: "CheckpointTokenId";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "pool";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
        readonly indexed: false;
    }, {
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }, {
        readonly name: "binId";
        readonly internalType: "uint32";
        readonly type: "uint32";
        readonly indexed: false;
    }, {
        readonly name: "timestamp";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }, {
        readonly name: "balanceOf";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }, {
        readonly name: "totalSupply";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }];
    readonly name: "NotifyBinLiquidity";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "pool";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
        readonly indexed: false;
    }, {
        readonly name: "isTokenA";
        readonly internalType: "bool";
        readonly type: "bool";
        readonly indexed: false;
    }, {
        readonly name: "binId";
        readonly internalType: "uint32";
        readonly type: "uint32";
        readonly indexed: false;
    }, {
        readonly name: "timestamp";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }, {
        readonly name: "amount";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }, {
        readonly name: "rewardPerFeeStored";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }, {
        readonly name: "feeTrackerByBin";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }, {
        readonly name: "feeTracker";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }];
    readonly name: "RegisterFee";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "EPOCH_PERIOD";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "pool";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
    }, {
        readonly name: "binId";
        readonly internalType: "uint32";
        readonly type: "uint32";
    }];
    readonly name: "binTotalSupply";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "pool";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
    }, {
        readonly name: "isTokenA";
        readonly internalType: "bool";
        readonly type: "bool";
    }, {
        readonly name: "binId";
        readonly internalType: "uint32";
        readonly type: "uint32";
    }, {
        readonly name: "epoch";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "binTrackerForEpoch";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "currentEpoch";
    readonly outputs: readonly [{
        readonly name: "epoch";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "epoch";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "epochEnd";
    readonly outputs: readonly [{
        readonly name: "end";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "pure";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "epoch";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "epochIsOver";
    readonly outputs: readonly [{
        readonly name: "isOver";
        readonly internalType: "bool";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "pool";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
    }, {
        readonly name: "isTokenA";
        readonly internalType: "bool";
        readonly type: "bool";
    }, {
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "binId";
        readonly internalType: "uint32";
        readonly type: "uint32";
    }, {
        readonly name: "epoch";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "feeProrataForEpoch";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "pool";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
    }, {
        readonly name: "isTokenA";
        readonly internalType: "bool";
        readonly type: "bool";
    }];
    readonly name: "feeTracker";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "pool";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
    }, {
        readonly name: "isTokenA";
        readonly internalType: "bool";
        readonly type: "bool";
    }, {
        readonly name: "binId";
        readonly internalType: "uint32";
        readonly type: "uint32";
    }];
    readonly name: "feeTrackerByBin";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "pool";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
    }, {
        readonly name: "isTokenA";
        readonly internalType: "bool";
        readonly type: "bool";
    }, {
        readonly name: "epoch";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "globalTrackerForEpoch";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "epoch";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "isEpoch";
    readonly outputs: readonly [{
        readonly name: "_isEpoch";
        readonly internalType: "bool";
        readonly type: "bool";
    }];
    readonly stateMutability: "pure";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "lastEpoch";
    readonly outputs: readonly [{
        readonly name: "epoch";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "nextEpoch";
    readonly outputs: readonly [{
        readonly name: "epoch";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "pool";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
    }, {
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "binId";
        readonly internalType: "uint32";
        readonly type: "uint32";
    }, {
        readonly name: "currentBinLpBalance";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "notifyBinLiquidity";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "pool";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
    }, {
        readonly name: "binId";
        readonly internalType: "uint32";
        readonly type: "uint32";
    }, {
        readonly name: "timestamp";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "pastBinTotalSupply";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "pool";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
    }, {
        readonly name: "isTokenA";
        readonly internalType: "bool";
        readonly type: "bool";
    }, {
        readonly name: "timestamp";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "pastFeeTracker";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "pool";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
    }, {
        readonly name: "isTokenA";
        readonly internalType: "bool";
        readonly type: "bool";
    }, {
        readonly name: "binId";
        readonly internalType: "uint32";
        readonly type: "uint32";
    }, {
        readonly name: "timestamp";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "pastFeeTrackerByBin";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "pool";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
    }, {
        readonly name: "isTokenA";
        readonly internalType: "bool";
        readonly type: "bool";
    }, {
        readonly name: "binId";
        readonly internalType: "uint32";
        readonly type: "uint32";
    }, {
        readonly name: "timestamp";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "pastRewardPerFeeStored";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "pool";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
    }, {
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "binId";
        readonly internalType: "uint32";
        readonly type: "uint32";
    }, {
        readonly name: "timestamp";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "pastUserBalance";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "pool";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
    }, {
        readonly name: "isTokenA";
        readonly internalType: "bool";
        readonly type: "bool";
    }, {
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "binId";
        readonly internalType: "uint32";
        readonly type: "uint32";
    }, {
        readonly name: "timestamp";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "pastUserReward";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "pool";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
    }, {
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "isTokenA";
        readonly internalType: "bool";
        readonly type: "bool";
    }, {
        readonly name: "binId";
        readonly internalType: "uint32";
        readonly type: "uint32";
    }, {
        readonly name: "timestamp";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "pastUserRewardPerTokenStored";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "pool";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
    }, {
        readonly name: "isTokenA";
        readonly internalType: "bool";
        readonly type: "bool";
    }, {
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "binId";
        readonly internalType: "uint32";
        readonly type: "uint32";
    }, {
        readonly name: "timestamp";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "pastUserRewardRaw";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "isTokenA";
        readonly internalType: "bool";
        readonly type: "bool";
    }, {
        readonly name: "binId";
        readonly internalType: "uint32";
        readonly type: "uint32";
    }, {
        readonly name: "binFeeInQuote";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "registerFee";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "pool";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
    }, {
        readonly name: "isTokenA";
        readonly internalType: "bool";
        readonly type: "bool";
    }, {
        readonly name: "binId";
        readonly internalType: "uint32";
        readonly type: "uint32";
    }];
    readonly name: "rewardPerFeeStored";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "pool";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
    }, {
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "binId";
        readonly internalType: "uint32";
        readonly type: "uint32";
    }];
    readonly name: "userBalance";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "pool";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
    }, {
        readonly name: "isTokenA";
        readonly internalType: "bool";
        readonly type: "bool";
    }, {
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "binId";
        readonly internalType: "uint32";
        readonly type: "uint32";
    }];
    readonly name: "userReward";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "pool";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
    }, {
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "isTokenA";
        readonly internalType: "bool";
        readonly type: "bool";
    }, {
        readonly name: "binId";
        readonly internalType: "uint32";
        readonly type: "uint32";
    }];
    readonly name: "userRewardPerTokenStored";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "pool";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
    }, {
        readonly name: "isTokenA";
        readonly internalType: "bool";
        readonly type: "bool";
    }, {
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "binId";
        readonly internalType: "uint32";
        readonly type: "uint32";
    }];
    readonly name: "userRewardRaw";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "pool";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
    }, {
        readonly name: "isTokenA";
        readonly internalType: "bool";
        readonly type: "bool";
    }, {
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "binId";
        readonly internalType: "uint32";
        readonly type: "uint32";
    }, {
        readonly name: "epoch";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "userTrackerForEpoch";
    readonly outputs: readonly [{
        readonly name: "userEpochReward";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "pool";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
    }, {
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "binIds";
        readonly internalType: "uint32[]";
        readonly type: "uint32[]";
    }, {
        readonly name: "epoch";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "userTrackerForTokenIdForEpoch";
    readonly outputs: readonly [{
        readonly name: "tokenAAmount";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "tokenBAmount";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "tokenAAmounts";
        readonly internalType: "uint256[]";
        readonly type: "uint256[]";
    }, {
        readonly name: "tokenBAmounts";
        readonly internalType: "uint256[]";
        readonly type: "uint256[]";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "epoch";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "votingIsActive";
    readonly outputs: readonly [{
        readonly name: "isActive";
        readonly internalType: "bool";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
}];
export declare const iMaverickV2AddLiquidityCallbackAbi: readonly [{
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
        readonly name: "amountA";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "amountB";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "data";
        readonly internalType: "bytes";
        readonly type: "bytes";
    }];
    readonly name: "maverickV2AddLiquidityCallback";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}];
export declare const iMaverickV2FactoryAbi: readonly [{
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "FactorAlreadyInitialized";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "FactorNotInitialized";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "FactoryAccessorMustBeNonZero";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "FactoryInvalidFee";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "kinds";
        readonly internalType: "uint8";
        readonly type: "uint8";
    }];
    readonly name: "FactoryInvalidKinds";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "lookback";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "FactoryInvalidLookback";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "tickSpacing";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "FactoryInvalidTickSpacing";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "decimalsA";
        readonly internalType: "uint8";
        readonly type: "uint8";
    }, {
        readonly name: "decimalsB";
        readonly internalType: "uint8";
        readonly type: "uint8";
    }];
    readonly name: "FactoryInvalidTokenDecimals";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "_tokenA";
        readonly internalType: "contract IERC20";
        readonly type: "address";
    }, {
        readonly name: "_tokenB";
        readonly internalType: "contract IERC20";
        readonly type: "address";
    }];
    readonly name: "FactoryInvalidTokenOrder";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "feeAIn";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "feeBIn";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "tickSpacing";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "lookback";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "tokenA";
        readonly internalType: "contract IERC20";
        readonly type: "address";
    }, {
        readonly name: "tokenB";
        readonly internalType: "contract IERC20";
        readonly type: "address";
    }, {
        readonly name: "kinds";
        readonly internalType: "uint8";
        readonly type: "uint8";
    }, {
        readonly name: "accessor";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "FactoryPoolAlreadyExists";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "NotImplemented";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "poolAddress";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
        readonly indexed: false;
    }, {
        readonly name: "protocolFeeRatio";
        readonly internalType: "uint8";
        readonly type: "uint8";
        readonly indexed: false;
    }, {
        readonly name: "feeAIn";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }, {
        readonly name: "feeBIn";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }, {
        readonly name: "tickSpacing";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }, {
        readonly name: "lookback";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }, {
        readonly name: "activeTick";
        readonly internalType: "int32";
        readonly type: "int32";
        readonly indexed: false;
    }, {
        readonly name: "tokenA";
        readonly internalType: "contract IERC20";
        readonly type: "address";
        readonly indexed: false;
    }, {
        readonly name: "tokenB";
        readonly internalType: "contract IERC20";
        readonly type: "address";
        readonly indexed: false;
    }, {
        readonly name: "kinds";
        readonly internalType: "uint8";
        readonly type: "uint8";
        readonly indexed: false;
    }, {
        readonly name: "accessor";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: false;
    }];
    readonly name: "PoolCreated";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "receiver";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: false;
    }];
    readonly name: "SetFactoryProtocolFeeReceiver";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "registry";
        readonly internalType: "contract IFeeRegistry";
        readonly type: "address";
        readonly indexed: false;
    }];
    readonly name: "SetFactoryProtocolFeeRegistry";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "fee";
        readonly internalType: "uint64";
        readonly type: "uint64";
    }, {
        readonly name: "tickSpacing";
        readonly internalType: "uint16";
        readonly type: "uint16";
    }, {
        readonly name: "lookback";
        readonly internalType: "uint32";
        readonly type: "uint32";
    }, {
        readonly name: "tokenA";
        readonly internalType: "contract IERC20";
        readonly type: "address";
    }, {
        readonly name: "tokenB";
        readonly internalType: "contract IERC20";
        readonly type: "address";
    }, {
        readonly name: "activeTick";
        readonly internalType: "int32";
        readonly type: "int32";
    }, {
        readonly name: "kinds";
        readonly internalType: "uint8";
        readonly type: "uint8";
    }];
    readonly name: "create";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "feeAIn";
        readonly internalType: "uint64";
        readonly type: "uint64";
    }, {
        readonly name: "feeBIn";
        readonly internalType: "uint64";
        readonly type: "uint64";
    }, {
        readonly name: "tickSpacing";
        readonly internalType: "uint16";
        readonly type: "uint16";
    }, {
        readonly name: "lookback";
        readonly internalType: "uint32";
        readonly type: "uint32";
    }, {
        readonly name: "tokenA";
        readonly internalType: "contract IERC20";
        readonly type: "address";
    }, {
        readonly name: "tokenB";
        readonly internalType: "contract IERC20";
        readonly type: "address";
    }, {
        readonly name: "activeTick";
        readonly internalType: "int32";
        readonly type: "int32";
    }, {
        readonly name: "kinds";
        readonly internalType: "uint8";
        readonly type: "uint8";
    }];
    readonly name: "create";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "deployParameters";
    readonly outputs: readonly [{
        readonly name: "feeAIn";
        readonly internalType: "uint64";
        readonly type: "uint64";
    }, {
        readonly name: "feeBIn";
        readonly internalType: "uint64";
        readonly type: "uint64";
    }, {
        readonly name: "lookback";
        readonly internalType: "uint32";
        readonly type: "uint32";
    }, {
        readonly name: "activeTick";
        readonly internalType: "int32";
        readonly type: "int32";
    }, {
        readonly name: "tokenAScale";
        readonly internalType: "uint64";
        readonly type: "uint64";
    }, {
        readonly name: "tokenBScale";
        readonly internalType: "uint64";
        readonly type: "uint64";
    }, {
        readonly name: "tokenA";
        readonly internalType: "contract IERC20";
        readonly type: "address";
    }, {
        readonly name: "tokenB";
        readonly internalType: "contract IERC20";
        readonly type: "address";
    }, {
        readonly name: "tickSpacing";
        readonly internalType: "uint16";
        readonly type: "uint16";
    }, {
        readonly name: "options";
        readonly internalType: "uint8";
        readonly type: "uint8";
    }, {
        readonly name: "accessor";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "pool";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
    }];
    readonly name: "isFactoryPool";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "bool";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "startIndex";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "endIndex";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "lookup";
    readonly outputs: readonly [{
        readonly name: "pools";
        readonly internalType: "contract IMaverickV2Pool[]";
        readonly type: "address[]";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "feeAIn";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "feeBIn";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "tickSpacing";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "lookback";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "tokenA";
        readonly internalType: "contract IERC20";
        readonly type: "address";
    }, {
        readonly name: "tokenB";
        readonly internalType: "contract IERC20";
        readonly type: "address";
    }, {
        readonly name: "kinds";
        readonly internalType: "uint8";
        readonly type: "uint8";
    }];
    readonly name: "lookup";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_tokenA";
        readonly internalType: "contract IERC20";
        readonly type: "address";
    }, {
        readonly name: "_tokenB";
        readonly internalType: "contract IERC20";
        readonly type: "address";
    }, {
        readonly name: "startIndex";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "endIndex";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "lookup";
    readonly outputs: readonly [{
        readonly name: "pools";
        readonly internalType: "contract IMaverickV2Pool[]";
        readonly type: "address[]";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "owner";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_tokenA";
        readonly internalType: "contract IERC20";
        readonly type: "address";
    }, {
        readonly name: "_tokenB";
        readonly internalType: "contract IERC20";
        readonly type: "address";
    }, {
        readonly name: "accessor";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "poolByTokenCount";
    readonly outputs: readonly [{
        readonly name: "_poolCount";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "poolCount";
    readonly outputs: readonly [{
        readonly name: "_poolCount";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "protocolFeeReceiver";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "protocolFeeRegistry";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "contract IFeeRegistry";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
}];
export declare const iMaverickV2FactoryAdminAbi: readonly [{
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "renounceOwnership";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "receiver";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "setProtocolFeeReceiver";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "registry";
        readonly internalType: "contract IFeeRegistry";
        readonly type: "address";
    }];
    readonly name: "setProtocolFeeRegistry";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "newOwner";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "transferOwnership";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}];
export declare const iMaverickV2FlashLoanCallbackAbi: readonly [{
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
        readonly name: "amountALent";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "amountBLent";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "data";
        readonly internalType: "bytes";
        readonly type: "bytes";
    }];
    readonly name: "maverickV2FlashLoanCallback";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}];
export declare const iMaverickV2LiquidityManagerAbi: readonly [{
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "LiquidityManagerNotFactoryPool";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "LiquidityManagerNotTokenIdOwner";
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
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "pool";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
    }, {
        readonly name: "recipient";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "subaccount";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "packedSqrtPriceBreaks";
        readonly internalType: "bytes";
        readonly type: "bytes";
    }, {
        readonly name: "packedArgs";
        readonly internalType: "bytes[]";
        readonly type: "bytes[]";
    }];
    readonly name: "addLiquidity";
    readonly outputs: readonly [{
        readonly name: "tokenAAmount";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "tokenBAmount";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "binIds";
        readonly internalType: "uint32[]";
        readonly type: "uint32[]";
    }];
    readonly stateMutability: "payable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "pool";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
    }, {
        readonly name: "recipient";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "index";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "packedSqrtPriceBreaks";
        readonly internalType: "bytes";
        readonly type: "bytes";
    }, {
        readonly name: "packedArgs";
        readonly internalType: "bytes[]";
        readonly type: "bytes[]";
    }];
    readonly name: "addPositionLiquidityToRecipientByTokenIndex";
    readonly outputs: readonly [{
        readonly name: "tokenAAmount";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "tokenBAmount";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "binIds";
        readonly internalType: "uint32[]";
        readonly type: "uint32[]";
    }];
    readonly stateMutability: "payable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "pool";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
    }, {
        readonly name: "index";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "packedSqrtPriceBreaks";
        readonly internalType: "bytes";
        readonly type: "bytes";
    }, {
        readonly name: "packedArgs";
        readonly internalType: "bytes[]";
        readonly type: "bytes[]";
    }];
    readonly name: "addPositionLiquidityToSenderByTokenIndex";
    readonly outputs: readonly [{
        readonly name: "tokenAAmount";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "tokenBAmount";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "binIds";
        readonly internalType: "uint32[]";
        readonly type: "uint32[]";
    }];
    readonly stateMutability: "payable";
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
        readonly name: "fee";
        readonly internalType: "uint64";
        readonly type: "uint64";
    }, {
        readonly name: "tickSpacing";
        readonly internalType: "uint16";
        readonly type: "uint16";
    }, {
        readonly name: "lookback";
        readonly internalType: "uint32";
        readonly type: "uint32";
    }, {
        readonly name: "tokenA";
        readonly internalType: "contract IERC20";
        readonly type: "address";
    }, {
        readonly name: "tokenB";
        readonly internalType: "contract IERC20";
        readonly type: "address";
    }, {
        readonly name: "activeTick";
        readonly internalType: "int32";
        readonly type: "int32";
    }, {
        readonly name: "kinds";
        readonly internalType: "uint8";
        readonly type: "uint8";
    }];
    readonly name: "createPool";
    readonly outputs: readonly [{
        readonly name: "pool";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
    }];
    readonly stateMutability: "payable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "feeAIn";
        readonly internalType: "uint64";
        readonly type: "uint64";
    }, {
        readonly name: "feeBIn";
        readonly internalType: "uint64";
        readonly type: "uint64";
    }, {
        readonly name: "tickSpacing";
        readonly internalType: "uint16";
        readonly type: "uint16";
    }, {
        readonly name: "lookback";
        readonly internalType: "uint32";
        readonly type: "uint32";
    }, {
        readonly name: "tokenA";
        readonly internalType: "contract IERC20";
        readonly type: "address";
    }, {
        readonly name: "tokenB";
        readonly internalType: "contract IERC20";
        readonly type: "address";
    }, {
        readonly name: "activeTick";
        readonly internalType: "int32";
        readonly type: "int32";
    }, {
        readonly name: "kinds";
        readonly internalType: "uint8";
        readonly type: "uint8";
    }];
    readonly name: "createPool";
    readonly outputs: readonly [{
        readonly name: "pool";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
    }];
    readonly stateMutability: "payable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "recipient";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "params";
        readonly internalType: "struct IMaverickV2PoolLens.CreateAndAddParamsInputs";
        readonly type: "tuple";
        readonly components: readonly [{
            readonly name: "feeAIn";
            readonly internalType: "uint64";
            readonly type: "uint64";
        }, {
            readonly name: "feeBIn";
            readonly internalType: "uint64";
            readonly type: "uint64";
        }, {
            readonly name: "tickSpacing";
            readonly internalType: "uint16";
            readonly type: "uint16";
        }, {
            readonly name: "lookback";
            readonly internalType: "uint32";
            readonly type: "uint32";
        }, {
            readonly name: "tokenA";
            readonly internalType: "contract IERC20";
            readonly type: "address";
        }, {
            readonly name: "tokenB";
            readonly internalType: "contract IERC20";
            readonly type: "address";
        }, {
            readonly name: "activeTick";
            readonly internalType: "int32";
            readonly type: "int32";
        }, {
            readonly name: "kinds";
            readonly internalType: "uint8";
            readonly type: "uint8";
        }, {
            readonly name: "donateParams";
            readonly internalType: "struct IMaverickV2Pool.AddLiquidityParams";
            readonly type: "tuple";
            readonly components: readonly [{
                readonly name: "kind";
                readonly internalType: "uint8";
                readonly type: "uint8";
            }, {
                readonly name: "ticks";
                readonly internalType: "int32[]";
                readonly type: "int32[]";
            }, {
                readonly name: "amounts";
                readonly internalType: "uint128[]";
                readonly type: "uint128[]";
            }];
        }, {
            readonly name: "swapAmount";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "addParams";
            readonly internalType: "struct IMaverickV2Pool.AddLiquidityParams";
            readonly type: "tuple";
            readonly components: readonly [{
                readonly name: "kind";
                readonly internalType: "uint8";
                readonly type: "uint8";
            }, {
                readonly name: "ticks";
                readonly internalType: "int32[]";
                readonly type: "int32[]";
            }, {
                readonly name: "amounts";
                readonly internalType: "uint128[]";
                readonly type: "uint128[]";
            }];
        }, {
            readonly name: "packedAddParams";
            readonly internalType: "bytes[]";
            readonly type: "bytes[]";
        }, {
            readonly name: "deltaAOut";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "deltaBOut";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "preAddReserveA";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "preAddReserveB";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
    }];
    readonly name: "createPoolAtPriceAndAddLiquidity";
    readonly outputs: readonly [{
        readonly name: "pool";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
    }, {
        readonly name: "tokenAAmount";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "tokenBAmount";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "binIds";
        readonly internalType: "uint32[]";
        readonly type: "uint32[]";
    }, {
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "payable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "params";
        readonly internalType: "struct IMaverickV2PoolLens.CreateAndAddParamsInputs";
        readonly type: "tuple";
        readonly components: readonly [{
            readonly name: "feeAIn";
            readonly internalType: "uint64";
            readonly type: "uint64";
        }, {
            readonly name: "feeBIn";
            readonly internalType: "uint64";
            readonly type: "uint64";
        }, {
            readonly name: "tickSpacing";
            readonly internalType: "uint16";
            readonly type: "uint16";
        }, {
            readonly name: "lookback";
            readonly internalType: "uint32";
            readonly type: "uint32";
        }, {
            readonly name: "tokenA";
            readonly internalType: "contract IERC20";
            readonly type: "address";
        }, {
            readonly name: "tokenB";
            readonly internalType: "contract IERC20";
            readonly type: "address";
        }, {
            readonly name: "activeTick";
            readonly internalType: "int32";
            readonly type: "int32";
        }, {
            readonly name: "kinds";
            readonly internalType: "uint8";
            readonly type: "uint8";
        }, {
            readonly name: "donateParams";
            readonly internalType: "struct IMaverickV2Pool.AddLiquidityParams";
            readonly type: "tuple";
            readonly components: readonly [{
                readonly name: "kind";
                readonly internalType: "uint8";
                readonly type: "uint8";
            }, {
                readonly name: "ticks";
                readonly internalType: "int32[]";
                readonly type: "int32[]";
            }, {
                readonly name: "amounts";
                readonly internalType: "uint128[]";
                readonly type: "uint128[]";
            }];
        }, {
            readonly name: "swapAmount";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "addParams";
            readonly internalType: "struct IMaverickV2Pool.AddLiquidityParams";
            readonly type: "tuple";
            readonly components: readonly [{
                readonly name: "kind";
                readonly internalType: "uint8";
                readonly type: "uint8";
            }, {
                readonly name: "ticks";
                readonly internalType: "int32[]";
                readonly type: "int32[]";
            }, {
                readonly name: "amounts";
                readonly internalType: "uint128[]";
                readonly type: "uint128[]";
            }];
        }, {
            readonly name: "packedAddParams";
            readonly internalType: "bytes[]";
            readonly type: "bytes[]";
        }, {
            readonly name: "deltaAOut";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "deltaBOut";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "preAddReserveA";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "preAddReserveB";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
    }];
    readonly name: "createPoolAtPriceAndAddLiquidityToSender";
    readonly outputs: readonly [{
        readonly name: "pool";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
    }, {
        readonly name: "tokenAAmount";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "tokenBAmount";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "binIds";
        readonly internalType: "uint32[]";
        readonly type: "uint32[]";
    }, {
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "payable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "pool";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
    }, {
        readonly name: "args";
        readonly internalType: "struct IMaverickV2Pool.AddLiquidityParams";
        readonly type: "tuple";
        readonly components: readonly [{
            readonly name: "kind";
            readonly internalType: "uint8";
            readonly type: "uint8";
        }, {
            readonly name: "ticks";
            readonly internalType: "int32[]";
            readonly type: "int32[]";
        }, {
            readonly name: "amounts";
            readonly internalType: "uint128[]";
            readonly type: "uint128[]";
        }];
    }];
    readonly name: "donateLiquidity";
    readonly outputs: readonly [];
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
        readonly name: "_factory";
        readonly internalType: "contract IMaverickV2Factory";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "pool";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
    }, {
        readonly name: "binIds";
        readonly internalType: "uint32[]";
        readonly type: "uint32[]";
    }, {
        readonly name: "maxRecursion";
        readonly internalType: "uint32";
        readonly type: "uint32";
    }];
    readonly name: "migrateBinsUpStack";
    readonly outputs: readonly [];
    readonly stateMutability: "payable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "pool";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
    }, {
        readonly name: "recipient";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "packedSqrtPriceBreaks";
        readonly internalType: "bytes";
        readonly type: "bytes";
    }, {
        readonly name: "packedArgs";
        readonly internalType: "bytes[]";
        readonly type: "bytes[]";
    }];
    readonly name: "mintPositionNft";
    readonly outputs: readonly [{
        readonly name: "tokenAAmount";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "tokenBAmount";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "binIds";
        readonly internalType: "uint32[]";
        readonly type: "uint32[]";
    }, {
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "payable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "pool";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
    }, {
        readonly name: "packedSqrtPriceBreaks";
        readonly internalType: "bytes";
        readonly type: "bytes";
    }, {
        readonly name: "packedArgs";
        readonly internalType: "bytes[]";
        readonly type: "bytes[]";
    }];
    readonly name: "mintPositionNftToSender";
    readonly outputs: readonly [{
        readonly name: "tokenAAmount";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "tokenBAmount";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "binIds";
        readonly internalType: "uint32[]";
        readonly type: "uint32[]";
    }, {
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "payable";
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
        readonly name: "args";
        readonly internalType: "struct IMaverickV2Pool.AddLiquidityParams";
        readonly type: "tuple";
        readonly components: readonly [{
            readonly name: "kind";
            readonly internalType: "uint8";
            readonly type: "uint8";
        }, {
            readonly name: "ticks";
            readonly internalType: "int32[]";
            readonly type: "int32[]";
        }, {
            readonly name: "amounts";
            readonly internalType: "uint128[]";
            readonly type: "uint128[]";
        }];
    }];
    readonly name: "packAddLiquidityArgs";
    readonly outputs: readonly [{
        readonly name: "argsPacked";
        readonly internalType: "bytes";
        readonly type: "bytes";
    }];
    readonly stateMutability: "pure";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "args";
        readonly internalType: "struct IMaverickV2Pool.AddLiquidityParams[]";
        readonly type: "tuple[]";
        readonly components: readonly [{
            readonly name: "kind";
            readonly internalType: "uint8";
            readonly type: "uint8";
        }, {
            readonly name: "ticks";
            readonly internalType: "int32[]";
            readonly type: "int32[]";
        }, {
            readonly name: "amounts";
            readonly internalType: "uint128[]";
            readonly type: "uint128[]";
        }];
    }];
    readonly name: "packAddLiquidityArgsArray";
    readonly outputs: readonly [{
        readonly name: "argsPacked";
        readonly internalType: "bytes[]";
        readonly type: "bytes[]";
    }];
    readonly stateMutability: "pure";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "fullArray";
        readonly internalType: "uint88[]";
        readonly type: "uint88[]";
    }];
    readonly name: "packUint88Array";
    readonly outputs: readonly [{
        readonly name: "packedArray";
        readonly internalType: "bytes";
        readonly type: "bytes";
    }];
    readonly stateMutability: "pure";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "position";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "contract IMaverickV2Position";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
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
        readonly name: "argsPacked";
        readonly internalType: "bytes";
        readonly type: "bytes";
    }];
    readonly name: "unpackAddLiquidityArgs";
    readonly outputs: readonly [{
        readonly name: "args";
        readonly internalType: "struct IMaverickV2Pool.AddLiquidityParams";
        readonly type: "tuple";
        readonly components: readonly [{
            readonly name: "kind";
            readonly internalType: "uint8";
            readonly type: "uint8";
        }, {
            readonly name: "ticks";
            readonly internalType: "int32[]";
            readonly type: "int32[]";
        }, {
            readonly name: "amounts";
            readonly internalType: "uint128[]";
            readonly type: "uint128[]";
        }];
    }];
    readonly stateMutability: "pure";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "packedArray";
        readonly internalType: "bytes";
        readonly type: "bytes";
    }];
    readonly name: "unpackUint88Array";
    readonly outputs: readonly [{
        readonly name: "fullArray";
        readonly internalType: "uint88[]";
        readonly type: "uint88[]";
    }];
    readonly stateMutability: "pure";
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
        readonly name: "_weth";
        readonly internalType: "contract IWETH9";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "receive";
    readonly stateMutability: "payable";
}];
export declare const iMaverickV2PoolAbi: readonly [{
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "binIdsLength";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "amountsLength";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "PoolBinIdsAmountsLengthMismatch";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "startingTick";
        readonly internalType: "int32";
        readonly type: "int32";
    }];
    readonly name: "PoolCurrentTickBeyondSwapLimit";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "PoolFunctionNotImplemented";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "deltaLpAmount";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "accountBalance";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "PoolInsufficientBalance";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "PoolInvalidFee";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "kinds";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "kind";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "PoolKindNotSupported";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "PoolLocked";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "PoolMigrateBinFirst";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "PoolMinimumLiquidityNotMet";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "PoolNoProtocolFeeReceiverSet";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "amount";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "PoolReservesExceedMaximum";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "sender_";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "accessor";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "PoolSenderNotAccessor";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "sender_";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "accessor";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "PoolSenderNotFactory";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "tick";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "PoolTickMaxExceeded";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "ticksLength";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "amountsLength";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "PoolTicksAmountsLengthMismatch";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "index";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "previousTick";
        readonly internalType: "int256";
        readonly type: "int256";
    }, {
        readonly name: "tick";
        readonly internalType: "int256";
        readonly type: "int256";
    }];
    readonly name: "PoolTicksNotSorted";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "internalReserve";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "tokenBalance";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "token";
        readonly internalType: "contract IERC20";
        readonly type: "address";
    }];
    readonly name: "PoolTokenNotSolvent";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "amount";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "bits";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "PoolValueExceedsBits";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "PoolZeroLiquidityAdded";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "sender";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: false;
    }, {
        readonly name: "recipient";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: false;
    }, {
        readonly name: "subaccount";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }, {
        readonly name: "params";
        readonly internalType: "struct IMaverickV2Pool.AddLiquidityParams";
        readonly type: "tuple";
        readonly components: readonly [{
            readonly name: "kind";
            readonly internalType: "uint8";
            readonly type: "uint8";
        }, {
            readonly name: "ticks";
            readonly internalType: "int32[]";
            readonly type: "int32[]";
        }, {
            readonly name: "amounts";
            readonly internalType: "uint128[]";
            readonly type: "uint128[]";
        }];
        readonly indexed: false;
    }, {
        readonly name: "tokenAAmount";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }, {
        readonly name: "tokenBAmount";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }, {
        readonly name: "binIds";
        readonly internalType: "uint32[]";
        readonly type: "uint32[]";
        readonly indexed: false;
    }];
    readonly name: "PoolAddLiquidity";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "sender";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: false;
    }, {
        readonly name: "recipient";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: false;
    }, {
        readonly name: "amountA";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }, {
        readonly name: "amountB";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }];
    readonly name: "PoolFlashLoan";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "sender";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: false;
    }, {
        readonly name: "binId";
        readonly internalType: "uint32";
        readonly type: "uint32";
        readonly indexed: false;
    }, {
        readonly name: "maxRecursion";
        readonly internalType: "uint32";
        readonly type: "uint32";
        readonly indexed: false;
    }];
    readonly name: "PoolMigrateBinsUpStack";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "token";
        readonly internalType: "contract IERC20";
        readonly type: "address";
        readonly indexed: false;
    }, {
        readonly name: "protocolFee";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }];
    readonly name: "PoolProtocolFeeCollected";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "sender";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: false;
    }, {
        readonly name: "recipient";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: false;
    }, {
        readonly name: "subaccount";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }, {
        readonly name: "params";
        readonly internalType: "struct IMaverickV2Pool.RemoveLiquidityParams";
        readonly type: "tuple";
        readonly components: readonly [{
            readonly name: "binIds";
            readonly internalType: "uint32[]";
            readonly type: "uint32[]";
        }, {
            readonly name: "amounts";
            readonly internalType: "uint128[]";
            readonly type: "uint128[]";
        }];
        readonly indexed: false;
    }, {
        readonly name: "tokenAOut";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }, {
        readonly name: "tokenBOut";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }];
    readonly name: "PoolRemoveLiquidity";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "sqrtPrice";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }];
    readonly name: "PoolSqrtPrice";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "sender";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: false;
    }, {
        readonly name: "recipient";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: false;
    }, {
        readonly name: "params";
        readonly internalType: "struct IMaverickV2Pool.SwapParams";
        readonly type: "tuple";
        readonly components: readonly [{
            readonly name: "amount";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "tokenAIn";
            readonly internalType: "bool";
            readonly type: "bool";
        }, {
            readonly name: "exactOutput";
            readonly internalType: "bool";
            readonly type: "bool";
        }, {
            readonly name: "tickLimit";
            readonly internalType: "int32";
            readonly type: "int32";
        }];
        readonly indexed: false;
    }, {
        readonly name: "amountIn";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }, {
        readonly name: "amountOut";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }];
    readonly name: "PoolSwap";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "tick";
        readonly internalType: "int32";
        readonly type: "int32";
        readonly indexed: false;
    }, {
        readonly name: "kind";
        readonly internalType: "uint8";
        readonly type: "uint8";
        readonly indexed: false;
    }, {
        readonly name: "binId";
        readonly internalType: "uint32";
        readonly type: "uint32";
        readonly indexed: false;
    }];
    readonly name: "PoolTickBinUpdate";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "tick";
        readonly internalType: "int32";
        readonly type: "int32";
        readonly indexed: false;
    }, {
        readonly name: "reserveA";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }, {
        readonly name: "reserveB";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }];
    readonly name: "PoolTickState";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "accessor";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "address";
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
        readonly name: "subaccount";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "params";
        readonly internalType: "struct IMaverickV2Pool.AddLiquidityParams";
        readonly type: "tuple";
        readonly components: readonly [{
            readonly name: "kind";
            readonly internalType: "uint8";
            readonly type: "uint8";
        }, {
            readonly name: "ticks";
            readonly internalType: "int32[]";
            readonly type: "int32[]";
        }, {
            readonly name: "amounts";
            readonly internalType: "uint128[]";
            readonly type: "uint128[]";
        }];
    }, {
        readonly name: "data";
        readonly internalType: "bytes";
        readonly type: "bytes";
    }];
    readonly name: "addLiquidity";
    readonly outputs: readonly [{
        readonly name: "tokenAAmount";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "tokenBAmount";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "binIds";
        readonly internalType: "uint32[]";
        readonly type: "uint32[]";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "user";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "subaccount";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "binId";
        readonly internalType: "uint32";
        readonly type: "uint32";
    }];
    readonly name: "balanceOf";
    readonly outputs: readonly [{
        readonly name: "lpToken";
        readonly internalType: "uint128";
        readonly type: "uint128";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "tick";
        readonly internalType: "int32";
        readonly type: "int32";
    }, {
        readonly name: "kind";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "binIdByTickKind";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint32";
        readonly type: "uint32";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "isTokenA";
        readonly internalType: "bool";
        readonly type: "bool";
    }];
    readonly name: "distributeFees";
    readonly outputs: readonly [{
        readonly name: "protocolFee";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "token";
        readonly internalType: "contract IERC20";
        readonly type: "address";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "factory";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "contract IMaverickV2Factory";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "tokenAIn";
        readonly internalType: "bool";
        readonly type: "bool";
    }];
    readonly name: "fee";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "recipient";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "amountA";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "amountB";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "data";
        readonly internalType: "bytes";
        readonly type: "bytes";
    }];
    readonly name: "flashLoan";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "binId";
        readonly internalType: "uint32";
        readonly type: "uint32";
    }];
    readonly name: "getBin";
    readonly outputs: readonly [{
        readonly name: "bin";
        readonly internalType: "struct IMaverickV2Pool.BinState";
        readonly type: "tuple";
        readonly components: readonly [{
            readonly name: "mergeBinBalance";
            readonly internalType: "uint128";
            readonly type: "uint128";
        }, {
            readonly name: "tickBalance";
            readonly internalType: "uint128";
            readonly type: "uint128";
        }, {
            readonly name: "totalSupply";
            readonly internalType: "uint128";
            readonly type: "uint128";
        }, {
            readonly name: "kind";
            readonly internalType: "uint8";
            readonly type: "uint8";
        }, {
            readonly name: "tick";
            readonly internalType: "int32";
            readonly type: "int32";
        }, {
            readonly name: "mergeId";
            readonly internalType: "uint32";
            readonly type: "uint32";
        }];
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "getCurrentTwa";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "int256";
        readonly type: "int256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "getState";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "struct IMaverickV2Pool.State";
        readonly type: "tuple";
        readonly components: readonly [{
            readonly name: "reserveA";
            readonly internalType: "uint128";
            readonly type: "uint128";
        }, {
            readonly name: "reserveB";
            readonly internalType: "uint128";
            readonly type: "uint128";
        }, {
            readonly name: "lastTwaD8";
            readonly internalType: "int64";
            readonly type: "int64";
        }, {
            readonly name: "lastLogPriceD8";
            readonly internalType: "int64";
            readonly type: "int64";
        }, {
            readonly name: "lastTimestamp";
            readonly internalType: "uint40";
            readonly type: "uint40";
        }, {
            readonly name: "activeTick";
            readonly internalType: "int32";
            readonly type: "int32";
        }, {
            readonly name: "isLocked";
            readonly internalType: "bool";
            readonly type: "bool";
        }, {
            readonly name: "binCounter";
            readonly internalType: "uint32";
            readonly type: "uint32";
        }, {
            readonly name: "protocolFeeRatioD3";
            readonly internalType: "uint8";
            readonly type: "uint8";
        }];
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "tick";
        readonly internalType: "int32";
        readonly type: "int32";
    }];
    readonly name: "getTick";
    readonly outputs: readonly [{
        readonly name: "tickState";
        readonly internalType: "struct IMaverickV2Pool.TickState";
        readonly type: "tuple";
        readonly components: readonly [{
            readonly name: "reserveA";
            readonly internalType: "uint128";
            readonly type: "uint128";
        }, {
            readonly name: "reserveB";
            readonly internalType: "uint128";
            readonly type: "uint128";
        }, {
            readonly name: "totalSupply";
            readonly internalType: "uint128";
            readonly type: "uint128";
        }, {
            readonly name: "binIdsByTick";
            readonly internalType: "uint32[4]";
            readonly type: "uint32[4]";
        }];
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "kinds";
    readonly outputs: readonly [{
        readonly name: "_kinds";
        readonly internalType: "uint8";
        readonly type: "uint8";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "lendingFeeRateD18";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "lookback";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "binId";
        readonly internalType: "uint32";
        readonly type: "uint32";
    }, {
        readonly name: "maxRecursion";
        readonly internalType: "uint32";
        readonly type: "uint32";
    }];
    readonly name: "migrateBinUpStack";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "protocolFeeA";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint128";
        readonly type: "uint128";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "protocolFeeB";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint128";
        readonly type: "uint128";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "recipient";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "subaccount";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "params";
        readonly internalType: "struct IMaverickV2Pool.RemoveLiquidityParams";
        readonly type: "tuple";
        readonly components: readonly [{
            readonly name: "binIds";
            readonly internalType: "uint32[]";
            readonly type: "uint32[]";
        }, {
            readonly name: "amounts";
            readonly internalType: "uint128[]";
            readonly type: "uint128[]";
        }];
    }];
    readonly name: "removeLiquidity";
    readonly outputs: readonly [{
        readonly name: "tokenAOut";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "tokenBOut";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "recipient";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "params";
        readonly internalType: "struct IMaverickV2Pool.SwapParams";
        readonly type: "tuple";
        readonly components: readonly [{
            readonly name: "amount";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "tokenAIn";
            readonly internalType: "bool";
            readonly type: "bool";
        }, {
            readonly name: "exactOutput";
            readonly internalType: "bool";
            readonly type: "bool";
        }, {
            readonly name: "tickLimit";
            readonly internalType: "int32";
            readonly type: "int32";
        }];
    }, {
        readonly name: "data";
        readonly internalType: "bytes";
        readonly type: "bytes";
    }];
    readonly name: "swap";
    readonly outputs: readonly [{
        readonly name: "amountIn";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "amountOut";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "tickSpacing";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "tokenA";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "contract IERC20";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "tokenAScale";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "tokenB";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "contract IERC20";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "tokenBScale";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}];
export declare const iMaverickV2PoolLensAbi: readonly [{
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "targetSqrtPrice";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "sqrtLowerTickPrice";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "sqrtUpperTickPrice";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "LensTargetPriceOutOfBounds";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "targetIsA";
        readonly internalType: "bool";
        readonly type: "bool";
    }, {
        readonly name: "deltaA";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "deltaB";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "LensTargetingTokenWithNoDelta";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "relativeLiquidityAmount";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "deltaA";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "deltaB";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "LensTooLittleLiquidity";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "params";
        readonly internalType: "struct IMaverickV2PoolLens.AddParamsViewInputs";
        readonly type: "tuple";
        readonly components: readonly [{
            readonly name: "pool";
            readonly internalType: "contract IMaverickV2Pool";
            readonly type: "address";
        }, {
            readonly name: "kind";
            readonly internalType: "uint8";
            readonly type: "uint8";
        }, {
            readonly name: "ticks";
            readonly internalType: "int32[]";
            readonly type: "int32[]";
        }, {
            readonly name: "relativeLiquidityAmounts";
            readonly internalType: "uint128[]";
            readonly type: "uint128[]";
        }, {
            readonly name: "addSpec";
            readonly internalType: "struct IMaverickV2PoolLens.AddParamsSpecification";
            readonly type: "tuple";
            readonly components: readonly [{
                readonly name: "slippageFactorD18";
                readonly internalType: "uint256";
                readonly type: "uint256";
            }, {
                readonly name: "numberOfPriceBreaksPerSide";
                readonly internalType: "uint256";
                readonly type: "uint256";
            }, {
                readonly name: "targetAmount";
                readonly internalType: "uint256";
                readonly type: "uint256";
            }, {
                readonly name: "targetIsA";
                readonly internalType: "bool";
                readonly type: "bool";
            }];
        }];
    }];
    readonly name: "getAddLiquidityParams";
    readonly outputs: readonly [{
        readonly name: "packedSqrtPriceBreaks";
        readonly internalType: "bytes";
        readonly type: "bytes";
    }, {
        readonly name: "packedArgs";
        readonly internalType: "bytes[]";
        readonly type: "bytes[]";
    }, {
        readonly name: "sqrtPriceBreaks";
        readonly internalType: "uint88[]";
        readonly type: "uint88[]";
    }, {
        readonly name: "addParams";
        readonly internalType: "struct IMaverickV2Pool.AddLiquidityParams[]";
        readonly type: "tuple[]";
        readonly components: readonly [{
            readonly name: "kind";
            readonly internalType: "uint8";
            readonly type: "uint8";
        }, {
            readonly name: "ticks";
            readonly internalType: "int32[]";
            readonly type: "int32[]";
        }, {
            readonly name: "amounts";
            readonly internalType: "uint128[]";
            readonly type: "uint128[]";
        }];
    }, {
        readonly name: "tickDeltas";
        readonly internalType: "struct IMaverickV2PoolLens.TickDeltas[]";
        readonly type: "tuple[]";
        readonly components: readonly [{
            readonly name: "deltaAOut";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "deltaBOut";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "deltaAs";
            readonly internalType: "uint256[]";
            readonly type: "uint256[]";
        }, {
            readonly name: "deltaBs";
            readonly internalType: "uint256[]";
            readonly type: "uint256[]";
        }];
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "params";
        readonly internalType: "struct IMaverickV2PoolLens.CreateAndAddParamsViewInputs";
        readonly type: "tuple";
        readonly components: readonly [{
            readonly name: "feeAIn";
            readonly internalType: "uint64";
            readonly type: "uint64";
        }, {
            readonly name: "feeBIn";
            readonly internalType: "uint64";
            readonly type: "uint64";
        }, {
            readonly name: "tickSpacing";
            readonly internalType: "uint16";
            readonly type: "uint16";
        }, {
            readonly name: "lookback";
            readonly internalType: "uint32";
            readonly type: "uint32";
        }, {
            readonly name: "tokenA";
            readonly internalType: "contract IERC20";
            readonly type: "address";
        }, {
            readonly name: "tokenB";
            readonly internalType: "contract IERC20";
            readonly type: "address";
        }, {
            readonly name: "activeTick";
            readonly internalType: "int32";
            readonly type: "int32";
        }, {
            readonly name: "kinds";
            readonly internalType: "uint8";
            readonly type: "uint8";
        }, {
            readonly name: "initialTargetB";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "sqrtPrice";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "kind";
            readonly internalType: "uint8";
            readonly type: "uint8";
        }, {
            readonly name: "ticks";
            readonly internalType: "int32[]";
            readonly type: "int32[]";
        }, {
            readonly name: "relativeLiquidityAmounts";
            readonly internalType: "uint128[]";
            readonly type: "uint128[]";
        }, {
            readonly name: "targetAmount";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "targetIsA";
            readonly internalType: "bool";
            readonly type: "bool";
        }];
    }];
    readonly name: "getCreatePoolAtPriceAndAddLiquidityParams";
    readonly outputs: readonly [{
        readonly name: "output";
        readonly internalType: "struct IMaverickV2PoolLens.CreateAndAddParamsInputs";
        readonly type: "tuple";
        readonly components: readonly [{
            readonly name: "feeAIn";
            readonly internalType: "uint64";
            readonly type: "uint64";
        }, {
            readonly name: "feeBIn";
            readonly internalType: "uint64";
            readonly type: "uint64";
        }, {
            readonly name: "tickSpacing";
            readonly internalType: "uint16";
            readonly type: "uint16";
        }, {
            readonly name: "lookback";
            readonly internalType: "uint32";
            readonly type: "uint32";
        }, {
            readonly name: "tokenA";
            readonly internalType: "contract IERC20";
            readonly type: "address";
        }, {
            readonly name: "tokenB";
            readonly internalType: "contract IERC20";
            readonly type: "address";
        }, {
            readonly name: "activeTick";
            readonly internalType: "int32";
            readonly type: "int32";
        }, {
            readonly name: "kinds";
            readonly internalType: "uint8";
            readonly type: "uint8";
        }, {
            readonly name: "donateParams";
            readonly internalType: "struct IMaverickV2Pool.AddLiquidityParams";
            readonly type: "tuple";
            readonly components: readonly [{
                readonly name: "kind";
                readonly internalType: "uint8";
                readonly type: "uint8";
            }, {
                readonly name: "ticks";
                readonly internalType: "int32[]";
                readonly type: "int32[]";
            }, {
                readonly name: "amounts";
                readonly internalType: "uint128[]";
                readonly type: "uint128[]";
            }];
        }, {
            readonly name: "swapAmount";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "addParams";
            readonly internalType: "struct IMaverickV2Pool.AddLiquidityParams";
            readonly type: "tuple";
            readonly components: readonly [{
                readonly name: "kind";
                readonly internalType: "uint8";
                readonly type: "uint8";
            }, {
                readonly name: "ticks";
                readonly internalType: "int32[]";
                readonly type: "int32[]";
            }, {
                readonly name: "amounts";
                readonly internalType: "uint128[]";
                readonly type: "uint128[]";
            }];
        }, {
            readonly name: "packedAddParams";
            readonly internalType: "bytes[]";
            readonly type: "bytes[]";
        }, {
            readonly name: "deltaAOut";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "deltaBOut";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "preAddReserveA";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "preAddReserveB";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "pool";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
    }, {
        readonly name: "binStart";
        readonly internalType: "uint32";
        readonly type: "uint32";
    }, {
        readonly name: "binEnd";
        readonly internalType: "uint32";
        readonly type: "uint32";
    }];
    readonly name: "getFullPoolState";
    readonly outputs: readonly [{
        readonly name: "poolState";
        readonly internalType: "struct IMaverickV2PoolLens.PoolState";
        readonly type: "tuple";
        readonly components: readonly [{
            readonly name: "tickStateMapping";
            readonly internalType: "struct IMaverickV2Pool.TickState[]";
            readonly type: "tuple[]";
            readonly components: readonly [{
                readonly name: "reserveA";
                readonly internalType: "uint128";
                readonly type: "uint128";
            }, {
                readonly name: "reserveB";
                readonly internalType: "uint128";
                readonly type: "uint128";
            }, {
                readonly name: "totalSupply";
                readonly internalType: "uint128";
                readonly type: "uint128";
            }, {
                readonly name: "binIdsByTick";
                readonly internalType: "uint32[4]";
                readonly type: "uint32[4]";
            }];
        }, {
            readonly name: "binStateMapping";
            readonly internalType: "struct IMaverickV2Pool.BinState[]";
            readonly type: "tuple[]";
            readonly components: readonly [{
                readonly name: "mergeBinBalance";
                readonly internalType: "uint128";
                readonly type: "uint128";
            }, {
                readonly name: "tickBalance";
                readonly internalType: "uint128";
                readonly type: "uint128";
            }, {
                readonly name: "totalSupply";
                readonly internalType: "uint128";
                readonly type: "uint128";
            }, {
                readonly name: "kind";
                readonly internalType: "uint8";
                readonly type: "uint8";
            }, {
                readonly name: "tick";
                readonly internalType: "int32";
                readonly type: "int32";
            }, {
                readonly name: "mergeId";
                readonly internalType: "uint32";
                readonly type: "uint32";
            }];
        }, {
            readonly name: "binIdByTickKindMapping";
            readonly internalType: "struct IMaverickV2PoolLens.BinPositionKinds[]";
            readonly type: "tuple[]";
            readonly components: readonly [{
                readonly name: "values";
                readonly internalType: "uint128[4]";
                readonly type: "uint128[4]";
            }];
        }, {
            readonly name: "state";
            readonly internalType: "struct IMaverickV2Pool.State";
            readonly type: "tuple";
            readonly components: readonly [{
                readonly name: "reserveA";
                readonly internalType: "uint128";
                readonly type: "uint128";
            }, {
                readonly name: "reserveB";
                readonly internalType: "uint128";
                readonly type: "uint128";
            }, {
                readonly name: "lastTwaD8";
                readonly internalType: "int64";
                readonly type: "int64";
            }, {
                readonly name: "lastLogPriceD8";
                readonly internalType: "int64";
                readonly type: "int64";
            }, {
                readonly name: "lastTimestamp";
                readonly internalType: "uint40";
                readonly type: "uint40";
            }, {
                readonly name: "activeTick";
                readonly internalType: "int32";
                readonly type: "int32";
            }, {
                readonly name: "isLocked";
                readonly internalType: "bool";
                readonly type: "bool";
            }, {
                readonly name: "binCounter";
                readonly internalType: "uint32";
                readonly type: "uint32";
            }, {
                readonly name: "protocolFeeRatioD3";
                readonly internalType: "uint8";
                readonly type: "uint8";
            }];
        }, {
            readonly name: "protocolFees";
            readonly internalType: "struct IMaverickV2PoolLens.Reserves";
            readonly type: "tuple";
            readonly components: readonly [{
                readonly name: "amountA";
                readonly internalType: "uint256";
                readonly type: "uint256";
            }, {
                readonly name: "amountB";
                readonly internalType: "uint256";
                readonly type: "uint256";
            }];
        }];
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "pool";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
    }];
    readonly name: "getPoolPrice";
    readonly outputs: readonly [{
        readonly name: "price";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "pool";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
    }];
    readonly name: "getPoolSqrtPrice";
    readonly outputs: readonly [{
        readonly name: "sqrtPrice";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "pool";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
    }, {
        readonly name: "tick";
        readonly internalType: "int32";
        readonly type: "int32";
    }];
    readonly name: "getTickSqrtPriceAndL";
    readonly outputs: readonly [{
        readonly name: "sqrtPrice";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "liquidity";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "pool";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
    }, {
        readonly name: "tickStart";
        readonly internalType: "int32";
        readonly type: "int32";
    }, {
        readonly name: "tickEnd";
        readonly internalType: "int32";
        readonly type: "int32";
    }];
    readonly name: "getTicks";
    readonly outputs: readonly [{
        readonly name: "ticks";
        readonly internalType: "int32[]";
        readonly type: "int32[]";
    }, {
        readonly name: "tickStates";
        readonly internalType: "struct IMaverickV2Pool.TickState[]";
        readonly type: "tuple[]";
        readonly components: readonly [{
            readonly name: "reserveA";
            readonly internalType: "uint128";
            readonly type: "uint128";
        }, {
            readonly name: "reserveB";
            readonly internalType: "uint128";
            readonly type: "uint128";
        }, {
            readonly name: "totalSupply";
            readonly internalType: "uint128";
            readonly type: "uint128";
        }, {
            readonly name: "binIdsByTick";
            readonly internalType: "uint32[4]";
            readonly type: "uint32[4]";
        }];
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "pool";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
    }, {
        readonly name: "tickRadius";
        readonly internalType: "int32";
        readonly type: "int32";
    }];
    readonly name: "getTicksAroundActive";
    readonly outputs: readonly [{
        readonly name: "ticks";
        readonly internalType: "int32[]";
        readonly type: "int32[]";
    }, {
        readonly name: "tickStates";
        readonly internalType: "struct IMaverickV2Pool.TickState[]";
        readonly type: "tuple[]";
        readonly components: readonly [{
            readonly name: "reserveA";
            readonly internalType: "uint128";
            readonly type: "uint128";
        }, {
            readonly name: "reserveB";
            readonly internalType: "uint128";
            readonly type: "uint128";
        }, {
            readonly name: "totalSupply";
            readonly internalType: "uint128";
            readonly type: "uint128";
        }, {
            readonly name: "binIdsByTick";
            readonly internalType: "uint32[4]";
            readonly type: "uint32[4]";
        }];
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "pool";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
    }, {
        readonly name: "tickRadius";
        readonly internalType: "int32";
        readonly type: "int32";
    }];
    readonly name: "getTicksAroundActiveWLiquidity";
    readonly outputs: readonly [{
        readonly name: "ticks";
        readonly internalType: "int32[]";
        readonly type: "int32[]";
    }, {
        readonly name: "tickStates";
        readonly internalType: "struct IMaverickV2Pool.TickState[]";
        readonly type: "tuple[]";
        readonly components: readonly [{
            readonly name: "reserveA";
            readonly internalType: "uint128";
            readonly type: "uint128";
        }, {
            readonly name: "reserveB";
            readonly internalType: "uint128";
            readonly type: "uint128";
        }, {
            readonly name: "totalSupply";
            readonly internalType: "uint128";
            readonly type: "uint128";
        }, {
            readonly name: "binIdsByTick";
            readonly internalType: "uint32[4]";
            readonly type: "uint32[4]";
        }];
    }, {
        readonly name: "liquidities";
        readonly internalType: "uint256[]";
        readonly type: "uint256[]";
    }, {
        readonly name: "sqrtLowerTickPrices";
        readonly internalType: "uint256[]";
        readonly type: "uint256[]";
    }, {
        readonly name: "sqrtUpperTickPrices";
        readonly internalType: "uint256[]";
        readonly type: "uint256[]";
    }, {
        readonly name: "poolState";
        readonly internalType: "struct IMaverickV2Pool.State";
        readonly type: "tuple";
        readonly components: readonly [{
            readonly name: "reserveA";
            readonly internalType: "uint128";
            readonly type: "uint128";
        }, {
            readonly name: "reserveB";
            readonly internalType: "uint128";
            readonly type: "uint128";
        }, {
            readonly name: "lastTwaD8";
            readonly internalType: "int64";
            readonly type: "int64";
        }, {
            readonly name: "lastLogPriceD8";
            readonly internalType: "int64";
            readonly type: "int64";
        }, {
            readonly name: "lastTimestamp";
            readonly internalType: "uint40";
            readonly type: "uint40";
        }, {
            readonly name: "activeTick";
            readonly internalType: "int32";
            readonly type: "int32";
        }, {
            readonly name: "isLocked";
            readonly internalType: "bool";
            readonly type: "bool";
        }, {
            readonly name: "binCounter";
            readonly internalType: "uint32";
            readonly type: "uint32";
        }, {
            readonly name: "protocolFeeRatioD3";
            readonly internalType: "uint8";
            readonly type: "uint8";
        }];
    }, {
        readonly name: "sqrtPrice";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "feeAIn";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "feeBIn";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "pool";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
    }];
    readonly name: "tokenScales";
    readonly outputs: readonly [{
        readonly name: "tokenAScale";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "tokenBScale";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}];
export declare const iMaverickV2PositionAbi: readonly [{
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
        readonly name: "index";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "pool";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
    }];
    readonly name: "PositionDuplicatePool";
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
    readonly name: "PositionNotFactoryPool";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "PositionPermissionedLiquidityPool";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "owner";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "approved";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: true;
    }];
    readonly name: "Approval";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "owner";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "operator";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "approved";
        readonly internalType: "bool";
        readonly type: "bool";
        readonly indexed: false;
    }];
    readonly name: "ApprovalForAll";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: true;
    }];
    readonly name: "PositionClearData";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: true;
    }, {
        readonly name: "index";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }, {
        readonly name: "newData";
        readonly internalType: "struct IMaverickV2Position.PositionPoolBinIds";
        readonly type: "tuple";
        readonly components: readonly [{
            readonly name: "pool";
            readonly internalType: "contract IMaverickV2Pool";
            readonly type: "address";
        }, {
            readonly name: "binIds";
            readonly internalType: "uint32[]";
            readonly type: "uint32[]";
        }];
        readonly indexed: false;
    }];
    readonly name: "PositionSetData";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "lpReward";
        readonly internalType: "contract ILiquidityRegistry";
        readonly type: "address";
        readonly indexed: false;
    }];
    readonly name: "SetLpReward";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "positionImage";
        readonly internalType: "contract IPositionImage";
        readonly type: "address";
        readonly indexed: false;
    }];
    readonly name: "SetPositionImage";
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
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: true;
    }];
    readonly name: "Transfer";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "pool";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
    }, {
        readonly name: "binIds";
        readonly internalType: "uint32[]";
        readonly type: "uint32[]";
    }];
    readonly name: "appendTokenIdData";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "to";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "approve";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "owner";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "balanceOf";
    readonly outputs: readonly [{
        readonly name: "balance";
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
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "checkAuthorized";
    readonly outputs: readonly [{
        readonly name: "owner";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
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
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "pool";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
    }, {
        readonly name: "binIds";
        readonly internalType: "uint32[]";
        readonly type: "uint32[]";
    }];
    readonly name: "checkpointBinLpBalance";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "factory";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "contract IMaverickV2Factory";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "getApproved";
    readonly outputs: readonly [{
        readonly name: "operator";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "index";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "proportionD18";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "getRemoveParams";
    readonly outputs: readonly [{
        readonly name: "params";
        readonly internalType: "struct IMaverickV2Pool.RemoveLiquidityParams";
        readonly type: "tuple";
        readonly components: readonly [{
            readonly name: "binIds";
            readonly internalType: "uint32[]";
            readonly type: "uint32[]";
        }, {
            readonly name: "amounts";
            readonly internalType: "uint128[]";
            readonly type: "uint128[]";
        }];
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "getTokenIdData";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "struct IMaverickV2Position.PositionPoolBinIds[]";
        readonly type: "tuple[]";
        readonly components: readonly [{
            readonly name: "pool";
            readonly internalType: "contract IMaverickV2Pool";
            readonly type: "address";
        }, {
            readonly name: "binIds";
            readonly internalType: "uint32[]";
            readonly type: "uint32[]";
        }];
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "index";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "getTokenIdData";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "struct IMaverickV2Position.PositionPoolBinIds";
        readonly type: "tuple";
        readonly components: readonly [{
            readonly name: "pool";
            readonly internalType: "contract IMaverickV2Pool";
            readonly type: "address";
        }, {
            readonly name: "binIds";
            readonly internalType: "uint32[]";
            readonly type: "uint32[]";
        }];
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "owner";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "operator";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "isApprovedForAll";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "bool";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "lpReward";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "contract ILiquidityRegistry";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "pool";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
    }, {
        readonly name: "binIds";
        readonly internalType: "uint32[]";
        readonly type: "uint32[]";
    }, {
        readonly name: "maxRecursion";
        readonly internalType: "uint32";
        readonly type: "uint32";
    }];
    readonly name: "migrateBinsUpStack";
    readonly outputs: readonly [];
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
        readonly name: "binIds";
        readonly internalType: "uint32[]";
        readonly type: "uint32[]";
    }];
    readonly name: "mint";
    readonly outputs: readonly [{
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
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
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "name";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "string";
        readonly type: "string";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "nextTokenId";
    readonly outputs: readonly [{
        readonly name: "nextTokenId_";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "ownerOf";
    readonly outputs: readonly [{
        readonly name: "owner";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "positionImage";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "contract IPositionImage";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "recipient";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "pool";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
    }, {
        readonly name: "params";
        readonly internalType: "struct IMaverickV2Pool.RemoveLiquidityParams";
        readonly type: "tuple";
        readonly components: readonly [{
            readonly name: "binIds";
            readonly internalType: "uint32[]";
            readonly type: "uint32[]";
        }, {
            readonly name: "amounts";
            readonly internalType: "uint128[]";
            readonly type: "uint128[]";
        }];
    }];
    readonly name: "removeLiquidity";
    readonly outputs: readonly [{
        readonly name: "tokenAAmount";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "tokenBAmount";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "pool";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
    }, {
        readonly name: "params";
        readonly internalType: "struct IMaverickV2Pool.RemoveLiquidityParams";
        readonly type: "tuple";
        readonly components: readonly [{
            readonly name: "binIds";
            readonly internalType: "uint32[]";
            readonly type: "uint32[]";
        }, {
            readonly name: "amounts";
            readonly internalType: "uint128[]";
            readonly type: "uint128[]";
        }];
    }];
    readonly name: "removeLiquidityToSender";
    readonly outputs: readonly [{
        readonly name: "tokenAAmount";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "tokenBAmount";
        readonly internalType: "uint256";
        readonly type: "uint256";
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
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "safeTransferFrom";
    readonly outputs: readonly [];
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
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "data";
        readonly internalType: "bytes";
        readonly type: "bytes";
    }];
    readonly name: "safeTransferFrom";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "operator";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "approved";
        readonly internalType: "bool";
        readonly type: "bool";
    }];
    readonly name: "setApprovalForAll";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "index";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "pool";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
    }, {
        readonly name: "binIds";
        readonly internalType: "uint32[]";
        readonly type: "uint32[]";
    }];
    readonly name: "setTokenIdData";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "data";
        readonly internalType: "struct IMaverickV2Position.PositionPoolBinIds[]";
        readonly type: "tuple[]";
        readonly components: readonly [{
            readonly name: "pool";
            readonly internalType: "contract IMaverickV2Pool";
            readonly type: "address";
        }, {
            readonly name: "binIds";
            readonly internalType: "uint32[]";
            readonly type: "uint32[]";
        }];
    }];
    readonly name: "setTokenIdData";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "interfaceId";
        readonly internalType: "bytes4";
        readonly type: "bytes4";
    }];
    readonly name: "supportsInterface";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "bool";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "symbol";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "string";
        readonly type: "string";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "index";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "tokenByIndex";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "tokenIdDataLength";
    readonly outputs: readonly [{
        readonly name: "length";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "startIndex";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "stopIndex";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "tokenIdPositionInformation";
    readonly outputs: readonly [{
        readonly name: "output";
        readonly internalType: "struct IMaverickV2Position.PositionFullInformation[]";
        readonly type: "tuple[]";
        readonly components: readonly [{
            readonly name: "poolBinIds";
            readonly internalType: "struct IMaverickV2Position.PositionPoolBinIds";
            readonly type: "tuple";
            readonly components: readonly [{
                readonly name: "pool";
                readonly internalType: "contract IMaverickV2Pool";
                readonly type: "address";
            }, {
                readonly name: "binIds";
                readonly internalType: "uint32[]";
                readonly type: "uint32[]";
            }];
        }, {
            readonly name: "amountA";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "amountB";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "binAAmounts";
            readonly internalType: "uint256[]";
            readonly type: "uint256[]";
        }, {
            readonly name: "binBAmounts";
            readonly internalType: "uint256[]";
            readonly type: "uint256[]";
        }, {
            readonly name: "ticks";
            readonly internalType: "int32[]";
            readonly type: "int32[]";
        }, {
            readonly name: "liquidities";
            readonly internalType: "uint256[]";
            readonly type: "uint256[]";
        }];
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "index";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "tokenIdPositionInformation";
    readonly outputs: readonly [{
        readonly name: "output";
        readonly internalType: "struct IMaverickV2Position.PositionFullInformation";
        readonly type: "tuple";
        readonly components: readonly [{
            readonly name: "poolBinIds";
            readonly internalType: "struct IMaverickV2Position.PositionPoolBinIds";
            readonly type: "tuple";
            readonly components: readonly [{
                readonly name: "pool";
                readonly internalType: "contract IMaverickV2Pool";
                readonly type: "address";
            }, {
                readonly name: "binIds";
                readonly internalType: "uint32[]";
                readonly type: "uint32[]";
            }];
        }, {
            readonly name: "amountA";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "amountB";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "binAAmounts";
            readonly internalType: "uint256[]";
            readonly type: "uint256[]";
        }, {
            readonly name: "binBAmounts";
            readonly internalType: "uint256[]";
            readonly type: "uint256[]";
        }, {
            readonly name: "ticks";
            readonly internalType: "int32[]";
            readonly type: "int32[]";
        }, {
            readonly name: "liquidities";
            readonly internalType: "uint256[]";
            readonly type: "uint256[]";
        }];
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "owner";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "tokenIdsOfOwner";
    readonly outputs: readonly [{
        readonly name: "tokenIds";
        readonly internalType: "uint256[]";
        readonly type: "uint256[]";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "owner";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "index";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "tokenOfOwnerByIndex";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "owner";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "index";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "tokenOfOwnerByIndexExists";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "bool";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "tokenURI";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "string";
        readonly type: "string";
    }];
    readonly stateMutability: "view";
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
        readonly name: "from";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "to";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "transferFrom";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}];
export declare const iMaverickV2QuoterAbi: readonly [{
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "QuoterInvalidAddLiquidity";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "QuoterInvalidSwap";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "pool";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
    }, {
        readonly name: "params";
        readonly internalType: "struct IMaverickV2Pool.AddLiquidityParams";
        readonly type: "tuple";
        readonly components: readonly [{
            readonly name: "kind";
            readonly internalType: "uint8";
            readonly type: "uint8";
        }, {
            readonly name: "ticks";
            readonly internalType: "int32[]";
            readonly type: "int32[]";
        }, {
            readonly name: "amounts";
            readonly internalType: "uint128[]";
            readonly type: "uint128[]";
        }];
    }];
    readonly name: "calculateAddLiquidity";
    readonly outputs: readonly [{
        readonly name: "amountA";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "amountB";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "gasEstimate";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "path";
        readonly internalType: "bytes";
        readonly type: "bytes";
    }, {
        readonly name: "amount";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "exactOutput";
        readonly internalType: "bool";
        readonly type: "bool";
    }];
    readonly name: "calculateMultiHopSwap";
    readonly outputs: readonly [{
        readonly name: "returnAmount";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "gasEstimate";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "pool";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
    }, {
        readonly name: "amount";
        readonly internalType: "uint128";
        readonly type: "uint128";
    }, {
        readonly name: "tokenAIn";
        readonly internalType: "bool";
        readonly type: "bool";
    }, {
        readonly name: "exactOutput";
        readonly internalType: "bool";
        readonly type: "bool";
    }, {
        readonly name: "tickLimit";
        readonly internalType: "int32";
        readonly type: "int32";
    }];
    readonly name: "calculateSwap";
    readonly outputs: readonly [{
        readonly name: "amountIn";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "amountOut";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "gasEstimate";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "pool";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
    }];
    readonly name: "poolSqrtPrice";
    readonly outputs: readonly [{
        readonly name: "sqrtPrice";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}];
export declare const iMaverickV2RouterAbi: readonly [{
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
        readonly name: "_factory";
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
        readonly name: "_weth";
        readonly internalType: "contract IWETH9";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "receive";
    readonly stateMutability: "payable";
}];
export declare const iMaverickV2SwapCallbackAbi: readonly [{
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "tokenIn";
        readonly internalType: "contract IERC20";
        readonly type: "address";
    }, {
        readonly name: "amountIn";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "amountOut";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "data";
        readonly internalType: "bytes";
        readonly type: "bytes";
    }];
    readonly name: "maverickV2SwapCallback";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}];
export declare const iMigrateBinsAbi: readonly [{
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "pool";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
    }, {
        readonly name: "binIds";
        readonly internalType: "uint32[]";
        readonly type: "uint32[]";
    }, {
        readonly name: "maxRecursion";
        readonly internalType: "uint32";
        readonly type: "uint32";
    }];
    readonly name: "migrateBinsUpStack";
    readonly outputs: readonly [];
    readonly stateMutability: "payable";
}];
export declare const iMulticallAbi: readonly [{
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
    readonly stateMutability: "nonpayable";
}];
export declare const iNftAbi: readonly [{
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "owner";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "approved";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: true;
    }];
    readonly name: "Approval";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "owner";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "operator";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "approved";
        readonly internalType: "bool";
        readonly type: "bool";
        readonly indexed: false;
    }];
    readonly name: "ApprovalForAll";
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
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: true;
    }];
    readonly name: "Transfer";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "to";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "approve";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "owner";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "balanceOf";
    readonly outputs: readonly [{
        readonly name: "balance";
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
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "checkAuthorized";
    readonly outputs: readonly [{
        readonly name: "owner";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "getApproved";
    readonly outputs: readonly [{
        readonly name: "operator";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "owner";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "operator";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "isApprovedForAll";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "bool";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "name";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "string";
        readonly type: "string";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "nextTokenId";
    readonly outputs: readonly [{
        readonly name: "nextTokenId_";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "ownerOf";
    readonly outputs: readonly [{
        readonly name: "owner";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
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
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "safeTransferFrom";
    readonly outputs: readonly [];
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
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "data";
        readonly internalType: "bytes";
        readonly type: "bytes";
    }];
    readonly name: "safeTransferFrom";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "operator";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "approved";
        readonly internalType: "bool";
        readonly type: "bool";
    }];
    readonly name: "setApprovalForAll";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "interfaceId";
        readonly internalType: "bytes4";
        readonly type: "bytes4";
    }];
    readonly name: "supportsInterface";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "bool";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "symbol";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "string";
        readonly type: "string";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "index";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "tokenByIndex";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "owner";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "tokenIdsOfOwner";
    readonly outputs: readonly [{
        readonly name: "tokenIds";
        readonly internalType: "uint256[]";
        readonly type: "uint256[]";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "owner";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "index";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "tokenOfOwnerByIndex";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "owner";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "index";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "tokenOfOwnerByIndexExists";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "bool";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "tokenURI";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "string";
        readonly type: "string";
    }];
    readonly stateMutability: "view";
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
        readonly name: "from";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "to";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "transferFrom";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}];
export declare const iNftImageAbi: readonly [{
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "ve";
        readonly internalType: "contract IVotingEscrowNft";
        readonly type: "address";
    }, {
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "tokenURI";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "string";
        readonly type: "string";
    }];
    readonly stateMutability: "view";
}];
export declare const iOrphanDistributorAbi: readonly [{
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "NothingToDistribute";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "OnlyVotingDistibutor";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "pool";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
        readonly indexed: false;
    }, {
        readonly name: "token";
        readonly internalType: "contract IERC20";
        readonly type: "address";
        readonly indexed: false;
    }, {
        readonly name: "epoch";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }, {
        readonly name: "amount";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }];
    readonly name: "Distribute";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "pool";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
        readonly indexed: false;
    }, {
        readonly name: "token";
        readonly internalType: "contract IERC20";
        readonly type: "address";
        readonly indexed: false;
    }, {
        readonly name: "amount";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }];
    readonly name: "NotifyAndTransfer";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "recipient";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: false;
    }, {
        readonly name: "pool";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
        readonly indexed: false;
    }, {
        readonly name: "token";
        readonly internalType: "contract IERC20";
        readonly type: "address";
        readonly indexed: false;
    }, {
        readonly name: "amount";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }];
    readonly name: "ProtocolDistribute";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "newAdmin";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: false;
    }];
    readonly name: "SetConfigurationAdmin";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "configurationAdmin";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "pool";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
    }, {
        readonly name: "token";
        readonly internalType: "contract IERC20";
        readonly type: "address";
    }];
    readonly name: "distribute";
    readonly outputs: readonly [{
        readonly name: "amount";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "factory";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "contract IMaverickV2Factory";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "pool";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
    }, {
        readonly name: "token";
        readonly internalType: "contract IERC20";
        readonly type: "address";
    }, {
        readonly name: "amount";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "notifyAndTransfer";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "pool";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
    }, {
        readonly name: "token";
        readonly internalType: "contract IERC20";
        readonly type: "address";
    }];
    readonly name: "orphanAmount";
    readonly outputs: readonly [{
        readonly name: "amount";
        readonly internalType: "uint256";
        readonly type: "uint256";
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
        readonly name: "token";
        readonly internalType: "contract IERC20";
        readonly type: "address";
    }];
    readonly name: "protocolDistribute";
    readonly outputs: readonly [{
        readonly name: "amount";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "votingDistributor";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "contract IVotingDistributor";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
}];
export declare const iPayableMulticallAbi: readonly [{
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
}];
export declare const iPaymentAbi: readonly [{
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
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "factory";
    readonly outputs: readonly [{
        readonly name: "_factory";
        readonly internalType: "contract IMaverickV2Factory";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
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
        readonly name: "_weth";
        readonly internalType: "contract IWETH9";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "receive";
    readonly stateMutability: "payable";
}];
export declare const iPoolDistributorAbi: readonly [{
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "user";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "pool";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
    }, {
        readonly name: "epoch";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "binId";
        readonly internalType: "uint32";
        readonly type: "uint32";
    }];
    readonly name: "AlreadClaimed";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "epoch";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "pool";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
    }];
    readonly name: "AlreadyDisbursed";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "BinIdsMustBeOrdered";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "NothingToClaim";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "OnlyVotingDistibutor";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "sender";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "owner";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "onlyPostionOwnerCanClaim";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "user";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: false;
    }, {
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }, {
        readonly name: "pool";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
        readonly indexed: false;
    }, {
        readonly name: "binIds";
        readonly internalType: "uint32[]";
        readonly type: "uint32[]";
        readonly indexed: false;
    }, {
        readonly name: "epoch";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }, {
        readonly name: "amount";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }];
    readonly name: "ClaimLp";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "pool";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
        readonly indexed: false;
    }, {
        readonly name: "epoch";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }, {
        readonly name: "amount";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }];
    readonly name: "NotifyAndTransfer";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "recipient";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "pool";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
    }, {
        readonly name: "binIds";
        readonly internalType: "uint32[]";
        readonly type: "uint32[]";
    }, {
        readonly name: "epoch";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "claimLp";
    readonly outputs: readonly [{
        readonly name: "amount";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "pool";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
    }, {
        readonly name: "binIds";
        readonly internalType: "uint32[]";
        readonly type: "uint32[]";
    }, {
        readonly name: "epoch";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "claimLpAmount";
    readonly outputs: readonly [{
        readonly name: "amount";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "epoch";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "pool";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
    }];
    readonly name: "claimed";
    readonly outputs: readonly [{
        readonly name: "amount";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "epoch";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "pool";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
    }];
    readonly name: "disbursement";
    readonly outputs: readonly [{
        readonly name: "amount";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
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
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "pool";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
    }, {
        readonly name: "epoch";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "amount";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "notifyAndTransfer";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "rewardToken";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "contract IERC20";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "votingDistributor";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "contract IVotingDistributor";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
}];
export declare const iPositionImageAbi: readonly [{
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "sender";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "deployer";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "currentPosition";
        readonly internalType: "contract IMaverickV2Position";
        readonly type: "address";
    }];
    readonly name: "PositionImageSetPositionError";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "tokenOwner";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "image";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "string";
        readonly type: "string";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "position";
    readonly outputs: readonly [{
        readonly name: "_position";
        readonly internalType: "contract IMaverickV2Position";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_position";
        readonly internalType: "contract IMaverickV2Position";
        readonly type: "address";
    }];
    readonly name: "setPosition";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}];
export declare const iPushOperationsAbi: readonly [{
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
}];
export declare const iRouterErrorsAbi: readonly [{
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
}];
export declare const iStateAbi: readonly [{
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "factory";
    readonly outputs: readonly [{
        readonly name: "_factory";
        readonly internalType: "contract IMaverickV2Factory";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "weth";
    readonly outputs: readonly [{
        readonly name: "_weth";
        readonly internalType: "contract IWETH9";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
}];
export declare const iVotesAbi: readonly [{
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "expiry";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "VotesExpiredSignature";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "delegator";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "fromDelegate";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "toDelegate";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }];
    readonly name: "DelegateChanged";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "delegate";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "previousVotes";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }, {
        readonly name: "newVotes";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }];
    readonly name: "DelegateVotesChanged";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "delegatee";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "delegate";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "delegatee";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "nonce";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "expiry";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "v";
        readonly internalType: "uint8";
        readonly type: "uint8";
    }, {
        readonly name: "r";
        readonly internalType: "bytes32";
        readonly type: "bytes32";
    }, {
        readonly name: "s";
        readonly internalType: "bytes32";
        readonly type: "bytes32";
    }];
    readonly name: "delegateBySig";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "account";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "delegates";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "timepoint";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "getPastTotalSupply";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "account";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "timepoint";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "getPastVotes";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "account";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "getVotes";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}];
export declare const iVotingDistributorAbi: readonly [{
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "timestamp";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "epochStart";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "epochEnd";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "EpochEnded";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "epoch";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "InvalidEpoch";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "lastPool";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
    }, {
        readonly name: "currentPool";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
    }];
    readonly name: "InvalidTargetOrder";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "pool";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
    }, {
        readonly name: "weight";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "totalWeight";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "voteMultiplier";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "vote";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "InvalidVote";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "pool";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
    }];
    readonly name: "NotFactoryPool";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "NothingToDistribute";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "pool";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
    }, {
        readonly name: "epoch";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "PoolAlreadyDistributed";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "voteForThisPool";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "RolloverNotAllowed";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "SenderHasAlreadyVoted";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "sender";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "epoch";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "SenderHasNoVotingPower";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "SenderNotFactoryPool";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "VoteMultiplierIsZero";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "timestamp";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "epochStart";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "epochEnd";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "VotePeriodNotActive";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "timestamp";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "epochStart";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "epochEnd";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "VotePeriodNotEnded";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "user";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "pool";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
    }, {
        readonly name: "epoch";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "VoterAlreadyCollected";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "ZeroAmount";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "epoch";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: true;
    }, {
        readonly name: "sender";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "amount";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }];
    readonly name: "AddDistributionBudget";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "epoch";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: true;
    }, {
        readonly name: "sender";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "pool";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
        readonly indexed: false;
    }, {
        readonly name: "amount";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }, {
        readonly name: "incentiveToken";
        readonly internalType: "contract IERC20";
        readonly type: "address";
        readonly indexed: false;
    }];
    readonly name: "AddVoteIncentive";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "epoch";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: true;
    }, {
        readonly name: "voter";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "pool";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
        readonly indexed: false;
    }, {
        readonly name: "amount";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }, {
        readonly name: "incentiveToken";
        readonly internalType: "contract IERC20";
        readonly type: "address";
        readonly indexed: false;
    }];
    readonly name: "CollectVoteIncentive";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "epoch";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: true;
    }, {
        readonly name: "sender";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "pool";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
        readonly indexed: false;
    }, {
        readonly name: "rewardTokenAmountDistributed";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }];
    readonly name: "Distribute";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "pool";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
        readonly indexed: false;
    }, {
        readonly name: "token";
        readonly internalType: "contract IERC20";
        readonly type: "address";
        readonly indexed: false;
    }, {
        readonly name: "amount";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }, {
        readonly name: "epoch";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }, {
        readonly name: "sentToOrphanDistributor";
        readonly internalType: "bool";
        readonly type: "bool";
        readonly indexed: false;
    }];
    readonly name: "MoveFeesFromPool";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "orphanDistributor";
        readonly internalType: "contract IOrphanDistributor";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "epoch";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: true;
    }, {
        readonly name: "poolToIncentivize";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "incentiveToken";
        readonly internalType: "contract IERC20";
        readonly type: "address";
        readonly indexed: false;
    }, {
        readonly name: "amount";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }];
    readonly name: "OrphanedIncentive";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "newAdmin";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: false;
    }];
    readonly name: "SetConfigurationAdmin";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "_newCollector";
        readonly internalType: "contract IOrphanDistributor";
        readonly type: "address";
        readonly indexed: false;
    }];
    readonly name: "SetOrphanDistributor";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "poolDistributor";
        readonly internalType: "contract IPoolDistributor";
        readonly type: "address";
        readonly indexed: false;
    }];
    readonly name: "SetPoolDistributor";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "pool";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
        readonly indexed: false;
    }, {
        readonly name: "multiplierD18";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }];
    readonly name: "SetPoolVoteMultiplier";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "epoch";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: true;
    }, {
        readonly name: "voter";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "pool";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
        readonly indexed: false;
    }, {
        readonly name: "vote";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }];
    readonly name: "Vote";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "EPOCH_PERIOD";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "amount";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "epoch";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "addDistributionBudget";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "amount";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "addDistributionBudgetCurrentEpoch";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "poolToIncentivize";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
    }, {
        readonly name: "incentiveToken";
        readonly internalType: "contract IERC20";
        readonly type: "address";
    }, {
        readonly name: "amount";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "epoch";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "addVoteIncentive";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "poolToIncentivize";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
    }, {
        readonly name: "incentiveToken";
        readonly internalType: "contract IERC20";
        readonly type: "address";
    }, {
        readonly name: "amount";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "addVoteIncentiveToCurrentEpoch";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "pool";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
    }, {
        readonly name: "incentiveToken";
        readonly internalType: "contract IERC20";
        readonly type: "address";
    }, {
        readonly name: "epoch";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "collectVoteIncentive";
    readonly outputs: readonly [{
        readonly name: "amount";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "user";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "pool";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
    }, {
        readonly name: "incentiveToken";
        readonly internalType: "contract IERC20";
        readonly type: "address";
    }, {
        readonly name: "epoch";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "collectVoteIncentiveAmount";
    readonly outputs: readonly [{
        readonly name: "amount";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "configurationAdmin";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "currentEpoch";
    readonly outputs: readonly [{
        readonly name: "epoch";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "pool";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
    }, {
        readonly name: "epoch";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "distribute";
    readonly outputs: readonly [{
        readonly name: "amountDistributed";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "pool";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
    }, {
        readonly name: "epoch";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "distributeAmount";
    readonly outputs: readonly [{
        readonly name: "amountDistributed";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "epoch";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "epochEnd";
    readonly outputs: readonly [{
        readonly name: "end";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "pure";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "epoch";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "epochIsOver";
    readonly outputs: readonly [{
        readonly name: "isOver";
        readonly internalType: "bool";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "factory";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "contract IMaverickV2Factory";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "epoch";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "getBudget";
    readonly outputs: readonly [{
        readonly name: "budget";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "epoch";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "bounds";
        readonly internalType: "struct IVotingDistributor.IndexBounds";
        readonly type: "tuple";
        readonly components: readonly [{
            readonly name: "startIndex";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "endIndex";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "incentiveStartIndex";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "incentiveEndIndex";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
    }];
    readonly name: "getCheckpointData";
    readonly outputs: readonly [{
        readonly name: "budget";
        readonly internalType: "uint128";
        readonly type: "uint128";
    }, {
        readonly name: "totalVote";
        readonly internalType: "uint128";
        readonly type: "uint128";
    }, {
        readonly name: "pools";
        readonly internalType: "struct IVotingDistributor.PoolView[]";
        readonly type: "tuple[]";
        readonly components: readonly [{
            readonly name: "pool";
            readonly internalType: "contract IMaverickV2Pool";
            readonly type: "address";
        }, {
            readonly name: "votes";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "hasDistributed";
            readonly internalType: "bool";
            readonly type: "bool";
        }, {
            readonly name: "incentiveTokens";
            readonly internalType: "contract IERC20[]";
            readonly type: "address[]";
        }, {
            readonly name: "voteIncentives";
            readonly internalType: "uint256[]";
            readonly type: "uint256[]";
        }, {
            readonly name: "incentiveTokenCount";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
    }, {
        readonly name: "totalCount";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "pool";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
    }, {
        readonly name: "epoch";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "startIndex";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "endIndex";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "getIncentiveData";
    readonly outputs: readonly [{
        readonly name: "incentiveTokens";
        readonly internalType: "contract IERC20[]";
        readonly type: "address[]";
    }, {
        readonly name: "voteIncentives";
        readonly internalType: "uint256[]";
        readonly type: "uint256[]";
    }, {
        readonly name: "totalCount";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "pool";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
    }, {
        readonly name: "epoch";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "getPoolData";
    readonly outputs: readonly [{
        readonly name: "voteForThisPool";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "totalVoteForEpoch";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "hasDistributed";
        readonly internalType: "bool";
        readonly type: "bool";
    }, {
        readonly name: "epochBudget";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "disbursementAmount";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "epoch";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "getTotalVote";
    readonly outputs: readonly [{
        readonly name: "totalVote";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "user";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "epoch";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "bounds";
        readonly internalType: "struct IVotingDistributor.IndexBounds";
        readonly type: "tuple";
        readonly components: readonly [{
            readonly name: "startIndex";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "endIndex";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "incentiveStartIndex";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "incentiveEndIndex";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
    }];
    readonly name: "getVoterClaimData";
    readonly outputs: readonly [{
        readonly name: "claimData";
        readonly internalType: "struct IVotingDistributor.ClaimData[]";
        readonly type: "tuple[]";
        readonly components: readonly [{
            readonly name: "pool";
            readonly internalType: "contract IMaverickV2Pool";
            readonly type: "address";
        }, {
            readonly name: "incentiveTokenCount";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "incentiveTokens";
            readonly internalType: "contract IERC20[]";
            readonly type: "address[]";
        }, {
            readonly name: "incentiveAmounts";
            readonly internalType: "uint256[]";
            readonly type: "uint256[]";
        }, {
            readonly name: "hasCollected";
            readonly internalType: "bool[]";
            readonly type: "bool[]";
        }];
    }, {
        readonly name: "totalCount";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "user";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "epoch";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "getVoterData";
    readonly outputs: readonly [{
        readonly name: "voterData";
        readonly internalType: "struct IVotingDistributor.VoterData";
        readonly type: "tuple";
        readonly components: readonly [{
            readonly name: "hasVoted";
            readonly internalType: "bool";
            readonly type: "bool";
        }, {
            readonly name: "votes";
            readonly internalType: "uint128[]";
            readonly type: "uint128[]";
        }, {
            readonly name: "pools";
            readonly internalType: "contract IMaverickV2Pool[]";
            readonly type: "address[]";
        }];
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "user";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "epoch";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "hasVoted";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "bool";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "epoch";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "isEpoch";
    readonly outputs: readonly [{
        readonly name: "_isEpoch";
        readonly internalType: "bool";
        readonly type: "bool";
    }];
    readonly stateMutability: "pure";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "lastEpoch";
    readonly outputs: readonly [{
        readonly name: "epoch";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "pool";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
    }];
    readonly name: "moveFeesFromPoolToVotingDistributor";
    readonly outputs: readonly [{
        readonly name: "amountA";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "amountB";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
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
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "nextEpoch";
    readonly outputs: readonly [{
        readonly name: "epoch";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "orphanDistributor";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "contract IOrphanDistributor";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "rewardToken";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "contract IERC20";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "poolToIncentivize";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
    }, {
        readonly name: "incentiveToken";
        readonly internalType: "contract IERC20";
        readonly type: "address";
    }, {
        readonly name: "epoch";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "rollUnvotedIncentive";
    readonly outputs: readonly [{
        readonly name: "amount";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "veToken";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "contract IERC5805";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "voteTargets";
        readonly internalType: "contract IMaverickV2Pool[]";
        readonly type: "address[]";
    }, {
        readonly name: "weights";
        readonly internalType: "uint256[]";
        readonly type: "uint256[]";
    }];
    readonly name: "vote";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "epoch";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "votingIsActive";
    readonly outputs: readonly [{
        readonly name: "isActive";
        readonly internalType: "bool";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
}];
export declare const iVotingEscrowAbi: readonly [{
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "expiry";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "VotesExpiredSignature";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "VotingEscrowDelegationNotSupported";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "VotingEscrowInvalidAddress";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "VotingEscrowInvalidAmount";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "duration";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "minDuration";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "maxDuration";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "VotingEscrowInvalidDuration";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "newEnd";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "oldEnd";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "VotingEscrowInvalidEndTime";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "VotingEscrowOnlyCallerAllowed";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "proportion";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "VotingEscrowProportionMustBeLessThanOne";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "VotingEscrowStakeAlreadyRedeemed";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "currentTime";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "endTime";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "VotingEscrowStakeStillLocked";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "VotingEscrowTransferNotSupported";
}, {
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
        readonly name: "delegator";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "fromDelegate";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "toDelegate";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }];
    readonly name: "DelegateChanged";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "delegate";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "previousVotes";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }, {
        readonly name: "newVotes";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }];
    readonly name: "DelegateVotesChanged";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "user";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }, {
        readonly name: "";
        readonly internalType: "struct IVotingEscrowBase.Lockup";
        readonly type: "tuple";
        readonly components: readonly [{
            readonly name: "amount";
            readonly internalType: "uint128";
            readonly type: "uint128";
        }, {
            readonly name: "end";
            readonly internalType: "uint128";
            readonly type: "uint128";
        }, {
            readonly name: "votes";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly indexed: false;
    }];
    readonly name: "Stake";
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
        readonly name: "user";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }, {
        readonly name: "";
        readonly internalType: "struct IVotingEscrowBase.Lockup";
        readonly type: "tuple";
        readonly components: readonly [{
            readonly name: "amount";
            readonly internalType: "uint128";
            readonly type: "uint128";
        }, {
            readonly name: "end";
            readonly internalType: "uint128";
            readonly type: "uint128";
        }, {
            readonly name: "votes";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly indexed: false;
    }];
    readonly name: "Unstake";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "CLOCK_MODE";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "string";
        readonly type: "string";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "MAX_STAKE_DURATION";
    readonly outputs: readonly [{
        readonly name: "duration";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "pure";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "MIN_STAKE_DURATION";
    readonly outputs: readonly [{
        readonly name: "duration";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "pure";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "YEAR_BASE";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "pure";
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
    readonly name: "clock";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint48";
        readonly type: "uint48";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "decimals";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint8";
        readonly type: "uint8";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "delegatee";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "delegate";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "delegatee";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "nonce";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "expiry";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "v";
        readonly internalType: "uint8";
        readonly type: "uint8";
    }, {
        readonly name: "r";
        readonly internalType: "bytes32";
        readonly type: "bytes32";
    }, {
        readonly name: "s";
        readonly internalType: "bytes32";
        readonly type: "bytes32";
    }];
    readonly name: "delegateBySig";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "account";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "delegatee";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "delegateFrom";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "account";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "delegates";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "account";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "duration";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "amount";
        readonly internalType: "uint128";
        readonly type: "uint128";
    }];
    readonly name: "extend";
    readonly outputs: readonly [{
        readonly name: "newLockup";
        readonly internalType: "struct IVotingEscrowBase.Lockup";
        readonly type: "tuple";
        readonly components: readonly [{
            readonly name: "amount";
            readonly internalType: "uint128";
            readonly type: "uint128";
        }, {
            readonly name: "end";
            readonly internalType: "uint128";
            readonly type: "uint128";
        }, {
            readonly name: "votes";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "staker";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "index";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "getLockup";
    readonly outputs: readonly [{
        readonly name: "lockup";
        readonly internalType: "struct IVotingEscrowBase.Lockup";
        readonly type: "tuple";
        readonly components: readonly [{
            readonly name: "amount";
            readonly internalType: "uint128";
            readonly type: "uint128";
        }, {
            readonly name: "end";
            readonly internalType: "uint128";
            readonly type: "uint128";
        }, {
            readonly name: "votes";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "timepoint";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "getPastTotalSupply";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "account";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "timepoint";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "getPastVotes";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "account";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "getVotes";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "account";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "tokenIds";
        readonly internalType: "uint256[]";
        readonly type: "uint256[]";
    }];
    readonly name: "merge";
    readonly outputs: readonly [{
        readonly name: "newLockup";
        readonly internalType: "struct IVotingEscrowBase.Lockup";
        readonly type: "tuple";
        readonly components: readonly [{
            readonly name: "amount";
            readonly internalType: "uint128";
            readonly type: "uint128";
        }, {
            readonly name: "end";
            readonly internalType: "uint128";
            readonly type: "uint128";
        }, {
            readonly name: "votes";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "name";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "string";
        readonly type: "string";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "amount";
        readonly internalType: "uint128";
        readonly type: "uint128";
    }, {
        readonly name: "duration";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "previewVotes";
    readonly outputs: readonly [{
        readonly name: "lockup";
        readonly internalType: "struct IVotingEscrowBase.Lockup";
        readonly type: "tuple";
        readonly components: readonly [{
            readonly name: "amount";
            readonly internalType: "uint128";
            readonly type: "uint128";
        }, {
            readonly name: "end";
            readonly internalType: "uint128";
            readonly type: "uint128";
        }, {
            readonly name: "votes";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "account";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "tokenIdToSplit";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "newTokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "splitProportionD18";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "splitLockup";
    readonly outputs: readonly [{
        readonly name: "lockup1";
        readonly internalType: "struct IVotingEscrowBase.Lockup";
        readonly type: "tuple";
        readonly components: readonly [{
            readonly name: "amount";
            readonly internalType: "uint128";
            readonly type: "uint128";
        }, {
            readonly name: "end";
            readonly internalType: "uint128";
            readonly type: "uint128";
        }, {
            readonly name: "votes";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
    }, {
        readonly name: "lockup2";
        readonly internalType: "struct IVotingEscrowBase.Lockup";
        readonly type: "tuple";
        readonly components: readonly [{
            readonly name: "amount";
            readonly internalType: "uint128";
            readonly type: "uint128";
        }, {
            readonly name: "end";
            readonly internalType: "uint128";
            readonly type: "uint128";
        }, {
            readonly name: "votes";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "to";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "duration";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "amount";
        readonly internalType: "uint128";
        readonly type: "uint128";
    }];
    readonly name: "stake";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "struct IVotingEscrowBase.Lockup";
        readonly type: "tuple";
        readonly components: readonly [{
            readonly name: "amount";
            readonly internalType: "uint128";
            readonly type: "uint128";
        }, {
            readonly name: "end";
            readonly internalType: "uint128";
            readonly type: "uint128";
        }, {
            readonly name: "votes";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "startTimestamp";
    readonly outputs: readonly [{
        readonly name: "timestamp";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "symbol";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "string";
        readonly type: "string";
    }];
    readonly stateMutability: "view";
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
        readonly name: "from";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "to";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "transferLockup";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "account";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "unstake";
    readonly outputs: readonly [{
        readonly name: "lockup";
        readonly internalType: "struct IVotingEscrowBase.Lockup";
        readonly type: "tuple";
        readonly components: readonly [{
            readonly name: "amount";
            readonly internalType: "uint128";
            readonly type: "uint128";
        }, {
            readonly name: "end";
            readonly internalType: "uint128";
            readonly type: "uint128";
        }, {
            readonly name: "votes";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
    }];
    readonly stateMutability: "nonpayable";
}];
export declare const iVotingEscrowBaseAbi: readonly [{
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "VotingEscrowDelegationNotSupported";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "VotingEscrowInvalidAddress";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "VotingEscrowInvalidAmount";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "duration";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "minDuration";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "maxDuration";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "VotingEscrowInvalidDuration";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "newEnd";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "oldEnd";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "VotingEscrowInvalidEndTime";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "VotingEscrowOnlyCallerAllowed";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "proportion";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "VotingEscrowProportionMustBeLessThanOne";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "VotingEscrowStakeAlreadyRedeemed";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "currentTime";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "endTime";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "VotingEscrowStakeStillLocked";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "VotingEscrowTransferNotSupported";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "user";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }, {
        readonly name: "";
        readonly internalType: "struct IVotingEscrowBase.Lockup";
        readonly type: "tuple";
        readonly components: readonly [{
            readonly name: "amount";
            readonly internalType: "uint128";
            readonly type: "uint128";
        }, {
            readonly name: "end";
            readonly internalType: "uint128";
            readonly type: "uint128";
        }, {
            readonly name: "votes";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly indexed: false;
    }];
    readonly name: "Stake";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "user";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }, {
        readonly name: "";
        readonly internalType: "struct IVotingEscrowBase.Lockup";
        readonly type: "tuple";
        readonly components: readonly [{
            readonly name: "amount";
            readonly internalType: "uint128";
            readonly type: "uint128";
        }, {
            readonly name: "end";
            readonly internalType: "uint128";
            readonly type: "uint128";
        }, {
            readonly name: "votes";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly indexed: false;
    }];
    readonly name: "Unstake";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "MAX_STAKE_DURATION";
    readonly outputs: readonly [{
        readonly name: "duration";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "pure";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "MIN_STAKE_DURATION";
    readonly outputs: readonly [{
        readonly name: "duration";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "pure";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "YEAR_BASE";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "pure";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "account";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "delegatee";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "delegateFrom";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "account";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "duration";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "amount";
        readonly internalType: "uint128";
        readonly type: "uint128";
    }];
    readonly name: "extend";
    readonly outputs: readonly [{
        readonly name: "newLockup";
        readonly internalType: "struct IVotingEscrowBase.Lockup";
        readonly type: "tuple";
        readonly components: readonly [{
            readonly name: "amount";
            readonly internalType: "uint128";
            readonly type: "uint128";
        }, {
            readonly name: "end";
            readonly internalType: "uint128";
            readonly type: "uint128";
        }, {
            readonly name: "votes";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "staker";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "index";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "getLockup";
    readonly outputs: readonly [{
        readonly name: "lockup";
        readonly internalType: "struct IVotingEscrowBase.Lockup";
        readonly type: "tuple";
        readonly components: readonly [{
            readonly name: "amount";
            readonly internalType: "uint128";
            readonly type: "uint128";
        }, {
            readonly name: "end";
            readonly internalType: "uint128";
            readonly type: "uint128";
        }, {
            readonly name: "votes";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "account";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "tokenIds";
        readonly internalType: "uint256[]";
        readonly type: "uint256[]";
    }];
    readonly name: "merge";
    readonly outputs: readonly [{
        readonly name: "newLockup";
        readonly internalType: "struct IVotingEscrowBase.Lockup";
        readonly type: "tuple";
        readonly components: readonly [{
            readonly name: "amount";
            readonly internalType: "uint128";
            readonly type: "uint128";
        }, {
            readonly name: "end";
            readonly internalType: "uint128";
            readonly type: "uint128";
        }, {
            readonly name: "votes";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "amount";
        readonly internalType: "uint128";
        readonly type: "uint128";
    }, {
        readonly name: "duration";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "previewVotes";
    readonly outputs: readonly [{
        readonly name: "lockup";
        readonly internalType: "struct IVotingEscrowBase.Lockup";
        readonly type: "tuple";
        readonly components: readonly [{
            readonly name: "amount";
            readonly internalType: "uint128";
            readonly type: "uint128";
        }, {
            readonly name: "end";
            readonly internalType: "uint128";
            readonly type: "uint128";
        }, {
            readonly name: "votes";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "account";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "tokenIdToSplit";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "newTokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "splitProportionD18";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "splitLockup";
    readonly outputs: readonly [{
        readonly name: "lockup1";
        readonly internalType: "struct IVotingEscrowBase.Lockup";
        readonly type: "tuple";
        readonly components: readonly [{
            readonly name: "amount";
            readonly internalType: "uint128";
            readonly type: "uint128";
        }, {
            readonly name: "end";
            readonly internalType: "uint128";
            readonly type: "uint128";
        }, {
            readonly name: "votes";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
    }, {
        readonly name: "lockup2";
        readonly internalType: "struct IVotingEscrowBase.Lockup";
        readonly type: "tuple";
        readonly components: readonly [{
            readonly name: "amount";
            readonly internalType: "uint128";
            readonly type: "uint128";
        }, {
            readonly name: "end";
            readonly internalType: "uint128";
            readonly type: "uint128";
        }, {
            readonly name: "votes";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "to";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "duration";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "amount";
        readonly internalType: "uint128";
        readonly type: "uint128";
    }];
    readonly name: "stake";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "struct IVotingEscrowBase.Lockup";
        readonly type: "tuple";
        readonly components: readonly [{
            readonly name: "amount";
            readonly internalType: "uint128";
            readonly type: "uint128";
        }, {
            readonly name: "end";
            readonly internalType: "uint128";
            readonly type: "uint128";
        }, {
            readonly name: "votes";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "startTimestamp";
    readonly outputs: readonly [{
        readonly name: "timestamp";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
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
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "transferLockup";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "account";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "unstake";
    readonly outputs: readonly [{
        readonly name: "lockup";
        readonly internalType: "struct IVotingEscrowBase.Lockup";
        readonly type: "tuple";
        readonly components: readonly [{
            readonly name: "amount";
            readonly internalType: "uint128";
            readonly type: "uint128";
        }, {
            readonly name: "end";
            readonly internalType: "uint128";
            readonly type: "uint128";
        }, {
            readonly name: "votes";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
    }];
    readonly stateMutability: "nonpayable";
}];
export declare const iVotingEscrowNftAbi: readonly [{
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "AlreadyInitialized";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "PermalockNotenabled";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "tokenId1";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "tokenId2";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "TokenIdsHaveDifferentOwners";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "expiry";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "VotesExpiredSignature";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "owner";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "approved";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: true;
    }];
    readonly name: "Approval";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "owner";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "operator";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "approved";
        readonly internalType: "bool";
        readonly type: "bool";
        readonly indexed: false;
    }];
    readonly name: "ApprovalForAll";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "delegator";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "fromDelegate";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "toDelegate";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }];
    readonly name: "DelegateChanged";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "delegate";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "previousVotes";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }, {
        readonly name: "newVotes";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }];
    readonly name: "DelegateVotesChanged";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "nftImage";
        readonly internalType: "contract INftImage";
        readonly type: "address";
        readonly indexed: false;
    }];
    readonly name: "SetImage";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }, {
        readonly name: "state";
        readonly internalType: "bool";
        readonly type: "bool";
        readonly indexed: false;
    }];
    readonly name: "TogglePermalockAllowed";
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
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: true;
    }];
    readonly name: "Transfer";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "CLOCK_MODE";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "string";
        readonly type: "string";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "to";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "approve";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "owner";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "balanceOf";
    readonly outputs: readonly [{
        readonly name: "balance";
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
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "checkAuthorized";
    readonly outputs: readonly [{
        readonly name: "owner";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "clock";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint48";
        readonly type: "uint48";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "delegatee";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "delegate";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "delegatee";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "nonce";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "expiry";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "v";
        readonly internalType: "uint8";
        readonly type: "uint8";
    }, {
        readonly name: "r";
        readonly internalType: "bytes32";
        readonly type: "bytes32";
    }, {
        readonly name: "s";
        readonly internalType: "bytes32";
        readonly type: "bytes32";
    }];
    readonly name: "delegateBySig";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "account";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "delegates";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "disablePermalock";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "enablePermalock";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "duration";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "amount";
        readonly internalType: "uint128";
        readonly type: "uint128";
    }];
    readonly name: "extend";
    readonly outputs: readonly [{
        readonly name: "newLockup";
        readonly internalType: "struct IVotingEscrowBase.Lockup";
        readonly type: "tuple";
        readonly components: readonly [{
            readonly name: "amount";
            readonly internalType: "uint128";
            readonly type: "uint128";
        }, {
            readonly name: "end";
            readonly internalType: "uint128";
            readonly type: "uint128";
        }, {
            readonly name: "votes";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "extendPermalock";
    readonly outputs: readonly [{
        readonly name: "newLockup";
        readonly internalType: "struct IVotingEscrowBase.Lockup";
        readonly type: "tuple";
        readonly components: readonly [{
            readonly name: "amount";
            readonly internalType: "uint128";
            readonly type: "uint128";
        }, {
            readonly name: "end";
            readonly internalType: "uint128";
            readonly type: "uint128";
        }, {
            readonly name: "votes";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "getApproved";
    readonly outputs: readonly [{
        readonly name: "operator";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "timepoint";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "getPastTotalSupply";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "account";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "timepoint";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "getPastVotes";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "getTokenIdInfo";
    readonly outputs: readonly [{
        readonly name: "lockup";
        readonly internalType: "struct IVotingEscrowBase.Lockup";
        readonly type: "tuple";
        readonly components: readonly [{
            readonly name: "amount";
            readonly internalType: "uint128";
            readonly type: "uint128";
        }, {
            readonly name: "end";
            readonly internalType: "uint128";
            readonly type: "uint128";
        }, {
            readonly name: "votes";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "account";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "getVotes";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "owner";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "operator";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "isApprovedForAll";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "bool";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "tokenIds";
        readonly internalType: "uint256[]";
        readonly type: "uint256[]";
    }];
    readonly name: "merge";
    readonly outputs: readonly [{
        readonly name: "newLockup";
        readonly internalType: "struct IVotingEscrowBase.Lockup";
        readonly type: "tuple";
        readonly components: readonly [{
            readonly name: "amount";
            readonly internalType: "uint128";
            readonly type: "uint128";
        }, {
            readonly name: "end";
            readonly internalType: "uint128";
            readonly type: "uint128";
        }, {
            readonly name: "votes";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "name";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "string";
        readonly type: "string";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "nextTokenId";
    readonly outputs: readonly [{
        readonly name: "nextTokenId_";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "ownerOf";
    readonly outputs: readonly [{
        readonly name: "owner";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "parameters";
    readonly outputs: readonly [{
        readonly name: "yearBase";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "startTimestamp";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "minStakeDuration";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "maxStakeDuration";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "amount";
        readonly internalType: "uint128";
        readonly type: "uint128";
    }, {
        readonly name: "duration";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "previewVotes";
    readonly outputs: readonly [{
        readonly name: "lockup";
        readonly internalType: "struct IVotingEscrowBase.Lockup";
        readonly type: "tuple";
        readonly components: readonly [{
            readonly name: "amount";
            readonly internalType: "uint128";
            readonly type: "uint128";
        }, {
            readonly name: "end";
            readonly internalType: "uint128";
            readonly type: "uint128";
        }, {
            readonly name: "votes";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
    }];
    readonly stateMutability: "view";
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
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "safeTransferFrom";
    readonly outputs: readonly [];
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
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "data";
        readonly internalType: "bytes";
        readonly type: "bytes";
    }];
    readonly name: "safeTransferFrom";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "operator";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "approved";
        readonly internalType: "bool";
        readonly type: "bool";
    }];
    readonly name: "setApprovalForAll";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "splitProportionD18";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "split";
    readonly outputs: readonly [{
        readonly name: "newTokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "lockup1";
        readonly internalType: "struct IVotingEscrowBase.Lockup";
        readonly type: "tuple";
        readonly components: readonly [{
            readonly name: "amount";
            readonly internalType: "uint128";
            readonly type: "uint128";
        }, {
            readonly name: "end";
            readonly internalType: "uint128";
            readonly type: "uint128";
        }, {
            readonly name: "votes";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
    }, {
        readonly name: "lockup2";
        readonly internalType: "struct IVotingEscrowBase.Lockup";
        readonly type: "tuple";
        readonly components: readonly [{
            readonly name: "amount";
            readonly internalType: "uint128";
            readonly type: "uint128";
        }, {
            readonly name: "end";
            readonly internalType: "uint128";
            readonly type: "uint128";
        }, {
            readonly name: "votes";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "to";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "duration";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "amount";
        readonly internalType: "uint128";
        readonly type: "uint128";
    }];
    readonly name: "stake";
    readonly outputs: readonly [{
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "lockup";
        readonly internalType: "struct IVotingEscrowBase.Lockup";
        readonly type: "tuple";
        readonly components: readonly [{
            readonly name: "amount";
            readonly internalType: "uint128";
            readonly type: "uint128";
        }, {
            readonly name: "end";
            readonly internalType: "uint128";
            readonly type: "uint128";
        }, {
            readonly name: "votes";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "duration";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "amount";
        readonly internalType: "uint128";
        readonly type: "uint128";
    }];
    readonly name: "stakeToSender";
    readonly outputs: readonly [{
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "lockup";
        readonly internalType: "struct IVotingEscrowBase.Lockup";
        readonly type: "tuple";
        readonly components: readonly [{
            readonly name: "amount";
            readonly internalType: "uint128";
            readonly type: "uint128";
        }, {
            readonly name: "end";
            readonly internalType: "uint128";
            readonly type: "uint128";
        }, {
            readonly name: "votes";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "interfaceId";
        readonly internalType: "bytes4";
        readonly type: "bytes4";
    }];
    readonly name: "supportsInterface";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "bool";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "symbol";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "string";
        readonly type: "string";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "index";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "tokenByIndex";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "owner";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "tokenIdsOfOwner";
    readonly outputs: readonly [{
        readonly name: "tokenIds";
        readonly internalType: "uint256[]";
        readonly type: "uint256[]";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "owner";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "index";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "tokenOfOwnerByIndex";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "owner";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "index";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "tokenOfOwnerByIndexExists";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "bool";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "tokenURI";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "string";
        readonly type: "string";
    }];
    readonly stateMutability: "view";
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
        readonly name: "from";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "to";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "transferFrom";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "baseTokenRecipient";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "unstake";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "unstakeToSender";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}];
export declare const iweth9Abi: readonly [{
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
}];
export declare const linkAbi: readonly [{
    readonly type: "constructor";
    readonly inputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "spender";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "allowance";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "needed";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "ERC20InsufficientAllowance";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "sender";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "balance";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "needed";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "ERC20InsufficientBalance";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "approver";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "ERC20InvalidApprover";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "receiver";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "ERC20InvalidReceiver";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "sender";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "ERC20InvalidSender";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "spender";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "ERC20InvalidSpender";
}, {
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
    readonly name: "decimals";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint8";
        readonly type: "uint8";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "account";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "value";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "mint";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "name";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "string";
        readonly type: "string";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "symbol";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "string";
        readonly type: "string";
    }];
    readonly stateMutability: "view";
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
}];
export declare const liquidityUtilitiesAbi: readonly [{
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "LiquidityUtilitiesFailedToFindDeltaAmounts";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "initialTargetB";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "deltaLpBalance";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "minimumRequiredLpBalance";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "LiquidityUtilitiesInitialTargetBTooSmall";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "LiquidityUtilitiesNoSwapLiquidity";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "targetSqrtPrice";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "sqrtLowerTickPrice";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "sqrtUpperTickPrice";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "LiquidityUtilitiesTargetPriceOutOfBounds";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "targetIsA";
        readonly internalType: "bool";
        readonly type: "bool";
    }, {
        readonly name: "deltaA";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "deltaB";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "LiquidityUtilitiesTargetingTokenWithNoDelta";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "relativeLiquidityAmount";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "deltaA";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "deltaB";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "LiquidityUtilitiesTooLittleLiquidity";
}];
export declare const lpRewardAbi: readonly [{
    readonly type: "constructor";
    readonly inputs: readonly [{
        readonly name: "_authorizedNotifier";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "CheckpointUnorderedInsertion";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "timepoint";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "clock";
        readonly internalType: "uint48";
        readonly type: "uint48";
    }];
    readonly name: "ERC5805FutureLookup";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "timestamp";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "epochStart";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "epochEnd";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "EpochEnded";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "epoch";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "InvalidEpoch";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "inputEpoch";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "currentEpoch";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "NoDataForFutureEpoch";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "NotAuthorizedNotifier";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "PoolNotInitialized";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "bits";
        readonly internalType: "uint8";
        readonly type: "uint8";
    }, {
        readonly name: "value";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "SafeCastOverflowedUintDowncast";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "timestamp";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "epochStart";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "epochEnd";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "VotePeriodNotActive";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "timestamp";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "epochStart";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "epochEnd";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "VotePeriodNotEnded";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "pool";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
        readonly indexed: false;
    }, {
        readonly name: "isTokenA";
        readonly internalType: "bool";
        readonly type: "bool";
        readonly indexed: false;
    }, {
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }, {
        readonly name: "binId";
        readonly internalType: "uint32";
        readonly type: "uint32";
        readonly indexed: false;
    }, {
        readonly name: "timestamp";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }, {
        readonly name: "userRewards";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }, {
        readonly name: "userRewardPerTokenStored";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }];
    readonly name: "CheckpointTokenId";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "pool";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
        readonly indexed: false;
    }, {
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }, {
        readonly name: "binId";
        readonly internalType: "uint32";
        readonly type: "uint32";
        readonly indexed: false;
    }, {
        readonly name: "timestamp";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }, {
        readonly name: "balanceOf";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }, {
        readonly name: "totalSupply";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }];
    readonly name: "NotifyBinLiquidity";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "pool";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
        readonly indexed: false;
    }, {
        readonly name: "isTokenA";
        readonly internalType: "bool";
        readonly type: "bool";
        readonly indexed: false;
    }, {
        readonly name: "binId";
        readonly internalType: "uint32";
        readonly type: "uint32";
        readonly indexed: false;
    }, {
        readonly name: "timestamp";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }, {
        readonly name: "amount";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }, {
        readonly name: "rewardPerFeeStored";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }, {
        readonly name: "feeTrackerByBin";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }, {
        readonly name: "feeTracker";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }];
    readonly name: "RegisterFee";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "EPOCH_PERIOD";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "authorizedNotifier";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "pool";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
    }, {
        readonly name: "binId";
        readonly internalType: "uint32";
        readonly type: "uint32";
    }];
    readonly name: "binTotalSupply";
    readonly outputs: readonly [{
        readonly name: "totalSupply";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "pool";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
    }, {
        readonly name: "isTokenA";
        readonly internalType: "bool";
        readonly type: "bool";
    }, {
        readonly name: "binId";
        readonly internalType: "uint32";
        readonly type: "uint32";
    }, {
        readonly name: "epoch";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "binTrackerForEpoch";
    readonly outputs: readonly [{
        readonly name: "binFeeTracker";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "clock";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint48";
        readonly type: "uint48";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "currentEpoch";
    readonly outputs: readonly [{
        readonly name: "epoch";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "offset";
        readonly internalType: "int256";
        readonly type: "int256";
    }];
    readonly name: "epochAtOffset";
    readonly outputs: readonly [{
        readonly name: "epoch";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "epoch";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "epochEnd";
    readonly outputs: readonly [{
        readonly name: "end";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "pure";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "epoch";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "epochIsOver";
    readonly outputs: readonly [{
        readonly name: "isOver";
        readonly internalType: "bool";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "pool";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
    }, {
        readonly name: "isTokenA";
        readonly internalType: "bool";
        readonly type: "bool";
    }, {
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "binId";
        readonly internalType: "uint32";
        readonly type: "uint32";
    }, {
        readonly name: "epoch";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "feeProrataForEpoch";
    readonly outputs: readonly [{
        readonly name: "prorata";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "pool";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
    }, {
        readonly name: "isTokenA";
        readonly internalType: "bool";
        readonly type: "bool";
    }];
    readonly name: "feeTracker";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "pool";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
    }, {
        readonly name: "isTokenA";
        readonly internalType: "bool";
        readonly type: "bool";
    }, {
        readonly name: "binId";
        readonly internalType: "uint32";
        readonly type: "uint32";
    }];
    readonly name: "feeTrackerByBin";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "pool";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
    }, {
        readonly name: "isTokenA";
        readonly internalType: "bool";
        readonly type: "bool";
    }, {
        readonly name: "epoch";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "globalTrackerForEpoch";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "epoch";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "isEpoch";
    readonly outputs: readonly [{
        readonly name: "_isEpoch";
        readonly internalType: "bool";
        readonly type: "bool";
    }];
    readonly stateMutability: "pure";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "lastEpoch";
    readonly outputs: readonly [{
        readonly name: "epoch";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "nextEpoch";
    readonly outputs: readonly [{
        readonly name: "epoch";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "pool";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
    }, {
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "binId";
        readonly internalType: "uint32";
        readonly type: "uint32";
    }, {
        readonly name: "currentBinLpBalance";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "notifyBinLiquidity";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "pool";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
    }, {
        readonly name: "binId";
        readonly internalType: "uint32";
        readonly type: "uint32";
    }, {
        readonly name: "timestamp";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "pastBinTotalSupply";
    readonly outputs: readonly [{
        readonly name: "totalSupply";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "pool";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
    }, {
        readonly name: "isTokenA";
        readonly internalType: "bool";
        readonly type: "bool";
    }, {
        readonly name: "timestamp";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "pastFeeTracker";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "pool";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
    }, {
        readonly name: "isTokenA";
        readonly internalType: "bool";
        readonly type: "bool";
    }, {
        readonly name: "binId";
        readonly internalType: "uint32";
        readonly type: "uint32";
    }, {
        readonly name: "timestamp";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "pastFeeTrackerByBin";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "pool";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
    }, {
        readonly name: "isTokenA";
        readonly internalType: "bool";
        readonly type: "bool";
    }, {
        readonly name: "binId";
        readonly internalType: "uint32";
        readonly type: "uint32";
    }, {
        readonly name: "timestamp";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "pastRewardPerFeeStored";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "pool";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
    }, {
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "binId";
        readonly internalType: "uint32";
        readonly type: "uint32";
    }, {
        readonly name: "timestamp";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "pastUserBalance";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "pool";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
    }, {
        readonly name: "isTokenA";
        readonly internalType: "bool";
        readonly type: "bool";
    }, {
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "binId";
        readonly internalType: "uint32";
        readonly type: "uint32";
    }, {
        readonly name: "timestamp";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "pastUserReward";
    readonly outputs: readonly [{
        readonly name: "userEpochReward";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "pool";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
    }, {
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "isTokenA";
        readonly internalType: "bool";
        readonly type: "bool";
    }, {
        readonly name: "binId";
        readonly internalType: "uint32";
        readonly type: "uint32";
    }, {
        readonly name: "timestamp";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "pastUserRewardPerTokenStored";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "pool";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
    }, {
        readonly name: "isTokenA";
        readonly internalType: "bool";
        readonly type: "bool";
    }, {
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "binId";
        readonly internalType: "uint32";
        readonly type: "uint32";
    }, {
        readonly name: "timestamp";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "pastUserRewardRaw";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
    }];
    readonly name: "poolData";
    readonly outputs: readonly [{
        readonly name: "pool";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "isTokenA";
        readonly internalType: "bool";
        readonly type: "bool";
    }, {
        readonly name: "binId";
        readonly internalType: "uint32";
        readonly type: "uint32";
    }, {
        readonly name: "amount";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "registerFee";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "pool";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
    }, {
        readonly name: "isTokenA";
        readonly internalType: "bool";
        readonly type: "bool";
    }, {
        readonly name: "binId";
        readonly internalType: "uint32";
        readonly type: "uint32";
    }];
    readonly name: "rewardPerFeeStored";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "pool";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
    }, {
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "binId";
        readonly internalType: "uint32";
        readonly type: "uint32";
    }];
    readonly name: "userBalance";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "pool";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
    }, {
        readonly name: "isTokenA";
        readonly internalType: "bool";
        readonly type: "bool";
    }, {
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "binId";
        readonly internalType: "uint32";
        readonly type: "uint32";
    }];
    readonly name: "userReward";
    readonly outputs: readonly [{
        readonly name: "userEpochReward";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "pool";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
    }, {
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "isTokenA";
        readonly internalType: "bool";
        readonly type: "bool";
    }, {
        readonly name: "binId";
        readonly internalType: "uint32";
        readonly type: "uint32";
    }];
    readonly name: "userRewardPerTokenStored";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "pool";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
    }, {
        readonly name: "isTokenA";
        readonly internalType: "bool";
        readonly type: "bool";
    }, {
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "binId";
        readonly internalType: "uint32";
        readonly type: "uint32";
    }];
    readonly name: "userRewardRaw";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "pool";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
    }, {
        readonly name: "isTokenA";
        readonly internalType: "bool";
        readonly type: "bool";
    }, {
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "binId";
        readonly internalType: "uint32";
        readonly type: "uint32";
    }, {
        readonly name: "epoch";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "userTrackerForEpoch";
    readonly outputs: readonly [{
        readonly name: "userEpochReward";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "pool";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
    }, {
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "binIds";
        readonly internalType: "uint32[]";
        readonly type: "uint32[]";
    }, {
        readonly name: "epoch";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "userTrackerForTokenIdForEpoch";
    readonly outputs: readonly [{
        readonly name: "tokenAAmount";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "tokenBAmount";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "tokenAAmounts";
        readonly internalType: "uint256[]";
        readonly type: "uint256[]";
    }, {
        readonly name: "tokenBAmounts";
        readonly internalType: "uint256[]";
        readonly type: "uint256[]";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "epoch";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "votingIsActive";
    readonly outputs: readonly [{
        readonly name: "isActive";
        readonly internalType: "bool";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
}];
export declare const mathAbi: readonly [{
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "MathOverflowedMulDiv";
}];
export declare const maverickV2FactoryAbi: readonly [{
    readonly type: "constructor";
    readonly inputs: readonly [{
        readonly name: "_initialOwner";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "FactorAlreadyInitialized";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "FactorNotInitialized";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "FactoryAccessorMustBeNonZero";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "FactoryInvalidFee";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "kinds";
        readonly internalType: "uint8";
        readonly type: "uint8";
    }];
    readonly name: "FactoryInvalidKinds";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "lookback";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "FactoryInvalidLookback";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "tickSpacing";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "FactoryInvalidTickSpacing";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "decimalsA";
        readonly internalType: "uint8";
        readonly type: "uint8";
    }, {
        readonly name: "decimalsB";
        readonly internalType: "uint8";
        readonly type: "uint8";
    }];
    readonly name: "FactoryInvalidTokenDecimals";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "_tokenA";
        readonly internalType: "contract IERC20";
        readonly type: "address";
    }, {
        readonly name: "_tokenB";
        readonly internalType: "contract IERC20";
        readonly type: "address";
    }];
    readonly name: "FactoryInvalidTokenOrder";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "feeAIn";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "feeBIn";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "tickSpacing";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "lookback";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "tokenA";
        readonly internalType: "contract IERC20";
        readonly type: "address";
    }, {
        readonly name: "tokenB";
        readonly internalType: "contract IERC20";
        readonly type: "address";
    }, {
        readonly name: "kinds";
        readonly internalType: "uint8";
        readonly type: "uint8";
    }, {
        readonly name: "accessor";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "FactoryPoolAlreadyExists";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "NotImplemented";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "owner";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "OwnableInvalidOwner";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "account";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "OwnableUnauthorizedAccount";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "bits";
        readonly internalType: "uint8";
        readonly type: "uint8";
    }, {
        readonly name: "value";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "SafeCastOverflowedUintDowncast";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "previousOwner";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "newOwner";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }];
    readonly name: "OwnershipTransferred";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "poolAddress";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
        readonly indexed: false;
    }, {
        readonly name: "protocolFeeRatio";
        readonly internalType: "uint8";
        readonly type: "uint8";
        readonly indexed: false;
    }, {
        readonly name: "feeAIn";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }, {
        readonly name: "feeBIn";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }, {
        readonly name: "tickSpacing";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }, {
        readonly name: "lookback";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }, {
        readonly name: "activeTick";
        readonly internalType: "int32";
        readonly type: "int32";
        readonly indexed: false;
    }, {
        readonly name: "tokenA";
        readonly internalType: "contract IERC20";
        readonly type: "address";
        readonly indexed: false;
    }, {
        readonly name: "tokenB";
        readonly internalType: "contract IERC20";
        readonly type: "address";
        readonly indexed: false;
    }, {
        readonly name: "kinds";
        readonly internalType: "uint8";
        readonly type: "uint8";
        readonly indexed: false;
    }, {
        readonly name: "accessor";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: false;
    }];
    readonly name: "PoolCreated";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "receiver";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: false;
    }];
    readonly name: "SetFactoryProtocolFeeReceiver";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "registry";
        readonly internalType: "contract IFeeRegistry";
        readonly type: "address";
        readonly indexed: false;
    }];
    readonly name: "SetFactoryProtocolFeeRegistry";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "fee";
        readonly internalType: "uint64";
        readonly type: "uint64";
    }, {
        readonly name: "tickSpacing";
        readonly internalType: "uint16";
        readonly type: "uint16";
    }, {
        readonly name: "lookback";
        readonly internalType: "uint32";
        readonly type: "uint32";
    }, {
        readonly name: "tokenA";
        readonly internalType: "contract IERC20";
        readonly type: "address";
    }, {
        readonly name: "tokenB";
        readonly internalType: "contract IERC20";
        readonly type: "address";
    }, {
        readonly name: "activeTick";
        readonly internalType: "int32";
        readonly type: "int32";
    }, {
        readonly name: "kinds";
        readonly internalType: "uint8";
        readonly type: "uint8";
    }];
    readonly name: "create";
    readonly outputs: readonly [{
        readonly name: "pool";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "feeAIn";
        readonly internalType: "uint64";
        readonly type: "uint64";
    }, {
        readonly name: "feeBIn";
        readonly internalType: "uint64";
        readonly type: "uint64";
    }, {
        readonly name: "tickSpacing";
        readonly internalType: "uint16";
        readonly type: "uint16";
    }, {
        readonly name: "lookback";
        readonly internalType: "uint32";
        readonly type: "uint32";
    }, {
        readonly name: "tokenA";
        readonly internalType: "contract IERC20";
        readonly type: "address";
    }, {
        readonly name: "tokenB";
        readonly internalType: "contract IERC20";
        readonly type: "address";
    }, {
        readonly name: "activeTick";
        readonly internalType: "int32";
        readonly type: "int32";
    }, {
        readonly name: "kinds";
        readonly internalType: "uint8";
        readonly type: "uint8";
    }];
    readonly name: "create";
    readonly outputs: readonly [{
        readonly name: "pool";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "deployParameters";
    readonly outputs: readonly [{
        readonly name: "feeAIn";
        readonly internalType: "uint64";
        readonly type: "uint64";
    }, {
        readonly name: "feeBIn";
        readonly internalType: "uint64";
        readonly type: "uint64";
    }, {
        readonly name: "lookback";
        readonly internalType: "uint32";
        readonly type: "uint32";
    }, {
        readonly name: "activeTick";
        readonly internalType: "int32";
        readonly type: "int32";
    }, {
        readonly name: "tokenAScale";
        readonly internalType: "uint64";
        readonly type: "uint64";
    }, {
        readonly name: "tokenBScale";
        readonly internalType: "uint64";
        readonly type: "uint64";
    }, {
        readonly name: "tokenA";
        readonly internalType: "contract IERC20";
        readonly type: "address";
    }, {
        readonly name: "tokenB";
        readonly internalType: "contract IERC20";
        readonly type: "address";
    }, {
        readonly name: "tickSpacing";
        readonly internalType: "uint16";
        readonly type: "uint16";
    }, {
        readonly name: "options";
        readonly internalType: "uint8";
        readonly type: "uint8";
    }, {
        readonly name: "accessor";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
    }];
    readonly name: "isFactoryPool";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "bool";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "startIndex";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "endIndex";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "lookup";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "contract IMaverickV2Pool[]";
        readonly type: "address[]";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_feeAIn";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "_feeBIn";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "_tickSpacing";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "_lookback";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "_tokenA";
        readonly internalType: "contract IERC20";
        readonly type: "address";
    }, {
        readonly name: "_tokenB";
        readonly internalType: "contract IERC20";
        readonly type: "address";
    }, {
        readonly name: "_kinds";
        readonly internalType: "uint8";
        readonly type: "uint8";
    }];
    readonly name: "lookup";
    readonly outputs: readonly [{
        readonly name: "pool";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_tokenA";
        readonly internalType: "contract IERC20";
        readonly type: "address";
    }, {
        readonly name: "_tokenB";
        readonly internalType: "contract IERC20";
        readonly type: "address";
    }, {
        readonly name: "startIndex";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "endIndex";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "lookup";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "contract IMaverickV2Pool[]";
        readonly type: "address[]";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "owner";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_tokenA";
        readonly internalType: "contract IERC20";
        readonly type: "address";
    }, {
        readonly name: "_tokenB";
        readonly internalType: "contract IERC20";
        readonly type: "address";
    }, {
        readonly name: "accessor";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "poolByTokenCount";
    readonly outputs: readonly [{
        readonly name: "_poolCount";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "poolCount";
    readonly outputs: readonly [{
        readonly name: "_poolCount";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "protocolFeeReceiver";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "protocolFeeRegistry";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "contract IFeeRegistry";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "renounceOwnership";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "receiver";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "setProtocolFeeReceiver";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "registry";
        readonly internalType: "contract IFeeRegistry";
        readonly type: "address";
    }];
    readonly name: "setProtocolFeeRegistry";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "newOwner";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "transferOwnership";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}];
export declare const maverickV2LiquidityManagerAbi: readonly [{
    readonly type: "constructor";
    readonly inputs: readonly [{
        readonly name: "_factory";
        readonly internalType: "contract IMaverickV2Factory";
        readonly type: "address";
    }, {
        readonly name: "_weth";
        readonly internalType: "contract IWETH9";
        readonly type: "address";
    }, {
        readonly name: "_position";
        readonly internalType: "contract IMaverickV2Position";
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
    readonly inputs: readonly [];
    readonly name: "BytesLibSliceOutOfBounds";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "BytesLibSliceOverflow";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "FailedInnerCall";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "LiquidityManagerNotFactoryPool";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "LiquidityManagerNotTokenIdOwner";
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
        readonly name: "bits";
        readonly internalType: "uint8";
        readonly type: "uint8";
    }, {
        readonly name: "value";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "SafeCastOverflowedUintDowncast";
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
        readonly name: "pool";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
    }, {
        readonly name: "recipient";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "subaccount";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "packedSqrtPriceBreaks";
        readonly internalType: "bytes";
        readonly type: "bytes";
    }, {
        readonly name: "packedArgs";
        readonly internalType: "bytes[]";
        readonly type: "bytes[]";
    }];
    readonly name: "addLiquidity";
    readonly outputs: readonly [{
        readonly name: "tokenAAmount";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "tokenBAmount";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "binIds";
        readonly internalType: "uint32[]";
        readonly type: "uint32[]";
    }];
    readonly stateMutability: "payable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "pool";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
    }, {
        readonly name: "recipient";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "index";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "packedSqrtPriceBreaks";
        readonly internalType: "bytes";
        readonly type: "bytes";
    }, {
        readonly name: "packedArgs";
        readonly internalType: "bytes[]";
        readonly type: "bytes[]";
    }];
    readonly name: "addPositionLiquidityToRecipientByTokenIndex";
    readonly outputs: readonly [{
        readonly name: "tokenAAmount";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "tokenBAmount";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "binIds";
        readonly internalType: "uint32[]";
        readonly type: "uint32[]";
    }];
    readonly stateMutability: "payable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "pool";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
    }, {
        readonly name: "index";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "packedSqrtPriceBreaks";
        readonly internalType: "bytes";
        readonly type: "bytes";
    }, {
        readonly name: "packedArgs";
        readonly internalType: "bytes[]";
        readonly type: "bytes[]";
    }];
    readonly name: "addPositionLiquidityToSenderByTokenIndex";
    readonly outputs: readonly [{
        readonly name: "tokenAAmount";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "tokenBAmount";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "binIds";
        readonly internalType: "uint32[]";
        readonly type: "uint32[]";
    }];
    readonly stateMutability: "payable";
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
        readonly name: "fee";
        readonly internalType: "uint64";
        readonly type: "uint64";
    }, {
        readonly name: "tickSpacing";
        readonly internalType: "uint16";
        readonly type: "uint16";
    }, {
        readonly name: "lookback";
        readonly internalType: "uint32";
        readonly type: "uint32";
    }, {
        readonly name: "tokenA";
        readonly internalType: "contract IERC20";
        readonly type: "address";
    }, {
        readonly name: "tokenB";
        readonly internalType: "contract IERC20";
        readonly type: "address";
    }, {
        readonly name: "activeTick";
        readonly internalType: "int32";
        readonly type: "int32";
    }, {
        readonly name: "kinds";
        readonly internalType: "uint8";
        readonly type: "uint8";
    }];
    readonly name: "createPool";
    readonly outputs: readonly [{
        readonly name: "pool";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
    }];
    readonly stateMutability: "payable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "feeAIn";
        readonly internalType: "uint64";
        readonly type: "uint64";
    }, {
        readonly name: "feeBIn";
        readonly internalType: "uint64";
        readonly type: "uint64";
    }, {
        readonly name: "tickSpacing";
        readonly internalType: "uint16";
        readonly type: "uint16";
    }, {
        readonly name: "lookback";
        readonly internalType: "uint32";
        readonly type: "uint32";
    }, {
        readonly name: "tokenA";
        readonly internalType: "contract IERC20";
        readonly type: "address";
    }, {
        readonly name: "tokenB";
        readonly internalType: "contract IERC20";
        readonly type: "address";
    }, {
        readonly name: "activeTick";
        readonly internalType: "int32";
        readonly type: "int32";
    }, {
        readonly name: "kinds";
        readonly internalType: "uint8";
        readonly type: "uint8";
    }];
    readonly name: "createPool";
    readonly outputs: readonly [{
        readonly name: "pool";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
    }];
    readonly stateMutability: "payable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "recipient";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "params";
        readonly internalType: "struct IMaverickV2PoolLens.CreateAndAddParamsInputs";
        readonly type: "tuple";
        readonly components: readonly [{
            readonly name: "feeAIn";
            readonly internalType: "uint64";
            readonly type: "uint64";
        }, {
            readonly name: "feeBIn";
            readonly internalType: "uint64";
            readonly type: "uint64";
        }, {
            readonly name: "tickSpacing";
            readonly internalType: "uint16";
            readonly type: "uint16";
        }, {
            readonly name: "lookback";
            readonly internalType: "uint32";
            readonly type: "uint32";
        }, {
            readonly name: "tokenA";
            readonly internalType: "contract IERC20";
            readonly type: "address";
        }, {
            readonly name: "tokenB";
            readonly internalType: "contract IERC20";
            readonly type: "address";
        }, {
            readonly name: "activeTick";
            readonly internalType: "int32";
            readonly type: "int32";
        }, {
            readonly name: "kinds";
            readonly internalType: "uint8";
            readonly type: "uint8";
        }, {
            readonly name: "donateParams";
            readonly internalType: "struct IMaverickV2Pool.AddLiquidityParams";
            readonly type: "tuple";
            readonly components: readonly [{
                readonly name: "kind";
                readonly internalType: "uint8";
                readonly type: "uint8";
            }, {
                readonly name: "ticks";
                readonly internalType: "int32[]";
                readonly type: "int32[]";
            }, {
                readonly name: "amounts";
                readonly internalType: "uint128[]";
                readonly type: "uint128[]";
            }];
        }, {
            readonly name: "swapAmount";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "addParams";
            readonly internalType: "struct IMaverickV2Pool.AddLiquidityParams";
            readonly type: "tuple";
            readonly components: readonly [{
                readonly name: "kind";
                readonly internalType: "uint8";
                readonly type: "uint8";
            }, {
                readonly name: "ticks";
                readonly internalType: "int32[]";
                readonly type: "int32[]";
            }, {
                readonly name: "amounts";
                readonly internalType: "uint128[]";
                readonly type: "uint128[]";
            }];
        }, {
            readonly name: "packedAddParams";
            readonly internalType: "bytes[]";
            readonly type: "bytes[]";
        }, {
            readonly name: "deltaAOut";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "deltaBOut";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "preAddReserveA";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "preAddReserveB";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
    }];
    readonly name: "createPoolAtPriceAndAddLiquidity";
    readonly outputs: readonly [{
        readonly name: "pool";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
    }, {
        readonly name: "tokenAAmount";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "tokenBAmount";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "binIds";
        readonly internalType: "uint32[]";
        readonly type: "uint32[]";
    }, {
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "payable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "params";
        readonly internalType: "struct IMaverickV2PoolLens.CreateAndAddParamsInputs";
        readonly type: "tuple";
        readonly components: readonly [{
            readonly name: "feeAIn";
            readonly internalType: "uint64";
            readonly type: "uint64";
        }, {
            readonly name: "feeBIn";
            readonly internalType: "uint64";
            readonly type: "uint64";
        }, {
            readonly name: "tickSpacing";
            readonly internalType: "uint16";
            readonly type: "uint16";
        }, {
            readonly name: "lookback";
            readonly internalType: "uint32";
            readonly type: "uint32";
        }, {
            readonly name: "tokenA";
            readonly internalType: "contract IERC20";
            readonly type: "address";
        }, {
            readonly name: "tokenB";
            readonly internalType: "contract IERC20";
            readonly type: "address";
        }, {
            readonly name: "activeTick";
            readonly internalType: "int32";
            readonly type: "int32";
        }, {
            readonly name: "kinds";
            readonly internalType: "uint8";
            readonly type: "uint8";
        }, {
            readonly name: "donateParams";
            readonly internalType: "struct IMaverickV2Pool.AddLiquidityParams";
            readonly type: "tuple";
            readonly components: readonly [{
                readonly name: "kind";
                readonly internalType: "uint8";
                readonly type: "uint8";
            }, {
                readonly name: "ticks";
                readonly internalType: "int32[]";
                readonly type: "int32[]";
            }, {
                readonly name: "amounts";
                readonly internalType: "uint128[]";
                readonly type: "uint128[]";
            }];
        }, {
            readonly name: "swapAmount";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "addParams";
            readonly internalType: "struct IMaverickV2Pool.AddLiquidityParams";
            readonly type: "tuple";
            readonly components: readonly [{
                readonly name: "kind";
                readonly internalType: "uint8";
                readonly type: "uint8";
            }, {
                readonly name: "ticks";
                readonly internalType: "int32[]";
                readonly type: "int32[]";
            }, {
                readonly name: "amounts";
                readonly internalType: "uint128[]";
                readonly type: "uint128[]";
            }];
        }, {
            readonly name: "packedAddParams";
            readonly internalType: "bytes[]";
            readonly type: "bytes[]";
        }, {
            readonly name: "deltaAOut";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "deltaBOut";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "preAddReserveA";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "preAddReserveB";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
    }];
    readonly name: "createPoolAtPriceAndAddLiquidityToSender";
    readonly outputs: readonly [{
        readonly name: "pool";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
    }, {
        readonly name: "tokenAAmount";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "tokenBAmount";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "binIds";
        readonly internalType: "uint32[]";
        readonly type: "uint32[]";
    }, {
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "payable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "pool";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
    }, {
        readonly name: "args";
        readonly internalType: "struct IMaverickV2Pool.AddLiquidityParams";
        readonly type: "tuple";
        readonly components: readonly [{
            readonly name: "kind";
            readonly internalType: "uint8";
            readonly type: "uint8";
        }, {
            readonly name: "ticks";
            readonly internalType: "int32[]";
            readonly type: "int32[]";
        }, {
            readonly name: "amounts";
            readonly internalType: "uint128[]";
            readonly type: "uint128[]";
        }];
    }];
    readonly name: "donateLiquidity";
    readonly outputs: readonly [];
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
        readonly name: "tokenA";
        readonly internalType: "contract IERC20";
        readonly type: "address";
    }, {
        readonly name: "tokenB";
        readonly internalType: "contract IERC20";
        readonly type: "address";
    }, {
        readonly name: "amountA";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "amountB";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "data";
        readonly internalType: "bytes";
        readonly type: "bytes";
    }];
    readonly name: "maverickV2AddLiquidityCallback";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
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
        readonly name: "data";
        readonly internalType: "bytes";
        readonly type: "bytes";
    }];
    readonly name: "maverickV2SwapCallback";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "pool";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
    }, {
        readonly name: "binIds";
        readonly internalType: "uint32[]";
        readonly type: "uint32[]";
    }, {
        readonly name: "maxRecursion";
        readonly internalType: "uint32";
        readonly type: "uint32";
    }];
    readonly name: "migrateBinsUpStack";
    readonly outputs: readonly [];
    readonly stateMutability: "payable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "pool";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
    }, {
        readonly name: "recipient";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "packedSqrtPriceBreaks";
        readonly internalType: "bytes";
        readonly type: "bytes";
    }, {
        readonly name: "packedArgs";
        readonly internalType: "bytes[]";
        readonly type: "bytes[]";
    }];
    readonly name: "mintPositionNft";
    readonly outputs: readonly [{
        readonly name: "tokenAAmount";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "tokenBAmount";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "binIds";
        readonly internalType: "uint32[]";
        readonly type: "uint32[]";
    }, {
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "payable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "pool";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
    }, {
        readonly name: "packedSqrtPriceBreaks";
        readonly internalType: "bytes";
        readonly type: "bytes";
    }, {
        readonly name: "packedArgs";
        readonly internalType: "bytes[]";
        readonly type: "bytes[]";
    }];
    readonly name: "mintPositionNftToSender";
    readonly outputs: readonly [{
        readonly name: "tokenAAmount";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "tokenBAmount";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "binIds";
        readonly internalType: "uint32[]";
        readonly type: "uint32[]";
    }, {
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "payable";
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
        readonly name: "args";
        readonly internalType: "struct IMaverickV2Pool.AddLiquidityParams";
        readonly type: "tuple";
        readonly components: readonly [{
            readonly name: "kind";
            readonly internalType: "uint8";
            readonly type: "uint8";
        }, {
            readonly name: "ticks";
            readonly internalType: "int32[]";
            readonly type: "int32[]";
        }, {
            readonly name: "amounts";
            readonly internalType: "uint128[]";
            readonly type: "uint128[]";
        }];
    }];
    readonly name: "packAddLiquidityArgs";
    readonly outputs: readonly [{
        readonly name: "argsPacked";
        readonly internalType: "bytes";
        readonly type: "bytes";
    }];
    readonly stateMutability: "pure";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "args";
        readonly internalType: "struct IMaverickV2Pool.AddLiquidityParams[]";
        readonly type: "tuple[]";
        readonly components: readonly [{
            readonly name: "kind";
            readonly internalType: "uint8";
            readonly type: "uint8";
        }, {
            readonly name: "ticks";
            readonly internalType: "int32[]";
            readonly type: "int32[]";
        }, {
            readonly name: "amounts";
            readonly internalType: "uint128[]";
            readonly type: "uint128[]";
        }];
    }];
    readonly name: "packAddLiquidityArgsArray";
    readonly outputs: readonly [{
        readonly name: "argsPacked";
        readonly internalType: "bytes[]";
        readonly type: "bytes[]";
    }];
    readonly stateMutability: "pure";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "fullArray";
        readonly internalType: "uint88[]";
        readonly type: "uint88[]";
    }];
    readonly name: "packUint88Array";
    readonly outputs: readonly [{
        readonly name: "packedArray";
        readonly internalType: "bytes";
        readonly type: "bytes";
    }];
    readonly stateMutability: "pure";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "position";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "contract IMaverickV2Position";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
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
        readonly name: "argsPacked";
        readonly internalType: "bytes";
        readonly type: "bytes";
    }];
    readonly name: "unpackAddLiquidityArgs";
    readonly outputs: readonly [{
        readonly name: "args";
        readonly internalType: "struct IMaverickV2Pool.AddLiquidityParams";
        readonly type: "tuple";
        readonly components: readonly [{
            readonly name: "kind";
            readonly internalType: "uint8";
            readonly type: "uint8";
        }, {
            readonly name: "ticks";
            readonly internalType: "int32[]";
            readonly type: "int32[]";
        }, {
            readonly name: "amounts";
            readonly internalType: "uint128[]";
            readonly type: "uint128[]";
        }];
    }];
    readonly stateMutability: "pure";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "packedArray";
        readonly internalType: "bytes";
        readonly type: "bytes";
    }];
    readonly name: "unpackUint88Array";
    readonly outputs: readonly [{
        readonly name: "fullArray";
        readonly internalType: "uint88[]";
        readonly type: "uint88[]";
    }];
    readonly stateMutability: "pure";
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
}];
export declare const maverickV2PoolAbi: readonly [{
    readonly type: "constructor";
    readonly inputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "MathOverflowedMulDiv";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "binIdsLength";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "amountsLength";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "PoolBinIdsAmountsLengthMismatch";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "startingTick";
        readonly internalType: "int32";
        readonly type: "int32";
    }];
    readonly name: "PoolCurrentTickBeyondSwapLimit";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "PoolFunctionNotImplemented";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "deltaLpAmount";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "accountBalance";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "PoolInsufficientBalance";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "PoolInvalidFee";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "kinds";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "kind";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "PoolKindNotSupported";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "PoolLocked";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "PoolMigrateBinFirst";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "PoolMinimumLiquidityNotMet";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "PoolNoProtocolFeeReceiverSet";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "amount";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "PoolReservesExceedMaximum";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "sender_";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "accessor";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "PoolSenderNotAccessor";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "sender_";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "accessor";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "PoolSenderNotFactory";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "tick";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "PoolTickMaxExceeded";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "ticksLength";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "amountsLength";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "PoolTicksAmountsLengthMismatch";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "index";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "previousTick";
        readonly internalType: "int256";
        readonly type: "int256";
    }, {
        readonly name: "tick";
        readonly internalType: "int256";
        readonly type: "int256";
    }];
    readonly name: "PoolTicksNotSorted";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "internalReserve";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "tokenBalance";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "token";
        readonly internalType: "contract IERC20";
        readonly type: "address";
    }];
    readonly name: "PoolTokenNotSolvent";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "amount";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "bits";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "PoolValueExceedsBits";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "PoolZeroLiquidityAdded";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "bits";
        readonly internalType: "uint8";
        readonly type: "uint8";
    }, {
        readonly name: "value";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "SafeCastOverflowedUintDowncast";
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
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "sender";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: false;
    }, {
        readonly name: "recipient";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: false;
    }, {
        readonly name: "subaccount";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }, {
        readonly name: "params";
        readonly internalType: "struct IMaverickV2Pool.AddLiquidityParams";
        readonly type: "tuple";
        readonly components: readonly [{
            readonly name: "kind";
            readonly internalType: "uint8";
            readonly type: "uint8";
        }, {
            readonly name: "ticks";
            readonly internalType: "int32[]";
            readonly type: "int32[]";
        }, {
            readonly name: "amounts";
            readonly internalType: "uint128[]";
            readonly type: "uint128[]";
        }];
        readonly indexed: false;
    }, {
        readonly name: "tokenAAmount";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }, {
        readonly name: "tokenBAmount";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }, {
        readonly name: "binIds";
        readonly internalType: "uint32[]";
        readonly type: "uint32[]";
        readonly indexed: false;
    }];
    readonly name: "PoolAddLiquidity";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "sender";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: false;
    }, {
        readonly name: "recipient";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: false;
    }, {
        readonly name: "amountA";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }, {
        readonly name: "amountB";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }];
    readonly name: "PoolFlashLoan";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "sender";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: false;
    }, {
        readonly name: "binId";
        readonly internalType: "uint32";
        readonly type: "uint32";
        readonly indexed: false;
    }, {
        readonly name: "maxRecursion";
        readonly internalType: "uint32";
        readonly type: "uint32";
        readonly indexed: false;
    }];
    readonly name: "PoolMigrateBinsUpStack";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "token";
        readonly internalType: "contract IERC20";
        readonly type: "address";
        readonly indexed: false;
    }, {
        readonly name: "protocolFee";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }];
    readonly name: "PoolProtocolFeeCollected";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "sender";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: false;
    }, {
        readonly name: "recipient";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: false;
    }, {
        readonly name: "subaccount";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }, {
        readonly name: "params";
        readonly internalType: "struct IMaverickV2Pool.RemoveLiquidityParams";
        readonly type: "tuple";
        readonly components: readonly [{
            readonly name: "binIds";
            readonly internalType: "uint32[]";
            readonly type: "uint32[]";
        }, {
            readonly name: "amounts";
            readonly internalType: "uint128[]";
            readonly type: "uint128[]";
        }];
        readonly indexed: false;
    }, {
        readonly name: "tokenAOut";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }, {
        readonly name: "tokenBOut";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }];
    readonly name: "PoolRemoveLiquidity";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "sqrtPrice";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }];
    readonly name: "PoolSqrtPrice";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "sender";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: false;
    }, {
        readonly name: "recipient";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: false;
    }, {
        readonly name: "params";
        readonly internalType: "struct IMaverickV2Pool.SwapParams";
        readonly type: "tuple";
        readonly components: readonly [{
            readonly name: "amount";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "tokenAIn";
            readonly internalType: "bool";
            readonly type: "bool";
        }, {
            readonly name: "exactOutput";
            readonly internalType: "bool";
            readonly type: "bool";
        }, {
            readonly name: "tickLimit";
            readonly internalType: "int32";
            readonly type: "int32";
        }];
        readonly indexed: false;
    }, {
        readonly name: "amountIn";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }, {
        readonly name: "amountOut";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }];
    readonly name: "PoolSwap";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "tick";
        readonly internalType: "int32";
        readonly type: "int32";
        readonly indexed: false;
    }, {
        readonly name: "kind";
        readonly internalType: "uint8";
        readonly type: "uint8";
        readonly indexed: false;
    }, {
        readonly name: "binId";
        readonly internalType: "uint32";
        readonly type: "uint32";
        readonly indexed: false;
    }];
    readonly name: "PoolTickBinUpdate";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "tick";
        readonly internalType: "int32";
        readonly type: "int32";
        readonly indexed: false;
    }, {
        readonly name: "reserveA";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }, {
        readonly name: "reserveB";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }];
    readonly name: "PoolTickState";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "accessor";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "address";
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
        readonly name: "subaccount";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "params";
        readonly internalType: "struct IMaverickV2Pool.AddLiquidityParams";
        readonly type: "tuple";
        readonly components: readonly [{
            readonly name: "kind";
            readonly internalType: "uint8";
            readonly type: "uint8";
        }, {
            readonly name: "ticks";
            readonly internalType: "int32[]";
            readonly type: "int32[]";
        }, {
            readonly name: "amounts";
            readonly internalType: "uint128[]";
            readonly type: "uint128[]";
        }];
    }, {
        readonly name: "data";
        readonly internalType: "bytes";
        readonly type: "bytes";
    }];
    readonly name: "addLiquidity";
    readonly outputs: readonly [{
        readonly name: "tokenAAmount";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "tokenBAmount";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "binIds";
        readonly internalType: "uint32[]";
        readonly type: "uint32[]";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "user";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "subaccount";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "binId";
        readonly internalType: "uint32";
        readonly type: "uint32";
    }];
    readonly name: "balanceOf";
    readonly outputs: readonly [{
        readonly name: "lpBalance";
        readonly internalType: "uint128";
        readonly type: "uint128";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "tick";
        readonly internalType: "int32";
        readonly type: "int32";
    }, {
        readonly name: "kind";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "binIdByTickKind";
    readonly outputs: readonly [{
        readonly name: "binId";
        readonly internalType: "uint32";
        readonly type: "uint32";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "isTokenA";
        readonly internalType: "bool";
        readonly type: "bool";
    }];
    readonly name: "distributeFees";
    readonly outputs: readonly [{
        readonly name: "protocolFee";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "token";
        readonly internalType: "contract IERC20";
        readonly type: "address";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "factory";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "contract IMaverickV2Factory";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "tokenAIn";
        readonly internalType: "bool";
        readonly type: "bool";
    }];
    readonly name: "fee";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "recipient";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "amountA";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "amountB";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "data";
        readonly internalType: "bytes";
        readonly type: "bytes";
    }];
    readonly name: "flashLoan";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "binId";
        readonly internalType: "uint32";
        readonly type: "uint32";
    }];
    readonly name: "getBin";
    readonly outputs: readonly [{
        readonly name: "bin";
        readonly internalType: "struct IMaverickV2Pool.BinState";
        readonly type: "tuple";
        readonly components: readonly [{
            readonly name: "mergeBinBalance";
            readonly internalType: "uint128";
            readonly type: "uint128";
        }, {
            readonly name: "tickBalance";
            readonly internalType: "uint128";
            readonly type: "uint128";
        }, {
            readonly name: "totalSupply";
            readonly internalType: "uint128";
            readonly type: "uint128";
        }, {
            readonly name: "kind";
            readonly internalType: "uint8";
            readonly type: "uint8";
        }, {
            readonly name: "tick";
            readonly internalType: "int32";
            readonly type: "int32";
        }, {
            readonly name: "mergeId";
            readonly internalType: "uint32";
            readonly type: "uint32";
        }];
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "getCurrentTwa";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "int256";
        readonly type: "int256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "getState";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "struct IMaverickV2Pool.State";
        readonly type: "tuple";
        readonly components: readonly [{
            readonly name: "reserveA";
            readonly internalType: "uint128";
            readonly type: "uint128";
        }, {
            readonly name: "reserveB";
            readonly internalType: "uint128";
            readonly type: "uint128";
        }, {
            readonly name: "lastTwaD8";
            readonly internalType: "int64";
            readonly type: "int64";
        }, {
            readonly name: "lastLogPriceD8";
            readonly internalType: "int64";
            readonly type: "int64";
        }, {
            readonly name: "lastTimestamp";
            readonly internalType: "uint40";
            readonly type: "uint40";
        }, {
            readonly name: "activeTick";
            readonly internalType: "int32";
            readonly type: "int32";
        }, {
            readonly name: "isLocked";
            readonly internalType: "bool";
            readonly type: "bool";
        }, {
            readonly name: "binCounter";
            readonly internalType: "uint32";
            readonly type: "uint32";
        }, {
            readonly name: "protocolFeeRatioD3";
            readonly internalType: "uint8";
            readonly type: "uint8";
        }];
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "tick";
        readonly internalType: "int32";
        readonly type: "int32";
    }];
    readonly name: "getTick";
    readonly outputs: readonly [{
        readonly name: "_tick";
        readonly internalType: "struct IMaverickV2Pool.TickState";
        readonly type: "tuple";
        readonly components: readonly [{
            readonly name: "reserveA";
            readonly internalType: "uint128";
            readonly type: "uint128";
        }, {
            readonly name: "reserveB";
            readonly internalType: "uint128";
            readonly type: "uint128";
        }, {
            readonly name: "totalSupply";
            readonly internalType: "uint128";
            readonly type: "uint128";
        }, {
            readonly name: "binIdsByTick";
            readonly internalType: "uint32[4]";
            readonly type: "uint32[4]";
        }];
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "kinds";
    readonly outputs: readonly [{
        readonly name: "_kinds";
        readonly internalType: "uint8";
        readonly type: "uint8";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "lendingFeeRateD18";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "lookback";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "binId";
        readonly internalType: "uint32";
        readonly type: "uint32";
    }, {
        readonly name: "maxRecursion";
        readonly internalType: "uint32";
        readonly type: "uint32";
    }];
    readonly name: "migrateBinUpStack";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "protocolFeeA";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint128";
        readonly type: "uint128";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "protocolFeeB";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint128";
        readonly type: "uint128";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "recipient";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "subaccount";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "params";
        readonly internalType: "struct IMaverickV2Pool.RemoveLiquidityParams";
        readonly type: "tuple";
        readonly components: readonly [{
            readonly name: "binIds";
            readonly internalType: "uint32[]";
            readonly type: "uint32[]";
        }, {
            readonly name: "amounts";
            readonly internalType: "uint128[]";
            readonly type: "uint128[]";
        }];
    }];
    readonly name: "removeLiquidity";
    readonly outputs: readonly [{
        readonly name: "tokenAOut";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "tokenBOut";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "recipient";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "params";
        readonly internalType: "struct IMaverickV2Pool.SwapParams";
        readonly type: "tuple";
        readonly components: readonly [{
            readonly name: "amount";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "tokenAIn";
            readonly internalType: "bool";
            readonly type: "bool";
        }, {
            readonly name: "exactOutput";
            readonly internalType: "bool";
            readonly type: "bool";
        }, {
            readonly name: "tickLimit";
            readonly internalType: "int32";
            readonly type: "int32";
        }];
    }, {
        readonly name: "data";
        readonly internalType: "bytes";
        readonly type: "bytes";
    }];
    readonly name: "swap";
    readonly outputs: readonly [{
        readonly name: "amountIn";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "amountOut";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "tickSpacing";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "tokenA";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "contract IERC20";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "tokenAScale";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "tokenB";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "contract IERC20";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "tokenBScale";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}];
export declare const maverickV2PoolLensAbi: readonly [{
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "targetSqrtPrice";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "sqrtLowerTickPrice";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "sqrtUpperTickPrice";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "LensTargetPriceOutOfBounds";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "targetIsA";
        readonly internalType: "bool";
        readonly type: "bool";
    }, {
        readonly name: "deltaA";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "deltaB";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "LensTargetingTokenWithNoDelta";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "relativeLiquidityAmount";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "deltaA";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "deltaB";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "LensTooLittleLiquidity";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "LiquidityUtilitiesFailedToFindDeltaAmounts";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "initialTargetB";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "deltaLpBalance";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "minimumRequiredLpBalance";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "LiquidityUtilitiesInitialTargetBTooSmall";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "LiquidityUtilitiesNoSwapLiquidity";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "targetSqrtPrice";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "sqrtLowerTickPrice";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "sqrtUpperTickPrice";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "LiquidityUtilitiesTargetPriceOutOfBounds";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "MathOverflowedMulDiv";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "bits";
        readonly internalType: "uint8";
        readonly type: "uint8";
    }, {
        readonly name: "value";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "SafeCastOverflowedUintDowncast";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "tick";
        readonly internalType: "int256";
        readonly type: "int256";
    }];
    readonly name: "TickMaxExceeded";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "params";
        readonly internalType: "struct IMaverickV2PoolLens.AddParamsViewInputs";
        readonly type: "tuple";
        readonly components: readonly [{
            readonly name: "pool";
            readonly internalType: "contract IMaverickV2Pool";
            readonly type: "address";
        }, {
            readonly name: "kind";
            readonly internalType: "uint8";
            readonly type: "uint8";
        }, {
            readonly name: "ticks";
            readonly internalType: "int32[]";
            readonly type: "int32[]";
        }, {
            readonly name: "relativeLiquidityAmounts";
            readonly internalType: "uint128[]";
            readonly type: "uint128[]";
        }, {
            readonly name: "addSpec";
            readonly internalType: "struct IMaverickV2PoolLens.AddParamsSpecification";
            readonly type: "tuple";
            readonly components: readonly [{
                readonly name: "slippageFactorD18";
                readonly internalType: "uint256";
                readonly type: "uint256";
            }, {
                readonly name: "numberOfPriceBreaksPerSide";
                readonly internalType: "uint256";
                readonly type: "uint256";
            }, {
                readonly name: "targetAmount";
                readonly internalType: "uint256";
                readonly type: "uint256";
            }, {
                readonly name: "targetIsA";
                readonly internalType: "bool";
                readonly type: "bool";
            }];
        }];
    }];
    readonly name: "getAddLiquidityParams";
    readonly outputs: readonly [{
        readonly name: "packedSqrtPriceBreaks";
        readonly internalType: "bytes";
        readonly type: "bytes";
    }, {
        readonly name: "packedArgs";
        readonly internalType: "bytes[]";
        readonly type: "bytes[]";
    }, {
        readonly name: "sqrtPriceBreaks";
        readonly internalType: "uint88[]";
        readonly type: "uint88[]";
    }, {
        readonly name: "addParams";
        readonly internalType: "struct IMaverickV2Pool.AddLiquidityParams[]";
        readonly type: "tuple[]";
        readonly components: readonly [{
            readonly name: "kind";
            readonly internalType: "uint8";
            readonly type: "uint8";
        }, {
            readonly name: "ticks";
            readonly internalType: "int32[]";
            readonly type: "int32[]";
        }, {
            readonly name: "amounts";
            readonly internalType: "uint128[]";
            readonly type: "uint128[]";
        }];
    }, {
        readonly name: "tickDeltas";
        readonly internalType: "struct IMaverickV2PoolLens.TickDeltas[]";
        readonly type: "tuple[]";
        readonly components: readonly [{
            readonly name: "deltaAOut";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "deltaBOut";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "deltaAs";
            readonly internalType: "uint256[]";
            readonly type: "uint256[]";
        }, {
            readonly name: "deltaBs";
            readonly internalType: "uint256[]";
            readonly type: "uint256[]";
        }];
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "params";
        readonly internalType: "struct IMaverickV2PoolLens.CreateAndAddParamsViewInputs";
        readonly type: "tuple";
        readonly components: readonly [{
            readonly name: "feeAIn";
            readonly internalType: "uint64";
            readonly type: "uint64";
        }, {
            readonly name: "feeBIn";
            readonly internalType: "uint64";
            readonly type: "uint64";
        }, {
            readonly name: "tickSpacing";
            readonly internalType: "uint16";
            readonly type: "uint16";
        }, {
            readonly name: "lookback";
            readonly internalType: "uint32";
            readonly type: "uint32";
        }, {
            readonly name: "tokenA";
            readonly internalType: "contract IERC20";
            readonly type: "address";
        }, {
            readonly name: "tokenB";
            readonly internalType: "contract IERC20";
            readonly type: "address";
        }, {
            readonly name: "activeTick";
            readonly internalType: "int32";
            readonly type: "int32";
        }, {
            readonly name: "kinds";
            readonly internalType: "uint8";
            readonly type: "uint8";
        }, {
            readonly name: "initialTargetB";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "sqrtPrice";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "kind";
            readonly internalType: "uint8";
            readonly type: "uint8";
        }, {
            readonly name: "ticks";
            readonly internalType: "int32[]";
            readonly type: "int32[]";
        }, {
            readonly name: "relativeLiquidityAmounts";
            readonly internalType: "uint128[]";
            readonly type: "uint128[]";
        }, {
            readonly name: "targetAmount";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "targetIsA";
            readonly internalType: "bool";
            readonly type: "bool";
        }];
    }];
    readonly name: "getCreatePoolAtPriceAndAddLiquidityParams";
    readonly outputs: readonly [{
        readonly name: "output";
        readonly internalType: "struct IMaverickV2PoolLens.CreateAndAddParamsInputs";
        readonly type: "tuple";
        readonly components: readonly [{
            readonly name: "feeAIn";
            readonly internalType: "uint64";
            readonly type: "uint64";
        }, {
            readonly name: "feeBIn";
            readonly internalType: "uint64";
            readonly type: "uint64";
        }, {
            readonly name: "tickSpacing";
            readonly internalType: "uint16";
            readonly type: "uint16";
        }, {
            readonly name: "lookback";
            readonly internalType: "uint32";
            readonly type: "uint32";
        }, {
            readonly name: "tokenA";
            readonly internalType: "contract IERC20";
            readonly type: "address";
        }, {
            readonly name: "tokenB";
            readonly internalType: "contract IERC20";
            readonly type: "address";
        }, {
            readonly name: "activeTick";
            readonly internalType: "int32";
            readonly type: "int32";
        }, {
            readonly name: "kinds";
            readonly internalType: "uint8";
            readonly type: "uint8";
        }, {
            readonly name: "donateParams";
            readonly internalType: "struct IMaverickV2Pool.AddLiquidityParams";
            readonly type: "tuple";
            readonly components: readonly [{
                readonly name: "kind";
                readonly internalType: "uint8";
                readonly type: "uint8";
            }, {
                readonly name: "ticks";
                readonly internalType: "int32[]";
                readonly type: "int32[]";
            }, {
                readonly name: "amounts";
                readonly internalType: "uint128[]";
                readonly type: "uint128[]";
            }];
        }, {
            readonly name: "swapAmount";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "addParams";
            readonly internalType: "struct IMaverickV2Pool.AddLiquidityParams";
            readonly type: "tuple";
            readonly components: readonly [{
                readonly name: "kind";
                readonly internalType: "uint8";
                readonly type: "uint8";
            }, {
                readonly name: "ticks";
                readonly internalType: "int32[]";
                readonly type: "int32[]";
            }, {
                readonly name: "amounts";
                readonly internalType: "uint128[]";
                readonly type: "uint128[]";
            }];
        }, {
            readonly name: "packedAddParams";
            readonly internalType: "bytes[]";
            readonly type: "bytes[]";
        }, {
            readonly name: "deltaAOut";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "deltaBOut";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "preAddReserveA";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "preAddReserveB";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "pool";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
    }, {
        readonly name: "binStart";
        readonly internalType: "uint32";
        readonly type: "uint32";
    }, {
        readonly name: "binEnd";
        readonly internalType: "uint32";
        readonly type: "uint32";
    }];
    readonly name: "getFullPoolState";
    readonly outputs: readonly [{
        readonly name: "poolState";
        readonly internalType: "struct IMaverickV2PoolLens.PoolState";
        readonly type: "tuple";
        readonly components: readonly [{
            readonly name: "tickStateMapping";
            readonly internalType: "struct IMaverickV2Pool.TickState[]";
            readonly type: "tuple[]";
            readonly components: readonly [{
                readonly name: "reserveA";
                readonly internalType: "uint128";
                readonly type: "uint128";
            }, {
                readonly name: "reserveB";
                readonly internalType: "uint128";
                readonly type: "uint128";
            }, {
                readonly name: "totalSupply";
                readonly internalType: "uint128";
                readonly type: "uint128";
            }, {
                readonly name: "binIdsByTick";
                readonly internalType: "uint32[4]";
                readonly type: "uint32[4]";
            }];
        }, {
            readonly name: "binStateMapping";
            readonly internalType: "struct IMaverickV2Pool.BinState[]";
            readonly type: "tuple[]";
            readonly components: readonly [{
                readonly name: "mergeBinBalance";
                readonly internalType: "uint128";
                readonly type: "uint128";
            }, {
                readonly name: "tickBalance";
                readonly internalType: "uint128";
                readonly type: "uint128";
            }, {
                readonly name: "totalSupply";
                readonly internalType: "uint128";
                readonly type: "uint128";
            }, {
                readonly name: "kind";
                readonly internalType: "uint8";
                readonly type: "uint8";
            }, {
                readonly name: "tick";
                readonly internalType: "int32";
                readonly type: "int32";
            }, {
                readonly name: "mergeId";
                readonly internalType: "uint32";
                readonly type: "uint32";
            }];
        }, {
            readonly name: "binIdByTickKindMapping";
            readonly internalType: "struct IMaverickV2PoolLens.BinPositionKinds[]";
            readonly type: "tuple[]";
            readonly components: readonly [{
                readonly name: "values";
                readonly internalType: "uint128[4]";
                readonly type: "uint128[4]";
            }];
        }, {
            readonly name: "state";
            readonly internalType: "struct IMaverickV2Pool.State";
            readonly type: "tuple";
            readonly components: readonly [{
                readonly name: "reserveA";
                readonly internalType: "uint128";
                readonly type: "uint128";
            }, {
                readonly name: "reserveB";
                readonly internalType: "uint128";
                readonly type: "uint128";
            }, {
                readonly name: "lastTwaD8";
                readonly internalType: "int64";
                readonly type: "int64";
            }, {
                readonly name: "lastLogPriceD8";
                readonly internalType: "int64";
                readonly type: "int64";
            }, {
                readonly name: "lastTimestamp";
                readonly internalType: "uint40";
                readonly type: "uint40";
            }, {
                readonly name: "activeTick";
                readonly internalType: "int32";
                readonly type: "int32";
            }, {
                readonly name: "isLocked";
                readonly internalType: "bool";
                readonly type: "bool";
            }, {
                readonly name: "binCounter";
                readonly internalType: "uint32";
                readonly type: "uint32";
            }, {
                readonly name: "protocolFeeRatioD3";
                readonly internalType: "uint8";
                readonly type: "uint8";
            }];
        }, {
            readonly name: "protocolFees";
            readonly internalType: "struct IMaverickV2PoolLens.Reserves";
            readonly type: "tuple";
            readonly components: readonly [{
                readonly name: "amountA";
                readonly internalType: "uint256";
                readonly type: "uint256";
            }, {
                readonly name: "amountB";
                readonly internalType: "uint256";
                readonly type: "uint256";
            }];
        }];
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "pool";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
    }];
    readonly name: "getPoolPrice";
    readonly outputs: readonly [{
        readonly name: "price";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "pool";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
    }];
    readonly name: "getPoolSqrtPrice";
    readonly outputs: readonly [{
        readonly name: "sqrtPrice";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "pool";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
    }, {
        readonly name: "tick";
        readonly internalType: "int32";
        readonly type: "int32";
    }];
    readonly name: "getTickSqrtPriceAndL";
    readonly outputs: readonly [{
        readonly name: "sqrtPrice";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "liquidity";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "pool";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
    }, {
        readonly name: "tickStart";
        readonly internalType: "int32";
        readonly type: "int32";
    }, {
        readonly name: "tickEnd";
        readonly internalType: "int32";
        readonly type: "int32";
    }];
    readonly name: "getTicks";
    readonly outputs: readonly [{
        readonly name: "ticks";
        readonly internalType: "int32[]";
        readonly type: "int32[]";
    }, {
        readonly name: "tickStates";
        readonly internalType: "struct IMaverickV2Pool.TickState[]";
        readonly type: "tuple[]";
        readonly components: readonly [{
            readonly name: "reserveA";
            readonly internalType: "uint128";
            readonly type: "uint128";
        }, {
            readonly name: "reserveB";
            readonly internalType: "uint128";
            readonly type: "uint128";
        }, {
            readonly name: "totalSupply";
            readonly internalType: "uint128";
            readonly type: "uint128";
        }, {
            readonly name: "binIdsByTick";
            readonly internalType: "uint32[4]";
            readonly type: "uint32[4]";
        }];
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "pool";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
    }, {
        readonly name: "tickRadius";
        readonly internalType: "int32";
        readonly type: "int32";
    }];
    readonly name: "getTicksAroundActive";
    readonly outputs: readonly [{
        readonly name: "ticks";
        readonly internalType: "int32[]";
        readonly type: "int32[]";
    }, {
        readonly name: "tickStates";
        readonly internalType: "struct IMaverickV2Pool.TickState[]";
        readonly type: "tuple[]";
        readonly components: readonly [{
            readonly name: "reserveA";
            readonly internalType: "uint128";
            readonly type: "uint128";
        }, {
            readonly name: "reserveB";
            readonly internalType: "uint128";
            readonly type: "uint128";
        }, {
            readonly name: "totalSupply";
            readonly internalType: "uint128";
            readonly type: "uint128";
        }, {
            readonly name: "binIdsByTick";
            readonly internalType: "uint32[4]";
            readonly type: "uint32[4]";
        }];
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "pool";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
    }, {
        readonly name: "tickRadius";
        readonly internalType: "int32";
        readonly type: "int32";
    }];
    readonly name: "getTicksAroundActiveWLiquidity";
    readonly outputs: readonly [{
        readonly name: "ticks";
        readonly internalType: "int32[]";
        readonly type: "int32[]";
    }, {
        readonly name: "tickStates";
        readonly internalType: "struct IMaverickV2Pool.TickState[]";
        readonly type: "tuple[]";
        readonly components: readonly [{
            readonly name: "reserveA";
            readonly internalType: "uint128";
            readonly type: "uint128";
        }, {
            readonly name: "reserveB";
            readonly internalType: "uint128";
            readonly type: "uint128";
        }, {
            readonly name: "totalSupply";
            readonly internalType: "uint128";
            readonly type: "uint128";
        }, {
            readonly name: "binIdsByTick";
            readonly internalType: "uint32[4]";
            readonly type: "uint32[4]";
        }];
    }, {
        readonly name: "liquidities";
        readonly internalType: "uint256[]";
        readonly type: "uint256[]";
    }, {
        readonly name: "sqrtLowerTickPrices";
        readonly internalType: "uint256[]";
        readonly type: "uint256[]";
    }, {
        readonly name: "sqrtUpperTickPrices";
        readonly internalType: "uint256[]";
        readonly type: "uint256[]";
    }, {
        readonly name: "poolState";
        readonly internalType: "struct IMaverickV2Pool.State";
        readonly type: "tuple";
        readonly components: readonly [{
            readonly name: "reserveA";
            readonly internalType: "uint128";
            readonly type: "uint128";
        }, {
            readonly name: "reserveB";
            readonly internalType: "uint128";
            readonly type: "uint128";
        }, {
            readonly name: "lastTwaD8";
            readonly internalType: "int64";
            readonly type: "int64";
        }, {
            readonly name: "lastLogPriceD8";
            readonly internalType: "int64";
            readonly type: "int64";
        }, {
            readonly name: "lastTimestamp";
            readonly internalType: "uint40";
            readonly type: "uint40";
        }, {
            readonly name: "activeTick";
            readonly internalType: "int32";
            readonly type: "int32";
        }, {
            readonly name: "isLocked";
            readonly internalType: "bool";
            readonly type: "bool";
        }, {
            readonly name: "binCounter";
            readonly internalType: "uint32";
            readonly type: "uint32";
        }, {
            readonly name: "protocolFeeRatioD3";
            readonly internalType: "uint8";
            readonly type: "uint8";
        }];
    }, {
        readonly name: "sqrtPrice";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "feeAIn";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "feeBIn";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "pool";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
    }];
    readonly name: "tokenScales";
    readonly outputs: readonly [{
        readonly name: "tokenAScale";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "tokenBScale";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}];
export declare const maverickV2PositionAbi: readonly [{
    readonly type: "constructor";
    readonly inputs: readonly [{
        readonly name: "_factory";
        readonly internalType: "contract IMaverickV2Factory";
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
        readonly name: "index";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "duplicateEntry";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "ArrayElementsNotUnique";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "ERC721EnumerableForbiddenBatchMint";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "sender";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "owner";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "ERC721IncorrectOwner";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "operator";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "ERC721InsufficientApproval";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "approver";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "ERC721InvalidApprover";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "operator";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "ERC721InvalidOperator";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "owner";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "ERC721InvalidOwner";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "receiver";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "ERC721InvalidReceiver";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "sender";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "ERC721InvalidSender";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "ERC721NonexistentToken";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "owner";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "index";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "ERC721OutOfBoundsIndex";
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
        readonly name: "account";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "OwnableUnauthorizedAccount";
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
        readonly name: "index";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "pool";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
    }];
    readonly name: "PositionDuplicatePool";
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
    readonly name: "PositionNotFactoryPool";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "PositionPermissionedLiquidityPool";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "bits";
        readonly internalType: "uint8";
        readonly type: "uint8";
    }, {
        readonly name: "value";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "SafeCastOverflowedUintDowncast";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "tick";
        readonly internalType: "int256";
        readonly type: "int256";
    }];
    readonly name: "TickMaxExceeded";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "owner";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "approved";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: true;
    }];
    readonly name: "Approval";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "owner";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "operator";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "approved";
        readonly internalType: "bool";
        readonly type: "bool";
        readonly indexed: false;
    }];
    readonly name: "ApprovalForAll";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: true;
    }];
    readonly name: "PositionClearData";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: true;
    }, {
        readonly name: "index";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }, {
        readonly name: "newData";
        readonly internalType: "struct IMaverickV2Position.PositionPoolBinIds";
        readonly type: "tuple";
        readonly components: readonly [{
            readonly name: "pool";
            readonly internalType: "contract IMaverickV2Pool";
            readonly type: "address";
        }, {
            readonly name: "binIds";
            readonly internalType: "uint32[]";
            readonly type: "uint32[]";
        }];
        readonly indexed: false;
    }];
    readonly name: "PositionSetData";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "lpReward";
        readonly internalType: "contract ILiquidityRegistry";
        readonly type: "address";
        readonly indexed: false;
    }];
    readonly name: "SetLpReward";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "positionImage";
        readonly internalType: "contract IPositionImage";
        readonly type: "address";
        readonly indexed: false;
    }];
    readonly name: "SetPositionImage";
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
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: true;
    }];
    readonly name: "Transfer";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "pool";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
    }, {
        readonly name: "binIds";
        readonly internalType: "uint32[]";
        readonly type: "uint32[]";
    }];
    readonly name: "appendTokenIdData";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "to";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "approve";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "owner";
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
    readonly inputs: readonly [{
        readonly name: "spender";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "checkAuthorized";
    readonly outputs: readonly [{
        readonly name: "owner";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
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
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "pool";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
    }, {
        readonly name: "binIds";
        readonly internalType: "uint32[]";
        readonly type: "uint32[]";
    }];
    readonly name: "checkpointBinLpBalance";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "factory";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "contract IMaverickV2Factory";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "getApproved";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "index";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "proportionD18";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "getRemoveParams";
    readonly outputs: readonly [{
        readonly name: "params";
        readonly internalType: "struct IMaverickV2Pool.RemoveLiquidityParams";
        readonly type: "tuple";
        readonly components: readonly [{
            readonly name: "binIds";
            readonly internalType: "uint32[]";
            readonly type: "uint32[]";
        }, {
            readonly name: "amounts";
            readonly internalType: "uint128[]";
            readonly type: "uint128[]";
        }];
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "getTokenIdData";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "struct IMaverickV2Position.PositionPoolBinIds[]";
        readonly type: "tuple[]";
        readonly components: readonly [{
            readonly name: "pool";
            readonly internalType: "contract IMaverickV2Pool";
            readonly type: "address";
        }, {
            readonly name: "binIds";
            readonly internalType: "uint32[]";
            readonly type: "uint32[]";
        }];
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "index";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "getTokenIdData";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "struct IMaverickV2Position.PositionPoolBinIds";
        readonly type: "tuple";
        readonly components: readonly [{
            readonly name: "pool";
            readonly internalType: "contract IMaverickV2Pool";
            readonly type: "address";
        }, {
            readonly name: "binIds";
            readonly internalType: "uint32[]";
            readonly type: "uint32[]";
        }];
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "owner";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "operator";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "isApprovedForAll";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "bool";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "lpReward";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "contract ILiquidityRegistry";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "pool";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
    }, {
        readonly name: "binIds";
        readonly internalType: "uint32[]";
        readonly type: "uint32[]";
    }, {
        readonly name: "maxRecursion";
        readonly internalType: "uint32";
        readonly type: "uint32";
    }];
    readonly name: "migrateBinsUpStack";
    readonly outputs: readonly [];
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
        readonly name: "binIds";
        readonly internalType: "uint32[]";
        readonly type: "uint32[]";
    }];
    readonly name: "mint";
    readonly outputs: readonly [{
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
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
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "name";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "string";
        readonly type: "string";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "nextTokenId";
    readonly outputs: readonly [{
        readonly name: "nextTokenId_";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "ownerOf";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "positionImage";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "contract IPositionImage";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "recipient";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "pool";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
    }, {
        readonly name: "params";
        readonly internalType: "struct IMaverickV2Pool.RemoveLiquidityParams";
        readonly type: "tuple";
        readonly components: readonly [{
            readonly name: "binIds";
            readonly internalType: "uint32[]";
            readonly type: "uint32[]";
        }, {
            readonly name: "amounts";
            readonly internalType: "uint128[]";
            readonly type: "uint128[]";
        }];
    }];
    readonly name: "removeLiquidity";
    readonly outputs: readonly [{
        readonly name: "tokenAAmount";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "tokenBAmount";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "pool";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
    }, {
        readonly name: "params";
        readonly internalType: "struct IMaverickV2Pool.RemoveLiquidityParams";
        readonly type: "tuple";
        readonly components: readonly [{
            readonly name: "binIds";
            readonly internalType: "uint32[]";
            readonly type: "uint32[]";
        }, {
            readonly name: "amounts";
            readonly internalType: "uint128[]";
            readonly type: "uint128[]";
        }];
    }];
    readonly name: "removeLiquidityToSender";
    readonly outputs: readonly [{
        readonly name: "tokenAAmount";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "tokenBAmount";
        readonly internalType: "uint256";
        readonly type: "uint256";
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
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "safeTransferFrom";
    readonly outputs: readonly [];
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
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "data";
        readonly internalType: "bytes";
        readonly type: "bytes";
    }];
    readonly name: "safeTransferFrom";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "operator";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "approved";
        readonly internalType: "bool";
        readonly type: "bool";
    }];
    readonly name: "setApprovalForAll";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_lpReward";
        readonly internalType: "contract ILiquidityRegistry";
        readonly type: "address";
    }];
    readonly name: "setLpReward";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_positionImage";
        readonly internalType: "contract IPositionImage";
        readonly type: "address";
    }];
    readonly name: "setPositionImage";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "index";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "pool";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
    }, {
        readonly name: "binIds";
        readonly internalType: "uint32[]";
        readonly type: "uint32[]";
    }];
    readonly name: "setTokenIdData";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "data";
        readonly internalType: "struct IMaverickV2Position.PositionPoolBinIds[]";
        readonly type: "tuple[]";
        readonly components: readonly [{
            readonly name: "pool";
            readonly internalType: "contract IMaverickV2Pool";
            readonly type: "address";
        }, {
            readonly name: "binIds";
            readonly internalType: "uint32[]";
            readonly type: "uint32[]";
        }];
    }];
    readonly name: "setTokenIdData";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "interfaceId";
        readonly internalType: "bytes4";
        readonly type: "bytes4";
    }];
    readonly name: "supportsInterface";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "bool";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "symbol";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "string";
        readonly type: "string";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "index";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "tokenByIndex";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "tokenIdDataLength";
    readonly outputs: readonly [{
        readonly name: "length";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "startIndex";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "stopIndex";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "tokenIdPositionInformation";
    readonly outputs: readonly [{
        readonly name: "output";
        readonly internalType: "struct IMaverickV2Position.PositionFullInformation[]";
        readonly type: "tuple[]";
        readonly components: readonly [{
            readonly name: "poolBinIds";
            readonly internalType: "struct IMaverickV2Position.PositionPoolBinIds";
            readonly type: "tuple";
            readonly components: readonly [{
                readonly name: "pool";
                readonly internalType: "contract IMaverickV2Pool";
                readonly type: "address";
            }, {
                readonly name: "binIds";
                readonly internalType: "uint32[]";
                readonly type: "uint32[]";
            }];
        }, {
            readonly name: "amountA";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "amountB";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "binAAmounts";
            readonly internalType: "uint256[]";
            readonly type: "uint256[]";
        }, {
            readonly name: "binBAmounts";
            readonly internalType: "uint256[]";
            readonly type: "uint256[]";
        }, {
            readonly name: "ticks";
            readonly internalType: "int32[]";
            readonly type: "int32[]";
        }, {
            readonly name: "liquidities";
            readonly internalType: "uint256[]";
            readonly type: "uint256[]";
        }];
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "index";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "tokenIdPositionInformation";
    readonly outputs: readonly [{
        readonly name: "output";
        readonly internalType: "struct IMaverickV2Position.PositionFullInformation";
        readonly type: "tuple";
        readonly components: readonly [{
            readonly name: "poolBinIds";
            readonly internalType: "struct IMaverickV2Position.PositionPoolBinIds";
            readonly type: "tuple";
            readonly components: readonly [{
                readonly name: "pool";
                readonly internalType: "contract IMaverickV2Pool";
                readonly type: "address";
            }, {
                readonly name: "binIds";
                readonly internalType: "uint32[]";
                readonly type: "uint32[]";
            }];
        }, {
            readonly name: "amountA";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "amountB";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "binAAmounts";
            readonly internalType: "uint256[]";
            readonly type: "uint256[]";
        }, {
            readonly name: "binBAmounts";
            readonly internalType: "uint256[]";
            readonly type: "uint256[]";
        }, {
            readonly name: "ticks";
            readonly internalType: "int32[]";
            readonly type: "int32[]";
        }, {
            readonly name: "liquidities";
            readonly internalType: "uint256[]";
            readonly type: "uint256[]";
        }];
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "owner";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "tokenIdsOfOwner";
    readonly outputs: readonly [{
        readonly name: "tokenIds";
        readonly internalType: "uint256[]";
        readonly type: "uint256[]";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "owner";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "index";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "tokenOfOwnerByIndex";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "ownerToCheck";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "index";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "tokenOfOwnerByIndexExists";
    readonly outputs: readonly [{
        readonly name: "exists";
        readonly internalType: "bool";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "tokenURI";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "string";
        readonly type: "string";
    }];
    readonly stateMutability: "view";
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
        readonly name: "from";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "to";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "transferFrom";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}];
export declare const maverickV2QuoterAbi: readonly [{
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
    readonly name: "MathOverflowedMulDiv";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "QuoterInvalidAddLiquidity";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "QuoterInvalidSwap";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "bits";
        readonly internalType: "uint8";
        readonly type: "uint8";
    }, {
        readonly name: "value";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "SafeCastOverflowedUintDowncast";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "tick";
        readonly internalType: "int256";
        readonly type: "int256";
    }];
    readonly name: "TickMaxExceeded";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "pool";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
    }, {
        readonly name: "params";
        readonly internalType: "struct IMaverickV2Pool.AddLiquidityParams";
        readonly type: "tuple";
        readonly components: readonly [{
            readonly name: "kind";
            readonly internalType: "uint8";
            readonly type: "uint8";
        }, {
            readonly name: "ticks";
            readonly internalType: "int32[]";
            readonly type: "int32[]";
        }, {
            readonly name: "amounts";
            readonly internalType: "uint128[]";
            readonly type: "uint128[]";
        }];
    }];
    readonly name: "calculateAddLiquidity";
    readonly outputs: readonly [{
        readonly name: "amountA";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "amountB";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "gasEstimate";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "path";
        readonly internalType: "bytes";
        readonly type: "bytes";
    }, {
        readonly name: "amount";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "exactOutput";
        readonly internalType: "bool";
        readonly type: "bool";
    }];
    readonly name: "calculateMultiHopSwap";
    readonly outputs: readonly [{
        readonly name: "returnAmount";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "gasEstimate";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "pool";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
    }, {
        readonly name: "amount";
        readonly internalType: "uint128";
        readonly type: "uint128";
    }, {
        readonly name: "tokenAIn";
        readonly internalType: "bool";
        readonly type: "bool";
    }, {
        readonly name: "exactOutput";
        readonly internalType: "bool";
        readonly type: "bool";
    }, {
        readonly name: "tickLimit";
        readonly internalType: "int32";
        readonly type: "int32";
    }];
    readonly name: "calculateSwap";
    readonly outputs: readonly [{
        readonly name: "amountIn";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "amountOut";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "gasEstimate";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "";
        readonly internalType: "contract IERC20";
        readonly type: "address";
    }, {
        readonly name: "";
        readonly internalType: "contract IERC20";
        readonly type: "address";
    }, {
        readonly name: "amountA";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "amountB";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "";
        readonly internalType: "bytes";
        readonly type: "bytes";
    }];
    readonly name: "maverickV2AddLiquidityCallback";
    readonly outputs: readonly [];
    readonly stateMutability: "pure";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "";
        readonly internalType: "contract IERC20";
        readonly type: "address";
    }, {
        readonly name: "amountIn";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "amountOut";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "";
        readonly internalType: "bytes";
        readonly type: "bytes";
    }];
    readonly name: "maverickV2SwapCallback";
    readonly outputs: readonly [];
    readonly stateMutability: "pure";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "pool";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
    }];
    readonly name: "poolSqrtPrice";
    readonly outputs: readonly [{
        readonly name: "sqrtPrice";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}];
export declare const maverickV2RouterAbi: readonly [{
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
}];
export declare const migrateBinsAbi: readonly [{
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "pool";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
    }, {
        readonly name: "binIds";
        readonly internalType: "uint32[]";
        readonly type: "uint32[]";
    }, {
        readonly name: "maxRecursion";
        readonly internalType: "uint32";
        readonly type: "uint32";
    }];
    readonly name: "migrateBinsUpStack";
    readonly outputs: readonly [];
    readonly stateMutability: "payable";
}];
export declare const multicallAbi: readonly [{
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "target";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "AddressEmptyCode";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "FailedInnerCall";
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
    readonly stateMutability: "nonpayable";
}];
export declare const nftAbi: readonly [{
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "ERC721EnumerableForbiddenBatchMint";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "sender";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "owner";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "ERC721IncorrectOwner";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "operator";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "ERC721InsufficientApproval";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "approver";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "ERC721InvalidApprover";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "operator";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "ERC721InvalidOperator";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "owner";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "ERC721InvalidOwner";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "receiver";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "ERC721InvalidReceiver";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "sender";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "ERC721InvalidSender";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "ERC721NonexistentToken";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "owner";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "index";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "ERC721OutOfBoundsIndex";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "owner";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "approved";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: true;
    }];
    readonly name: "Approval";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "owner";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "operator";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "approved";
        readonly internalType: "bool";
        readonly type: "bool";
        readonly indexed: false;
    }];
    readonly name: "ApprovalForAll";
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
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: true;
    }];
    readonly name: "Transfer";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "to";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "approve";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "owner";
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
    readonly inputs: readonly [{
        readonly name: "spender";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "checkAuthorized";
    readonly outputs: readonly [{
        readonly name: "owner";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "getApproved";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "owner";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "operator";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "isApprovedForAll";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "bool";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "name";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "string";
        readonly type: "string";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "nextTokenId";
    readonly outputs: readonly [{
        readonly name: "nextTokenId_";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "ownerOf";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
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
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "safeTransferFrom";
    readonly outputs: readonly [];
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
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "data";
        readonly internalType: "bytes";
        readonly type: "bytes";
    }];
    readonly name: "safeTransferFrom";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "operator";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "approved";
        readonly internalType: "bool";
        readonly type: "bool";
    }];
    readonly name: "setApprovalForAll";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "interfaceId";
        readonly internalType: "bytes4";
        readonly type: "bytes4";
    }];
    readonly name: "supportsInterface";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "bool";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "symbol";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "string";
        readonly type: "string";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "index";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "tokenByIndex";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "owner";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "tokenIdsOfOwner";
    readonly outputs: readonly [{
        readonly name: "tokenIds";
        readonly internalType: "uint256[]";
        readonly type: "uint256[]";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "owner";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "index";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "tokenOfOwnerByIndex";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "ownerToCheck";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "index";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "tokenOfOwnerByIndexExists";
    readonly outputs: readonly [{
        readonly name: "exists";
        readonly internalType: "bool";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "tokenURI";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "string";
        readonly type: "string";
    }];
    readonly stateMutability: "view";
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
        readonly name: "from";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "to";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "transferFrom";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}];
export declare const nftImageAbi: readonly [{
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "MathOverflowedMulDiv";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "value";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "length";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "StringsInsufficientHexLength";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "ve";
        readonly internalType: "contract IVotingEscrowNft";
        readonly type: "address";
    }, {
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "tokenURI";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "string";
        readonly type: "string";
    }];
    readonly stateMutability: "view";
}];
export declare const noncesAbi: readonly [{
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "account";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "currentNonce";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "InvalidAccountNonce";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "owner";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "nonces";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}];
export declare const orphanDistributorAbi: readonly [{
    readonly type: "constructor";
    readonly inputs: readonly [{
        readonly name: "_votingDistributor";
        readonly internalType: "contract IVotingDistributor";
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
    readonly inputs: readonly [];
    readonly name: "FailedInnerCall";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "NothingToDistribute";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "OnlyVotingDistibutor";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "account";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "OwnableUnauthorizedAccount";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "token";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "SafeERC20FailedOperation";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "pool";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
        readonly indexed: false;
    }, {
        readonly name: "token";
        readonly internalType: "contract IERC20";
        readonly type: "address";
        readonly indexed: false;
    }, {
        readonly name: "epoch";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }, {
        readonly name: "amount";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }];
    readonly name: "Distribute";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "pool";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
        readonly indexed: false;
    }, {
        readonly name: "token";
        readonly internalType: "contract IERC20";
        readonly type: "address";
        readonly indexed: false;
    }, {
        readonly name: "amount";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }];
    readonly name: "NotifyAndTransfer";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "recipient";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: false;
    }, {
        readonly name: "pool";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
        readonly indexed: false;
    }, {
        readonly name: "token";
        readonly internalType: "contract IERC20";
        readonly type: "address";
        readonly indexed: false;
    }, {
        readonly name: "amount";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }];
    readonly name: "ProtocolDistribute";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "newAdmin";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: false;
    }];
    readonly name: "SetConfigurationAdmin";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "configurationAdmin";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "pool";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
    }, {
        readonly name: "token";
        readonly internalType: "contract IERC20";
        readonly type: "address";
    }];
    readonly name: "distribute";
    readonly outputs: readonly [{
        readonly name: "amount";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "factory";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "contract IMaverickV2Factory";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "pool";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
    }, {
        readonly name: "token";
        readonly internalType: "contract IERC20";
        readonly type: "address";
    }, {
        readonly name: "amount";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "notifyAndTransfer";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
    }, {
        readonly name: "token";
        readonly internalType: "contract IERC20";
        readonly type: "address";
    }];
    readonly name: "orphanAmount";
    readonly outputs: readonly [{
        readonly name: "amount";
        readonly internalType: "uint256";
        readonly type: "uint256";
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
        readonly name: "token";
        readonly internalType: "contract IERC20";
        readonly type: "address";
    }];
    readonly name: "protocolDistribute";
    readonly outputs: readonly [{
        readonly name: "amount";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_newAdmin";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "setConfigurationAdmin";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "votingDistributor";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "contract IVotingDistributor";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
}];
export declare const ownableAbi: readonly [{
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "owner";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "OwnableInvalidOwner";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "account";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "OwnableUnauthorizedAccount";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "previousOwner";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "newOwner";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }];
    readonly name: "OwnershipTransferred";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "owner";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "renounceOwnership";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "newOwner";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "transferOwnership";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}];
export declare const payableMulticallAbi: readonly [{
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "target";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "AddressEmptyCode";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "FailedInnerCall";
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
}];
export declare const paymentAbi: readonly [{
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
    readonly inputs: readonly [];
    readonly name: "FailedInnerCall";
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
}];
export declare const poolDistributorAbi: readonly [{
    readonly type: "constructor";
    readonly inputs: readonly [{
        readonly name: "_position";
        readonly internalType: "contract INft";
        readonly type: "address";
    }, {
        readonly name: "_lpReward";
        readonly internalType: "contract ILpReward";
        readonly type: "address";
    }, {
        readonly name: "_votingDistributor";
        readonly internalType: "contract IVotingDistributor";
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
        readonly name: "user";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "pool";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
    }, {
        readonly name: "epoch";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "binId";
        readonly internalType: "uint32";
        readonly type: "uint32";
    }];
    readonly name: "AlreadClaimed";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "epoch";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "pool";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
    }];
    readonly name: "AlreadyDisbursed";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "BinIdsMustBeOrdered";
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
    readonly inputs: readonly [];
    readonly name: "NothingToClaim";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "OnlyVotingDistibutor";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "token";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "SafeERC20FailedOperation";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "sender";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "owner";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "onlyPostionOwnerCanClaim";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "user";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: false;
    }, {
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }, {
        readonly name: "pool";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
        readonly indexed: false;
    }, {
        readonly name: "binIds";
        readonly internalType: "uint32[]";
        readonly type: "uint32[]";
        readonly indexed: false;
    }, {
        readonly name: "epoch";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }, {
        readonly name: "amount";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }];
    readonly name: "ClaimLp";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "pool";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
        readonly indexed: false;
    }, {
        readonly name: "epoch";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }, {
        readonly name: "amount";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }];
    readonly name: "NotifyAndTransfer";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "recipient";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "pool";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
    }, {
        readonly name: "binIds";
        readonly internalType: "uint32[]";
        readonly type: "uint32[]";
    }, {
        readonly name: "epoch";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "claimLp";
    readonly outputs: readonly [{
        readonly name: "amount";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "pool";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
    }, {
        readonly name: "binIds";
        readonly internalType: "uint32[]";
        readonly type: "uint32[]";
    }, {
        readonly name: "epoch";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "claimLpAmount";
    readonly outputs: readonly [{
        readonly name: "amount";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "epoch";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
    }];
    readonly name: "claimed";
    readonly outputs: readonly [{
        readonly name: "amount";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "epoch";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
    }];
    readonly name: "disbursement";
    readonly outputs: readonly [{
        readonly name: "amount";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "epoch";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
    }, {
        readonly name: "binId";
        readonly internalType: "uint32";
        readonly type: "uint32";
    }];
    readonly name: "lpClaims";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "bool";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "lpReward";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "contract ILpReward";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
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
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "pool";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
    }, {
        readonly name: "epoch";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "amount";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "notifyAndTransfer";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "position";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "contract INft";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "rewardToken";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "contract IERC20";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "votingDistributor";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "contract IVotingDistributor";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
}];
export declare const positionImageAbi: readonly [{
    readonly type: "constructor";
    readonly inputs: readonly [{
        readonly name: "_deployer";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "MathOverflowedMulDiv";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "x";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "y";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "PRBMath_MulDiv18_Overflow";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "sender";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "deployer";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "currentPosition";
        readonly internalType: "contract IMaverickV2Position";
        readonly type: "address";
    }];
    readonly name: "PositionImageSetPositionError";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "value";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "length";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "StringsInsufficientHexLength";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "tick";
        readonly internalType: "int256";
        readonly type: "int256";
    }];
    readonly name: "TickMaxExceeded";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "image";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "string";
        readonly type: "string";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "position";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "contract IMaverickV2Position";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_position";
        readonly internalType: "contract IMaverickV2Position";
        readonly type: "address";
    }];
    readonly name: "setPosition";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "str";
        readonly internalType: "string";
        readonly type: "string";
    }];
    readonly name: "stringToColor";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "string";
        readonly type: "string";
    }];
    readonly stateMutability: "pure";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "str";
        readonly internalType: "string";
        readonly type: "string";
    }];
    readonly name: "stringToColorHash";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "string";
        readonly type: "string";
    }];
    readonly stateMutability: "pure";
}];
export declare const pushOperationsAbi: readonly [{
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
}];
export declare const reentrancyGuardAbi: readonly [{
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "ReentrancyGuardReentrantCall";
}];
export declare const roosterAbi: readonly [{
    readonly type: "constructor";
    readonly inputs: readonly [{
        readonly name: "initialOwner";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "spender";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "allowance";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "needed";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "ERC20InsufficientAllowance";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "sender";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "balance";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "needed";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "ERC20InsufficientBalance";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "approver";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "ERC20InvalidApprover";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "receiver";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "ERC20InvalidReceiver";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "sender";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "ERC20InvalidSender";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "spender";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "ERC20InvalidSpender";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "NotMinter";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "owner";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "OwnableInvalidOwner";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "account";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "OwnableUnauthorizedAccount";
}, {
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
        readonly name: "previousOwner";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "newOwner";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }];
    readonly name: "OwnershipTransferred";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "newMinter";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: false;
    }];
    readonly name: "SetMinter";
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
    readonly name: "decimals";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint8";
        readonly type: "uint8";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "account";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "amount";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "mint";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "bool";
        readonly type: "bool";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "minter";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "name";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "string";
        readonly type: "string";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "owner";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "renounceOwnership";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_minter";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "setMinter";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "symbol";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "string";
        readonly type: "string";
    }];
    readonly stateMutability: "view";
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
        readonly name: "newOwner";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "transferOwnership";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}];
export declare const sandAbi: readonly [{
    readonly type: "constructor";
    readonly inputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "spender";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "allowance";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "needed";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "ERC20InsufficientAllowance";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "sender";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "balance";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "needed";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "ERC20InsufficientBalance";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "approver";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "ERC20InvalidApprover";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "receiver";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "ERC20InvalidReceiver";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "sender";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "ERC20InvalidSender";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "spender";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "ERC20InvalidSpender";
}, {
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
    readonly name: "decimals";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint8";
        readonly type: "uint8";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "account";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "value";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "mint";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "name";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "string";
        readonly type: "string";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "symbol";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "string";
        readonly type: "string";
    }];
    readonly stateMutability: "view";
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
}];
export declare const safeCastAbi: readonly [{
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "bits";
        readonly internalType: "uint8";
        readonly type: "uint8";
    }, {
        readonly name: "value";
        readonly internalType: "int256";
        readonly type: "int256";
    }];
    readonly name: "SafeCastOverflowedIntDowncast";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "value";
        readonly internalType: "int256";
        readonly type: "int256";
    }];
    readonly name: "SafeCastOverflowedIntToUint";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "bits";
        readonly internalType: "uint8";
        readonly type: "uint8";
    }, {
        readonly name: "value";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "SafeCastOverflowedUintDowncast";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "value";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "SafeCastOverflowedUintToInt";
}];
export declare const safeErc20Abi: readonly [{
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "spender";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "currentAllowance";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "requestedDecrease";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "SafeERC20FailedDecreaseAllowance";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "token";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "SafeERC20FailedOperation";
}];
export declare const shortStringsAbi: readonly [{
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "InvalidShortString";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "str";
        readonly internalType: "string";
        readonly type: "string";
    }];
    readonly name: "StringTooLong";
}];
export declare const stateAbi: readonly [{
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
    readonly inputs: readonly [];
    readonly name: "weth";
    readonly outputs: readonly [{
        readonly name: "weth_";
        readonly internalType: "contract IWETH9";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
}];
export declare const stringsAbi: readonly [{
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "value";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "length";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "StringsInsufficientHexLength";
}];
export declare const tickMathAbi: readonly [{
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "tick";
        readonly internalType: "int256";
        readonly type: "int256";
    }];
    readonly name: "TickMaxExceeded";
}];
export declare const transferLibAbi: readonly [{
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
}];
export declare const usdcAbi: readonly [{
    readonly type: "constructor";
    readonly inputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "spender";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "allowance";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "needed";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "ERC20InsufficientAllowance";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "sender";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "balance";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "needed";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "ERC20InsufficientBalance";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "approver";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "ERC20InvalidApprover";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "receiver";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "ERC20InvalidReceiver";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "sender";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "ERC20InvalidSender";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "spender";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "ERC20InvalidSpender";
}, {
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
    readonly name: "decimals";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint8";
        readonly type: "uint8";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "account";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "value";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "mint";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "name";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "string";
        readonly type: "string";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "symbol";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "string";
        readonly type: "string";
    }];
    readonly stateMutability: "view";
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
}];
export declare const usdtAbi: readonly [{
    readonly type: "constructor";
    readonly inputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "spender";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "allowance";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "needed";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "ERC20InsufficientAllowance";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "sender";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "balance";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "needed";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "ERC20InsufficientBalance";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "approver";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "ERC20InvalidApprover";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "receiver";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "ERC20InvalidReceiver";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "sender";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "ERC20InvalidSender";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "spender";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "ERC20InvalidSpender";
}, {
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
    readonly name: "decimals";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint8";
        readonly type: "uint8";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "account";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "value";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "mint";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "name";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "string";
        readonly type: "string";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "symbol";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "string";
        readonly type: "string";
    }];
    readonly stateMutability: "view";
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
}];
export declare const votesAbi: readonly [{
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "CheckpointUnorderedInsertion";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "ECDSAInvalidSignature";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "length";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "ECDSAInvalidSignatureLength";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "s";
        readonly internalType: "bytes32";
        readonly type: "bytes32";
    }];
    readonly name: "ECDSAInvalidSignatureS";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "timepoint";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "clock";
        readonly internalType: "uint48";
        readonly type: "uint48";
    }];
    readonly name: "ERC5805FutureLookup";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "ERC6372InconsistentClock";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "account";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "currentNonce";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "InvalidAccountNonce";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "InvalidShortString";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "bits";
        readonly internalType: "uint8";
        readonly type: "uint8";
    }, {
        readonly name: "value";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "SafeCastOverflowedUintDowncast";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "str";
        readonly internalType: "string";
        readonly type: "string";
    }];
    readonly name: "StringTooLong";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "expiry";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "VotesExpiredSignature";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "delegator";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "fromDelegate";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "toDelegate";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }];
    readonly name: "DelegateChanged";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "delegate";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "previousVotes";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }, {
        readonly name: "newVotes";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }];
    readonly name: "DelegateVotesChanged";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [];
    readonly name: "EIP712DomainChanged";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "CLOCK_MODE";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "string";
        readonly type: "string";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "clock";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint48";
        readonly type: "uint48";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "delegatee";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "delegate";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "delegatee";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "nonce";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "expiry";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "v";
        readonly internalType: "uint8";
        readonly type: "uint8";
    }, {
        readonly name: "r";
        readonly internalType: "bytes32";
        readonly type: "bytes32";
    }, {
        readonly name: "s";
        readonly internalType: "bytes32";
        readonly type: "bytes32";
    }];
    readonly name: "delegateBySig";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "account";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "delegates";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "eip712Domain";
    readonly outputs: readonly [{
        readonly name: "fields";
        readonly internalType: "bytes1";
        readonly type: "bytes1";
    }, {
        readonly name: "name";
        readonly internalType: "string";
        readonly type: "string";
    }, {
        readonly name: "version";
        readonly internalType: "string";
        readonly type: "string";
    }, {
        readonly name: "chainId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "verifyingContract";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "salt";
        readonly internalType: "bytes32";
        readonly type: "bytes32";
    }, {
        readonly name: "extensions";
        readonly internalType: "uint256[]";
        readonly type: "uint256[]";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "timepoint";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "getPastTotalSupply";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "account";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "timepoint";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "getPastVotes";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "account";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "getVotes";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "owner";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "nonces";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}];
export declare const votingDistributorAbi: readonly [{
    readonly type: "constructor";
    readonly inputs: readonly [{
        readonly name: "_factory";
        readonly internalType: "contract IMaverickV2Factory";
        readonly type: "address";
    }, {
        readonly name: "_veToken";
        readonly internalType: "contract IERC5805";
        readonly type: "address";
    }, {
        readonly name: "_rewardToken";
        readonly internalType: "contract IERC20";
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
        readonly name: "timestamp";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "epochStart";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "epochEnd";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "EpochEnded";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "FailedInnerCall";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "epoch";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "InvalidEpoch";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "lastPool";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
    }, {
        readonly name: "currentPool";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
    }];
    readonly name: "InvalidTargetOrder";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "pool";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
    }, {
        readonly name: "weight";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "totalWeight";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "voteMultiplier";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "vote";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "InvalidVote";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "MathOverflowedMulDiv";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "pool";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
    }];
    readonly name: "NotFactoryPool";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "NothingToDistribute";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "account";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "OwnableUnauthorizedAccount";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "pool";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
    }, {
        readonly name: "epoch";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "PoolAlreadyDistributed";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "ReentrancyGuardReentrantCall";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "voteForThisPool";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "RolloverNotAllowed";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "bits";
        readonly internalType: "uint8";
        readonly type: "uint8";
    }, {
        readonly name: "value";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "SafeCastOverflowedUintDowncast";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "token";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "SafeERC20FailedOperation";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "SenderHasAlreadyVoted";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "sender";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "epoch";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "SenderHasNoVotingPower";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "SenderNotFactoryPool";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "VoteMultiplierIsZero";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "timestamp";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "epochStart";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "epochEnd";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "VotePeriodNotActive";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "timestamp";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "epochStart";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "epochEnd";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "VotePeriodNotEnded";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "user";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "pool";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
    }, {
        readonly name: "epoch";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "VoterAlreadyCollected";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "ZeroAmount";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "epoch";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: true;
    }, {
        readonly name: "sender";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "amount";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }];
    readonly name: "AddDistributionBudget";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "epoch";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: true;
    }, {
        readonly name: "sender";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "pool";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
        readonly indexed: false;
    }, {
        readonly name: "amount";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }, {
        readonly name: "incentiveToken";
        readonly internalType: "contract IERC20";
        readonly type: "address";
        readonly indexed: false;
    }];
    readonly name: "AddVoteIncentive";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "epoch";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: true;
    }, {
        readonly name: "voter";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "pool";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
        readonly indexed: false;
    }, {
        readonly name: "amount";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }, {
        readonly name: "incentiveToken";
        readonly internalType: "contract IERC20";
        readonly type: "address";
        readonly indexed: false;
    }];
    readonly name: "CollectVoteIncentive";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "epoch";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: true;
    }, {
        readonly name: "sender";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "pool";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
        readonly indexed: false;
    }, {
        readonly name: "rewardTokenAmountDistributed";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }];
    readonly name: "Distribute";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "pool";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
        readonly indexed: false;
    }, {
        readonly name: "token";
        readonly internalType: "contract IERC20";
        readonly type: "address";
        readonly indexed: false;
    }, {
        readonly name: "amount";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }, {
        readonly name: "epoch";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }, {
        readonly name: "sentToOrphanDistributor";
        readonly internalType: "bool";
        readonly type: "bool";
        readonly indexed: false;
    }];
    readonly name: "MoveFeesFromPool";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "orphanDistributor";
        readonly internalType: "contract IOrphanDistributor";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "epoch";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: true;
    }, {
        readonly name: "poolToIncentivize";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "incentiveToken";
        readonly internalType: "contract IERC20";
        readonly type: "address";
        readonly indexed: false;
    }, {
        readonly name: "amount";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }];
    readonly name: "OrphanedIncentive";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "newAdmin";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: false;
    }];
    readonly name: "SetConfigurationAdmin";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "_newCollector";
        readonly internalType: "contract IOrphanDistributor";
        readonly type: "address";
        readonly indexed: false;
    }];
    readonly name: "SetOrphanDistributor";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "poolDistributor";
        readonly internalType: "contract IPoolDistributor";
        readonly type: "address";
        readonly indexed: false;
    }];
    readonly name: "SetPoolDistributor";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "pool";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
        readonly indexed: false;
    }, {
        readonly name: "multiplierD18";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }];
    readonly name: "SetPoolVoteMultiplier";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "epoch";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: true;
    }, {
        readonly name: "voter";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "pool";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
        readonly indexed: false;
    }, {
        readonly name: "vote";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }];
    readonly name: "Vote";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "EPOCH_PERIOD";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "MIN_MULTIPLIER";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "pool";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
    }, {
        readonly name: "epoch";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "isTokenA";
        readonly internalType: "bool";
        readonly type: "bool";
    }];
    readonly name: "_moveTokenFeesFromPoolToVotingDistributor";
    readonly outputs: readonly [{
        readonly name: "amount";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "pool";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
    }, {
        readonly name: "epoch";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "token";
        readonly internalType: "contract IERC20";
        readonly type: "address";
    }, {
        readonly name: "amount";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "_sendOrphanedAmount";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "amount";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "epoch";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "addDistributionBudget";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "amount";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "addDistributionBudgetCurrentEpoch";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "poolToIncentivize";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
    }, {
        readonly name: "incentiveToken";
        readonly internalType: "contract IERC20";
        readonly type: "address";
    }, {
        readonly name: "amount";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "epoch";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "addVoteIncentive";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "poolToIncentivize";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
    }, {
        readonly name: "incentiveToken";
        readonly internalType: "contract IERC20";
        readonly type: "address";
    }, {
        readonly name: "amount";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "addVoteIncentiveToCurrentEpoch";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "pool";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
    }, {
        readonly name: "incentiveToken";
        readonly internalType: "contract IERC20";
        readonly type: "address";
    }, {
        readonly name: "epoch";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "collectVoteIncentive";
    readonly outputs: readonly [{
        readonly name: "amount";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "user";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "pool";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
    }, {
        readonly name: "incentiveToken";
        readonly internalType: "contract IERC20";
        readonly type: "address";
    }, {
        readonly name: "epoch";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "collectVoteIncentiveAmount";
    readonly outputs: readonly [{
        readonly name: "amount";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "configurationAdmin";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "currentEpoch";
    readonly outputs: readonly [{
        readonly name: "epoch";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "pool";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
    }, {
        readonly name: "epoch";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "distribute";
    readonly outputs: readonly [{
        readonly name: "amountDistributed";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "pool";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
    }, {
        readonly name: "epoch";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "distributeAmount";
    readonly outputs: readonly [{
        readonly name: "amountDistributed";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "offset";
        readonly internalType: "int256";
        readonly type: "int256";
    }];
    readonly name: "epochAtOffset";
    readonly outputs: readonly [{
        readonly name: "epoch";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "epoch";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "epochEnd";
    readonly outputs: readonly [{
        readonly name: "end";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "pure";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "epoch";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "epochIsOver";
    readonly outputs: readonly [{
        readonly name: "isOver";
        readonly internalType: "bool";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "factory";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "contract IMaverickV2Factory";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "epoch";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "getBudget";
    readonly outputs: readonly [{
        readonly name: "budget";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "epoch";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "bounds";
        readonly internalType: "struct IVotingDistributor.IndexBounds";
        readonly type: "tuple";
        readonly components: readonly [{
            readonly name: "startIndex";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "endIndex";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "incentiveStartIndex";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "incentiveEndIndex";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
    }];
    readonly name: "getCheckpointData";
    readonly outputs: readonly [{
        readonly name: "budget";
        readonly internalType: "uint128";
        readonly type: "uint128";
    }, {
        readonly name: "totalVote";
        readonly internalType: "uint128";
        readonly type: "uint128";
    }, {
        readonly name: "pools";
        readonly internalType: "struct IVotingDistributor.PoolView[]";
        readonly type: "tuple[]";
        readonly components: readonly [{
            readonly name: "pool";
            readonly internalType: "contract IMaverickV2Pool";
            readonly type: "address";
        }, {
            readonly name: "votes";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "hasDistributed";
            readonly internalType: "bool";
            readonly type: "bool";
        }, {
            readonly name: "incentiveTokens";
            readonly internalType: "contract IERC20[]";
            readonly type: "address[]";
        }, {
            readonly name: "voteIncentives";
            readonly internalType: "uint256[]";
            readonly type: "uint256[]";
        }, {
            readonly name: "incentiveTokenCount";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
    }, {
        readonly name: "totalCount";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "pool";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
    }, {
        readonly name: "epoch";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "startIndex";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "endIndex";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "getIncentiveData";
    readonly outputs: readonly [{
        readonly name: "incentiveTokens";
        readonly internalType: "contract IERC20[]";
        readonly type: "address[]";
    }, {
        readonly name: "voteIncentives";
        readonly internalType: "uint256[]";
        readonly type: "uint256[]";
    }, {
        readonly name: "totalCount";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "pool";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
    }, {
        readonly name: "epoch";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "getPoolData";
    readonly outputs: readonly [{
        readonly name: "voteForThisPool";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "totalVoteForEpoch";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "hasDistributed";
        readonly internalType: "bool";
        readonly type: "bool";
    }, {
        readonly name: "epochBudget";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "disbursementAmount";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "epoch";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "getTotalVote";
    readonly outputs: readonly [{
        readonly name: "totalVote";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "user";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "epoch";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "bounds";
        readonly internalType: "struct IVotingDistributor.IndexBounds";
        readonly type: "tuple";
        readonly components: readonly [{
            readonly name: "startIndex";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "endIndex";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "incentiveStartIndex";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "incentiveEndIndex";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
    }];
    readonly name: "getVoterClaimData";
    readonly outputs: readonly [{
        readonly name: "claimData";
        readonly internalType: "struct IVotingDistributor.ClaimData[]";
        readonly type: "tuple[]";
        readonly components: readonly [{
            readonly name: "pool";
            readonly internalType: "contract IMaverickV2Pool";
            readonly type: "address";
        }, {
            readonly name: "incentiveTokenCount";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }, {
            readonly name: "incentiveTokens";
            readonly internalType: "contract IERC20[]";
            readonly type: "address[]";
        }, {
            readonly name: "incentiveAmounts";
            readonly internalType: "uint256[]";
            readonly type: "uint256[]";
        }, {
            readonly name: "hasCollected";
            readonly internalType: "bool[]";
            readonly type: "bool[]";
        }];
    }, {
        readonly name: "totalCount";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "user";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "epoch";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "getVoterData";
    readonly outputs: readonly [{
        readonly name: "voterData";
        readonly internalType: "struct IVotingDistributor.VoterData";
        readonly type: "tuple";
        readonly components: readonly [{
            readonly name: "hasVoted";
            readonly internalType: "bool";
            readonly type: "bool";
        }, {
            readonly name: "votes";
            readonly internalType: "uint128[]";
            readonly type: "uint128[]";
        }, {
            readonly name: "pools";
            readonly internalType: "contract IMaverickV2Pool[]";
            readonly type: "address[]";
        }];
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "user";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "pool";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
    }, {
        readonly name: "incentiveToken";
        readonly internalType: "contract IERC20";
        readonly type: "address";
    }, {
        readonly name: "epoch";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "hasCollected";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "bool";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "user";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "epoch";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "hasVoted";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "bool";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "epoch";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "isEpoch";
    readonly outputs: readonly [{
        readonly name: "_isEpoch";
        readonly internalType: "bool";
        readonly type: "bool";
    }];
    readonly stateMutability: "pure";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "lastEpoch";
    readonly outputs: readonly [{
        readonly name: "epoch";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "pool";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
    }];
    readonly name: "moveFeesFromPoolToVotingDistributor";
    readonly outputs: readonly [{
        readonly name: "amountA";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "amountB";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
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
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "nextEpoch";
    readonly outputs: readonly [{
        readonly name: "epoch";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "orphanDistributor";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "contract IOrphanDistributor";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "pool";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
    }, {
        readonly name: "epoch";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "token";
        readonly internalType: "contract IERC20";
        readonly type: "address";
    }];
    readonly name: "orphanedIncentives";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "poolDistributor";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "contract IPoolDistributor";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "rewardToken";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "contract IERC20";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "poolToIncentivize";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
    }, {
        readonly name: "incentiveToken";
        readonly internalType: "contract IERC20";
        readonly type: "address";
    }, {
        readonly name: "epoch";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "rollUnvotedIncentive";
    readonly outputs: readonly [{
        readonly name: "amount";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_newAdmin";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "setConfigurationAdmin";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_newCollector";
        readonly internalType: "contract IOrphanDistributor";
        readonly type: "address";
    }];
    readonly name: "setOrphanDistributor";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_poolDistributor";
        readonly internalType: "contract IPoolDistributor";
        readonly type: "address";
    }];
    readonly name: "setPoolDistributor";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "pool";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
    }, {
        readonly name: "multiplierD18";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "setPoolVoteMultiplier";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "pool";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
    }, {
        readonly name: "epoch";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "totalAFee";
    readonly outputs: readonly [{
        readonly name: "fee";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "pool";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
    }, {
        readonly name: "epoch";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "totalBFee";
    readonly outputs: readonly [{
        readonly name: "fee";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "veToken";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "contract IERC5805";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "voteTargets";
        readonly internalType: "contract IMaverickV2Pool[]";
        readonly type: "address[]";
    }, {
        readonly name: "weights";
        readonly internalType: "uint256[]";
        readonly type: "uint256[]";
    }];
    readonly name: "vote";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "pool";
        readonly internalType: "contract IMaverickV2Pool";
        readonly type: "address";
    }];
    readonly name: "voteMultiplier";
    readonly outputs: readonly [{
        readonly name: "multiplierD18";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "epoch";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "votingIsActive";
    readonly outputs: readonly [{
        readonly name: "isActive";
        readonly internalType: "bool";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
}];
export declare const votingEscrowAbi: readonly [{
    readonly type: "constructor";
    readonly inputs: readonly [{
        readonly name: "_caller";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "CheckpointUnorderedInsertion";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "ECDSAInvalidSignature";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "length";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "ECDSAInvalidSignatureLength";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "s";
        readonly internalType: "bytes32";
        readonly type: "bytes32";
    }];
    readonly name: "ECDSAInvalidSignatureS";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "increasedSupply";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "cap";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "ERC20ExceededSafeSupply";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "spender";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "allowance";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "needed";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "ERC20InsufficientAllowance";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "sender";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "balance";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "needed";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "ERC20InsufficientBalance";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "approver";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "ERC20InvalidApprover";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "receiver";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "ERC20InvalidReceiver";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "sender";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "ERC20InvalidSender";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "spender";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "ERC20InvalidSpender";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "timepoint";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "clock";
        readonly internalType: "uint48";
        readonly type: "uint48";
    }];
    readonly name: "ERC5805FutureLookup";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "ERC6372InconsistentClock";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "account";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "currentNonce";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "InvalidAccountNonce";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "InvalidShortString";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "MathOverflowedMulDiv";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "x";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "y";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "PRBMath_MulDiv18_Overflow";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "x";
        readonly internalType: "UD60x18";
        readonly type: "uint256";
    }];
    readonly name: "PRBMath_UD60x18_Exp2_InputTooBig";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "x";
        readonly internalType: "UD60x18";
        readonly type: "uint256";
    }];
    readonly name: "PRBMath_UD60x18_Log_InputTooSmall";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "bits";
        readonly internalType: "uint8";
        readonly type: "uint8";
    }, {
        readonly name: "value";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "SafeCastOverflowedUintDowncast";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "str";
        readonly internalType: "string";
        readonly type: "string";
    }];
    readonly name: "StringTooLong";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "expiry";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "VotesExpiredSignature";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "VotingEscrowDelegationNotSupported";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "VotingEscrowInvalidAddress";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "VotingEscrowInvalidAmount";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "duration";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "minDuration";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "maxDuration";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "VotingEscrowInvalidDuration";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "newEnd";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "oldEnd";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "VotingEscrowInvalidEndTime";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "VotingEscrowOnlyCallerAllowed";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "proportion";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "VotingEscrowProportionMustBeLessThanOne";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "VotingEscrowStakeAlreadyRedeemed";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "currentTime";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "endTime";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "VotingEscrowStakeStillLocked";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "VotingEscrowTransferNotSupported";
}, {
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
        readonly name: "delegator";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "fromDelegate";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "toDelegate";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }];
    readonly name: "DelegateChanged";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "delegate";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "previousVotes";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }, {
        readonly name: "newVotes";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }];
    readonly name: "DelegateVotesChanged";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [];
    readonly name: "EIP712DomainChanged";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "user";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }, {
        readonly name: "";
        readonly internalType: "struct IVotingEscrowBase.Lockup";
        readonly type: "tuple";
        readonly components: readonly [{
            readonly name: "amount";
            readonly internalType: "uint128";
            readonly type: "uint128";
        }, {
            readonly name: "end";
            readonly internalType: "uint128";
            readonly type: "uint128";
        }, {
            readonly name: "votes";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly indexed: false;
    }];
    readonly name: "Stake";
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
        readonly name: "user";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }, {
        readonly name: "";
        readonly internalType: "struct IVotingEscrowBase.Lockup";
        readonly type: "tuple";
        readonly components: readonly [{
            readonly name: "amount";
            readonly internalType: "uint128";
            readonly type: "uint128";
        }, {
            readonly name: "end";
            readonly internalType: "uint128";
            readonly type: "uint128";
        }, {
            readonly name: "votes";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
        readonly indexed: false;
    }];
    readonly name: "Unstake";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "CLOCK_MODE";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "string";
        readonly type: "string";
    }];
    readonly stateMutability: "pure";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "MAX_STAKE_DURATION";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "MIN_STAKE_DURATION";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "YEAR_BASE";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
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
        readonly name: "";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "approve";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "bool";
        readonly type: "bool";
    }];
    readonly stateMutability: "pure";
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
    readonly name: "caller";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "account";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "pos";
        readonly internalType: "uint32";
        readonly type: "uint32";
    }];
    readonly name: "checkpoints";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "struct Checkpoints.Checkpoint208";
        readonly type: "tuple";
        readonly components: readonly [{
            readonly name: "_key";
            readonly internalType: "uint48";
            readonly type: "uint48";
        }, {
            readonly name: "_value";
            readonly internalType: "uint208";
            readonly type: "uint208";
        }];
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "clock";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint48";
        readonly type: "uint48";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "decimals";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint8";
        readonly type: "uint8";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "delegate";
    readonly outputs: readonly [];
    readonly stateMutability: "pure";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "delegatee";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "nonce";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "expiry";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "v";
        readonly internalType: "uint8";
        readonly type: "uint8";
    }, {
        readonly name: "r";
        readonly internalType: "bytes32";
        readonly type: "bytes32";
    }, {
        readonly name: "s";
        readonly internalType: "bytes32";
        readonly type: "bytes32";
    }];
    readonly name: "delegateBySig";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "account";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "delegatee";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "delegateFrom";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "account";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "delegates";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "eip712Domain";
    readonly outputs: readonly [{
        readonly name: "fields";
        readonly internalType: "bytes1";
        readonly type: "bytes1";
    }, {
        readonly name: "name";
        readonly internalType: "string";
        readonly type: "string";
    }, {
        readonly name: "version";
        readonly internalType: "string";
        readonly type: "string";
    }, {
        readonly name: "chainId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "verifyingContract";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "salt";
        readonly internalType: "bytes32";
        readonly type: "bytes32";
    }, {
        readonly name: "extensions";
        readonly internalType: "uint256[]";
        readonly type: "uint256[]";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "account";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "duration";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "amount";
        readonly internalType: "uint128";
        readonly type: "uint128";
    }];
    readonly name: "extend";
    readonly outputs: readonly [{
        readonly name: "newLockup";
        readonly internalType: "struct IVotingEscrowBase.Lockup";
        readonly type: "tuple";
        readonly components: readonly [{
            readonly name: "amount";
            readonly internalType: "uint128";
            readonly type: "uint128";
        }, {
            readonly name: "end";
            readonly internalType: "uint128";
            readonly type: "uint128";
        }, {
            readonly name: "votes";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "staker";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "getLockup";
    readonly outputs: readonly [{
        readonly name: "lockup";
        readonly internalType: "struct IVotingEscrowBase.Lockup";
        readonly type: "tuple";
        readonly components: readonly [{
            readonly name: "amount";
            readonly internalType: "uint128";
            readonly type: "uint128";
        }, {
            readonly name: "end";
            readonly internalType: "uint128";
            readonly type: "uint128";
        }, {
            readonly name: "votes";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "timepoint";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "getPastTotalSupply";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "account";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "timepoint";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "getPastVotes";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "account";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "getVotes";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "account";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "tokenIds";
        readonly internalType: "uint256[]";
        readonly type: "uint256[]";
    }];
    readonly name: "merge";
    readonly outputs: readonly [{
        readonly name: "newLockup";
        readonly internalType: "struct IVotingEscrowBase.Lockup";
        readonly type: "tuple";
        readonly components: readonly [{
            readonly name: "amount";
            readonly internalType: "uint128";
            readonly type: "uint128";
        }, {
            readonly name: "end";
            readonly internalType: "uint128";
            readonly type: "uint128";
        }, {
            readonly name: "votes";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "name";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "string";
        readonly type: "string";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "owner";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "nonces";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "account";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "numCheckpoints";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint32";
        readonly type: "uint32";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "amount";
        readonly internalType: "uint128";
        readonly type: "uint128";
    }, {
        readonly name: "duration";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "previewVotes";
    readonly outputs: readonly [{
        readonly name: "lockup";
        readonly internalType: "struct IVotingEscrowBase.Lockup";
        readonly type: "tuple";
        readonly components: readonly [{
            readonly name: "amount";
            readonly internalType: "uint128";
            readonly type: "uint128";
        }, {
            readonly name: "end";
            readonly internalType: "uint128";
            readonly type: "uint128";
        }, {
            readonly name: "votes";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "account";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "tokenIdToSplit";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "newTokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "splitProportionD18";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "splitLockup";
    readonly outputs: readonly [{
        readonly name: "lockup1";
        readonly internalType: "struct IVotingEscrowBase.Lockup";
        readonly type: "tuple";
        readonly components: readonly [{
            readonly name: "amount";
            readonly internalType: "uint128";
            readonly type: "uint128";
        }, {
            readonly name: "end";
            readonly internalType: "uint128";
            readonly type: "uint128";
        }, {
            readonly name: "votes";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
    }, {
        readonly name: "lockup2";
        readonly internalType: "struct IVotingEscrowBase.Lockup";
        readonly type: "tuple";
        readonly components: readonly [{
            readonly name: "amount";
            readonly internalType: "uint128";
            readonly type: "uint128";
        }, {
            readonly name: "end";
            readonly internalType: "uint128";
            readonly type: "uint128";
        }, {
            readonly name: "votes";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "to";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "duration";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "amount";
        readonly internalType: "uint128";
        readonly type: "uint128";
    }];
    readonly name: "stake";
    readonly outputs: readonly [{
        readonly name: "lockup";
        readonly internalType: "struct IVotingEscrowBase.Lockup";
        readonly type: "tuple";
        readonly components: readonly [{
            readonly name: "amount";
            readonly internalType: "uint128";
            readonly type: "uint128";
        }, {
            readonly name: "end";
            readonly internalType: "uint128";
            readonly type: "uint128";
        }, {
            readonly name: "votes";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "startTimestamp";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "symbol";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "string";
        readonly type: "string";
    }];
    readonly stateMutability: "view";
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
        readonly name: "";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "transfer";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "bool";
        readonly type: "bool";
    }];
    readonly stateMutability: "pure";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "transferFrom";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "bool";
        readonly type: "bool";
    }];
    readonly stateMutability: "pure";
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
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "transferLockup";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "account";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "unstake";
    readonly outputs: readonly [{
        readonly name: "lockup";
        readonly internalType: "struct IVotingEscrowBase.Lockup";
        readonly type: "tuple";
        readonly components: readonly [{
            readonly name: "amount";
            readonly internalType: "uint128";
            readonly type: "uint128";
        }, {
            readonly name: "end";
            readonly internalType: "uint128";
            readonly type: "uint128";
        }, {
            readonly name: "votes";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
    }];
    readonly stateMutability: "nonpayable";
}];
export declare const votingEscrowNftAbi: readonly [{
    readonly type: "constructor";
    readonly inputs: readonly [{
        readonly name: "_baseToken";
        readonly internalType: "contract IERC20";
        readonly type: "address";
    }, {
        readonly name: "_factory";
        readonly internalType: "contract Ownable";
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
    readonly inputs: readonly [];
    readonly name: "AlreadyInitialized";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "ERC721EnumerableForbiddenBatchMint";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "sender";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "owner";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "ERC721IncorrectOwner";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "operator";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "ERC721InsufficientApproval";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "approver";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "ERC721InvalidApprover";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "operator";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "ERC721InvalidOperator";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "owner";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "ERC721InvalidOwner";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "receiver";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "ERC721InvalidReceiver";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "sender";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "ERC721InvalidSender";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "ERC721NonexistentToken";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "owner";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "index";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "ERC721OutOfBoundsIndex";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "FailedInnerCall";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "account";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "OwnableUnauthorizedAccount";
}, {
    readonly type: "error";
    readonly inputs: readonly [];
    readonly name: "PermalockNotenabled";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "token";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "SafeERC20FailedOperation";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "tokenId1";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "tokenId2";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "TokenIdsHaveDifferentOwners";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "expiry";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "VotesExpiredSignature";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "owner";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "approved";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: true;
    }];
    readonly name: "Approval";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "owner";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "operator";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "approved";
        readonly internalType: "bool";
        readonly type: "bool";
        readonly indexed: false;
    }];
    readonly name: "ApprovalForAll";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "delegator";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "fromDelegate";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "toDelegate";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }];
    readonly name: "DelegateChanged";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "delegate";
        readonly internalType: "address";
        readonly type: "address";
        readonly indexed: true;
    }, {
        readonly name: "previousVotes";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }, {
        readonly name: "newVotes";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }];
    readonly name: "DelegateVotesChanged";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "nftImage";
        readonly internalType: "contract INftImage";
        readonly type: "address";
        readonly indexed: false;
    }];
    readonly name: "SetImage";
}, {
    readonly type: "event";
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: false;
    }, {
        readonly name: "state";
        readonly internalType: "bool";
        readonly type: "bool";
        readonly indexed: false;
    }];
    readonly name: "TogglePermalockAllowed";
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
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
        readonly indexed: true;
    }];
    readonly name: "Transfer";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "CLOCK_MODE";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "string";
        readonly type: "string";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "to";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "approve";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "owner";
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
    readonly name: "baseToken";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "contract IERC20";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "spender";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "checkAuthorized";
    readonly outputs: readonly [{
        readonly name: "owner";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "clock";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint48";
        readonly type: "uint48";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "delegatee";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "delegate";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "delegatee";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "nonce";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "expiry";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "v";
        readonly internalType: "uint8";
        readonly type: "uint8";
    }, {
        readonly name: "r";
        readonly internalType: "bytes32";
        readonly type: "bytes32";
    }, {
        readonly name: "s";
        readonly internalType: "bytes32";
        readonly type: "bytes32";
    }];
    readonly name: "delegateBySig";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "account";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "delegates";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "disablePermalock";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "enablePermalock";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "duration";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "amount";
        readonly internalType: "uint128";
        readonly type: "uint128";
    }];
    readonly name: "extend";
    readonly outputs: readonly [{
        readonly name: "newLockup";
        readonly internalType: "struct IVotingEscrowBase.Lockup";
        readonly type: "tuple";
        readonly components: readonly [{
            readonly name: "amount";
            readonly internalType: "uint128";
            readonly type: "uint128";
        }, {
            readonly name: "end";
            readonly internalType: "uint128";
            readonly type: "uint128";
        }, {
            readonly name: "votes";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "extendPermalock";
    readonly outputs: readonly [{
        readonly name: "newLockup";
        readonly internalType: "struct IVotingEscrowBase.Lockup";
        readonly type: "tuple";
        readonly components: readonly [{
            readonly name: "amount";
            readonly internalType: "uint128";
            readonly type: "uint128";
        }, {
            readonly name: "end";
            readonly internalType: "uint128";
            readonly type: "uint128";
        }, {
            readonly name: "votes";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "factory";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "contract Ownable";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "getApproved";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "timepoint";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "getPastTotalSupply";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "account";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "timepoint";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "getPastVotes";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "getTokenIdInfo";
    readonly outputs: readonly [{
        readonly name: "lockup";
        readonly internalType: "struct IVotingEscrowBase.Lockup";
        readonly type: "tuple";
        readonly components: readonly [{
            readonly name: "amount";
            readonly internalType: "uint128";
            readonly type: "uint128";
        }, {
            readonly name: "end";
            readonly internalType: "uint128";
            readonly type: "uint128";
        }, {
            readonly name: "votes";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "account";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "getVotes";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_ve";
        readonly internalType: "contract IVotingEscrow";
        readonly type: "address";
    }];
    readonly name: "initialize";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "owner";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "operator";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "isApprovedForAll";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "bool";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "tokenIds";
        readonly internalType: "uint256[]";
        readonly type: "uint256[]";
    }];
    readonly name: "merge";
    readonly outputs: readonly [{
        readonly name: "newLockup";
        readonly internalType: "struct IVotingEscrowBase.Lockup";
        readonly type: "tuple";
        readonly components: readonly [{
            readonly name: "amount";
            readonly internalType: "uint128";
            readonly type: "uint128";
        }, {
            readonly name: "end";
            readonly internalType: "uint128";
            readonly type: "uint128";
        }, {
            readonly name: "votes";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
    }];
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
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "name";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "string";
        readonly type: "string";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "nextTokenId";
    readonly outputs: readonly [{
        readonly name: "nextTokenId_";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "nftImage";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "contract INftImage";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "ownerOf";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "parameters";
    readonly outputs: readonly [{
        readonly name: "yearBase";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "startTimestamp";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "minStakeDuration";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "maxStakeDuration";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "permalockAllowed";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "bool";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "amount";
        readonly internalType: "uint128";
        readonly type: "uint128";
    }, {
        readonly name: "duration";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "previewVotes";
    readonly outputs: readonly [{
        readonly name: "lockup";
        readonly internalType: "struct IVotingEscrowBase.Lockup";
        readonly type: "tuple";
        readonly components: readonly [{
            readonly name: "amount";
            readonly internalType: "uint128";
            readonly type: "uint128";
        }, {
            readonly name: "end";
            readonly internalType: "uint128";
            readonly type: "uint128";
        }, {
            readonly name: "votes";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
    }];
    readonly stateMutability: "view";
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
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "safeTransferFrom";
    readonly outputs: readonly [];
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
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "data";
        readonly internalType: "bytes";
        readonly type: "bytes";
    }];
    readonly name: "safeTransferFrom";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "operator";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "approved";
        readonly internalType: "bool";
        readonly type: "bool";
    }];
    readonly name: "setApprovalForAll";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "_nftImage";
        readonly internalType: "contract INftImage";
        readonly type: "address";
    }];
    readonly name: "setImage";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "splitProportionD18";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "split";
    readonly outputs: readonly [{
        readonly name: "newTokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "lockup1";
        readonly internalType: "struct IVotingEscrowBase.Lockup";
        readonly type: "tuple";
        readonly components: readonly [{
            readonly name: "amount";
            readonly internalType: "uint128";
            readonly type: "uint128";
        }, {
            readonly name: "end";
            readonly internalType: "uint128";
            readonly type: "uint128";
        }, {
            readonly name: "votes";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
    }, {
        readonly name: "lockup2";
        readonly internalType: "struct IVotingEscrowBase.Lockup";
        readonly type: "tuple";
        readonly components: readonly [{
            readonly name: "amount";
            readonly internalType: "uint128";
            readonly type: "uint128";
        }, {
            readonly name: "end";
            readonly internalType: "uint128";
            readonly type: "uint128";
        }, {
            readonly name: "votes";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "to";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "duration";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "amount";
        readonly internalType: "uint128";
        readonly type: "uint128";
    }];
    readonly name: "stake";
    readonly outputs: readonly [{
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "lockup";
        readonly internalType: "struct IVotingEscrowBase.Lockup";
        readonly type: "tuple";
        readonly components: readonly [{
            readonly name: "amount";
            readonly internalType: "uint128";
            readonly type: "uint128";
        }, {
            readonly name: "end";
            readonly internalType: "uint128";
            readonly type: "uint128";
        }, {
            readonly name: "votes";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "duration";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "amount";
        readonly internalType: "uint128";
        readonly type: "uint128";
    }];
    readonly name: "stakeToSender";
    readonly outputs: readonly [{
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "lockup";
        readonly internalType: "struct IVotingEscrowBase.Lockup";
        readonly type: "tuple";
        readonly components: readonly [{
            readonly name: "amount";
            readonly internalType: "uint128";
            readonly type: "uint128";
        }, {
            readonly name: "end";
            readonly internalType: "uint128";
            readonly type: "uint128";
        }, {
            readonly name: "votes";
            readonly internalType: "uint256";
            readonly type: "uint256";
        }];
    }];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "interfaceId";
        readonly internalType: "bytes4";
        readonly type: "bytes4";
    }];
    readonly name: "supportsInterface";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "bool";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "symbol";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "string";
        readonly type: "string";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "index";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "tokenByIndex";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "owner";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "tokenIdsOfOwner";
    readonly outputs: readonly [{
        readonly name: "tokenIds";
        readonly internalType: "uint256[]";
        readonly type: "uint256[]";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "owner";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "index";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "tokenOfOwnerByIndex";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "ownerToCheck";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "index";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "tokenOfOwnerByIndexExists";
    readonly outputs: readonly [{
        readonly name: "exists";
        readonly internalType: "bool";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "tokenURI";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "string";
        readonly type: "string";
    }];
    readonly stateMutability: "view";
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
        readonly name: "from";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "to";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "transferFrom";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "baseTokenRecipient";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "unstake";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "tokenId";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "unstakeToSender";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "ve";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "contract IVotingEscrow";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
}];
export declare const wbtcAbi: readonly [{
    readonly type: "constructor";
    readonly inputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "spender";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "allowance";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "needed";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "ERC20InsufficientAllowance";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "sender";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "balance";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }, {
        readonly name: "needed";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "ERC20InsufficientBalance";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "approver";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "ERC20InvalidApprover";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "receiver";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "ERC20InvalidReceiver";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "sender";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "ERC20InvalidSender";
}, {
    readonly type: "error";
    readonly inputs: readonly [{
        readonly name: "spender";
        readonly internalType: "address";
        readonly type: "address";
    }];
    readonly name: "ERC20InvalidSpender";
}, {
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
    readonly name: "decimals";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "uint8";
        readonly type: "uint8";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [{
        readonly name: "account";
        readonly internalType: "address";
        readonly type: "address";
    }, {
        readonly name: "value";
        readonly internalType: "uint256";
        readonly type: "uint256";
    }];
    readonly name: "mint";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "name";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "string";
        readonly type: "string";
    }];
    readonly stateMutability: "view";
}, {
    readonly type: "function";
    readonly inputs: readonly [];
    readonly name: "symbol";
    readonly outputs: readonly [{
        readonly name: "";
        readonly internalType: "string";
        readonly type: "string";
    }];
    readonly stateMutability: "view";
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
}];
