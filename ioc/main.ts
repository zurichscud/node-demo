import { Container } from "inversify";
import { Car } from "./Car";

const container = new Container();

container.bind(Car).toSelf();
