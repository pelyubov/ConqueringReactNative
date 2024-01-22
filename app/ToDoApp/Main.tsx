import { useState } from 'react';
import { StatusBar, View, useColorScheme } from 'react-native';

import SettingContext from './Settings';
import TasksList from './TasksList';
import AddTask from './AddTask';
export default () => {
    const isDarkMode = useColorScheme() === 'dark';
    const [theme, setTheme] = useState('light');
    const [visibleSetting, setVisibleSetting] = useState<boolean>(false);
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
                    theme: theme,
                    setTheme: setTheme,
                }}
            >
                {/* <TasksList /> */}
                <AddTask />
            </SettingContext.Provider>
        </View>
    );
};
