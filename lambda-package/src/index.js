import sls from 'serverless-http';
import server from './server';

export const handler = sls(server);
