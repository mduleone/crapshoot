# C.R.A.P.S.H.O.O.T.

> Create React App Plus - Super Handy, Obviously Opinionated, Tasty!

This is an opinionated approach to building a React/Redux Web Application, with an unejected instance of [Create React App](https://github.com/facebookincubator/create-react-app) as its base. In addition to Redux, it comes with a bunch of other goodies baked in!

## How does it work?

It's Create React App, plus a few things put in place already. You can get up and building very quickly. It's not a CLI tool like Create React App, but there's not much more to it. The below assumes you're using `yarn`, but you can use the corresponding `npm` commands instead.

1. Fork this project
2. Run `yarn` to install the dependencies
3. That's it! Run `yarn start` to start the development server and start building!

## So, I can just start building like this is a Create React App project?

That's right! At the heart of this is an unejected Create React App instance, you can refer to the [latest Create React App readme](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md) for how to use the built-in scripts.

## What's inside?

This comes with a lot of things baked in and in place already. There will eventually be a code-tour doc that explains what and where everything is to make getting up and running easier, but for now... what's baked in is below

 - Redux
     - Reducers are combined in [`src/config/reducers.js`](./src/config/reducers.js)
     - Reducers are mounted in [`src/config/store.js`](./src/config/store.js)
 - [Redux Saga](https://redux-saga.js.org/)
     - Sagas are combined in [`src/config/sagas.js`](./src/config/sagas.js)
     - Sagas are mounted in [`src/config/store.js`](./src/config/store.js)
 - [React Router](https://reacttraining.com/react-router/)
     - Routes are defined in [`src/config/routes.js`](./src/config/routes.js)
     - Routes are mounted in [`src/index.js`](./src/index.js)
 - [Material UI](http://www.material-ui.com/#/)
 - Two different pages
 - A fully tested example Redux module that powers the Todo+Gifs page in [`src/modules/todo`](./src/modules/todo)
 - A sample empty module directory to demonstrate the structure in [`src/modules/_blank-module`](./src/modules/_blank-module)

## License

[MIT](./LICENSE)