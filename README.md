[![Build Status](https://travis-ci.org/mfrachet/use-socketio.svg?branch=master)](https://travis-ci.org/mfrachet/use-socketio)

React hooks for handling server-push technologies:

- [use-socketio](./packages/use-socketio) for [Socket.io](https://socket.io/)
- [use-server-sent-events](./packages/use-server-sent-events) for [Server Sent Events](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events)

## Running samples

To run samples locally, you can:

```sh
$ git clone https://github.com/mfrachet/server-push-hooks
$ cd server-push-hooks
$ npm install # install lerna and dependencies at the root
$ npm run bootstrap # install lerna packages dependencies
$ npm run build # build the lerna packages
$ npm start # start the web application
$ npm start:test-server # start the backend services in another terminal
$ npm run e2e # run E2E tests of the projects in another terminal
```
