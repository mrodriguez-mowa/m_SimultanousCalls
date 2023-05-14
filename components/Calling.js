import React, { useState } from 'react'
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';

const Calling = ({ route }) => {

  const { arrayNumbers } = route.params

  const numberStatus = arrayNumbers.map((number, idx) => {
    return {
      id: idx,
      number: number,
      status: 'Llamando...'
    }
  })

  const [numbers, setNumbers] = useState(numberStatus)



  return (
    <View style={styles.container}>
      <Text className="text-2xl text-gray-800 font-bold">
        Otra Vista
      </Text>

      <Text className="my-6" >
        <View>
          {numbers.map((number, idx) => {
            return <View key={idx} className="flex flex-row my-2 justify-between">
              <Text className="text-gray-600 mx-4 text-lg font-semibold">{number.number}</Text>
              <Text className="bg-green-100 text-green-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">{number.status}</Text>
            </View>
          })}
        </View>
      </Text>
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

export default Calling