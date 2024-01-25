import {
    createContext,
    Dispatch,
    SetStateAction,
    useContext,
    useState,
} from 'react';
import { Switch, Text, View, StyleSheet, Modal, Pressable } from 'react-native';
import RNFS from 'react-native-fs';
import { Default } from './styles';

export const settingPath = `${RNFS.CachesDirectoryPath}/ToDoApp/settings.json`;

const SettingContext = createContext({
    visibleSetting: false,
    setVisibleSetting: (() => {}) as Dispatch<SetStateAction<boolean>>,
    visibleAddTask: false,
    setVisibleAddTask: (() => {}) as Dispatch<SetStateAction<boolean>>,
    theme: 'light',
    setTheme: (() => {}) as Dispatch<SetStateAction<string>>,
});

export const Settings = () => {
    const { visibleSetting, setVisibleSetting } = useContext(SettingContext);

    return (
        <Modal
            visible={visibleSetting}
            animationType="fade"
            transparent={true}
            onRequestClose={() => {
                console.log('close');
            }}
        >
            <View style={Default.dialogContainer}>
                <View style={Default.diaglog}>
                    <Text style={{ color: 'black' }}>Settings</Text>
                    <Pressable
                        onPress={() => setVisibleSetting(!visibleSetting)}
                    >
                        <Text style={{ color: 'black' }}>Close</Text>
                    </Pressable>
                </View>
            </View>
        </Modal>
    );
};

export default SettingContext;
