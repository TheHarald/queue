import React, { useContext, useState } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { COLORS } from '../constants/theme'
import { MainContext } from '../context';
import { QueueSubject } from './QueueSubject';

export const SubjectList = () => {

    const { subjects, deleteSubject, getSubjects, isGetSubjects } = useContext(MainContext)

    return (
        <FlatList
            data={subjects}
            renderItem={({ item }) => (
                <QueueSubject
                    subject={item.subject}
                    students={item.students}
                    deleteSubject={deleteSubject}
                    id={item.id}
                />
            )}
            keyExtractor={(item) => item.id.toString()}
            ListEmptyComponent={<Text style={styles.text}>Пусто</Text>}
            refreshing={isGetSubjects}
            onRefresh={getSubjects}
        />
    )
}


const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        alignSelf: 'center',
        marginTop: 50

    }
})