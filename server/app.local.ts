import { connect } from 'mongoose';
import app from './app';

/** Starting the server */
app.listen(process.env.PORT, async (): Promise<void> => {
     // const URL: string | undefined = process.env.DATABASE_URL;

     console.log(`
     --------------------------------------
        [RESTAPI]  port::${process.env.PORT}
     --------------------------------------
     `);

     // if (URL) {
     //      await connect(URL)
     //           .then(({ connections }) => {
     //                console.log(`==> Connected to [${connections[0].name}] database`);
     //           })
     //           .catch((err) => {
     //                console.log('Could not connect to the database. Exiting now...', err);
     //           });
     // }

     console.log('==> Server is up');

     /** Error middleware */
});
