import { View, Text, StyleSheet, Button, Image } from 'react-native';
import { gStyle } from '../styles/style';

export default function FullInfo({ route }) {
    // const loadScene = () => {
    //   navigation.goBack()
    // }

    return (
      <View style={gStyle.main}>  
        {/* <Text style={gStyle.title}>FullInfo</Text> */}
        {/* <Button title='Открыть страницу' onPress={loadScene}></Button> */}
        <Image source={{
              width: '100%',
              height: 200,
              uri: route.params.img
            }}/>
        <Text style={[gStyle.title, styles.header]}>{route.params.name}</Text>
        <Text style={styles.full}>{route.params.full}</Text>
      </View>
    )
}

const styles = StyleSheet.create({
  full: {
    fontFamily: 'mt-light',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
    color: '#f55151'
  },
 
  header: {
    fontSize: 25, 
    marginTop: 25
  }
});