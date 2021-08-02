import React, { useContext, useEffect, useState } from 'react';
import { Alert, StyleSheet, Text, View, TextInput, Image } from 'react-native';
import { Square } from './Square';
import { TestContext } from '../../context';

export const Rect = () => {

    const { log, print, addObj, value } = useContext(TestContext)
    return (
        <View style={styles.main}>
            <Square toPrint={() => addObj(value)} />
            <Square toPrint={print} />
            <Square toPrint={log} />
        </View>)

}

const styles = StyleSheet.create({
    main: {
        width: '100%',
        height: 300,
        backgroundColor: '#121212',
        marginTop: 28,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 30
    }
})