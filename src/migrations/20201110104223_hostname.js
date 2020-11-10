/**
 * Create table `games`.
 *
 * @param   {object} knex
 * @returns {Promise}
 */
export function up(knex) {
  return knex.schema.table('games', (t) => {
    t.string('hostname');
  });
}

/**
 * Drop `games`.
 *
 * @param   {object} knex
 * @returns {Promise}
 */
export function down(knex) {
  return knex.schema.hasColumn('games', 'hostname').then((exists) => {
    if (exists) {
      return knex.schema.table('games', (t) => {
        t.dropColumn('hostname');
      });
    }
  });
}
