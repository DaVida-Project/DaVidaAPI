import initializeServer from '@server/server';
import apiRoutes from '@routes/routes';

const startServer = initializeServer(apiRoutes);

export default startServer;
