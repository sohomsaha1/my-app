import {React, useState} from "react";
import { Text,View,StyleSheet, TouchableOpacity, ScrollView, Alert} from "react-native";
import { Button } from "react-native-paper";
import Login from "./Login";
import UsernameInput from "./components/UsernameInput.js";
import PasswordInput from "./components/PasswordInput";

const Home = ({ navigation }) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleLogin = () => {
    if (password.length > 5) {
      navigation.navigate('Login');
    }
    else{
     Alert.alert("Error","Password too short");
    }
    
  }
  

  return (
    <ScrollView>
    <View style={styles.container}>
        <TouchableOpacity  onPress={() => navigation.navigate("Login")}>
        <Text style={styles.text1}>Home</Text>
        </TouchableOpacity>
              <UsernameInput onChangeText={(text) => setEmail(text)}/>
 
              <PasswordInput onChangeText={(text) => setPassword(text)}/>
  
              <Button mode="outlined" onPress={() => handleLogin()}>
                Log in
              </Button>

    </View>
    </ScrollView>
  )
};





// create stylesheet css
const styles = StyleSheet.create({
    text1: {
        fontSize: 100,
        color: 'red',
    },

    container: {
      alignItems: "center",
      justifyContent: "center",
      
    }
});


export default Home;
