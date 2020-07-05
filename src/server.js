import express from 'express';
import { render } from './handler';
import App from './App';

export const Router = express();

Router.use('*', (req, res) => {
  res.send(render(App, req.path))
});