declare class WASMInstance {
  readonly exports: any;
  constructor(module: any, importObject?: any);
}
interface ResultObject {module: any; instance: WASMInstance}
export function createWASM(importObject?: object): Promise<ResultObject>;
export default function createWASM(importObject?: object): Promise<ResultObject>;
