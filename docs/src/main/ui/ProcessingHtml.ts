import html from 'utils/effects/html';
import './ProcessingHtmlStyle.css';

const ProcessingHtml = processingId =>
  html('div', { className: 'processing', id: processingId }, [
    html('div', { className: 'ball-pulse' }, [
      html('div', {}),
      html('div', {}),
      html('div', {}),
    ]),
  ]);

export default ProcessingHtml;
