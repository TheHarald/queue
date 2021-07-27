import React, { useContext, useState } from 'react';
import { FlatList, Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { COLORS } from '../constants/theme'
import { MainContext } from '../context';
import { Button } from './Button';


export const AddWindow = () => {

    const { visibleModal, setValue, handleAdd, handleClose, add } = useContext(MainContext)

    return (
        <Modal visible={visibleModal}  >
            <View >
                <Text style={styles.text}>Создание очереди</Text>
                <TextInput style={styles.input} placeholder={'Дисциплина'} onChangeText={setValue} />
                <Button title={'Добавить'} onPress={add} color={COLORS.green} />
                <Button title={'Закрыть'} onPress={handleClose} color={COLORS.red} />
            </View>
        </Modal>
    )

}
const styles = StyleSheet.create({
    window: {
        height: '100%',
        width: '100%',
        backgroundColor: COLORS.black,
        borderRadius: 10,
        opacity: 1
    },
    input: {
        borderRadius: 6,
        borderWidth: 1,
        borderColor: COLORS.gray,
        paddingVertical: 6,
        paddingLeft: 6,
        marginHorizontal: 8,
        marginBottom: 8,
        fontSize: 17,
        marginTop: 20
    },
    text: {
        fontSize: 17,
        alignSelf: 'center',
        marginTop: 10,

    }
})

