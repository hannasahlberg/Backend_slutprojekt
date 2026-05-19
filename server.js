import 'dotenv/config';
import app from './src/app.js';
import { connect } from './src/config/db.js';

//Sätter vilken port servern ska använda. 
const PORT = process.env.PORT ?? 3000;

//Servern försöker ansluta till databasen innan den startar.
await connect();

//Express börjar lyssna på inkommande requests. Om anslutningen till databasen lyckas, startar servern och loggar en bekräftelse i konsolen.
app.listen(PORT, () => {
    console.log(`Servern kör på port, http://localhost:${PORT}`);
});

