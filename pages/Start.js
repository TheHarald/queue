import React, { useEffect, useState, useContext } from 'react';
import { Alert, StyleSheet, Text, View, TextInput, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Button } from '../components/Button';
import { COLORS } from '../constants/theme';
import { AppContext } from '../context';


export const Start = ({ navigation }) => {

    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const { setUser } = useContext(AppContext)


    logIn = () => {
        console.log(name, password)
        setUser({ name, password })
        navigation.navigate('Main')

    }


    return (
        <View style={styles.main}>
            <Image source={require('../assets/icons/logo.png')}
                style={styles.image}
            />
            <TextInput
                style={styles.input}
                placeholder={'Имя'}
                onChangeText={text => setName(text)}
            />

            <TextInput
                style={styles.input}
                placeholder={'Пароль'}
                secureTextEntry={true}
                onChangeText={text => setPassword(text)}
            />
            <Button title={'Войти'} color={COLORS.blue} onPress={logIn} />
            <Text style={styles.textRef}
                onPress={() => console.log('register')}
            >Зарегистрироваться</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        backgroundColor: COLORS.gray,
        width: '100%',
        height: '100%'
    },
    input: {
        borderRadius: 6,
        borderWidth: 1,
        borderColor: COLORS.white,
        backgroundColor: COLORS.white,
        paddingVertical: 6,
        paddingLeft: 6,
        marginHorizontal: 8,
        fontSize: 17,
        marginBottom: 10

    },
    image: {
        width: 106,
        height: 79,
        alignSelf: 'center',
        marginTop: 110,
        marginBottom: 100

    },
    text: {
        fontSize: 17,
        alignSelf: 'center'
    },
    textRef: {
        marginTop: 10,
        fontSize: 17,
        alignSelf: 'center',
        color: COLORS.blue

    }

})