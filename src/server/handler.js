import { readFileSync } from 'fs';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';

const html = readFileSync('../build/index.html');

module.exports.render = (Tree, path) => {
  const markup = renderToString(
    <StaticRouter location={path}>
      <Tree />
    </StaticRouter>
  )

  return html
    .replace('<div id="root"></div>', `<div id="root">${markup}</div>`)
}
