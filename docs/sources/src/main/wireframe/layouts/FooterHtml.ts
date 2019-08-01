import html from 'utils/effects/html';

const FooterHtml = () =>
  html('footer', { className: 'footer' }, [
    html('div', { className: 'content has-text-centered' }, [
      html('p', {}, [
        html('textNode', { innerHTML: 'Simple flow library: ' }),
        html('a', {
          href: 'https://rysev-a.github.io/reminiscence/',
          innerHTML: 'reminiscence',
        }),
      ]),
    ]),
  ]);

export default FooterHtml;
