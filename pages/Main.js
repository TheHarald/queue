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
import { AppContext, MainContext } from '../context';
import { Subject } from './Subject';

export const Main = ({ navigation }) => {

    const [visibleModal, setVisibleModal] = useState(false);
    const [isLoading, setIsLoading] = useState(true)
    const [value, setValue] = useState('')
    const [visibleSubject, setVisibleSubject] = useState(false)
    const [currentSubject, setCurrentSubject] = useState()
    const [subjects, setSubjects] = useState()
    const [isGetSubjects, setIsGetSubjects] = useState(true)

    const url = 'http://192.168.0.107:3000/subjects'
    const { user } = useContext(AppContext)


    const getSubjects = async () => {
        try {
            const response = await fetch(url);
            const json = await response.json();
            //console.log(json);
            setSubjects(json);
            setIsGetSubjects(false)
        } catch (error) {
            alert('Нет доступа к базе данных');
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
            .then(data => { console.log(data); getSubjects() })
            .catch('Нет доступа к базе данных');
    }

    const deleteSubject = (id) => {
        const requestOptions = {
            method: 'DELETE'
        }
        fetch(`${url}/${id}`, requestOptions)
            .then(response => response.json())
            .then(data => { console.log(data); getSubjects() })
            .catch('Нет доступа к базе данных');

    }


    const getSubject = async (id) => {
        console.log('card pressed = ', id)
        try {
            const response = await fetch(`${url}/${id}`);
            const json = await response.json();
            //console.log('recived data ->', json);
            setCurrentSubject(json);
            //console.log('set data ->', currentSubject);
            setVisibleSubject(true);
            setIsLoading(false)


        } catch (error) {
            console.error(error);
            alert(`Что-то пошло не так${error}`)
        }

    }

    const setInQueue = () => {
        let pos = currentSubject.students.length + 1

        currentSubject.students.push({
            id: Date.now().toString(),
            name: user.name,
            position: pos.toString()
        })

        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                id: currentSubject.id,
                subject: currentSubject.subject,
                students: currentSubject.students

            })
        };

        //console.log(requestOptions)

        fetch(`${url}/${currentSubject.id}`, requestOptions)
            .then(response => response.json())
            .then(data => { console.log(data); getSubjects() })
            .catch('Нет доступа к базе данных');
    }


    const quitQueue = () => {

        console.log(currentSubject.students.filter(item => item.name !== user.name))
        currentSubject.students = currentSubject.students.filter(item => item.name !== user.name)

        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                id: currentSubject.id,
                subject: currentSubject.subject,
                students: currentSubject.students

            })

        };

        fetch(`${url}/${currentSubject.id}`, requestOptions)
            .then(response => response.json())
            .then(data => { console.log(data); getSubjects() })
            .catch('Нет доступа к базе данных');

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


    useEffect(() => {
        console.log('get subjects from db')
        getSubjects();
    }, [])






    return (
        <MainContext.Provider value={{
            visibleModal, setVisibleModal,
            value, setValue,
            subjects, setSubjects,
            addSubject, handleAdd,
            handleClose, url, getSubject, log,
            visibleSubject, setVisibleSubject, currentSubject,
            getSubjects, postSubject,
            deleteSubject, isLoading, setIsLoading, setCurrentSubject,
            isGetSubjects, setInQueue, quitQueue

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