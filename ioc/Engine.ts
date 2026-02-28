export interface Engine {
  run(): void;
}

export class GasEngine implements Engine {
  run(): void {
    console.log("GasEngine is running");
  }
}

export class ElectricEngine implements Engine {
  run(): void {
    console.log("ElectricEngine is running");
  }
}
