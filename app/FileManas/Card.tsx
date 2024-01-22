import { StyleSheet, Text, View } from "react-native";

interface CardProps {
	title: string;
	content: string;
	image: string;
	onClick: () => void;
}

export default function Card({ title, content, image, onClick }: CardProps) {
	return (
		<View onTouchStart={onClick} style={styles.container}>
			<Text style={styles.title}>{title}</Text>
			<Text style={styles.content}>{content}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#666",
		margin: 10,
		padding: 10,
		borderColor: "black",
		borderWidth: 1,
		borderRadius: 10,
	},
	title: {
		fontSize: 40,
		fontWeight: "bold",
		color: "black",
	},
	content: {
		fontSize: 24,
		color: "#000",
	},
});
