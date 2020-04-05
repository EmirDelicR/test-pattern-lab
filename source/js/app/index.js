/** Import Scss so it can go through webpack */
import './css/index.scss';
/** Init other app */

import { test } from './js/start';
const init = () => {
    test();
};

export { init };
