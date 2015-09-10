'use strict';

export default function shoppingCart(state = [], action) {
    switch (action.type) {
        case "addProduct":
            let existingProduct = state.find(product => product.name == action.productName ? product : undefined);
            if (!existingProduct) {
                let productToAdd = { name: action.productName, count: action.count}
                return [...state, productToAdd];
            }

            existingProduct.count += action.count;
            return state;
        case "removeProduct":
            return state.filter(product => product.name != action.productName);
        default:
            return state;
    }
}
