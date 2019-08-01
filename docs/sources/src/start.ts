import 'bulma/css/bulma.min.css';
import { run } from 'reminiscence/lib/core';
import { dom, history, http, store, time } from 'reminiscence/lib/plugins';

import main from 'main';

run({ dom, history, http, store, time }, main);
