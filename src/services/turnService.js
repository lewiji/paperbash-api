/* eslint-disable no-console */
import TURN from 'node-turn';

const server = new TURN({
  authMech: 'none',
  debugLevel: 'ALL',
  debug: (lvl, msg) => {
    console.log(lvl, msg);
  }
});

/**
 * Start TURN relay server
 */
export function startTurnServer() {
  server.start();
}
