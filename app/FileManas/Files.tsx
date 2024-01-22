import { useEffect, useState } from "react";
import {
	Text,
	View,
	FlatList,
	StyleSheet,
	TouchableOpacity,
} from "react-native";
import RNFS from "react-native-fs";
import checkPermission from "./checkPermission";

export default function Files() {
	const [files, setFiles] = useState<ReadDirItem[]>([]);
	const [path, setPath] = useState<string>(`${RNFS.DownloadDirectoryPath}`);

	useEffect(() => {
		checkPermission();
	}, []);

	useEffect(() => {
		RNFS.readDir(path)
			.then((content) => {
				setFiles(content);
				console.log(
					"Content: ",
					content.map((e) => e.path),
				);
				console.log("Path: ", path);
				console.log("===");
			})
			.catch(console.error);
	}, [path]);

	return (
		<View>
			<FlatList
				data={files}
				renderItem={({ item, index }) => (
					<Item item={item} index={index} onTouch={() => setPath(item.path)} />
				)}
				keyExtractor={(item) => item.path}
			/>
		</View>
	);
}

type ItemProps = {
	item: ReadDirItem;
	index: number;
	onTouch: () => void;
};

const Item = ({ item, index, onTouch }: ItemProps) => {
	return (
		<TouchableOpacity onPress={onTouch} style={style.item}>
			<View>
				<Text style={style.title}>{index}</Text>
				{/* The isFile method indicates whether the scanned content is a file or a folder*/}
				<Text style={style.title}>Name: {item.name}</Text>
				<Text style={style.title}>Path: {item.path}</Text>
				<Text style={style.title}>
					{item.isFile() ?? "It is a file"}
					{item.isDirectory() ?? "It is a folder"}
				</Text>
			</View>
		</TouchableOpacity>
	);
};

const style = StyleSheet.create({
	item: {
		backgroundColor: "#f9c2ff",
		padding: 20,
		marginVertical: 8,
		marginHorizontal: 16,
	},
	title: {
		fontSize: 24,
		color: "black",
	},
});
