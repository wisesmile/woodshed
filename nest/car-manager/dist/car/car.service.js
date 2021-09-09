"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarService = void 0;
const common_1 = require("@nestjs/common");
const cars_mock_1 = require("./cars.mock");
let CarService = class CarService {
    constructor() {
        this.cars = cars_mock_1.CARS;
    }
    getCars() {
        return this.cars;
    }
    postCar(car) {
        return this.cars.push(car);
    }
    getCarById(id) {
        const car = this.cars.find((car) => car.id === id);
        if (car) {
            throw new common_1.HttpException('Not found', 404);
        }
        return car;
    }
    deleteCarById(id) {
        const index = this.cars.findIndex((car) => car.id === id);
        if (index == -1) {
            throw new common_1.HttpException('Not found', 404);
        }
        this.cars.splice(index, 1);
        return this.cars;
    }
    putCarById(id, propertyName, propertyValue) {
        const index = this.cars.findIndex((car) => car.id === id);
        if (index == -1) {
            throw new common_1.HttpException('Not found', 404);
        }
        this.cars[index][propertyName] = propertyValue;
        return this.cars;
    }
};
CarService = __decorate([
    (0, common_1.Injectable)()
], CarService);
exports.CarService = CarService;
//# sourceMappingURL=car.service.js.map