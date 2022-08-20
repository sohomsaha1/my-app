import {React, useState} from "react";
import { Text,View,StyleSheet,TextInput, TouchableOpacity} from "react-native";
import Login from "./Login";

const Home = ({ navigation }) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    navigation.navigate('Login');
  }

  return (
    <View>
        <TouchableOpacity  onPress={() => navigation.navigate("Login")}>
        <Text style={styles.text1}>Home</Text>
        </TouchableOpacity>
            <View>
                
            </View>
        <TextInput onChange={() => }>
            
        </TextInput>
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


export default Home;
