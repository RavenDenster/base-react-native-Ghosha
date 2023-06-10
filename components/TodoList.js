import React, {useState} from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import FirstMet from './FirstMet';
import Header from './Header';
import ListItem from './ListItem';
import Form from './Form';

export default function TodoList() {
  const [listOfItems, setListOfItems] = useState([
    {text: 'Купить молоко', key: '1'},
    {text: 'Помыть машину', key: '2'},
    {text: 'Купить картошку', key: '3'},
    {text: 'Стать миллионером', key: '4'}
  ])

  const addHandler = (text) => {
    setListOfItems((list) => {
      return [
        {text: text, key: Math.random().toString(36).substring(7)},
        ...list
      ]
    })
  }

  const deleteHandler = (key) => {
    setListOfItems((list) => {
      return list.filter(listOfItems => listOfItems.key != key)
    })
  }

  return (
    <View>
     <Header/>
     <Form addHandler={addHandler}/>
     <View>
      <FlatList data={listOfItems} renderItem={({item}) => (
        <ListItem el={item} deleteHandler={deleteHandler}/>
      )}/>
     </View>
    </View>
  );
}   
 
const styles = StyleSheet.create({

});
