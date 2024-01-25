import { useContext, useReducer, useState } from 'react';
import { FlatList, Text, TextInput, View } from 'react-native';

import {
    Default as DefaultStyles,
    LatteStyleSheet,
    MochaStyleSheet,
    composeStyles,
} from './styles';

import SettingContext from './Settings';
import Button from './Button';

export default function TasksList({ navigation }: any) {
    const { theme } = useContext(SettingContext);
    const [task, setTask] = useState('');
    const [tasks, dispatchTasks] = useReducer(
        taskReducer,
        Array.from({
            length: 5,
        }).map((_, i) => `Task ${i + 1}`),
    );
    return (
        <View
            style={
                theme === 'light'
                    ? LatteStyleSheet.container
                    : MochaStyleSheet.container
            }
        >
            <FlatList
                data={tasks}
                renderItem={({ item }) => <Task name={item} />}
                keyExtractor={task => task}
                ItemSeparatorComponent={() => (
                    <View
                        style={{
                            height: 5,
                        }}
                    />
                )}
                ListEmptyComponent={() => (
                    <Text>No tasks found! Enjoy your short time!</Text>
                )}
                ListHeaderComponent={() => (
                    <Text
                        style={composeStyles(
                            DefaultStyles.text,
                            theme === 'light'
                                ? LatteStyleSheet.text
                                : MochaStyleSheet.text,
                            {
                                textAlign: 'left',
                                padding: 0,
                                paddingLeft: 10,
                                fontSize: 24,
                            },
                        )}
                    >
                        ▶️ Tasks:
                    </Text>
                )}
                ListHeaderComponentStyle={{ marginBottom: 5, marginTop: 5 }}
            />
            <View style={{ flexDirection: 'row', marginBottom: 5 }}>
                <TextInput
                    value={task}
                    onChangeText={setTask}
                    placeholder="Add task..."
                    style={{
                        flex: 1,
                        borderWidth: 1,
                        borderColor: 'black',
                        padding: 10,
                        marginLeft: 5,
                        marginRight: 5,
                        borderRadius: 10,
                        fontSize: 24,
                    }}
                />
                <Button
                    title="Add"
                    onPress={() => {
                        if (task) dispatchTasks('add');
                        else navigation.navigate('AddTask');
                    }}
                    styleBtn={{ marginRight: 5 }}
                    styleTitle={{ fontSize: 24 }}
                />
            </View>
        </View>
    );
}

function Task({ name }: { name: string }) {
    const { theme } = useContext(SettingContext);
    return (
        <View>
            <Text
                style={composeStyles(
                    DefaultStyles.text,
                    theme === 'light'
                        ? LatteStyleSheet.text
                        : MochaStyleSheet.text,
                    {
                        textAlign: 'left',
                        padding: 0,
                        paddingLeft: 10,
                    },
                )}
            >
                {name}
            </Text>
        </View>
    );
}

function taskReducer(state: any, action: string) {
    switch (action) {
        case 'add':
            return [...state, `Task ${state.length + 1}`];
        default:
            return state;
    }
}
