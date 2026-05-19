import express from 'express';
import router from './routes/appointmentRoutes.js';
import { errorHandler } from './middleware/errorHandler.js';
//Skapar själva express-appen
const app = express();

//Middleware för att parsa JSON i request body.
app.use(express.json());

//Middleware för att logga varje request som kommer in.
app.use((req, res, next) => {
    console.log(req.method, req.url);
    next();
});

//Alla routes i routes får prefixet /api/appointments
app.use('/api/appointments', router);

//Om ingen route matchar, skickas en 404-response.
app.use((req,res) => {
    res.status(404).json({ error: 'Sidan hittades inte' });
})
//Globala error-handlern
app.use(errorHandler)

export default app;