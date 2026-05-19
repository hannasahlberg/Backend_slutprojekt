//AppError hanterar alla anpassade fel som kan uppstå i applikationen.
// Den tar emot ett felmeddelande och en statuskod, som sedan kan användas i error-handling middleware.

export class AppError extends Error {
    constructor(message, statusCode) {
      super(message);
      this.statusCode = statusCode;
    }
  }