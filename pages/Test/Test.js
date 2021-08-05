import React, { useEffect, useState } from 'react';
import { Alert, StyleSheet, Text, View, TextInput, Image, FlatList } from 'react-native';

import { TestContext } from '../../context';
import { Rect } from './Rect';

export const Test = () => {

    const [count, setCount] = useState(0)
    const [value, setValue] = useState('')

    const log = () => {
        console.log('-------------objs---------')
    }

    const print = () => {
        console.log('value - ', value)
        setIsLoading(true)
    }


    const [subjects, setSubjects] = useState()
    const [isLoading, setIsLoading] = useState(true)


    const printData = async () => {

        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        }

        return fetch('http://192.168.0.107:3000/subjects', requestOptions)
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                setSubjects(json)
                setIsLoading(false)
            })
            .catch((error) => {
                console.error(error);
            });
    }


    const postSubject = () => {

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                id: Date.now().toString(),
                subject: 'title',
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
        console.log('aasds')

        fetch('http://192.168.0.107:3000/subjects', requestOptions)
            .then(response => response.json())
            .then(data => console.log(data));



    }




    const deleteSubject = async (id) => {

        const requestOptions = {
            method: 'DELETE'
        }
        console.log(`http://192.168.0.107:3000/subjects/${id}`)
        fetch(`http://192.168.0.107:3000/subjects/${id}`, requestOptions)
            .then(response => response.json())
            .then(data => console.log(data));

    }

    return (
        <TestContext.Provider value={{ log, print, value, printData, postSubject, deleteSubject }}>
            <View>
                <Rect />
                <Text style={{ color: 'black', alignSelf: 'center', paddingTop: 10 }}>data</Text>
                {isLoading ? <Text>Loadding</Text> :
                    <FlatList
                        data={subjects}
                        renderItem={({ item }) => (
                            <Text>{item.subject} {item.id}</Text>
                        )}
                        keyExtractor={(item) => item.id}

                    />}


            </View>
        </TestContext.Provider>

    )
}

const styles = StyleSheet.create({
    main: {

    }
})