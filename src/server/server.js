import express from 'express';
import { render } from './handler';
import App from '../src/App';

module.exports.app = express()
.use('*', (req, res) => {
  res.send(render(App, req.path))
});;
