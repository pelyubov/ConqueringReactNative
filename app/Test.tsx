import { useEffect, useRef, useState } from 'react';
import { Text, TextInput, View } from 'react-native';

export default function Test() {
    const [current_value, set_current_value] = useState('0');
    const inputRef = useRef(null);
    useEffect(() => {}, []);
    return (
        <View>
            <Text>Hello World</Text>
            <Text
                style={{
                    color: 'red',
                    fontSize: 20,
                    fontFamily: 'Arial',
                    backgroundColor: 'blue',
                }}
            >
                Nguyen Dang Anh dep trai vo dich vu tru
            </Text>
            <TextInput
                value={current_value}
                ref={inputRef}
                // onKeyPress={() => {
                //     set_current_value(inputRef.current ?? '');
                // }}
                onChangeText={t => set_current_value(t)}
            />
        </View>
    );
}
