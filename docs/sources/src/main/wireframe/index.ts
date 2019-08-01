import './mainframe.css';

import { mountHtmlElement } from 'utils/effects/html';
import { computeEffects } from 'utils/flow/helpers';
import HeaderHtml from './layouts/HeaderHtml';
import FooterHtml from './layouts/FooterHtml';
import { Compute, Message } from 'interfaces';
import MainContentHtml from './layouts/MainContentHtml';
import PageHtml from './layouts/PageHtml';

const wireFrameActions = {
  init: () => {
    return [
      mountHtmlElement('app', MainContentHtml()),
      mountHtmlElement('app', FooterHtml()),
      mountHtmlElement('content', HeaderHtml()),
      mountHtmlElement('content', PageHtml()),
    ];
  },
};

const wireFrame: Compute = (message: Message) =>
  computeEffects(wireFrameActions)(message);

export default wireFrame;
