import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Button,
  Platform,
  StyleSheet,
} from 'react-native';

import MyButton from './components/MyButton';

const Main = () => {
  return (
    <SafeAreaView>
      <View style={styles.viewStyle}>
        <Text style={styles.textStyle}>Merhaba!!</Text>
      </View>

      <View>
        <Text>{Platform.OS}</Text>

        <Text>{Platform.OS}</Text>
        <Text>{Platform.OS}</Text>
        <Text>{Platform.OS}</Text>

        <Button title="Click me" onClick={() => alert('clicked!!')} />
      </View>
      <MyButton title="Go" btntheme="button1" />
      <MyButton title="Hello" btntheme="button2" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: '#ddd',
    margin: 10,
    padding: 10,
    borderRadius: 20,
  },
  textStyle: {
    fontSize: 40,
    color: 'red',
    alignItems: 'center',
  },
});
export default Main;
