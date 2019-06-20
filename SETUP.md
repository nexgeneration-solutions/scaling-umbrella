# Setup

Follow instructions for React Native CLI Quickstart

See [docs](https://facebook.github.io/react-native/docs/getting-started.html)

### Run Project
---
  Run instructions for iOS:
  * react-native run-ios

  Or 
  * Open ios/ScalingUmbrella.xcworkspace in Xcode
  * Hit the Run button

  Run instructions for Android:

  * Have an Android emulator running (quickest way to get started), or a device connected.
  * react-native run-android

### Errors resolved
---

###### Error: EMFILE: too many open files, watch
```
2019-06-20 22:41 node[79536] (FSEvents.framework) FSEventStreamStart: register_with_server: ERROR: f2d_register_rpc() => (null) (-22)
events.js:173
      throw er; // Unhandled 'error' event
      ^

Error: EMFILE: too many open files, watch
    at FSEvent.FSWatcher._handle.onchange (internal/fs/watchers.js:125:28)
Emitted 'error' event at:
    at NodeWatcher.checkedEmitError (/Users/ettysekhon/code/src/github.com/scaling-umbrella/node_modules/sane/src/node_watcher.js:143:12)
    at FSWatcher.emit (events.js:196:13)
    at FSEvent.FSWatcher._handle.onchange (internal/fs/watchers.js:131:12)
Process terminated. Press <enter> to close the window
```

Solution:

https://github.com/facebook/create-react-app/issues/4540

```
xcode-select --install
```