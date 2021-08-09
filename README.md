# React Native Assessment Repo

This is the base project used for G2i's CLI test on React Native

# Dependencies

Requires:
- Node (minimum LTS version)
- npm
- yarn


# How to run

[Check the official docs if you have issues](https://reactnative.dev/docs/environment-setup)

Install dependencies: `yarn`

for iOS:

Install pods: `cd ios && pod install`
Build iOS: `yarn ios`

for Android:

Build Android: `yarn android`

# Code guidelines

The project uses ESLINT and Prettier to have consistency. We expect every change to abide to these two tools.

# FAQ

### Issues building on Apple Sillicon (Mac m1)

Check [this post](https://khushwanttanwar.medium.com/xcode-12-compilation-errors-while-running-with-ios-14-simulators-5731c91326e9) out. In summary make sure to exclude Arm64 from the project architecture.

