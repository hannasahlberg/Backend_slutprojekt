//Service lager för appointments. Hanterar logiken för att hämta, skapa, uppdatera och ta bort appointments. 
// Använder funktioner från appointmentModel för att interagera med databasen.
import * as Appointment from '../models/appointmentModel.js';
import { AppError } from '../utils/AppError.js';

export const getAll = async () => {
  return await Appointment.findAll();
};

export const create = async (data) => {
  const result = await Appointment.create(data);
  return await Appointment.findById(result.insertId);
};

export const count = async () => {
  const result = await Appointment.count();
  return result[0].antal_besok;
}

export const update = async (id, data) => {
  const existing = await Appointment.findById(id);

  if (!existing) {
    throw new AppError('Besöket hittades inte', 404);
  }

  await Appointment.update(id, data);
  return await Appointment.findById(id);
};

export const remove = async (id) => {
  const existing = await Appointment.findById(id);

  if (!existing) {
    throw new AppError('Besöket hittades inte', 404);
  }

  await Appointment.remove(id);
  return existing;
};