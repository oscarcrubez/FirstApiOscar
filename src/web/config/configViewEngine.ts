import { type Application } from 'express';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

// Obtener la ruta del archivo actual (__filename)
const __filename = fileURLToPath(import.meta.url);

// Obtener el directorio del archivo actual (__dirname)
const __dirname = dirname(__filename);

export default function configViewEngine(app: Application) {
  app.set('view engine', 'ejs');
  app.set('views', path.join(__dirname, '..', 'views/pages'));
}
