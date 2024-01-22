import { SafeAreaView, Text, StatusBar, View } from "react-native";
// import FileManas from "./app/FileManas";
import ToDoApp from "./app/ToDoApp/Main";

export default function App() {
	return (
		<SafeAreaView style={{ flex: 1 }}>
			<ToDoApp />
		</SafeAreaView>
	);
}
