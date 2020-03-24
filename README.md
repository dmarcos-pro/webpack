- node v6.17.0
- npm v5.6.0
- webpack v4.42.0

# How to install

Create package.json file
```
npm init
```

Install all dependencies
```
npm i -D autoprefixer@9.7.4 babel-core@6.26.3 babel-loader@7.1.5 babel-plugin-syntax-dynamic-import@6.18.0 babel-preset-env@1.7.0 css-loader@3.3.0 mini-css-extract-plugin@0.9.0 node-sass@4.13.1 optimize-css-assets-webpack-plugin@5.0.3 postcss-loader@3.0.0 sass-lint@1.13.1 sass-lint-webpack@1.0.2 sass-loader@7.3.1 style-loader@1.1.3 uglifyjs-webpack-plugin@1.3.0 url-loader@4.0.0 webpack@4.42.0 webpack-cli@3.3.11
```

Change scripts in package.json file
```
"scripts": {
    "dev": "NODE_ENV=dev webpack --mode development",
    "prod": "webpack --mode production"
},
```

Launch Webpack - mode dev
```
npm run dev
```

Launch Webpack - mode prod (minify code)
```
npm run prod
```