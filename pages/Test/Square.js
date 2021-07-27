import React, { useEffect, useState, useContext } from 'react';
import { Alert, StyleSheet, Text, View, TextInput, Image, Touchable, TouchableOpacity } from 'react-native';
import { TestContext } from '../../context';

export const Square = ({ toPrint }) => {

    return (
        <TouchableOpacity style={styles.square} onPress={toPrint}>

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    square: {
        width: 50,
        height: 50,
        backgroundColor: 'pink'
    }
})