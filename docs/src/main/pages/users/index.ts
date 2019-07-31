import { Compute, Message } from 'interfaces';
import { routeMessage } from 'utils/flow/flow';
import { computeEffects } from 'utils/flow/helpers';
import userPageDomActions from './dom';
import userList from 'main/modules/users/user-list';

const route = routeMessage({
  '/users': 'load',
  escape: 'destroy',
});

const userListPageActions = {
  load: () => {
    return userPageDomActions.mount();
  },
  destroy: message => {
    return userPageDomActions.unmount(message);
  },
};

const userListPage: Compute = (message: Message) => {
  const userListEffects = userList(route(message));

  const userListPageEffects = computeEffects(userListPageActions)(
    route(message)
  );

  return [...userListPageEffects, ...userListEffects];
};

export default userListPage;
