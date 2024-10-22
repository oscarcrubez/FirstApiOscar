import './loadEnvironment.js';
import express from 'express';
import configViewEngine from './web/config/configViewEngine.js';

// Initialize express
const app = express();
const port = process.env.HOST_PORT ?? '3000';
// Configure view engine for EJS
configViewEngine(app);

app.get('/ping', (req, res) => res.send('pong'));

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});

export default app;
