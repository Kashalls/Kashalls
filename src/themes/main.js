import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { faDiscord, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faCaretRight, faPhoneAlt, faBan, faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons';

import enableDarkTheme from '../javascript/darkTheme.js';
window.enableDarkTheme = enableDarkTheme;

library.add(faDiscord);
library.add(faTwitter);
library.add(faCaretRight);
library.add(faPhoneAlt);
library.add(faBan);
library.add(faEnvelopeOpenText)
dom.watch();