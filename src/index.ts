import express from 'express';
import morgan from 'morgan';
import { PrismaClient } from '@prisma/client';

// Postgres error command npx prisma migrate reset

const client = new PrismaClient();

const app = express();

app.use(morgan('dev'));

const port = process.env.PORT || 3001;

app.get('/create', async (req, res) => {
  const user = await client.user.create({
    data: {
      age: 22,
      email: 'shammamnd2015@gmail.com',
      name: 'Shammael Bien-Aisé',
      userPreferences: {
        create: {
          emailUpdates: true,
        },
      },
    },
  });

  res.json({ user });
});

app.get('/', async (req, res) => {
  const users = await client.user.findMany();
  res.json({ users });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
