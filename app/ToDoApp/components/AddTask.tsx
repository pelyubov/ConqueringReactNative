import { Text, TextInput, View } from 'react-native';
import { useContext, useState } from 'react';
import RNFS from 'react-native-fs';
import {
    Default as DefaultStyles,
    LatteStyleSheet,
    MochaStyleSheet,
    composeStyles,
} from './styles';

import Button from './Button';
import SettingContext, { Settings } from './Settings';

export default function AddTask() {
    const { visibleAddTask, theme } = useContext(SettingContext);
    const [text, setText] = useState<string>('');

    return (
        <View
            style={composeStyles(
                { flex: 1 },
                theme === 'light'
                    ? LatteStyleSheet.container
                    : MochaStyleSheet.container,
            )}
        >
            <View style={{ flexDirection: 'row' }}>
                <Text style={DefaultStyles.text}>Task name: </Text>
                <TextInput
                    style={composeStyles(
                        DefaultStyles.textInput,
                        theme === 'light'
                            ? LatteStyleSheet.textInput
                            : MochaStyleSheet.textInput,
                        {
                            flex: 1,
                        },
                    )}
                />
            </View>
            <View
                style={{
                    flex: 1,
                }}
            >
                <Text style={DefaultStyles.text}>Description</Text>
                <TextInput
                    style={composeStyles(
                        DefaultStyles.textInput,
                        DefaultStyles.largeTextInput,
                        theme === 'light'
                            ? LatteStyleSheet.textInput
                            : MochaStyleSheet.textInput,
                    )}
                    placeholder="Add task..."
                    multiline
                    onChange={e => setText(e.nativeEvent.text)}
                    value={text}
                />
            </View>
            <View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={DefaultStyles.text}>Date start:</Text>
                    {/* TODO: add canlender */}
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={DefaultStyles.text}>Date end:</Text>
                </View>
            </View>
            <View
                style={{
                    flexDirection: 'row',
                    margin: 10,
                    gap: 10,
                }}
            >
                <Button onPress={() => setText('')} title="Clear" />
                <Button onPress={() => saveTask(text)} title="Save" />
                <Button
                    onPress={() => openFolder(RNFS.CachesDirectoryPath)}
                    title="Open Folder"
                />
            </View>
        </View>
    );
}

function saveTask(text: string) {
    if (!text) {
        return;
    }

    console.log('Saving: ', text);
}

function openFolder(path: string) {
    RNFS.readDir(path)
        .then(content => {
            console.log(
                'Content: ',
                content.map(e => e.path),
            );
        })
        .catch(console.error);
}
