import {useNavigation} from '@react-navigation/native';
import {useQuery} from 'graphql-hooks';
import * as React from 'react';
import {
  ActivityIndicator,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const PRODUCTS = `query{
  products{
    name
    status
    description
    imageUrl
  }
}`;

const HomeScreen = () => {
  const navigation = useNavigation();
  const {data, loading, error} = useQuery(PRODUCTS);

  return (
    <View style={styles.mainContainer}>
      {error && (
        <>
          <Text style={styles.errorText}>API Error. Please reload</Text>
          <TouchableOpacity
            onPress={() =>
              navigation.reset({
                index: 0,
                routes: [{name: 'Home'}],
              })
            }>
            <Text>Refresh</Text>
          </TouchableOpacity>
        </>
      )}
      {loading && <ActivityIndicator color="green" size="large" />}
      {data &&
        data.products.map(product => (
          <>
            <Text>{product.name}</Text>
            <Image style={styles.imageStyle} source={{uri: product.imageUrl}} />
          </>
        ))}
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  errorText: {
    color: '#f10',
    fontSize: 20,
  },
  imageStyle: {
    height: 100,
    width: 100,
  },
});

export default HomeScreen;
