import Joi, { ObjectSchema } from 'joi';

export interface EventPayload {
  name: string,
  description: string,
  speaker?: number,
  latitude?: number,
  longitude?: number,
  date_event?: string,
  start_event?: string,
  end_event?: string,
}

export const EventSchema: ObjectSchema = Joi.object({
  name: Joi.string().required().messages({
    'any.required': '{#label} is a required field',
    'string.empty': '{#label} cannot be an empty field',
  }),
  description: Joi.string().required().messages({
    'any.required': '{#label} is a required field',
    'string.empty': '{#label} cannot be an empty field',
  }),
  speaker: Joi.number().integer().optional(),
  latitude: Joi.number().optional(),
  longitude: Joi.number().optional(),
  date_event: Joi.string().isoDate().optional(),
  start_event: Joi.string().isoDate().optional(),
  end_event: Joi.string().isoDate().optional(),
});

//export type EventPayload = JTDDataType<typeof schemaPayload> 
