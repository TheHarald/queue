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

export const Main = ({ navigation }) => {

    const [visibleModal, setVisibleModal] = useState(false);
    const [isLoading, setIsLoading] = useState(true)
    const [value, setValue] = useState('')
    const [visibleSubject, setVisibleSubject] = useState(false)
    const [currentSubject, setCurrentSubject] = useState()
    const [subjects, setSubjects] = useState()

    const url = 'http://192.168.0.107:3000/subjects'


    const getSubjects = async () => {
        try {
            const response = await fetch(url);
            const json = await response.json();
            //console.log(json);
            setSubjects(json);
            //setIsLoading(false);
        } catch (error) {
            console.error(error);
        }
    }


    const postSubject = (title) => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                id: Date.now().toString(),
                subject: title,
                students: [
                    {
                        id: '13242',
                        name: 'Ivanov Ivan',
                        position: '1'
                    },
                    {
                        id: '13241',
                        name: 'Pavlov Ivan',
                        position: '2'
                    },
                    {
                        id: '131',
                        name: 'Ivanov Armen',
                        position: '3'
                    }
                ]
            })
        };

        fetch(url, requestOptions)
            .then(response => response.json())
            .then(data => { console.log(data); getSubjects() });
    }

    const deleteSubject = (id) => {
        const requestOptions = {
            method: 'DELETE'
        }
        fetch(`${url}/${id}`, requestOptions)
            .then(response => response.json())
            .then(data => { console.log(data); getSubjects() });
    }


    const getSubject = async (id) => {
        console.log('card pressed = ', id)
        try {
            const response = await fetch(`${url}/${id}`);
            const json = await response.json();
            console.log('recived data ->', json);
            setCurrentSubject(json);
            console.log('set data ->', currentSubject);
            setVisibleSubject(true);
            setIsLoading(false)


        } catch (error) {
            console.error(error);
            alert(`Что-то пошло не так${error}`)
        }

    }







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


    const handleAdd = () => {
        if (value !== '') {
            postSubject(value)
            setValue('')
            setVisibleModal(false)

        } else {
            Alert.alert('Введите дисциплину')
        }
        console.log('--------- add subjects -----------')
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
        console.log('get subjects from db')
        getSubjects();
    }, [])



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
            handleClose, url, getSubject,
            loadFromStorage, log, add,
            visibleSubject, setVisibleSubject, currentSubject,
            getSubjects, postSubject,
            deleteSubject, isLoading, setIsLoading, setCurrentSubject

        }}>
            <View style={styles.container}>
                <Header handleNavigate={() => navigation.navigate('Start')} />
                <SubjectList />
                <Subject />
                <AddWindow />
                <Button
                    title={'Добавить очередь'}
                    color={COLORS.blue}
                    onPress={() => setVisibleModal(true)}
                />
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