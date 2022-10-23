const express = require('express');
const colors = require('colors')
const dotenv = require('dotenv').config()
const cors = require("cors")
const connectDB = require('./config/db')
const { errorHandler } = require('./middlewares/errorMiddleware')
const { logger } = require('./middlewares/logger')
const home = require('./routes/home');
const Outlets = require('./routes/outlets')
const AdminOutlets = require('./routes/adminOutlet')
const Foods = require('./routes/foods')
const OutletFoods = require('./routes/outletFoods')
const user = require('./routes/users')
const signin = require('./routes/signin')
const order = require('./routes/orders')//Added by Sachini - 04/10/2022
const wishlist = require("./routes/wishlists")
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');//Added by Sachini - 15/10/2022
const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger);

//connect to localhost DB
connectDB()

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended : false}))

app.use("/",home);
app.use("/api/outlets", Outlets);
app.use("/api/admin/outlets", AdminOutlets);
app.use("/api/foods", Foods);
app.use("/api/outletfoods", OutletFoods);
app.use("/api/users", user);
app.use("/api/signin", signin);
app.use("/api/orders", order);//Added by Sachini - 04/10/2022
app.use("/api/wishlists", wishlist);

app.use(errorHandler)
app.use(
    '/api-docs',
    swaggerUi.serve, 
    swaggerUi.setup(swaggerDocument)
  );
app.listen(PORT, () => {
    console.log(`Strated listening on port : ${PORT}`);
});