import { routeMessage } from 'utils/flow/flow';

const route = routeMessage({
  '/counter': 'load',
  escape: 'destroy',
});

export default route;
