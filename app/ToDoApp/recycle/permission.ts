import { PermissionsAndroid } from 'react-native';

function PermissionCached() {
    PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.CAMERA)
        .then(result => {
            if (!result) {
                return PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.CAMERA,
                ).then(result => {
                    if (result === PermissionsAndroid.RESULTS.GRANTED) {
                        console.log('You can use the camera');
                    } else {
                        console.log('Camera permission denied');
                    }
                });
            }
        })
        .catch(console.error);
}
