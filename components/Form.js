import React, {useState} from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

export default function Form({ addHandler }) {
 
  const [text, setValue] = useState('')

  const onChange = (text) => {
    setValue(text)
  }

  return (
    <View style={styles.main}>
     <TextInput style={styles.input} onChangeText={onChange} placeholder='введите...'/>
     <Button color='green' onPress={() => addHandler(text)} title='Добавть задачу'/>
    </View>
  );
}  

const styles = StyleSheet.create({
    input: {
        borderBottomWidth: 1,
        borderColor: '#000',
        padding: 10,
        marginHorizontal: '20%',
        marginVertical: 30,
        width: '60%'
    }
});
