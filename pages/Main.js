import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, useContext } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import { Header } from '../components/Header';
import { QueueSubject } from '../components/QueueSubject';
import { SubjectList } from '../components/SubjectList';
import { COLORS } from '../constants/theme'
import { Button } from '../components/Button';
import { AddWindow } from '../components/AddWindow';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MainContext } from '../context';
import { Subject } from './Subject';

export const Main = () => {

    const [visibleModal, setVisibleModal] = useState(false);
    const [value, setValue] = useState('')
    const [visibleSubject, setVisibleSubject] = useState(false)
    const [currentSubject, setCurrentSubject] = useState({
        id: '12',
        subject: 'TEst123',
        students: [
            {
                name: 'Ivanov Ivan',
                position: '1'
            },
            {
                name: 'Pavlov Ivan',
                position: '2'
            },
            {
                name: 'Petrov Andrew',
                position: '3'
            }]
    })

    const [test, setTest] = useState(0)

    const inc = () => {
        console.log('test', test)
        setTest(a => a + 1)
        console.log('test', test)
    }


    const [subjects, setSubjects] = useState([
        {
            id: '12',
            subject: 'TEst',
            students: [
                {
                    name: 'Ivanov Ivan',
                    position: '1'
                },
                {
                    name: 'Pavlov Ivan',
                    position: '2'
                },
                {
                    name: 'Petrov Andrew',
                    position: '3'
                }]
        }
    ])

    const addSubject = (title) => {
        setSubjects(prevState => [
            ...prevState,
            {
                id: Date.now().toString(),
                subject: title,
                students: [
                    {
                        name: 'Ivanov Ivan',
                        position: '1'
                    },
                    {
                        name: 'Pavlov Ivan',
                        position: '2'
                    },
                    {
                        name: 'Ivanov Armen',
                        position: '3'
                    }
                ]
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

    const findCurrentSubject = (id) => {
        //console.log(subjects)
        let temp = subjects.filter(subject => subject.id === id)
        console.log('current subject set --------------', temp)
        setCurrentSubject(temp)
        console.log('========================================s', currentSubject)
    }

    const handleAdd = () => {
        if (value !== '') {
            addSubject(value)
            setValue('')
            setVisibleModal(false)

        } else {
            Alert.alert('Введите дисциплину')
        }
        console.log('add subjects -----------')
        console.log(subjects);
    }

    const handleClose = () => {
        setVisibleModal(false)
        setValue('')
    }



    const saveInStorage = async () => {
        console.log('saving ------------------')
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
        console.log('useeeffect load')
    }, [])

    useEffect(() => {
        console.log('useeffect subjects')
        console.log(subjects)
        saveInStorage()
    }, [subjects])

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
            loadFromStorage, log, add, inc,
            visibleSubject, setVisibleSubject,
            findCurrentSubject, currentSubject

        }}>
            <View style={styles.container}>
                <Header />
                <SubjectList />
                <Subject />
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