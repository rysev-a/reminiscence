import { pipe } from 'ramda';
import { routeMessage, mergeComputers } from 'utils/flow/flow';
import { computeEffects } from 'utils/flow/helpers';
import { mountHtmlElement, removeHtmlElement } from 'utils/effects/html';

export const generatePage = ({ routes, pageId, pageHtml, computer }) =>
  pipe(
    routeMessage(routes),
    mergeComputers(
      computeEffects({
        load: () => [mountHtmlElement('page', pageHtml)],
        destroy: ({ context }) =>
          context.dom.elements[pageId] ? [removeHtmlElement(pageId)] : [],
      }),
      computer
    )
  );
