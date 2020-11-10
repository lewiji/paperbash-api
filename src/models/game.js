import db from '../db';

const TABLE_NAME = 'games';

/**
 * Game model.
 */
class Game extends db.Model {
  /**
   * Get table name.
   */
  get tableName() {
    return TABLE_NAME;
  }

  /**
   * Table has timestamps.
   */
  get hasTimestamps() {
    return true;
  }
}

export default Game;
