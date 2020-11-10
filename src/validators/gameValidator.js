import Joi from '@hapi/joi';

import validate from '../utils/validate';
import * as gameService from '../services/gameService';

// Validation schema
const schema = Joi.object({
  name: Joi.string().label('Name').max(90).required()
});

/**
 * Validate create/update user request.
 *
 * @param   {Object}   req
 * @param   {Object}   res
 * @param   {Function} next
 * @returns {Promise}
 */
function gameValidator(req, res, next) {
  return next();
  return validate(req.body, schema)
    .then(() => next())
    .catch((err) => next(err));
}

/**
 * Validate users existence.
 *
 * @param   {Object}   req
 * @param   {Object}   res
 * @param   {Function} next
 * @returns {Promise}
 */
function joinGame(req, res, next) {
  return gameService
    .getUser(req.params.id)
    .then(() => next())
    .catch((err) => next(err));
}

export { gameValidator };
