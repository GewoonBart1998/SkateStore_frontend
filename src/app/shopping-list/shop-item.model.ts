export class product {

    public id: number;
    public name: String;
    public price: number;
    public description: String;
    public imagePath: String;

    constructor(id: number, name: String, price: number, description: String, imagePath: String){
        this.id = id;
        this.name = name;
        this.price = price;
        this.description = description;
        this.imagePath = imagePath;
    }
}
