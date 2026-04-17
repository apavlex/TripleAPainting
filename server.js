import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = process.env.PORT || 8080;

const staticDir = join(__dirname, 'tripleapainting');

app.use(express.static(staticDir));

app.get('*', (req, res) => {
  res.sendFile(join(staticDir, 'index.html'));
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
