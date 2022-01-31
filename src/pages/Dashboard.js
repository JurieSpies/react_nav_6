import {useNavigation} from '@react-navigation/native';
import * as React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const Dashboard = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.mainContainer}>
      <Text>Dashboard Screen</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Home')}>
        <Text>Go to Home</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'grey',
  },
  button: {
    backgroundColor: 'white',
    padding: 10,
    marginTop: 50,
    borderRadius: 10,
  },
});

export default Dashboard;
