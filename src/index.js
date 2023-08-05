const express = require('express')

const app = express();
const cors = require('cors')
const login = require('./routes/login');
const customer = require('./routes/customer');
const menu = require("./routes/menu");
const delivery = require("./routes/delivery");
const orderdb = require("./routes/orderdb");
const cart = require("./routes/cart");
const employee = require("./routes/employee");

//Settings
const ipAddress = '10.0.13.229'; // Set your desired IP address here
//Middlewares
app.use(express.json());
app.use(cors());
const port =3000;
//Routes
app.use("/login", login);
app.use("/customer", customer);
app.use("/menu", menu);
app.use("/orderdb", orderdb);
app.use("/delivery", delivery);
app.use("/cart", cart);
app.use("/employee",employee);

//Starting the server
app.listen(5020,ipAddress, () => {
    console.log('Server running on port 5020');
});