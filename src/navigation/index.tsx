import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
//---
import Products from '~screens/products';
import Cart from '~screens/cart';
//--
import {APP_SCREENS} from './appScreens.constant';
import CartHeader from './component/cartHeader';

const Stack = createNativeStackNavigator();

function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={APP_SCREENS.products}
          component={Products}
          options={() => ({
            headerTitleAlign: 'center',
            headerRight: () => <CartHeader />,
          })}
        />
        <Stack.Screen
          name={APP_SCREENS.cart}
          component={Cart}
          options={() => ({
            headerTitleAlign: 'center',
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;
