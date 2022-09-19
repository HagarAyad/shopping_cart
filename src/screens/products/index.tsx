import React, {useEffect, useState} from 'react';
import {View, FlatList, RefreshControl, Text} from 'react-native';
import API_ENDPOINTS from '~api';
import {product} from '~types';
//--
import ProductItem from './components/productItem';
import styles from './styles';

const Products = () => {
  const [products, setProducts] = useState<product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const controller = new AbortController();

  const getProducts = async () => {
    try {
      const {data} = await API_ENDPOINTS.products({signal: controller.signal});
      setProducts(data);
    } catch (error) {
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const renderProductItem = ({item}: {item: product}) => {
    return <ProductItem item={item} />;
  };

  useEffect(() => {
    getProducts();
    return () => {
      controller.abort();
    };
  }, []);

  return (
    <View style={styles.container}>
      {hasError && (
        <View style={styles.centerContent}>
          <Text>Some error happened</Text>
        </View>
      )}
      <FlatList
        data={products}
        refreshControl={<RefreshControl refreshing={isLoading} />}
        keyExtractor={item => item?.id?.toString()}
        renderItem={renderProductItem}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default Products;
