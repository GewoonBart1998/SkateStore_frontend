export class product {

    public product_id: number;
    public product_name: String;
    public product_price: number;
    public product_description: String;
    public product_path: String;
    public product_amount: number

    constructor(product_id: number, product_name: String, product_price: number, product_description: String, product_path: String, product_amount: number){
        this.product_id = product_id;
        this.product_name = product_name;
        this.product_price = product_price;
        this.product_description = product_description;
        this.product_path = product_path;
        this.product_amount = product_amount;
    }
}
