import express from 'express';

import { root } from './src/routes/root.js';
import { passportMiddleware, passportSessionHandler } from './src/middlewares/passport.js';
import {sessionHandler } from './src/middlewares/session.js';
import { authRouter } from './src/routes/authRoute.js';
import infoRoute from './src/routes/infoRoute.js';
import randomsRoute from './src/routes/randomsRoute.js';

export const app = express();


// middlewares

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(sessionHandler)
app.use(passportMiddleware)
app.use(passportSessionHandler)
app.set('views', 'public/views');
app.set('view engine', 'ejs');

// rutas

app.use('/', root)
app.use('/auth', authRouter)
app.use('/info', infoRoute)
app.use('/api/randoms', randomsRoute)