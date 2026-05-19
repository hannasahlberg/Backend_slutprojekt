import * as appointmentService from '../services/appointmentService.js';
import { asyncHandler } from '../utils/asyncHandler.js';

//controller-funktioner som tar emot requests, hämtar data via service och skickar response. 
//Alla funktioner är inlindade i asyncHandler för att fånga eventuella fel och skicka dem vidare till error-handling middleware.
export const getAppointments = asyncHandler(async (req, res) => {
    const appointments = await appointmentService.getAll();
    res.json(appointments);
});

export const createAppointment = asyncHandler(async (req, res) => {
    const appointment = await appointmentService.create(req.body);
    res.json({tillagt_besök: appointment});
});

export const numberOfAppointments = asyncHandler(async (req, res, ) => {
    const numofAppointments = await appointmentService.count();
    res.json({antal_besök: numofAppointments});
});

export const updateAppointment = asyncHandler(async (req, res) => {
    const updated = await appointmentService.update(req.params.id, req.body);
    res.json({uppdaterat_besök: updated});
});

export const deleteAppointment = asyncHandler(async (req, res) => {
    const deleted = await appointmentService.remove(req.params.id);
    res.json({borttaget_besök: deleted});
});