import dotenv from 'dotenv';
dotenv.config({ path: '.env' });
import express, { Express, Request, Response, NextFunction } from 'express';
import mongoose from 'mongoose';
import compression from 'compression';
import mongoSanitize from 'express-mongo-sanitize';
import cors from 'cors';
import router from './routes';
import passport from 'passport';
import path from 'path';

const app: Express = express();

/** Sanitizes user-supplied data to prevent MongoDB Operator Injection. */
app.use(mongoSanitize());

/**  Compression middleware */
app.use(compression());

app.use(
     cors<Request>({
          origin: (origin, callback) => {
               return callback(null, true);
          },
     })
);

app.use(passport.initialize());

app.use((req: Request, res: Response, next: NextFunction) => {
     res.header('Access-Control-Allow-Origin', '*');
     res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
     res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With,' + ' Content-Type, Accept');
     return next();
});

app.use(express.static(path.join(__dirname, 'dist')));

/** Parse application/x-www-form-urlencoded */
app.use(express.urlencoded({ extended: true }));

/** Parse application/json */
app.use(express.json());

mongoose.Promise = global.Promise;

/** Router */
app.use('/api', router());

export default app;
