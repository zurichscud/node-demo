import type { Engine } from "./Engine.js";
import { inject, injectable } from "inversify";

@injectable()
export class Car {
  engine: Engine;

  constructor(@inject("Engine") engine: Engine) {
    this.engine = engine; // engine是外部传入的依赖
  }

  start() {
    this.engine.run();
  }
}
