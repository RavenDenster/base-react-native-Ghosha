import { View, Text, StyleSheet, Button, TextInput } from 'react-native';
import { Formik } from 'formik'
import { gStyle } from '../styles/style';

export default function FormM({addArticle}) {
  return (
    <View>
        <Formik initialValues={{name: '', annous: '', full: '', img: ''}} onSubmit={(values, action) => {
            addArticle(values)
            action.resetForm()
        }}>
            {(props) => (
                <View>
                    <TextInput 
                        style = {styles.input}
                        value={props.values.name} 
                        placeholder='Введите название' 
                        onChangeText={props.handleChange('name')}    
                    />
                    <TextInput 
                        style = {styles.input}
                        value={props.values.annous} 
                        multiline
                        placeholder='Введите анонс' 
                        onChangeText={props.handleChange('annous')}    
                    />
                    <TextInput 
                        style = {styles.input}
                        value={props.values.full} 
                        multiline
                        placeholder='Введите статью' 
                        onChangeText={props.handleChange('full')}    
                    />
                    <TextInput 
                        style = {styles.input}
                        value={props.values.img} 
                        placeholder='Введите фото' 
                        onChangeText={props.handleChange('img')}    
                    />
                    <Button title='Добарить' onPress={props.handleSubmit}/>
                </View>
            )}
        </Formik>
    </View>
  );
}  

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        marginTop: 15,
        padding: 15,
        borderColor: 'silver',
        borderRadius: 5
    }
});
