// 

import log from './tools/log';

export default function runInSandbox(func) {
  try{ func(); }
  catch(err) {
    log.error('[error]', err);
  }
}
