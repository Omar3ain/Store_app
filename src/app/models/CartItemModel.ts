import  storeModel  from 'src/app/models/storeDataModel';

export default class CartItem {
    product: storeModel;
    quantity: number;
    constructor(product: storeModel, quantity: number) {
        this.product = product;
        this.quantity = quantity;
    }
}