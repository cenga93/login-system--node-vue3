import dotenv from 'dotenv';
dotenv.config({ path: '.env' });
import express, { Express, Request, Response, NextFunction } from 'express';
import mongoose from 'mongoose';
import compression from 'compression';
import mongoSanitize from 'express-mongo-sanitize';
import cors from 'cors';
// import helmet from 'helmet';
import router from './routes';
import passport from 'passport';
import path from 'path';
import { jwtStrategy } from './config/passport';

const app: Express = express();

/** Setting various HTTP headers */
// app.use(helmet());

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
passport.use('jwt', jwtStrategy);

app.use((req: Request, res: Response, next: NextFunction) => {
     res.header('Access-Control-Allow-Origin', '*');
     res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS , post, get');
     res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With,' + ' Content-Type, Accept');

     return next();
});

/** Parse application/x-www-form-urlencoded */
app.use(express.urlencoded({ extended: true }));

/** Parse application/json */
app.use(express.json());

mongoose.Promise = global.Promise;

/** Router */
app.use('/api', router());

if (process.env.NODE_ENV === 'production') {
     app.use(express.static(path.join(__dirname, 'dist')));

     app.get('*', (req: Request, res: Response) => {
          res.sendFile(path.join(__dirname, 'dist', 'index.html'));
     });
}

app.all('/api/*', function (req: Request, res: Response, next: NextFunction) {
     next();
});

export default app;
