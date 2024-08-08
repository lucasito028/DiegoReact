import React, {useState} from 'react';
import {View, Text, TextInput, Button, Stylesheet} from 'react-native';

export default function Login({onLogin}){
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   
   const handleSubmit = () => {
       onLogin(email, password);
   }

   return(
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <TextInput
                style={styles.input}
                placeholder="Email"
                keyboardType="email-adress"
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                style={styles.input}
                placeholder="Senha"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />
            <Button title="Logar" onPress={handleSubmit}/>
            <Button title="Recuperar Senha"/>
        </View>

   );
};
const styles = Stylesheet.create({
    container:{
        background: 'white',
        padding: 20,
        borderRadius: 5,
        shadowColor: '#000',
        shadowOfset: { width: 0, heght: 2},
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 5,
        width: '80%',
    },
    title:{
       fontSize: 24,
       marginBottom: 20,
    },
    input:{
        height:40,
        borderColor: '#ccc',
        borderWidth: 1,
        marginBottom: 10,
        padding: 10,
        borderRadius: 5,
    },
});