//con " Ctrl+Shift+V " se ve de manera mucho más bonita :)

## babel

## PASO 1

Una vez creada la carpeta del proyecto, acceder y ejecutar:

`npm init -y`

creará el package.json

## PASO 2

`npm i -D @babel/preset-env @babel/cli @babel/core @babel/polyfill$ npm i core-js`

## PASO 3

`npm i -D webpack webpack-cli babel-loader`

crear carpeta “src” con un archivo index.js en su interior

## PASO 4

`npx babel src/ -d dist/main/`

## PASO 5

crear babel.config.json
y en su interior poner

```javascript
{
"presets": [
[
"@babel/env",
{
"targets": {
"edge": "17",
"firefox": "60",
"chrome": "67",
"safari": "11.1"
},
"useBuiltIns": "usage",
"corejs": "3.6.4",
"forceAllTransforms": true
}
]
]
}

```

## PASO 6

`npx babel -d dist/ src/ --config-file ./babel.config.json`

## webpack

## paso 1

`npm i -D webpack webpack-cli babel-loader`

## paso 2

`npx webpack --module-bind 'js=babel-loader'`

## paso 3

Crea un archivo llamado webpack.config.js en la carpeta del proyecto
y agregar el siguiente codigo:

```javascript
//webpack.config.js
const path = require("path");
const config = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
    ],
  },
  resolve: {
    extensions: ["*", ".js"],
  },
};
module.exports = function (env, argv) {
  if (argv.mode === "development") {
    // la siguiente configuración genera "mapas"
    // de código desde nuestro código fuente
    // al código generado por Webpack
    // permite depurar el código usando la misma fuente
    config.devtool = "eval-source-map";
  }
};
```

## paso 4

`npx webpack`

generará un archivo main.js

## paso 5

`npx webpack --mode development`

## webpack dev-server

## PASO 1

`npm i -D webpack-dev-server`

## PASO 2

una vez instalado, editar el webpack.config.js y agregar:

```javascript
module.exports = {
//...
devServer: {
contentBase: path.join(__dirname, 'dist'),
compress: true,
port: 9000
}
};
```

## PASO 3

crear html dentro de la carpeta dist en importar el archivo main.js (como cualquier otro js, script src)

ej:

```html
<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,
initial-scale=1.0">
<title>Document</title>
</head>
<body>
<script src="./main.js"></script>
</body>
</html>
```


## PASO 4

agregar :

```javascript
"dev-server": "webpack-dev-server --mode development"
```

dentro de scripts en el archivo package.json
