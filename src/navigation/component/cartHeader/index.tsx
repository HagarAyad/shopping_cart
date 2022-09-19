import * as React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useAppSelector} from '~store/hooks';
import {APP_SCREENS} from '~navigation/appScreens.constant';
import styles from './styles';

//---

function CartHeader() {
  const navigation = useNavigation();
  const {products} = useAppSelector(State => State);
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate(APP_SCREENS.cart)}>
      {products?.length > 0 && (
        <View style={styles.numOfProducts}>
          <Text>{products?.length}</Text>
        </View>
      )}
      <Text>cart</Text>
    </TouchableOpacity>
  );
}

export default CartHeader;
