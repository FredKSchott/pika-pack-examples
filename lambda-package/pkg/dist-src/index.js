import sls from 'serverless-http';
import server from "./server.js";
export var handler = sls(server);