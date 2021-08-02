import React, { useContext } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Alert } from 'react-native';
import { COLORS } from '../constants/theme'
import { MainContext } from '../context';
import { ImageButton } from './ImageButton';

export const QueueSubject = ({ subject, students, deleteSubject, id }) => {

    const { setVisibleSubject, findCurrentSubject } = useContext(MainContext)

    const test = () => {
        console.log('card pressed', id)
        console.log(subject)
        console.log(students)
        findCurrentSubject(id)
        // setVisibleSubject(true)
        //console.log('passed')
    }

    return (
        <TouchableOpacity style={styles.card} onPress={test}>
            <View style={styles.title}>
                <Text style={styles.text}>{subject}</Text>
                <ImageButton deleteSubject={deleteSubject} id={id} />
            </View>
            <Text style={styles.lastinfo} onPress={() => console.log('sddfsf', students[students.length - 1])}>
                Последний {students.reduce((acc, student) => acc = acc > student.position ? acc.name : student.name, 0)}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card: {
        height: 100,
        backgroundColor: COLORS.white,
        marginTop: 5,
        marginHorizontal: 8,
        borderRadius: 10,
        justifyContent: 'space-between'
    },
    text: {
        alignItems: 'flex-start',
        marginTop: 10,
        marginLeft: 10,
        fontSize: 17,
        maxWidth: '80%'
    },
    lastinfo: {
        fontSize: 17,
        marginLeft: 10,
        marginBottom: 10,

    },
    title: {
        justifyContent: 'space-between',
        flexDirection: 'row'
    }

})
