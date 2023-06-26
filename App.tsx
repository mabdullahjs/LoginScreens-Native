import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'

const App = () => {
  return (
    <View style={styles.container}> 
      <Text style={styles.maintext}>Login Screen</Text>
      <TextInput
        style={styles.input}
      />
      <TextInput
        style={styles.input2}
      />
      <TouchableOpacity style={styles.button}>
        <Text>Press Here</Text>
      </TouchableOpacity>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center'
    // alignItems: 'center',
  },
  maintext:{
    textAlign:'center',
    color:'black',
    fontSize:25,
  },
  input: {
    height: 40,
    margin: 20,
    borderWidth: 1,
    padding: 10,
    marginTop:40,
    borderRadius:5
  },
  input2:{
    height: 40,
    margin: 20,
    borderWidth: 1,
    padding: 10,
    marginTop:10,
    borderRadius:5
  },
  button:{
    alignItems: 'center',
    backgroundColor: 'purple',
    padding: 10,
    marginLeft:100,
    marginRight:100,
    marginTop:20,
    borderRadius:20
  }
})