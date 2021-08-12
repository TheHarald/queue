import React, { useContext } from 'react';
import { FlatList, Modal, StyleSheet, Text, View, Platform } from 'react-native';
import { Button } from '../components/Button';
import { ImageButton } from '../components/ImageButton';
import { QueuePerson } from '../components/QueuePerson';
import { TextButton } from '../components/TextButton';
import { COLORS } from '../constants/theme';
import { AppContext, MainContext } from '../context';


export const Subject = () => {

    const { visibleSubject, setVisibleSubject, currentSubject, isLoading,
        setInQueue, quitQueue, isGetSubjects, getSubject } = useContext(MainContext)
    const { user } = useContext(AppContext)


    return (
        <Modal visible={visibleSubject}
            animationType='slide'>
            <View style={styles.main} >

                {isLoading ?
                    <Text>Loadding</Text> :
                    <View >

                        <View style={styles.header}>
                            <TextButton
                                title={'Назад'}
                                color={COLORS.blue}
                                onPress={() => setVisibleSubject(false)}
                            />

                            <Text style={styles.text}>
                                {currentSubject.subject.substring(0, 20) +
                                    (currentSubject.subject.length > 20 ? '...' : '')}
                            </Text>
                        </View>

                        <FlatList
                            data={currentSubject.students}
                            renderItem={({ item }) => (
                                <QueuePerson student={item.name} position={item.position} />
                            )}
                            keyExtractor={(item) => item.id}
                            refreshing={isGetSubjects}
                            onRefresh={() => getSubject(currentSubject.id)}

                        />
                        <View style={{ paddingTop: 8 }}>

                            {currentSubject.students.filter(item => item.name === user.name).length > 0 ?
                                <Button
                                    title={'Выйти из очереди'}
                                    color={COLORS.red}
                                    onPress={quitQueue}
                                /> :
                                <Button
                                    title={'Встать в очередь'}
                                    color={COLORS.blue}
                                    onPress={setInQueue}
                                />}

                        </View>

                    </View>
                }

            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({

    text: {
        fontSize: 17,
        alignSelf: 'center',
        marginLeft: 30

    },
    button: {
        alignSelf: 'center',
        marginTop: 10

    },
    main: {
        flex: 1,
        backgroundColor: COLORS.gray,
        paddingTop: Platform.OS === 'ios' ? 16 : 0
    },
    header: {
        marginTop: 18,
        marginBottom: 10,
        flexDirection: 'row',
        marginHorizontal: 8
    }

})

