import React, { useContext } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { COLORS } from '../constants/theme'
import { AppContext, MainContext } from '../context';



export const Header = ({ handleNavigate }) => {

    const { loadFromStorage, log, getSubjects, setVisibleSubject } = useContext(MainContext)
    const { user } = useContext(AppContext)

    return (
        <View style={styles.header}>
            <Text style={styles.text}>Очереди</Text>
            <View style={{ flexDirection: 'row', alignContent: 'center' }}>
                <TouchableOpacity style={styles.button} onPress={() => console.log('test button')}>
                </TouchableOpacity>
                <Text style={{ ...styles.text, color: COLORS.blue }} onPress={handleNavigate}>Выйти | {user.name}</Text>
            </View>
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
        shadowColor: COLORS.black,
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.5,
        shadowRadius: 8,
        elevation: 12
    },
    text: {
        marginTop: 34,
        fontSize: 18
    },
    button: {
        width: 40,
        height: 40,
        backgroundColor: COLORS.blue,
        borderRadius: 5,
        alignSelf: 'flex-end',
        marginRight: 40
    }
})

