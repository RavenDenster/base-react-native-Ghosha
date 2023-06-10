import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Button, Alert, Image, TouchableHighlight, TouchableWithoutFeedback, Platform } from 'react-native';

export default function FirstMet() {
  const handleTextPress = () => console.log('Text pressed')
  const handleButtonPress = () => Alert.alert('itProger', 'Main message', [
    { text: 'Да', onPress: () => console.log('Yes button') },
    { text: 'Отмена', onPress: () => console.log('No button') }
  ])
  const handleButtonPress2 = () => Alert.prompt('itProger', 'Main message', text => console.log(text))

  return (
    <SafeAreaView style={styles.container}>
      {/* <Text numberOfLines={1} style={styles.text} onPress={handleTextPress}>Hello! {'\n'} Привет!</Text> */}
      <Button title='Нажми на меня' color='red' onPress={handleButtonPress} />
      <Button title='Нажми на меня' color='red' onPress={handleButtonPress2} />
      <Button title='Нажми на меня' style={[styleBut, styles.text]} />

      <TouchableWithoutFeedback onPress={handleTextPress}>
        <Image blurRadius={2} source={{
          width: 200,
          height: 150,
          uri: "https://img.championat.com/s/735x490/news/big/a/s/populyarnogo-strimera-sng-papicha-obvinili-v-sovraschenii-shkolnicy_16424288921469594749.jpg"
        }} />
      </TouchableWithoutFeedback>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}  

const styleBut = {backgroundColor: Platform.OS == 'ios' ? 'red' : 'blue'}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  text: {
    color: 'red'
  }
});
