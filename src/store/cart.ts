import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {product, CartProduct} from '~types';

type CartState = {
  totalPrice: number;
  products: CartProduct[];
};

const initialState: CartState = {
  totalPrice: 0,
  products: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<product>) => {
      const newProduct = action.payload;
      state.products = [...state.products, {product: newProduct, qty: 1}];
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      const productId = action.payload;
      const newCartProducts = [...state.products].filter(
        cItem => cItem.product.id !== productId,
      );
      state.products = newCartProducts;
    },
    increaseProductQty: (state, action: PayloadAction<number>) => {
      const productId = action.payload;
      const productIndex = state.products.findIndex(
        item => item.product.id === productId,
      );
      if (productIndex !== -1) {
        const {product, qty} = state.products[productIndex];
        state.products[productIndex] = {product, qty: qty + 1};
      }
    },
    decreaseProductQty: (state, action: PayloadAction<number>) => {
      const productId = action.payload;
      const productIndex = state.products.findIndex(
        item => item.product.id === productId,
      );
      if (productIndex !== -1) {
        const {product, qty} = state.products[productIndex];
        state.products[productIndex] = {product, qty: qty > 1 ? qty - 1 : 1};
      }
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  decreaseProductQty,
  increaseProductQty,
} = cartSlice.actions;

export default cartSlice.reducer;
