import React, { useEffect, useState } from 'react';
import { Alert, StyleSheet, Text, View, TextInput, Image } from 'react-native';

import { TestContext } from '../../context';
import { Rect } from './Rect';

export const Test = () => {

    const log = (string = '') => {
        console.log('provider works', string)
    }

    const print = () => {
        console.log('test')
    }

    return (
        <TestContext.Provider value={{ log, print }}>
            <View>
                <Rect />
            </View>
        </TestContext.Provider>

    )
}

const styles = StyleSheet.create({
    main: {

    }
})