import React from 'react'
import {TextInput as Input}  from 'react-native-paper'
import { StyleSheet, View } from 'react-native'

const PasswordInput = ({...props}) => {
  return (
    <View style={styles.container}>
        <Input {...props}
        style={styles.input}
        placeholder='Password'
        underlineColor="transparent"
        mode="outlined"
        activeOutlineColor="blue"
        outlineColor="red"
        />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        width: "80%",
        height: 60,
        alignItems: "center"


    },
    input: {
      width: "90%",
      height: 50,
      alignItems: "center"

    }
})

export default PasswordInput;