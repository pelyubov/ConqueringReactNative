import { useContext, useReducer } from 'react';
import {
    FlatList,
    Text,
    TouchableHighlight,
    TouchableOpacity,
    View,
} from 'react-native';

import {
    Default as DefaultStyles,
    LatteStyleSheet,
    MochaStyleSheet,
    composeStyles,
} from './styles';

import SettingContext from './Settings';
import DraggableFlatList from './DragableFlatlist';

export default function TasksList() {
    const { theme } = useContext(SettingContext);
    const [tasks, dispatchTasks] = useReducer(taskReducer, [
        'Task 1',
        'Task 2',
        'Task 3',
    ]);
    return (
        <View
            style={
                theme === 'light'
                    ? LatteStyleSheet.container
                    : MochaStyleSheet.container
            }
        >
            <Text>TasksList</Text>
            <FlatList
                data={tasks}
                renderItem={({ item }) => <Task name={item} />}
                keyExtractor={task => task}
            />
            <DraggableFlatList />
        </View>
    );
}

function Task({ name }: { name: string }) {
    const { theme } = useContext(SettingContext);
    return (
        <View>
            <TouchableHighlight>
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
            </TouchableHighlight>
        </View>
    );
}

function taskReducer(state: any, action: string) {
    return state;
}
