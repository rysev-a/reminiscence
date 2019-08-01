import classNames from 'classnames';
import { map, range } from 'ramda';
import html from 'utils/effects/html';

const PaginationHtml = ({ pages, page, prev, next, set }) =>
  html(
    'nav',
    { className: 'pagination', role: 'navigation', ariaLabel: 'pagination' },
    [
      html('a', {
        className: 'pagination-previous',
        title: 'This is the first page',
        innerHTML: 'prev',
        events: {
          click: { id: prev },
        },
      }),
      html('a', {
        className: 'pagination-next',
        innerHTML: 'next',
        events: {
          click: { id: next },
        },
      }),
      html(
        'ul',
        { className: 'pagination-list' },
        map((pageNumber: number) =>
          html('li', {}, [
            html('a', {
              className: classNames('pagination-link', {
                'is-current': page === pageNumber,
              }),
              innerHTML: String(pageNumber),
              events: {
                click: {
                  id: set,
                  data: pageNumber,
                },
              },
            }),
          ])
        )(range(1, pages + 1))
      ),
    ]
  );

export default PaginationHtml;
