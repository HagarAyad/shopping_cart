import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import {
  increaseProductQty,
  removeFromCart,
  decreaseProductQty,
} from '~store/cart';
import {product} from '~types';
//--
import {CartItemStyles} from './styles';

type CartItemProps = {
  item: product;
  qty: number;
};
const CartItem = ({qty, item}: CartItemProps) => {
  const dispatch = useDispatch();
  const {title, image, price} = item;

  const onRemoveItem = () => {
    dispatch(removeFromCart(item?.id));
  };

  const onIncreaseProductQty = () => {
    dispatch(increaseProductQty(item?.id));
  };

  const onDecreaseProductQty = () => {
    dispatch(decreaseProductQty(item?.id));
  };

  return (
    <View style={CartItemStyles.container}>
      <Image source={{uri: image}} style={CartItemStyles.img} />
      <View style={CartItemStyles.info}>
        <Text>{title}</Text>
        <Text>{price}</Text>
        <View style={CartItemStyles.centerContainer}>
          <View style={CartItemStyles.qtyContainer}>
            <TouchableOpacity
              style={CartItemStyles.qtyBtns}
              onPress={onIncreaseProductQty}>
              <Text style={CartItemStyles.cartBtnLabel}>+ </Text>
            </TouchableOpacity>
            <Text>{qty}</Text>
            <TouchableOpacity
              style={CartItemStyles.qtyBtns}
              onPress={onDecreaseProductQty}>
              <Text style={CartItemStyles.cartBtnLabel}>- </Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text>{`${price} X ${qty} = ${price * qty}`}</Text>
          </View>
        </View>
      </View>
      <View>
        <TouchableOpacity style={CartItemStyles.cartBtn} onPress={onRemoveItem}>
          <Text style={CartItemStyles.cartBtnLabel}>Remove </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartItem;
