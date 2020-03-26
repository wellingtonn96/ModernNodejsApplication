import express from 'express';
import './database/Connectiondb';

import User from './app/models/User';
import Address from './app/models/Addreses';
import Techs from './app/models/Tech';

const app = express();

app.use(express.json());

app.get('/', (req, res) => res.status(200).json({ message: 'tudo ok' }));

app.post('/users', async (req, res) => {
    const reults = await User.create(req.body);
    res.status(200).json(reults)
})

app.get('/addresses/:id', async (req, res) => {
  const { id } = req.params;

  const user = await User.findByPk(id, {
    include: { association: 'addresses' }
  });

  res.status(200).send(user)
});

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

//techs

app.get('/techs/:id')

app.post('/techs/:id', async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  const user = await User.findByPk(id);

  if(!user) {
    return res.status(400).json({ error: 'User not found' })
  };

  const [ tech ] = await Techs.findOrCreate({
    where: { name }
  });

  await user.addTech(tech);

  res.status(200).json(tech);
})


app.listen(3000);

export default app;
