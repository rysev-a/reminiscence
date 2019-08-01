import { Compute, Message } from 'interfaces';
import { routeMessage } from 'utils/flow/flow';
import { computeEffects } from 'utils/flow/helpers';
import projectListPageDomActions from './dom';
import projectList from 'main/modules/projects/project-list';

const route = routeMessage({
  '/projects': 'load',
  escape: 'destroy',
});

const projectListPageActions = {
  load: () => {
    return projectListPageDomActions.mount();
  },
  destroy: message => {
    return projectListPageDomActions.unmount(message);
  },
};

const projectListPage: Compute = (message: Message) => {
  const projectListEffects = projectList(route(message));

  const projectListPageEffects = computeEffects(projectListPageActions)(
    route(message)
  );

  return [...projectListPageEffects, ...projectListEffects];
};

export default projectListPage;
