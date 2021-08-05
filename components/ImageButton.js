import React from 'react';
import { StyleSheet, TouchableOpacity, Image, Alert } from 'react-native';
import { COLORS } from '../constants/theme'

export const ImageButton = ({ deleteSubject, id }) => {

    const handleDelete = () => {
        console.log(id)
        deleteSubject(id);
    }


    const handleDeleteWithAlert = () => Alert.alert(
        'Вы уверены что хотите удалить очередь?',
        'Вернуть её будет невозможно',
        [
            {
                text: 'Да',
                onPress: handleDelete
            },
            {
                text: 'Нет',
                style: 'cancel'
            }
        ]
    )

    return (
        <TouchableOpacity style={styles.button} onPress={handleDeleteWithAlert}>
            <Image
                style={styles.logo}
                source={require('../assets/icons/delete.png')}
            />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    logo: {
        height: 40,
        width: 40
    },
    button: {
        marginRight: 4,
        marginTop: 4
    }
})