import React, { useContext, useState } from 'react';
import { FlatList, Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { COLORS } from '../constants/theme'
import { MainContext } from '../context';
import { Button } from './Button';


export const AddWindow = () => {

    const { visibleModal, setValue, handleAdd, handleClose } = useContext(MainContext)

    return (
        <Modal visible={visibleModal}
            animationType="slide"
        >
            <View style={styles.window}>
                <Text style={styles.text}>Создание очереди</Text>
                <TextInput
                    style={styles.input}
                    placeholder={'Дисциплина'}
                    onChangeText={setValue}
                    maxLength={40}
                />
                <Button title={'Добавить'} onPress={handleAdd} color={COLORS.green} />
                <Button title={'Закрыть'} onPress={handleClose} color={COLORS.red} />
            </View>
        </Modal>
    )

}
const styles = StyleSheet.create({
    window: {
        paddingTop: Platform.OS === 'ios' ? 16 : 8
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

