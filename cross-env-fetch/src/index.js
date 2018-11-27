
export {fetch, Headers, Request, Response} from './env.js';

// Needed for TypeScript consumers without esModuleInterop.
import {fetch} from './env.js';
export default fetch;