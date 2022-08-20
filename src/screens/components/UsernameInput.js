import React from 'react'
import {TextInput as Input}  from 'react-native-paper'
import { StyleSheet } from 'react-native'

const UsernameInput = ({...props}) => {
  return (
    <View style={styles.container}>
        <Input {...props}
        placeholder='Username'
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
        alignItems: "center",


    }
})

export default UsernameInput