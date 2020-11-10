import HttpStatus from 'http-status-codes';
import { customAlphabet } from 'nanoid';

import * as gameService from '../services/gameService.js';

/**
 * Create a new game.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export function create(req, res, next) {
  const nanoid = customAlphabet('1234567890ABCDEF', 6);
  const code = nanoid();
  const { ip, hostname } = req;

  gameService
    .createGame({ code, ip, hostname })
    .then((data) => res.status(HttpStatus.CREATED).json({ data }))
    .catch((err) => next(err));
}

/**
 * Join a game.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export function join(req, res, next) {
  gameService
    .joinGame(req.params.id, req.body)
    .then((data) => res.json({ data }))
    .catch((err) => next(err));
}
