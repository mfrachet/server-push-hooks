[![Build Status](https://travis-ci.org/mfrachet/use-socketio.svg?branch=master)](https://travis-ci.org/mfrachet/use-socketio)
[![Coverage Status](https://coveralls.io/repos/github/mfrachet/use-socketio/badge.svg?branch=master)](https://coveralls.io/github/mf

React hooks for handling server-push technologies:

- [use-socketio](./packages/use-socketio/README.md) for [Socket.io](https://socket.io/)
- [use-server-sent-events](./packages/use-server-sent-events/README.md) for [Server Sent Events](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events)

## Running samples

To run samples locally, you can:

```sh
$ git clone https://github.com/mfrachet/use-socketio
$ cd use-socketio
$ npm install # install lerna and dependencies at the root
$ npm run bootstrap # install lerna packages dependencies
$ npm run build # build the lerna packages
$ npm start # start the web application
$ npm start:test-server # start the backend services in another terminal
$ npm run e2e # run E2E tests of the projects in another terminal
```
