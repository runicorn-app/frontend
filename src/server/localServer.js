import { app } from './server';
const port = process.env.EXPRESS_APP_PORT || 8000;

app.listen(port, () => console.log(`listening on port ${port}`));