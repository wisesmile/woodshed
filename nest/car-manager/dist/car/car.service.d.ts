export declare class CarService {
    private cars;
    getCars(): {
        id: number;
        brand: string;
        color: string;
        model: string;
    }[];
    postCar(car: any): number;
    getCarById(id: number): {
        id: number;
        brand: string;
        color: string;
        model: string;
    };
    deleteCarById(id: number): {
        id: number;
        brand: string;
        color: string;
        model: string;
    }[];
    putCarById(id: number, propertyName: string, propertyValue: string): {
        id: number;
        brand: string;
        color: string;
        model: string;
    }[];
}
