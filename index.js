const express = require('express');
const app = express();
const cors = require('cors');
// const multer = require('multer');
// const upload = multer();

// Load all environment variables
require('dotenv').config();

// Connect DB
require('./app/db/db');

// Routers
const currencyRouter = require('./app/router/currency_route');
const ruleRouter = require('./app/router/rule_route');
const announcementRouter = require('./app/router/announcement_route');
const userRouter = require('./app/router/user_route');
const stockRouter = require('./app/router/stock_route');
const bettingRouter = require('./app/router/betting_route');
const gameRouter = require('./app/router/game_route');
const adminRouter = require('./app/router/admin_route');
const stockCrawlRouter = require('./app/router/stockCrawl');


const bodyParser = require('body-parser');
const port = process.env.PORT || 5005;
app.use(bodyParser.json());
// app.use(upload.array());

var device = require('express-device');
app.use(device.capture());

//CORS configuration
const corsOptions = {
    origin: '*',
    //Expose the token on the client side in the response
    exposedHeaders: ['token'],
    withCredentials: true
};

//CORS middleware
app.use(cors(corsOptions));

// Routers
app.use(currencyRouter);
app.use(ruleRouter);
app.use(announcementRouter);
app.use(userRouter);
app.use(stockRouter);
app.use(bettingRouter);
app.use(gameRouter);
app.use(adminRouter);
app.use(stockCrawlRouter);

app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});

module.exports = app