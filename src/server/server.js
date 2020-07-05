import express from 'express';
import { render } from './handler';
import App from '../client/App';

module.exports.app = express()
.use('*', (req, res) => {
  console.log(req.path);
  res.send(render(App, req.originalUrl));
});;
