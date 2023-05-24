import express from 'express';
import morgan from 'morgan';

const app = express();

app.use(morgan('dev'));

const port = process.env.PORT || 3001;

app.get('/', (req, res) => {
  res.json({ ok: 'hola' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
