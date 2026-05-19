# Backend Slutprojekt 
Detta är mitt slutprojekt i backend kursen. 
Det är ett rest-api för att hantera besöken på ett djursjukhus.

# Tech-stack
Node.js
Express
MySQL

#Förutsättningar 
Node.js installerat 
En MySql databas med tabellerna besok, agare, djur och veterinar

# Installation
1. Klona repot: git clone https://github.com/hannasahlberg/Backend_slutprojekt.git
2. Navigera till projekt-mappen
3. npm install 
4. Skapa en .env-fil och lägg till dina uppgifter och kopiera detta och fyll i dina uppgifter

PORT=3000
DB_HOST=localhost
DB_PORT=3306
DB_USER=användarnamn
DB_PASSWORD=lösenord
DB_NAME=djursjukhus

# Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET    | /api/appointments | Get all appointments |
| GET    | /api/appointments/count | Count the appointments |
| POST   | /api/appointments | Create new appointment |
| PUT    | /api/appointments/:id | Update appointment |
| DELETE | /api/appointments/:id | Delete appointment |

