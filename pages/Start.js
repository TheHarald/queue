import React, { useEffect, useState } from 'react';
import { Alert, StyleSheet, Text, View, TextInput, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Button } from '../components/Button';
import { COLORS } from '../constants/theme';

export const Start = () => {

    const [name, setName] = useState('')
    const [password, setPassword] = useState('')



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
                onChangeText={text => setPassword(text)}
            />
            <Button title={'Войти'} color={COLORS.blue} onPress={() => console.log(name, password)} />
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
        marginTop: 80,
        marginBottom: 30

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