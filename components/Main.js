import React, {useState} from 'react'
import { Alert, Button,  StyleSheet, Text, TextInput, View } from 'react-native';

const Main = ({navigation}) => {

  const [phoneNumber, setPhoneNumber] = useState('')

  const [arrayNumbers, setArrayNumbers] = useState([])

  const addNumber = () => {

    let number = parseInt(phoneNumber)
    if (isNaN(number)) {
      Alert.alert('Error', 'El número debe ser un número')
      setPhoneNumber('')
    } else {
      if (phoneNumber === '') return
      if (arrayNumbers.includes(phoneNumber)) return
      if (phoneNumber.length != 9) return Alert.alert('Error', 'El número debe tener 9 dígitos')
      setArrayNumbers([...arrayNumbers, phoneNumber])
      setPhoneNumber('')
    }

  }

  return (
    <View style={styles.container}>
            <Text className="text-2xl text-gray-800 font-bold">
              Prueba APP Llamadas
            </Text>

            <Text className="my-6" >
              Números a llamar:
            </Text>

            <View className="flex my-8 flex-col rounded-md border-sky-500">
              {arrayNumbers.map((number, idx) => {
                return <View key={idx} className="flex flex-row my-2 justify-between border-b-2 border-gray-300">
                  <Text className="text-gray-600 mx-4 text-lg font-semibold">{number}</Text>
                  <Button color='red' onPress={() => {
                    let newArray = arrayNumbers.filter((num, index) => index !== idx)
                    setArrayNumbers(newArray)
                  }} title='Eliminar'></Button>
                </View>
              })}
            </View>

            <View className="flex w-8/12 mb-10 flex-row justify-center ">
              <TextInput keyboardType='numeric' maxLength={9} value={phoneNumber} onChangeText={text => setPhoneNumber(text)} className="border w-9/12 mx-4 px-4 text-gray-600 border-gray-300 rounded-lg" />
              <Button onPress={addNumber} title='Agregar'></Button>
            </View>

            <Button onPress={() => navigation.navigate('Call', {arrayNumbers: arrayNumbers}) } title='LLAMAR' />

          </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default Main