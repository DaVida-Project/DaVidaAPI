import { Router } from 'express';
import app from '@app/app';
import { initializeDB } from '@database/database';
import { config } from '@config/config';
// import { setRoles } from '@libs/setRoles';

const { port, url } = config;

const initializeServer = async (apiRoutes: Router) => {
  try {
    if (!port || !url) {
      throw new Error('Port or URL not provided in configuration.');
    }

    await initializeDB();

    // await setRoles();

    app.set('port', port);

    app.use('/api', apiRoutes);

    app.listen(port, () => {
      console.log(
        '===========================================================\n' +
          '                Server listening and running\n' +
          '===========================================================\n' +
          `Access the server at: ${url}${port}\n` +
          '===========================================================',
      );
    });
  } catch (err) {
    console.error(
      '===========================================================\n' +
        '                Could not start the server\n' +
        '===========================================================\n' +
        `Error: ${err}`,
    );
  }
};

export default initializeServer;
