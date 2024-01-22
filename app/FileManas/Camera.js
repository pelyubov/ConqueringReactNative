import { Text, View, StyleSheet } from "react-native";
import { Camera, useCameraDevice, useCameraPermission, PermissionScreen } from "react-native-vision-camera";
import { useRef } from "react";

export default function MyCamera() {
    const device = useCameraDevice("back");
    // const camera = useRef < Camera > (null);
    if (!device) {
        console.log("No camera found");
    } else {
        console.log("Camera found", device.position);
    }
    const { hasPermission, requestPermission } = useCameraPermission();
    while (!hasPermission) {
        requestPermission();
    }
    // camera.current.takePhoto()
    if (!hasPermission) {
        return <PermissionScreen onPress={requestPermission} />
    }
    return <Camera
        // ref={camera}
        style={StyleSheet.absoluteFill}
        device={device}
        isActive={true}
    />

}

const styles = StyleSheet.create({
    cameraContainer: {
        height: '100%'
    },
    msg: {
        fontSize: 24,
        color: "black",
    }
});
