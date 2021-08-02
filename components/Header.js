import React, { useContext } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { COLORS } from '../constants/theme'
import { MainContext } from '../context';



export const Header = () => {

    const { loadFromStorage, log, inc, setVisibleSubject } = useContext(MainContext)

    return (
        <View style={styles.header}>
            <Text style={styles.text}>Очереди</Text>
            <TouchableOpacity style={styles.button} onPress={() => setVisibleSubject(true)}>

            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: COLORS.white,
        height: 90,
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 16,
        shadowColor: "black",
        shadowRadius: 3,
        shadowOffset: { width: 3, height: 3 }
    },
    text: {
        marginTop: 34,
        fontSize: 18,
        fontStyle: 'normal'
    },
    button: {
        width: 40,
        height: 40,
        backgroundColor: COLORS.blue,
        borderRadius: 5,
        alignSelf: 'flex-end',
        marginBottom: 10
    }
})

