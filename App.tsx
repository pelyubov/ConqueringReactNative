import { SafeAreaView, Text, StatusBar, View } from 'react-native';
// import FileManas from "./app/FileManas";
import ToDoApp from './app/ToDoApp/Main';
import Test from './app/Test';
export default function App() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ToDoApp />
            {/* <Test /> */}
        </SafeAreaView>
    );
}
