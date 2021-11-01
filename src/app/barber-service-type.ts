export class BarberServiceType {

    constructor(name: string, price: number, time: number){
        this.name = name;
        this.price = price;
        this.time = time;
    }
    
    name: string;
    price: number;
    time: number;
}
