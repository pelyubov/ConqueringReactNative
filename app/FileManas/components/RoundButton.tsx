import { Button } from "react-native";

type RoundButtonProps = {
	radius: number;
	handle: () => void;
};

export default function RoundButton({ radius, handle }: RoundButtonProps) {
	return (
		<Button
			title=""
			onPress={handle}
			styles={{
				color: "#fff",
			}}
		/>
	);
}
