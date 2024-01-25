import { View, Text, Pressable, GestureResponderEvent } from 'react-native';

type ButtonProps = {
    title: string;
    styleTitle?: {};
    styleBtn?: {};
    onPress: (e: GestureResponderEvent) => void;
};

export default function Button({
    title,
    styleTitle,
    styleBtn,
    onPress,
}: ButtonProps) {
    return (
        <Pressable onPress={onPress}>
            <View
                style={{
                    width: 100,
                    height: 60,
                    backgroundColor: '#545',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderWidth: 1,
                    borderColor: '#000',
                    borderRadius: 10,
                    ...styleBtn,
                }}
            >
                <Text
                    style={{
                        color: '#f87',
                        fontSize: 18,
                        ...styleTitle,
                        fontFamily: 'monospace',
                    }}
                >
                    {title}
                </Text>
            </View>
        </Pressable>
    );
}
