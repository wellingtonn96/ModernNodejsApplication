import express from 'express';
import './database/Connectiondb';

import User from './app/models/User'

const app = express();

app.use(express.json());

app.get('/', (req, res) => res.status(200).json({ message: 'tudo ok' }));

app.post('/users', async (req, res) => {
    const reults = await User.create(req.body);
    res.status(200).json(reults)
})

app.post('/addreses', async (req, res) => {

})

app.listen(3000);

export default app;
