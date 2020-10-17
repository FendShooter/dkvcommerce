const express = require('express');
const morgan = require('morgan');
const errorHandler = require('./middlewares/errorHandler');
const categoryRouter = require('./routers/categoriesRouters');
const { CONNEC_TDB } = require('./DB/mongoose');
const productsRouters = require('./routers/productsRouters');
const userRouters = require('./routers/userRouters');
const cors = require('cors');
CONNEC_TDB()
const app = express()

app.use(morgan("dev"))
app.use(express.json())
app.use(cors({ origin: 'https://app.netlify.com/' }));
app.use('/categories', categoryRouter)
app.use('/products', productsRouters)
app.use('/users', userRouters)
app.use(errorHandler)

const port = process.env.PORT || 5000;

app.listen(port, console.log(`Server running on port ${port}`))

