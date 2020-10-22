<br />
<div align="center">
  <h1>Chargetrip examples</h1>
  <p><h3 align="center">React Native station map demo with the Chargetrip Tile Service</h3></p>
  <a href="https://chargetrip.com">Website</a>
  <span>⚡️</span>
  <a href="https://docs.chargetrip.com/">Docs</a>
  <span>⚡</span>
  <a href="https://chargetrip.github.io/examples/">Examples</a>
</div>
<hr>

This repository contains a React Native demo application with a simple station map using Mapbox. This application belongs to the following article: [Chargetrip Tile Service with React Native and Mapbox](https://medium.com/p/228dae36a5). This article explains how you can use the Chargetrip Tile Service in a React Native application. Together with the instructions in this README you should be able to run this demo.

If something is not explained or you are having troubles running this application, please let us know by opening an issue or contacting us in [Spectrum](https://spectrum.chat/chargetrip?tab=posts) chat. We improve our documentation continuously, and your feedback is valuable.


## Getting started
### Prerequisites
- yarn
- node
- Watchman
- XCode _ios_
- Android Studio9s _android_

For a detailed guide regarding running a React Native app check the [official documentation](https://facebook.github.io/react-native/docs/getting-started.html).

### Installation and local development
Install all the dependencies:

```
$ yarn && cd ios && pod install && cd ..
```

Run the Metro bundler:

```
$ yarn start
```

You can now build the app for tusing `yarn ios` or `yarn android`.

### Useful links

1. Chargetrip GraphAPI [docs](https://docs.chargetrip.com/)
2. Chargetrip GraphAPI [playground](https://playground.chargetrip.com/)
3. Chargetrip GraphAPI schema [information](https://voyager.chargetrip.com/).
