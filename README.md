# wallaby-ts-jest-mock
Testing Wallaby.js with TypeScript and jest.mock

The `jest.mock` calls need to be hoisted above the require calls to make them work. This is done by `babel-preset-jest` via `ts-jest`. With wallaby this transform is apparently not applied.

## Usage/Reproduction

### Setup

Run `yarn` or `npm install`.

### Execute tests

#### On the command line

Run `yarn test` or `npm test`.

The one test should be succesful.

#### With Wallaby.js

Start wallaby in the IDE of your choice.

~~The test will probably fail.~~ Fixed with #1
