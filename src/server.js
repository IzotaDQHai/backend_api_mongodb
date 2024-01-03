import express from "express";
import configViewEngine from "./configs/viewEngine";
import inintWebRoute from './route/web';
import inintUsersRoute from './route/users';
require('dotenv').config()
import connect from './database/database.js';
import checkToken from "./authentication/auth";

const app = express()
app.use(checkToken)
const port = process.env.PORT || 8000;
const bodyParser = require('body-parser');
app.use(bodyParser.json());

configViewEngine(app);
inintWebRoute(app);
inintUsersRoute(app);

app.listen(port, async () => {
  await connect()
  console.log(`Example app listening on port ${port}`)
})