import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {useAppSelector} from '~store/hooks';
import {CartProduct} from '~types';
//--
import CartItem from './components/cartItem';
import styles from './styles';

const Cart = () => {
  const {products: cartProducts} = useAppSelector(State => State);

  const renderCartItem = ({item}: {item: CartProduct}) => {
    return <CartItem item={item?.product} qty={item?.qty} />;
  };

  const totalPrice = cartProducts.reduce(
    (acc, currentVal) => acc + currentVal.qty * currentVal.product.price,
    0,
  );

  const renderEmptyCart = () => {
    return <Text>No items on the cart</Text>;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.price}>Total price : {totalPrice}</Text>
      <FlatList
        data={cartProducts}
        keyExtractor={item => item?.product?.id?.toString()}
        renderItem={renderCartItem}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={renderEmptyCart}
        contentContainerStyle={
          cartProducts.length > 0 ? {} : styles.listContent
        }
      />
    </View>
  );
};

export default Cart;
