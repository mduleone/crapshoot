# C.R.A.P.S.H.O.O.T.

> Create React App Plus - Super Handy, Obviously Opinionated, Tasty!

This is an opinionated approach to make starting a React/Redux Web Application easier, built on top of an unejected instance of [Create React App](https://github.com/facebookincubator/create-react-app). In addition to Redux, it comes with a bunch of other goodies baked in!

## How does it work?

It's Create React App, plus a few things in place already. You can get up and building very quickly. It's not a CLI tool like Create React App, but there's not much more to it. The below assumes you're using `yarn`, but you can use the corresponding `npm` commands instead.

1. Fork this project and check it out
  a. Alternatively, follow [these instructions](https://help.github.com/articles/duplicating-a-repository/) to duplicate this repository to pick up where this left off, preserve the git history, and to start multiple projects with this as a base.
2. Run `yarn` to install the dependencies
3. That's it! Run `yarn start` to start the development server and start building!

## So, I can just start building like this is a Create React App project?

Yup! At the heart of this is an unejected Create React App instance, you can refer to the [original readme from when this was instantiated](./CRA_README.md) or the [latest Create React App readme](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md) for how to use the built-in scripts.

## What's inside?

This comes with a lot of things baked in and in place already. There will eventually be a code-tour doc that explains what and where everything is to make getting up and running easier, but for now... what's baked in is below

### Tools baked in

- [Redux](http://redux.js.org/)
    - Modules follow a pattern similar to [Redux ducks](https://github.com/erikras/ducks-modular-redux), and each should have the same structure and be in its own directory inside [`src/modules`](./src/modules)
        - Actions live in `index.js`, exported individually
        - Sagas live in `sagas.js`, exported as an array of effects
        - Selectors live in `selectors.js`, exported individually
        - Reducer live in `reducer.js`, exported as default
    - Reducers are combined in [`src/config/reducers.js`](./src/config/reducers.js)
    - Reducers are mounted in [`src/config/store.js`](./src/config/store.js)
    - Store is initialized and mounted in [`src/index.js`](./src/index.js)
- [Redux Saga](https://redux-saga.js.org/)
    - Sagas are combined in [`src/config/sagas.js`](./src/config/sagas.js)
    - Sagas are mounted in [`src/config/store.js`](./src/config/store.js)
- [React Router](https://reacttraining.com/react-router/)
    - Routes are defined in [`src/config/routes.js`](./src/config/routes.js)
    - Routes are mounted in [`src/index.js`](./src/index.js)
    - Uses `BrowserHistory`
- [SASS](http://sass-lang.com/)
    - Add your styles in `.scss` files, and import them in to components from `.css` files with the same name in the same directory.
        - Check out how the [main page imports styles](./src/pages/app.js#L8)
        - `.css` files are excluded from source control and auto-generated in the build process.
        - For more information on how this is accomplished, see [Facebook's guide to set it up](./CRA_README.md#adding-a-css-preprocessor-sass-less-etc)
- [Material UI](http://www.material-ui.com/#/)
    - Material UI is mounted in [`src/index.js`](./src/index.js)
- [Express](https://expressjs.com/)
    - Because we are using React Router with `BrowserHistory`, we need to make sure to serve the right static files regardless of what path is used to access the app. We've built a simple server to handle this.
    - See [`server`](./server)

### Prebuilt examples

- Three different pages, in the [`src/pages`](./src/pages) directory
    - Default Route: `/` in [`src/pages/app.js`](./src/pages/app.js)
    - Todo+Gifs: `/todo` in [`src/pages/todo.js`](./src/pages/todo.js)
    - A route-not-defined fallback in [`src/pages/not-found.js`](./src/pages/not-found.js)
- A fully tested example Redux module that powers Todo+Gifs
    - Module: [`src/modules/todo`](./src/modules/todo)
    - API: [`src/api/todo.js`](./src/api/todo.js)
    - Tests
        - Module: [`src/tests/modules/todo`](./src/tests/modules/todo)
        - API: [`src/tests/api/todo.test.js`](./src/tests/api/todo.test.js)
- A sample empty module directory to demonstrate the structure in [`src/modules/_blank-module`](./src/modules/_blank-module)

## Deploying

Because this uses React Router with `BrowserHistory` by default, deploying this project is not as simple as deploying a standard Create React App straight out of the box. That is, it will still work if users navigate directly to the root of your app (by default, this is `/crapshoot`, see where the routes are mounted in [`src/index.js`](./src/index.js) and the `homepage` property in [`package.json`](./package.json) to update the root), but attempting to navigate to a route other than the root will not work without some form of server-side intervention to always serve the proper files.

To that end, there is a simple Express server that handles this for us built in `server`, and we updated the `build` script to handle moving the server and other necessary files to the `build` directory for us.

```diff
{
  "scripts": {
    "build-css": "node-sass-chokidar src/ -o src/",
    "watch-css": "npm run build-css && node-sass-chokidar src/ -o src/ --watch --recursive",
    "start-js": "react-scripts start",
    "start": "npm-run-all -p watch-css start-js",
-   "build": "npm run build-css && react-scripts build",
+   "build": "npm run build-css && react-scripts build && cp -R ./server ./.env ./build",
    "test": "react-scripts test --env=jsdom",
    "eject": "react-scripts eject"
  }
}
```

### .env

The server needs to read some values from the environment in order to properly build and serve things. Make sure to copy [`.env.dist`](./.env.dist) to a `.env` file, and to fill in the appropriate values.

#### Tips and default/suggested values

- `NODE_ENV`: If you're running this in production, set `NODE_ENV` to `production`
- `PORT`: If no `PORT` is provided, the server defaults to port `3001`

### Running the server

On your host, now that you have appropriate environment variables in place and have successfully run `yarn build`, the `build` directory is ready to be deployed! Navigate into the `build` directory and run `node server` to get it started, and that's it! Navigate to `your-domain.com:PORT/your-root-route` to see your app. We recommend using [`forever`](https://github.com/foreverjs/forever) to keep your application running.

## License

[MIT](./LICENSE)