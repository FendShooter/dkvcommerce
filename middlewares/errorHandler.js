const errorResponse = require("../utils/errorResponse");


const errorHandler = (err, req, res, next) => {
     console.log(err.stack);
     
     if (err.name === 'CastError') {
          const message = `Product not found`
          err = new errorResponse(message, 404)
}
     if (err.name === 'ValidationError') {
       const message = Object.values(err.errors).map(e => e.message);
       err = new errorResponse(message, 404);
     }
     res.status(err.statusCode||500).send({error:err.message || `Server error`})
}

module.exports = errorHandler;