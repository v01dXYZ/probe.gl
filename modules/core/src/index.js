import './init';

export {VERSION} from './utils/globals';

// ENVIRONMENT
export {self, window, global, document, process, console} from './env/globals';
export {default as isBrowser, isBrowserMainThread} from './env/is-browser';
export {default as getBrowser, isMobile} from './env/get-browser';
export {default as isElectron} from './env/is-electron';

// ENVIRONMENT'S ASSERT IS 5-15KB, SO WE PROVIDE OUR OWN
export {default as assert} from './utils/assert';

// STATS (PERFORMANCE PROFILING)
export {default as Stats} from './lib/stats';

// LOGGING
export {default as Log} from './lib/log';
export {COLOR} from './utils/color';

// DEFAULT EXPORT IS A LOG INSTANCE
import {default as Log} from './lib/log';
export default new Log({id: 'probe.gl'});

// UTILITIES
export {addColor} from './utils/color';
export {leftPad, rightPad} from './utils/formatters';
export {autobind} from './utils/autobind';
export {default as LocalStorage} from './utils/local-storage';