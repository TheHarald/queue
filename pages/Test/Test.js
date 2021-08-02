import React, { useEffect, useState } from 'react';
import { Alert, StyleSheet, Text, View, TextInput, Image } from 'react-native';

import { TestContext } from '../../context';
import { Rect } from './Rect';

export const Test = () => {

    const [count, setCount] = useState(0)
    const [value, setValue] = useState('')

    const log = () => {
        console.log('-------------objs---------', obj)
    }

    const print = () => {
        console.log('value - ', value)
    }

    const [obj, setObj] = useState([{}])

    const addObj = (val) => {
        console.log('add', val)
        console.log('============================================')
        setObj(prev => [
            ...prev,
            {
                id: Date.now().toString(),
                text: val
            }
        ]);
    }







    return (
        <TestContext.Provider value={{ log, print, addObj, value }}>
            <View>
                <Rect />
                <Text style={{ color: 'black', alignSelf: 'center', paddingTop: 10 }}>{value}</Text>
                <TextInput placeholder={'text'} style={{ alignSelf: 'center' }} onChangeText={(a) => { setValue(a); console.log(a) }} />
            </View>
        </TestContext.Provider>

    )
}

const styles = StyleSheet.create({
    main: {

    }
})