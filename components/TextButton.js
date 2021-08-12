import React, { useState } from 'react';
import { Alert, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Arrow from '../assets/icons/Arrow';
import { COLORS } from '../constants/theme'


export const TextButton = ({ onPress, title, color }) => {

    return (
        <TouchableOpacity onPress={onPress} style={styles.button}>
            <View style={{ paddingTop: 2 }}>
                <Arrow />
            </View>

            <Text style={{ ...styles.text, color }}>{title}</Text>
        </TouchableOpacity>)

}

const styles = StyleSheet.create({

    text: {
        fontSize: 18,
        paddingHorizontal: 8

    },
    button: {
        flexDirection: 'row'
    }
})