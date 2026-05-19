# Backend Final Project

This is my final project for the backend course.  
It is a REST API for managing visits at a veterinary clinic.

## Tech Stack
* Node.js
* Express
* MySQL

## Features
- Create appointments
- Update appointments
- Delete appointments
- Get all appointments
- Count total appointments

## Requirements
* Node.js installed
* A MySQL database with the tables: visits, owners, animals, and veterinarians

## Installation

1. Clone the repository: git clone https://github.com/hannasahlberg/Backend_slutprojekt.git
2. Navigate to the project folder
3. Install dependencies: npm install
4. Create a `.env` file and add the following variables:
```
PORT=3000
DB_HOST=localhost
DB_PORT=3306
DB_USER=username
DB_PASSWORD=password
DB_NAME=animal_hospital
```
5. Start the server: node server.js


## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET    | /api/appointments | Get all appointments |
| GET    | /api/appointments/count | Get total number of appointments |
| POST   | /api/appointments | Create a new appointment |
| PUT    | /api/appointments/:id | Update an appointment |
| DELETE | /api/appointments/:id | Delete an appointment |

