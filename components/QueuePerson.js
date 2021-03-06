import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { COLORS } from '../constants/theme';

export const QueuePerson = ({ student, position }) => {
    return (
        <View style={{ justifyContent: 'flex-end' }}>
            <View style={styles.main}>
                <Text style={styles.text}>{position} {student}</Text>
                {position !== '1' ?
                    <Text style={styles.textWait}>Ожидает</Text> :
                    <Text style={styles.textPass}>Сдаёт</Text>}


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
        alignSelf: 'center'
    },
    textPass: {
        fontSize: 17,
        marginHorizontal: 8,
        alignSelf: 'center',
        color: COLORS.green
    },
    textWait: {
        fontSize: 17,
        marginHorizontal: 8,
        alignSelf: 'center',
        color: COLORS.yellow
    }


})

