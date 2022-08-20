import React from "react";
import { Text,View,StyleSheet,TextInput, TouchableOpacity} from "react-native";

const Login = ({ navigation }) => {
  return (
    <View>
        <TouchableOpacity>
        <Text style={styles.text1}>Login</Text>
        </TouchableOpacity>
    </View>
  )
};


// create stylesheet css
const styles = StyleSheet.create({
    text1: {
        fontSize: 100,
        color: 'red',
    }
});


export default Login;
