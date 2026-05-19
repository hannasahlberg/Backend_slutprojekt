//Denna filen innehåller routes för alla endpoints relaterade till appointments.
//Varje route är kopplad till en controller-funktion som hanterar logiken för den specifika endpointen.
import { Router } from "express";
import { getAppointments, createAppointment, updateAppointment, deleteAppointment, numberOfAppointments } from '../controllers/appointmentController.js';
import { validateAppointment } from '../middleware/validation.js';

const router = Router();

router.get('/', getAppointments);
router.get('/count', numberOfAppointments);
router.post('/', validateAppointment,createAppointment );
router.put('/:id', validateAppointment, updateAppointment, );
router.delete('/:id', deleteAppointment);

export default router;