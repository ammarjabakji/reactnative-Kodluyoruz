import React, {useState} from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

const MyButton = ({title, btntheme}) => {
  console.log(title);
  const [count, setCount] = useState(0);
  const onPress = () => setCount((prevCount) => prevCount + 1);
  return (
    <TouchableOpacity
      style={styles[btntheme]}
      onPress={onPress}
      onLongPress={() => console.log('Long press ...')}>
      <Text>
        {title} Press number {count}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button1: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
  button2: {
    alignItems: 'center',
    backgroundColor: 'red',
    padding: 20,
  },
});

export default MyButton;
