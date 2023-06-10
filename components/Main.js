import React, { useState } from "react";
import { View, Text, StyleSheet, Button, FlatList, Modal, TouchableOpacity, Image } from 'react-native';
import { gStyle } from '../styles/style';
import { Ionicons } from '@expo/vector-icons'
import FormM from "./FormM";

export default function Main({ navigation }) {
  
  const [news, setNews] = useState([
    {name: 'Google', annous: 'Google!!!', full: 'Google is cool!', key: '1', img: 'https://cs14.pikabu.ru/post_img/big/2021/06/24/9/1624545021114556490.jpg'},
    {name: 'Apple', annous: 'Apple!!!', full: 'Apple is cool!', key: '2', img: 'https://i.ytimg.com/vi/BQfF5p4f8NA/maxresdefault.jpg'},
    {name: 'Facebook', annous: 'Facebook!!!', full: 'Facebook is cool!', key: '3', img: 'https://i.ytimg.com/vi/QdmOTo3vUIY/maxresdefault.jpg'},
  ])

  const [modalWindow, setModalWindow] = useState(false)

  const addArticle = (article) => {
    setNews((list) => {
      article.key = Math.random().toString()
      return [
        article,
        ...list
      ]
    })
    setModalWindow(false)
  }

  // const loadScene = () => {
  //   navigation.navigate('Contacts')
  // }
  
  return (
      <View style={gStyle.main}>   
        <Modal visible={modalWindow}>
          <View style={gStyle.main}>
            <Ionicons name='close-circle' size={34} color='red' style={styles.iconClose} onPress={() => setModalWindow(false)}/>
            <Text style={styles.title}>Форма добавления статей</Text>
            <FormM addArticle={addArticle}/>
          </View>
        </Modal>
        <Ionicons name='add-circle' size={34} color='green' style={styles.iconAdd} onPress={() => setModalWindow(true)}/>
        <Text style={[gStyle.title, styles.header]}>Main</Text>
        {/* <Button title='Открыть страницу' onPress={loadScene}></Button> */}
        <FlatList data={news} renderItem={({item}) => (
          <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('FullInfo', item)}>  {/* item передаётся в сам компонент */}
            <Image style={styles.image} source={{uri: item.img}}/>
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.annous}>{item.annous}</Text>
          </TouchableOpacity>
        )}/>
      </View> 
    )
}

const styles = StyleSheet.create({
  header: {
    marginBottom: 30
  },
  item: {
    width: '100%',
    marginBottom: 30
  },
  title: {
    fontFamily: 'mt-bold',
    fontSize: 22, 
    textAlign: 'center',
    marginTop: 20,
    color: '#474747'
  },
  annous: {
    fontFamily: 'mt-light',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 5,
    color: '#474747'
  },
  image: {
    width: '100%',
    height: 200
  },
  iconAdd: {
    textAlign: 'center',
    marginBottom: 15
  },
  iconClose: {
    textAlign: 'center'
  }
});