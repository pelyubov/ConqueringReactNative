import { check, request, PERMISSIONS, RESULTS } from "react-native-permissions";

const checkPermissions = async () => {
	const readStoragePermission = await check(
		PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
	);
	if (readStoragePermission !== RESULTS.GRANTED) {
		const result = await request(PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE);
		if (result !== RESULTS.GRANTED) {
			console.warn("Read storage permission denied");
			return false;
		}
	}
	return true;
};

export default checkPermissions;
