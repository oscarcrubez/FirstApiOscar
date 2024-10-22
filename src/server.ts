import './loadEnvironment.js';
import express from 'express';
import configViewEngine from './web/config/configViewEngine.js';

// Initialize express
const app = express();
const port = process.env.HOST_PORT ?? '3000';
// Configure view engine for EJS
configViewEngine(app);

const nomsAlumnes = [
  "Carlos García",
  "Ana Rodríguez",
  "Pedro Martínez",
  "Laura Hernández",
  "Diego López",
  "Sofia Pérez",
  "Luis González",
  "Maria Sánchez",
  "Javier Ramírez",
  "Elena Torres",
  "Andrés Flores",
  "Isabel Rivera",
  "Fernando Gómez",
  "Marta Cruz",
  "Raúl Morales",
  "Patricia Ortega",
  "Alberto Vargas",
  "Clara Castillo",
  "Daniel Jiménez"
];

console.log(nomsAlumnes);


app.get('/ping', (req, res) => res.send('pong'));
app.get('/', (req, res) =>
  res.json({alumnes: nomsAlumnes}));

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});

export default app;

