# react-redux-webpack-starter-kit
A pre-configured react, redux, webpacked starter project

## Installation
```bash
$ git clone git@github.com:rgehan/react-redux-webpack-starter-kit.git
$ cd react-redux-webpack-starter-kit
$ npm install # or yarn install
```

## Usage
In order to launch the `webpack-dev-server`, simply run the `start` script.
```bash
npm start # or yarn start
```

In order to build the bundle, run the `build` script.
```bash
npm run build # or yarn build
```

## File Structure
```
.
├── dist               # Build directory
├── public             # Dev-server root folder
├── src
│   ├── actions        # Redux action creators
│   ├── components     # React components
│   ├── constants      # App constants (action types)
│   ├── containers     # React containers
│   ├── lib            # Various utilities
│   ├── reducers       # All reducers files
│   ├── styles         # SASS files
│   └── index.js       # Entry point
│
└── webpack.config.js  # Webpack configuration file
```
