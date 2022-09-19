import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import {product} from '~types';
import {addToCart, removeFromCart} from '~store/cart';

//--
import {productItemStyles} from './styles';

type ProductItemProps = {
  item: product;
};
const ProductItem = ({item}: ProductItemProps) => {
  const dispatch = useDispatch();
  const [isProductOnCart, setIsProductOnCart] = useState(false);
  const {title, image, price} = item;

  const onCartAction = () => {
    if (isProductOnCart) {
      dispatch(removeFromCart(item?.id));
      setIsProductOnCart(false);
    } else {
      dispatch(addToCart(item));
      setIsProductOnCart(true);
    }
  };
  return (
    <View style={productItemStyles.container}>
      <Image source={{uri: image}} style={productItemStyles.img} />
      <View style={productItemStyles.info}>
        <Text>{title}</Text>
        <Text>{price}</Text>
        <TouchableOpacity
          style={productItemStyles.cartBtn}
          onPress={onCartAction}>
          <Text style={productItemStyles.cartBtnLabel}>
            {isProductOnCart ? 'Remove from Cart' : 'Add to Cart'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductItem;
