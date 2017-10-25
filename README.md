# README #

### This is the repository for CX-Ray survey ui###
## This repository is an experiment, with functional principles in react using RECOMPOSE enhancers. ##

### Notable Technologies ###

* __React__ [https://facebook.github.io/react/]
* __Redux__ (async-await / thunk) [http://redux.js.org/]
* __Recompose__ (https://github.com/acdlite/recompose]
* __Sass__ (.scss) [http://sass-lang.com/]
* __Material UI__ [https://material-ui-next.com/]
* __Jest__ [https://facebook.github.io/jest/]
* __Enzyme__ [https://github.com/airbnb/enzyme]
* __Axios__ [https://github.com/mzabriskie/axios]
* __Webpack__ [https://webpack.js.org/]

### React - Redux ###

![alt text](https://cdn-images-1.medium.com/max/1600/1*HdW9EAF92r__hgFINFGYSw.png)

### Setup ###

* ```npm i```
* ```npm start``` this boots up a webpack develompent server so no backend is required for development.

### Build ###

* ```npm i```
* ```npm run build``` production build
* ```npm run build-dev``` development build

### Testing ###

Each unit should have its __\_\_test\_\___ folder. __Jest__ is used as a test environment and __Enzyme__ as a __React__ assertion library.

## Test related commands ##

* ```npm test```: run existing tests
* ```npm run test:watch```: watch tests and related files continously for changes and rerun tests. 
* ```npm run test:coverage```: run existing tests, collect and show coverage info at the end.

## Useful Commands ##

__use like:__ ```npm run <command>```

* __start__: start a local devserver on http://localhost
* __clean__: remove build folder
* __build__: build files in production mode
* __build-dev__: build files in development mode
* __test__: run all existing unit tests
* __test:watch__: watch tests and test related files for change and only rerun the changed ones
* __test:coverage__: run all existing unit tests, and show coverage info at the end
* __lint__: check code for correct linting (airbnb and some custom rules in .eslintrc, tests are ignored),

For now only the development build exists, this includes some development tools. 
__Pushing will trigger the husky prepush hook which is going to run linting and tests. If any error is present, the push wont happen.__
