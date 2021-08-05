import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { COLORS } from '../constants/theme';

export const QueuePerson = ({ student, position }) => {
    return (
        <View style={{ justifyContent: 'flex-end' }}>
            <View style={styles.main}>
                <Text style={styles.text}>{position} {student}</Text>
                <Text style={position !== '1' ? styles.textWait : styles.textPass}>Статус: сдаёт</Text>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        height: 50,
        backgroundColor: COLORS.white,
        borderRadius: 10,
        marginHorizontal: 8,
        marginTop: 8,
        justifyContent: 'space-between',
        flexDirection: 'row'

    },
    text: {
        fontSize: 17,
        marginHorizontal: 8,
        textAlignVertical: 'center'
    },
    textPass: {
        fontSize: 17,
        marginHorizontal: 8,
        textAlignVertical: 'center',
        color: COLORS.green
    },
    textWait: {
        fontSize: 17,
        marginHorizontal: 8,
        textAlignVertical: 'center',
        color: COLORS.yellow
    }


})

