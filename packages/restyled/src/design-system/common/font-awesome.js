import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fal as fapl } from '@fortawesome/pro-light-svg-icons';
import { far as fapr } from '@fortawesome/pro-regular-svg-icons';
import { fas as faps } from '@fortawesome/pro-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(fab, far, fas, fapl, fapr, faps);

export FontAwesome from '@fortawesome/react-fontawesome';

export default library;
