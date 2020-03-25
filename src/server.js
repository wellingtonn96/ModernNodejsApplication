import express from 'express';
import './database/Connectiondb';

import User from './app/models/User'
import Address from './app/models/Addreses'

const app = express();

app.use(express.json());

app.get('/', (req, res) => res.status(200).json({ message: 'tudo ok' }));

app.post('/users', async (req, res) => {
    const reults = await User.create(req.body);
    res.status(200).json(reults)
})

app.post('/addresses/:id', async (req, res) => {
  const { id } = req.params;

  const { zipcode, street, number } = req.body

  const user = await User.findByPk(id);

  if(!user) {
    return res.status(401).json({ error: 'User not found' })
  }

  const address = await Address.create({
    zipcode,
    street,
    number,
    user_id: id
  })

  res.status(200).json(address);
})

app.listen(3000);

export default app;
