//Errorhandler som fångar upp alla fel som skickas vidare från controllers via next(err).
//Den skickar tillbaka en JSON med statuskod och felmeddelande. Om inget specifikt felmeddelande finns, skickas ett generiskt "Internt serverfel".
export const errorHandler = (err, req, res, next) => {
    const statusCode = err.statusCode || 500;
  
    res.status(statusCode).json({
      error: err.message || 'Internt serverfel',
    });
  };