import { Text, TextInput, View, Button } from 'react-native';
import { useContext, useState } from 'react';
import RNFS from 'react-native-fs';
import {
    Default as DefaultStyles,
    LatteStyleSheet,
    MochaStyleSheet,
    composeStyles,
} from './styles';
import SettingContext, { Settings } from './Settings';

export default function AddTask() {
    const { visibleSetting, setVisibleSetting, theme, setTheme } =
        useContext(SettingContext);
    const [text, setText] = useState<string>('');

    return (
        <View
            style={
                theme === 'light'
                    ? LatteStyleSheet.container
                    : MochaStyleSheet.container
            }
        >
            <Settings />
            <Text
                style={composeStyles(
                    DefaultStyles.text,
                    { fontSize: 50 },
                    theme === 'light'
                        ? LatteStyleSheet.text
                        : MochaStyleSheet.text,
                )}
            >
                To-do App
            </Text>
            <TextInput
                style={composeStyles(
                    DefaultStyles.textInput,
                    theme === 'light'
                        ? LatteStyleSheet.textInput
                        : MochaStyleSheet.textInput,
                )}
                placeholder="Add task..."
                multiline
                onChange={e => setText(e.nativeEvent.text)}
                value={text}
            />
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
                    onPress={() => openFolder(RNFS.DownloadDirectoryPath)}
                    title="Open Folder"
                />
                <Button
                    onPress={() =>
                        setTheme(theme === 'light' ? 'dark' : 'light')
                    }
                    title={`Switch ${theme}`}
                />
                <Button
                    onPress={() => setVisibleSetting(!visibleSetting)}
                    title="Settings"
                />
            </View>
        </View>
    );
}

function saveTask(text: string) {
    if (!text) {
        return;
    }
    RNFS.appendFile(`${RNFS.DownloadDirectoryPath}/ToDo.txt`, text, 'utf8');

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
