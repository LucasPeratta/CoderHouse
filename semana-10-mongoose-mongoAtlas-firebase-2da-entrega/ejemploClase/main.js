import mongoose from 'mongoose';
import { CNX_STR } from './config.js';

await mongoose.connect(CNX_STR)

import { app } from './server.js';

app.listen(8080, () => {
    console.log('conectado! escuchando!')
})