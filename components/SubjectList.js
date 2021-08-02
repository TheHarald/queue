import React, { useContext, useState } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { COLORS } from '../constants/theme'
import { MainContext } from '../context';
import { QueueSubject } from './QueueSubject';

export const SubjectList = () => {

    const { subjects, deleteSubject } = useContext(MainContext)

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
        />
    )
}