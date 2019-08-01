import counterPageDomActions from './dom';
import { Compute, Message } from 'interfaces';
import { computeEffects } from 'utils/flow/helpers';
import counter from 'main/modules/examples/counter';
import route from './route';
import { counterPageId } from './dom/CounterPageHtml';

const counterPageActions = {
  load: () => {
    return counterPageDomActions.mount();
  },
  destroy: ({ context: { dom } }) => {
    return dom.elements[counterPageId] ? counterPageDomActions.unmount() : [];
  },
};

const counterPage: Compute = (message: Message) => {
  const messageWithRoute = route(message);
  const counterPageEffects = computeEffects(counterPageActions)(
    messageWithRoute
  );

  const counterEffects = counter(messageWithRoute);

  return [...counterPageEffects, ...counterEffects];
};

export default counterPage;
