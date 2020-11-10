import Boom from '@hapi/boom';

import Game from '../models/game';

/**
 * Get a game.
 *
 * @param   {Number|String}  code
 * @returns {Promise}
 */
export function joinGame(code) {
  return new Game({ code })
    .fetch()
    .then((game) => game)
    .catch(Game.NotFoundError, () => {
      throw Boom.notFound('User not found');
    });
}

/**
 * Create new user.
 *
 * @param   {Object}  game
 * @returns {Promise}
 */
export function createGame({ code, ip }) {
  return new Game({ code: code, ip }).save();
}
