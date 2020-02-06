export class product {
 
    public name: String;
    public price: number;
    public description: String;
    public imagePath: String;

    constructor(name: String, price: number, description: String, imagePath: String){
        this.name = name;
        this.price = price;
        this.description = description;
        this.imagePath = imagePath;
    }
}