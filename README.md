# FaceFinder API

A Node.js server for [FaceFinder](https://github.com/m-zaremba/FaceFinder) app.

## Requirements

* [Node.js](https://nodejs.org/en/) installed.
* [Clarifai](https://www.clarifai.com/) API key (available for free).

## Installation

Using the console clone repository and run npm install

```
git clone https://github.com/m-zaremba/FaceFinderApi
cd FaceFinderApi
npm install
```

## Starting the server

After installation you must add your own Clarifai API key in the controllers/image.js file.

```
const app = new Clarifai.App({
  apiKey: "Your API key here"
});
```

Also be sure to use [postgreSQL](https://www.postgresql.org/) instead of mySQL.

Then start the server with:

```
npm start
```

## Comments

For development you can use nodemon as start script - simply change package.json file:

```
"scripts": {
    "start": "nodemon server.js"
  },
```

