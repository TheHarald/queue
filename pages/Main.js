import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import { Header } from '../components/Header';
import { QueueSubject } from '../components/QueueSubject';
import { SubjectList } from '../components/SubjectList';
import { COLORS } from '../constants/theme'
import { Button } from '../components/Button';
import { AddWindow } from '../components/AddWindow';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MainContext } from '../context';

export const Main = () => {

    const [visibleModal, setVisibleModal] = useState(false);
    const [value, setValue] = useState('')


    const [subjects, setSubjects] = useState()

    const addSubject = (title) => {
        setSubjects(prevState => [
            ...prevState,
            {
                id: Date.now().toString(),
                subject: title,
                lastStudent: {
                    name: 'none',
                    position: 'none'
                }
            }
        ]);

    }

    const log = () => {
        console.log('====================================');
        console.log(subjects);
        console.log('====================================');
    }



    const deleteSubject = (id) => {
        console.log('try to delete')
        setSubjects(prev => prev.filter(subject => subject.id !== id))
    }

    const handleAdd = () => {
        if (value !== '') {
            addSubject(value)
            setValue('')
            setVisibleModal(false)

        } else {
            Alert.alert('Введите дисциплину')
        }
    }

    const handleClose = () => {
        setVisibleModal(false)
        setValue('')
    }



    const saveInStorage = async () => {
        console.log('saving')
        console.log(subjects)
        try {
            await AsyncStorage.setItem('subjects', JSON.stringify(subjects))
        } catch (error) {
            alert(error)
        }
    }

    const loadFromStorage = async () => {
        console.log('loadding')
        try {
            let subs = await AsyncStorage.getItem('subjects')
            if (subs !== null) {
                setSubjects(JSON.parse(subs))
            }
        } catch (error) {
            alert(error)
        }
    }

    useEffect(() => {
        loadFromStorage();
    }, [])

    const removeFromStorage = async () => {
        try {
            await AsyncStorage.removeItem('subjects')
        } catch (error) {
            alert(error)
        } finally {
            setValue('')
        }
    }

    const add = async () => {
        handleAdd();
        saveInStorage();
    }


    return (
        <MainContext.Provider value={{
            visibleModal, setVisibleModal,
            value, setValue,
            subjects, setSubjects,
            addSubject, handleAdd,
            handleClose, deleteSubject,
            loadFromStorage, log, add

        }}>
            <View style={styles.container}>
                <Header />
                <SubjectList />
                <AddWindow />
                <Button title={'Добавить очередь'} color={COLORS.blue} onPress={() => setVisibleModal(true)} />
            </View>
        </MainContext.Provider>

    );
}


const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: COLORS.gray,

    },
});