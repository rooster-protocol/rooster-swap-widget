//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Address
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const addressAbi = [
  {
    type: 'error',
    inputs: [{ name: 'target', internalType: 'address', type: 'address' }],
    name: 'AddressEmptyCode',
  },
  {
    type: 'error',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'AddressInsufficientBalance',
  },
  { type: 'error', inputs: [], name: 'FailedInnerCall' },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ArgPacker
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const argPackerAbi = [
  { type: 'error', inputs: [], name: 'BytesLibSliceOutOfBounds' },
  { type: 'error', inputs: [], name: 'BytesLibSliceOverflow' },
  {
    type: 'error',
    inputs: [
      { name: 'bits', internalType: 'uint8', type: 'uint8' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'SafeCastOverflowedUintDowncast',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'args',
        internalType: 'struct IMaverickV2Pool.AddLiquidityParams',
        type: 'tuple',
        components: [
          { name: 'kind', internalType: 'uint8', type: 'uint8' },
          { name: 'ticks', internalType: 'int32[]', type: 'int32[]' },
          { name: 'amounts', internalType: 'uint128[]', type: 'uint128[]' },
        ],
      },
    ],
    name: 'packAddLiquidityArgs',
    outputs: [{ name: 'argsPacked', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'args',
        internalType: 'struct IMaverickV2Pool.AddLiquidityParams[]',
        type: 'tuple[]',
        components: [
          { name: 'kind', internalType: 'uint8', type: 'uint8' },
          { name: 'ticks', internalType: 'int32[]', type: 'int32[]' },
          { name: 'amounts', internalType: 'uint128[]', type: 'uint128[]' },
        ],
      },
    ],
    name: 'packAddLiquidityArgsArray',
    outputs: [{ name: 'argsPacked', internalType: 'bytes[]', type: 'bytes[]' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [{ name: 'fullArray', internalType: 'uint88[]', type: 'uint88[]' }],
    name: 'packUint88Array',
    outputs: [{ name: 'packedArray', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [{ name: 'argsPacked', internalType: 'bytes', type: 'bytes' }],
    name: 'unpackAddLiquidityArgs',
    outputs: [
      {
        name: 'args',
        internalType: 'struct IMaverickV2Pool.AddLiquidityParams',
        type: 'tuple',
        components: [
          { name: 'kind', internalType: 'uint8', type: 'uint8' },
          { name: 'ticks', internalType: 'int32[]', type: 'int32[]' },
          { name: 'amounts', internalType: 'uint128[]', type: 'uint128[]' },
        ],
      },
    ],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [{ name: 'packedArray', internalType: 'bytes', type: 'bytes' }],
    name: 'unpackUint88Array',
    outputs: [
      { name: 'fullArray', internalType: 'uint88[]', type: 'uint88[]' },
    ],
    stateMutability: 'pure',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ArrayOperations
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const arrayOperationsAbi = [
  {
    type: 'error',
    inputs: [
      { name: 'index', internalType: 'uint256', type: 'uint256' },
      { name: 'duplicateEntry', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ArrayElementsNotUnique',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// BytesLib
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const bytesLibAbi = [
  {
    type: 'error',
    inputs: [
      { name: 'inputLength', internalType: 'uint256', type: 'uint256' },
      { name: 'expectedLength', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'BytesLibInvalidLength',
  },
  { type: 'error', inputs: [], name: 'BytesLibSliceOutOfBounds' },
  { type: 'error', inputs: [], name: 'BytesLibSliceOverflow' },
  { type: 'error', inputs: [], name: 'BytesLibToAddressOutOfBounds' },
  { type: 'error', inputs: [], name: 'BytesLibToBoolOutOfBounds' },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// CallbackOperations
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const callbackOperationsAbi = [
  {
    type: 'error',
    inputs: [{ name: 'target', internalType: 'address', type: 'address' }],
    name: 'AddressEmptyCode',
  },
  {
    type: 'error',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'AddressInsufficientBalance',
  },
  { type: 'error', inputs: [], name: 'BytesLibSliceOutOfBounds' },
  { type: 'error', inputs: [], name: 'BytesLibSliceOverflow' },
  { type: 'error', inputs: [], name: 'BytesLibToAddressOutOfBounds' },
  { type: 'error', inputs: [], name: 'BytesLibToBoolOutOfBounds' },
  { type: 'error', inputs: [], name: 'FailedInnerCall' },
  {
    type: 'error',
    inputs: [
      { name: 'token', internalType: 'address', type: 'address' },
      { name: 'amountMinimum', internalType: 'uint256', type: 'uint256' },
      { name: 'contractBalance', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'PaymentInsufficientBalance',
  },
  { type: 'error', inputs: [], name: 'PaymentSenderNotWETH9' },
  { type: 'error', inputs: [], name: 'RouterNotFactoryPool' },
  {
    type: 'error',
    inputs: [
      { name: 'amountOutMinimum', internalType: 'uint256', type: 'uint256' },
      { name: 'amountOut', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'RouterTooLittleReceived',
  },
  {
    type: 'error',
    inputs: [
      { name: 'amountInMaximum', internalType: 'uint256', type: 'uint256' },
      { name: 'amountIn', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'RouterTooMuchRequested',
  },
  { type: 'error', inputs: [], name: 'RouterZeroSwap' },
  {
    type: 'error',
    inputs: [
      { name: 'token', internalType: 'contract IERC20', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'TransferFailed',
  },
  {
    type: 'error',
    inputs: [
      { name: 'token', internalType: 'contract IERC20', type: 'address' },
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'TransferFromFailed',
  },
  {
    type: 'function',
    inputs: [
      { name: 'recipient', internalType: 'address', type: 'address' },
      { name: 'path', internalType: 'bytes', type: 'bytes' },
      { name: 'amountOut', internalType: 'uint256', type: 'uint256' },
      { name: 'amountInMaximum', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'exactOutputMultiHop',
    outputs: [{ name: 'amountIn', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'recipient', internalType: 'address', type: 'address' },
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
      { name: 'tokenAIn', internalType: 'bool', type: 'bool' },
      { name: 'amountOut', internalType: 'uint256', type: 'uint256' },
      { name: 'amountInMaximum', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'exactOutputSingle',
    outputs: [
      { name: 'amountIn', internalType: 'uint256', type: 'uint256' },
      { name: 'amountOut_', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'recipient', internalType: 'address', type: 'address' },
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
      { name: 'tokenAIn', internalType: 'bool', type: 'bool' },
      { name: 'amountOut', internalType: 'uint256', type: 'uint256' },
      { name: 'tickLimit', internalType: 'int32', type: 'int32' },
    ],
    name: 'exactOutputSingleMinimal',
    outputs: [
      { name: 'amountIn', internalType: 'uint256', type: 'uint256' },
      { name: 'amountOut_', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'factory',
    outputs: [
      {
        name: 'factory_',
        internalType: 'contract IMaverickV2Factory',
        type: 'address',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'recipient', internalType: 'address', type: 'address' },
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
      { name: 'tokenAIn', internalType: 'bool', type: 'bool' },
      { name: 'amountIn', internalType: 'uint256', type: 'uint256' },
      { name: 'tickLimit', internalType: 'int32', type: 'int32' },
      { name: 'amountOutMinimum', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'inputSingleWithTickLimit',
    outputs: [
      { name: 'amountIn_', internalType: 'uint256', type: 'uint256' },
      { name: 'amountOut', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'tokenIn', internalType: 'contract IERC20', type: 'address' },
      { name: 'amountToPay', internalType: 'uint256', type: 'uint256' },
      { name: '', internalType: 'uint256', type: 'uint256' },
      { name: '_data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'maverickV2SwapCallback',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'data', internalType: 'bytes[]', type: 'bytes[]' }],
    name: 'multicall',
    outputs: [{ name: 'results', internalType: 'bytes[]', type: 'bytes[]' }],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'recipient', internalType: 'address', type: 'address' },
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
      { name: 'tokenAIn', internalType: 'bool', type: 'bool' },
      { name: 'amountOut', internalType: 'uint256', type: 'uint256' },
      { name: 'tickLimit', internalType: 'int32', type: 'int32' },
      { name: 'amountInMaximum', internalType: 'uint256', type: 'uint256' },
      { name: 'amountOutMinimum', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'outputSingleWithTickLimit',
    outputs: [
      { name: 'amountIn_', internalType: 'uint256', type: 'uint256' },
      { name: 'amountOut_', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'refundETH',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'token', internalType: 'contract IERC20', type: 'address' },
      { name: 'amountMinimum', internalType: 'uint256', type: 'uint256' },
      { name: 'recipient', internalType: 'address', type: 'address' },
    ],
    name: 'sweepToken',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'token', internalType: 'contract IERC20', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
      { name: 'recipient', internalType: 'address', type: 'address' },
    ],
    name: 'sweepTokenAmount',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'tokenA', internalType: 'contract IERC20', type: 'address' },
      { name: 'tokenB', internalType: 'contract IERC20', type: 'address' },
      { name: 'tokenAAmountMin', internalType: 'uint256', type: 'uint256' },
      { name: 'tokenBAmountMin', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'unwrapAndSweep',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'amountMinimum', internalType: 'uint256', type: 'uint256' },
      { name: 'recipient', internalType: 'address', type: 'address' },
    ],
    name: 'unwrapWETH9',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'weth',
    outputs: [
      { name: 'weth_', internalType: 'contract IWETH9', type: 'address' },
    ],
    stateMutability: 'view',
  },
  { type: 'receive', stateMutability: 'payable' },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Checkpoints
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const checkpointsAbi = [
  { type: 'error', inputs: [], name: 'CheckpointUnorderedInsertion' },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Checks
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const checksAbi = [
  { type: 'error', inputs: [], name: 'MathOverflowedMulDiv' },
  {
    type: 'error',
    inputs: [
      { name: 'deadline', internalType: 'uint256', type: 'uint256' },
      { name: 'blockTimestamp', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'PositionDeadlinePassed',
  },
  {
    type: 'error',
    inputs: [
      { name: 'sqrtPrice', internalType: 'uint256', type: 'uint256' },
      { name: 'minSqrtPrice', internalType: 'uint256', type: 'uint256' },
      { name: 'maxSqrtPrice', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'PositionExceededPriceBounds',
  },
  {
    type: 'error',
    inputs: [{ name: 'tick', internalType: 'int256', type: 'int256' }],
    name: 'TickMaxExceeded',
  },
  {
    type: 'function',
    inputs: [{ name: 'deadline', internalType: 'uint256', type: 'uint256' }],
    name: 'checkDeadline',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
      { name: 'minSqrtPrice', internalType: 'uint256', type: 'uint256' },
      { name: 'maxSqrtPrice', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'checkSqrtPrice',
    outputs: [],
    stateMutability: 'payable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ConfigAdmin
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const configAdminAbi = [
  {
    type: 'error',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'OwnableUnauthorizedAccount',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'newAdmin',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'SetConfigurationAdmin',
  },
  {
    type: 'function',
    inputs: [],
    name: 'configurationAdmin',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'factory',
    outputs: [
      {
        name: '',
        internalType: 'contract IMaverickV2Factory',
        type: 'address',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_newAdmin', internalType: 'address', type: 'address' }],
    name: 'setConfigurationAdmin',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ECDSA
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ecdsaAbi = [
  { type: 'error', inputs: [], name: 'ECDSAInvalidSignature' },
  {
    type: 'error',
    inputs: [{ name: 'length', internalType: 'uint256', type: 'uint256' }],
    name: 'ECDSAInvalidSignatureLength',
  },
  {
    type: 'error',
    inputs: [{ name: 's', internalType: 'bytes32', type: 'bytes32' }],
    name: 'ECDSAInvalidSignatureS',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// EIP712
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const eip712Abi = [
  { type: 'error', inputs: [], name: 'InvalidShortString' },
  {
    type: 'error',
    inputs: [{ name: 'str', internalType: 'string', type: 'string' }],
    name: 'StringTooLong',
  },
  { type: 'event', anonymous: false, inputs: [], name: 'EIP712DomainChanged' },
  {
    type: 'function',
    inputs: [],
    name: 'eip712Domain',
    outputs: [
      { name: 'fields', internalType: 'bytes1', type: 'bytes1' },
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'version', internalType: 'string', type: 'string' },
      { name: 'chainId', internalType: 'uint256', type: 'uint256' },
      { name: 'verifyingContract', internalType: 'address', type: 'address' },
      { name: 'salt', internalType: 'bytes32', type: 'bytes32' },
      { name: 'extensions', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    stateMutability: 'view',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ERC165
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const erc165Abi = [
  {
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ERC20
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const erc20Abi = [
  {
    type: 'error',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'allowance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC20InsufficientAllowance',
  },
  {
    type: 'error',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'balance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC20InsufficientBalance',
  },
  {
    type: 'error',
    inputs: [{ name: 'approver', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidApprover',
  },
  {
    type: 'error',
    inputs: [{ name: 'receiver', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidReceiver',
  },
  {
    type: 'error',
    inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidSender',
  },
  {
    type: 'error',
    inputs: [{ name: 'spender', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidSpender',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'spender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Transfer',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ERC20Mintable
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const erc20MintableAbi = [
  {
    type: 'constructor',
    inputs: [
      { name: 'name_', internalType: 'string', type: 'string' },
      { name: 'symbol_', internalType: 'string', type: 'string' },
      { name: '_decimals', internalType: 'uint8', type: 'uint8' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'error',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'allowance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC20InsufficientAllowance',
  },
  {
    type: 'error',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'balance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC20InsufficientBalance',
  },
  {
    type: 'error',
    inputs: [{ name: 'approver', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidApprover',
  },
  {
    type: 'error',
    inputs: [{ name: 'receiver', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidReceiver',
  },
  {
    type: 'error',
    inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidSender',
  },
  {
    type: 'error',
    inputs: [{ name: 'spender', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidSpender',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'spender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Transfer',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'mint',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ERC20Votes
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const erc20VotesAbi = [
  { type: 'error', inputs: [], name: 'CheckpointUnorderedInsertion' },
  { type: 'error', inputs: [], name: 'ECDSAInvalidSignature' },
  {
    type: 'error',
    inputs: [{ name: 'length', internalType: 'uint256', type: 'uint256' }],
    name: 'ECDSAInvalidSignatureLength',
  },
  {
    type: 'error',
    inputs: [{ name: 's', internalType: 'bytes32', type: 'bytes32' }],
    name: 'ECDSAInvalidSignatureS',
  },
  {
    type: 'error',
    inputs: [
      { name: 'increasedSupply', internalType: 'uint256', type: 'uint256' },
      { name: 'cap', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC20ExceededSafeSupply',
  },
  {
    type: 'error',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'allowance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC20InsufficientAllowance',
  },
  {
    type: 'error',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'balance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC20InsufficientBalance',
  },
  {
    type: 'error',
    inputs: [{ name: 'approver', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidApprover',
  },
  {
    type: 'error',
    inputs: [{ name: 'receiver', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidReceiver',
  },
  {
    type: 'error',
    inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidSender',
  },
  {
    type: 'error',
    inputs: [{ name: 'spender', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidSpender',
  },
  {
    type: 'error',
    inputs: [
      { name: 'timepoint', internalType: 'uint256', type: 'uint256' },
      { name: 'clock', internalType: 'uint48', type: 'uint48' },
    ],
    name: 'ERC5805FutureLookup',
  },
  { type: 'error', inputs: [], name: 'ERC6372InconsistentClock' },
  {
    type: 'error',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'currentNonce', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'InvalidAccountNonce',
  },
  { type: 'error', inputs: [], name: 'InvalidShortString' },
  {
    type: 'error',
    inputs: [
      { name: 'bits', internalType: 'uint8', type: 'uint8' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'SafeCastOverflowedUintDowncast',
  },
  {
    type: 'error',
    inputs: [{ name: 'str', internalType: 'string', type: 'string' }],
    name: 'StringTooLong',
  },
  {
    type: 'error',
    inputs: [{ name: 'expiry', internalType: 'uint256', type: 'uint256' }],
    name: 'VotesExpiredSignature',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'spender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'delegator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'fromDelegate',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'toDelegate',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'DelegateChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'delegate',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'previousVotes',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'newVotes',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'DelegateVotesChanged',
  },
  { type: 'event', anonymous: false, inputs: [], name: 'EIP712DomainChanged' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Transfer',
  },
  {
    type: 'function',
    inputs: [],
    name: 'CLOCK_MODE',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'pos', internalType: 'uint32', type: 'uint32' },
    ],
    name: 'checkpoints',
    outputs: [
      {
        name: '',
        internalType: 'struct Checkpoints.Checkpoint208',
        type: 'tuple',
        components: [
          { name: '_key', internalType: 'uint48', type: 'uint48' },
          { name: '_value', internalType: 'uint208', type: 'uint208' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'clock',
    outputs: [{ name: '', internalType: 'uint48', type: 'uint48' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'delegatee', internalType: 'address', type: 'address' }],
    name: 'delegate',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'delegatee', internalType: 'address', type: 'address' },
      { name: 'nonce', internalType: 'uint256', type: 'uint256' },
      { name: 'expiry', internalType: 'uint256', type: 'uint256' },
      { name: 'v', internalType: 'uint8', type: 'uint8' },
      { name: 'r', internalType: 'bytes32', type: 'bytes32' },
      { name: 's', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'delegateBySig',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'delegates',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'eip712Domain',
    outputs: [
      { name: 'fields', internalType: 'bytes1', type: 'bytes1' },
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'version', internalType: 'string', type: 'string' },
      { name: 'chainId', internalType: 'uint256', type: 'uint256' },
      { name: 'verifyingContract', internalType: 'address', type: 'address' },
      { name: 'salt', internalType: 'bytes32', type: 'bytes32' },
      { name: 'extensions', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'timepoint', internalType: 'uint256', type: 'uint256' }],
    name: 'getPastTotalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'timepoint', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'getPastVotes',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'getVotes',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'nonces',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'numCheckpoints',
    outputs: [{ name: '', internalType: 'uint32', type: 'uint32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ERC721
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const erc721Abi = [
  {
    type: 'error',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'owner', internalType: 'address', type: 'address' },
    ],
    name: 'ERC721IncorrectOwner',
  },
  {
    type: 'error',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC721InsufficientApproval',
  },
  {
    type: 'error',
    inputs: [{ name: 'approver', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidApprover',
  },
  {
    type: 'error',
    inputs: [{ name: 'operator', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidOperator',
  },
  {
    type: 'error',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidOwner',
  },
  {
    type: 'error',
    inputs: [{ name: 'receiver', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidReceiver',
  },
  {
    type: 'error',
    inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidSender',
  },
  {
    type: 'error',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ERC721NonexistentToken',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'approved',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'approved', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'ApprovalForAll',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Transfer',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'getApproved',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'operator', internalType: 'address', type: 'address' },
    ],
    name: 'isApprovedForAll',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ownerOf',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'approved', internalType: 'bool', type: 'bool' },
    ],
    name: 'setApprovalForAll',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'tokenURI',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ERC721Enumerable
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const erc721EnumerableAbi = [
  { type: 'error', inputs: [], name: 'ERC721EnumerableForbiddenBatchMint' },
  {
    type: 'error',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'owner', internalType: 'address', type: 'address' },
    ],
    name: 'ERC721IncorrectOwner',
  },
  {
    type: 'error',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC721InsufficientApproval',
  },
  {
    type: 'error',
    inputs: [{ name: 'approver', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidApprover',
  },
  {
    type: 'error',
    inputs: [{ name: 'operator', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidOperator',
  },
  {
    type: 'error',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidOwner',
  },
  {
    type: 'error',
    inputs: [{ name: 'receiver', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidReceiver',
  },
  {
    type: 'error',
    inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidSender',
  },
  {
    type: 'error',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ERC721NonexistentToken',
  },
  {
    type: 'error',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'index', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC721OutOfBoundsIndex',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'approved',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'approved', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'ApprovalForAll',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Transfer',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'getApproved',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'operator', internalType: 'address', type: 'address' },
    ],
    name: 'isApprovedForAll',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ownerOf',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'approved', internalType: 'bool', type: 'bool' },
    ],
    name: 'setApprovalForAll',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'index', internalType: 'uint256', type: 'uint256' }],
    name: 'tokenByIndex',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'index', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'tokenOfOwnerByIndex',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'tokenURI',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Epoch
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const epochAbi = [
  {
    type: 'error',
    inputs: [
      { name: 'timestamp', internalType: 'uint256', type: 'uint256' },
      { name: 'epochStart', internalType: 'uint256', type: 'uint256' },
      { name: 'epochEnd', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'EpochEnded',
  },
  {
    type: 'error',
    inputs: [{ name: 'epoch', internalType: 'uint256', type: 'uint256' }],
    name: 'InvalidEpoch',
  },
  {
    type: 'error',
    inputs: [
      { name: 'timestamp', internalType: 'uint256', type: 'uint256' },
      { name: 'epochStart', internalType: 'uint256', type: 'uint256' },
      { name: 'epochEnd', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'VotePeriodNotActive',
  },
  {
    type: 'error',
    inputs: [
      { name: 'timestamp', internalType: 'uint256', type: 'uint256' },
      { name: 'epochStart', internalType: 'uint256', type: 'uint256' },
      { name: 'epochEnd', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'VotePeriodNotEnded',
  },
  {
    type: 'function',
    inputs: [],
    name: 'EPOCH_PERIOD',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'currentEpoch',
    outputs: [{ name: 'epoch', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'offset', internalType: 'int256', type: 'int256' }],
    name: 'epochAtOffset',
    outputs: [{ name: 'epoch', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'epoch', internalType: 'uint256', type: 'uint256' }],
    name: 'epochEnd',
    outputs: [{ name: 'end', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [{ name: 'epoch', internalType: 'uint256', type: 'uint256' }],
    name: 'epochIsOver',
    outputs: [{ name: 'isOver', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'epoch', internalType: 'uint256', type: 'uint256' }],
    name: 'isEpoch',
    outputs: [{ name: '_isEpoch', internalType: 'bool', type: 'bool' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [],
    name: 'lastEpoch',
    outputs: [{ name: 'epoch', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'nextEpoch',
    outputs: [{ name: 'epoch', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'epoch', internalType: 'uint256', type: 'uint256' }],
    name: 'votingIsActive',
    outputs: [{ name: 'isActive', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ExactOutputSlim
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const exactOutputSlimAbi = [
  {
    type: 'error',
    inputs: [{ name: 'target', internalType: 'address', type: 'address' }],
    name: 'AddressEmptyCode',
  },
  {
    type: 'error',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'AddressInsufficientBalance',
  },
  { type: 'error', inputs: [], name: 'FailedInnerCall' },
  {
    type: 'error',
    inputs: [
      { name: 'token', internalType: 'address', type: 'address' },
      { name: 'amountMinimum', internalType: 'uint256', type: 'uint256' },
      { name: 'contractBalance', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'PaymentInsufficientBalance',
  },
  { type: 'error', inputs: [], name: 'PaymentSenderNotWETH9' },
  { type: 'error', inputs: [], name: 'RouterNotFactoryPool' },
  {
    type: 'error',
    inputs: [
      { name: 'amountOutMinimum', internalType: 'uint256', type: 'uint256' },
      { name: 'amountOut', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'RouterTooLittleReceived',
  },
  {
    type: 'error',
    inputs: [
      { name: 'amountInMaximum', internalType: 'uint256', type: 'uint256' },
      { name: 'amountIn', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'RouterTooMuchRequested',
  },
  { type: 'error', inputs: [], name: 'RouterZeroSwap' },
  {
    type: 'error',
    inputs: [
      { name: 'token', internalType: 'contract IERC20', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'TransferFailed',
  },
  {
    type: 'error',
    inputs: [
      { name: 'token', internalType: 'contract IERC20', type: 'address' },
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'TransferFromFailed',
  },
  {
    type: 'function',
    inputs: [
      { name: 'recipient', internalType: 'address', type: 'address' },
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
      { name: 'tokenAIn', internalType: 'bool', type: 'bool' },
      { name: 'amountOut', internalType: 'uint256', type: 'uint256' },
      { name: 'tickLimit', internalType: 'int32', type: 'int32' },
    ],
    name: 'exactOutputSingleMinimal',
    outputs: [
      { name: 'amountIn', internalType: 'uint256', type: 'uint256' },
      { name: 'amountOut_', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'factory',
    outputs: [
      {
        name: 'factory_',
        internalType: 'contract IMaverickV2Factory',
        type: 'address',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'tokenIn', internalType: 'contract IERC20', type: 'address' },
      { name: 'amountToPay', internalType: 'uint256', type: 'uint256' },
      { name: '', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'maverickV2SwapCallback',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'data', internalType: 'bytes[]', type: 'bytes[]' }],
    name: 'multicall',
    outputs: [{ name: 'results', internalType: 'bytes[]', type: 'bytes[]' }],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'refundETH',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'token', internalType: 'contract IERC20', type: 'address' },
      { name: 'amountMinimum', internalType: 'uint256', type: 'uint256' },
      { name: 'recipient', internalType: 'address', type: 'address' },
    ],
    name: 'sweepToken',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'token', internalType: 'contract IERC20', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
      { name: 'recipient', internalType: 'address', type: 'address' },
    ],
    name: 'sweepTokenAmount',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'tokenA', internalType: 'contract IERC20', type: 'address' },
      { name: 'tokenB', internalType: 'contract IERC20', type: 'address' },
      { name: 'tokenAAmountMin', internalType: 'uint256', type: 'uint256' },
      { name: 'tokenBAmountMin', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'unwrapAndSweep',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'amountMinimum', internalType: 'uint256', type: 'uint256' },
      { name: 'recipient', internalType: 'address', type: 'address' },
    ],
    name: 'unwrapWETH9',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'weth',
    outputs: [
      { name: 'weth_', internalType: 'contract IWETH9', type: 'address' },
    ],
    stateMutability: 'view',
  },
  { type: 'receive', stateMutability: 'payable' },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IArgPacker
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iArgPackerAbi = [
  {
    type: 'function',
    inputs: [
      {
        name: 'args',
        internalType: 'struct IMaverickV2Pool.AddLiquidityParams',
        type: 'tuple',
        components: [
          { name: 'kind', internalType: 'uint8', type: 'uint8' },
          { name: 'ticks', internalType: 'int32[]', type: 'int32[]' },
          { name: 'amounts', internalType: 'uint128[]', type: 'uint128[]' },
        ],
      },
    ],
    name: 'packAddLiquidityArgs',
    outputs: [{ name: 'argsPacked', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'args',
        internalType: 'struct IMaverickV2Pool.AddLiquidityParams[]',
        type: 'tuple[]',
        components: [
          { name: 'kind', internalType: 'uint8', type: 'uint8' },
          { name: 'ticks', internalType: 'int32[]', type: 'int32[]' },
          { name: 'amounts', internalType: 'uint128[]', type: 'uint128[]' },
        ],
      },
    ],
    name: 'packAddLiquidityArgsArray',
    outputs: [{ name: 'argsPacked', internalType: 'bytes[]', type: 'bytes[]' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [{ name: 'fullArray', internalType: 'uint88[]', type: 'uint88[]' }],
    name: 'packUint88Array',
    outputs: [{ name: 'packedArray', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [{ name: 'argsPacked', internalType: 'bytes', type: 'bytes' }],
    name: 'unpackAddLiquidityArgs',
    outputs: [
      {
        name: 'args',
        internalType: 'struct IMaverickV2Pool.AddLiquidityParams',
        type: 'tuple',
        components: [
          { name: 'kind', internalType: 'uint8', type: 'uint8' },
          { name: 'ticks', internalType: 'int32[]', type: 'int32[]' },
          { name: 'amounts', internalType: 'uint128[]', type: 'uint128[]' },
        ],
      },
    ],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [{ name: 'packedArray', internalType: 'bytes', type: 'bytes' }],
    name: 'unpackUint88Array',
    outputs: [
      { name: 'fullArray', internalType: 'uint88[]', type: 'uint88[]' },
    ],
    stateMutability: 'pure',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ICallbackOperations
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iCallbackOperationsAbi = [
  { type: 'error', inputs: [], name: 'RouterNotFactoryPool' },
  {
    type: 'error',
    inputs: [
      { name: 'amountOutMinimum', internalType: 'uint256', type: 'uint256' },
      { name: 'amountOut', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'RouterTooLittleReceived',
  },
  {
    type: 'error',
    inputs: [
      { name: 'amountInMaximum', internalType: 'uint256', type: 'uint256' },
      { name: 'amountIn', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'RouterTooMuchRequested',
  },
  { type: 'error', inputs: [], name: 'RouterZeroSwap' },
  {
    type: 'function',
    inputs: [
      { name: 'recipient', internalType: 'address', type: 'address' },
      { name: 'path', internalType: 'bytes', type: 'bytes' },
      { name: 'amountOut', internalType: 'uint256', type: 'uint256' },
      { name: 'amountInMaximum', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'exactOutputMultiHop',
    outputs: [{ name: 'amountIn', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'recipient', internalType: 'address', type: 'address' },
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
      { name: 'tokenAIn', internalType: 'bool', type: 'bool' },
      { name: 'amountOut', internalType: 'uint256', type: 'uint256' },
      { name: 'amountInMaximum', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'exactOutputSingle',
    outputs: [
      { name: 'amountIn', internalType: 'uint256', type: 'uint256' },
      { name: 'amountOut_', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'recipient', internalType: 'address', type: 'address' },
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
      { name: 'tokenAIn', internalType: 'bool', type: 'bool' },
      { name: 'amountOut', internalType: 'uint256', type: 'uint256' },
      { name: 'tickLimit', internalType: 'int32', type: 'int32' },
    ],
    name: 'exactOutputSingleMinimal',
    outputs: [
      { name: 'amountIn', internalType: 'uint256', type: 'uint256' },
      { name: 'amountOut_', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'recipient', internalType: 'address', type: 'address' },
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
      { name: 'tokenAIn', internalType: 'bool', type: 'bool' },
      { name: 'amountIn', internalType: 'uint256', type: 'uint256' },
      { name: 'tickLimit', internalType: 'int32', type: 'int32' },
      { name: 'amountOutMinimum', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'inputSingleWithTickLimit',
    outputs: [
      { name: 'amountIn_', internalType: 'uint256', type: 'uint256' },
      { name: 'amountOut', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'recipient', internalType: 'address', type: 'address' },
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
      { name: 'tokenAIn', internalType: 'bool', type: 'bool' },
      { name: 'amountOut', internalType: 'uint256', type: 'uint256' },
      { name: 'tickLimit', internalType: 'int32', type: 'int32' },
      { name: 'amountInMaximum', internalType: 'uint256', type: 'uint256' },
      { name: 'amountOutMinimum', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'outputSingleWithTickLimit',
    outputs: [
      { name: 'amountIn_', internalType: 'uint256', type: 'uint256' },
      { name: 'amountOut_', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'payable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IChecks
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iChecksAbi = [
  {
    type: 'error',
    inputs: [
      { name: 'deadline', internalType: 'uint256', type: 'uint256' },
      { name: 'blockTimestamp', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'PositionDeadlinePassed',
  },
  {
    type: 'error',
    inputs: [
      { name: 'sqrtPrice', internalType: 'uint256', type: 'uint256' },
      { name: 'minSqrtPrice', internalType: 'uint256', type: 'uint256' },
      { name: 'maxSqrtPrice', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'PositionExceededPriceBounds',
  },
  {
    type: 'function',
    inputs: [{ name: 'deadline', internalType: 'uint256', type: 'uint256' }],
    name: 'checkDeadline',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
      { name: 'minSqrtPrice', internalType: 'uint256', type: 'uint256' },
      { name: 'maxSqrtPrice', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'checkSqrtPrice',
    outputs: [],
    stateMutability: 'payable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IConfigAdmin
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iConfigAdminAbi = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'newAdmin',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'SetConfigurationAdmin',
  },
  {
    type: 'function',
    inputs: [],
    name: 'configurationAdmin',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'factory',
    outputs: [
      {
        name: '',
        internalType: 'contract IMaverickV2Factory',
        type: 'address',
      },
    ],
    stateMutability: 'view',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC1155Errors
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc1155ErrorsAbi = [
  {
    type: 'error',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'balance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC1155InsufficientBalance',
  },
  {
    type: 'error',
    inputs: [{ name: 'approver', internalType: 'address', type: 'address' }],
    name: 'ERC1155InvalidApprover',
  },
  {
    type: 'error',
    inputs: [
      { name: 'idsLength', internalType: 'uint256', type: 'uint256' },
      { name: 'valuesLength', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC1155InvalidArrayLength',
  },
  {
    type: 'error',
    inputs: [{ name: 'operator', internalType: 'address', type: 'address' }],
    name: 'ERC1155InvalidOperator',
  },
  {
    type: 'error',
    inputs: [{ name: 'receiver', internalType: 'address', type: 'address' }],
    name: 'ERC1155InvalidReceiver',
  },
  {
    type: 'error',
    inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
    name: 'ERC1155InvalidSender',
  },
  {
    type: 'error',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'owner', internalType: 'address', type: 'address' },
    ],
    name: 'ERC1155MissingApprovalForAll',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC165
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc165Abi = [
  {
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC20
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc20Abi = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'spender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Transfer',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC20Errors
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc20ErrorsAbi = [
  {
    type: 'error',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'allowance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC20InsufficientAllowance',
  },
  {
    type: 'error',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'balance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC20InsufficientBalance',
  },
  {
    type: 'error',
    inputs: [{ name: 'approver', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidApprover',
  },
  {
    type: 'error',
    inputs: [{ name: 'receiver', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidReceiver',
  },
  {
    type: 'error',
    inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidSender',
  },
  {
    type: 'error',
    inputs: [{ name: 'spender', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidSpender',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC20Metadata
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc20MetadataAbi = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'spender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Transfer',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC20Permit
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc20PermitAbi = [
  {
    type: 'function',
    inputs: [],
    name: 'DOMAIN_SEPARATOR',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'nonces',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
      { name: 'deadline', internalType: 'uint256', type: 'uint256' },
      { name: 'v', internalType: 'uint8', type: 'uint8' },
      { name: 'r', internalType: 'bytes32', type: 'bytes32' },
      { name: 's', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'permit',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC5267
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc5267Abi = [
  { type: 'event', anonymous: false, inputs: [], name: 'EIP712DomainChanged' },
  {
    type: 'function',
    inputs: [],
    name: 'eip712Domain',
    outputs: [
      { name: 'fields', internalType: 'bytes1', type: 'bytes1' },
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'version', internalType: 'string', type: 'string' },
      { name: 'chainId', internalType: 'uint256', type: 'uint256' },
      { name: 'verifyingContract', internalType: 'address', type: 'address' },
      { name: 'salt', internalType: 'bytes32', type: 'bytes32' },
      { name: 'extensions', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    stateMutability: 'view',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC5805
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc5805Abi = [
  {
    type: 'error',
    inputs: [{ name: 'expiry', internalType: 'uint256', type: 'uint256' }],
    name: 'VotesExpiredSignature',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'delegator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'fromDelegate',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'toDelegate',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'DelegateChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'delegate',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'previousVotes',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'newVotes',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'DelegateVotesChanged',
  },
  {
    type: 'function',
    inputs: [],
    name: 'CLOCK_MODE',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'clock',
    outputs: [{ name: '', internalType: 'uint48', type: 'uint48' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'delegatee', internalType: 'address', type: 'address' }],
    name: 'delegate',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'delegatee', internalType: 'address', type: 'address' },
      { name: 'nonce', internalType: 'uint256', type: 'uint256' },
      { name: 'expiry', internalType: 'uint256', type: 'uint256' },
      { name: 'v', internalType: 'uint8', type: 'uint8' },
      { name: 'r', internalType: 'bytes32', type: 'bytes32' },
      { name: 's', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'delegateBySig',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'delegates',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'timepoint', internalType: 'uint256', type: 'uint256' }],
    name: 'getPastTotalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'timepoint', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'getPastVotes',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'getVotes',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC6372
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc6372Abi = [
  {
    type: 'function',
    inputs: [],
    name: 'CLOCK_MODE',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'clock',
    outputs: [{ name: '', internalType: 'uint48', type: 'uint48' }],
    stateMutability: 'view',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC721
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc721Abi = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'approved',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'approved', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'ApprovalForAll',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Transfer',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: 'balance', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'getApproved',
    outputs: [{ name: 'operator', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'operator', internalType: 'address', type: 'address' },
    ],
    name: 'isApprovedForAll',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ownerOf',
    outputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'approved', internalType: 'bool', type: 'bool' },
    ],
    name: 'setApprovalForAll',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC721Enumerable
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc721EnumerableAbi = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'approved',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'approved', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'ApprovalForAll',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Transfer',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: 'balance', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'getApproved',
    outputs: [{ name: 'operator', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'operator', internalType: 'address', type: 'address' },
    ],
    name: 'isApprovedForAll',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ownerOf',
    outputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'approved', internalType: 'bool', type: 'bool' },
    ],
    name: 'setApprovalForAll',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'index', internalType: 'uint256', type: 'uint256' }],
    name: 'tokenByIndex',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'index', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'tokenOfOwnerByIndex',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC721Errors
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc721ErrorsAbi = [
  {
    type: 'error',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'owner', internalType: 'address', type: 'address' },
    ],
    name: 'ERC721IncorrectOwner',
  },
  {
    type: 'error',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC721InsufficientApproval',
  },
  {
    type: 'error',
    inputs: [{ name: 'approver', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidApprover',
  },
  {
    type: 'error',
    inputs: [{ name: 'operator', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidOperator',
  },
  {
    type: 'error',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidOwner',
  },
  {
    type: 'error',
    inputs: [{ name: 'receiver', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidReceiver',
  },
  {
    type: 'error',
    inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidSender',
  },
  {
    type: 'error',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ERC721NonexistentToken',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC721Metadata
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc721MetadataAbi = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'approved',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'approved', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'ApprovalForAll',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Transfer',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: 'balance', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'getApproved',
    outputs: [{ name: 'operator', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'operator', internalType: 'address', type: 'address' },
    ],
    name: 'isApprovedForAll',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ownerOf',
    outputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'approved', internalType: 'bool', type: 'bool' },
    ],
    name: 'setApprovalForAll',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'tokenURI',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC721Receiver
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc721ReceiverAbi = [
  {
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'onERC721Received',
    outputs: [{ name: '', internalType: 'bytes4', type: 'bytes4' }],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IEpoch
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iEpochAbi = [
  {
    type: 'error',
    inputs: [
      { name: 'timestamp', internalType: 'uint256', type: 'uint256' },
      { name: 'epochStart', internalType: 'uint256', type: 'uint256' },
      { name: 'epochEnd', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'EpochEnded',
  },
  {
    type: 'error',
    inputs: [{ name: 'epoch', internalType: 'uint256', type: 'uint256' }],
    name: 'InvalidEpoch',
  },
  {
    type: 'error',
    inputs: [
      { name: 'timestamp', internalType: 'uint256', type: 'uint256' },
      { name: 'epochStart', internalType: 'uint256', type: 'uint256' },
      { name: 'epochEnd', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'VotePeriodNotActive',
  },
  {
    type: 'error',
    inputs: [
      { name: 'timestamp', internalType: 'uint256', type: 'uint256' },
      { name: 'epochStart', internalType: 'uint256', type: 'uint256' },
      { name: 'epochEnd', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'VotePeriodNotEnded',
  },
  {
    type: 'function',
    inputs: [],
    name: 'EPOCH_PERIOD',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'currentEpoch',
    outputs: [{ name: 'epoch', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'epoch', internalType: 'uint256', type: 'uint256' }],
    name: 'epochEnd',
    outputs: [{ name: 'end', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [{ name: 'epoch', internalType: 'uint256', type: 'uint256' }],
    name: 'epochIsOver',
    outputs: [{ name: 'isOver', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'epoch', internalType: 'uint256', type: 'uint256' }],
    name: 'isEpoch',
    outputs: [{ name: '_isEpoch', internalType: 'bool', type: 'bool' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [],
    name: 'lastEpoch',
    outputs: [{ name: 'epoch', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'nextEpoch',
    outputs: [{ name: 'epoch', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'epoch', internalType: 'uint256', type: 'uint256' }],
    name: 'votingIsActive',
    outputs: [{ name: 'isActive', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IExactOutputSlim
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iExactOutputSlimAbi = [
  { type: 'error', inputs: [], name: 'RouterNotFactoryPool' },
  {
    type: 'error',
    inputs: [
      { name: 'amountOutMinimum', internalType: 'uint256', type: 'uint256' },
      { name: 'amountOut', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'RouterTooLittleReceived',
  },
  {
    type: 'error',
    inputs: [
      { name: 'amountInMaximum', internalType: 'uint256', type: 'uint256' },
      { name: 'amountIn', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'RouterTooMuchRequested',
  },
  { type: 'error', inputs: [], name: 'RouterZeroSwap' },
  {
    type: 'function',
    inputs: [
      { name: 'recipient', internalType: 'address', type: 'address' },
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
      { name: 'tokenAIn', internalType: 'bool', type: 'bool' },
      { name: 'amountOut', internalType: 'uint256', type: 'uint256' },
      { name: 'tickLimit', internalType: 'int32', type: 'int32' },
    ],
    name: 'exactOutputSingleMinimal',
    outputs: [
      { name: 'amountIn', internalType: 'uint256', type: 'uint256' },
      { name: 'amountOut_', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'payable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IFeeRegistry
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iFeeRegistryAbi = [
  {
    type: 'function',
    inputs: [
      { name: 'isTokenA', internalType: 'bool', type: 'bool' },
      { name: 'binId', internalType: 'uint32', type: 'uint32' },
      { name: 'binFeeInQuote', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'registerFee',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ILiquidityRegistry
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iLiquidityRegistryAbi = [
  {
    type: 'function',
    inputs: [
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'binId', internalType: 'uint32', type: 'uint32' },
      { name: 'currentBinLpBalance', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'notifyBinLiquidity',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ILpReward
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iLpRewardAbi = [
  {
    type: 'error',
    inputs: [
      { name: 'timepoint', internalType: 'uint256', type: 'uint256' },
      { name: 'clock', internalType: 'uint48', type: 'uint48' },
    ],
    name: 'ERC5805FutureLookup',
  },
  {
    type: 'error',
    inputs: [
      { name: 'timestamp', internalType: 'uint256', type: 'uint256' },
      { name: 'epochStart', internalType: 'uint256', type: 'uint256' },
      { name: 'epochEnd', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'EpochEnded',
  },
  {
    type: 'error',
    inputs: [{ name: 'epoch', internalType: 'uint256', type: 'uint256' }],
    name: 'InvalidEpoch',
  },
  {
    type: 'error',
    inputs: [
      { name: 'inputEpoch', internalType: 'uint256', type: 'uint256' },
      { name: 'currentEpoch', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'NoDataForFutureEpoch',
  },
  { type: 'error', inputs: [], name: 'NotAuthorizedNotifier' },
  { type: 'error', inputs: [], name: 'PoolNotInitialized' },
  {
    type: 'error',
    inputs: [
      { name: 'timestamp', internalType: 'uint256', type: 'uint256' },
      { name: 'epochStart', internalType: 'uint256', type: 'uint256' },
      { name: 'epochEnd', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'VotePeriodNotActive',
  },
  {
    type: 'error',
    inputs: [
      { name: 'timestamp', internalType: 'uint256', type: 'uint256' },
      { name: 'epochStart', internalType: 'uint256', type: 'uint256' },
      { name: 'epochEnd', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'VotePeriodNotEnded',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
        indexed: false,
      },
      { name: 'isTokenA', internalType: 'bool', type: 'bool', indexed: false },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      { name: 'binId', internalType: 'uint32', type: 'uint32', indexed: false },
      {
        name: 'timestamp',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'userRewards',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'userRewardPerTokenStored',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'CheckpointTokenId',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
        indexed: false,
      },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      { name: 'binId', internalType: 'uint32', type: 'uint32', indexed: false },
      {
        name: 'timestamp',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'balanceOf',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'totalSupply',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'NotifyBinLiquidity',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
        indexed: false,
      },
      { name: 'isTokenA', internalType: 'bool', type: 'bool', indexed: false },
      { name: 'binId', internalType: 'uint32', type: 'uint32', indexed: false },
      {
        name: 'timestamp',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'rewardPerFeeStored',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'feeTrackerByBin',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'feeTracker',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'RegisterFee',
  },
  {
    type: 'function',
    inputs: [],
    name: 'EPOCH_PERIOD',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
      { name: 'binId', internalType: 'uint32', type: 'uint32' },
    ],
    name: 'binTotalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
      { name: 'isTokenA', internalType: 'bool', type: 'bool' },
      { name: 'binId', internalType: 'uint32', type: 'uint32' },
      { name: 'epoch', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'binTrackerForEpoch',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'currentEpoch',
    outputs: [{ name: 'epoch', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'epoch', internalType: 'uint256', type: 'uint256' }],
    name: 'epochEnd',
    outputs: [{ name: 'end', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [{ name: 'epoch', internalType: 'uint256', type: 'uint256' }],
    name: 'epochIsOver',
    outputs: [{ name: 'isOver', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
      { name: 'isTokenA', internalType: 'bool', type: 'bool' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'binId', internalType: 'uint32', type: 'uint32' },
      { name: 'epoch', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'feeProrataForEpoch',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
      { name: 'isTokenA', internalType: 'bool', type: 'bool' },
    ],
    name: 'feeTracker',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
      { name: 'isTokenA', internalType: 'bool', type: 'bool' },
      { name: 'binId', internalType: 'uint32', type: 'uint32' },
    ],
    name: 'feeTrackerByBin',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
      { name: 'isTokenA', internalType: 'bool', type: 'bool' },
      { name: 'epoch', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'globalTrackerForEpoch',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'epoch', internalType: 'uint256', type: 'uint256' }],
    name: 'isEpoch',
    outputs: [{ name: '_isEpoch', internalType: 'bool', type: 'bool' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [],
    name: 'lastEpoch',
    outputs: [{ name: 'epoch', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'nextEpoch',
    outputs: [{ name: 'epoch', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'binId', internalType: 'uint32', type: 'uint32' },
      { name: 'currentBinLpBalance', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'notifyBinLiquidity',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
      { name: 'binId', internalType: 'uint32', type: 'uint32' },
      { name: 'timestamp', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'pastBinTotalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
      { name: 'isTokenA', internalType: 'bool', type: 'bool' },
      { name: 'timestamp', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'pastFeeTracker',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
      { name: 'isTokenA', internalType: 'bool', type: 'bool' },
      { name: 'binId', internalType: 'uint32', type: 'uint32' },
      { name: 'timestamp', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'pastFeeTrackerByBin',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
      { name: 'isTokenA', internalType: 'bool', type: 'bool' },
      { name: 'binId', internalType: 'uint32', type: 'uint32' },
      { name: 'timestamp', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'pastRewardPerFeeStored',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'binId', internalType: 'uint32', type: 'uint32' },
      { name: 'timestamp', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'pastUserBalance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
      { name: 'isTokenA', internalType: 'bool', type: 'bool' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'binId', internalType: 'uint32', type: 'uint32' },
      { name: 'timestamp', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'pastUserReward',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'isTokenA', internalType: 'bool', type: 'bool' },
      { name: 'binId', internalType: 'uint32', type: 'uint32' },
      { name: 'timestamp', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'pastUserRewardPerTokenStored',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
      { name: 'isTokenA', internalType: 'bool', type: 'bool' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'binId', internalType: 'uint32', type: 'uint32' },
      { name: 'timestamp', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'pastUserRewardRaw',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'isTokenA', internalType: 'bool', type: 'bool' },
      { name: 'binId', internalType: 'uint32', type: 'uint32' },
      { name: 'binFeeInQuote', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'registerFee',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
      { name: 'isTokenA', internalType: 'bool', type: 'bool' },
      { name: 'binId', internalType: 'uint32', type: 'uint32' },
    ],
    name: 'rewardPerFeeStored',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'binId', internalType: 'uint32', type: 'uint32' },
    ],
    name: 'userBalance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
      { name: 'isTokenA', internalType: 'bool', type: 'bool' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'binId', internalType: 'uint32', type: 'uint32' },
    ],
    name: 'userReward',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'isTokenA', internalType: 'bool', type: 'bool' },
      { name: 'binId', internalType: 'uint32', type: 'uint32' },
    ],
    name: 'userRewardPerTokenStored',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
      { name: 'isTokenA', internalType: 'bool', type: 'bool' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'binId', internalType: 'uint32', type: 'uint32' },
    ],
    name: 'userRewardRaw',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
      { name: 'isTokenA', internalType: 'bool', type: 'bool' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'binId', internalType: 'uint32', type: 'uint32' },
      { name: 'epoch', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'userTrackerForEpoch',
    outputs: [
      { name: 'userEpochReward', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'binIds', internalType: 'uint32[]', type: 'uint32[]' },
      { name: 'epoch', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'userTrackerForTokenIdForEpoch',
    outputs: [
      { name: 'tokenAAmount', internalType: 'uint256', type: 'uint256' },
      { name: 'tokenBAmount', internalType: 'uint256', type: 'uint256' },
      { name: 'tokenAAmounts', internalType: 'uint256[]', type: 'uint256[]' },
      { name: 'tokenBAmounts', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'epoch', internalType: 'uint256', type: 'uint256' }],
    name: 'votingIsActive',
    outputs: [{ name: 'isActive', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IMaverickV2AddLiquidityCallback
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iMaverickV2AddLiquidityCallbackAbi = [
  {
    type: 'function',
    inputs: [
      { name: 'tokenA', internalType: 'contract IERC20', type: 'address' },
      { name: 'tokenB', internalType: 'contract IERC20', type: 'address' },
      { name: 'amountA', internalType: 'uint256', type: 'uint256' },
      { name: 'amountB', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'maverickV2AddLiquidityCallback',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IMaverickV2Factory
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iMaverickV2FactoryAbi = [
  { type: 'error', inputs: [], name: 'FactorAlreadyInitialized' },
  { type: 'error', inputs: [], name: 'FactorNotInitialized' },
  { type: 'error', inputs: [], name: 'FactoryAccessorMustBeNonZero' },
  { type: 'error', inputs: [], name: 'FactoryInvalidFee' },
  {
    type: 'error',
    inputs: [{ name: 'kinds', internalType: 'uint8', type: 'uint8' }],
    name: 'FactoryInvalidKinds',
  },
  {
    type: 'error',
    inputs: [{ name: 'lookback', internalType: 'uint256', type: 'uint256' }],
    name: 'FactoryInvalidLookback',
  },
  {
    type: 'error',
    inputs: [{ name: 'tickSpacing', internalType: 'uint256', type: 'uint256' }],
    name: 'FactoryInvalidTickSpacing',
  },
  {
    type: 'error',
    inputs: [
      { name: 'decimalsA', internalType: 'uint8', type: 'uint8' },
      { name: 'decimalsB', internalType: 'uint8', type: 'uint8' },
    ],
    name: 'FactoryInvalidTokenDecimals',
  },
  {
    type: 'error',
    inputs: [
      { name: '_tokenA', internalType: 'contract IERC20', type: 'address' },
      { name: '_tokenB', internalType: 'contract IERC20', type: 'address' },
    ],
    name: 'FactoryInvalidTokenOrder',
  },
  {
    type: 'error',
    inputs: [
      { name: 'feeAIn', internalType: 'uint256', type: 'uint256' },
      { name: 'feeBIn', internalType: 'uint256', type: 'uint256' },
      { name: 'tickSpacing', internalType: 'uint256', type: 'uint256' },
      { name: 'lookback', internalType: 'uint256', type: 'uint256' },
      { name: 'tokenA', internalType: 'contract IERC20', type: 'address' },
      { name: 'tokenB', internalType: 'contract IERC20', type: 'address' },
      { name: 'kinds', internalType: 'uint8', type: 'uint8' },
      { name: 'accessor', internalType: 'address', type: 'address' },
    ],
    name: 'FactoryPoolAlreadyExists',
  },
  { type: 'error', inputs: [], name: 'NotImplemented' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'poolAddress',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
        indexed: false,
      },
      {
        name: 'protocolFeeRatio',
        internalType: 'uint8',
        type: 'uint8',
        indexed: false,
      },
      {
        name: 'feeAIn',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'feeBIn',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'tickSpacing',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'lookback',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'activeTick',
        internalType: 'int32',
        type: 'int32',
        indexed: false,
      },
      {
        name: 'tokenA',
        internalType: 'contract IERC20',
        type: 'address',
        indexed: false,
      },
      {
        name: 'tokenB',
        internalType: 'contract IERC20',
        type: 'address',
        indexed: false,
      },
      { name: 'kinds', internalType: 'uint8', type: 'uint8', indexed: false },
      {
        name: 'accessor',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'PoolCreated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'receiver',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'SetFactoryProtocolFeeReceiver',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'registry',
        internalType: 'contract IFeeRegistry',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'SetFactoryProtocolFeeRegistry',
  },
  {
    type: 'function',
    inputs: [
      { name: 'fee', internalType: 'uint64', type: 'uint64' },
      { name: 'tickSpacing', internalType: 'uint16', type: 'uint16' },
      { name: 'lookback', internalType: 'uint32', type: 'uint32' },
      { name: 'tokenA', internalType: 'contract IERC20', type: 'address' },
      { name: 'tokenB', internalType: 'contract IERC20', type: 'address' },
      { name: 'activeTick', internalType: 'int32', type: 'int32' },
      { name: 'kinds', internalType: 'uint8', type: 'uint8' },
    ],
    name: 'create',
    outputs: [
      { name: '', internalType: 'contract IMaverickV2Pool', type: 'address' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'feeAIn', internalType: 'uint64', type: 'uint64' },
      { name: 'feeBIn', internalType: 'uint64', type: 'uint64' },
      { name: 'tickSpacing', internalType: 'uint16', type: 'uint16' },
      { name: 'lookback', internalType: 'uint32', type: 'uint32' },
      { name: 'tokenA', internalType: 'contract IERC20', type: 'address' },
      { name: 'tokenB', internalType: 'contract IERC20', type: 'address' },
      { name: 'activeTick', internalType: 'int32', type: 'int32' },
      { name: 'kinds', internalType: 'uint8', type: 'uint8' },
    ],
    name: 'create',
    outputs: [
      { name: '', internalType: 'contract IMaverickV2Pool', type: 'address' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'deployParameters',
    outputs: [
      { name: 'feeAIn', internalType: 'uint64', type: 'uint64' },
      { name: 'feeBIn', internalType: 'uint64', type: 'uint64' },
      { name: 'lookback', internalType: 'uint32', type: 'uint32' },
      { name: 'activeTick', internalType: 'int32', type: 'int32' },
      { name: 'tokenAScale', internalType: 'uint64', type: 'uint64' },
      { name: 'tokenBScale', internalType: 'uint64', type: 'uint64' },
      { name: 'tokenA', internalType: 'contract IERC20', type: 'address' },
      { name: 'tokenB', internalType: 'contract IERC20', type: 'address' },
      { name: 'tickSpacing', internalType: 'uint16', type: 'uint16' },
      { name: 'options', internalType: 'uint8', type: 'uint8' },
      { name: 'accessor', internalType: 'address', type: 'address' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
    ],
    name: 'isFactoryPool',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'startIndex', internalType: 'uint256', type: 'uint256' },
      { name: 'endIndex', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'lookup',
    outputs: [
      {
        name: 'pools',
        internalType: 'contract IMaverickV2Pool[]',
        type: 'address[]',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'feeAIn', internalType: 'uint256', type: 'uint256' },
      { name: 'feeBIn', internalType: 'uint256', type: 'uint256' },
      { name: 'tickSpacing', internalType: 'uint256', type: 'uint256' },
      { name: 'lookback', internalType: 'uint256', type: 'uint256' },
      { name: 'tokenA', internalType: 'contract IERC20', type: 'address' },
      { name: 'tokenB', internalType: 'contract IERC20', type: 'address' },
      { name: 'kinds', internalType: 'uint8', type: 'uint8' },
    ],
    name: 'lookup',
    outputs: [
      { name: '', internalType: 'contract IMaverickV2Pool', type: 'address' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_tokenA', internalType: 'contract IERC20', type: 'address' },
      { name: '_tokenB', internalType: 'contract IERC20', type: 'address' },
      { name: 'startIndex', internalType: 'uint256', type: 'uint256' },
      { name: 'endIndex', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'lookup',
    outputs: [
      {
        name: 'pools',
        internalType: 'contract IMaverickV2Pool[]',
        type: 'address[]',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_tokenA', internalType: 'contract IERC20', type: 'address' },
      { name: '_tokenB', internalType: 'contract IERC20', type: 'address' },
      { name: 'accessor', internalType: 'address', type: 'address' },
    ],
    name: 'poolByTokenCount',
    outputs: [{ name: '_poolCount', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'poolCount',
    outputs: [{ name: '_poolCount', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'protocolFeeReceiver',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'protocolFeeRegistry',
    outputs: [
      { name: '', internalType: 'contract IFeeRegistry', type: 'address' },
    ],
    stateMutability: 'view',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IMaverickV2FactoryAdmin
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iMaverickV2FactoryAdminAbi = [
  {
    type: 'function',
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'receiver', internalType: 'address', type: 'address' }],
    name: 'setProtocolFeeReceiver',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'registry',
        internalType: 'contract IFeeRegistry',
        type: 'address',
      },
    ],
    name: 'setProtocolFeeRegistry',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IMaverickV2FlashLoanCallback
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iMaverickV2FlashLoanCallbackAbi = [
  {
    type: 'function',
    inputs: [
      { name: 'tokenA', internalType: 'contract IERC20', type: 'address' },
      { name: 'tokenB', internalType: 'contract IERC20', type: 'address' },
      { name: 'amountALent', internalType: 'uint256', type: 'uint256' },
      { name: 'amountBLent', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'maverickV2FlashLoanCallback',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IMaverickV2LiquidityManager
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iMaverickV2LiquidityManagerAbi = [
  { type: 'error', inputs: [], name: 'LiquidityManagerNotFactoryPool' },
  { type: 'error', inputs: [], name: 'LiquidityManagerNotTokenIdOwner' },
  {
    type: 'error',
    inputs: [
      { name: 'token', internalType: 'address', type: 'address' },
      { name: 'amountMinimum', internalType: 'uint256', type: 'uint256' },
      { name: 'contractBalance', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'PaymentInsufficientBalance',
  },
  { type: 'error', inputs: [], name: 'PaymentSenderNotWETH9' },
  {
    type: 'error',
    inputs: [
      { name: 'deadline', internalType: 'uint256', type: 'uint256' },
      { name: 'blockTimestamp', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'PositionDeadlinePassed',
  },
  {
    type: 'error',
    inputs: [
      { name: 'sqrtPrice', internalType: 'uint256', type: 'uint256' },
      { name: 'minSqrtPrice', internalType: 'uint256', type: 'uint256' },
      { name: 'maxSqrtPrice', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'PositionExceededPriceBounds',
  },
  { type: 'error', inputs: [], name: 'RouterNotFactoryPool' },
  {
    type: 'error',
    inputs: [
      { name: 'amountOutMinimum', internalType: 'uint256', type: 'uint256' },
      { name: 'amountOut', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'RouterTooLittleReceived',
  },
  {
    type: 'error',
    inputs: [
      { name: 'amountInMaximum', internalType: 'uint256', type: 'uint256' },
      { name: 'amountIn', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'RouterTooMuchRequested',
  },
  { type: 'error', inputs: [], name: 'RouterZeroSwap' },
  {
    type: 'function',
    inputs: [
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
      { name: 'recipient', internalType: 'address', type: 'address' },
      { name: 'subaccount', internalType: 'uint256', type: 'uint256' },
      { name: 'packedSqrtPriceBreaks', internalType: 'bytes', type: 'bytes' },
      { name: 'packedArgs', internalType: 'bytes[]', type: 'bytes[]' },
    ],
    name: 'addLiquidity',
    outputs: [
      { name: 'tokenAAmount', internalType: 'uint256', type: 'uint256' },
      { name: 'tokenBAmount', internalType: 'uint256', type: 'uint256' },
      { name: 'binIds', internalType: 'uint32[]', type: 'uint32[]' },
    ],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
      { name: 'recipient', internalType: 'address', type: 'address' },
      { name: 'index', internalType: 'uint256', type: 'uint256' },
      { name: 'packedSqrtPriceBreaks', internalType: 'bytes', type: 'bytes' },
      { name: 'packedArgs', internalType: 'bytes[]', type: 'bytes[]' },
    ],
    name: 'addPositionLiquidityToRecipientByTokenIndex',
    outputs: [
      { name: 'tokenAAmount', internalType: 'uint256', type: 'uint256' },
      { name: 'tokenBAmount', internalType: 'uint256', type: 'uint256' },
      { name: 'binIds', internalType: 'uint32[]', type: 'uint32[]' },
    ],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
      { name: 'index', internalType: 'uint256', type: 'uint256' },
      { name: 'packedSqrtPriceBreaks', internalType: 'bytes', type: 'bytes' },
      { name: 'packedArgs', internalType: 'bytes[]', type: 'bytes[]' },
    ],
    name: 'addPositionLiquidityToSenderByTokenIndex',
    outputs: [
      { name: 'tokenAAmount', internalType: 'uint256', type: 'uint256' },
      { name: 'tokenBAmount', internalType: 'uint256', type: 'uint256' },
      { name: 'binIds', internalType: 'uint32[]', type: 'uint32[]' },
    ],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [{ name: 'deadline', internalType: 'uint256', type: 'uint256' }],
    name: 'checkDeadline',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
      { name: 'minSqrtPrice', internalType: 'uint256', type: 'uint256' },
      { name: 'maxSqrtPrice', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'checkSqrtPrice',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'fee', internalType: 'uint64', type: 'uint64' },
      { name: 'tickSpacing', internalType: 'uint16', type: 'uint16' },
      { name: 'lookback', internalType: 'uint32', type: 'uint32' },
      { name: 'tokenA', internalType: 'contract IERC20', type: 'address' },
      { name: 'tokenB', internalType: 'contract IERC20', type: 'address' },
      { name: 'activeTick', internalType: 'int32', type: 'int32' },
      { name: 'kinds', internalType: 'uint8', type: 'uint8' },
    ],
    name: 'createPool',
    outputs: [
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
    ],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'feeAIn', internalType: 'uint64', type: 'uint64' },
      { name: 'feeBIn', internalType: 'uint64', type: 'uint64' },
      { name: 'tickSpacing', internalType: 'uint16', type: 'uint16' },
      { name: 'lookback', internalType: 'uint32', type: 'uint32' },
      { name: 'tokenA', internalType: 'contract IERC20', type: 'address' },
      { name: 'tokenB', internalType: 'contract IERC20', type: 'address' },
      { name: 'activeTick', internalType: 'int32', type: 'int32' },
      { name: 'kinds', internalType: 'uint8', type: 'uint8' },
    ],
    name: 'createPool',
    outputs: [
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
    ],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'recipient', internalType: 'address', type: 'address' },
      {
        name: 'params',
        internalType: 'struct IMaverickV2PoolLens.CreateAndAddParamsInputs',
        type: 'tuple',
        components: [
          { name: 'feeAIn', internalType: 'uint64', type: 'uint64' },
          { name: 'feeBIn', internalType: 'uint64', type: 'uint64' },
          { name: 'tickSpacing', internalType: 'uint16', type: 'uint16' },
          { name: 'lookback', internalType: 'uint32', type: 'uint32' },
          { name: 'tokenA', internalType: 'contract IERC20', type: 'address' },
          { name: 'tokenB', internalType: 'contract IERC20', type: 'address' },
          { name: 'activeTick', internalType: 'int32', type: 'int32' },
          { name: 'kinds', internalType: 'uint8', type: 'uint8' },
          {
            name: 'donateParams',
            internalType: 'struct IMaverickV2Pool.AddLiquidityParams',
            type: 'tuple',
            components: [
              { name: 'kind', internalType: 'uint8', type: 'uint8' },
              { name: 'ticks', internalType: 'int32[]', type: 'int32[]' },
              { name: 'amounts', internalType: 'uint128[]', type: 'uint128[]' },
            ],
          },
          { name: 'swapAmount', internalType: 'uint256', type: 'uint256' },
          {
            name: 'addParams',
            internalType: 'struct IMaverickV2Pool.AddLiquidityParams',
            type: 'tuple',
            components: [
              { name: 'kind', internalType: 'uint8', type: 'uint8' },
              { name: 'ticks', internalType: 'int32[]', type: 'int32[]' },
              { name: 'amounts', internalType: 'uint128[]', type: 'uint128[]' },
            ],
          },
          { name: 'packedAddParams', internalType: 'bytes[]', type: 'bytes[]' },
          { name: 'deltaAOut', internalType: 'uint256', type: 'uint256' },
          { name: 'deltaBOut', internalType: 'uint256', type: 'uint256' },
          { name: 'preAddReserveA', internalType: 'uint256', type: 'uint256' },
          { name: 'preAddReserveB', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
    name: 'createPoolAtPriceAndAddLiquidity',
    outputs: [
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
      { name: 'tokenAAmount', internalType: 'uint256', type: 'uint256' },
      { name: 'tokenBAmount', internalType: 'uint256', type: 'uint256' },
      { name: 'binIds', internalType: 'uint32[]', type: 'uint32[]' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'params',
        internalType: 'struct IMaverickV2PoolLens.CreateAndAddParamsInputs',
        type: 'tuple',
        components: [
          { name: 'feeAIn', internalType: 'uint64', type: 'uint64' },
          { name: 'feeBIn', internalType: 'uint64', type: 'uint64' },
          { name: 'tickSpacing', internalType: 'uint16', type: 'uint16' },
          { name: 'lookback', internalType: 'uint32', type: 'uint32' },
          { name: 'tokenA', internalType: 'contract IERC20', type: 'address' },
          { name: 'tokenB', internalType: 'contract IERC20', type: 'address' },
          { name: 'activeTick', internalType: 'int32', type: 'int32' },
          { name: 'kinds', internalType: 'uint8', type: 'uint8' },
          {
            name: 'donateParams',
            internalType: 'struct IMaverickV2Pool.AddLiquidityParams',
            type: 'tuple',
            components: [
              { name: 'kind', internalType: 'uint8', type: 'uint8' },
              { name: 'ticks', internalType: 'int32[]', type: 'int32[]' },
              { name: 'amounts', internalType: 'uint128[]', type: 'uint128[]' },
            ],
          },
          { name: 'swapAmount', internalType: 'uint256', type: 'uint256' },
          {
            name: 'addParams',
            internalType: 'struct IMaverickV2Pool.AddLiquidityParams',
            type: 'tuple',
            components: [
              { name: 'kind', internalType: 'uint8', type: 'uint8' },
              { name: 'ticks', internalType: 'int32[]', type: 'int32[]' },
              { name: 'amounts', internalType: 'uint128[]', type: 'uint128[]' },
            ],
          },
          { name: 'packedAddParams', internalType: 'bytes[]', type: 'bytes[]' },
          { name: 'deltaAOut', internalType: 'uint256', type: 'uint256' },
          { name: 'deltaBOut', internalType: 'uint256', type: 'uint256' },
          { name: 'preAddReserveA', internalType: 'uint256', type: 'uint256' },
          { name: 'preAddReserveB', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
    name: 'createPoolAtPriceAndAddLiquidityToSender',
    outputs: [
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
      { name: 'tokenAAmount', internalType: 'uint256', type: 'uint256' },
      { name: 'tokenBAmount', internalType: 'uint256', type: 'uint256' },
      { name: 'binIds', internalType: 'uint32[]', type: 'uint32[]' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
      {
        name: 'args',
        internalType: 'struct IMaverickV2Pool.AddLiquidityParams',
        type: 'tuple',
        components: [
          { name: 'kind', internalType: 'uint8', type: 'uint8' },
          { name: 'ticks', internalType: 'int32[]', type: 'int32[]' },
          { name: 'amounts', internalType: 'uint128[]', type: 'uint128[]' },
        ],
      },
    ],
    name: 'donateLiquidity',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'recipient', internalType: 'address', type: 'address' },
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
      { name: 'tokenAIn', internalType: 'bool', type: 'bool' },
      { name: 'amountOut', internalType: 'uint256', type: 'uint256' },
      { name: 'tickLimit', internalType: 'int32', type: 'int32' },
    ],
    name: 'exactOutputSingleMinimal',
    outputs: [
      { name: 'amountIn', internalType: 'uint256', type: 'uint256' },
      { name: 'amountOut_', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'factory',
    outputs: [
      {
        name: '_factory',
        internalType: 'contract IMaverickV2Factory',
        type: 'address',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
      { name: 'binIds', internalType: 'uint32[]', type: 'uint32[]' },
      { name: 'maxRecursion', internalType: 'uint32', type: 'uint32' },
    ],
    name: 'migrateBinsUpStack',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
      { name: 'recipient', internalType: 'address', type: 'address' },
      { name: 'packedSqrtPriceBreaks', internalType: 'bytes', type: 'bytes' },
      { name: 'packedArgs', internalType: 'bytes[]', type: 'bytes[]' },
    ],
    name: 'mintPositionNft',
    outputs: [
      { name: 'tokenAAmount', internalType: 'uint256', type: 'uint256' },
      { name: 'tokenBAmount', internalType: 'uint256', type: 'uint256' },
      { name: 'binIds', internalType: 'uint32[]', type: 'uint32[]' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
      { name: 'packedSqrtPriceBreaks', internalType: 'bytes', type: 'bytes' },
      { name: 'packedArgs', internalType: 'bytes[]', type: 'bytes[]' },
    ],
    name: 'mintPositionNftToSender',
    outputs: [
      { name: 'tokenAAmount', internalType: 'uint256', type: 'uint256' },
      { name: 'tokenBAmount', internalType: 'uint256', type: 'uint256' },
      { name: 'binIds', internalType: 'uint32[]', type: 'uint32[]' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [{ name: 'data', internalType: 'bytes[]', type: 'bytes[]' }],
    name: 'multicall',
    outputs: [{ name: 'results', internalType: 'bytes[]', type: 'bytes[]' }],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'args',
        internalType: 'struct IMaverickV2Pool.AddLiquidityParams',
        type: 'tuple',
        components: [
          { name: 'kind', internalType: 'uint8', type: 'uint8' },
          { name: 'ticks', internalType: 'int32[]', type: 'int32[]' },
          { name: 'amounts', internalType: 'uint128[]', type: 'uint128[]' },
        ],
      },
    ],
    name: 'packAddLiquidityArgs',
    outputs: [{ name: 'argsPacked', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'args',
        internalType: 'struct IMaverickV2Pool.AddLiquidityParams[]',
        type: 'tuple[]',
        components: [
          { name: 'kind', internalType: 'uint8', type: 'uint8' },
          { name: 'ticks', internalType: 'int32[]', type: 'int32[]' },
          { name: 'amounts', internalType: 'uint128[]', type: 'uint128[]' },
        ],
      },
    ],
    name: 'packAddLiquidityArgsArray',
    outputs: [{ name: 'argsPacked', internalType: 'bytes[]', type: 'bytes[]' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [{ name: 'fullArray', internalType: 'uint88[]', type: 'uint88[]' }],
    name: 'packUint88Array',
    outputs: [{ name: 'packedArray', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [],
    name: 'position',
    outputs: [
      {
        name: '',
        internalType: 'contract IMaverickV2Position',
        type: 'address',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'refundETH',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'token', internalType: 'contract IERC20', type: 'address' },
      { name: 'amountMinimum', internalType: 'uint256', type: 'uint256' },
      { name: 'recipient', internalType: 'address', type: 'address' },
    ],
    name: 'sweepToken',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'token', internalType: 'contract IERC20', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
      { name: 'recipient', internalType: 'address', type: 'address' },
    ],
    name: 'sweepTokenAmount',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [{ name: 'argsPacked', internalType: 'bytes', type: 'bytes' }],
    name: 'unpackAddLiquidityArgs',
    outputs: [
      {
        name: 'args',
        internalType: 'struct IMaverickV2Pool.AddLiquidityParams',
        type: 'tuple',
        components: [
          { name: 'kind', internalType: 'uint8', type: 'uint8' },
          { name: 'ticks', internalType: 'int32[]', type: 'int32[]' },
          { name: 'amounts', internalType: 'uint128[]', type: 'uint128[]' },
        ],
      },
    ],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [{ name: 'packedArray', internalType: 'bytes', type: 'bytes' }],
    name: 'unpackUint88Array',
    outputs: [
      { name: 'fullArray', internalType: 'uint88[]', type: 'uint88[]' },
    ],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'tokenA', internalType: 'contract IERC20', type: 'address' },
      { name: 'tokenB', internalType: 'contract IERC20', type: 'address' },
      { name: 'tokenAAmountMin', internalType: 'uint256', type: 'uint256' },
      { name: 'tokenBAmountMin', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'unwrapAndSweep',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'amountMinimum', internalType: 'uint256', type: 'uint256' },
      { name: 'recipient', internalType: 'address', type: 'address' },
    ],
    name: 'unwrapWETH9',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'weth',
    outputs: [
      { name: '_weth', internalType: 'contract IWETH9', type: 'address' },
    ],
    stateMutability: 'view',
  },
  { type: 'receive', stateMutability: 'payable' },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IMaverickV2Pool
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iMaverickV2PoolAbi = [
  {
    type: 'error',
    inputs: [
      { name: 'binIdsLength', internalType: 'uint256', type: 'uint256' },
      { name: 'amountsLength', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'PoolBinIdsAmountsLengthMismatch',
  },
  {
    type: 'error',
    inputs: [{ name: 'startingTick', internalType: 'int32', type: 'int32' }],
    name: 'PoolCurrentTickBeyondSwapLimit',
  },
  { type: 'error', inputs: [], name: 'PoolFunctionNotImplemented' },
  {
    type: 'error',
    inputs: [
      { name: 'deltaLpAmount', internalType: 'uint256', type: 'uint256' },
      { name: 'accountBalance', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'PoolInsufficientBalance',
  },
  { type: 'error', inputs: [], name: 'PoolInvalidFee' },
  {
    type: 'error',
    inputs: [
      { name: 'kinds', internalType: 'uint256', type: 'uint256' },
      { name: 'kind', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'PoolKindNotSupported',
  },
  { type: 'error', inputs: [], name: 'PoolLocked' },
  { type: 'error', inputs: [], name: 'PoolMigrateBinFirst' },
  { type: 'error', inputs: [], name: 'PoolMinimumLiquidityNotMet' },
  { type: 'error', inputs: [], name: 'PoolNoProtocolFeeReceiverSet' },
  {
    type: 'error',
    inputs: [{ name: 'amount', internalType: 'uint256', type: 'uint256' }],
    name: 'PoolReservesExceedMaximum',
  },
  {
    type: 'error',
    inputs: [
      { name: 'sender_', internalType: 'address', type: 'address' },
      { name: 'accessor', internalType: 'address', type: 'address' },
    ],
    name: 'PoolSenderNotAccessor',
  },
  {
    type: 'error',
    inputs: [
      { name: 'sender_', internalType: 'address', type: 'address' },
      { name: 'accessor', internalType: 'address', type: 'address' },
    ],
    name: 'PoolSenderNotFactory',
  },
  {
    type: 'error',
    inputs: [{ name: 'tick', internalType: 'uint256', type: 'uint256' }],
    name: 'PoolTickMaxExceeded',
  },
  {
    type: 'error',
    inputs: [
      { name: 'ticksLength', internalType: 'uint256', type: 'uint256' },
      { name: 'amountsLength', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'PoolTicksAmountsLengthMismatch',
  },
  {
    type: 'error',
    inputs: [
      { name: 'index', internalType: 'uint256', type: 'uint256' },
      { name: 'previousTick', internalType: 'int256', type: 'int256' },
      { name: 'tick', internalType: 'int256', type: 'int256' },
    ],
    name: 'PoolTicksNotSorted',
  },
  {
    type: 'error',
    inputs: [
      { name: 'internalReserve', internalType: 'uint256', type: 'uint256' },
      { name: 'tokenBalance', internalType: 'uint256', type: 'uint256' },
      { name: 'token', internalType: 'contract IERC20', type: 'address' },
    ],
    name: 'PoolTokenNotSolvent',
  },
  {
    type: 'error',
    inputs: [
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
      { name: 'bits', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'PoolValueExceedsBits',
  },
  { type: 'error', inputs: [], name: 'PoolZeroLiquidityAdded' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'recipient',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'subaccount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'params',
        internalType: 'struct IMaverickV2Pool.AddLiquidityParams',
        type: 'tuple',
        components: [
          { name: 'kind', internalType: 'uint8', type: 'uint8' },
          { name: 'ticks', internalType: 'int32[]', type: 'int32[]' },
          { name: 'amounts', internalType: 'uint128[]', type: 'uint128[]' },
        ],
        indexed: false,
      },
      {
        name: 'tokenAAmount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'tokenBAmount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'binIds',
        internalType: 'uint32[]',
        type: 'uint32[]',
        indexed: false,
      },
    ],
    name: 'PoolAddLiquidity',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'recipient',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'amountA',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'amountB',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'PoolFlashLoan',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      { name: 'binId', internalType: 'uint32', type: 'uint32', indexed: false },
      {
        name: 'maxRecursion',
        internalType: 'uint32',
        type: 'uint32',
        indexed: false,
      },
    ],
    name: 'PoolMigrateBinsUpStack',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'token',
        internalType: 'contract IERC20',
        type: 'address',
        indexed: false,
      },
      {
        name: 'protocolFee',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'PoolProtocolFeeCollected',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'recipient',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'subaccount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'params',
        internalType: 'struct IMaverickV2Pool.RemoveLiquidityParams',
        type: 'tuple',
        components: [
          { name: 'binIds', internalType: 'uint32[]', type: 'uint32[]' },
          { name: 'amounts', internalType: 'uint128[]', type: 'uint128[]' },
        ],
        indexed: false,
      },
      {
        name: 'tokenAOut',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'tokenBOut',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'PoolRemoveLiquidity',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'sqrtPrice',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'PoolSqrtPrice',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'recipient',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'params',
        internalType: 'struct IMaverickV2Pool.SwapParams',
        type: 'tuple',
        components: [
          { name: 'amount', internalType: 'uint256', type: 'uint256' },
          { name: 'tokenAIn', internalType: 'bool', type: 'bool' },
          { name: 'exactOutput', internalType: 'bool', type: 'bool' },
          { name: 'tickLimit', internalType: 'int32', type: 'int32' },
        ],
        indexed: false,
      },
      {
        name: 'amountIn',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'amountOut',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'PoolSwap',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'tick', internalType: 'int32', type: 'int32', indexed: false },
      { name: 'kind', internalType: 'uint8', type: 'uint8', indexed: false },
      { name: 'binId', internalType: 'uint32', type: 'uint32', indexed: false },
    ],
    name: 'PoolTickBinUpdate',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'tick', internalType: 'int32', type: 'int32', indexed: false },
      {
        name: 'reserveA',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'reserveB',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'PoolTickState',
  },
  {
    type: 'function',
    inputs: [],
    name: 'accessor',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'recipient', internalType: 'address', type: 'address' },
      { name: 'subaccount', internalType: 'uint256', type: 'uint256' },
      {
        name: 'params',
        internalType: 'struct IMaverickV2Pool.AddLiquidityParams',
        type: 'tuple',
        components: [
          { name: 'kind', internalType: 'uint8', type: 'uint8' },
          { name: 'ticks', internalType: 'int32[]', type: 'int32[]' },
          { name: 'amounts', internalType: 'uint128[]', type: 'uint128[]' },
        ],
      },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'addLiquidity',
    outputs: [
      { name: 'tokenAAmount', internalType: 'uint256', type: 'uint256' },
      { name: 'tokenBAmount', internalType: 'uint256', type: 'uint256' },
      { name: 'binIds', internalType: 'uint32[]', type: 'uint32[]' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'user', internalType: 'address', type: 'address' },
      { name: 'subaccount', internalType: 'uint256', type: 'uint256' },
      { name: 'binId', internalType: 'uint32', type: 'uint32' },
    ],
    name: 'balanceOf',
    outputs: [{ name: 'lpToken', internalType: 'uint128', type: 'uint128' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'tick', internalType: 'int32', type: 'int32' },
      { name: 'kind', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'binIdByTickKind',
    outputs: [{ name: '', internalType: 'uint32', type: 'uint32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'isTokenA', internalType: 'bool', type: 'bool' }],
    name: 'distributeFees',
    outputs: [
      { name: 'protocolFee', internalType: 'uint256', type: 'uint256' },
      { name: 'token', internalType: 'contract IERC20', type: 'address' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'factory',
    outputs: [
      {
        name: '',
        internalType: 'contract IMaverickV2Factory',
        type: 'address',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenAIn', internalType: 'bool', type: 'bool' }],
    name: 'fee',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'recipient', internalType: 'address', type: 'address' },
      { name: 'amountA', internalType: 'uint256', type: 'uint256' },
      { name: 'amountB', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'flashLoan',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'binId', internalType: 'uint32', type: 'uint32' }],
    name: 'getBin',
    outputs: [
      {
        name: 'bin',
        internalType: 'struct IMaverickV2Pool.BinState',
        type: 'tuple',
        components: [
          { name: 'mergeBinBalance', internalType: 'uint128', type: 'uint128' },
          { name: 'tickBalance', internalType: 'uint128', type: 'uint128' },
          { name: 'totalSupply', internalType: 'uint128', type: 'uint128' },
          { name: 'kind', internalType: 'uint8', type: 'uint8' },
          { name: 'tick', internalType: 'int32', type: 'int32' },
          { name: 'mergeId', internalType: 'uint32', type: 'uint32' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getCurrentTwa',
    outputs: [{ name: '', internalType: 'int256', type: 'int256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getState',
    outputs: [
      {
        name: '',
        internalType: 'struct IMaverickV2Pool.State',
        type: 'tuple',
        components: [
          { name: 'reserveA', internalType: 'uint128', type: 'uint128' },
          { name: 'reserveB', internalType: 'uint128', type: 'uint128' },
          { name: 'lastTwaD8', internalType: 'int64', type: 'int64' },
          { name: 'lastLogPriceD8', internalType: 'int64', type: 'int64' },
          { name: 'lastTimestamp', internalType: 'uint40', type: 'uint40' },
          { name: 'activeTick', internalType: 'int32', type: 'int32' },
          { name: 'isLocked', internalType: 'bool', type: 'bool' },
          { name: 'binCounter', internalType: 'uint32', type: 'uint32' },
          { name: 'protocolFeeRatioD3', internalType: 'uint8', type: 'uint8' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tick', internalType: 'int32', type: 'int32' }],
    name: 'getTick',
    outputs: [
      {
        name: 'tickState',
        internalType: 'struct IMaverickV2Pool.TickState',
        type: 'tuple',
        components: [
          { name: 'reserveA', internalType: 'uint128', type: 'uint128' },
          { name: 'reserveB', internalType: 'uint128', type: 'uint128' },
          { name: 'totalSupply', internalType: 'uint128', type: 'uint128' },
          {
            name: 'binIdsByTick',
            internalType: 'uint32[4]',
            type: 'uint32[4]',
          },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'kinds',
    outputs: [{ name: '_kinds', internalType: 'uint8', type: 'uint8' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'lendingFeeRateD18',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'lookback',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'binId', internalType: 'uint32', type: 'uint32' },
      { name: 'maxRecursion', internalType: 'uint32', type: 'uint32' },
    ],
    name: 'migrateBinUpStack',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'protocolFeeA',
    outputs: [{ name: '', internalType: 'uint128', type: 'uint128' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'protocolFeeB',
    outputs: [{ name: '', internalType: 'uint128', type: 'uint128' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'recipient', internalType: 'address', type: 'address' },
      { name: 'subaccount', internalType: 'uint256', type: 'uint256' },
      {
        name: 'params',
        internalType: 'struct IMaverickV2Pool.RemoveLiquidityParams',
        type: 'tuple',
        components: [
          { name: 'binIds', internalType: 'uint32[]', type: 'uint32[]' },
          { name: 'amounts', internalType: 'uint128[]', type: 'uint128[]' },
        ],
      },
    ],
    name: 'removeLiquidity',
    outputs: [
      { name: 'tokenAOut', internalType: 'uint256', type: 'uint256' },
      { name: 'tokenBOut', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'recipient', internalType: 'address', type: 'address' },
      {
        name: 'params',
        internalType: 'struct IMaverickV2Pool.SwapParams',
        type: 'tuple',
        components: [
          { name: 'amount', internalType: 'uint256', type: 'uint256' },
          { name: 'tokenAIn', internalType: 'bool', type: 'bool' },
          { name: 'exactOutput', internalType: 'bool', type: 'bool' },
          { name: 'tickLimit', internalType: 'int32', type: 'int32' },
        ],
      },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'swap',
    outputs: [
      { name: 'amountIn', internalType: 'uint256', type: 'uint256' },
      { name: 'amountOut', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'tickSpacing',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'tokenA',
    outputs: [{ name: '', internalType: 'contract IERC20', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'tokenAScale',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'tokenB',
    outputs: [{ name: '', internalType: 'contract IERC20', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'tokenBScale',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IMaverickV2PoolLens
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iMaverickV2PoolLensAbi = [
  {
    type: 'error',
    inputs: [
      { name: 'targetSqrtPrice', internalType: 'uint256', type: 'uint256' },
      { name: 'sqrtLowerTickPrice', internalType: 'uint256', type: 'uint256' },
      { name: 'sqrtUpperTickPrice', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'LensTargetPriceOutOfBounds',
  },
  {
    type: 'error',
    inputs: [
      { name: 'targetIsA', internalType: 'bool', type: 'bool' },
      { name: 'deltaA', internalType: 'uint256', type: 'uint256' },
      { name: 'deltaB', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'LensTargetingTokenWithNoDelta',
  },
  {
    type: 'error',
    inputs: [
      {
        name: 'relativeLiquidityAmount',
        internalType: 'uint256',
        type: 'uint256',
      },
      { name: 'deltaA', internalType: 'uint256', type: 'uint256' },
      { name: 'deltaB', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'LensTooLittleLiquidity',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'params',
        internalType: 'struct IMaverickV2PoolLens.AddParamsViewInputs',
        type: 'tuple',
        components: [
          {
            name: 'pool',
            internalType: 'contract IMaverickV2Pool',
            type: 'address',
          },
          { name: 'kind', internalType: 'uint8', type: 'uint8' },
          { name: 'ticks', internalType: 'int32[]', type: 'int32[]' },
          {
            name: 'relativeLiquidityAmounts',
            internalType: 'uint128[]',
            type: 'uint128[]',
          },
          {
            name: 'addSpec',
            internalType: 'struct IMaverickV2PoolLens.AddParamsSpecification',
            type: 'tuple',
            components: [
              {
                name: 'slippageFactorD18',
                internalType: 'uint256',
                type: 'uint256',
              },
              {
                name: 'numberOfPriceBreaksPerSide',
                internalType: 'uint256',
                type: 'uint256',
              },
              {
                name: 'targetAmount',
                internalType: 'uint256',
                type: 'uint256',
              },
              { name: 'targetIsA', internalType: 'bool', type: 'bool' },
            ],
          },
        ],
      },
    ],
    name: 'getAddLiquidityParams',
    outputs: [
      { name: 'packedSqrtPriceBreaks', internalType: 'bytes', type: 'bytes' },
      { name: 'packedArgs', internalType: 'bytes[]', type: 'bytes[]' },
      { name: 'sqrtPriceBreaks', internalType: 'uint88[]', type: 'uint88[]' },
      {
        name: 'addParams',
        internalType: 'struct IMaverickV2Pool.AddLiquidityParams[]',
        type: 'tuple[]',
        components: [
          { name: 'kind', internalType: 'uint8', type: 'uint8' },
          { name: 'ticks', internalType: 'int32[]', type: 'int32[]' },
          { name: 'amounts', internalType: 'uint128[]', type: 'uint128[]' },
        ],
      },
      {
        name: 'tickDeltas',
        internalType: 'struct IMaverickV2PoolLens.TickDeltas[]',
        type: 'tuple[]',
        components: [
          { name: 'deltaAOut', internalType: 'uint256', type: 'uint256' },
          { name: 'deltaBOut', internalType: 'uint256', type: 'uint256' },
          { name: 'deltaAs', internalType: 'uint256[]', type: 'uint256[]' },
          { name: 'deltaBs', internalType: 'uint256[]', type: 'uint256[]' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'params',
        internalType: 'struct IMaverickV2PoolLens.CreateAndAddParamsViewInputs',
        type: 'tuple',
        components: [
          { name: 'feeAIn', internalType: 'uint64', type: 'uint64' },
          { name: 'feeBIn', internalType: 'uint64', type: 'uint64' },
          { name: 'tickSpacing', internalType: 'uint16', type: 'uint16' },
          { name: 'lookback', internalType: 'uint32', type: 'uint32' },
          { name: 'tokenA', internalType: 'contract IERC20', type: 'address' },
          { name: 'tokenB', internalType: 'contract IERC20', type: 'address' },
          { name: 'activeTick', internalType: 'int32', type: 'int32' },
          { name: 'kinds', internalType: 'uint8', type: 'uint8' },
          { name: 'initialTargetB', internalType: 'uint256', type: 'uint256' },
          { name: 'sqrtPrice', internalType: 'uint256', type: 'uint256' },
          { name: 'kind', internalType: 'uint8', type: 'uint8' },
          { name: 'ticks', internalType: 'int32[]', type: 'int32[]' },
          {
            name: 'relativeLiquidityAmounts',
            internalType: 'uint128[]',
            type: 'uint128[]',
          },
          { name: 'targetAmount', internalType: 'uint256', type: 'uint256' },
          { name: 'targetIsA', internalType: 'bool', type: 'bool' },
        ],
      },
    ],
    name: 'getCreatePoolAtPriceAndAddLiquidityParams',
    outputs: [
      {
        name: 'output',
        internalType: 'struct IMaverickV2PoolLens.CreateAndAddParamsInputs',
        type: 'tuple',
        components: [
          { name: 'feeAIn', internalType: 'uint64', type: 'uint64' },
          { name: 'feeBIn', internalType: 'uint64', type: 'uint64' },
          { name: 'tickSpacing', internalType: 'uint16', type: 'uint16' },
          { name: 'lookback', internalType: 'uint32', type: 'uint32' },
          { name: 'tokenA', internalType: 'contract IERC20', type: 'address' },
          { name: 'tokenB', internalType: 'contract IERC20', type: 'address' },
          { name: 'activeTick', internalType: 'int32', type: 'int32' },
          { name: 'kinds', internalType: 'uint8', type: 'uint8' },
          {
            name: 'donateParams',
            internalType: 'struct IMaverickV2Pool.AddLiquidityParams',
            type: 'tuple',
            components: [
              { name: 'kind', internalType: 'uint8', type: 'uint8' },
              { name: 'ticks', internalType: 'int32[]', type: 'int32[]' },
              { name: 'amounts', internalType: 'uint128[]', type: 'uint128[]' },
            ],
          },
          { name: 'swapAmount', internalType: 'uint256', type: 'uint256' },
          {
            name: 'addParams',
            internalType: 'struct IMaverickV2Pool.AddLiquidityParams',
            type: 'tuple',
            components: [
              { name: 'kind', internalType: 'uint8', type: 'uint8' },
              { name: 'ticks', internalType: 'int32[]', type: 'int32[]' },
              { name: 'amounts', internalType: 'uint128[]', type: 'uint128[]' },
            ],
          },
          { name: 'packedAddParams', internalType: 'bytes[]', type: 'bytes[]' },
          { name: 'deltaAOut', internalType: 'uint256', type: 'uint256' },
          { name: 'deltaBOut', internalType: 'uint256', type: 'uint256' },
          { name: 'preAddReserveA', internalType: 'uint256', type: 'uint256' },
          { name: 'preAddReserveB', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
      { name: 'binStart', internalType: 'uint32', type: 'uint32' },
      { name: 'binEnd', internalType: 'uint32', type: 'uint32' },
    ],
    name: 'getFullPoolState',
    outputs: [
      {
        name: 'poolState',
        internalType: 'struct IMaverickV2PoolLens.PoolState',
        type: 'tuple',
        components: [
          {
            name: 'tickStateMapping',
            internalType: 'struct IMaverickV2Pool.TickState[]',
            type: 'tuple[]',
            components: [
              { name: 'reserveA', internalType: 'uint128', type: 'uint128' },
              { name: 'reserveB', internalType: 'uint128', type: 'uint128' },
              { name: 'totalSupply', internalType: 'uint128', type: 'uint128' },
              {
                name: 'binIdsByTick',
                internalType: 'uint32[4]',
                type: 'uint32[4]',
              },
            ],
          },
          {
            name: 'binStateMapping',
            internalType: 'struct IMaverickV2Pool.BinState[]',
            type: 'tuple[]',
            components: [
              {
                name: 'mergeBinBalance',
                internalType: 'uint128',
                type: 'uint128',
              },
              { name: 'tickBalance', internalType: 'uint128', type: 'uint128' },
              { name: 'totalSupply', internalType: 'uint128', type: 'uint128' },
              { name: 'kind', internalType: 'uint8', type: 'uint8' },
              { name: 'tick', internalType: 'int32', type: 'int32' },
              { name: 'mergeId', internalType: 'uint32', type: 'uint32' },
            ],
          },
          {
            name: 'binIdByTickKindMapping',
            internalType: 'struct IMaverickV2PoolLens.BinPositionKinds[]',
            type: 'tuple[]',
            components: [
              {
                name: 'values',
                internalType: 'uint128[4]',
                type: 'uint128[4]',
              },
            ],
          },
          {
            name: 'state',
            internalType: 'struct IMaverickV2Pool.State',
            type: 'tuple',
            components: [
              { name: 'reserveA', internalType: 'uint128', type: 'uint128' },
              { name: 'reserveB', internalType: 'uint128', type: 'uint128' },
              { name: 'lastTwaD8', internalType: 'int64', type: 'int64' },
              { name: 'lastLogPriceD8', internalType: 'int64', type: 'int64' },
              { name: 'lastTimestamp', internalType: 'uint40', type: 'uint40' },
              { name: 'activeTick', internalType: 'int32', type: 'int32' },
              { name: 'isLocked', internalType: 'bool', type: 'bool' },
              { name: 'binCounter', internalType: 'uint32', type: 'uint32' },
              {
                name: 'protocolFeeRatioD3',
                internalType: 'uint8',
                type: 'uint8',
              },
            ],
          },
          {
            name: 'protocolFees',
            internalType: 'struct IMaverickV2PoolLens.Reserves',
            type: 'tuple',
            components: [
              { name: 'amountA', internalType: 'uint256', type: 'uint256' },
              { name: 'amountB', internalType: 'uint256', type: 'uint256' },
            ],
          },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
    ],
    name: 'getPoolPrice',
    outputs: [{ name: 'price', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
    ],
    name: 'getPoolSqrtPrice',
    outputs: [{ name: 'sqrtPrice', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
      { name: 'tick', internalType: 'int32', type: 'int32' },
    ],
    name: 'getTickSqrtPriceAndL',
    outputs: [
      { name: 'sqrtPrice', internalType: 'uint256', type: 'uint256' },
      { name: 'liquidity', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
      { name: 'tickStart', internalType: 'int32', type: 'int32' },
      { name: 'tickEnd', internalType: 'int32', type: 'int32' },
    ],
    name: 'getTicks',
    outputs: [
      { name: 'ticks', internalType: 'int32[]', type: 'int32[]' },
      {
        name: 'tickStates',
        internalType: 'struct IMaverickV2Pool.TickState[]',
        type: 'tuple[]',
        components: [
          { name: 'reserveA', internalType: 'uint128', type: 'uint128' },
          { name: 'reserveB', internalType: 'uint128', type: 'uint128' },
          { name: 'totalSupply', internalType: 'uint128', type: 'uint128' },
          {
            name: 'binIdsByTick',
            internalType: 'uint32[4]',
            type: 'uint32[4]',
          },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
      { name: 'tickRadius', internalType: 'int32', type: 'int32' },
    ],
    name: 'getTicksAroundActive',
    outputs: [
      { name: 'ticks', internalType: 'int32[]', type: 'int32[]' },
      {
        name: 'tickStates',
        internalType: 'struct IMaverickV2Pool.TickState[]',
        type: 'tuple[]',
        components: [
          { name: 'reserveA', internalType: 'uint128', type: 'uint128' },
          { name: 'reserveB', internalType: 'uint128', type: 'uint128' },
          { name: 'totalSupply', internalType: 'uint128', type: 'uint128' },
          {
            name: 'binIdsByTick',
            internalType: 'uint32[4]',
            type: 'uint32[4]',
          },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
      { name: 'tickRadius', internalType: 'int32', type: 'int32' },
    ],
    name: 'getTicksAroundActiveWLiquidity',
    outputs: [
      { name: 'ticks', internalType: 'int32[]', type: 'int32[]' },
      {
        name: 'tickStates',
        internalType: 'struct IMaverickV2Pool.TickState[]',
        type: 'tuple[]',
        components: [
          { name: 'reserveA', internalType: 'uint128', type: 'uint128' },
          { name: 'reserveB', internalType: 'uint128', type: 'uint128' },
          { name: 'totalSupply', internalType: 'uint128', type: 'uint128' },
          {
            name: 'binIdsByTick',
            internalType: 'uint32[4]',
            type: 'uint32[4]',
          },
        ],
      },
      { name: 'liquidities', internalType: 'uint256[]', type: 'uint256[]' },
      {
        name: 'sqrtLowerTickPrices',
        internalType: 'uint256[]',
        type: 'uint256[]',
      },
      {
        name: 'sqrtUpperTickPrices',
        internalType: 'uint256[]',
        type: 'uint256[]',
      },
      {
        name: 'poolState',
        internalType: 'struct IMaverickV2Pool.State',
        type: 'tuple',
        components: [
          { name: 'reserveA', internalType: 'uint128', type: 'uint128' },
          { name: 'reserveB', internalType: 'uint128', type: 'uint128' },
          { name: 'lastTwaD8', internalType: 'int64', type: 'int64' },
          { name: 'lastLogPriceD8', internalType: 'int64', type: 'int64' },
          { name: 'lastTimestamp', internalType: 'uint40', type: 'uint40' },
          { name: 'activeTick', internalType: 'int32', type: 'int32' },
          { name: 'isLocked', internalType: 'bool', type: 'bool' },
          { name: 'binCounter', internalType: 'uint32', type: 'uint32' },
          { name: 'protocolFeeRatioD3', internalType: 'uint8', type: 'uint8' },
        ],
      },
      { name: 'sqrtPrice', internalType: 'uint256', type: 'uint256' },
      { name: 'feeAIn', internalType: 'uint256', type: 'uint256' },
      { name: 'feeBIn', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
    ],
    name: 'tokenScales',
    outputs: [
      { name: 'tokenAScale', internalType: 'uint256', type: 'uint256' },
      { name: 'tokenBScale', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IMaverickV2Position
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iMaverickV2PositionAbi = [
  {
    type: 'error',
    inputs: [
      { name: 'deadline', internalType: 'uint256', type: 'uint256' },
      { name: 'blockTimestamp', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'PositionDeadlinePassed',
  },
  {
    type: 'error',
    inputs: [
      { name: 'index', internalType: 'uint256', type: 'uint256' },
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
    ],
    name: 'PositionDuplicatePool',
  },
  {
    type: 'error',
    inputs: [
      { name: 'sqrtPrice', internalType: 'uint256', type: 'uint256' },
      { name: 'minSqrtPrice', internalType: 'uint256', type: 'uint256' },
      { name: 'maxSqrtPrice', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'PositionExceededPriceBounds',
  },
  { type: 'error', inputs: [], name: 'PositionNotFactoryPool' },
  { type: 'error', inputs: [], name: 'PositionPermissionedLiquidityPool' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'approved',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'approved', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'ApprovalForAll',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'PositionClearData',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'index',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'newData',
        internalType: 'struct IMaverickV2Position.PositionPoolBinIds',
        type: 'tuple',
        components: [
          {
            name: 'pool',
            internalType: 'contract IMaverickV2Pool',
            type: 'address',
          },
          { name: 'binIds', internalType: 'uint32[]', type: 'uint32[]' },
        ],
        indexed: false,
      },
    ],
    name: 'PositionSetData',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'lpReward',
        internalType: 'contract ILiquidityRegistry',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'SetLpReward',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'positionImage',
        internalType: 'contract IPositionImage',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'SetPositionImage',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Transfer',
  },
  {
    type: 'function',
    inputs: [
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
      { name: 'binIds', internalType: 'uint32[]', type: 'uint32[]' },
    ],
    name: 'appendTokenIdData',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: 'balance', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'checkAuthorized',
    outputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'deadline', internalType: 'uint256', type: 'uint256' }],
    name: 'checkDeadline',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
      { name: 'minSqrtPrice', internalType: 'uint256', type: 'uint256' },
      { name: 'maxSqrtPrice', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'checkSqrtPrice',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
      { name: 'binIds', internalType: 'uint32[]', type: 'uint32[]' },
    ],
    name: 'checkpointBinLpBalance',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'factory',
    outputs: [
      {
        name: '',
        internalType: 'contract IMaverickV2Factory',
        type: 'address',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'getApproved',
    outputs: [{ name: 'operator', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'index', internalType: 'uint256', type: 'uint256' },
      { name: 'proportionD18', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'getRemoveParams',
    outputs: [
      {
        name: 'params',
        internalType: 'struct IMaverickV2Pool.RemoveLiquidityParams',
        type: 'tuple',
        components: [
          { name: 'binIds', internalType: 'uint32[]', type: 'uint32[]' },
          { name: 'amounts', internalType: 'uint128[]', type: 'uint128[]' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'getTokenIdData',
    outputs: [
      {
        name: '',
        internalType: 'struct IMaverickV2Position.PositionPoolBinIds[]',
        type: 'tuple[]',
        components: [
          {
            name: 'pool',
            internalType: 'contract IMaverickV2Pool',
            type: 'address',
          },
          { name: 'binIds', internalType: 'uint32[]', type: 'uint32[]' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'index', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'getTokenIdData',
    outputs: [
      {
        name: '',
        internalType: 'struct IMaverickV2Position.PositionPoolBinIds',
        type: 'tuple',
        components: [
          {
            name: 'pool',
            internalType: 'contract IMaverickV2Pool',
            type: 'address',
          },
          { name: 'binIds', internalType: 'uint32[]', type: 'uint32[]' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'operator', internalType: 'address', type: 'address' },
    ],
    name: 'isApprovedForAll',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'lpReward',
    outputs: [
      {
        name: '',
        internalType: 'contract ILiquidityRegistry',
        type: 'address',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
      { name: 'binIds', internalType: 'uint32[]', type: 'uint32[]' },
      { name: 'maxRecursion', internalType: 'uint32', type: 'uint32' },
    ],
    name: 'migrateBinsUpStack',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'recipient', internalType: 'address', type: 'address' },
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
      { name: 'binIds', internalType: 'uint32[]', type: 'uint32[]' },
    ],
    name: 'mint',
    outputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'data', internalType: 'bytes[]', type: 'bytes[]' }],
    name: 'multicall',
    outputs: [{ name: 'results', internalType: 'bytes[]', type: 'bytes[]' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'nextTokenId',
    outputs: [
      { name: 'nextTokenId_', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ownerOf',
    outputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'positionImage',
    outputs: [
      { name: '', internalType: 'contract IPositionImage', type: 'address' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'recipient', internalType: 'address', type: 'address' },
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
      {
        name: 'params',
        internalType: 'struct IMaverickV2Pool.RemoveLiquidityParams',
        type: 'tuple',
        components: [
          { name: 'binIds', internalType: 'uint32[]', type: 'uint32[]' },
          { name: 'amounts', internalType: 'uint128[]', type: 'uint128[]' },
        ],
      },
    ],
    name: 'removeLiquidity',
    outputs: [
      { name: 'tokenAAmount', internalType: 'uint256', type: 'uint256' },
      { name: 'tokenBAmount', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
      {
        name: 'params',
        internalType: 'struct IMaverickV2Pool.RemoveLiquidityParams',
        type: 'tuple',
        components: [
          { name: 'binIds', internalType: 'uint32[]', type: 'uint32[]' },
          { name: 'amounts', internalType: 'uint128[]', type: 'uint128[]' },
        ],
      },
    ],
    name: 'removeLiquidityToSender',
    outputs: [
      { name: 'tokenAAmount', internalType: 'uint256', type: 'uint256' },
      { name: 'tokenBAmount', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'approved', internalType: 'bool', type: 'bool' },
    ],
    name: 'setApprovalForAll',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'index', internalType: 'uint256', type: 'uint256' },
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
      { name: 'binIds', internalType: 'uint32[]', type: 'uint32[]' },
    ],
    name: 'setTokenIdData',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      {
        name: 'data',
        internalType: 'struct IMaverickV2Position.PositionPoolBinIds[]',
        type: 'tuple[]',
        components: [
          {
            name: 'pool',
            internalType: 'contract IMaverickV2Pool',
            type: 'address',
          },
          { name: 'binIds', internalType: 'uint32[]', type: 'uint32[]' },
        ],
      },
    ],
    name: 'setTokenIdData',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'index', internalType: 'uint256', type: 'uint256' }],
    name: 'tokenByIndex',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'tokenIdDataLength',
    outputs: [{ name: 'length', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'startIndex', internalType: 'uint256', type: 'uint256' },
      { name: 'stopIndex', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'tokenIdPositionInformation',
    outputs: [
      {
        name: 'output',
        internalType: 'struct IMaverickV2Position.PositionFullInformation[]',
        type: 'tuple[]',
        components: [
          {
            name: 'poolBinIds',
            internalType: 'struct IMaverickV2Position.PositionPoolBinIds',
            type: 'tuple',
            components: [
              {
                name: 'pool',
                internalType: 'contract IMaverickV2Pool',
                type: 'address',
              },
              { name: 'binIds', internalType: 'uint32[]', type: 'uint32[]' },
            ],
          },
          { name: 'amountA', internalType: 'uint256', type: 'uint256' },
          { name: 'amountB', internalType: 'uint256', type: 'uint256' },
          { name: 'binAAmounts', internalType: 'uint256[]', type: 'uint256[]' },
          { name: 'binBAmounts', internalType: 'uint256[]', type: 'uint256[]' },
          { name: 'ticks', internalType: 'int32[]', type: 'int32[]' },
          { name: 'liquidities', internalType: 'uint256[]', type: 'uint256[]' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'index', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'tokenIdPositionInformation',
    outputs: [
      {
        name: 'output',
        internalType: 'struct IMaverickV2Position.PositionFullInformation',
        type: 'tuple',
        components: [
          {
            name: 'poolBinIds',
            internalType: 'struct IMaverickV2Position.PositionPoolBinIds',
            type: 'tuple',
            components: [
              {
                name: 'pool',
                internalType: 'contract IMaverickV2Pool',
                type: 'address',
              },
              { name: 'binIds', internalType: 'uint32[]', type: 'uint32[]' },
            ],
          },
          { name: 'amountA', internalType: 'uint256', type: 'uint256' },
          { name: 'amountB', internalType: 'uint256', type: 'uint256' },
          { name: 'binAAmounts', internalType: 'uint256[]', type: 'uint256[]' },
          { name: 'binBAmounts', internalType: 'uint256[]', type: 'uint256[]' },
          { name: 'ticks', internalType: 'int32[]', type: 'int32[]' },
          { name: 'liquidities', internalType: 'uint256[]', type: 'uint256[]' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'tokenIdsOfOwner',
    outputs: [
      { name: 'tokenIds', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'index', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'tokenOfOwnerByIndex',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'index', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'tokenOfOwnerByIndexExists',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'tokenURI',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IMaverickV2Quoter
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iMaverickV2QuoterAbi = [
  { type: 'error', inputs: [], name: 'QuoterInvalidAddLiquidity' },
  { type: 'error', inputs: [], name: 'QuoterInvalidSwap' },
  {
    type: 'function',
    inputs: [
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
      {
        name: 'params',
        internalType: 'struct IMaverickV2Pool.AddLiquidityParams',
        type: 'tuple',
        components: [
          { name: 'kind', internalType: 'uint8', type: 'uint8' },
          { name: 'ticks', internalType: 'int32[]', type: 'int32[]' },
          { name: 'amounts', internalType: 'uint128[]', type: 'uint128[]' },
        ],
      },
    ],
    name: 'calculateAddLiquidity',
    outputs: [
      { name: 'amountA', internalType: 'uint256', type: 'uint256' },
      { name: 'amountB', internalType: 'uint256', type: 'uint256' },
      { name: 'gasEstimate', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'path', internalType: 'bytes', type: 'bytes' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
      { name: 'exactOutput', internalType: 'bool', type: 'bool' },
    ],
    name: 'calculateMultiHopSwap',
    outputs: [
      { name: 'returnAmount', internalType: 'uint256', type: 'uint256' },
      { name: 'gasEstimate', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
      { name: 'amount', internalType: 'uint128', type: 'uint128' },
      { name: 'tokenAIn', internalType: 'bool', type: 'bool' },
      { name: 'exactOutput', internalType: 'bool', type: 'bool' },
      { name: 'tickLimit', internalType: 'int32', type: 'int32' },
    ],
    name: 'calculateSwap',
    outputs: [
      { name: 'amountIn', internalType: 'uint256', type: 'uint256' },
      { name: 'amountOut', internalType: 'uint256', type: 'uint256' },
      { name: 'gasEstimate', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
    ],
    name: 'poolSqrtPrice',
    outputs: [{ name: 'sqrtPrice', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IMaverickV2Router
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iMaverickV2RouterAbi = [
  {
    type: 'error',
    inputs: [
      { name: 'token', internalType: 'address', type: 'address' },
      { name: 'amountMinimum', internalType: 'uint256', type: 'uint256' },
      { name: 'contractBalance', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'PaymentInsufficientBalance',
  },
  { type: 'error', inputs: [], name: 'PaymentSenderNotWETH9' },
  {
    type: 'error',
    inputs: [
      { name: 'deadline', internalType: 'uint256', type: 'uint256' },
      { name: 'blockTimestamp', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'PositionDeadlinePassed',
  },
  {
    type: 'error',
    inputs: [
      { name: 'sqrtPrice', internalType: 'uint256', type: 'uint256' },
      { name: 'minSqrtPrice', internalType: 'uint256', type: 'uint256' },
      { name: 'maxSqrtPrice', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'PositionExceededPriceBounds',
  },
  { type: 'error', inputs: [], name: 'RouterNotFactoryPool' },
  {
    type: 'error',
    inputs: [
      { name: 'amountOutMinimum', internalType: 'uint256', type: 'uint256' },
      { name: 'amountOut', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'RouterTooLittleReceived',
  },
  {
    type: 'error',
    inputs: [
      { name: 'amountInMaximum', internalType: 'uint256', type: 'uint256' },
      { name: 'amountIn', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'RouterTooMuchRequested',
  },
  { type: 'error', inputs: [], name: 'RouterZeroSwap' },
  {
    type: 'function',
    inputs: [{ name: 'deadline', internalType: 'uint256', type: 'uint256' }],
    name: 'checkDeadline',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
      { name: 'minSqrtPrice', internalType: 'uint256', type: 'uint256' },
      { name: 'maxSqrtPrice', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'checkSqrtPrice',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'recipient', internalType: 'address', type: 'address' },
      { name: 'path', internalType: 'bytes', type: 'bytes' },
      { name: 'amountIn', internalType: 'uint256', type: 'uint256' },
      { name: 'amountOutMinimum', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'exactInputMultiHop',
    outputs: [{ name: 'amountOut', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'recipient', internalType: 'address', type: 'address' },
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
      { name: 'tokenAIn', internalType: 'bool', type: 'bool' },
      { name: 'amountIn', internalType: 'uint256', type: 'uint256' },
      { name: 'amountOutMinimum', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'exactInputSingle',
    outputs: [{ name: 'amountOut', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [{ name: 'argsPacked', internalType: 'bytes', type: 'bytes' }],
    name: 'exactInputSinglePackedArgs',
    outputs: [{ name: 'amountOut', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'recipient', internalType: 'address', type: 'address' },
      { name: 'path', internalType: 'bytes', type: 'bytes' },
      { name: 'amountOut', internalType: 'uint256', type: 'uint256' },
      { name: 'amountInMaximum', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'exactOutputMultiHop',
    outputs: [{ name: 'amountIn', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'recipient', internalType: 'address', type: 'address' },
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
      { name: 'tokenAIn', internalType: 'bool', type: 'bool' },
      { name: 'amountOut', internalType: 'uint256', type: 'uint256' },
      { name: 'amountInMaximum', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'exactOutputSingle',
    outputs: [
      { name: 'amountIn', internalType: 'uint256', type: 'uint256' },
      { name: 'amountOut_', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'recipient', internalType: 'address', type: 'address' },
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
      { name: 'tokenAIn', internalType: 'bool', type: 'bool' },
      { name: 'amountOut', internalType: 'uint256', type: 'uint256' },
      { name: 'tickLimit', internalType: 'int32', type: 'int32' },
    ],
    name: 'exactOutputSingleMinimal',
    outputs: [
      { name: 'amountIn', internalType: 'uint256', type: 'uint256' },
      { name: 'amountOut_', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'factory',
    outputs: [
      {
        name: '_factory',
        internalType: 'contract IMaverickV2Factory',
        type: 'address',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'recipient', internalType: 'address', type: 'address' },
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
      { name: 'tokenAIn', internalType: 'bool', type: 'bool' },
      { name: 'amountIn', internalType: 'uint256', type: 'uint256' },
      { name: 'tickLimit', internalType: 'int32', type: 'int32' },
      { name: 'amountOutMinimum', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'inputSingleWithTickLimit',
    outputs: [
      { name: 'amountIn_', internalType: 'uint256', type: 'uint256' },
      { name: 'amountOut', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [{ name: 'data', internalType: 'bytes[]', type: 'bytes[]' }],
    name: 'multicall',
    outputs: [{ name: 'results', internalType: 'bytes[]', type: 'bytes[]' }],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'recipient', internalType: 'address', type: 'address' },
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
      { name: 'tokenAIn', internalType: 'bool', type: 'bool' },
      { name: 'amountOut', internalType: 'uint256', type: 'uint256' },
      { name: 'tickLimit', internalType: 'int32', type: 'int32' },
      { name: 'amountInMaximum', internalType: 'uint256', type: 'uint256' },
      { name: 'amountOutMinimum', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'outputSingleWithTickLimit',
    outputs: [
      { name: 'amountIn_', internalType: 'uint256', type: 'uint256' },
      { name: 'amountOut_', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'refundETH',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'token', internalType: 'contract IERC20', type: 'address' },
      { name: 'amountMinimum', internalType: 'uint256', type: 'uint256' },
      { name: 'recipient', internalType: 'address', type: 'address' },
    ],
    name: 'sweepToken',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'token', internalType: 'contract IERC20', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
      { name: 'recipient', internalType: 'address', type: 'address' },
    ],
    name: 'sweepTokenAmount',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'tokenA', internalType: 'contract IERC20', type: 'address' },
      { name: 'tokenB', internalType: 'contract IERC20', type: 'address' },
      { name: 'tokenAAmountMin', internalType: 'uint256', type: 'uint256' },
      { name: 'tokenBAmountMin', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'unwrapAndSweep',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'amountMinimum', internalType: 'uint256', type: 'uint256' },
      { name: 'recipient', internalType: 'address', type: 'address' },
    ],
    name: 'unwrapWETH9',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'weth',
    outputs: [
      { name: '_weth', internalType: 'contract IWETH9', type: 'address' },
    ],
    stateMutability: 'view',
  },
  { type: 'receive', stateMutability: 'payable' },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IMaverickV2SwapCallback
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iMaverickV2SwapCallbackAbi = [
  {
    type: 'function',
    inputs: [
      { name: 'tokenIn', internalType: 'contract IERC20', type: 'address' },
      { name: 'amountIn', internalType: 'uint256', type: 'uint256' },
      { name: 'amountOut', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'maverickV2SwapCallback',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IMigrateBins
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iMigrateBinsAbi = [
  {
    type: 'function',
    inputs: [
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
      { name: 'binIds', internalType: 'uint32[]', type: 'uint32[]' },
      { name: 'maxRecursion', internalType: 'uint32', type: 'uint32' },
    ],
    name: 'migrateBinsUpStack',
    outputs: [],
    stateMutability: 'payable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IMulticall
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iMulticallAbi = [
  {
    type: 'function',
    inputs: [{ name: 'data', internalType: 'bytes[]', type: 'bytes[]' }],
    name: 'multicall',
    outputs: [{ name: 'results', internalType: 'bytes[]', type: 'bytes[]' }],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// INft
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iNftAbi = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'approved',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'approved', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'ApprovalForAll',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Transfer',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: 'balance', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'checkAuthorized',
    outputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'getApproved',
    outputs: [{ name: 'operator', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'operator', internalType: 'address', type: 'address' },
    ],
    name: 'isApprovedForAll',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'nextTokenId',
    outputs: [
      { name: 'nextTokenId_', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ownerOf',
    outputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'approved', internalType: 'bool', type: 'bool' },
    ],
    name: 'setApprovalForAll',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'index', internalType: 'uint256', type: 'uint256' }],
    name: 'tokenByIndex',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'tokenIdsOfOwner',
    outputs: [
      { name: 'tokenIds', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'index', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'tokenOfOwnerByIndex',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'index', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'tokenOfOwnerByIndexExists',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'tokenURI',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// INftImage
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iNftImageAbi = [
  {
    type: 'function',
    inputs: [
      {
        name: 've',
        internalType: 'contract IVotingEscrowNft',
        type: 'address',
      },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'tokenURI',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IOrphanDistributor
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iOrphanDistributorAbi = [
  { type: 'error', inputs: [], name: 'NothingToDistribute' },
  { type: 'error', inputs: [], name: 'OnlyVotingDistibutor' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
        indexed: false,
      },
      {
        name: 'token',
        internalType: 'contract IERC20',
        type: 'address',
        indexed: false,
      },
      {
        name: 'epoch',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Distribute',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
        indexed: false,
      },
      {
        name: 'token',
        internalType: 'contract IERC20',
        type: 'address',
        indexed: false,
      },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'NotifyAndTransfer',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'recipient',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
        indexed: false,
      },
      {
        name: 'token',
        internalType: 'contract IERC20',
        type: 'address',
        indexed: false,
      },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'ProtocolDistribute',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'newAdmin',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'SetConfigurationAdmin',
  },
  {
    type: 'function',
    inputs: [],
    name: 'configurationAdmin',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
      { name: 'token', internalType: 'contract IERC20', type: 'address' },
    ],
    name: 'distribute',
    outputs: [{ name: 'amount', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'factory',
    outputs: [
      {
        name: '',
        internalType: 'contract IMaverickV2Factory',
        type: 'address',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
      { name: 'token', internalType: 'contract IERC20', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'notifyAndTransfer',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
      { name: 'token', internalType: 'contract IERC20', type: 'address' },
    ],
    name: 'orphanAmount',
    outputs: [{ name: 'amount', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'recipient', internalType: 'address', type: 'address' },
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
      { name: 'token', internalType: 'contract IERC20', type: 'address' },
    ],
    name: 'protocolDistribute',
    outputs: [{ name: 'amount', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'votingDistributor',
    outputs: [
      {
        name: '',
        internalType: 'contract IVotingDistributor',
        type: 'address',
      },
    ],
    stateMutability: 'view',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IPayableMulticall
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iPayableMulticallAbi = [
  {
    type: 'function',
    inputs: [{ name: 'data', internalType: 'bytes[]', type: 'bytes[]' }],
    name: 'multicall',
    outputs: [{ name: 'results', internalType: 'bytes[]', type: 'bytes[]' }],
    stateMutability: 'payable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IPayment
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iPaymentAbi = [
  {
    type: 'error',
    inputs: [
      { name: 'token', internalType: 'address', type: 'address' },
      { name: 'amountMinimum', internalType: 'uint256', type: 'uint256' },
      { name: 'contractBalance', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'PaymentInsufficientBalance',
  },
  { type: 'error', inputs: [], name: 'PaymentSenderNotWETH9' },
  {
    type: 'function',
    inputs: [],
    name: 'factory',
    outputs: [
      {
        name: '_factory',
        internalType: 'contract IMaverickV2Factory',
        type: 'address',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'data', internalType: 'bytes[]', type: 'bytes[]' }],
    name: 'multicall',
    outputs: [{ name: 'results', internalType: 'bytes[]', type: 'bytes[]' }],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'refundETH',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'token', internalType: 'contract IERC20', type: 'address' },
      { name: 'amountMinimum', internalType: 'uint256', type: 'uint256' },
      { name: 'recipient', internalType: 'address', type: 'address' },
    ],
    name: 'sweepToken',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'token', internalType: 'contract IERC20', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
      { name: 'recipient', internalType: 'address', type: 'address' },
    ],
    name: 'sweepTokenAmount',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'tokenA', internalType: 'contract IERC20', type: 'address' },
      { name: 'tokenB', internalType: 'contract IERC20', type: 'address' },
      { name: 'tokenAAmountMin', internalType: 'uint256', type: 'uint256' },
      { name: 'tokenBAmountMin', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'unwrapAndSweep',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'amountMinimum', internalType: 'uint256', type: 'uint256' },
      { name: 'recipient', internalType: 'address', type: 'address' },
    ],
    name: 'unwrapWETH9',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'weth',
    outputs: [
      { name: '_weth', internalType: 'contract IWETH9', type: 'address' },
    ],
    stateMutability: 'view',
  },
  { type: 'receive', stateMutability: 'payable' },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IPoolDistributor
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iPoolDistributorAbi = [
  {
    type: 'error',
    inputs: [
      { name: 'user', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
      { name: 'epoch', internalType: 'uint256', type: 'uint256' },
      { name: 'binId', internalType: 'uint32', type: 'uint32' },
    ],
    name: 'AlreadClaimed',
  },
  {
    type: 'error',
    inputs: [
      { name: 'epoch', internalType: 'uint256', type: 'uint256' },
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
    ],
    name: 'AlreadyDisbursed',
  },
  { type: 'error', inputs: [], name: 'BinIdsMustBeOrdered' },
  { type: 'error', inputs: [], name: 'NothingToClaim' },
  { type: 'error', inputs: [], name: 'OnlyVotingDistibutor' },
  {
    type: 'error',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'owner', internalType: 'address', type: 'address' },
    ],
    name: 'onlyPostionOwnerCanClaim',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'user',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
        indexed: false,
      },
      {
        name: 'binIds',
        internalType: 'uint32[]',
        type: 'uint32[]',
        indexed: false,
      },
      {
        name: 'epoch',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'ClaimLp',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
        indexed: false,
      },
      {
        name: 'epoch',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'NotifyAndTransfer',
  },
  {
    type: 'function',
    inputs: [
      { name: 'recipient', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
      { name: 'binIds', internalType: 'uint32[]', type: 'uint32[]' },
      { name: 'epoch', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'claimLp',
    outputs: [{ name: 'amount', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
      { name: 'binIds', internalType: 'uint32[]', type: 'uint32[]' },
      { name: 'epoch', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'claimLpAmount',
    outputs: [{ name: 'amount', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'epoch', internalType: 'uint256', type: 'uint256' },
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
    ],
    name: 'claimed',
    outputs: [{ name: 'amount', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'epoch', internalType: 'uint256', type: 'uint256' },
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
    ],
    name: 'disbursement',
    outputs: [{ name: 'amount', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'data', internalType: 'bytes[]', type: 'bytes[]' }],
    name: 'multicall',
    outputs: [{ name: 'results', internalType: 'bytes[]', type: 'bytes[]' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
      { name: 'epoch', internalType: 'uint256', type: 'uint256' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'notifyAndTransfer',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'rewardToken',
    outputs: [{ name: '', internalType: 'contract IERC20', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'votingDistributor',
    outputs: [
      {
        name: '',
        internalType: 'contract IVotingDistributor',
        type: 'address',
      },
    ],
    stateMutability: 'view',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IPositionImage
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iPositionImageAbi = [
  {
    type: 'error',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'deployer', internalType: 'address', type: 'address' },
      {
        name: 'currentPosition',
        internalType: 'contract IMaverickV2Position',
        type: 'address',
      },
    ],
    name: 'PositionImageSetPositionError',
  },
  {
    type: 'function',
    inputs: [
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'tokenOwner', internalType: 'address', type: 'address' },
    ],
    name: 'image',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'position',
    outputs: [
      {
        name: '_position',
        internalType: 'contract IMaverickV2Position',
        type: 'address',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: '_position',
        internalType: 'contract IMaverickV2Position',
        type: 'address',
      },
    ],
    name: 'setPosition',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IPushOperations
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iPushOperationsAbi = [
  { type: 'error', inputs: [], name: 'RouterNotFactoryPool' },
  {
    type: 'error',
    inputs: [
      { name: 'amountOutMinimum', internalType: 'uint256', type: 'uint256' },
      { name: 'amountOut', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'RouterTooLittleReceived',
  },
  {
    type: 'error',
    inputs: [
      { name: 'amountInMaximum', internalType: 'uint256', type: 'uint256' },
      { name: 'amountIn', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'RouterTooMuchRequested',
  },
  { type: 'error', inputs: [], name: 'RouterZeroSwap' },
  {
    type: 'function',
    inputs: [
      { name: 'recipient', internalType: 'address', type: 'address' },
      { name: 'path', internalType: 'bytes', type: 'bytes' },
      { name: 'amountIn', internalType: 'uint256', type: 'uint256' },
      { name: 'amountOutMinimum', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'exactInputMultiHop',
    outputs: [{ name: 'amountOut', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'recipient', internalType: 'address', type: 'address' },
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
      { name: 'tokenAIn', internalType: 'bool', type: 'bool' },
      { name: 'amountIn', internalType: 'uint256', type: 'uint256' },
      { name: 'amountOutMinimum', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'exactInputSingle',
    outputs: [{ name: 'amountOut', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [{ name: 'argsPacked', internalType: 'bytes', type: 'bytes' }],
    name: 'exactInputSinglePackedArgs',
    outputs: [{ name: 'amountOut', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'payable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IRouterErrors
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iRouterErrorsAbi = [
  { type: 'error', inputs: [], name: 'RouterNotFactoryPool' },
  {
    type: 'error',
    inputs: [
      { name: 'amountOutMinimum', internalType: 'uint256', type: 'uint256' },
      { name: 'amountOut', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'RouterTooLittleReceived',
  },
  {
    type: 'error',
    inputs: [
      { name: 'amountInMaximum', internalType: 'uint256', type: 'uint256' },
      { name: 'amountIn', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'RouterTooMuchRequested',
  },
  { type: 'error', inputs: [], name: 'RouterZeroSwap' },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IState
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iStateAbi = [
  {
    type: 'function',
    inputs: [],
    name: 'factory',
    outputs: [
      {
        name: '_factory',
        internalType: 'contract IMaverickV2Factory',
        type: 'address',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'weth',
    outputs: [
      { name: '_weth', internalType: 'contract IWETH9', type: 'address' },
    ],
    stateMutability: 'view',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IVotes
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iVotesAbi = [
  {
    type: 'error',
    inputs: [{ name: 'expiry', internalType: 'uint256', type: 'uint256' }],
    name: 'VotesExpiredSignature',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'delegator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'fromDelegate',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'toDelegate',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'DelegateChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'delegate',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'previousVotes',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'newVotes',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'DelegateVotesChanged',
  },
  {
    type: 'function',
    inputs: [{ name: 'delegatee', internalType: 'address', type: 'address' }],
    name: 'delegate',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'delegatee', internalType: 'address', type: 'address' },
      { name: 'nonce', internalType: 'uint256', type: 'uint256' },
      { name: 'expiry', internalType: 'uint256', type: 'uint256' },
      { name: 'v', internalType: 'uint8', type: 'uint8' },
      { name: 'r', internalType: 'bytes32', type: 'bytes32' },
      { name: 's', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'delegateBySig',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'delegates',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'timepoint', internalType: 'uint256', type: 'uint256' }],
    name: 'getPastTotalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'timepoint', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'getPastVotes',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'getVotes',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IVotingDistributor
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iVotingDistributorAbi = [
  {
    type: 'error',
    inputs: [
      { name: 'timestamp', internalType: 'uint256', type: 'uint256' },
      { name: 'epochStart', internalType: 'uint256', type: 'uint256' },
      { name: 'epochEnd', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'EpochEnded',
  },
  {
    type: 'error',
    inputs: [{ name: 'epoch', internalType: 'uint256', type: 'uint256' }],
    name: 'InvalidEpoch',
  },
  {
    type: 'error',
    inputs: [
      {
        name: 'lastPool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
      {
        name: 'currentPool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
    ],
    name: 'InvalidTargetOrder',
  },
  {
    type: 'error',
    inputs: [
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
      { name: 'weight', internalType: 'uint256', type: 'uint256' },
      { name: 'totalWeight', internalType: 'uint256', type: 'uint256' },
      { name: 'voteMultiplier', internalType: 'uint256', type: 'uint256' },
      { name: 'vote', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'InvalidVote',
  },
  {
    type: 'error',
    inputs: [
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
    ],
    name: 'NotFactoryPool',
  },
  { type: 'error', inputs: [], name: 'NothingToDistribute' },
  {
    type: 'error',
    inputs: [
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
      { name: 'epoch', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'PoolAlreadyDistributed',
  },
  {
    type: 'error',
    inputs: [
      { name: 'voteForThisPool', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'RolloverNotAllowed',
  },
  { type: 'error', inputs: [], name: 'SenderHasAlreadyVoted' },
  {
    type: 'error',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'epoch', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'SenderHasNoVotingPower',
  },
  { type: 'error', inputs: [], name: 'SenderNotFactoryPool' },
  { type: 'error', inputs: [], name: 'VoteMultiplierIsZero' },
  {
    type: 'error',
    inputs: [
      { name: 'timestamp', internalType: 'uint256', type: 'uint256' },
      { name: 'epochStart', internalType: 'uint256', type: 'uint256' },
      { name: 'epochEnd', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'VotePeriodNotActive',
  },
  {
    type: 'error',
    inputs: [
      { name: 'timestamp', internalType: 'uint256', type: 'uint256' },
      { name: 'epochStart', internalType: 'uint256', type: 'uint256' },
      { name: 'epochEnd', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'VotePeriodNotEnded',
  },
  {
    type: 'error',
    inputs: [
      { name: 'user', internalType: 'address', type: 'address' },
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
      { name: 'epoch', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'VoterAlreadyCollected',
  },
  { type: 'error', inputs: [], name: 'ZeroAmount' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'epoch',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'AddDistributionBudget',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'epoch',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
        indexed: false,
      },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'incentiveToken',
        internalType: 'contract IERC20',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'AddVoteIncentive',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'epoch',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'voter',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
        indexed: false,
      },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'incentiveToken',
        internalType: 'contract IERC20',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'CollectVoteIncentive',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'epoch',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
        indexed: false,
      },
      {
        name: 'rewardTokenAmountDistributed',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Distribute',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
        indexed: false,
      },
      {
        name: 'token',
        internalType: 'contract IERC20',
        type: 'address',
        indexed: false,
      },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'epoch',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'sentToOrphanDistributor',
        internalType: 'bool',
        type: 'bool',
        indexed: false,
      },
    ],
    name: 'MoveFeesFromPool',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'orphanDistributor',
        internalType: 'contract IOrphanDistributor',
        type: 'address',
        indexed: true,
      },
      {
        name: 'epoch',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'poolToIncentivize',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
        indexed: true,
      },
      {
        name: 'incentiveToken',
        internalType: 'contract IERC20',
        type: 'address',
        indexed: false,
      },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'OrphanedIncentive',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'newAdmin',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'SetConfigurationAdmin',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: '_newCollector',
        internalType: 'contract IOrphanDistributor',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'SetOrphanDistributor',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'poolDistributor',
        internalType: 'contract IPoolDistributor',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'SetPoolDistributor',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
        indexed: false,
      },
      {
        name: 'multiplierD18',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'SetPoolVoteMultiplier',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'epoch',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'voter',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
        indexed: false,
      },
      {
        name: 'vote',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Vote',
  },
  {
    type: 'function',
    inputs: [],
    name: 'EPOCH_PERIOD',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
      { name: 'epoch', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'addDistributionBudget',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'amount', internalType: 'uint256', type: 'uint256' }],
    name: 'addDistributionBudgetCurrentEpoch',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'poolToIncentivize',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
      {
        name: 'incentiveToken',
        internalType: 'contract IERC20',
        type: 'address',
      },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
      { name: 'epoch', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'addVoteIncentive',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'poolToIncentivize',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
      {
        name: 'incentiveToken',
        internalType: 'contract IERC20',
        type: 'address',
      },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'addVoteIncentiveToCurrentEpoch',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
      {
        name: 'incentiveToken',
        internalType: 'contract IERC20',
        type: 'address',
      },
      { name: 'epoch', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'collectVoteIncentive',
    outputs: [{ name: 'amount', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'user', internalType: 'address', type: 'address' },
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
      {
        name: 'incentiveToken',
        internalType: 'contract IERC20',
        type: 'address',
      },
      { name: 'epoch', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'collectVoteIncentiveAmount',
    outputs: [{ name: 'amount', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'configurationAdmin',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'currentEpoch',
    outputs: [{ name: 'epoch', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
      { name: 'epoch', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'distribute',
    outputs: [
      { name: 'amountDistributed', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
      { name: 'epoch', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'distributeAmount',
    outputs: [
      { name: 'amountDistributed', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'epoch', internalType: 'uint256', type: 'uint256' }],
    name: 'epochEnd',
    outputs: [{ name: 'end', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [{ name: 'epoch', internalType: 'uint256', type: 'uint256' }],
    name: 'epochIsOver',
    outputs: [{ name: 'isOver', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'factory',
    outputs: [
      {
        name: '',
        internalType: 'contract IMaverickV2Factory',
        type: 'address',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'epoch', internalType: 'uint256', type: 'uint256' }],
    name: 'getBudget',
    outputs: [{ name: 'budget', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'epoch', internalType: 'uint256', type: 'uint256' },
      {
        name: 'bounds',
        internalType: 'struct IVotingDistributor.IndexBounds',
        type: 'tuple',
        components: [
          { name: 'startIndex', internalType: 'uint256', type: 'uint256' },
          { name: 'endIndex', internalType: 'uint256', type: 'uint256' },
          {
            name: 'incentiveStartIndex',
            internalType: 'uint256',
            type: 'uint256',
          },
          {
            name: 'incentiveEndIndex',
            internalType: 'uint256',
            type: 'uint256',
          },
        ],
      },
    ],
    name: 'getCheckpointData',
    outputs: [
      { name: 'budget', internalType: 'uint128', type: 'uint128' },
      { name: 'totalVote', internalType: 'uint128', type: 'uint128' },
      {
        name: 'pools',
        internalType: 'struct IVotingDistributor.PoolView[]',
        type: 'tuple[]',
        components: [
          {
            name: 'pool',
            internalType: 'contract IMaverickV2Pool',
            type: 'address',
          },
          { name: 'votes', internalType: 'uint256', type: 'uint256' },
          { name: 'hasDistributed', internalType: 'bool', type: 'bool' },
          {
            name: 'incentiveTokens',
            internalType: 'contract IERC20[]',
            type: 'address[]',
          },
          {
            name: 'voteIncentives',
            internalType: 'uint256[]',
            type: 'uint256[]',
          },
          {
            name: 'incentiveTokenCount',
            internalType: 'uint256',
            type: 'uint256',
          },
        ],
      },
      { name: 'totalCount', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
      { name: 'epoch', internalType: 'uint256', type: 'uint256' },
      { name: 'startIndex', internalType: 'uint256', type: 'uint256' },
      { name: 'endIndex', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'getIncentiveData',
    outputs: [
      {
        name: 'incentiveTokens',
        internalType: 'contract IERC20[]',
        type: 'address[]',
      },
      { name: 'voteIncentives', internalType: 'uint256[]', type: 'uint256[]' },
      { name: 'totalCount', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
      { name: 'epoch', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'getPoolData',
    outputs: [
      { name: 'voteForThisPool', internalType: 'uint256', type: 'uint256' },
      { name: 'totalVoteForEpoch', internalType: 'uint256', type: 'uint256' },
      { name: 'hasDistributed', internalType: 'bool', type: 'bool' },
      { name: 'epochBudget', internalType: 'uint256', type: 'uint256' },
      { name: 'disbursementAmount', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'epoch', internalType: 'uint256', type: 'uint256' }],
    name: 'getTotalVote',
    outputs: [{ name: 'totalVote', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'user', internalType: 'address', type: 'address' },
      { name: 'epoch', internalType: 'uint256', type: 'uint256' },
      {
        name: 'bounds',
        internalType: 'struct IVotingDistributor.IndexBounds',
        type: 'tuple',
        components: [
          { name: 'startIndex', internalType: 'uint256', type: 'uint256' },
          { name: 'endIndex', internalType: 'uint256', type: 'uint256' },
          {
            name: 'incentiveStartIndex',
            internalType: 'uint256',
            type: 'uint256',
          },
          {
            name: 'incentiveEndIndex',
            internalType: 'uint256',
            type: 'uint256',
          },
        ],
      },
    ],
    name: 'getVoterClaimData',
    outputs: [
      {
        name: 'claimData',
        internalType: 'struct IVotingDistributor.ClaimData[]',
        type: 'tuple[]',
        components: [
          {
            name: 'pool',
            internalType: 'contract IMaverickV2Pool',
            type: 'address',
          },
          {
            name: 'incentiveTokenCount',
            internalType: 'uint256',
            type: 'uint256',
          },
          {
            name: 'incentiveTokens',
            internalType: 'contract IERC20[]',
            type: 'address[]',
          },
          {
            name: 'incentiveAmounts',
            internalType: 'uint256[]',
            type: 'uint256[]',
          },
          { name: 'hasCollected', internalType: 'bool[]', type: 'bool[]' },
        ],
      },
      { name: 'totalCount', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'user', internalType: 'address', type: 'address' },
      { name: 'epoch', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'getVoterData',
    outputs: [
      {
        name: 'voterData',
        internalType: 'struct IVotingDistributor.VoterData',
        type: 'tuple',
        components: [
          { name: 'hasVoted', internalType: 'bool', type: 'bool' },
          { name: 'votes', internalType: 'uint128[]', type: 'uint128[]' },
          {
            name: 'pools',
            internalType: 'contract IMaverickV2Pool[]',
            type: 'address[]',
          },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'user', internalType: 'address', type: 'address' },
      { name: 'epoch', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'hasVoted',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'epoch', internalType: 'uint256', type: 'uint256' }],
    name: 'isEpoch',
    outputs: [{ name: '_isEpoch', internalType: 'bool', type: 'bool' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [],
    name: 'lastEpoch',
    outputs: [{ name: 'epoch', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
    ],
    name: 'moveFeesFromPoolToVotingDistributor',
    outputs: [
      { name: 'amountA', internalType: 'uint256', type: 'uint256' },
      { name: 'amountB', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'data', internalType: 'bytes[]', type: 'bytes[]' }],
    name: 'multicall',
    outputs: [{ name: 'results', internalType: 'bytes[]', type: 'bytes[]' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'nextEpoch',
    outputs: [{ name: 'epoch', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'orphanDistributor',
    outputs: [
      {
        name: '',
        internalType: 'contract IOrphanDistributor',
        type: 'address',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'rewardToken',
    outputs: [{ name: '', internalType: 'contract IERC20', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'poolToIncentivize',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
      {
        name: 'incentiveToken',
        internalType: 'contract IERC20',
        type: 'address',
      },
      { name: 'epoch', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'rollUnvotedIncentive',
    outputs: [{ name: 'amount', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'veToken',
    outputs: [{ name: '', internalType: 'contract IERC5805', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'voteTargets',
        internalType: 'contract IMaverickV2Pool[]',
        type: 'address[]',
      },
      { name: 'weights', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    name: 'vote',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'epoch', internalType: 'uint256', type: 'uint256' }],
    name: 'votingIsActive',
    outputs: [{ name: 'isActive', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IVotingEscrow
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iVotingEscrowAbi = [
  {
    type: 'error',
    inputs: [{ name: 'expiry', internalType: 'uint256', type: 'uint256' }],
    name: 'VotesExpiredSignature',
  },
  { type: 'error', inputs: [], name: 'VotingEscrowDelegationNotSupported' },
  {
    type: 'error',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'VotingEscrowInvalidAddress',
  },
  {
    type: 'error',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'VotingEscrowInvalidAmount',
  },
  {
    type: 'error',
    inputs: [
      { name: 'duration', internalType: 'uint256', type: 'uint256' },
      { name: 'minDuration', internalType: 'uint256', type: 'uint256' },
      { name: 'maxDuration', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'VotingEscrowInvalidDuration',
  },
  {
    type: 'error',
    inputs: [
      { name: 'newEnd', internalType: 'uint256', type: 'uint256' },
      { name: 'oldEnd', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'VotingEscrowInvalidEndTime',
  },
  { type: 'error', inputs: [], name: 'VotingEscrowOnlyCallerAllowed' },
  {
    type: 'error',
    inputs: [{ name: 'proportion', internalType: 'uint256', type: 'uint256' }],
    name: 'VotingEscrowProportionMustBeLessThanOne',
  },
  { type: 'error', inputs: [], name: 'VotingEscrowStakeAlreadyRedeemed' },
  {
    type: 'error',
    inputs: [
      { name: 'currentTime', internalType: 'uint256', type: 'uint256' },
      { name: 'endTime', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'VotingEscrowStakeStillLocked',
  },
  { type: 'error', inputs: [], name: 'VotingEscrowTransferNotSupported' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'spender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'delegator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'fromDelegate',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'toDelegate',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'DelegateChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'delegate',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'previousVotes',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'newVotes',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'DelegateVotesChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'user', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: '',
        internalType: 'struct IVotingEscrowBase.Lockup',
        type: 'tuple',
        components: [
          { name: 'amount', internalType: 'uint128', type: 'uint128' },
          { name: 'end', internalType: 'uint128', type: 'uint128' },
          { name: 'votes', internalType: 'uint256', type: 'uint256' },
        ],
        indexed: false,
      },
    ],
    name: 'Stake',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Transfer',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'user', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: '',
        internalType: 'struct IVotingEscrowBase.Lockup',
        type: 'tuple',
        components: [
          { name: 'amount', internalType: 'uint128', type: 'uint128' },
          { name: 'end', internalType: 'uint128', type: 'uint128' },
          { name: 'votes', internalType: 'uint256', type: 'uint256' },
        ],
        indexed: false,
      },
    ],
    name: 'Unstake',
  },
  {
    type: 'function',
    inputs: [],
    name: 'CLOCK_MODE',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'MAX_STAKE_DURATION',
    outputs: [{ name: 'duration', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [],
    name: 'MIN_STAKE_DURATION',
    outputs: [{ name: 'duration', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [],
    name: 'YEAR_BASE',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'clock',
    outputs: [{ name: '', internalType: 'uint48', type: 'uint48' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'delegatee', internalType: 'address', type: 'address' }],
    name: 'delegate',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'delegatee', internalType: 'address', type: 'address' },
      { name: 'nonce', internalType: 'uint256', type: 'uint256' },
      { name: 'expiry', internalType: 'uint256', type: 'uint256' },
      { name: 'v', internalType: 'uint8', type: 'uint8' },
      { name: 'r', internalType: 'bytes32', type: 'bytes32' },
      { name: 's', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'delegateBySig',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'delegatee', internalType: 'address', type: 'address' },
    ],
    name: 'delegateFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'delegates',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'duration', internalType: 'uint256', type: 'uint256' },
      { name: 'amount', internalType: 'uint128', type: 'uint128' },
    ],
    name: 'extend',
    outputs: [
      {
        name: 'newLockup',
        internalType: 'struct IVotingEscrowBase.Lockup',
        type: 'tuple',
        components: [
          { name: 'amount', internalType: 'uint128', type: 'uint128' },
          { name: 'end', internalType: 'uint128', type: 'uint128' },
          { name: 'votes', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'staker', internalType: 'address', type: 'address' },
      { name: 'index', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'getLockup',
    outputs: [
      {
        name: 'lockup',
        internalType: 'struct IVotingEscrowBase.Lockup',
        type: 'tuple',
        components: [
          { name: 'amount', internalType: 'uint128', type: 'uint128' },
          { name: 'end', internalType: 'uint128', type: 'uint128' },
          { name: 'votes', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'timepoint', internalType: 'uint256', type: 'uint256' }],
    name: 'getPastTotalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'timepoint', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'getPastVotes',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'getVotes',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'tokenIds', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    name: 'merge',
    outputs: [
      {
        name: 'newLockup',
        internalType: 'struct IVotingEscrowBase.Lockup',
        type: 'tuple',
        components: [
          { name: 'amount', internalType: 'uint128', type: 'uint128' },
          { name: 'end', internalType: 'uint128', type: 'uint128' },
          { name: 'votes', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'amount', internalType: 'uint128', type: 'uint128' },
      { name: 'duration', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'previewVotes',
    outputs: [
      {
        name: 'lockup',
        internalType: 'struct IVotingEscrowBase.Lockup',
        type: 'tuple',
        components: [
          { name: 'amount', internalType: 'uint128', type: 'uint128' },
          { name: 'end', internalType: 'uint128', type: 'uint128' },
          { name: 'votes', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'tokenIdToSplit', internalType: 'uint256', type: 'uint256' },
      { name: 'newTokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'splitProportionD18', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'splitLockup',
    outputs: [
      {
        name: 'lockup1',
        internalType: 'struct IVotingEscrowBase.Lockup',
        type: 'tuple',
        components: [
          { name: 'amount', internalType: 'uint128', type: 'uint128' },
          { name: 'end', internalType: 'uint128', type: 'uint128' },
          { name: 'votes', internalType: 'uint256', type: 'uint256' },
        ],
      },
      {
        name: 'lockup2',
        internalType: 'struct IVotingEscrowBase.Lockup',
        type: 'tuple',
        components: [
          { name: 'amount', internalType: 'uint128', type: 'uint128' },
          { name: 'end', internalType: 'uint128', type: 'uint128' },
          { name: 'votes', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'duration', internalType: 'uint256', type: 'uint256' },
      { name: 'amount', internalType: 'uint128', type: 'uint128' },
    ],
    name: 'stake',
    outputs: [
      {
        name: '',
        internalType: 'struct IVotingEscrowBase.Lockup',
        type: 'tuple',
        components: [
          { name: 'amount', internalType: 'uint128', type: 'uint128' },
          { name: 'end', internalType: 'uint128', type: 'uint128' },
          { name: 'votes', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'startTimestamp',
    outputs: [{ name: 'timestamp', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferLockup',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'unstake',
    outputs: [
      {
        name: 'lockup',
        internalType: 'struct IVotingEscrowBase.Lockup',
        type: 'tuple',
        components: [
          { name: 'amount', internalType: 'uint128', type: 'uint128' },
          { name: 'end', internalType: 'uint128', type: 'uint128' },
          { name: 'votes', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IVotingEscrowBase
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iVotingEscrowBaseAbi = [
  { type: 'error', inputs: [], name: 'VotingEscrowDelegationNotSupported' },
  {
    type: 'error',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'VotingEscrowInvalidAddress',
  },
  {
    type: 'error',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'VotingEscrowInvalidAmount',
  },
  {
    type: 'error',
    inputs: [
      { name: 'duration', internalType: 'uint256', type: 'uint256' },
      { name: 'minDuration', internalType: 'uint256', type: 'uint256' },
      { name: 'maxDuration', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'VotingEscrowInvalidDuration',
  },
  {
    type: 'error',
    inputs: [
      { name: 'newEnd', internalType: 'uint256', type: 'uint256' },
      { name: 'oldEnd', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'VotingEscrowInvalidEndTime',
  },
  { type: 'error', inputs: [], name: 'VotingEscrowOnlyCallerAllowed' },
  {
    type: 'error',
    inputs: [{ name: 'proportion', internalType: 'uint256', type: 'uint256' }],
    name: 'VotingEscrowProportionMustBeLessThanOne',
  },
  { type: 'error', inputs: [], name: 'VotingEscrowStakeAlreadyRedeemed' },
  {
    type: 'error',
    inputs: [
      { name: 'currentTime', internalType: 'uint256', type: 'uint256' },
      { name: 'endTime', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'VotingEscrowStakeStillLocked',
  },
  { type: 'error', inputs: [], name: 'VotingEscrowTransferNotSupported' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'user', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: '',
        internalType: 'struct IVotingEscrowBase.Lockup',
        type: 'tuple',
        components: [
          { name: 'amount', internalType: 'uint128', type: 'uint128' },
          { name: 'end', internalType: 'uint128', type: 'uint128' },
          { name: 'votes', internalType: 'uint256', type: 'uint256' },
        ],
        indexed: false,
      },
    ],
    name: 'Stake',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'user', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: '',
        internalType: 'struct IVotingEscrowBase.Lockup',
        type: 'tuple',
        components: [
          { name: 'amount', internalType: 'uint128', type: 'uint128' },
          { name: 'end', internalType: 'uint128', type: 'uint128' },
          { name: 'votes', internalType: 'uint256', type: 'uint256' },
        ],
        indexed: false,
      },
    ],
    name: 'Unstake',
  },
  {
    type: 'function',
    inputs: [],
    name: 'MAX_STAKE_DURATION',
    outputs: [{ name: 'duration', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [],
    name: 'MIN_STAKE_DURATION',
    outputs: [{ name: 'duration', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [],
    name: 'YEAR_BASE',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'delegatee', internalType: 'address', type: 'address' },
    ],
    name: 'delegateFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'duration', internalType: 'uint256', type: 'uint256' },
      { name: 'amount', internalType: 'uint128', type: 'uint128' },
    ],
    name: 'extend',
    outputs: [
      {
        name: 'newLockup',
        internalType: 'struct IVotingEscrowBase.Lockup',
        type: 'tuple',
        components: [
          { name: 'amount', internalType: 'uint128', type: 'uint128' },
          { name: 'end', internalType: 'uint128', type: 'uint128' },
          { name: 'votes', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'staker', internalType: 'address', type: 'address' },
      { name: 'index', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'getLockup',
    outputs: [
      {
        name: 'lockup',
        internalType: 'struct IVotingEscrowBase.Lockup',
        type: 'tuple',
        components: [
          { name: 'amount', internalType: 'uint128', type: 'uint128' },
          { name: 'end', internalType: 'uint128', type: 'uint128' },
          { name: 'votes', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'tokenIds', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    name: 'merge',
    outputs: [
      {
        name: 'newLockup',
        internalType: 'struct IVotingEscrowBase.Lockup',
        type: 'tuple',
        components: [
          { name: 'amount', internalType: 'uint128', type: 'uint128' },
          { name: 'end', internalType: 'uint128', type: 'uint128' },
          { name: 'votes', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'amount', internalType: 'uint128', type: 'uint128' },
      { name: 'duration', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'previewVotes',
    outputs: [
      {
        name: 'lockup',
        internalType: 'struct IVotingEscrowBase.Lockup',
        type: 'tuple',
        components: [
          { name: 'amount', internalType: 'uint128', type: 'uint128' },
          { name: 'end', internalType: 'uint128', type: 'uint128' },
          { name: 'votes', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'tokenIdToSplit', internalType: 'uint256', type: 'uint256' },
      { name: 'newTokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'splitProportionD18', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'splitLockup',
    outputs: [
      {
        name: 'lockup1',
        internalType: 'struct IVotingEscrowBase.Lockup',
        type: 'tuple',
        components: [
          { name: 'amount', internalType: 'uint128', type: 'uint128' },
          { name: 'end', internalType: 'uint128', type: 'uint128' },
          { name: 'votes', internalType: 'uint256', type: 'uint256' },
        ],
      },
      {
        name: 'lockup2',
        internalType: 'struct IVotingEscrowBase.Lockup',
        type: 'tuple',
        components: [
          { name: 'amount', internalType: 'uint128', type: 'uint128' },
          { name: 'end', internalType: 'uint128', type: 'uint128' },
          { name: 'votes', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'duration', internalType: 'uint256', type: 'uint256' },
      { name: 'amount', internalType: 'uint128', type: 'uint128' },
    ],
    name: 'stake',
    outputs: [
      {
        name: '',
        internalType: 'struct IVotingEscrowBase.Lockup',
        type: 'tuple',
        components: [
          { name: 'amount', internalType: 'uint128', type: 'uint128' },
          { name: 'end', internalType: 'uint128', type: 'uint128' },
          { name: 'votes', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'startTimestamp',
    outputs: [{ name: 'timestamp', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferLockup',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'unstake',
    outputs: [
      {
        name: 'lockup',
        internalType: 'struct IVotingEscrowBase.Lockup',
        type: 'tuple',
        components: [
          { name: 'amount', internalType: 'uint128', type: 'uint128' },
          { name: 'end', internalType: 'uint128', type: 'uint128' },
          { name: 'votes', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IVotingEscrowNft
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iVotingEscrowNftAbi = [
  { type: 'error', inputs: [], name: 'AlreadyInitialized' },
  { type: 'error', inputs: [], name: 'PermalockNotenabled' },
  {
    type: 'error',
    inputs: [
      { name: 'tokenId1', internalType: 'uint256', type: 'uint256' },
      { name: 'tokenId2', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'TokenIdsHaveDifferentOwners',
  },
  {
    type: 'error',
    inputs: [{ name: 'expiry', internalType: 'uint256', type: 'uint256' }],
    name: 'VotesExpiredSignature',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'approved',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'approved', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'ApprovalForAll',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'delegator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'fromDelegate',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'toDelegate',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'DelegateChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'delegate',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'previousVotes',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'newVotes',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'DelegateVotesChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'nftImage',
        internalType: 'contract INftImage',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'SetImage',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      { name: 'state', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'TogglePermalockAllowed',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Transfer',
  },
  {
    type: 'function',
    inputs: [],
    name: 'CLOCK_MODE',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: 'balance', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'checkAuthorized',
    outputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'clock',
    outputs: [{ name: '', internalType: 'uint48', type: 'uint48' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'delegatee', internalType: 'address', type: 'address' }],
    name: 'delegate',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'delegatee', internalType: 'address', type: 'address' },
      { name: 'nonce', internalType: 'uint256', type: 'uint256' },
      { name: 'expiry', internalType: 'uint256', type: 'uint256' },
      { name: 'v', internalType: 'uint8', type: 'uint8' },
      { name: 'r', internalType: 'bytes32', type: 'bytes32' },
      { name: 's', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'delegateBySig',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'delegates',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'disablePermalock',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'enablePermalock',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'duration', internalType: 'uint256', type: 'uint256' },
      { name: 'amount', internalType: 'uint128', type: 'uint128' },
    ],
    name: 'extend',
    outputs: [
      {
        name: 'newLockup',
        internalType: 'struct IVotingEscrowBase.Lockup',
        type: 'tuple',
        components: [
          { name: 'amount', internalType: 'uint128', type: 'uint128' },
          { name: 'end', internalType: 'uint128', type: 'uint128' },
          { name: 'votes', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'extendPermalock',
    outputs: [
      {
        name: 'newLockup',
        internalType: 'struct IVotingEscrowBase.Lockup',
        type: 'tuple',
        components: [
          { name: 'amount', internalType: 'uint128', type: 'uint128' },
          { name: 'end', internalType: 'uint128', type: 'uint128' },
          { name: 'votes', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'getApproved',
    outputs: [{ name: 'operator', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'timepoint', internalType: 'uint256', type: 'uint256' }],
    name: 'getPastTotalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'timepoint', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'getPastVotes',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'getTokenIdInfo',
    outputs: [
      {
        name: 'lockup',
        internalType: 'struct IVotingEscrowBase.Lockup',
        type: 'tuple',
        components: [
          { name: 'amount', internalType: 'uint128', type: 'uint128' },
          { name: 'end', internalType: 'uint128', type: 'uint128' },
          { name: 'votes', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'getVotes',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'operator', internalType: 'address', type: 'address' },
    ],
    name: 'isApprovedForAll',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'tokenIds', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    name: 'merge',
    outputs: [
      {
        name: 'newLockup',
        internalType: 'struct IVotingEscrowBase.Lockup',
        type: 'tuple',
        components: [
          { name: 'amount', internalType: 'uint128', type: 'uint128' },
          { name: 'end', internalType: 'uint128', type: 'uint128' },
          { name: 'votes', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'nextTokenId',
    outputs: [
      { name: 'nextTokenId_', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ownerOf',
    outputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'parameters',
    outputs: [
      { name: 'yearBase', internalType: 'uint256', type: 'uint256' },
      { name: 'startTimestamp', internalType: 'uint256', type: 'uint256' },
      { name: 'minStakeDuration', internalType: 'uint256', type: 'uint256' },
      { name: 'maxStakeDuration', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'amount', internalType: 'uint128', type: 'uint128' },
      { name: 'duration', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'previewVotes',
    outputs: [
      {
        name: 'lockup',
        internalType: 'struct IVotingEscrowBase.Lockup',
        type: 'tuple',
        components: [
          { name: 'amount', internalType: 'uint128', type: 'uint128' },
          { name: 'end', internalType: 'uint128', type: 'uint128' },
          { name: 'votes', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'approved', internalType: 'bool', type: 'bool' },
    ],
    name: 'setApprovalForAll',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'splitProportionD18', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'split',
    outputs: [
      { name: 'newTokenId', internalType: 'uint256', type: 'uint256' },
      {
        name: 'lockup1',
        internalType: 'struct IVotingEscrowBase.Lockup',
        type: 'tuple',
        components: [
          { name: 'amount', internalType: 'uint128', type: 'uint128' },
          { name: 'end', internalType: 'uint128', type: 'uint128' },
          { name: 'votes', internalType: 'uint256', type: 'uint256' },
        ],
      },
      {
        name: 'lockup2',
        internalType: 'struct IVotingEscrowBase.Lockup',
        type: 'tuple',
        components: [
          { name: 'amount', internalType: 'uint128', type: 'uint128' },
          { name: 'end', internalType: 'uint128', type: 'uint128' },
          { name: 'votes', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'duration', internalType: 'uint256', type: 'uint256' },
      { name: 'amount', internalType: 'uint128', type: 'uint128' },
    ],
    name: 'stake',
    outputs: [
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      {
        name: 'lockup',
        internalType: 'struct IVotingEscrowBase.Lockup',
        type: 'tuple',
        components: [
          { name: 'amount', internalType: 'uint128', type: 'uint128' },
          { name: 'end', internalType: 'uint128', type: 'uint128' },
          { name: 'votes', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'duration', internalType: 'uint256', type: 'uint256' },
      { name: 'amount', internalType: 'uint128', type: 'uint128' },
    ],
    name: 'stakeToSender',
    outputs: [
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      {
        name: 'lockup',
        internalType: 'struct IVotingEscrowBase.Lockup',
        type: 'tuple',
        components: [
          { name: 'amount', internalType: 'uint128', type: 'uint128' },
          { name: 'end', internalType: 'uint128', type: 'uint128' },
          { name: 'votes', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'index', internalType: 'uint256', type: 'uint256' }],
    name: 'tokenByIndex',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'tokenIdsOfOwner',
    outputs: [
      { name: 'tokenIds', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'index', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'tokenOfOwnerByIndex',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'index', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'tokenOfOwnerByIndexExists',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'tokenURI',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'baseTokenRecipient', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'unstake',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'unstakeToSender',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IWETH9
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iweth9Abi = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'spender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'dst', internalType: 'address', type: 'address', indexed: true },
      { name: 'wad', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'Deposit',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Transfer',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'src', internalType: 'address', type: 'address', indexed: true },
      { name: 'wad', internalType: 'uint256', type: 'uint256', indexed: false },
    ],
    name: 'Withdrawal',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'deposit',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'withdraw',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// LINK
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const linkAbi = [
  { type: 'constructor', inputs: [], stateMutability: 'nonpayable' },
  {
    type: 'error',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'allowance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC20InsufficientAllowance',
  },
  {
    type: 'error',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'balance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC20InsufficientBalance',
  },
  {
    type: 'error',
    inputs: [{ name: 'approver', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidApprover',
  },
  {
    type: 'error',
    inputs: [{ name: 'receiver', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidReceiver',
  },
  {
    type: 'error',
    inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidSender',
  },
  {
    type: 'error',
    inputs: [{ name: 'spender', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidSpender',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'spender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Transfer',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'mint',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// LiquidityUtilities
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const liquidityUtilitiesAbi = [
  {
    type: 'error',
    inputs: [],
    name: 'LiquidityUtilitiesFailedToFindDeltaAmounts',
  },
  {
    type: 'error',
    inputs: [
      { name: 'initialTargetB', internalType: 'uint256', type: 'uint256' },
      { name: 'deltaLpBalance', internalType: 'uint256', type: 'uint256' },
      {
        name: 'minimumRequiredLpBalance',
        internalType: 'uint256',
        type: 'uint256',
      },
    ],
    name: 'LiquidityUtilitiesInitialTargetBTooSmall',
  },
  { type: 'error', inputs: [], name: 'LiquidityUtilitiesNoSwapLiquidity' },
  {
    type: 'error',
    inputs: [
      { name: 'targetSqrtPrice', internalType: 'uint256', type: 'uint256' },
      { name: 'sqrtLowerTickPrice', internalType: 'uint256', type: 'uint256' },
      { name: 'sqrtUpperTickPrice', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'LiquidityUtilitiesTargetPriceOutOfBounds',
  },
  {
    type: 'error',
    inputs: [
      { name: 'targetIsA', internalType: 'bool', type: 'bool' },
      { name: 'deltaA', internalType: 'uint256', type: 'uint256' },
      { name: 'deltaB', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'LiquidityUtilitiesTargetingTokenWithNoDelta',
  },
  {
    type: 'error',
    inputs: [
      {
        name: 'relativeLiquidityAmount',
        internalType: 'uint256',
        type: 'uint256',
      },
      { name: 'deltaA', internalType: 'uint256', type: 'uint256' },
      { name: 'deltaB', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'LiquidityUtilitiesTooLittleLiquidity',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// LpReward
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const lpRewardAbi = [
  {
    type: 'constructor',
    inputs: [
      { name: '_authorizedNotifier', internalType: 'address', type: 'address' },
    ],
    stateMutability: 'nonpayable',
  },
  { type: 'error', inputs: [], name: 'CheckpointUnorderedInsertion' },
  {
    type: 'error',
    inputs: [
      { name: 'timepoint', internalType: 'uint256', type: 'uint256' },
      { name: 'clock', internalType: 'uint48', type: 'uint48' },
    ],
    name: 'ERC5805FutureLookup',
  },
  {
    type: 'error',
    inputs: [
      { name: 'timestamp', internalType: 'uint256', type: 'uint256' },
      { name: 'epochStart', internalType: 'uint256', type: 'uint256' },
      { name: 'epochEnd', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'EpochEnded',
  },
  {
    type: 'error',
    inputs: [{ name: 'epoch', internalType: 'uint256', type: 'uint256' }],
    name: 'InvalidEpoch',
  },
  {
    type: 'error',
    inputs: [
      { name: 'inputEpoch', internalType: 'uint256', type: 'uint256' },
      { name: 'currentEpoch', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'NoDataForFutureEpoch',
  },
  { type: 'error', inputs: [], name: 'NotAuthorizedNotifier' },
  { type: 'error', inputs: [], name: 'PoolNotInitialized' },
  {
    type: 'error',
    inputs: [
      { name: 'bits', internalType: 'uint8', type: 'uint8' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'SafeCastOverflowedUintDowncast',
  },
  {
    type: 'error',
    inputs: [
      { name: 'timestamp', internalType: 'uint256', type: 'uint256' },
      { name: 'epochStart', internalType: 'uint256', type: 'uint256' },
      { name: 'epochEnd', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'VotePeriodNotActive',
  },
  {
    type: 'error',
    inputs: [
      { name: 'timestamp', internalType: 'uint256', type: 'uint256' },
      { name: 'epochStart', internalType: 'uint256', type: 'uint256' },
      { name: 'epochEnd', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'VotePeriodNotEnded',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
        indexed: false,
      },
      { name: 'isTokenA', internalType: 'bool', type: 'bool', indexed: false },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      { name: 'binId', internalType: 'uint32', type: 'uint32', indexed: false },
      {
        name: 'timestamp',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'userRewards',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'userRewardPerTokenStored',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'CheckpointTokenId',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
        indexed: false,
      },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      { name: 'binId', internalType: 'uint32', type: 'uint32', indexed: false },
      {
        name: 'timestamp',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'balanceOf',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'totalSupply',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'NotifyBinLiquidity',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
        indexed: false,
      },
      { name: 'isTokenA', internalType: 'bool', type: 'bool', indexed: false },
      { name: 'binId', internalType: 'uint32', type: 'uint32', indexed: false },
      {
        name: 'timestamp',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'rewardPerFeeStored',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'feeTrackerByBin',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'feeTracker',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'RegisterFee',
  },
  {
    type: 'function',
    inputs: [],
    name: 'EPOCH_PERIOD',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'authorizedNotifier',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
      { name: 'binId', internalType: 'uint32', type: 'uint32' },
    ],
    name: 'binTotalSupply',
    outputs: [
      { name: 'totalSupply', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
      { name: 'isTokenA', internalType: 'bool', type: 'bool' },
      { name: 'binId', internalType: 'uint32', type: 'uint32' },
      { name: 'epoch', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'binTrackerForEpoch',
    outputs: [
      { name: 'binFeeTracker', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'clock',
    outputs: [{ name: '', internalType: 'uint48', type: 'uint48' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'currentEpoch',
    outputs: [{ name: 'epoch', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'offset', internalType: 'int256', type: 'int256' }],
    name: 'epochAtOffset',
    outputs: [{ name: 'epoch', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'epoch', internalType: 'uint256', type: 'uint256' }],
    name: 'epochEnd',
    outputs: [{ name: 'end', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [{ name: 'epoch', internalType: 'uint256', type: 'uint256' }],
    name: 'epochIsOver',
    outputs: [{ name: 'isOver', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
      { name: 'isTokenA', internalType: 'bool', type: 'bool' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'binId', internalType: 'uint32', type: 'uint32' },
      { name: 'epoch', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'feeProrataForEpoch',
    outputs: [{ name: 'prorata', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
      { name: 'isTokenA', internalType: 'bool', type: 'bool' },
    ],
    name: 'feeTracker',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
      { name: 'isTokenA', internalType: 'bool', type: 'bool' },
      { name: 'binId', internalType: 'uint32', type: 'uint32' },
    ],
    name: 'feeTrackerByBin',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
      { name: 'isTokenA', internalType: 'bool', type: 'bool' },
      { name: 'epoch', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'globalTrackerForEpoch',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'epoch', internalType: 'uint256', type: 'uint256' }],
    name: 'isEpoch',
    outputs: [{ name: '_isEpoch', internalType: 'bool', type: 'bool' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [],
    name: 'lastEpoch',
    outputs: [{ name: 'epoch', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'nextEpoch',
    outputs: [{ name: 'epoch', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'binId', internalType: 'uint32', type: 'uint32' },
      { name: 'currentBinLpBalance', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'notifyBinLiquidity',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
      { name: 'binId', internalType: 'uint32', type: 'uint32' },
      { name: 'timestamp', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'pastBinTotalSupply',
    outputs: [
      { name: 'totalSupply', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
      { name: 'isTokenA', internalType: 'bool', type: 'bool' },
      { name: 'timestamp', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'pastFeeTracker',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
      { name: 'isTokenA', internalType: 'bool', type: 'bool' },
      { name: 'binId', internalType: 'uint32', type: 'uint32' },
      { name: 'timestamp', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'pastFeeTrackerByBin',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
      { name: 'isTokenA', internalType: 'bool', type: 'bool' },
      { name: 'binId', internalType: 'uint32', type: 'uint32' },
      { name: 'timestamp', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'pastRewardPerFeeStored',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'binId', internalType: 'uint32', type: 'uint32' },
      { name: 'timestamp', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'pastUserBalance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
      { name: 'isTokenA', internalType: 'bool', type: 'bool' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'binId', internalType: 'uint32', type: 'uint32' },
      { name: 'timestamp', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'pastUserReward',
    outputs: [
      { name: 'userEpochReward', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'isTokenA', internalType: 'bool', type: 'bool' },
      { name: 'binId', internalType: 'uint32', type: 'uint32' },
      { name: 'timestamp', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'pastUserRewardPerTokenStored',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
      { name: 'isTokenA', internalType: 'bool', type: 'bool' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'binId', internalType: 'uint32', type: 'uint32' },
      { name: 'timestamp', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'pastUserRewardRaw',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '', internalType: 'contract IMaverickV2Pool', type: 'address' },
    ],
    name: 'poolData',
    outputs: [
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'isTokenA', internalType: 'bool', type: 'bool' },
      { name: 'binId', internalType: 'uint32', type: 'uint32' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'registerFee',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
      { name: 'isTokenA', internalType: 'bool', type: 'bool' },
      { name: 'binId', internalType: 'uint32', type: 'uint32' },
    ],
    name: 'rewardPerFeeStored',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'binId', internalType: 'uint32', type: 'uint32' },
    ],
    name: 'userBalance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
      { name: 'isTokenA', internalType: 'bool', type: 'bool' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'binId', internalType: 'uint32', type: 'uint32' },
    ],
    name: 'userReward',
    outputs: [
      { name: 'userEpochReward', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'isTokenA', internalType: 'bool', type: 'bool' },
      { name: 'binId', internalType: 'uint32', type: 'uint32' },
    ],
    name: 'userRewardPerTokenStored',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
      { name: 'isTokenA', internalType: 'bool', type: 'bool' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'binId', internalType: 'uint32', type: 'uint32' },
    ],
    name: 'userRewardRaw',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
      { name: 'isTokenA', internalType: 'bool', type: 'bool' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'binId', internalType: 'uint32', type: 'uint32' },
      { name: 'epoch', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'userTrackerForEpoch',
    outputs: [
      { name: 'userEpochReward', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'binIds', internalType: 'uint32[]', type: 'uint32[]' },
      { name: 'epoch', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'userTrackerForTokenIdForEpoch',
    outputs: [
      { name: 'tokenAAmount', internalType: 'uint256', type: 'uint256' },
      { name: 'tokenBAmount', internalType: 'uint256', type: 'uint256' },
      { name: 'tokenAAmounts', internalType: 'uint256[]', type: 'uint256[]' },
      { name: 'tokenBAmounts', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'epoch', internalType: 'uint256', type: 'uint256' }],
    name: 'votingIsActive',
    outputs: [{ name: 'isActive', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Math
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const mathAbi = [
  { type: 'error', inputs: [], name: 'MathOverflowedMulDiv' },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// MaverickV2Factory
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const maverickV2FactoryAbi = [
  {
    type: 'constructor',
    inputs: [
      { name: '_initialOwner', internalType: 'address', type: 'address' },
    ],
    stateMutability: 'nonpayable',
  },
  { type: 'error', inputs: [], name: 'FactorAlreadyInitialized' },
  { type: 'error', inputs: [], name: 'FactorNotInitialized' },
  { type: 'error', inputs: [], name: 'FactoryAccessorMustBeNonZero' },
  { type: 'error', inputs: [], name: 'FactoryInvalidFee' },
  {
    type: 'error',
    inputs: [{ name: 'kinds', internalType: 'uint8', type: 'uint8' }],
    name: 'FactoryInvalidKinds',
  },
  {
    type: 'error',
    inputs: [{ name: 'lookback', internalType: 'uint256', type: 'uint256' }],
    name: 'FactoryInvalidLookback',
  },
  {
    type: 'error',
    inputs: [{ name: 'tickSpacing', internalType: 'uint256', type: 'uint256' }],
    name: 'FactoryInvalidTickSpacing',
  },
  {
    type: 'error',
    inputs: [
      { name: 'decimalsA', internalType: 'uint8', type: 'uint8' },
      { name: 'decimalsB', internalType: 'uint8', type: 'uint8' },
    ],
    name: 'FactoryInvalidTokenDecimals',
  },
  {
    type: 'error',
    inputs: [
      { name: '_tokenA', internalType: 'contract IERC20', type: 'address' },
      { name: '_tokenB', internalType: 'contract IERC20', type: 'address' },
    ],
    name: 'FactoryInvalidTokenOrder',
  },
  {
    type: 'error',
    inputs: [
      { name: 'feeAIn', internalType: 'uint256', type: 'uint256' },
      { name: 'feeBIn', internalType: 'uint256', type: 'uint256' },
      { name: 'tickSpacing', internalType: 'uint256', type: 'uint256' },
      { name: 'lookback', internalType: 'uint256', type: 'uint256' },
      { name: 'tokenA', internalType: 'contract IERC20', type: 'address' },
      { name: 'tokenB', internalType: 'contract IERC20', type: 'address' },
      { name: 'kinds', internalType: 'uint8', type: 'uint8' },
      { name: 'accessor', internalType: 'address', type: 'address' },
    ],
    name: 'FactoryPoolAlreadyExists',
  },
  { type: 'error', inputs: [], name: 'NotImplemented' },
  {
    type: 'error',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'OwnableInvalidOwner',
  },
  {
    type: 'error',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'OwnableUnauthorizedAccount',
  },
  {
    type: 'error',
    inputs: [
      { name: 'bits', internalType: 'uint8', type: 'uint8' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'SafeCastOverflowedUintDowncast',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'OwnershipTransferred',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'poolAddress',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
        indexed: false,
      },
      {
        name: 'protocolFeeRatio',
        internalType: 'uint8',
        type: 'uint8',
        indexed: false,
      },
      {
        name: 'feeAIn',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'feeBIn',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'tickSpacing',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'lookback',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'activeTick',
        internalType: 'int32',
        type: 'int32',
        indexed: false,
      },
      {
        name: 'tokenA',
        internalType: 'contract IERC20',
        type: 'address',
        indexed: false,
      },
      {
        name: 'tokenB',
        internalType: 'contract IERC20',
        type: 'address',
        indexed: false,
      },
      { name: 'kinds', internalType: 'uint8', type: 'uint8', indexed: false },
      {
        name: 'accessor',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'PoolCreated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'receiver',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'SetFactoryProtocolFeeReceiver',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'registry',
        internalType: 'contract IFeeRegistry',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'SetFactoryProtocolFeeRegistry',
  },
  {
    type: 'function',
    inputs: [
      { name: 'fee', internalType: 'uint64', type: 'uint64' },
      { name: 'tickSpacing', internalType: 'uint16', type: 'uint16' },
      { name: 'lookback', internalType: 'uint32', type: 'uint32' },
      { name: 'tokenA', internalType: 'contract IERC20', type: 'address' },
      { name: 'tokenB', internalType: 'contract IERC20', type: 'address' },
      { name: 'activeTick', internalType: 'int32', type: 'int32' },
      { name: 'kinds', internalType: 'uint8', type: 'uint8' },
    ],
    name: 'create',
    outputs: [
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'feeAIn', internalType: 'uint64', type: 'uint64' },
      { name: 'feeBIn', internalType: 'uint64', type: 'uint64' },
      { name: 'tickSpacing', internalType: 'uint16', type: 'uint16' },
      { name: 'lookback', internalType: 'uint32', type: 'uint32' },
      { name: 'tokenA', internalType: 'contract IERC20', type: 'address' },
      { name: 'tokenB', internalType: 'contract IERC20', type: 'address' },
      { name: 'activeTick', internalType: 'int32', type: 'int32' },
      { name: 'kinds', internalType: 'uint8', type: 'uint8' },
    ],
    name: 'create',
    outputs: [
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'deployParameters',
    outputs: [
      { name: 'feeAIn', internalType: 'uint64', type: 'uint64' },
      { name: 'feeBIn', internalType: 'uint64', type: 'uint64' },
      { name: 'lookback', internalType: 'uint32', type: 'uint32' },
      { name: 'activeTick', internalType: 'int32', type: 'int32' },
      { name: 'tokenAScale', internalType: 'uint64', type: 'uint64' },
      { name: 'tokenBScale', internalType: 'uint64', type: 'uint64' },
      { name: 'tokenA', internalType: 'contract IERC20', type: 'address' },
      { name: 'tokenB', internalType: 'contract IERC20', type: 'address' },
      { name: 'tickSpacing', internalType: 'uint16', type: 'uint16' },
      { name: 'options', internalType: 'uint8', type: 'uint8' },
      { name: 'accessor', internalType: 'address', type: 'address' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '', internalType: 'contract IMaverickV2Pool', type: 'address' },
    ],
    name: 'isFactoryPool',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'startIndex', internalType: 'uint256', type: 'uint256' },
      { name: 'endIndex', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'lookup',
    outputs: [
      {
        name: '',
        internalType: 'contract IMaverickV2Pool[]',
        type: 'address[]',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_feeAIn', internalType: 'uint256', type: 'uint256' },
      { name: '_feeBIn', internalType: 'uint256', type: 'uint256' },
      { name: '_tickSpacing', internalType: 'uint256', type: 'uint256' },
      { name: '_lookback', internalType: 'uint256', type: 'uint256' },
      { name: '_tokenA', internalType: 'contract IERC20', type: 'address' },
      { name: '_tokenB', internalType: 'contract IERC20', type: 'address' },
      { name: '_kinds', internalType: 'uint8', type: 'uint8' },
    ],
    name: 'lookup',
    outputs: [
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_tokenA', internalType: 'contract IERC20', type: 'address' },
      { name: '_tokenB', internalType: 'contract IERC20', type: 'address' },
      { name: 'startIndex', internalType: 'uint256', type: 'uint256' },
      { name: 'endIndex', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'lookup',
    outputs: [
      {
        name: '',
        internalType: 'contract IMaverickV2Pool[]',
        type: 'address[]',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_tokenA', internalType: 'contract IERC20', type: 'address' },
      { name: '_tokenB', internalType: 'contract IERC20', type: 'address' },
      { name: 'accessor', internalType: 'address', type: 'address' },
    ],
    name: 'poolByTokenCount',
    outputs: [{ name: '_poolCount', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'poolCount',
    outputs: [{ name: '_poolCount', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'protocolFeeReceiver',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'protocolFeeRegistry',
    outputs: [
      { name: '', internalType: 'contract IFeeRegistry', type: 'address' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'receiver', internalType: 'address', type: 'address' }],
    name: 'setProtocolFeeReceiver',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'registry',
        internalType: 'contract IFeeRegistry',
        type: 'address',
      },
    ],
    name: 'setProtocolFeeRegistry',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// MaverickV2LiquidityManager
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const maverickV2LiquidityManagerAbi = [
  {
    type: 'constructor',
    inputs: [
      {
        name: '_factory',
        internalType: 'contract IMaverickV2Factory',
        type: 'address',
      },
      { name: '_weth', internalType: 'contract IWETH9', type: 'address' },
      {
        name: '_position',
        internalType: 'contract IMaverickV2Position',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'error',
    inputs: [{ name: 'target', internalType: 'address', type: 'address' }],
    name: 'AddressEmptyCode',
  },
  {
    type: 'error',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'AddressInsufficientBalance',
  },
  { type: 'error', inputs: [], name: 'BytesLibSliceOutOfBounds' },
  { type: 'error', inputs: [], name: 'BytesLibSliceOverflow' },
  { type: 'error', inputs: [], name: 'FailedInnerCall' },
  { type: 'error', inputs: [], name: 'LiquidityManagerNotFactoryPool' },
  { type: 'error', inputs: [], name: 'LiquidityManagerNotTokenIdOwner' },
  { type: 'error', inputs: [], name: 'MathOverflowedMulDiv' },
  {
    type: 'error',
    inputs: [
      { name: 'token', internalType: 'address', type: 'address' },
      { name: 'amountMinimum', internalType: 'uint256', type: 'uint256' },
      { name: 'contractBalance', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'PaymentInsufficientBalance',
  },
  { type: 'error', inputs: [], name: 'PaymentSenderNotWETH9' },
  {
    type: 'error',
    inputs: [
      { name: 'deadline', internalType: 'uint256', type: 'uint256' },
      { name: 'blockTimestamp', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'PositionDeadlinePassed',
  },
  {
    type: 'error',
    inputs: [
      { name: 'sqrtPrice', internalType: 'uint256', type: 'uint256' },
      { name: 'minSqrtPrice', internalType: 'uint256', type: 'uint256' },
      { name: 'maxSqrtPrice', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'PositionExceededPriceBounds',
  },
  { type: 'error', inputs: [], name: 'RouterNotFactoryPool' },
  {
    type: 'error',
    inputs: [
      { name: 'amountOutMinimum', internalType: 'uint256', type: 'uint256' },
      { name: 'amountOut', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'RouterTooLittleReceived',
  },
  {
    type: 'error',
    inputs: [
      { name: 'amountInMaximum', internalType: 'uint256', type: 'uint256' },
      { name: 'amountIn', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'RouterTooMuchRequested',
  },
  { type: 'error', inputs: [], name: 'RouterZeroSwap' },
  {
    type: 'error',
    inputs: [
      { name: 'bits', internalType: 'uint8', type: 'uint8' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'SafeCastOverflowedUintDowncast',
  },
  {
    type: 'error',
    inputs: [{ name: 'tick', internalType: 'int256', type: 'int256' }],
    name: 'TickMaxExceeded',
  },
  {
    type: 'error',
    inputs: [
      { name: 'token', internalType: 'contract IERC20', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'TransferFailed',
  },
  {
    type: 'error',
    inputs: [
      { name: 'token', internalType: 'contract IERC20', type: 'address' },
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'TransferFromFailed',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
      { name: 'recipient', internalType: 'address', type: 'address' },
      { name: 'subaccount', internalType: 'uint256', type: 'uint256' },
      { name: 'packedSqrtPriceBreaks', internalType: 'bytes', type: 'bytes' },
      { name: 'packedArgs', internalType: 'bytes[]', type: 'bytes[]' },
    ],
    name: 'addLiquidity',
    outputs: [
      { name: 'tokenAAmount', internalType: 'uint256', type: 'uint256' },
      { name: 'tokenBAmount', internalType: 'uint256', type: 'uint256' },
      { name: 'binIds', internalType: 'uint32[]', type: 'uint32[]' },
    ],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
      { name: 'recipient', internalType: 'address', type: 'address' },
      { name: 'index', internalType: 'uint256', type: 'uint256' },
      { name: 'packedSqrtPriceBreaks', internalType: 'bytes', type: 'bytes' },
      { name: 'packedArgs', internalType: 'bytes[]', type: 'bytes[]' },
    ],
    name: 'addPositionLiquidityToRecipientByTokenIndex',
    outputs: [
      { name: 'tokenAAmount', internalType: 'uint256', type: 'uint256' },
      { name: 'tokenBAmount', internalType: 'uint256', type: 'uint256' },
      { name: 'binIds', internalType: 'uint32[]', type: 'uint32[]' },
    ],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
      { name: 'index', internalType: 'uint256', type: 'uint256' },
      { name: 'packedSqrtPriceBreaks', internalType: 'bytes', type: 'bytes' },
      { name: 'packedArgs', internalType: 'bytes[]', type: 'bytes[]' },
    ],
    name: 'addPositionLiquidityToSenderByTokenIndex',
    outputs: [
      { name: 'tokenAAmount', internalType: 'uint256', type: 'uint256' },
      { name: 'tokenBAmount', internalType: 'uint256', type: 'uint256' },
      { name: 'binIds', internalType: 'uint32[]', type: 'uint32[]' },
    ],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [{ name: 'deadline', internalType: 'uint256', type: 'uint256' }],
    name: 'checkDeadline',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
      { name: 'minSqrtPrice', internalType: 'uint256', type: 'uint256' },
      { name: 'maxSqrtPrice', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'checkSqrtPrice',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'fee', internalType: 'uint64', type: 'uint64' },
      { name: 'tickSpacing', internalType: 'uint16', type: 'uint16' },
      { name: 'lookback', internalType: 'uint32', type: 'uint32' },
      { name: 'tokenA', internalType: 'contract IERC20', type: 'address' },
      { name: 'tokenB', internalType: 'contract IERC20', type: 'address' },
      { name: 'activeTick', internalType: 'int32', type: 'int32' },
      { name: 'kinds', internalType: 'uint8', type: 'uint8' },
    ],
    name: 'createPool',
    outputs: [
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
    ],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'feeAIn', internalType: 'uint64', type: 'uint64' },
      { name: 'feeBIn', internalType: 'uint64', type: 'uint64' },
      { name: 'tickSpacing', internalType: 'uint16', type: 'uint16' },
      { name: 'lookback', internalType: 'uint32', type: 'uint32' },
      { name: 'tokenA', internalType: 'contract IERC20', type: 'address' },
      { name: 'tokenB', internalType: 'contract IERC20', type: 'address' },
      { name: 'activeTick', internalType: 'int32', type: 'int32' },
      { name: 'kinds', internalType: 'uint8', type: 'uint8' },
    ],
    name: 'createPool',
    outputs: [
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
    ],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'recipient', internalType: 'address', type: 'address' },
      {
        name: 'params',
        internalType: 'struct IMaverickV2PoolLens.CreateAndAddParamsInputs',
        type: 'tuple',
        components: [
          { name: 'feeAIn', internalType: 'uint64', type: 'uint64' },
          { name: 'feeBIn', internalType: 'uint64', type: 'uint64' },
          { name: 'tickSpacing', internalType: 'uint16', type: 'uint16' },
          { name: 'lookback', internalType: 'uint32', type: 'uint32' },
          { name: 'tokenA', internalType: 'contract IERC20', type: 'address' },
          { name: 'tokenB', internalType: 'contract IERC20', type: 'address' },
          { name: 'activeTick', internalType: 'int32', type: 'int32' },
          { name: 'kinds', internalType: 'uint8', type: 'uint8' },
          {
            name: 'donateParams',
            internalType: 'struct IMaverickV2Pool.AddLiquidityParams',
            type: 'tuple',
            components: [
              { name: 'kind', internalType: 'uint8', type: 'uint8' },
              { name: 'ticks', internalType: 'int32[]', type: 'int32[]' },
              { name: 'amounts', internalType: 'uint128[]', type: 'uint128[]' },
            ],
          },
          { name: 'swapAmount', internalType: 'uint256', type: 'uint256' },
          {
            name: 'addParams',
            internalType: 'struct IMaverickV2Pool.AddLiquidityParams',
            type: 'tuple',
            components: [
              { name: 'kind', internalType: 'uint8', type: 'uint8' },
              { name: 'ticks', internalType: 'int32[]', type: 'int32[]' },
              { name: 'amounts', internalType: 'uint128[]', type: 'uint128[]' },
            ],
          },
          { name: 'packedAddParams', internalType: 'bytes[]', type: 'bytes[]' },
          { name: 'deltaAOut', internalType: 'uint256', type: 'uint256' },
          { name: 'deltaBOut', internalType: 'uint256', type: 'uint256' },
          { name: 'preAddReserveA', internalType: 'uint256', type: 'uint256' },
          { name: 'preAddReserveB', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
    name: 'createPoolAtPriceAndAddLiquidity',
    outputs: [
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
      { name: 'tokenAAmount', internalType: 'uint256', type: 'uint256' },
      { name: 'tokenBAmount', internalType: 'uint256', type: 'uint256' },
      { name: 'binIds', internalType: 'uint32[]', type: 'uint32[]' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'params',
        internalType: 'struct IMaverickV2PoolLens.CreateAndAddParamsInputs',
        type: 'tuple',
        components: [
          { name: 'feeAIn', internalType: 'uint64', type: 'uint64' },
          { name: 'feeBIn', internalType: 'uint64', type: 'uint64' },
          { name: 'tickSpacing', internalType: 'uint16', type: 'uint16' },
          { name: 'lookback', internalType: 'uint32', type: 'uint32' },
          { name: 'tokenA', internalType: 'contract IERC20', type: 'address' },
          { name: 'tokenB', internalType: 'contract IERC20', type: 'address' },
          { name: 'activeTick', internalType: 'int32', type: 'int32' },
          { name: 'kinds', internalType: 'uint8', type: 'uint8' },
          {
            name: 'donateParams',
            internalType: 'struct IMaverickV2Pool.AddLiquidityParams',
            type: 'tuple',
            components: [
              { name: 'kind', internalType: 'uint8', type: 'uint8' },
              { name: 'ticks', internalType: 'int32[]', type: 'int32[]' },
              { name: 'amounts', internalType: 'uint128[]', type: 'uint128[]' },
            ],
          },
          { name: 'swapAmount', internalType: 'uint256', type: 'uint256' },
          {
            name: 'addParams',
            internalType: 'struct IMaverickV2Pool.AddLiquidityParams',
            type: 'tuple',
            components: [
              { name: 'kind', internalType: 'uint8', type: 'uint8' },
              { name: 'ticks', internalType: 'int32[]', type: 'int32[]' },
              { name: 'amounts', internalType: 'uint128[]', type: 'uint128[]' },
            ],
          },
          { name: 'packedAddParams', internalType: 'bytes[]', type: 'bytes[]' },
          { name: 'deltaAOut', internalType: 'uint256', type: 'uint256' },
          { name: 'deltaBOut', internalType: 'uint256', type: 'uint256' },
          { name: 'preAddReserveA', internalType: 'uint256', type: 'uint256' },
          { name: 'preAddReserveB', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
    name: 'createPoolAtPriceAndAddLiquidityToSender',
    outputs: [
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
      { name: 'tokenAAmount', internalType: 'uint256', type: 'uint256' },
      { name: 'tokenBAmount', internalType: 'uint256', type: 'uint256' },
      { name: 'binIds', internalType: 'uint32[]', type: 'uint32[]' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
      {
        name: 'args',
        internalType: 'struct IMaverickV2Pool.AddLiquidityParams',
        type: 'tuple',
        components: [
          { name: 'kind', internalType: 'uint8', type: 'uint8' },
          { name: 'ticks', internalType: 'int32[]', type: 'int32[]' },
          { name: 'amounts', internalType: 'uint128[]', type: 'uint128[]' },
        ],
      },
    ],
    name: 'donateLiquidity',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'recipient', internalType: 'address', type: 'address' },
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
      { name: 'tokenAIn', internalType: 'bool', type: 'bool' },
      { name: 'amountOut', internalType: 'uint256', type: 'uint256' },
      { name: 'tickLimit', internalType: 'int32', type: 'int32' },
    ],
    name: 'exactOutputSingleMinimal',
    outputs: [
      { name: 'amountIn', internalType: 'uint256', type: 'uint256' },
      { name: 'amountOut_', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'factory',
    outputs: [
      {
        name: 'factory_',
        internalType: 'contract IMaverickV2Factory',
        type: 'address',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'tokenA', internalType: 'contract IERC20', type: 'address' },
      { name: 'tokenB', internalType: 'contract IERC20', type: 'address' },
      { name: 'amountA', internalType: 'uint256', type: 'uint256' },
      { name: 'amountB', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'maverickV2AddLiquidityCallback',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'tokenIn', internalType: 'contract IERC20', type: 'address' },
      { name: 'amountToPay', internalType: 'uint256', type: 'uint256' },
      { name: '', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'maverickV2SwapCallback',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
      { name: 'binIds', internalType: 'uint32[]', type: 'uint32[]' },
      { name: 'maxRecursion', internalType: 'uint32', type: 'uint32' },
    ],
    name: 'migrateBinsUpStack',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
      { name: 'recipient', internalType: 'address', type: 'address' },
      { name: 'packedSqrtPriceBreaks', internalType: 'bytes', type: 'bytes' },
      { name: 'packedArgs', internalType: 'bytes[]', type: 'bytes[]' },
    ],
    name: 'mintPositionNft',
    outputs: [
      { name: 'tokenAAmount', internalType: 'uint256', type: 'uint256' },
      { name: 'tokenBAmount', internalType: 'uint256', type: 'uint256' },
      { name: 'binIds', internalType: 'uint32[]', type: 'uint32[]' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
      { name: 'packedSqrtPriceBreaks', internalType: 'bytes', type: 'bytes' },
      { name: 'packedArgs', internalType: 'bytes[]', type: 'bytes[]' },
    ],
    name: 'mintPositionNftToSender',
    outputs: [
      { name: 'tokenAAmount', internalType: 'uint256', type: 'uint256' },
      { name: 'tokenBAmount', internalType: 'uint256', type: 'uint256' },
      { name: 'binIds', internalType: 'uint32[]', type: 'uint32[]' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [{ name: 'data', internalType: 'bytes[]', type: 'bytes[]' }],
    name: 'multicall',
    outputs: [{ name: 'results', internalType: 'bytes[]', type: 'bytes[]' }],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'args',
        internalType: 'struct IMaverickV2Pool.AddLiquidityParams',
        type: 'tuple',
        components: [
          { name: 'kind', internalType: 'uint8', type: 'uint8' },
          { name: 'ticks', internalType: 'int32[]', type: 'int32[]' },
          { name: 'amounts', internalType: 'uint128[]', type: 'uint128[]' },
        ],
      },
    ],
    name: 'packAddLiquidityArgs',
    outputs: [{ name: 'argsPacked', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'args',
        internalType: 'struct IMaverickV2Pool.AddLiquidityParams[]',
        type: 'tuple[]',
        components: [
          { name: 'kind', internalType: 'uint8', type: 'uint8' },
          { name: 'ticks', internalType: 'int32[]', type: 'int32[]' },
          { name: 'amounts', internalType: 'uint128[]', type: 'uint128[]' },
        ],
      },
    ],
    name: 'packAddLiquidityArgsArray',
    outputs: [{ name: 'argsPacked', internalType: 'bytes[]', type: 'bytes[]' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [{ name: 'fullArray', internalType: 'uint88[]', type: 'uint88[]' }],
    name: 'packUint88Array',
    outputs: [{ name: 'packedArray', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [],
    name: 'position',
    outputs: [
      {
        name: '',
        internalType: 'contract IMaverickV2Position',
        type: 'address',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'refundETH',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'token', internalType: 'contract IERC20', type: 'address' },
      { name: 'amountMinimum', internalType: 'uint256', type: 'uint256' },
      { name: 'recipient', internalType: 'address', type: 'address' },
    ],
    name: 'sweepToken',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'token', internalType: 'contract IERC20', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
      { name: 'recipient', internalType: 'address', type: 'address' },
    ],
    name: 'sweepTokenAmount',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [{ name: 'argsPacked', internalType: 'bytes', type: 'bytes' }],
    name: 'unpackAddLiquidityArgs',
    outputs: [
      {
        name: 'args',
        internalType: 'struct IMaverickV2Pool.AddLiquidityParams',
        type: 'tuple',
        components: [
          { name: 'kind', internalType: 'uint8', type: 'uint8' },
          { name: 'ticks', internalType: 'int32[]', type: 'int32[]' },
          { name: 'amounts', internalType: 'uint128[]', type: 'uint128[]' },
        ],
      },
    ],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [{ name: 'packedArray', internalType: 'bytes', type: 'bytes' }],
    name: 'unpackUint88Array',
    outputs: [
      { name: 'fullArray', internalType: 'uint88[]', type: 'uint88[]' },
    ],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'tokenA', internalType: 'contract IERC20', type: 'address' },
      { name: 'tokenB', internalType: 'contract IERC20', type: 'address' },
      { name: 'tokenAAmountMin', internalType: 'uint256', type: 'uint256' },
      { name: 'tokenBAmountMin', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'unwrapAndSweep',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'amountMinimum', internalType: 'uint256', type: 'uint256' },
      { name: 'recipient', internalType: 'address', type: 'address' },
    ],
    name: 'unwrapWETH9',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'weth',
    outputs: [
      { name: 'weth_', internalType: 'contract IWETH9', type: 'address' },
    ],
    stateMutability: 'view',
  },
  { type: 'receive', stateMutability: 'payable' },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// MaverickV2Pool
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const maverickV2PoolAbi = [
  { type: 'constructor', inputs: [], stateMutability: 'nonpayable' },
  { type: 'error', inputs: [], name: 'MathOverflowedMulDiv' },
  {
    type: 'error',
    inputs: [
      { name: 'binIdsLength', internalType: 'uint256', type: 'uint256' },
      { name: 'amountsLength', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'PoolBinIdsAmountsLengthMismatch',
  },
  {
    type: 'error',
    inputs: [{ name: 'startingTick', internalType: 'int32', type: 'int32' }],
    name: 'PoolCurrentTickBeyondSwapLimit',
  },
  { type: 'error', inputs: [], name: 'PoolFunctionNotImplemented' },
  {
    type: 'error',
    inputs: [
      { name: 'deltaLpAmount', internalType: 'uint256', type: 'uint256' },
      { name: 'accountBalance', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'PoolInsufficientBalance',
  },
  { type: 'error', inputs: [], name: 'PoolInvalidFee' },
  {
    type: 'error',
    inputs: [
      { name: 'kinds', internalType: 'uint256', type: 'uint256' },
      { name: 'kind', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'PoolKindNotSupported',
  },
  { type: 'error', inputs: [], name: 'PoolLocked' },
  { type: 'error', inputs: [], name: 'PoolMigrateBinFirst' },
  { type: 'error', inputs: [], name: 'PoolMinimumLiquidityNotMet' },
  { type: 'error', inputs: [], name: 'PoolNoProtocolFeeReceiverSet' },
  {
    type: 'error',
    inputs: [{ name: 'amount', internalType: 'uint256', type: 'uint256' }],
    name: 'PoolReservesExceedMaximum',
  },
  {
    type: 'error',
    inputs: [
      { name: 'sender_', internalType: 'address', type: 'address' },
      { name: 'accessor', internalType: 'address', type: 'address' },
    ],
    name: 'PoolSenderNotAccessor',
  },
  {
    type: 'error',
    inputs: [
      { name: 'sender_', internalType: 'address', type: 'address' },
      { name: 'accessor', internalType: 'address', type: 'address' },
    ],
    name: 'PoolSenderNotFactory',
  },
  {
    type: 'error',
    inputs: [{ name: 'tick', internalType: 'uint256', type: 'uint256' }],
    name: 'PoolTickMaxExceeded',
  },
  {
    type: 'error',
    inputs: [
      { name: 'ticksLength', internalType: 'uint256', type: 'uint256' },
      { name: 'amountsLength', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'PoolTicksAmountsLengthMismatch',
  },
  {
    type: 'error',
    inputs: [
      { name: 'index', internalType: 'uint256', type: 'uint256' },
      { name: 'previousTick', internalType: 'int256', type: 'int256' },
      { name: 'tick', internalType: 'int256', type: 'int256' },
    ],
    name: 'PoolTicksNotSorted',
  },
  {
    type: 'error',
    inputs: [
      { name: 'internalReserve', internalType: 'uint256', type: 'uint256' },
      { name: 'tokenBalance', internalType: 'uint256', type: 'uint256' },
      { name: 'token', internalType: 'contract IERC20', type: 'address' },
    ],
    name: 'PoolTokenNotSolvent',
  },
  {
    type: 'error',
    inputs: [
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
      { name: 'bits', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'PoolValueExceedsBits',
  },
  { type: 'error', inputs: [], name: 'PoolZeroLiquidityAdded' },
  {
    type: 'error',
    inputs: [
      { name: 'bits', internalType: 'uint8', type: 'uint8' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'SafeCastOverflowedUintDowncast',
  },
  {
    type: 'error',
    inputs: [{ name: 'tick', internalType: 'int256', type: 'int256' }],
    name: 'TickMaxExceeded',
  },
  {
    type: 'error',
    inputs: [
      { name: 'token', internalType: 'contract IERC20', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'TransferFailed',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'recipient',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'subaccount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'params',
        internalType: 'struct IMaverickV2Pool.AddLiquidityParams',
        type: 'tuple',
        components: [
          { name: 'kind', internalType: 'uint8', type: 'uint8' },
          { name: 'ticks', internalType: 'int32[]', type: 'int32[]' },
          { name: 'amounts', internalType: 'uint128[]', type: 'uint128[]' },
        ],
        indexed: false,
      },
      {
        name: 'tokenAAmount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'tokenBAmount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'binIds',
        internalType: 'uint32[]',
        type: 'uint32[]',
        indexed: false,
      },
    ],
    name: 'PoolAddLiquidity',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'recipient',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'amountA',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'amountB',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'PoolFlashLoan',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      { name: 'binId', internalType: 'uint32', type: 'uint32', indexed: false },
      {
        name: 'maxRecursion',
        internalType: 'uint32',
        type: 'uint32',
        indexed: false,
      },
    ],
    name: 'PoolMigrateBinsUpStack',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'token',
        internalType: 'contract IERC20',
        type: 'address',
        indexed: false,
      },
      {
        name: 'protocolFee',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'PoolProtocolFeeCollected',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'recipient',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'subaccount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'params',
        internalType: 'struct IMaverickV2Pool.RemoveLiquidityParams',
        type: 'tuple',
        components: [
          { name: 'binIds', internalType: 'uint32[]', type: 'uint32[]' },
          { name: 'amounts', internalType: 'uint128[]', type: 'uint128[]' },
        ],
        indexed: false,
      },
      {
        name: 'tokenAOut',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'tokenBOut',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'PoolRemoveLiquidity',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'sqrtPrice',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'PoolSqrtPrice',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'recipient',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'params',
        internalType: 'struct IMaverickV2Pool.SwapParams',
        type: 'tuple',
        components: [
          { name: 'amount', internalType: 'uint256', type: 'uint256' },
          { name: 'tokenAIn', internalType: 'bool', type: 'bool' },
          { name: 'exactOutput', internalType: 'bool', type: 'bool' },
          { name: 'tickLimit', internalType: 'int32', type: 'int32' },
        ],
        indexed: false,
      },
      {
        name: 'amountIn',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'amountOut',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'PoolSwap',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'tick', internalType: 'int32', type: 'int32', indexed: false },
      { name: 'kind', internalType: 'uint8', type: 'uint8', indexed: false },
      { name: 'binId', internalType: 'uint32', type: 'uint32', indexed: false },
    ],
    name: 'PoolTickBinUpdate',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'tick', internalType: 'int32', type: 'int32', indexed: false },
      {
        name: 'reserveA',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'reserveB',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'PoolTickState',
  },
  {
    type: 'function',
    inputs: [],
    name: 'accessor',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'recipient', internalType: 'address', type: 'address' },
      { name: 'subaccount', internalType: 'uint256', type: 'uint256' },
      {
        name: 'params',
        internalType: 'struct IMaverickV2Pool.AddLiquidityParams',
        type: 'tuple',
        components: [
          { name: 'kind', internalType: 'uint8', type: 'uint8' },
          { name: 'ticks', internalType: 'int32[]', type: 'int32[]' },
          { name: 'amounts', internalType: 'uint128[]', type: 'uint128[]' },
        ],
      },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'addLiquidity',
    outputs: [
      { name: 'tokenAAmount', internalType: 'uint256', type: 'uint256' },
      { name: 'tokenBAmount', internalType: 'uint256', type: 'uint256' },
      { name: 'binIds', internalType: 'uint32[]', type: 'uint32[]' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'user', internalType: 'address', type: 'address' },
      { name: 'subaccount', internalType: 'uint256', type: 'uint256' },
      { name: 'binId', internalType: 'uint32', type: 'uint32' },
    ],
    name: 'balanceOf',
    outputs: [{ name: 'lpBalance', internalType: 'uint128', type: 'uint128' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'tick', internalType: 'int32', type: 'int32' },
      { name: 'kind', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'binIdByTickKind',
    outputs: [{ name: 'binId', internalType: 'uint32', type: 'uint32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'isTokenA', internalType: 'bool', type: 'bool' }],
    name: 'distributeFees',
    outputs: [
      { name: 'protocolFee', internalType: 'uint256', type: 'uint256' },
      { name: 'token', internalType: 'contract IERC20', type: 'address' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'factory',
    outputs: [
      {
        name: '',
        internalType: 'contract IMaverickV2Factory',
        type: 'address',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenAIn', internalType: 'bool', type: 'bool' }],
    name: 'fee',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'recipient', internalType: 'address', type: 'address' },
      { name: 'amountA', internalType: 'uint256', type: 'uint256' },
      { name: 'amountB', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'flashLoan',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'binId', internalType: 'uint32', type: 'uint32' }],
    name: 'getBin',
    outputs: [
      {
        name: 'bin',
        internalType: 'struct IMaverickV2Pool.BinState',
        type: 'tuple',
        components: [
          { name: 'mergeBinBalance', internalType: 'uint128', type: 'uint128' },
          { name: 'tickBalance', internalType: 'uint128', type: 'uint128' },
          { name: 'totalSupply', internalType: 'uint128', type: 'uint128' },
          { name: 'kind', internalType: 'uint8', type: 'uint8' },
          { name: 'tick', internalType: 'int32', type: 'int32' },
          { name: 'mergeId', internalType: 'uint32', type: 'uint32' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getCurrentTwa',
    outputs: [{ name: '', internalType: 'int256', type: 'int256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getState',
    outputs: [
      {
        name: '',
        internalType: 'struct IMaverickV2Pool.State',
        type: 'tuple',
        components: [
          { name: 'reserveA', internalType: 'uint128', type: 'uint128' },
          { name: 'reserveB', internalType: 'uint128', type: 'uint128' },
          { name: 'lastTwaD8', internalType: 'int64', type: 'int64' },
          { name: 'lastLogPriceD8', internalType: 'int64', type: 'int64' },
          { name: 'lastTimestamp', internalType: 'uint40', type: 'uint40' },
          { name: 'activeTick', internalType: 'int32', type: 'int32' },
          { name: 'isLocked', internalType: 'bool', type: 'bool' },
          { name: 'binCounter', internalType: 'uint32', type: 'uint32' },
          { name: 'protocolFeeRatioD3', internalType: 'uint8', type: 'uint8' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tick', internalType: 'int32', type: 'int32' }],
    name: 'getTick',
    outputs: [
      {
        name: '_tick',
        internalType: 'struct IMaverickV2Pool.TickState',
        type: 'tuple',
        components: [
          { name: 'reserveA', internalType: 'uint128', type: 'uint128' },
          { name: 'reserveB', internalType: 'uint128', type: 'uint128' },
          { name: 'totalSupply', internalType: 'uint128', type: 'uint128' },
          {
            name: 'binIdsByTick',
            internalType: 'uint32[4]',
            type: 'uint32[4]',
          },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'kinds',
    outputs: [{ name: '_kinds', internalType: 'uint8', type: 'uint8' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'lendingFeeRateD18',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'lookback',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'binId', internalType: 'uint32', type: 'uint32' },
      { name: 'maxRecursion', internalType: 'uint32', type: 'uint32' },
    ],
    name: 'migrateBinUpStack',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'protocolFeeA',
    outputs: [{ name: '', internalType: 'uint128', type: 'uint128' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'protocolFeeB',
    outputs: [{ name: '', internalType: 'uint128', type: 'uint128' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'recipient', internalType: 'address', type: 'address' },
      { name: 'subaccount', internalType: 'uint256', type: 'uint256' },
      {
        name: 'params',
        internalType: 'struct IMaverickV2Pool.RemoveLiquidityParams',
        type: 'tuple',
        components: [
          { name: 'binIds', internalType: 'uint32[]', type: 'uint32[]' },
          { name: 'amounts', internalType: 'uint128[]', type: 'uint128[]' },
        ],
      },
    ],
    name: 'removeLiquidity',
    outputs: [
      { name: 'tokenAOut', internalType: 'uint256', type: 'uint256' },
      { name: 'tokenBOut', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'recipient', internalType: 'address', type: 'address' },
      {
        name: 'params',
        internalType: 'struct IMaverickV2Pool.SwapParams',
        type: 'tuple',
        components: [
          { name: 'amount', internalType: 'uint256', type: 'uint256' },
          { name: 'tokenAIn', internalType: 'bool', type: 'bool' },
          { name: 'exactOutput', internalType: 'bool', type: 'bool' },
          { name: 'tickLimit', internalType: 'int32', type: 'int32' },
        ],
      },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'swap',
    outputs: [
      { name: 'amountIn', internalType: 'uint256', type: 'uint256' },
      { name: 'amountOut', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'tickSpacing',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'tokenA',
    outputs: [{ name: '', internalType: 'contract IERC20', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'tokenAScale',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'tokenB',
    outputs: [{ name: '', internalType: 'contract IERC20', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'tokenBScale',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// MaverickV2PoolLens
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const maverickV2PoolLensAbi = [
  {
    type: 'error',
    inputs: [
      { name: 'targetSqrtPrice', internalType: 'uint256', type: 'uint256' },
      { name: 'sqrtLowerTickPrice', internalType: 'uint256', type: 'uint256' },
      { name: 'sqrtUpperTickPrice', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'LensTargetPriceOutOfBounds',
  },
  {
    type: 'error',
    inputs: [
      { name: 'targetIsA', internalType: 'bool', type: 'bool' },
      { name: 'deltaA', internalType: 'uint256', type: 'uint256' },
      { name: 'deltaB', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'LensTargetingTokenWithNoDelta',
  },
  {
    type: 'error',
    inputs: [
      {
        name: 'relativeLiquidityAmount',
        internalType: 'uint256',
        type: 'uint256',
      },
      { name: 'deltaA', internalType: 'uint256', type: 'uint256' },
      { name: 'deltaB', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'LensTooLittleLiquidity',
  },
  {
    type: 'error',
    inputs: [],
    name: 'LiquidityUtilitiesFailedToFindDeltaAmounts',
  },
  {
    type: 'error',
    inputs: [
      { name: 'initialTargetB', internalType: 'uint256', type: 'uint256' },
      { name: 'deltaLpBalance', internalType: 'uint256', type: 'uint256' },
      {
        name: 'minimumRequiredLpBalance',
        internalType: 'uint256',
        type: 'uint256',
      },
    ],
    name: 'LiquidityUtilitiesInitialTargetBTooSmall',
  },
  { type: 'error', inputs: [], name: 'LiquidityUtilitiesNoSwapLiquidity' },
  {
    type: 'error',
    inputs: [
      { name: 'targetSqrtPrice', internalType: 'uint256', type: 'uint256' },
      { name: 'sqrtLowerTickPrice', internalType: 'uint256', type: 'uint256' },
      { name: 'sqrtUpperTickPrice', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'LiquidityUtilitiesTargetPriceOutOfBounds',
  },
  { type: 'error', inputs: [], name: 'MathOverflowedMulDiv' },
  {
    type: 'error',
    inputs: [
      { name: 'bits', internalType: 'uint8', type: 'uint8' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'SafeCastOverflowedUintDowncast',
  },
  {
    type: 'error',
    inputs: [{ name: 'tick', internalType: 'int256', type: 'int256' }],
    name: 'TickMaxExceeded',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'params',
        internalType: 'struct IMaverickV2PoolLens.AddParamsViewInputs',
        type: 'tuple',
        components: [
          {
            name: 'pool',
            internalType: 'contract IMaverickV2Pool',
            type: 'address',
          },
          { name: 'kind', internalType: 'uint8', type: 'uint8' },
          { name: 'ticks', internalType: 'int32[]', type: 'int32[]' },
          {
            name: 'relativeLiquidityAmounts',
            internalType: 'uint128[]',
            type: 'uint128[]',
          },
          {
            name: 'addSpec',
            internalType: 'struct IMaverickV2PoolLens.AddParamsSpecification',
            type: 'tuple',
            components: [
              {
                name: 'slippageFactorD18',
                internalType: 'uint256',
                type: 'uint256',
              },
              {
                name: 'numberOfPriceBreaksPerSide',
                internalType: 'uint256',
                type: 'uint256',
              },
              {
                name: 'targetAmount',
                internalType: 'uint256',
                type: 'uint256',
              },
              { name: 'targetIsA', internalType: 'bool', type: 'bool' },
            ],
          },
        ],
      },
    ],
    name: 'getAddLiquidityParams',
    outputs: [
      { name: 'packedSqrtPriceBreaks', internalType: 'bytes', type: 'bytes' },
      { name: 'packedArgs', internalType: 'bytes[]', type: 'bytes[]' },
      { name: 'sqrtPriceBreaks', internalType: 'uint88[]', type: 'uint88[]' },
      {
        name: 'addParams',
        internalType: 'struct IMaverickV2Pool.AddLiquidityParams[]',
        type: 'tuple[]',
        components: [
          { name: 'kind', internalType: 'uint8', type: 'uint8' },
          { name: 'ticks', internalType: 'int32[]', type: 'int32[]' },
          { name: 'amounts', internalType: 'uint128[]', type: 'uint128[]' },
        ],
      },
      {
        name: 'tickDeltas',
        internalType: 'struct IMaverickV2PoolLens.TickDeltas[]',
        type: 'tuple[]',
        components: [
          { name: 'deltaAOut', internalType: 'uint256', type: 'uint256' },
          { name: 'deltaBOut', internalType: 'uint256', type: 'uint256' },
          { name: 'deltaAs', internalType: 'uint256[]', type: 'uint256[]' },
          { name: 'deltaBs', internalType: 'uint256[]', type: 'uint256[]' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'params',
        internalType: 'struct IMaverickV2PoolLens.CreateAndAddParamsViewInputs',
        type: 'tuple',
        components: [
          { name: 'feeAIn', internalType: 'uint64', type: 'uint64' },
          { name: 'feeBIn', internalType: 'uint64', type: 'uint64' },
          { name: 'tickSpacing', internalType: 'uint16', type: 'uint16' },
          { name: 'lookback', internalType: 'uint32', type: 'uint32' },
          { name: 'tokenA', internalType: 'contract IERC20', type: 'address' },
          { name: 'tokenB', internalType: 'contract IERC20', type: 'address' },
          { name: 'activeTick', internalType: 'int32', type: 'int32' },
          { name: 'kinds', internalType: 'uint8', type: 'uint8' },
          { name: 'initialTargetB', internalType: 'uint256', type: 'uint256' },
          { name: 'sqrtPrice', internalType: 'uint256', type: 'uint256' },
          { name: 'kind', internalType: 'uint8', type: 'uint8' },
          { name: 'ticks', internalType: 'int32[]', type: 'int32[]' },
          {
            name: 'relativeLiquidityAmounts',
            internalType: 'uint128[]',
            type: 'uint128[]',
          },
          { name: 'targetAmount', internalType: 'uint256', type: 'uint256' },
          { name: 'targetIsA', internalType: 'bool', type: 'bool' },
        ],
      },
    ],
    name: 'getCreatePoolAtPriceAndAddLiquidityParams',
    outputs: [
      {
        name: 'output',
        internalType: 'struct IMaverickV2PoolLens.CreateAndAddParamsInputs',
        type: 'tuple',
        components: [
          { name: 'feeAIn', internalType: 'uint64', type: 'uint64' },
          { name: 'feeBIn', internalType: 'uint64', type: 'uint64' },
          { name: 'tickSpacing', internalType: 'uint16', type: 'uint16' },
          { name: 'lookback', internalType: 'uint32', type: 'uint32' },
          { name: 'tokenA', internalType: 'contract IERC20', type: 'address' },
          { name: 'tokenB', internalType: 'contract IERC20', type: 'address' },
          { name: 'activeTick', internalType: 'int32', type: 'int32' },
          { name: 'kinds', internalType: 'uint8', type: 'uint8' },
          {
            name: 'donateParams',
            internalType: 'struct IMaverickV2Pool.AddLiquidityParams',
            type: 'tuple',
            components: [
              { name: 'kind', internalType: 'uint8', type: 'uint8' },
              { name: 'ticks', internalType: 'int32[]', type: 'int32[]' },
              { name: 'amounts', internalType: 'uint128[]', type: 'uint128[]' },
            ],
          },
          { name: 'swapAmount', internalType: 'uint256', type: 'uint256' },
          {
            name: 'addParams',
            internalType: 'struct IMaverickV2Pool.AddLiquidityParams',
            type: 'tuple',
            components: [
              { name: 'kind', internalType: 'uint8', type: 'uint8' },
              { name: 'ticks', internalType: 'int32[]', type: 'int32[]' },
              { name: 'amounts', internalType: 'uint128[]', type: 'uint128[]' },
            ],
          },
          { name: 'packedAddParams', internalType: 'bytes[]', type: 'bytes[]' },
          { name: 'deltaAOut', internalType: 'uint256', type: 'uint256' },
          { name: 'deltaBOut', internalType: 'uint256', type: 'uint256' },
          { name: 'preAddReserveA', internalType: 'uint256', type: 'uint256' },
          { name: 'preAddReserveB', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
      { name: 'binStart', internalType: 'uint32', type: 'uint32' },
      { name: 'binEnd', internalType: 'uint32', type: 'uint32' },
    ],
    name: 'getFullPoolState',
    outputs: [
      {
        name: 'poolState',
        internalType: 'struct IMaverickV2PoolLens.PoolState',
        type: 'tuple',
        components: [
          {
            name: 'tickStateMapping',
            internalType: 'struct IMaverickV2Pool.TickState[]',
            type: 'tuple[]',
            components: [
              { name: 'reserveA', internalType: 'uint128', type: 'uint128' },
              { name: 'reserveB', internalType: 'uint128', type: 'uint128' },
              { name: 'totalSupply', internalType: 'uint128', type: 'uint128' },
              {
                name: 'binIdsByTick',
                internalType: 'uint32[4]',
                type: 'uint32[4]',
              },
            ],
          },
          {
            name: 'binStateMapping',
            internalType: 'struct IMaverickV2Pool.BinState[]',
            type: 'tuple[]',
            components: [
              {
                name: 'mergeBinBalance',
                internalType: 'uint128',
                type: 'uint128',
              },
              { name: 'tickBalance', internalType: 'uint128', type: 'uint128' },
              { name: 'totalSupply', internalType: 'uint128', type: 'uint128' },
              { name: 'kind', internalType: 'uint8', type: 'uint8' },
              { name: 'tick', internalType: 'int32', type: 'int32' },
              { name: 'mergeId', internalType: 'uint32', type: 'uint32' },
            ],
          },
          {
            name: 'binIdByTickKindMapping',
            internalType: 'struct IMaverickV2PoolLens.BinPositionKinds[]',
            type: 'tuple[]',
            components: [
              {
                name: 'values',
                internalType: 'uint128[4]',
                type: 'uint128[4]',
              },
            ],
          },
          {
            name: 'state',
            internalType: 'struct IMaverickV2Pool.State',
            type: 'tuple',
            components: [
              { name: 'reserveA', internalType: 'uint128', type: 'uint128' },
              { name: 'reserveB', internalType: 'uint128', type: 'uint128' },
              { name: 'lastTwaD8', internalType: 'int64', type: 'int64' },
              { name: 'lastLogPriceD8', internalType: 'int64', type: 'int64' },
              { name: 'lastTimestamp', internalType: 'uint40', type: 'uint40' },
              { name: 'activeTick', internalType: 'int32', type: 'int32' },
              { name: 'isLocked', internalType: 'bool', type: 'bool' },
              { name: 'binCounter', internalType: 'uint32', type: 'uint32' },
              {
                name: 'protocolFeeRatioD3',
                internalType: 'uint8',
                type: 'uint8',
              },
            ],
          },
          {
            name: 'protocolFees',
            internalType: 'struct IMaverickV2PoolLens.Reserves',
            type: 'tuple',
            components: [
              { name: 'amountA', internalType: 'uint256', type: 'uint256' },
              { name: 'amountB', internalType: 'uint256', type: 'uint256' },
            ],
          },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
    ],
    name: 'getPoolPrice',
    outputs: [{ name: 'price', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
    ],
    name: 'getPoolSqrtPrice',
    outputs: [{ name: 'sqrtPrice', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
      { name: 'tick', internalType: 'int32', type: 'int32' },
    ],
    name: 'getTickSqrtPriceAndL',
    outputs: [
      { name: 'sqrtPrice', internalType: 'uint256', type: 'uint256' },
      { name: 'liquidity', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
      { name: 'tickStart', internalType: 'int32', type: 'int32' },
      { name: 'tickEnd', internalType: 'int32', type: 'int32' },
    ],
    name: 'getTicks',
    outputs: [
      { name: 'ticks', internalType: 'int32[]', type: 'int32[]' },
      {
        name: 'tickStates',
        internalType: 'struct IMaverickV2Pool.TickState[]',
        type: 'tuple[]',
        components: [
          { name: 'reserveA', internalType: 'uint128', type: 'uint128' },
          { name: 'reserveB', internalType: 'uint128', type: 'uint128' },
          { name: 'totalSupply', internalType: 'uint128', type: 'uint128' },
          {
            name: 'binIdsByTick',
            internalType: 'uint32[4]',
            type: 'uint32[4]',
          },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
      { name: 'tickRadius', internalType: 'int32', type: 'int32' },
    ],
    name: 'getTicksAroundActive',
    outputs: [
      { name: 'ticks', internalType: 'int32[]', type: 'int32[]' },
      {
        name: 'tickStates',
        internalType: 'struct IMaverickV2Pool.TickState[]',
        type: 'tuple[]',
        components: [
          { name: 'reserveA', internalType: 'uint128', type: 'uint128' },
          { name: 'reserveB', internalType: 'uint128', type: 'uint128' },
          { name: 'totalSupply', internalType: 'uint128', type: 'uint128' },
          {
            name: 'binIdsByTick',
            internalType: 'uint32[4]',
            type: 'uint32[4]',
          },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
      { name: 'tickRadius', internalType: 'int32', type: 'int32' },
    ],
    name: 'getTicksAroundActiveWLiquidity',
    outputs: [
      { name: 'ticks', internalType: 'int32[]', type: 'int32[]' },
      {
        name: 'tickStates',
        internalType: 'struct IMaverickV2Pool.TickState[]',
        type: 'tuple[]',
        components: [
          { name: 'reserveA', internalType: 'uint128', type: 'uint128' },
          { name: 'reserveB', internalType: 'uint128', type: 'uint128' },
          { name: 'totalSupply', internalType: 'uint128', type: 'uint128' },
          {
            name: 'binIdsByTick',
            internalType: 'uint32[4]',
            type: 'uint32[4]',
          },
        ],
      },
      { name: 'liquidities', internalType: 'uint256[]', type: 'uint256[]' },
      {
        name: 'sqrtLowerTickPrices',
        internalType: 'uint256[]',
        type: 'uint256[]',
      },
      {
        name: 'sqrtUpperTickPrices',
        internalType: 'uint256[]',
        type: 'uint256[]',
      },
      {
        name: 'poolState',
        internalType: 'struct IMaverickV2Pool.State',
        type: 'tuple',
        components: [
          { name: 'reserveA', internalType: 'uint128', type: 'uint128' },
          { name: 'reserveB', internalType: 'uint128', type: 'uint128' },
          { name: 'lastTwaD8', internalType: 'int64', type: 'int64' },
          { name: 'lastLogPriceD8', internalType: 'int64', type: 'int64' },
          { name: 'lastTimestamp', internalType: 'uint40', type: 'uint40' },
          { name: 'activeTick', internalType: 'int32', type: 'int32' },
          { name: 'isLocked', internalType: 'bool', type: 'bool' },
          { name: 'binCounter', internalType: 'uint32', type: 'uint32' },
          { name: 'protocolFeeRatioD3', internalType: 'uint8', type: 'uint8' },
        ],
      },
      { name: 'sqrtPrice', internalType: 'uint256', type: 'uint256' },
      { name: 'feeAIn', internalType: 'uint256', type: 'uint256' },
      { name: 'feeBIn', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
    ],
    name: 'tokenScales',
    outputs: [
      { name: 'tokenAScale', internalType: 'uint256', type: 'uint256' },
      { name: 'tokenBScale', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// MaverickV2Position
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const maverickV2PositionAbi = [
  {
    type: 'constructor',
    inputs: [
      {
        name: '_factory',
        internalType: 'contract IMaverickV2Factory',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'error',
    inputs: [{ name: 'target', internalType: 'address', type: 'address' }],
    name: 'AddressEmptyCode',
  },
  {
    type: 'error',
    inputs: [
      { name: 'index', internalType: 'uint256', type: 'uint256' },
      { name: 'duplicateEntry', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ArrayElementsNotUnique',
  },
  { type: 'error', inputs: [], name: 'ERC721EnumerableForbiddenBatchMint' },
  {
    type: 'error',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'owner', internalType: 'address', type: 'address' },
    ],
    name: 'ERC721IncorrectOwner',
  },
  {
    type: 'error',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC721InsufficientApproval',
  },
  {
    type: 'error',
    inputs: [{ name: 'approver', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidApprover',
  },
  {
    type: 'error',
    inputs: [{ name: 'operator', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidOperator',
  },
  {
    type: 'error',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidOwner',
  },
  {
    type: 'error',
    inputs: [{ name: 'receiver', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidReceiver',
  },
  {
    type: 'error',
    inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidSender',
  },
  {
    type: 'error',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ERC721NonexistentToken',
  },
  {
    type: 'error',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'index', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC721OutOfBoundsIndex',
  },
  { type: 'error', inputs: [], name: 'FailedInnerCall' },
  { type: 'error', inputs: [], name: 'MathOverflowedMulDiv' },
  {
    type: 'error',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'OwnableUnauthorizedAccount',
  },
  {
    type: 'error',
    inputs: [
      { name: 'deadline', internalType: 'uint256', type: 'uint256' },
      { name: 'blockTimestamp', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'PositionDeadlinePassed',
  },
  {
    type: 'error',
    inputs: [
      { name: 'index', internalType: 'uint256', type: 'uint256' },
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
    ],
    name: 'PositionDuplicatePool',
  },
  {
    type: 'error',
    inputs: [
      { name: 'sqrtPrice', internalType: 'uint256', type: 'uint256' },
      { name: 'minSqrtPrice', internalType: 'uint256', type: 'uint256' },
      { name: 'maxSqrtPrice', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'PositionExceededPriceBounds',
  },
  { type: 'error', inputs: [], name: 'PositionNotFactoryPool' },
  { type: 'error', inputs: [], name: 'PositionPermissionedLiquidityPool' },
  {
    type: 'error',
    inputs: [
      { name: 'bits', internalType: 'uint8', type: 'uint8' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'SafeCastOverflowedUintDowncast',
  },
  {
    type: 'error',
    inputs: [{ name: 'tick', internalType: 'int256', type: 'int256' }],
    name: 'TickMaxExceeded',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'approved',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'approved', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'ApprovalForAll',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'PositionClearData',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'index',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'newData',
        internalType: 'struct IMaverickV2Position.PositionPoolBinIds',
        type: 'tuple',
        components: [
          {
            name: 'pool',
            internalType: 'contract IMaverickV2Pool',
            type: 'address',
          },
          { name: 'binIds', internalType: 'uint32[]', type: 'uint32[]' },
        ],
        indexed: false,
      },
    ],
    name: 'PositionSetData',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'lpReward',
        internalType: 'contract ILiquidityRegistry',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'SetLpReward',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'positionImage',
        internalType: 'contract IPositionImage',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'SetPositionImage',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Transfer',
  },
  {
    type: 'function',
    inputs: [
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
      { name: 'binIds', internalType: 'uint32[]', type: 'uint32[]' },
    ],
    name: 'appendTokenIdData',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'checkAuthorized',
    outputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'deadline', internalType: 'uint256', type: 'uint256' }],
    name: 'checkDeadline',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
      { name: 'minSqrtPrice', internalType: 'uint256', type: 'uint256' },
      { name: 'maxSqrtPrice', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'checkSqrtPrice',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
      { name: 'binIds', internalType: 'uint32[]', type: 'uint32[]' },
    ],
    name: 'checkpointBinLpBalance',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'factory',
    outputs: [
      {
        name: '',
        internalType: 'contract IMaverickV2Factory',
        type: 'address',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'getApproved',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'index', internalType: 'uint256', type: 'uint256' },
      { name: 'proportionD18', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'getRemoveParams',
    outputs: [
      {
        name: 'params',
        internalType: 'struct IMaverickV2Pool.RemoveLiquidityParams',
        type: 'tuple',
        components: [
          { name: 'binIds', internalType: 'uint32[]', type: 'uint32[]' },
          { name: 'amounts', internalType: 'uint128[]', type: 'uint128[]' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'getTokenIdData',
    outputs: [
      {
        name: '',
        internalType: 'struct IMaverickV2Position.PositionPoolBinIds[]',
        type: 'tuple[]',
        components: [
          {
            name: 'pool',
            internalType: 'contract IMaverickV2Pool',
            type: 'address',
          },
          { name: 'binIds', internalType: 'uint32[]', type: 'uint32[]' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'index', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'getTokenIdData',
    outputs: [
      {
        name: '',
        internalType: 'struct IMaverickV2Position.PositionPoolBinIds',
        type: 'tuple',
        components: [
          {
            name: 'pool',
            internalType: 'contract IMaverickV2Pool',
            type: 'address',
          },
          { name: 'binIds', internalType: 'uint32[]', type: 'uint32[]' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'operator', internalType: 'address', type: 'address' },
    ],
    name: 'isApprovedForAll',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'lpReward',
    outputs: [
      {
        name: '',
        internalType: 'contract ILiquidityRegistry',
        type: 'address',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
      { name: 'binIds', internalType: 'uint32[]', type: 'uint32[]' },
      { name: 'maxRecursion', internalType: 'uint32', type: 'uint32' },
    ],
    name: 'migrateBinsUpStack',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'recipient', internalType: 'address', type: 'address' },
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
      { name: 'binIds', internalType: 'uint32[]', type: 'uint32[]' },
    ],
    name: 'mint',
    outputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'data', internalType: 'bytes[]', type: 'bytes[]' }],
    name: 'multicall',
    outputs: [{ name: 'results', internalType: 'bytes[]', type: 'bytes[]' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'nextTokenId',
    outputs: [
      { name: 'nextTokenId_', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ownerOf',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'positionImage',
    outputs: [
      { name: '', internalType: 'contract IPositionImage', type: 'address' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'recipient', internalType: 'address', type: 'address' },
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
      {
        name: 'params',
        internalType: 'struct IMaverickV2Pool.RemoveLiquidityParams',
        type: 'tuple',
        components: [
          { name: 'binIds', internalType: 'uint32[]', type: 'uint32[]' },
          { name: 'amounts', internalType: 'uint128[]', type: 'uint128[]' },
        ],
      },
    ],
    name: 'removeLiquidity',
    outputs: [
      { name: 'tokenAAmount', internalType: 'uint256', type: 'uint256' },
      { name: 'tokenBAmount', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
      {
        name: 'params',
        internalType: 'struct IMaverickV2Pool.RemoveLiquidityParams',
        type: 'tuple',
        components: [
          { name: 'binIds', internalType: 'uint32[]', type: 'uint32[]' },
          { name: 'amounts', internalType: 'uint128[]', type: 'uint128[]' },
        ],
      },
    ],
    name: 'removeLiquidityToSender',
    outputs: [
      { name: 'tokenAAmount', internalType: 'uint256', type: 'uint256' },
      { name: 'tokenBAmount', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'approved', internalType: 'bool', type: 'bool' },
    ],
    name: 'setApprovalForAll',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: '_lpReward',
        internalType: 'contract ILiquidityRegistry',
        type: 'address',
      },
    ],
    name: 'setLpReward',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: '_positionImage',
        internalType: 'contract IPositionImage',
        type: 'address',
      },
    ],
    name: 'setPositionImage',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'index', internalType: 'uint256', type: 'uint256' },
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
      { name: 'binIds', internalType: 'uint32[]', type: 'uint32[]' },
    ],
    name: 'setTokenIdData',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      {
        name: 'data',
        internalType: 'struct IMaverickV2Position.PositionPoolBinIds[]',
        type: 'tuple[]',
        components: [
          {
            name: 'pool',
            internalType: 'contract IMaverickV2Pool',
            type: 'address',
          },
          { name: 'binIds', internalType: 'uint32[]', type: 'uint32[]' },
        ],
      },
    ],
    name: 'setTokenIdData',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'index', internalType: 'uint256', type: 'uint256' }],
    name: 'tokenByIndex',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'tokenIdDataLength',
    outputs: [{ name: 'length', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'startIndex', internalType: 'uint256', type: 'uint256' },
      { name: 'stopIndex', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'tokenIdPositionInformation',
    outputs: [
      {
        name: 'output',
        internalType: 'struct IMaverickV2Position.PositionFullInformation[]',
        type: 'tuple[]',
        components: [
          {
            name: 'poolBinIds',
            internalType: 'struct IMaverickV2Position.PositionPoolBinIds',
            type: 'tuple',
            components: [
              {
                name: 'pool',
                internalType: 'contract IMaverickV2Pool',
                type: 'address',
              },
              { name: 'binIds', internalType: 'uint32[]', type: 'uint32[]' },
            ],
          },
          { name: 'amountA', internalType: 'uint256', type: 'uint256' },
          { name: 'amountB', internalType: 'uint256', type: 'uint256' },
          { name: 'binAAmounts', internalType: 'uint256[]', type: 'uint256[]' },
          { name: 'binBAmounts', internalType: 'uint256[]', type: 'uint256[]' },
          { name: 'ticks', internalType: 'int32[]', type: 'int32[]' },
          { name: 'liquidities', internalType: 'uint256[]', type: 'uint256[]' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'index', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'tokenIdPositionInformation',
    outputs: [
      {
        name: 'output',
        internalType: 'struct IMaverickV2Position.PositionFullInformation',
        type: 'tuple',
        components: [
          {
            name: 'poolBinIds',
            internalType: 'struct IMaverickV2Position.PositionPoolBinIds',
            type: 'tuple',
            components: [
              {
                name: 'pool',
                internalType: 'contract IMaverickV2Pool',
                type: 'address',
              },
              { name: 'binIds', internalType: 'uint32[]', type: 'uint32[]' },
            ],
          },
          { name: 'amountA', internalType: 'uint256', type: 'uint256' },
          { name: 'amountB', internalType: 'uint256', type: 'uint256' },
          { name: 'binAAmounts', internalType: 'uint256[]', type: 'uint256[]' },
          { name: 'binBAmounts', internalType: 'uint256[]', type: 'uint256[]' },
          { name: 'ticks', internalType: 'int32[]', type: 'int32[]' },
          { name: 'liquidities', internalType: 'uint256[]', type: 'uint256[]' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'tokenIdsOfOwner',
    outputs: [
      { name: 'tokenIds', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'index', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'tokenOfOwnerByIndex',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'ownerToCheck', internalType: 'address', type: 'address' },
      { name: 'index', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'tokenOfOwnerByIndexExists',
    outputs: [{ name: 'exists', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'tokenURI',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// MaverickV2Quoter
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const maverickV2QuoterAbi = [
  { type: 'error', inputs: [], name: 'BytesLibSliceOutOfBounds' },
  { type: 'error', inputs: [], name: 'BytesLibSliceOverflow' },
  { type: 'error', inputs: [], name: 'BytesLibToAddressOutOfBounds' },
  { type: 'error', inputs: [], name: 'BytesLibToBoolOutOfBounds' },
  { type: 'error', inputs: [], name: 'MathOverflowedMulDiv' },
  { type: 'error', inputs: [], name: 'QuoterInvalidAddLiquidity' },
  { type: 'error', inputs: [], name: 'QuoterInvalidSwap' },
  {
    type: 'error',
    inputs: [
      { name: 'bits', internalType: 'uint8', type: 'uint8' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'SafeCastOverflowedUintDowncast',
  },
  {
    type: 'error',
    inputs: [{ name: 'tick', internalType: 'int256', type: 'int256' }],
    name: 'TickMaxExceeded',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
      {
        name: 'params',
        internalType: 'struct IMaverickV2Pool.AddLiquidityParams',
        type: 'tuple',
        components: [
          { name: 'kind', internalType: 'uint8', type: 'uint8' },
          { name: 'ticks', internalType: 'int32[]', type: 'int32[]' },
          { name: 'amounts', internalType: 'uint128[]', type: 'uint128[]' },
        ],
      },
    ],
    name: 'calculateAddLiquidity',
    outputs: [
      { name: 'amountA', internalType: 'uint256', type: 'uint256' },
      { name: 'amountB', internalType: 'uint256', type: 'uint256' },
      { name: 'gasEstimate', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'path', internalType: 'bytes', type: 'bytes' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
      { name: 'exactOutput', internalType: 'bool', type: 'bool' },
    ],
    name: 'calculateMultiHopSwap',
    outputs: [
      { name: 'returnAmount', internalType: 'uint256', type: 'uint256' },
      { name: 'gasEstimate', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
      { name: 'amount', internalType: 'uint128', type: 'uint128' },
      { name: 'tokenAIn', internalType: 'bool', type: 'bool' },
      { name: 'exactOutput', internalType: 'bool', type: 'bool' },
      { name: 'tickLimit', internalType: 'int32', type: 'int32' },
    ],
    name: 'calculateSwap',
    outputs: [
      { name: 'amountIn', internalType: 'uint256', type: 'uint256' },
      { name: 'amountOut', internalType: 'uint256', type: 'uint256' },
      { name: 'gasEstimate', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '', internalType: 'contract IERC20', type: 'address' },
      { name: '', internalType: 'contract IERC20', type: 'address' },
      { name: 'amountA', internalType: 'uint256', type: 'uint256' },
      { name: 'amountB', internalType: 'uint256', type: 'uint256' },
      { name: '', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'maverickV2AddLiquidityCallback',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: '', internalType: 'contract IERC20', type: 'address' },
      { name: 'amountIn', internalType: 'uint256', type: 'uint256' },
      { name: 'amountOut', internalType: 'uint256', type: 'uint256' },
      { name: '', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'maverickV2SwapCallback',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
    ],
    name: 'poolSqrtPrice',
    outputs: [{ name: 'sqrtPrice', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// MaverickV2Router
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const maverickV2RouterAbi = [
  {
    type: 'constructor',
    inputs: [
      {
        name: '_factory',
        internalType: 'contract IMaverickV2Factory',
        type: 'address',
      },
      { name: '_weth', internalType: 'contract IWETH9', type: 'address' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'error',
    inputs: [{ name: 'target', internalType: 'address', type: 'address' }],
    name: 'AddressEmptyCode',
  },
  {
    type: 'error',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'AddressInsufficientBalance',
  },
  {
    type: 'error',
    inputs: [
      { name: 'inputLength', internalType: 'uint256', type: 'uint256' },
      { name: 'expectedLength', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'BytesLibInvalidLength',
  },
  { type: 'error', inputs: [], name: 'BytesLibSliceOutOfBounds' },
  { type: 'error', inputs: [], name: 'BytesLibSliceOverflow' },
  { type: 'error', inputs: [], name: 'BytesLibToAddressOutOfBounds' },
  { type: 'error', inputs: [], name: 'BytesLibToBoolOutOfBounds' },
  { type: 'error', inputs: [], name: 'FailedInnerCall' },
  { type: 'error', inputs: [], name: 'MathOverflowedMulDiv' },
  {
    type: 'error',
    inputs: [
      { name: 'token', internalType: 'address', type: 'address' },
      { name: 'amountMinimum', internalType: 'uint256', type: 'uint256' },
      { name: 'contractBalance', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'PaymentInsufficientBalance',
  },
  { type: 'error', inputs: [], name: 'PaymentSenderNotWETH9' },
  {
    type: 'error',
    inputs: [
      { name: 'deadline', internalType: 'uint256', type: 'uint256' },
      { name: 'blockTimestamp', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'PositionDeadlinePassed',
  },
  {
    type: 'error',
    inputs: [
      { name: 'sqrtPrice', internalType: 'uint256', type: 'uint256' },
      { name: 'minSqrtPrice', internalType: 'uint256', type: 'uint256' },
      { name: 'maxSqrtPrice', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'PositionExceededPriceBounds',
  },
  { type: 'error', inputs: [], name: 'RouterNotFactoryPool' },
  {
    type: 'error',
    inputs: [
      { name: 'amountOutMinimum', internalType: 'uint256', type: 'uint256' },
      { name: 'amountOut', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'RouterTooLittleReceived',
  },
  {
    type: 'error',
    inputs: [
      { name: 'amountInMaximum', internalType: 'uint256', type: 'uint256' },
      { name: 'amountIn', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'RouterTooMuchRequested',
  },
  { type: 'error', inputs: [], name: 'RouterZeroSwap' },
  {
    type: 'error',
    inputs: [{ name: 'tick', internalType: 'int256', type: 'int256' }],
    name: 'TickMaxExceeded',
  },
  {
    type: 'error',
    inputs: [
      { name: 'token', internalType: 'contract IERC20', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'TransferFailed',
  },
  {
    type: 'error',
    inputs: [
      { name: 'token', internalType: 'contract IERC20', type: 'address' },
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'TransferFromFailed',
  },
  {
    type: 'function',
    inputs: [{ name: 'deadline', internalType: 'uint256', type: 'uint256' }],
    name: 'checkDeadline',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
      { name: 'minSqrtPrice', internalType: 'uint256', type: 'uint256' },
      { name: 'maxSqrtPrice', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'checkSqrtPrice',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'recipient', internalType: 'address', type: 'address' },
      { name: 'path', internalType: 'bytes', type: 'bytes' },
      { name: 'amountIn', internalType: 'uint256', type: 'uint256' },
      { name: 'amountOutMinimum', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'exactInputMultiHop',
    outputs: [{ name: 'amountOut', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'recipient', internalType: 'address', type: 'address' },
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
      { name: 'tokenAIn', internalType: 'bool', type: 'bool' },
      { name: 'amountIn', internalType: 'uint256', type: 'uint256' },
      { name: 'amountOutMinimum', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'exactInputSingle',
    outputs: [{ name: 'amountOut', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [{ name: 'argsPacked', internalType: 'bytes', type: 'bytes' }],
    name: 'exactInputSinglePackedArgs',
    outputs: [{ name: 'amountOut', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'recipient', internalType: 'address', type: 'address' },
      { name: 'path', internalType: 'bytes', type: 'bytes' },
      { name: 'amountOut', internalType: 'uint256', type: 'uint256' },
      { name: 'amountInMaximum', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'exactOutputMultiHop',
    outputs: [{ name: 'amountIn', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'recipient', internalType: 'address', type: 'address' },
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
      { name: 'tokenAIn', internalType: 'bool', type: 'bool' },
      { name: 'amountOut', internalType: 'uint256', type: 'uint256' },
      { name: 'amountInMaximum', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'exactOutputSingle',
    outputs: [
      { name: 'amountIn', internalType: 'uint256', type: 'uint256' },
      { name: 'amountOut_', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'recipient', internalType: 'address', type: 'address' },
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
      { name: 'tokenAIn', internalType: 'bool', type: 'bool' },
      { name: 'amountOut', internalType: 'uint256', type: 'uint256' },
      { name: 'tickLimit', internalType: 'int32', type: 'int32' },
    ],
    name: 'exactOutputSingleMinimal',
    outputs: [
      { name: 'amountIn', internalType: 'uint256', type: 'uint256' },
      { name: 'amountOut_', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'factory',
    outputs: [
      {
        name: 'factory_',
        internalType: 'contract IMaverickV2Factory',
        type: 'address',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'recipient', internalType: 'address', type: 'address' },
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
      { name: 'tokenAIn', internalType: 'bool', type: 'bool' },
      { name: 'amountIn', internalType: 'uint256', type: 'uint256' },
      { name: 'tickLimit', internalType: 'int32', type: 'int32' },
      { name: 'amountOutMinimum', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'inputSingleWithTickLimit',
    outputs: [
      { name: 'amountIn_', internalType: 'uint256', type: 'uint256' },
      { name: 'amountOut', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'tokenIn', internalType: 'contract IERC20', type: 'address' },
      { name: 'amountToPay', internalType: 'uint256', type: 'uint256' },
      { name: '', internalType: 'uint256', type: 'uint256' },
      { name: '_data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'maverickV2SwapCallback',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'data', internalType: 'bytes[]', type: 'bytes[]' }],
    name: 'multicall',
    outputs: [{ name: 'results', internalType: 'bytes[]', type: 'bytes[]' }],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'recipient', internalType: 'address', type: 'address' },
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
      { name: 'tokenAIn', internalType: 'bool', type: 'bool' },
      { name: 'amountOut', internalType: 'uint256', type: 'uint256' },
      { name: 'tickLimit', internalType: 'int32', type: 'int32' },
      { name: 'amountInMaximum', internalType: 'uint256', type: 'uint256' },
      { name: 'amountOutMinimum', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'outputSingleWithTickLimit',
    outputs: [
      { name: 'amountIn_', internalType: 'uint256', type: 'uint256' },
      { name: 'amountOut_', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'refundETH',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'token', internalType: 'contract IERC20', type: 'address' },
      { name: 'amountMinimum', internalType: 'uint256', type: 'uint256' },
      { name: 'recipient', internalType: 'address', type: 'address' },
    ],
    name: 'sweepToken',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'token', internalType: 'contract IERC20', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
      { name: 'recipient', internalType: 'address', type: 'address' },
    ],
    name: 'sweepTokenAmount',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'tokenA', internalType: 'contract IERC20', type: 'address' },
      { name: 'tokenB', internalType: 'contract IERC20', type: 'address' },
      { name: 'tokenAAmountMin', internalType: 'uint256', type: 'uint256' },
      { name: 'tokenBAmountMin', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'unwrapAndSweep',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'amountMinimum', internalType: 'uint256', type: 'uint256' },
      { name: 'recipient', internalType: 'address', type: 'address' },
    ],
    name: 'unwrapWETH9',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'weth',
    outputs: [
      { name: 'weth_', internalType: 'contract IWETH9', type: 'address' },
    ],
    stateMutability: 'view',
  },
  { type: 'receive', stateMutability: 'payable' },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// MigrateBins
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const migrateBinsAbi = [
  {
    type: 'function',
    inputs: [
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
      { name: 'binIds', internalType: 'uint32[]', type: 'uint32[]' },
      { name: 'maxRecursion', internalType: 'uint32', type: 'uint32' },
    ],
    name: 'migrateBinsUpStack',
    outputs: [],
    stateMutability: 'payable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Multicall
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const multicallAbi = [
  {
    type: 'error',
    inputs: [{ name: 'target', internalType: 'address', type: 'address' }],
    name: 'AddressEmptyCode',
  },
  { type: 'error', inputs: [], name: 'FailedInnerCall' },
  {
    type: 'function',
    inputs: [{ name: 'data', internalType: 'bytes[]', type: 'bytes[]' }],
    name: 'multicall',
    outputs: [{ name: 'results', internalType: 'bytes[]', type: 'bytes[]' }],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Nft
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const nftAbi = [
  { type: 'error', inputs: [], name: 'ERC721EnumerableForbiddenBatchMint' },
  {
    type: 'error',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'owner', internalType: 'address', type: 'address' },
    ],
    name: 'ERC721IncorrectOwner',
  },
  {
    type: 'error',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC721InsufficientApproval',
  },
  {
    type: 'error',
    inputs: [{ name: 'approver', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidApprover',
  },
  {
    type: 'error',
    inputs: [{ name: 'operator', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidOperator',
  },
  {
    type: 'error',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidOwner',
  },
  {
    type: 'error',
    inputs: [{ name: 'receiver', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidReceiver',
  },
  {
    type: 'error',
    inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidSender',
  },
  {
    type: 'error',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ERC721NonexistentToken',
  },
  {
    type: 'error',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'index', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC721OutOfBoundsIndex',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'approved',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'approved', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'ApprovalForAll',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Transfer',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'checkAuthorized',
    outputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'getApproved',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'operator', internalType: 'address', type: 'address' },
    ],
    name: 'isApprovedForAll',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'nextTokenId',
    outputs: [
      { name: 'nextTokenId_', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ownerOf',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'approved', internalType: 'bool', type: 'bool' },
    ],
    name: 'setApprovalForAll',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'index', internalType: 'uint256', type: 'uint256' }],
    name: 'tokenByIndex',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'tokenIdsOfOwner',
    outputs: [
      { name: 'tokenIds', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'index', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'tokenOfOwnerByIndex',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'ownerToCheck', internalType: 'address', type: 'address' },
      { name: 'index', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'tokenOfOwnerByIndexExists',
    outputs: [{ name: 'exists', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'tokenURI',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// NftImage
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const nftImageAbi = [
  { type: 'error', inputs: [], name: 'MathOverflowedMulDiv' },
  {
    type: 'error',
    inputs: [
      { name: 'value', internalType: 'uint256', type: 'uint256' },
      { name: 'length', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'StringsInsufficientHexLength',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 've',
        internalType: 'contract IVotingEscrowNft',
        type: 'address',
      },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'tokenURI',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Nonces
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const noncesAbi = [
  {
    type: 'error',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'currentNonce', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'InvalidAccountNonce',
  },
  {
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'nonces',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// OrphanDistributor
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const orphanDistributorAbi = [
  {
    type: 'constructor',
    inputs: [
      {
        name: '_votingDistributor',
        internalType: 'contract IVotingDistributor',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'error',
    inputs: [{ name: 'target', internalType: 'address', type: 'address' }],
    name: 'AddressEmptyCode',
  },
  {
    type: 'error',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'AddressInsufficientBalance',
  },
  { type: 'error', inputs: [], name: 'FailedInnerCall' },
  { type: 'error', inputs: [], name: 'NothingToDistribute' },
  { type: 'error', inputs: [], name: 'OnlyVotingDistibutor' },
  {
    type: 'error',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'OwnableUnauthorizedAccount',
  },
  {
    type: 'error',
    inputs: [{ name: 'token', internalType: 'address', type: 'address' }],
    name: 'SafeERC20FailedOperation',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
        indexed: false,
      },
      {
        name: 'token',
        internalType: 'contract IERC20',
        type: 'address',
        indexed: false,
      },
      {
        name: 'epoch',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Distribute',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
        indexed: false,
      },
      {
        name: 'token',
        internalType: 'contract IERC20',
        type: 'address',
        indexed: false,
      },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'NotifyAndTransfer',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'recipient',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
        indexed: false,
      },
      {
        name: 'token',
        internalType: 'contract IERC20',
        type: 'address',
        indexed: false,
      },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'ProtocolDistribute',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'newAdmin',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'SetConfigurationAdmin',
  },
  {
    type: 'function',
    inputs: [],
    name: 'configurationAdmin',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
      { name: 'token', internalType: 'contract IERC20', type: 'address' },
    ],
    name: 'distribute',
    outputs: [{ name: 'amount', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'factory',
    outputs: [
      {
        name: '',
        internalType: 'contract IMaverickV2Factory',
        type: 'address',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
      { name: 'token', internalType: 'contract IERC20', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'notifyAndTransfer',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '', internalType: 'contract IMaverickV2Pool', type: 'address' },
      { name: 'token', internalType: 'contract IERC20', type: 'address' },
    ],
    name: 'orphanAmount',
    outputs: [{ name: 'amount', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'recipient', internalType: 'address', type: 'address' },
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
      { name: 'token', internalType: 'contract IERC20', type: 'address' },
    ],
    name: 'protocolDistribute',
    outputs: [{ name: 'amount', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_newAdmin', internalType: 'address', type: 'address' }],
    name: 'setConfigurationAdmin',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'votingDistributor',
    outputs: [
      {
        name: '',
        internalType: 'contract IVotingDistributor',
        type: 'address',
      },
    ],
    stateMutability: 'view',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Ownable
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ownableAbi = [
  {
    type: 'error',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'OwnableInvalidOwner',
  },
  {
    type: 'error',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'OwnableUnauthorizedAccount',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'OwnershipTransferred',
  },
  {
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// PayableMulticall
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const payableMulticallAbi = [
  {
    type: 'error',
    inputs: [{ name: 'target', internalType: 'address', type: 'address' }],
    name: 'AddressEmptyCode',
  },
  { type: 'error', inputs: [], name: 'FailedInnerCall' },
  {
    type: 'function',
    inputs: [{ name: 'data', internalType: 'bytes[]', type: 'bytes[]' }],
    name: 'multicall',
    outputs: [{ name: 'results', internalType: 'bytes[]', type: 'bytes[]' }],
    stateMutability: 'payable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Payment
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const paymentAbi = [
  {
    type: 'error',
    inputs: [{ name: 'target', internalType: 'address', type: 'address' }],
    name: 'AddressEmptyCode',
  },
  {
    type: 'error',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'AddressInsufficientBalance',
  },
  { type: 'error', inputs: [], name: 'FailedInnerCall' },
  {
    type: 'error',
    inputs: [
      { name: 'token', internalType: 'address', type: 'address' },
      { name: 'amountMinimum', internalType: 'uint256', type: 'uint256' },
      { name: 'contractBalance', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'PaymentInsufficientBalance',
  },
  { type: 'error', inputs: [], name: 'PaymentSenderNotWETH9' },
  {
    type: 'error',
    inputs: [
      { name: 'token', internalType: 'contract IERC20', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'TransferFailed',
  },
  {
    type: 'function',
    inputs: [],
    name: 'factory',
    outputs: [
      {
        name: 'factory_',
        internalType: 'contract IMaverickV2Factory',
        type: 'address',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'data', internalType: 'bytes[]', type: 'bytes[]' }],
    name: 'multicall',
    outputs: [{ name: 'results', internalType: 'bytes[]', type: 'bytes[]' }],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'refundETH',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'token', internalType: 'contract IERC20', type: 'address' },
      { name: 'amountMinimum', internalType: 'uint256', type: 'uint256' },
      { name: 'recipient', internalType: 'address', type: 'address' },
    ],
    name: 'sweepToken',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'token', internalType: 'contract IERC20', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
      { name: 'recipient', internalType: 'address', type: 'address' },
    ],
    name: 'sweepTokenAmount',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'tokenA', internalType: 'contract IERC20', type: 'address' },
      { name: 'tokenB', internalType: 'contract IERC20', type: 'address' },
      { name: 'tokenAAmountMin', internalType: 'uint256', type: 'uint256' },
      { name: 'tokenBAmountMin', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'unwrapAndSweep',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'amountMinimum', internalType: 'uint256', type: 'uint256' },
      { name: 'recipient', internalType: 'address', type: 'address' },
    ],
    name: 'unwrapWETH9',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'weth',
    outputs: [
      { name: 'weth_', internalType: 'contract IWETH9', type: 'address' },
    ],
    stateMutability: 'view',
  },
  { type: 'receive', stateMutability: 'payable' },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// PoolDistributor
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const poolDistributorAbi = [
  {
    type: 'constructor',
    inputs: [
      { name: '_position', internalType: 'contract INft', type: 'address' },
      {
        name: '_lpReward',
        internalType: 'contract ILpReward',
        type: 'address',
      },
      {
        name: '_votingDistributor',
        internalType: 'contract IVotingDistributor',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'error',
    inputs: [{ name: 'target', internalType: 'address', type: 'address' }],
    name: 'AddressEmptyCode',
  },
  {
    type: 'error',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'AddressInsufficientBalance',
  },
  {
    type: 'error',
    inputs: [
      { name: 'user', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
      { name: 'epoch', internalType: 'uint256', type: 'uint256' },
      { name: 'binId', internalType: 'uint32', type: 'uint32' },
    ],
    name: 'AlreadClaimed',
  },
  {
    type: 'error',
    inputs: [
      { name: 'epoch', internalType: 'uint256', type: 'uint256' },
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
    ],
    name: 'AlreadyDisbursed',
  },
  { type: 'error', inputs: [], name: 'BinIdsMustBeOrdered' },
  { type: 'error', inputs: [], name: 'FailedInnerCall' },
  { type: 'error', inputs: [], name: 'MathOverflowedMulDiv' },
  { type: 'error', inputs: [], name: 'NothingToClaim' },
  { type: 'error', inputs: [], name: 'OnlyVotingDistibutor' },
  {
    type: 'error',
    inputs: [{ name: 'token', internalType: 'address', type: 'address' }],
    name: 'SafeERC20FailedOperation',
  },
  {
    type: 'error',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'owner', internalType: 'address', type: 'address' },
    ],
    name: 'onlyPostionOwnerCanClaim',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'user',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
        indexed: false,
      },
      {
        name: 'binIds',
        internalType: 'uint32[]',
        type: 'uint32[]',
        indexed: false,
      },
      {
        name: 'epoch',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'ClaimLp',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
        indexed: false,
      },
      {
        name: 'epoch',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'NotifyAndTransfer',
  },
  {
    type: 'function',
    inputs: [
      { name: 'recipient', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
      { name: 'binIds', internalType: 'uint32[]', type: 'uint32[]' },
      { name: 'epoch', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'claimLp',
    outputs: [{ name: 'amount', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
      { name: 'binIds', internalType: 'uint32[]', type: 'uint32[]' },
      { name: 'epoch', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'claimLpAmount',
    outputs: [{ name: 'amount', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'epoch', internalType: 'uint256', type: 'uint256' },
      { name: '', internalType: 'contract IMaverickV2Pool', type: 'address' },
    ],
    name: 'claimed',
    outputs: [{ name: 'amount', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'epoch', internalType: 'uint256', type: 'uint256' },
      { name: '', internalType: 'contract IMaverickV2Pool', type: 'address' },
    ],
    name: 'disbursement',
    outputs: [{ name: 'amount', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'epoch', internalType: 'uint256', type: 'uint256' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: '', internalType: 'contract IMaverickV2Pool', type: 'address' },
      { name: 'binId', internalType: 'uint32', type: 'uint32' },
    ],
    name: 'lpClaims',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'lpReward',
    outputs: [
      { name: '', internalType: 'contract ILpReward', type: 'address' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'data', internalType: 'bytes[]', type: 'bytes[]' }],
    name: 'multicall',
    outputs: [{ name: 'results', internalType: 'bytes[]', type: 'bytes[]' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
      { name: 'epoch', internalType: 'uint256', type: 'uint256' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'notifyAndTransfer',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'position',
    outputs: [{ name: '', internalType: 'contract INft', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'rewardToken',
    outputs: [{ name: '', internalType: 'contract IERC20', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'votingDistributor',
    outputs: [
      {
        name: '',
        internalType: 'contract IVotingDistributor',
        type: 'address',
      },
    ],
    stateMutability: 'view',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// PositionImage
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const positionImageAbi = [
  {
    type: 'constructor',
    inputs: [{ name: '_deployer', internalType: 'address', type: 'address' }],
    stateMutability: 'nonpayable',
  },
  { type: 'error', inputs: [], name: 'MathOverflowedMulDiv' },
  {
    type: 'error',
    inputs: [
      { name: 'x', internalType: 'uint256', type: 'uint256' },
      { name: 'y', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'PRBMath_MulDiv18_Overflow',
  },
  {
    type: 'error',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'deployer', internalType: 'address', type: 'address' },
      {
        name: 'currentPosition',
        internalType: 'contract IMaverickV2Position',
        type: 'address',
      },
    ],
    name: 'PositionImageSetPositionError',
  },
  {
    type: 'error',
    inputs: [
      { name: 'value', internalType: 'uint256', type: 'uint256' },
      { name: 'length', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'StringsInsufficientHexLength',
  },
  {
    type: 'error',
    inputs: [{ name: 'tick', internalType: 'int256', type: 'int256' }],
    name: 'TickMaxExceeded',
  },
  {
    type: 'function',
    inputs: [
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: '', internalType: 'address', type: 'address' },
    ],
    name: 'image',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'position',
    outputs: [
      {
        name: '',
        internalType: 'contract IMaverickV2Position',
        type: 'address',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: '_position',
        internalType: 'contract IMaverickV2Position',
        type: 'address',
      },
    ],
    name: 'setPosition',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'str', internalType: 'string', type: 'string' }],
    name: 'stringToColor',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [{ name: 'str', internalType: 'string', type: 'string' }],
    name: 'stringToColorHash',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'pure',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// PushOperations
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const pushOperationsAbi = [
  {
    type: 'error',
    inputs: [{ name: 'target', internalType: 'address', type: 'address' }],
    name: 'AddressEmptyCode',
  },
  {
    type: 'error',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'AddressInsufficientBalance',
  },
  {
    type: 'error',
    inputs: [
      { name: 'inputLength', internalType: 'uint256', type: 'uint256' },
      { name: 'expectedLength', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'BytesLibInvalidLength',
  },
  { type: 'error', inputs: [], name: 'BytesLibSliceOutOfBounds' },
  { type: 'error', inputs: [], name: 'BytesLibSliceOverflow' },
  { type: 'error', inputs: [], name: 'BytesLibToAddressOutOfBounds' },
  { type: 'error', inputs: [], name: 'BytesLibToBoolOutOfBounds' },
  { type: 'error', inputs: [], name: 'FailedInnerCall' },
  {
    type: 'error',
    inputs: [
      { name: 'token', internalType: 'address', type: 'address' },
      { name: 'amountMinimum', internalType: 'uint256', type: 'uint256' },
      { name: 'contractBalance', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'PaymentInsufficientBalance',
  },
  { type: 'error', inputs: [], name: 'PaymentSenderNotWETH9' },
  { type: 'error', inputs: [], name: 'RouterNotFactoryPool' },
  {
    type: 'error',
    inputs: [
      { name: 'amountOutMinimum', internalType: 'uint256', type: 'uint256' },
      { name: 'amountOut', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'RouterTooLittleReceived',
  },
  {
    type: 'error',
    inputs: [
      { name: 'amountInMaximum', internalType: 'uint256', type: 'uint256' },
      { name: 'amountIn', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'RouterTooMuchRequested',
  },
  { type: 'error', inputs: [], name: 'RouterZeroSwap' },
  {
    type: 'error',
    inputs: [
      { name: 'token', internalType: 'contract IERC20', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'TransferFailed',
  },
  {
    type: 'error',
    inputs: [
      { name: 'token', internalType: 'contract IERC20', type: 'address' },
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'TransferFromFailed',
  },
  {
    type: 'function',
    inputs: [
      { name: 'recipient', internalType: 'address', type: 'address' },
      { name: 'path', internalType: 'bytes', type: 'bytes' },
      { name: 'amountIn', internalType: 'uint256', type: 'uint256' },
      { name: 'amountOutMinimum', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'exactInputMultiHop',
    outputs: [{ name: 'amountOut', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'recipient', internalType: 'address', type: 'address' },
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
      { name: 'tokenAIn', internalType: 'bool', type: 'bool' },
      { name: 'amountIn', internalType: 'uint256', type: 'uint256' },
      { name: 'amountOutMinimum', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'exactInputSingle',
    outputs: [{ name: 'amountOut', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [{ name: 'argsPacked', internalType: 'bytes', type: 'bytes' }],
    name: 'exactInputSinglePackedArgs',
    outputs: [{ name: 'amountOut', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'factory',
    outputs: [
      {
        name: 'factory_',
        internalType: 'contract IMaverickV2Factory',
        type: 'address',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'data', internalType: 'bytes[]', type: 'bytes[]' }],
    name: 'multicall',
    outputs: [{ name: 'results', internalType: 'bytes[]', type: 'bytes[]' }],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'refundETH',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'token', internalType: 'contract IERC20', type: 'address' },
      { name: 'amountMinimum', internalType: 'uint256', type: 'uint256' },
      { name: 'recipient', internalType: 'address', type: 'address' },
    ],
    name: 'sweepToken',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'token', internalType: 'contract IERC20', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
      { name: 'recipient', internalType: 'address', type: 'address' },
    ],
    name: 'sweepTokenAmount',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'tokenA', internalType: 'contract IERC20', type: 'address' },
      { name: 'tokenB', internalType: 'contract IERC20', type: 'address' },
      { name: 'tokenAAmountMin', internalType: 'uint256', type: 'uint256' },
      { name: 'tokenBAmountMin', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'unwrapAndSweep',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'amountMinimum', internalType: 'uint256', type: 'uint256' },
      { name: 'recipient', internalType: 'address', type: 'address' },
    ],
    name: 'unwrapWETH9',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'weth',
    outputs: [
      { name: 'weth_', internalType: 'contract IWETH9', type: 'address' },
    ],
    stateMutability: 'view',
  },
  { type: 'receive', stateMutability: 'payable' },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ReentrancyGuard
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const reentrancyGuardAbi = [
  { type: 'error', inputs: [], name: 'ReentrancyGuardReentrantCall' },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Rooster
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const roosterAbi = [
  {
    type: 'constructor',
    inputs: [
      { name: 'initialOwner', internalType: 'address', type: 'address' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'error',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'allowance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC20InsufficientAllowance',
  },
  {
    type: 'error',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'balance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC20InsufficientBalance',
  },
  {
    type: 'error',
    inputs: [{ name: 'approver', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidApprover',
  },
  {
    type: 'error',
    inputs: [{ name: 'receiver', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidReceiver',
  },
  {
    type: 'error',
    inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidSender',
  },
  {
    type: 'error',
    inputs: [{ name: 'spender', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidSpender',
  },
  { type: 'error', inputs: [], name: 'NotMinter' },
  {
    type: 'error',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'OwnableInvalidOwner',
  },
  {
    type: 'error',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'OwnableUnauthorizedAccount',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'spender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'OwnershipTransferred',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'newMinter',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'SetMinter',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Transfer',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'mint',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'minter',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_minter', internalType: 'address', type: 'address' }],
    name: 'setMinter',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// SAND
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const sandAbi = [
  { type: 'constructor', inputs: [], stateMutability: 'nonpayable' },
  {
    type: 'error',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'allowance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC20InsufficientAllowance',
  },
  {
    type: 'error',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'balance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC20InsufficientBalance',
  },
  {
    type: 'error',
    inputs: [{ name: 'approver', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidApprover',
  },
  {
    type: 'error',
    inputs: [{ name: 'receiver', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidReceiver',
  },
  {
    type: 'error',
    inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidSender',
  },
  {
    type: 'error',
    inputs: [{ name: 'spender', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidSpender',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'spender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Transfer',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'mint',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// SafeCast
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const safeCastAbi = [
  {
    type: 'error',
    inputs: [
      { name: 'bits', internalType: 'uint8', type: 'uint8' },
      { name: 'value', internalType: 'int256', type: 'int256' },
    ],
    name: 'SafeCastOverflowedIntDowncast',
  },
  {
    type: 'error',
    inputs: [{ name: 'value', internalType: 'int256', type: 'int256' }],
    name: 'SafeCastOverflowedIntToUint',
  },
  {
    type: 'error',
    inputs: [
      { name: 'bits', internalType: 'uint8', type: 'uint8' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'SafeCastOverflowedUintDowncast',
  },
  {
    type: 'error',
    inputs: [{ name: 'value', internalType: 'uint256', type: 'uint256' }],
    name: 'SafeCastOverflowedUintToInt',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// SafeERC20
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const safeErc20Abi = [
  {
    type: 'error',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'currentAllowance', internalType: 'uint256', type: 'uint256' },
      { name: 'requestedDecrease', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'SafeERC20FailedDecreaseAllowance',
  },
  {
    type: 'error',
    inputs: [{ name: 'token', internalType: 'address', type: 'address' }],
    name: 'SafeERC20FailedOperation',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ShortStrings
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const shortStringsAbi = [
  { type: 'error', inputs: [], name: 'InvalidShortString' },
  {
    type: 'error',
    inputs: [{ name: 'str', internalType: 'string', type: 'string' }],
    name: 'StringTooLong',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// State
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const stateAbi = [
  {
    type: 'function',
    inputs: [],
    name: 'factory',
    outputs: [
      {
        name: 'factory_',
        internalType: 'contract IMaverickV2Factory',
        type: 'address',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'weth',
    outputs: [
      { name: 'weth_', internalType: 'contract IWETH9', type: 'address' },
    ],
    stateMutability: 'view',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Strings
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const stringsAbi = [
  {
    type: 'error',
    inputs: [
      { name: 'value', internalType: 'uint256', type: 'uint256' },
      { name: 'length', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'StringsInsufficientHexLength',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// TickMath
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const tickMathAbi = [
  {
    type: 'error',
    inputs: [{ name: 'tick', internalType: 'int256', type: 'int256' }],
    name: 'TickMaxExceeded',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// TransferLib
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const transferLibAbi = [
  {
    type: 'error',
    inputs: [
      { name: 'token', internalType: 'contract IERC20', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'TransferFailed',
  },
  {
    type: 'error',
    inputs: [
      { name: 'token', internalType: 'contract IERC20', type: 'address' },
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'TransferFromFailed',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// USDC
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const usdcAbi = [
  { type: 'constructor', inputs: [], stateMutability: 'nonpayable' },
  {
    type: 'error',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'allowance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC20InsufficientAllowance',
  },
  {
    type: 'error',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'balance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC20InsufficientBalance',
  },
  {
    type: 'error',
    inputs: [{ name: 'approver', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidApprover',
  },
  {
    type: 'error',
    inputs: [{ name: 'receiver', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidReceiver',
  },
  {
    type: 'error',
    inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidSender',
  },
  {
    type: 'error',
    inputs: [{ name: 'spender', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidSpender',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'spender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Transfer',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'mint',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// USDT
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const usdtAbi = [
  { type: 'constructor', inputs: [], stateMutability: 'nonpayable' },
  {
    type: 'error',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'allowance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC20InsufficientAllowance',
  },
  {
    type: 'error',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'balance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC20InsufficientBalance',
  },
  {
    type: 'error',
    inputs: [{ name: 'approver', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidApprover',
  },
  {
    type: 'error',
    inputs: [{ name: 'receiver', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidReceiver',
  },
  {
    type: 'error',
    inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidSender',
  },
  {
    type: 'error',
    inputs: [{ name: 'spender', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidSpender',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'spender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Transfer',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'mint',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Votes
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const votesAbi = [
  { type: 'error', inputs: [], name: 'CheckpointUnorderedInsertion' },
  { type: 'error', inputs: [], name: 'ECDSAInvalidSignature' },
  {
    type: 'error',
    inputs: [{ name: 'length', internalType: 'uint256', type: 'uint256' }],
    name: 'ECDSAInvalidSignatureLength',
  },
  {
    type: 'error',
    inputs: [{ name: 's', internalType: 'bytes32', type: 'bytes32' }],
    name: 'ECDSAInvalidSignatureS',
  },
  {
    type: 'error',
    inputs: [
      { name: 'timepoint', internalType: 'uint256', type: 'uint256' },
      { name: 'clock', internalType: 'uint48', type: 'uint48' },
    ],
    name: 'ERC5805FutureLookup',
  },
  { type: 'error', inputs: [], name: 'ERC6372InconsistentClock' },
  {
    type: 'error',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'currentNonce', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'InvalidAccountNonce',
  },
  { type: 'error', inputs: [], name: 'InvalidShortString' },
  {
    type: 'error',
    inputs: [
      { name: 'bits', internalType: 'uint8', type: 'uint8' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'SafeCastOverflowedUintDowncast',
  },
  {
    type: 'error',
    inputs: [{ name: 'str', internalType: 'string', type: 'string' }],
    name: 'StringTooLong',
  },
  {
    type: 'error',
    inputs: [{ name: 'expiry', internalType: 'uint256', type: 'uint256' }],
    name: 'VotesExpiredSignature',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'delegator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'fromDelegate',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'toDelegate',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'DelegateChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'delegate',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'previousVotes',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'newVotes',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'DelegateVotesChanged',
  },
  { type: 'event', anonymous: false, inputs: [], name: 'EIP712DomainChanged' },
  {
    type: 'function',
    inputs: [],
    name: 'CLOCK_MODE',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'clock',
    outputs: [{ name: '', internalType: 'uint48', type: 'uint48' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'delegatee', internalType: 'address', type: 'address' }],
    name: 'delegate',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'delegatee', internalType: 'address', type: 'address' },
      { name: 'nonce', internalType: 'uint256', type: 'uint256' },
      { name: 'expiry', internalType: 'uint256', type: 'uint256' },
      { name: 'v', internalType: 'uint8', type: 'uint8' },
      { name: 'r', internalType: 'bytes32', type: 'bytes32' },
      { name: 's', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'delegateBySig',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'delegates',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'eip712Domain',
    outputs: [
      { name: 'fields', internalType: 'bytes1', type: 'bytes1' },
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'version', internalType: 'string', type: 'string' },
      { name: 'chainId', internalType: 'uint256', type: 'uint256' },
      { name: 'verifyingContract', internalType: 'address', type: 'address' },
      { name: 'salt', internalType: 'bytes32', type: 'bytes32' },
      { name: 'extensions', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'timepoint', internalType: 'uint256', type: 'uint256' }],
    name: 'getPastTotalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'timepoint', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'getPastVotes',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'getVotes',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'nonces',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// VotingDistributor
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const votingDistributorAbi = [
  {
    type: 'constructor',
    inputs: [
      {
        name: '_factory',
        internalType: 'contract IMaverickV2Factory',
        type: 'address',
      },
      { name: '_veToken', internalType: 'contract IERC5805', type: 'address' },
      {
        name: '_rewardToken',
        internalType: 'contract IERC20',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'error',
    inputs: [{ name: 'target', internalType: 'address', type: 'address' }],
    name: 'AddressEmptyCode',
  },
  {
    type: 'error',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'AddressInsufficientBalance',
  },
  {
    type: 'error',
    inputs: [
      { name: 'timestamp', internalType: 'uint256', type: 'uint256' },
      { name: 'epochStart', internalType: 'uint256', type: 'uint256' },
      { name: 'epochEnd', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'EpochEnded',
  },
  { type: 'error', inputs: [], name: 'FailedInnerCall' },
  {
    type: 'error',
    inputs: [{ name: 'epoch', internalType: 'uint256', type: 'uint256' }],
    name: 'InvalidEpoch',
  },
  {
    type: 'error',
    inputs: [
      {
        name: 'lastPool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
      {
        name: 'currentPool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
    ],
    name: 'InvalidTargetOrder',
  },
  {
    type: 'error',
    inputs: [
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
      { name: 'weight', internalType: 'uint256', type: 'uint256' },
      { name: 'totalWeight', internalType: 'uint256', type: 'uint256' },
      { name: 'voteMultiplier', internalType: 'uint256', type: 'uint256' },
      { name: 'vote', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'InvalidVote',
  },
  { type: 'error', inputs: [], name: 'MathOverflowedMulDiv' },
  {
    type: 'error',
    inputs: [
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
    ],
    name: 'NotFactoryPool',
  },
  { type: 'error', inputs: [], name: 'NothingToDistribute' },
  {
    type: 'error',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'OwnableUnauthorizedAccount',
  },
  {
    type: 'error',
    inputs: [
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
      { name: 'epoch', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'PoolAlreadyDistributed',
  },
  { type: 'error', inputs: [], name: 'ReentrancyGuardReentrantCall' },
  {
    type: 'error',
    inputs: [
      { name: 'voteForThisPool', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'RolloverNotAllowed',
  },
  {
    type: 'error',
    inputs: [
      { name: 'bits', internalType: 'uint8', type: 'uint8' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'SafeCastOverflowedUintDowncast',
  },
  {
    type: 'error',
    inputs: [{ name: 'token', internalType: 'address', type: 'address' }],
    name: 'SafeERC20FailedOperation',
  },
  { type: 'error', inputs: [], name: 'SenderHasAlreadyVoted' },
  {
    type: 'error',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'epoch', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'SenderHasNoVotingPower',
  },
  { type: 'error', inputs: [], name: 'SenderNotFactoryPool' },
  { type: 'error', inputs: [], name: 'VoteMultiplierIsZero' },
  {
    type: 'error',
    inputs: [
      { name: 'timestamp', internalType: 'uint256', type: 'uint256' },
      { name: 'epochStart', internalType: 'uint256', type: 'uint256' },
      { name: 'epochEnd', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'VotePeriodNotActive',
  },
  {
    type: 'error',
    inputs: [
      { name: 'timestamp', internalType: 'uint256', type: 'uint256' },
      { name: 'epochStart', internalType: 'uint256', type: 'uint256' },
      { name: 'epochEnd', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'VotePeriodNotEnded',
  },
  {
    type: 'error',
    inputs: [
      { name: 'user', internalType: 'address', type: 'address' },
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
      { name: 'epoch', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'VoterAlreadyCollected',
  },
  { type: 'error', inputs: [], name: 'ZeroAmount' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'epoch',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'AddDistributionBudget',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'epoch',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
        indexed: false,
      },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'incentiveToken',
        internalType: 'contract IERC20',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'AddVoteIncentive',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'epoch',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'voter',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
        indexed: false,
      },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'incentiveToken',
        internalType: 'contract IERC20',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'CollectVoteIncentive',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'epoch',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'sender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
        indexed: false,
      },
      {
        name: 'rewardTokenAmountDistributed',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Distribute',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
        indexed: false,
      },
      {
        name: 'token',
        internalType: 'contract IERC20',
        type: 'address',
        indexed: false,
      },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'epoch',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'sentToOrphanDistributor',
        internalType: 'bool',
        type: 'bool',
        indexed: false,
      },
    ],
    name: 'MoveFeesFromPool',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'orphanDistributor',
        internalType: 'contract IOrphanDistributor',
        type: 'address',
        indexed: true,
      },
      {
        name: 'epoch',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'poolToIncentivize',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
        indexed: true,
      },
      {
        name: 'incentiveToken',
        internalType: 'contract IERC20',
        type: 'address',
        indexed: false,
      },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'OrphanedIncentive',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'newAdmin',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'SetConfigurationAdmin',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: '_newCollector',
        internalType: 'contract IOrphanDistributor',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'SetOrphanDistributor',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'poolDistributor',
        internalType: 'contract IPoolDistributor',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'SetPoolDistributor',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
        indexed: false,
      },
      {
        name: 'multiplierD18',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'SetPoolVoteMultiplier',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'epoch',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'voter',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
        indexed: false,
      },
      {
        name: 'vote',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Vote',
  },
  {
    type: 'function',
    inputs: [],
    name: 'EPOCH_PERIOD',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'MIN_MULTIPLIER',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
      { name: 'epoch', internalType: 'uint256', type: 'uint256' },
      { name: 'isTokenA', internalType: 'bool', type: 'bool' },
    ],
    name: '_moveTokenFeesFromPoolToVotingDistributor',
    outputs: [{ name: 'amount', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
      { name: 'epoch', internalType: 'uint256', type: 'uint256' },
      { name: 'token', internalType: 'contract IERC20', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: '_sendOrphanedAmount',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
      { name: 'epoch', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'addDistributionBudget',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'amount', internalType: 'uint256', type: 'uint256' }],
    name: 'addDistributionBudgetCurrentEpoch',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'poolToIncentivize',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
      {
        name: 'incentiveToken',
        internalType: 'contract IERC20',
        type: 'address',
      },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
      { name: 'epoch', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'addVoteIncentive',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'poolToIncentivize',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
      {
        name: 'incentiveToken',
        internalType: 'contract IERC20',
        type: 'address',
      },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'addVoteIncentiveToCurrentEpoch',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
      {
        name: 'incentiveToken',
        internalType: 'contract IERC20',
        type: 'address',
      },
      { name: 'epoch', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'collectVoteIncentive',
    outputs: [{ name: 'amount', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'user', internalType: 'address', type: 'address' },
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
      {
        name: 'incentiveToken',
        internalType: 'contract IERC20',
        type: 'address',
      },
      { name: 'epoch', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'collectVoteIncentiveAmount',
    outputs: [{ name: 'amount', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'configurationAdmin',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'currentEpoch',
    outputs: [{ name: 'epoch', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
      { name: 'epoch', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'distribute',
    outputs: [
      { name: 'amountDistributed', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
      { name: 'epoch', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'distributeAmount',
    outputs: [
      { name: 'amountDistributed', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'offset', internalType: 'int256', type: 'int256' }],
    name: 'epochAtOffset',
    outputs: [{ name: 'epoch', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'epoch', internalType: 'uint256', type: 'uint256' }],
    name: 'epochEnd',
    outputs: [{ name: 'end', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [{ name: 'epoch', internalType: 'uint256', type: 'uint256' }],
    name: 'epochIsOver',
    outputs: [{ name: 'isOver', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'factory',
    outputs: [
      {
        name: '',
        internalType: 'contract IMaverickV2Factory',
        type: 'address',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'epoch', internalType: 'uint256', type: 'uint256' }],
    name: 'getBudget',
    outputs: [{ name: 'budget', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'epoch', internalType: 'uint256', type: 'uint256' },
      {
        name: 'bounds',
        internalType: 'struct IVotingDistributor.IndexBounds',
        type: 'tuple',
        components: [
          { name: 'startIndex', internalType: 'uint256', type: 'uint256' },
          { name: 'endIndex', internalType: 'uint256', type: 'uint256' },
          {
            name: 'incentiveStartIndex',
            internalType: 'uint256',
            type: 'uint256',
          },
          {
            name: 'incentiveEndIndex',
            internalType: 'uint256',
            type: 'uint256',
          },
        ],
      },
    ],
    name: 'getCheckpointData',
    outputs: [
      { name: 'budget', internalType: 'uint128', type: 'uint128' },
      { name: 'totalVote', internalType: 'uint128', type: 'uint128' },
      {
        name: 'pools',
        internalType: 'struct IVotingDistributor.PoolView[]',
        type: 'tuple[]',
        components: [
          {
            name: 'pool',
            internalType: 'contract IMaverickV2Pool',
            type: 'address',
          },
          { name: 'votes', internalType: 'uint256', type: 'uint256' },
          { name: 'hasDistributed', internalType: 'bool', type: 'bool' },
          {
            name: 'incentiveTokens',
            internalType: 'contract IERC20[]',
            type: 'address[]',
          },
          {
            name: 'voteIncentives',
            internalType: 'uint256[]',
            type: 'uint256[]',
          },
          {
            name: 'incentiveTokenCount',
            internalType: 'uint256',
            type: 'uint256',
          },
        ],
      },
      { name: 'totalCount', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
      { name: 'epoch', internalType: 'uint256', type: 'uint256' },
      { name: 'startIndex', internalType: 'uint256', type: 'uint256' },
      { name: 'endIndex', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'getIncentiveData',
    outputs: [
      {
        name: 'incentiveTokens',
        internalType: 'contract IERC20[]',
        type: 'address[]',
      },
      { name: 'voteIncentives', internalType: 'uint256[]', type: 'uint256[]' },
      { name: 'totalCount', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
      { name: 'epoch', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'getPoolData',
    outputs: [
      { name: 'voteForThisPool', internalType: 'uint256', type: 'uint256' },
      { name: 'totalVoteForEpoch', internalType: 'uint256', type: 'uint256' },
      { name: 'hasDistributed', internalType: 'bool', type: 'bool' },
      { name: 'epochBudget', internalType: 'uint256', type: 'uint256' },
      { name: 'disbursementAmount', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'epoch', internalType: 'uint256', type: 'uint256' }],
    name: 'getTotalVote',
    outputs: [{ name: 'totalVote', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'user', internalType: 'address', type: 'address' },
      { name: 'epoch', internalType: 'uint256', type: 'uint256' },
      {
        name: 'bounds',
        internalType: 'struct IVotingDistributor.IndexBounds',
        type: 'tuple',
        components: [
          { name: 'startIndex', internalType: 'uint256', type: 'uint256' },
          { name: 'endIndex', internalType: 'uint256', type: 'uint256' },
          {
            name: 'incentiveStartIndex',
            internalType: 'uint256',
            type: 'uint256',
          },
          {
            name: 'incentiveEndIndex',
            internalType: 'uint256',
            type: 'uint256',
          },
        ],
      },
    ],
    name: 'getVoterClaimData',
    outputs: [
      {
        name: 'claimData',
        internalType: 'struct IVotingDistributor.ClaimData[]',
        type: 'tuple[]',
        components: [
          {
            name: 'pool',
            internalType: 'contract IMaverickV2Pool',
            type: 'address',
          },
          {
            name: 'incentiveTokenCount',
            internalType: 'uint256',
            type: 'uint256',
          },
          {
            name: 'incentiveTokens',
            internalType: 'contract IERC20[]',
            type: 'address[]',
          },
          {
            name: 'incentiveAmounts',
            internalType: 'uint256[]',
            type: 'uint256[]',
          },
          { name: 'hasCollected', internalType: 'bool[]', type: 'bool[]' },
        ],
      },
      { name: 'totalCount', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'user', internalType: 'address', type: 'address' },
      { name: 'epoch', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'getVoterData',
    outputs: [
      {
        name: 'voterData',
        internalType: 'struct IVotingDistributor.VoterData',
        type: 'tuple',
        components: [
          { name: 'hasVoted', internalType: 'bool', type: 'bool' },
          { name: 'votes', internalType: 'uint128[]', type: 'uint128[]' },
          {
            name: 'pools',
            internalType: 'contract IMaverickV2Pool[]',
            type: 'address[]',
          },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'user', internalType: 'address', type: 'address' },
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
      {
        name: 'incentiveToken',
        internalType: 'contract IERC20',
        type: 'address',
      },
      { name: 'epoch', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'hasCollected',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'user', internalType: 'address', type: 'address' },
      { name: 'epoch', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'hasVoted',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'epoch', internalType: 'uint256', type: 'uint256' }],
    name: 'isEpoch',
    outputs: [{ name: '_isEpoch', internalType: 'bool', type: 'bool' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [],
    name: 'lastEpoch',
    outputs: [{ name: 'epoch', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
    ],
    name: 'moveFeesFromPoolToVotingDistributor',
    outputs: [
      { name: 'amountA', internalType: 'uint256', type: 'uint256' },
      { name: 'amountB', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'data', internalType: 'bytes[]', type: 'bytes[]' }],
    name: 'multicall',
    outputs: [{ name: 'results', internalType: 'bytes[]', type: 'bytes[]' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'nextEpoch',
    outputs: [{ name: 'epoch', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'orphanDistributor',
    outputs: [
      {
        name: '',
        internalType: 'contract IOrphanDistributor',
        type: 'address',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
      { name: 'epoch', internalType: 'uint256', type: 'uint256' },
      { name: 'token', internalType: 'contract IERC20', type: 'address' },
    ],
    name: 'orphanedIncentives',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'poolDistributor',
    outputs: [
      { name: '', internalType: 'contract IPoolDistributor', type: 'address' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'rewardToken',
    outputs: [{ name: '', internalType: 'contract IERC20', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'poolToIncentivize',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
      {
        name: 'incentiveToken',
        internalType: 'contract IERC20',
        type: 'address',
      },
      { name: 'epoch', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'rollUnvotedIncentive',
    outputs: [{ name: 'amount', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_newAdmin', internalType: 'address', type: 'address' }],
    name: 'setConfigurationAdmin',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: '_newCollector',
        internalType: 'contract IOrphanDistributor',
        type: 'address',
      },
    ],
    name: 'setOrphanDistributor',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: '_poolDistributor',
        internalType: 'contract IPoolDistributor',
        type: 'address',
      },
    ],
    name: 'setPoolDistributor',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
      { name: 'multiplierD18', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'setPoolVoteMultiplier',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
      { name: 'epoch', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'totalAFee',
    outputs: [{ name: 'fee', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
      { name: 'epoch', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'totalBFee',
    outputs: [{ name: 'fee', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'veToken',
    outputs: [{ name: '', internalType: 'contract IERC5805', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'voteTargets',
        internalType: 'contract IMaverickV2Pool[]',
        type: 'address[]',
      },
      { name: 'weights', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    name: 'vote',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'pool',
        internalType: 'contract IMaverickV2Pool',
        type: 'address',
      },
    ],
    name: 'voteMultiplier',
    outputs: [
      { name: 'multiplierD18', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'epoch', internalType: 'uint256', type: 'uint256' }],
    name: 'votingIsActive',
    outputs: [{ name: 'isActive', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// VotingEscrow
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const votingEscrowAbi = [
  {
    type: 'constructor',
    inputs: [{ name: '_caller', internalType: 'address', type: 'address' }],
    stateMutability: 'nonpayable',
  },
  { type: 'error', inputs: [], name: 'CheckpointUnorderedInsertion' },
  { type: 'error', inputs: [], name: 'ECDSAInvalidSignature' },
  {
    type: 'error',
    inputs: [{ name: 'length', internalType: 'uint256', type: 'uint256' }],
    name: 'ECDSAInvalidSignatureLength',
  },
  {
    type: 'error',
    inputs: [{ name: 's', internalType: 'bytes32', type: 'bytes32' }],
    name: 'ECDSAInvalidSignatureS',
  },
  {
    type: 'error',
    inputs: [
      { name: 'increasedSupply', internalType: 'uint256', type: 'uint256' },
      { name: 'cap', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC20ExceededSafeSupply',
  },
  {
    type: 'error',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'allowance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC20InsufficientAllowance',
  },
  {
    type: 'error',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'balance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC20InsufficientBalance',
  },
  {
    type: 'error',
    inputs: [{ name: 'approver', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidApprover',
  },
  {
    type: 'error',
    inputs: [{ name: 'receiver', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidReceiver',
  },
  {
    type: 'error',
    inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidSender',
  },
  {
    type: 'error',
    inputs: [{ name: 'spender', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidSpender',
  },
  {
    type: 'error',
    inputs: [
      { name: 'timepoint', internalType: 'uint256', type: 'uint256' },
      { name: 'clock', internalType: 'uint48', type: 'uint48' },
    ],
    name: 'ERC5805FutureLookup',
  },
  { type: 'error', inputs: [], name: 'ERC6372InconsistentClock' },
  {
    type: 'error',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'currentNonce', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'InvalidAccountNonce',
  },
  { type: 'error', inputs: [], name: 'InvalidShortString' },
  { type: 'error', inputs: [], name: 'MathOverflowedMulDiv' },
  {
    type: 'error',
    inputs: [
      { name: 'x', internalType: 'uint256', type: 'uint256' },
      { name: 'y', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'PRBMath_MulDiv18_Overflow',
  },
  {
    type: 'error',
    inputs: [{ name: 'x', internalType: 'UD60x18', type: 'uint256' }],
    name: 'PRBMath_UD60x18_Exp2_InputTooBig',
  },
  {
    type: 'error',
    inputs: [{ name: 'x', internalType: 'UD60x18', type: 'uint256' }],
    name: 'PRBMath_UD60x18_Log_InputTooSmall',
  },
  {
    type: 'error',
    inputs: [
      { name: 'bits', internalType: 'uint8', type: 'uint8' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'SafeCastOverflowedUintDowncast',
  },
  {
    type: 'error',
    inputs: [{ name: 'str', internalType: 'string', type: 'string' }],
    name: 'StringTooLong',
  },
  {
    type: 'error',
    inputs: [{ name: 'expiry', internalType: 'uint256', type: 'uint256' }],
    name: 'VotesExpiredSignature',
  },
  { type: 'error', inputs: [], name: 'VotingEscrowDelegationNotSupported' },
  {
    type: 'error',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'VotingEscrowInvalidAddress',
  },
  {
    type: 'error',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'VotingEscrowInvalidAmount',
  },
  {
    type: 'error',
    inputs: [
      { name: 'duration', internalType: 'uint256', type: 'uint256' },
      { name: 'minDuration', internalType: 'uint256', type: 'uint256' },
      { name: 'maxDuration', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'VotingEscrowInvalidDuration',
  },
  {
    type: 'error',
    inputs: [
      { name: 'newEnd', internalType: 'uint256', type: 'uint256' },
      { name: 'oldEnd', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'VotingEscrowInvalidEndTime',
  },
  { type: 'error', inputs: [], name: 'VotingEscrowOnlyCallerAllowed' },
  {
    type: 'error',
    inputs: [{ name: 'proportion', internalType: 'uint256', type: 'uint256' }],
    name: 'VotingEscrowProportionMustBeLessThanOne',
  },
  { type: 'error', inputs: [], name: 'VotingEscrowStakeAlreadyRedeemed' },
  {
    type: 'error',
    inputs: [
      { name: 'currentTime', internalType: 'uint256', type: 'uint256' },
      { name: 'endTime', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'VotingEscrowStakeStillLocked',
  },
  { type: 'error', inputs: [], name: 'VotingEscrowTransferNotSupported' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'spender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'delegator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'fromDelegate',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'toDelegate',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'DelegateChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'delegate',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'previousVotes',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'newVotes',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'DelegateVotesChanged',
  },
  { type: 'event', anonymous: false, inputs: [], name: 'EIP712DomainChanged' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'user', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: '',
        internalType: 'struct IVotingEscrowBase.Lockup',
        type: 'tuple',
        components: [
          { name: 'amount', internalType: 'uint128', type: 'uint128' },
          { name: 'end', internalType: 'uint128', type: 'uint128' },
          { name: 'votes', internalType: 'uint256', type: 'uint256' },
        ],
        indexed: false,
      },
    ],
    name: 'Stake',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Transfer',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'user', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: '',
        internalType: 'struct IVotingEscrowBase.Lockup',
        type: 'tuple',
        components: [
          { name: 'amount', internalType: 'uint128', type: 'uint128' },
          { name: 'end', internalType: 'uint128', type: 'uint128' },
          { name: 'votes', internalType: 'uint256', type: 'uint256' },
        ],
        indexed: false,
      },
    ],
    name: 'Unstake',
  },
  {
    type: 'function',
    inputs: [],
    name: 'CLOCK_MODE',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [],
    name: 'MAX_STAKE_DURATION',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'MIN_STAKE_DURATION',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'YEAR_BASE',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'caller',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'pos', internalType: 'uint32', type: 'uint32' },
    ],
    name: 'checkpoints',
    outputs: [
      {
        name: '',
        internalType: 'struct Checkpoints.Checkpoint208',
        type: 'tuple',
        components: [
          { name: '_key', internalType: 'uint48', type: 'uint48' },
          { name: '_value', internalType: 'uint208', type: 'uint208' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'clock',
    outputs: [{ name: '', internalType: 'uint48', type: 'uint48' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'address', type: 'address' }],
    name: 'delegate',
    outputs: [],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'delegatee', internalType: 'address', type: 'address' },
      { name: 'nonce', internalType: 'uint256', type: 'uint256' },
      { name: 'expiry', internalType: 'uint256', type: 'uint256' },
      { name: 'v', internalType: 'uint8', type: 'uint8' },
      { name: 'r', internalType: 'bytes32', type: 'bytes32' },
      { name: 's', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'delegateBySig',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'delegatee', internalType: 'address', type: 'address' },
    ],
    name: 'delegateFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'delegates',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'eip712Domain',
    outputs: [
      { name: 'fields', internalType: 'bytes1', type: 'bytes1' },
      { name: 'name', internalType: 'string', type: 'string' },
      { name: 'version', internalType: 'string', type: 'string' },
      { name: 'chainId', internalType: 'uint256', type: 'uint256' },
      { name: 'verifyingContract', internalType: 'address', type: 'address' },
      { name: 'salt', internalType: 'bytes32', type: 'bytes32' },
      { name: 'extensions', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'duration', internalType: 'uint256', type: 'uint256' },
      { name: 'amount', internalType: 'uint128', type: 'uint128' },
    ],
    name: 'extend',
    outputs: [
      {
        name: 'newLockup',
        internalType: 'struct IVotingEscrowBase.Lockup',
        type: 'tuple',
        components: [
          { name: 'amount', internalType: 'uint128', type: 'uint128' },
          { name: 'end', internalType: 'uint128', type: 'uint128' },
          { name: 'votes', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'staker', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'getLockup',
    outputs: [
      {
        name: 'lockup',
        internalType: 'struct IVotingEscrowBase.Lockup',
        type: 'tuple',
        components: [
          { name: 'amount', internalType: 'uint128', type: 'uint128' },
          { name: 'end', internalType: 'uint128', type: 'uint128' },
          { name: 'votes', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'timepoint', internalType: 'uint256', type: 'uint256' }],
    name: 'getPastTotalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'timepoint', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'getPastVotes',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'getVotes',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'tokenIds', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    name: 'merge',
    outputs: [
      {
        name: 'newLockup',
        internalType: 'struct IVotingEscrowBase.Lockup',
        type: 'tuple',
        components: [
          { name: 'amount', internalType: 'uint128', type: 'uint128' },
          { name: 'end', internalType: 'uint128', type: 'uint128' },
          { name: 'votes', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'nonces',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'numCheckpoints',
    outputs: [{ name: '', internalType: 'uint32', type: 'uint32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'amount', internalType: 'uint128', type: 'uint128' },
      { name: 'duration', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'previewVotes',
    outputs: [
      {
        name: 'lockup',
        internalType: 'struct IVotingEscrowBase.Lockup',
        type: 'tuple',
        components: [
          { name: 'amount', internalType: 'uint128', type: 'uint128' },
          { name: 'end', internalType: 'uint128', type: 'uint128' },
          { name: 'votes', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'tokenIdToSplit', internalType: 'uint256', type: 'uint256' },
      { name: 'newTokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'splitProportionD18', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'splitLockup',
    outputs: [
      {
        name: 'lockup1',
        internalType: 'struct IVotingEscrowBase.Lockup',
        type: 'tuple',
        components: [
          { name: 'amount', internalType: 'uint128', type: 'uint128' },
          { name: 'end', internalType: 'uint128', type: 'uint128' },
          { name: 'votes', internalType: 'uint256', type: 'uint256' },
        ],
      },
      {
        name: 'lockup2',
        internalType: 'struct IVotingEscrowBase.Lockup',
        type: 'tuple',
        components: [
          { name: 'amount', internalType: 'uint128', type: 'uint128' },
          { name: 'end', internalType: 'uint128', type: 'uint128' },
          { name: 'votes', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'duration', internalType: 'uint256', type: 'uint256' },
      { name: 'amount', internalType: 'uint128', type: 'uint128' },
    ],
    name: 'stake',
    outputs: [
      {
        name: 'lockup',
        internalType: 'struct IVotingEscrowBase.Lockup',
        type: 'tuple',
        components: [
          { name: 'amount', internalType: 'uint128', type: 'uint128' },
          { name: 'end', internalType: 'uint128', type: 'uint128' },
          { name: 'votes', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'startTimestamp',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'address', type: 'address' },
      { name: '', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferLockup',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'unstake',
    outputs: [
      {
        name: 'lockup',
        internalType: 'struct IVotingEscrowBase.Lockup',
        type: 'tuple',
        components: [
          { name: 'amount', internalType: 'uint128', type: 'uint128' },
          { name: 'end', internalType: 'uint128', type: 'uint128' },
          { name: 'votes', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// VotingEscrowNft
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const votingEscrowNftAbi = [
  {
    type: 'constructor',
    inputs: [
      { name: '_baseToken', internalType: 'contract IERC20', type: 'address' },
      { name: '_factory', internalType: 'contract Ownable', type: 'address' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'error',
    inputs: [{ name: 'target', internalType: 'address', type: 'address' }],
    name: 'AddressEmptyCode',
  },
  {
    type: 'error',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'AddressInsufficientBalance',
  },
  { type: 'error', inputs: [], name: 'AlreadyInitialized' },
  { type: 'error', inputs: [], name: 'ERC721EnumerableForbiddenBatchMint' },
  {
    type: 'error',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'owner', internalType: 'address', type: 'address' },
    ],
    name: 'ERC721IncorrectOwner',
  },
  {
    type: 'error',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC721InsufficientApproval',
  },
  {
    type: 'error',
    inputs: [{ name: 'approver', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidApprover',
  },
  {
    type: 'error',
    inputs: [{ name: 'operator', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidOperator',
  },
  {
    type: 'error',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidOwner',
  },
  {
    type: 'error',
    inputs: [{ name: 'receiver', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidReceiver',
  },
  {
    type: 'error',
    inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidSender',
  },
  {
    type: 'error',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ERC721NonexistentToken',
  },
  {
    type: 'error',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'index', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC721OutOfBoundsIndex',
  },
  { type: 'error', inputs: [], name: 'FailedInnerCall' },
  {
    type: 'error',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'OwnableUnauthorizedAccount',
  },
  { type: 'error', inputs: [], name: 'PermalockNotenabled' },
  {
    type: 'error',
    inputs: [{ name: 'token', internalType: 'address', type: 'address' }],
    name: 'SafeERC20FailedOperation',
  },
  {
    type: 'error',
    inputs: [
      { name: 'tokenId1', internalType: 'uint256', type: 'uint256' },
      { name: 'tokenId2', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'TokenIdsHaveDifferentOwners',
  },
  {
    type: 'error',
    inputs: [{ name: 'expiry', internalType: 'uint256', type: 'uint256' }],
    name: 'VotesExpiredSignature',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'approved',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'approved', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'ApprovalForAll',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'delegator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'fromDelegate',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'toDelegate',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'DelegateChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'delegate',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'previousVotes',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'newVotes',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'DelegateVotesChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'nftImage',
        internalType: 'contract INftImage',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'SetImage',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      { name: 'state', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'TogglePermalockAllowed',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Transfer',
  },
  {
    type: 'function',
    inputs: [],
    name: 'CLOCK_MODE',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'baseToken',
    outputs: [{ name: '', internalType: 'contract IERC20', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'checkAuthorized',
    outputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'clock',
    outputs: [{ name: '', internalType: 'uint48', type: 'uint48' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'delegatee', internalType: 'address', type: 'address' }],
    name: 'delegate',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'delegatee', internalType: 'address', type: 'address' },
      { name: 'nonce', internalType: 'uint256', type: 'uint256' },
      { name: 'expiry', internalType: 'uint256', type: 'uint256' },
      { name: 'v', internalType: 'uint8', type: 'uint8' },
      { name: 'r', internalType: 'bytes32', type: 'bytes32' },
      { name: 's', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'delegateBySig',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'delegates',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'disablePermalock',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'enablePermalock',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'duration', internalType: 'uint256', type: 'uint256' },
      { name: 'amount', internalType: 'uint128', type: 'uint128' },
    ],
    name: 'extend',
    outputs: [
      {
        name: 'newLockup',
        internalType: 'struct IVotingEscrowBase.Lockup',
        type: 'tuple',
        components: [
          { name: 'amount', internalType: 'uint128', type: 'uint128' },
          { name: 'end', internalType: 'uint128', type: 'uint128' },
          { name: 'votes', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'extendPermalock',
    outputs: [
      {
        name: 'newLockup',
        internalType: 'struct IVotingEscrowBase.Lockup',
        type: 'tuple',
        components: [
          { name: 'amount', internalType: 'uint128', type: 'uint128' },
          { name: 'end', internalType: 'uint128', type: 'uint128' },
          { name: 'votes', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'factory',
    outputs: [{ name: '', internalType: 'contract Ownable', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'getApproved',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'timepoint', internalType: 'uint256', type: 'uint256' }],
    name: 'getPastTotalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'timepoint', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'getPastVotes',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'getTokenIdInfo',
    outputs: [
      {
        name: 'lockup',
        internalType: 'struct IVotingEscrowBase.Lockup',
        type: 'tuple',
        components: [
          { name: 'amount', internalType: 'uint128', type: 'uint128' },
          { name: 'end', internalType: 'uint128', type: 'uint128' },
          { name: 'votes', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'getVotes',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_ve', internalType: 'contract IVotingEscrow', type: 'address' },
    ],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'operator', internalType: 'address', type: 'address' },
    ],
    name: 'isApprovedForAll',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'tokenIds', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    name: 'merge',
    outputs: [
      {
        name: 'newLockup',
        internalType: 'struct IVotingEscrowBase.Lockup',
        type: 'tuple',
        components: [
          { name: 'amount', internalType: 'uint128', type: 'uint128' },
          { name: 'end', internalType: 'uint128', type: 'uint128' },
          { name: 'votes', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'data', internalType: 'bytes[]', type: 'bytes[]' }],
    name: 'multicall',
    outputs: [{ name: 'results', internalType: 'bytes[]', type: 'bytes[]' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'nextTokenId',
    outputs: [
      { name: 'nextTokenId_', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'nftImage',
    outputs: [
      { name: '', internalType: 'contract INftImage', type: 'address' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ownerOf',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'parameters',
    outputs: [
      { name: 'yearBase', internalType: 'uint256', type: 'uint256' },
      { name: 'startTimestamp', internalType: 'uint256', type: 'uint256' },
      { name: 'minStakeDuration', internalType: 'uint256', type: 'uint256' },
      { name: 'maxStakeDuration', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'permalockAllowed',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'amount', internalType: 'uint128', type: 'uint128' },
      { name: 'duration', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'previewVotes',
    outputs: [
      {
        name: 'lockup',
        internalType: 'struct IVotingEscrowBase.Lockup',
        type: 'tuple',
        components: [
          { name: 'amount', internalType: 'uint128', type: 'uint128' },
          { name: 'end', internalType: 'uint128', type: 'uint128' },
          { name: 'votes', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'approved', internalType: 'bool', type: 'bool' },
    ],
    name: 'setApprovalForAll',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: '_nftImage',
        internalType: 'contract INftImage',
        type: 'address',
      },
    ],
    name: 'setImage',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'splitProportionD18', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'split',
    outputs: [
      { name: 'newTokenId', internalType: 'uint256', type: 'uint256' },
      {
        name: 'lockup1',
        internalType: 'struct IVotingEscrowBase.Lockup',
        type: 'tuple',
        components: [
          { name: 'amount', internalType: 'uint128', type: 'uint128' },
          { name: 'end', internalType: 'uint128', type: 'uint128' },
          { name: 'votes', internalType: 'uint256', type: 'uint256' },
        ],
      },
      {
        name: 'lockup2',
        internalType: 'struct IVotingEscrowBase.Lockup',
        type: 'tuple',
        components: [
          { name: 'amount', internalType: 'uint128', type: 'uint128' },
          { name: 'end', internalType: 'uint128', type: 'uint128' },
          { name: 'votes', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'duration', internalType: 'uint256', type: 'uint256' },
      { name: 'amount', internalType: 'uint128', type: 'uint128' },
    ],
    name: 'stake',
    outputs: [
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      {
        name: 'lockup',
        internalType: 'struct IVotingEscrowBase.Lockup',
        type: 'tuple',
        components: [
          { name: 'amount', internalType: 'uint128', type: 'uint128' },
          { name: 'end', internalType: 'uint128', type: 'uint128' },
          { name: 'votes', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'duration', internalType: 'uint256', type: 'uint256' },
      { name: 'amount', internalType: 'uint128', type: 'uint128' },
    ],
    name: 'stakeToSender',
    outputs: [
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      {
        name: 'lockup',
        internalType: 'struct IVotingEscrowBase.Lockup',
        type: 'tuple',
        components: [
          { name: 'amount', internalType: 'uint128', type: 'uint128' },
          { name: 'end', internalType: 'uint128', type: 'uint128' },
          { name: 'votes', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'index', internalType: 'uint256', type: 'uint256' }],
    name: 'tokenByIndex',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'tokenIdsOfOwner',
    outputs: [
      { name: 'tokenIds', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'index', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'tokenOfOwnerByIndex',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'ownerToCheck', internalType: 'address', type: 'address' },
      { name: 'index', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'tokenOfOwnerByIndexExists',
    outputs: [{ name: 'exists', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'tokenURI',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'baseTokenRecipient', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'unstake',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'unstakeToSender',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 've',
    outputs: [
      { name: '', internalType: 'contract IVotingEscrow', type: 'address' },
    ],
    stateMutability: 'view',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// WBTC
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const wbtcAbi = [
  { type: 'constructor', inputs: [], stateMutability: 'nonpayable' },
  {
    type: 'error',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'allowance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC20InsufficientAllowance',
  },
  {
    type: 'error',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'balance', internalType: 'uint256', type: 'uint256' },
      { name: 'needed', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC20InsufficientBalance',
  },
  {
    type: 'error',
    inputs: [{ name: 'approver', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidApprover',
  },
  {
    type: 'error',
    inputs: [{ name: 'receiver', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidReceiver',
  },
  {
    type: 'error',
    inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidSender',
  },
  {
    type: 'error',
    inputs: [{ name: 'spender', internalType: 'address', type: 'address' }],
    name: 'ERC20InvalidSpender',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'spender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Transfer',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'mint',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
] as const
