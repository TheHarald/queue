import React, { useEffect, useState } from 'react';
import { Alert, StyleSheet, Text, View, TextInput, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Button } from '../components/Button';
import { COLORS } from '../constants/theme';

export const Start = () => {

    const [value, setValue] = useState('')
    const user = { name: '' }

    const save = async () => {
        try {
            await AsyncStorage.setItem('userName', value)
        } catch (error) {
            alert(error)
        }
    }

    const load = async () => {
        try {
            let name = await AsyncStorage.getItem('userName')
            if (name !== null) {
                setValue(name)
            }
        } catch (error) {
            alert(error)
        }
    }

    useEffect(() => {
        load();
    }, [])

    const remove = async () => {
        try {
            await AsyncStorage.removeItem('userName')
        } catch (error) {
            alert(error)
        } finally {
            setValue('')
        }
    }

    return (
        <View style={styles.main}>
            <Image source={require('../assets/icons/logo.png')}
                style={styles.image}
            />
            <Text style={styles.text}>Your name:{value}</Text>
            <TextInput style={styles.input} placeholder={'Ведите имя'} onChangeText={text => setValue(text)} />
            <Button title={'Сохрнить'} color={COLORS.blue} onPress={save} />
            <Button title={'Сбросить'} color={COLORS.red} onPress={remove} />
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
        marginBottom: 8,
        fontSize: 17,
        marginTop: 20
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
    }
})