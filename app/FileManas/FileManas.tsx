import { Button, StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import Card from "./Card.tsx";
import Image from "./Image.tsx";
import Video from "./Video.tsx";
import MyCamera from "./Camera.js";
import Files from "./Files";

const Stack = createNativeStackNavigator();

export default function FileManas() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="HomeScreen">
				<Stack.Screen
					name="HomeScreen"
					component={HomeScreen}
					options={{ headerShown: false }}
				/>
				<Stack.Screen name={Image.name} component={Image} />
				<Stack.Screen name={Video.name} component={Video} />
				<Stack.Screen name={MyCamera.name} component={MyCamera} />
				<Stack.Screen name="Files" component={Files} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
function HomeScreen({ navigation }: any) {
	return (
		<View style={styles.app}>
			<Text style={styles.header}>FileManas</Text>
			<Card
				title="Image"
				content="image"
				image=""
				onClick={() => {
					navigation.navigate(Image.name);
				}}
			/>
			<Card
				title="Video"
				content="video"
				image=""
				onClick={() => {
					navigation.navigate(Video.name);
				}}
			/>
			<Button
				title="Camera"
				onPress={() => navigation.navigate(MyCamera.name)}
			/>
			<Button title="Test" onPress={() => navigation.navigate("Files")} />
		</View>
	);
}

const styles = StyleSheet.create({
	app: {
		flex: 1,
		backgroundColor: "#111",
	},
	header: {
		color: "#aaa",
		fontSize: 40,
		fontWeight: "bold",
		backgroundColor: "#222",
		padding: 10,
		textAlign: "center",
	},
});
