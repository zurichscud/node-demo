import { injectable } from "inversify";


export interface Engine {
  run(): void;
}

@injectable()
export class GasEngine implements Engine {
  run(): void {
    console.log("GasEngine is running");
  }
}

@injectable()
export class ElectricEngine implements Engine {
  run(): void {
    console.log("ElectricEngine is running");
  }
}
