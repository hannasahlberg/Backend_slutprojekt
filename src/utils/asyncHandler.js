//Asynchandler används i controller-lagret för att fånga eventuella fel i asynkrona funktioner och skicka dem vidare till error-handling middleware. 
export const asyncHandler = (fn) => {
    return (req, res, next) => {
      Promise.resolve(fn(req, res, next)).catch(next);
    };
  };