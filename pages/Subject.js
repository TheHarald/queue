import React, { useContext } from 'react';
import { FlatList, Modal, StyleSheet, Text, View } from 'react-native';
import { Button } from '../components/Button';
import { ImageButton } from '../components/ImageButton';
import { QueuePerson } from '../components/QueuePerson';
import { COLORS } from '../constants/theme';
import { AppContext, MainContext } from '../context';


export const Subject = () => {

    const { visibleSubject, setVisibleSubject, currentSubject, isLoading, setInQueue } = useContext(MainContext)
    const { user } = useContext(AppContext)
    return (
        <Modal visible={visibleSubject} >
            <View style={styles.main} >

                {isLoading ?
                    <Text>Loadding</Text> :
                    <View >
                        <Text style={styles.text}
                            onPress={() => setVisibleSubject(false)}>
                            {currentSubject.subject}
                        </Text>

                        <FlatList
                            data={currentSubject.students}
                            renderItem={({ item }) => (
                                <QueuePerson student={item.name} position={item.position} />
                            )}
                            keyExtractor={(item) => item.position}

                        />
                        <View style={{ paddingTop: 8 }}>
                            {console.log(currentSubject.students.filter(item => item.name === user.name))}
                            <Button
                                title={'Встать в очередь'}
                                color={COLORS.blue}
                                onPress={setInQueue}
                            />
                        </View>

                    </View>
                }

            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({

    text: {
        fontSize: 20,
        alignSelf: 'center',
        marginTop: 18,
        marginBottom: 10

    },
    button: {
        alignSelf: 'center',
        marginTop: 10

    },
    main: {
        flex: 1,
        backgroundColor: COLORS.gray
    }

})

