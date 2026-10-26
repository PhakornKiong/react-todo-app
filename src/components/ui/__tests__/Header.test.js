import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Header from '../Header';
import { APP_TITLE, APP_TITLE_EMOJI } from '../../../assets/text/en_US';

test('Header renders title and accessible emojis', () => {
  const html = ReactDOMServer.renderToStaticMarkup(<Header />);
  expect(html).toContain(APP_TITLE);
  APP_TITLE_EMOJI.forEach((e) => {
    expect(html).toContain(e);
  });
  // check aria-labels
  expect(html).toContain('role="img"');
  expect(html).toContain('aria-label="unicorn"');
  expect(html).toContain('aria-label="sparkles"');
});
