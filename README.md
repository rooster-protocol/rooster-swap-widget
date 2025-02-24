# Rooster Swap Widget

This widget can be inserted as a React component inside of an existing dapp.

## Install

To get started with the component:
yarn: `yarn add @rooster-protocol/rooster-swap`,
npm: `npm i @rooster-protocol/rooster-swap`

Note that React and Wagmi are peer dependencies so they must be installed as well. (Wagmi has it's own peer dependencies...check the [Wagmi docs]('https://wagmi.sh/react/getting-started').)

## Get Started

The swap widget requires a few things:

- A Wagmi provider
- A ReactQuery client
- A function (e.g. openConnectModal) to initiate the wallet connection process.

This repository also includes [sample code](https://github.com/rooster-protocol/rooster-swap-widget/blob/main/src/App.tsx) to show how to implement these and pass them to the widget.

## Other Parameters

The swap widget can also be customized with the following:

- A callback function to initiate toast on swaps or errors
