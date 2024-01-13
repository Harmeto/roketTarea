const express = require('express');
const http = require('http');
const path = require('path');
const client = require("./database/db.js");
const arbolRouter = require('./routes/arboles.routes.js');

const app = express();

const port = process.env.PORT || 3001;

// middlewares 
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// angular app location
app.use(express.static(__dirname + '/front/dist/front/browser'));

// api
app.use('/api', arbolRouter);

// front
app.get('/*', (req, res) => res.sendFile(path.join(__dirname)));

// ruta ingresada no existe 
app.use((req, res, next) => {
  const error = new Error('Ruta No existe');
  error.status = 404;
  next(error);
});


const server = http.createServer(app);

server.listen(port, () => console.log(`App running on: http://localhost:${port}`));