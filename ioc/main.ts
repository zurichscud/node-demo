import "reflect-metadata";
import { Container } from "inversify";
import { Car } from "./Car";
import { ElectricEngine, GasEngine } from "./Engine";

const container = new Container();

// 绑定 Engine 服务到 GasEngine 实现
container.bind("Engine").to(ElectricEngine);

// 绑定 Car
// container.bind(Car).toSelf();
container.bind('Car').to(Car);

const car = container.get<Car>("Car");
car.start();