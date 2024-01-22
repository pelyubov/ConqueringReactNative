import React, { useState } from 'react';
import {
    View,
    Text,
    FlatList,
    PanResponder,
    Animated,
    PanResponderGestureState,
} from 'react-native';

const DraggableFlatList = () => {
    const [data, setData] = useState([
        { key: 'item1', label: 'Item 1' },
        { key: 'item2', label: 'Item 2' },
        { key: 'item3', label: 'Item 3' },
        // Add more items as needed
    ]);

    const panResponder = React.useRef(
        PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onMoveShouldSetPanResponder: () => true,
            onPanResponderMove: Animated.event([null, { dx: 0, dy: 0 }]),
            onPanResponderRelease: (e, gesture) => {
                // Implement logic to handle the release of the item
                // You can update the order of items in the data array
                const draggedIndex = findDraggedIndex(gesture);
                if (draggedIndex !== -1) {
                    const newData = [...data];
                    const item = newData.splice(draggedIndex, 1)[0];
                    newData.splice(draggedIndex + gesture.dy / 100, 0, item); // Adjust the division factor based on your needs
                    setData(newData);
                }
            },
        }),
    ).current;

    const findDraggedIndex = (gesture) => {
        const itemHeight = 50; // Adjust this based on your item height
        const draggedIndex = Math.floor(gesture.moveY / itemHeight);
        return draggedIndex;
    };

    const renderItem = ({ item }) => {
        return (
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: 16,
                    backgroundColor: 'white',
                    borderBottomWidth: 1,
                    borderBottomColor: 'lightgray',
                }}
            >
                <Text>{item.label}</Text>
            </View>
        );
    };

    return (
        <View {...panResponder.panHandlers}>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item => `item-${item.key}`}
                extraData={data}
            />
        </View>
    );
};

export default DraggableFlatList;
