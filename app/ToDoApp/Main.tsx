import { useState } from 'react';
import { StatusBar, Text, View, useColorScheme, Switch } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SettingContext, { Settings } from './components/Settings';
import TasksList from './components/TasksList';

import Button from './components/Button';
import { Latte, Mocha } from './components/styles';
import AddTask from './components/AddTask';

const Stack = createNativeStackNavigator();

export default () => {
    const isDarkMode = useColorScheme() === 'dark';
    const [theme, setTheme] = useState('light');
    const [visibleSetting, setVisibleSetting] = useState<boolean>(false);
    const [visibleAddTask, setVisibleAddTask] = useState<boolean>(false);
    const [statusBarHidden, setStatusBarHidden] = useState(false);

    return (
        <View style={{ flex: 1 }}>
            <StatusBar
                animated
                barStyle={isDarkMode ? 'dark-content' : 'light-content'}
                hidden={statusBarHidden}
            />
            <SettingContext.Provider
                value={{
                    visibleSetting: visibleSetting,
                    setVisibleSetting: setVisibleSetting,
                    visibleAddTask: visibleAddTask,
                    setVisibleAddTask: setVisibleAddTask,
                    theme: theme,
                    setTheme: setTheme,
                }}
            >
                <NavigationContainer>
                    <Stack.Navigator initialRouteName="TasksList">
                        <Stack.Screen
                            name="Tasks List the Terrible"
                            component={TasksList}
                            options={{
                                headerTitleStyle: {
                                    color: 'green',
                                    fontSize: 24,
                                    fontWeight: 'bold',
                                    fontFamily: 'monospace',
                                },
                                headerStyle: {
                                    backgroundColor: '#ddd',
                                },
                                animation: 'fade',
                            }}
                        />
                        <Stack.Screen
                            component={AddTask}
                            name="AddTask"
                            options={{
                                animation: 'fade',
                                headerRight: () => (
                                    <Button
                                        onPress={() =>
                                            setVisibleAddTask(!visibleAddTask)
                                        }
                                        title="Add"
                                    />
                                ),
                            }}
                        />
                    </Stack.Navigator>
                </NavigationContainer>

                <View
                    style={{
                        bottom: 0,
                        left: 0,
                        right: 0,
                        width: '100%',
                        height: '10%',
                        flexDirection: 'row',
                        shadowRadius: 10,
                        backgroundColor:
                            theme === 'light' ? Mocha.Base : Latte.Base,
                    }}
                ></View>
            </SettingContext.Provider>
        </View>
    );
};
