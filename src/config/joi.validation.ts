import * as Joi from 'joi';

export const JoiValidationSchemma = Joi.object({
  MONGODB: Joi.required(),
  PORT: Joi.number().default(3002),
  DEFAULT_LIMIT: Joi.number().default(6),
});
