// app.js
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');
const task = require('./models/model.js');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
// Replace the following with your Atlas connection string                                                                                                                                        
const connectionUrl = "mongodb://localhost:27017/expressExample?retryWrites=true&w=majority";
mongoose.connect(connectionUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

//import routes
const routes = require('./routes/routes.js');

//register the route
routes(app);

app.listen(port, () => {
    console.log(`RESTful API server running on ${port}`);
});
