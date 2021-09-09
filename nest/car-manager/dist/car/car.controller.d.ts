import { CarService } from './car.service';
import { CarDto } from './car.dto';
export declare class CarController {
    private carService;
    constructor(carService: CarService);
    getCars(): {
        id: number;
        brand: string;
        color: string;
        model: string;
    }[];
    postCar(car: CarDto): number;
    getCarById(id: number): {
        id: number;
        brand: string;
        color: string;
        model: string;
    };
    deleteCarById(id: number): void;
    putCarById(id: number, query: any): {
        id: number;
        brand: string;
        color: string;
        model: string;
    }[];
}
